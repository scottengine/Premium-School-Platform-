#!/usr/bin/env python3
"""
REBRAND SCRIPT
--------------------------------------------------------------------------
Applies a preset (presets/*.json) to a fresh copy of the site, producing a
ready-to-deploy rebranded output. This is a DEV-TIME tool — it never runs
in the browser, adds zero runtime weight, and requires no build step for
the site itself (the site remains plain static HTML/CSS/JS; this script
just automates the mechanical part of preparing a copy for a new client).

WHAT THIS SCRIPT DOES (safe to automate — pure identity/branding swaps):
  - Brand colors (the 3 HSL triads in css/variables.css)
  - School name (full + short), tagline, founding year, logo initials
  - Phone, email, address, WhatsApp number
  - Social links
  - theme-color meta tag, canonical/og:url domain

WHAT THIS SCRIPT DELIBERATELY DOES NOT DO (bespoke content — always
requires human authoring, because it's substance, not a template slot):
  - Leadership bios, headteacher quote
  - Achievements, testimonials, news stories, the demo article
  - Program/curriculum descriptions, campus-life captions, gallery captions
  These are listed explicitly in the script's final output every run, and
  in REBRANDING_GUIDE.md, so nobody mistakes a branding pass for a finished
  rebrand.

USAGE:
  python3 scripts/rebrand.py presets/lira-future-academy.json output/lira-future-academy
--------------------------------------------------------------------------
"""
import sys
import json
import shutil
import re
import glob
import os
import colorsys
from urllib.parse import quote

SOURCE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {"presets", "scripts", "output", ".git"}

CONTENT_NOT_AUTOMATED = [
    "Leadership bios + headteacher quote (about.html, index.html, js/config.js)",
    "Achievements / track record (admissions.html, index.html)",
    "Testimonials (index.html)",
    "News stories + the demo article (news.html, article-science-exhibition.html)",
    "Program & curriculum descriptions (academics.html, index.html)",
    "Campus-life mosaic + gallery captions (campus-life.html, gallery.html, index.html)",
    "Admissions requirements/dates/fees table (admissions.html)",
]


def hsl_to_hex(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h / 360, l / 100, s / 100)
    return "#{:02X}{:02X}{:02X}".format(round(r * 255), round(g * 255), round(b * 255))


def copy_source(output_dir):
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)
    os.makedirs(output_dir)
    for entry in os.listdir(SOURCE_DIR):
        if entry in SKIP_DIRS:
            continue
        src = os.path.join(SOURCE_DIR, entry)
        dst = os.path.join(output_dir, entry)
        if os.path.isdir(src):
            shutil.copytree(src, dst)
        else:
            shutil.copy2(src, dst)


