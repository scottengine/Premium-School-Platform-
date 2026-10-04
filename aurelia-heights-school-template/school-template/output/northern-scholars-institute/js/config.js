/**
 * SCHOOL CONFIGURATION
 * ------------------------------------------------------------------
 * This is the ONE file a developer edits to rebrand this template for
 * a new school. index.html reads from window.SCHOOL_CONFIG at load
 * time (see main.js → renderFromConfig) to populate every dynamic
 * text node, contact detail, and content list.
 *
 * To duplicate for a new client:
 *   1. Copy the whole project folder.
 *   2. Replace every value below with the new school's real content.
 *   3. Replace files in /assets/images and /assets/logo.
 *   4. Update css/variables.css brand tokens (primary/accent/secondary).
 *   5. Update index.html <title>, meta description, and OG tags.
 * No other file should need to change for a standard rebrand.
 * ------------------------------------------------------------------
 */

window.SCHOOL_CONFIG = {
  identity: {
    name: "Northern Scholars Institute",
    shortName: "Northern Scholars",
    tagline: "Disciplined Minds, Distinguished Futures",
    founded: "2011",
    logoInitials: "AH",
  },

  contact: {
    phone: "+256 704 998 211",
    phoneDisplay: "+256 704 998 211",
    whatsapp: "+256704998211",
    email: "admissions@northernscholars.edu",
    address: "Gulu-Kampala Highway, Gulu, Uganda",
    hoursWeekday: "7:30 AM – 5:00 PM",
    hoursSaturday: "9:00 AM – 1:00 PM (term-time)",
  },

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },

  stats: [
    { figure: "25+", label: "Years of Excellence" },
    { figure: "1,500+", label: "Students Enrolled" },
    { figure: "98%", label: "Academic Success Rate" },
    { figure: "60+", label: "Qualified Educators" },
  ],

  leadership: {
    name: "Dr. Miriam Kaggwa",
    role: "Headteacher, Northern Scholars Institute",
    message:
      "Every child who walks through our gates carries a story still being written. Our role is to give that story structure — rigorous academics, genuine character, and the confidence to lead. This is a school built on high expectation and close attention, and I welcome you to see it for yourself.",
  },

  whoWeAre: {
    heading: "More Than a School. A Foundation for Life.",
    body:
      "Northern Scholars was founded on a simple premise: that rigorous academics and genuine character-building are not competing priorities. Our teachers plan around both. Classes stay small enough for a teacher to notice when a student is struggling before a report card does, and our pastoral structure means every child has an adult on campus who knows them well — not just their grades, but their week.",
    points: [
      { label: "Student-centred", detail: "Class sizes capped so teachers can track individual progress, not just cohort averages." },
      { label: "Character-built", detail: "Pastoral care and leadership programs run alongside the academic timetable, not after it." },
      { label: "Community-rooted", detail: "Three generations of Kampala families have now passed through Northern Scholars." },
    ],
  },

  differentiators: [
    { label: "Small-Group Learning", detail: "Core subjects capped at 22 students so every child is known, not just enrolled." },
    { label: "Science & Technology", detail: "Dedicated lab time from Primary 4 onward, not held back for Secondary." },
    { label: "Reading Culture", detail: "A whole-school reading hour, four mornings a week, no exceptions." },
    { label: "Leadership Development", detail: "Every senior student holds a real responsibility — house, club, or peer-mentoring role." },
    { label: "Creative Arts", detail: "Music, visual art and drama are timetabled subjects, not optional extras." },
    { label: "Digital Literacy", detail: "Applied computing and research skills embedded from Primary through A-Level." },
  ],

  facilities: [
    { name: "Modern Classrooms", note: "Bright, well-ventilated teaching spaces across every year group." },
    { name: "Science Laboratories", note: "Dedicated Biology, Chemistry and Physics labs with full practical equipment." },
    { name: "Library", note: "A quiet 6,000-volume reading room open before and after the school day." },
    { name: "ICT Centre", note: "Two computer labs supporting the digital literacy curriculum." },
    { name: "Sports Grounds", note: "Full-size athletics track, football pitch and outdoor courts." },
    { name: "Dining Hall", note: "A shared dining hall serving hot meals prepared on site." },
    { name: "Creative Studios", note: "Dedicated art, music and drama spaces with a small performance stage." },
  ],

  achievements: [
    { year: "2026", detail: "Regional Athletics Championship — 3rd consecutive title" },
    { year: "2025", detail: "94% of A-Level graduates placed into first-choice university programs" },
    { year: "2025", detail: "National Schools Debate Competition — Runners-up" },
    { year: "2024", detail: "7 alumni admitted to medical and engineering programs at Makerere University" },
    { year: "2023", detail: "Regional Science Fair — Best Overall Exhibition, 3 years running" },
  ],

  admissionsOfficeHours: "Admissions Office · Monday–Friday · 8:00 AM–4:30 PM",

  values: [
    {
      title: "Academic Excellence",
      description: "A rigorous, well-sequenced curriculum delivered by educators who track every student's progress closely.",
      icon: "academic",
    },
    {
      title: "Character & Leadership",
      description: "Structured pastoral care and student leadership programs that build responsibility and confidence.",
      icon: "character",
    },
    {
      title: "Holistic Development",
      description: "Competitive sport, the arts, and a wide range of clubs give every student a place to excel beyond the classroom.",
      icon: "holistic",
    },
    {
      title: "Future-Ready Learning",
      description: "Technology, design thinking and critical reasoning woven through the curriculum from an early age.",
      icon: "future",
    },
  ],

  programs: [
    {
      name: "Early Years",
      range: "Ages 3–5",
      description: "A play-led foundation building language, number sense and social confidence in small, closely supervised classes.",
    },
    {
      name: "Primary",
      range: "Ages 6–12",
      description: "A structured academic core paired with music, art and sport, taught by year-group specialist teachers.",
    },
    {
      name: "O-Level",
      range: "Ages 13–16",
      description: "The national curriculum delivered with exam-focused rigor, small class sizes and continuous assessment.",
    },
    {
      name: "A-Level",
      range: "Ages 17–18",
      description: "Specialized subject tracks with university and career counselling built into every term.",
    },
  ],

  campusLife: [
    { tag: "Sport", caption: "Inter-house athletics" },
    { tag: "Science", caption: "Chemistry laboratory" },
    { tag: "Arts", caption: "Studio & exhibition" },
    { tag: "Music", caption: "Ensemble rehearsal" },
    { tag: "Leadership", caption: "Student council" },
    { tag: "Clubs", caption: "Debate society" },
    { tag: "Events", caption: "Founders' Day" },
  ],

  news: [
    {
      category: "Academics",
      date: "2026-08-18",
      dateDisplay: "18 Aug 2026",
      title: "2026/27 Academic Year Opens with Record Enrolment",
      excerpt: "Northern Scholars welcomed its largest incoming class yet, with new science and design-technology facilities ready for first use.",
    },
    {
      category: "Sport",
      date: "2026-07-30",
      dateDisplay: "30 Jul 2026",
      title: "Senior Team Wins Regional Athletics Championship",
      excerpt: "Our senior athletics squad brought home the regional title for the third consecutive year, led by a record-breaking relay finish.",
    },
    {
      category: "Innovation",
      date: "2026-07-12",
      dateDisplay: "12 Jul 2026",
      title: "Student Science Exhibition Draws Industry Judges",
      excerpt: "Twenty-two student research projects were showcased to a panel of visiting engineers and scientists at this year's exhibition.",
    },
    {
      category: "Achievement",
      date: "2026-06-20",
      dateDisplay: "20 Jun 2026",
      title: "Alumna Admitted to Study Medicine at Makerere University",
      excerpt: "Class of 2025 graduate Patricia N. becomes the seventh Northern Scholars alumna admitted to a medical program in two years.",
    },
  ],

  testimonials: [
    {
      quote: "The attention to detail in how they track each child's progress is what convinced us to stay. My daughter is a different student than she was two years ago.",
      name: "Grace Nabirye",
      role: "Parent, Primary 5",
    },
    {
      quote: "Teachers here actually know your name and your weak subjects. That mattered more to my results than anything else.",
      name: "Daniel Okwir",
      role: "A-Level Student",
    },
    {
      quote: "I still use habits I built in the debate club here — preparation, listening, and how to disagree well. That foundation has carried into my career.",
      name: "Patricia Namutebi",
      role: "Alumna, Class of 2019",
    },
  ],

  admissionsPanel: [
    { label: "Application window", value: "Open year-round" },
    { label: "Next intake", value: "Jan 2027" },
    { label: "Response time", value: "3–5 business days" },
  ],

  /**
   * IMAGE MAP
   * ----------------------------------------------------------------
   * No photography ships with this demo — every slot below renders as
   * a generated placeholder (see css/components.css → .ph). When real
   * photography is available, this map is the checklist of what to
   * shoot/source and where each image is used; it's documentation
   * only (index.html isn't wired to read paths from here yet, since
   * doing so would require a build step this template deliberately
   * avoids — see README "Images").
   * ----------------------------------------------------------------
   */
  images: {
    hero: "assets/images/hero-campus.jpg",
    headteacher: "assets/images/headteacher-portrait.jpg",
    whoWeAre: "assets/images/campus-courtyard.jpg",
    academicsProgram: "assets/images/classroom-primary.jpg",
    campusLife: [
      "assets/images/sport-athletics.jpg",
      "assets/images/science-lab.jpg",
      "assets/images/arts-studio.jpg",
      "assets/images/music-ensemble.jpg",
      "assets/images/student-council.jpg",
      "assets/images/debate-club.jpg",
      "assets/images/founders-day.jpg",
    ],
    facilities: [
      "assets/images/facility-classroom.jpg",
      "assets/images/facility-lab.jpg",
      "assets/images/facility-library.jpg",
      "assets/images/facility-ict.jpg",
      "assets/images/facility-sports.jpg",
      "assets/images/facility-dining.jpg",
      "assets/images/facility-studio.jpg",
    ],
    gallery: [
      "assets/images/gallery-01-courtyard.jpg",
      "assets/images/gallery-02-classroom.jpg",
      "assets/images/gallery-03-basketball.jpg",
      "assets/images/gallery-04-foundersday.jpg",
      "assets/images/gallery-05-lab.jpg",
      "assets/images/gallery-06-library.jpg",
      "assets/images/gallery-07-artstudio.jpg",
      "assets/images/gallery-08-music.jpg",
      "assets/images/gallery-09-graduation.jpg",
    ],
  },
};
