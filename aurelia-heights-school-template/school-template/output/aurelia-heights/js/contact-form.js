/**
 * CONTACT FORM
 * There is no backend behind this form (see README "Contact form" —
 * intentional, per project scope). It validates required fields client-side
 * and, on a valid submit, opens the visitor's email client with a
 * pre-composed message via a mailto: link. It never claims a message was
 * "sent" — that only happens once the visitor actually sends the opened
 * email. This is disclosed inline near the submit button (see contact.html).
 *
 * To wire this to a real backend later: replace the mailto: construction in
 * handleSubmit() with a fetch() call to your form endpoint (Formspree,
 * Netlify Forms, a custom API, etc.), and only show the success state once
 * that call actually resolves.
 */
(function () {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const fields = Array.from(form.querySelectorAll("[data-field]"));

  function showStatus(message, kind) {
    status.textContent = message;
    status.className = "form-status form-status--" + kind;
    status.setAttribute("data-visible", "true");
  }

  function clearFieldError(field) {
    field.setAttribute("data-error", "false");
  }

  function setFieldError(field) {
    field.setAttribute("data-error", "true");
  }

  function validate() {
    let firstInvalid = null;
    fields.forEach((field) => {
      const input = field.querySelector("input, textarea");
      const isEmail = input.type === "email";
      const value = input.value.trim();
      const valid = input.hasAttribute("required")
        ? value.length > 0 && (!isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        : true;

      if (valid) {
        clearFieldError(field);
      } else {
        setFieldError(field);
        if (!firstInvalid) firstInvalid = input;
      }
    });
    return firstInvalid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.setAttribute("data-visible", "false");

    const firstInvalid = validate();
    if (firstInvalid) {
      showStatus("Please fill in the highlighted fields before sending.", "error");
      firstInvalid.focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const subjectLine = data.subject ? data.subject : "Website enquiry";
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      "",
      data.message,
    ].filter(Boolean).join("\n");

    const mailto = `mailto:admissions@aureliaheights.edu?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    // Genuinely opens the visitor's mail client with this pre-filled — it is
    // not sent until they hit send there themselves, which the inline note
    // in contact.html discloses.
    window.location.href = mailto;
    showStatus("Opening your email app with this message pre-filled — send it from there to reach us.", "info");
  });

  fields.forEach((field) => {
    const input = field.querySelector("input, textarea");
    input.addEventListener("input", () => clearFieldError(field));
  });
})();