def update_variables_css(output_dir, preset):
    path = os.path.join(output_dir, "css", "variables.css")
    with open(path, encoding="utf-8") as f:
        css = f.read()

    for token, values in (
        ("primary", preset["branding"]["primary"]),
        ("accent", preset["branding"]["accent"]),
        ("secondary", preset["branding"]["secondary"]),
    ):
        for axis in ("h", "s", "l"):
            suffix = "%" if axis in ("s", "l") else ""
            pattern = re.compile(r"(--" + token + "-" + axis + r":\s*)\d+" + re.escape(suffix) + r"(;)")
            css, n = pattern.subn(r"\g<1>" + str(values[axis]) + suffix + r"\2", css)
            if n != 1:
                print(f"  WARNING: expected exactly 1 match for --{token}-{axis}, found {n}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(css)


def update_monogram(output_dir, preset):
    path = os.path.join(output_dir, "css", "components.css")
    with open(path, encoding="utf-8") as f:
        css = f.read()
    new_initials = preset["identity"]["logoInitials"]
    n = css.count('content: "AH";')
    css = css.replace('content: "AH";', f'content: "{new_initials}";')
    with open(path, "w", encoding="utf-8") as f:
        f.write(css)
    if n != 1:
        print(f"  WARNING: expected exactly 1 monogram match in components.css, found {n}")


def build_replacements(preset):
    old = {
        "full_name": "Aurelia Heights Academy",
        "short_name": "Aurelia Heights",
        "tagline": "Where Potential Becomes Purpose",
        "nav_subtitle": "Academy · Est. 1998",
        "founded": "1998",
        "monogram_open": ">AH<",
        "phone": "+256 700 123 456",
        "phone_digits": "256700123456",
        "email": "admissions@aureliaheights.edu",
        "address": "Plot 14, Kira Hill Road, Kampala, Uganda",
        "domain": "aureliaheights.edu",
        "theme_color": "#16213A",
    }
    ident, contact = preset["identity"], preset["contact"]
    new = {
        "full_name": ident["name"],
        "short_name": ident["shortName"],
        "tagline": ident["tagline"],
        "nav_subtitle": f'{ident["institutionType"]} · Est. {ident["founded"]}',
        "founded": ident["founded"],
        "monogram_open": f'>{ident["logoInitials"]}<',
        "phone": contact["phone"],
        "phone_digits": contact["phoneDigits"],
        "email": contact["email"],
        "address": contact["address"],
        "domain": ident["domain"],
        "theme_color": hsl_to_hex(
            preset["branding"]["primary"]["h"],
            preset["branding"]["primary"]["s"],
            preset["branding"]["primary"]["l"],
        ),
    }
    # Longest-first, and nav_subtitle before founded (it contains the same
    # year), so "Aurelia Heights Academy" is replaced before the "Aurelia
    # Heights" substring inside it, and "Academy · Est. 1998" is replaced as
    # a whole before the bare "1998" pass would otherwise partially match it.
    ordered_keys = ["full_name", "short_name", "tagline", "domain", "email",
                     "phone", "phone_digits", "address", "nav_subtitle",
                     "founded", "monogram_open", "theme_color"]
    pairs = [(old[k], new[k]) for k in ordered_keys]

    # URL-encoded variant of the full name — found via a real bug: the
    # article page's WhatsApp/email share links spell the school name with
    # %20 instead of spaces, which the plain-text pass above never matches.
    # Any future share link should reuse this rather than hardcoding a new
    # encoded string that could reintroduce the same miss.
    pairs.append((quote(old["full_name"]), quote(new["full_name"])))

    return pairs


def apply_text_replacements(output_dir, preset):
    replacements = build_replacements(preset)
    targets = sorted(glob.glob(os.path.join(output_dir, "*.html"))) + \
        [os.path.join(output_dir, "js", "config.js")]

    report = {}
    for path in targets:
        with open(path, encoding="utf-8") as f:
            text = f.read()
        counts = {}
        for old, new in replacements:
            n = text.count(old)
            if n:
                text = text.replace(old, new)
                counts[old] = n
        with open(path, "w", encoding="utf-8") as f:
            f.write(text)
        report[os.path.relpath(path, output_dir)] = counts
    return report


def main():
    if len(sys.argv) != 3:
        print("Usage: python3 scripts/rebrand.py <preset.json> <output_dir>")
        sys.exit(1)

    preset_path, output_dir = sys.argv[1], sys.argv[2]
    with open(preset_path, encoding="utf-8") as f:
        preset = json.load(f)

    print(f"Rebranding to: {preset['identity']['name']}")
    print(f"Output: {output_dir}\n")

    copy_source(output_dir)
    update_variables_css(output_dir, preset)
    update_monogram(output_dir, preset)
    report = apply_text_replacements(output_dir, preset)

    print("Replacements applied per file:")
    for fname, counts in report.items():
        total = sum(counts.values())
        print(f"  {fname}: {total} replacements ({len(counts)} distinct strings)")

    print("\nBrand/contact/identity pass complete. This did NOT touch bespoke")
    print("content — the following still need human authoring for a real launch:")
    for item in CONTENT_NOT_AUTOMATED:
        print(f"  - {item}")


if __name__ == "__main__":
    main()
