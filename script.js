/* =====================================================
   Arafat Khan — Portfolio | script.js
   Real GitHub data · animations · WhatsApp
   ===================================================== */
"use strict";

/* ---------- CONSTANTS: Real data from GitHub analysis ---------- */
const GH_USER = "arafatkhan";
const GH_USER_URL = "https://github.com/arafatkhan";
const GH_PAGES = "https://arafatkhan.github.io";
const WHATSAPP = "8801712345678"; // <-- replace with your real WhatsApp number (country code + number, no +)

/* ---------- LIVE SITES (GitHub Pages detected) ---------- */
const LIVE_SITES = [
  { name: "Arafat (Main Blog)", repo: "Arafat", url: `${GH_PAGES}/Arafat/`, desc: "Personal blog & central hub — build for @arafatkhan" },
  { name: "CosmicDental", repo: "CosmicDental", url: `${GH_PAGES}/CosmicDental/`, desc: "Dental clinic website" },
  { name: "kidssteps", repo: "kidssteps", url: `${GH_PAGES}/kidssteps/`, desc: "Kids / education focused site" },
  { name: "amdadul-law-firm", repo: "amdadul-law-firm", url: `${GH_PAGES}/amdadul-law-firm/`, desc: "Legal firm platform" },
  { name: "Hafez-Advocate-Kamal-Uddin", repo: "Hafez-Advocate-Kamal-Uddin", url: `${GH_PAGES}/Hafez-Advocate-Kamal-Uddin/`, desc: "Advocate profile site" },
  { name: "Advocate-Sarowar", repo: "Advocate-Sarowar", url: `${GH_PAGES}/Advocate-Sarowar/`, desc: "Lawyer landing page" },
  { name: "drasaduzzaman", repo: "drasaduzzaman", url: `${GH_PAGES}/drasaduzzaman/`, desc: "Doctor profile website" },
  { name: "handaconsultancy", repo: "handaconsultancy", url: `${GH_PAGES}/handaconsultancy/`, desc: "Consultancy business site" },
  { name: "talukder-ict-invoice-generator", repo: "talukder-ict-invoice-generator", url: `${GH_PAGES}/talukder-ict-invoice-generator/`, desc: "Invoice generator tool" },
  { name: "Tangail-doctors", repo: "Tangail-doctors", url: `${GH_PAGES}/Tangail-doctors/`, desc: "Tangail doctor directory" },
  { name: "al-harmain", repo: "al-harmain", url: `${GH_PAGES}/al-harmain/`, desc: "Business / brand site" },
  { name: "advocate", repo: "advocate", url: `${GH_PAGES}/advocate/`, desc: "Advocacy / profile site" },
  { name: "restaurantthree", repo: "restauranthree", url: `${GH_PAGES}/restauranthree/`, desc: "Restaurant landing page" },
  { name: "restauranttwo", repo: "restauranttwo", url: `${GH_PAGES}/restauranttwo/`, desc: "Restaurant menu site" },
  { name: "restaurant", repo: "restaurant", url: `${GH_PAGES}/restaurant/`, desc: "Food service page" },
  { name: "Panasonic-MJ-CB800-2Ltr-", repo: "Panasonic-MJ-CB800-2Ltr-", url: `${GH_PAGES}/Panasonic-MJ-CB800-2Ltr-/`, desc: "Product showcase page" },
  { name: "simple-calculator", repo: "simple-calculator", url: `${GH_PAGES}/simple-calculator/`, desc: "Interactive calculator" },
  { name: "ecommerce", repo: "ecommerce", url: `${GH_PAGES}/ecommerce/`, desc: "E-commerce storefront" },
  { name: "cuda", repo: "cuda", url: `${GH_PAGES}/cuda/`, desc: "Landing page / CUDA" },
  { name: "stickyNavigation", repo: "stickyNavigation", url: `${GH_PAGES}/stickyNavigation/`, desc: "Sticky nav demo" },
  { name: "something", repo: "something", url: `${GH_PAGES}/something/`, desc: "Experimental page" }
];

/* ---------- Featured projects (from repo analysis) ---------- */
const PROJECTS = [
  {
    name: "Tangail Doctors", cat: "python", lang: "Python · Django", 
    icon: "fa-stethoscope", color: "#22d3ee",
    desc: "Doctor information platform built with Django & PostgreSQL — collects real doctor data and solves a local accessibility problem.",
    gh: `${GH_USER_URL}/Tangail-doctors-python`, live: `${GH_PAGES}/Tangail-doctors/`, tags: ["Django", "PostgreSQL", "Python"]
  },
  {
    name: "Project Management Tool", cat: "python", lang: "Python",
    icon: "fa-tasks", color: "#6c5ce7",
    desc: "A project management application with a Python backend — plan, track, and organise work in one place.",
    gh: `${GH_USER_URL}/project-management-tool`, live: null, tags: ["Python", "Backend", "Tools"]
  },
  {
    name: "Invoice Generator", cat: "js", lang: "JavaScript",
    icon: "fa-file-invoice", color: "#a855f7",
    desc: "ICT invoice generator that quickly produces clean, printable invoices — deployed live.",
    gh: `${GH_USER_URL}/talukder-ict-invoice-generator`, live: `${GH_PAGES}/talukder-ict-invoice-generator/`, tags: ["JavaScript", "Invoice", "Live"]
  },
  {
    name: "Memory Card Game", cat: "js", lang: "JavaScript",
    icon: "fa-cards", color: "#f66c9f",
    desc: "A beautiful memory card game with a modern UI and interactive gameplay.",
    gh: `${GH_USER_URL}/memory-card-game`, live: null, tags: ["JavaScript", "Game", "UI"]
  },
  {
    name: "Doctor Appointments", cat: "python", lang: "Python",
    icon: "fa-calendar-check", color: "#22d3ee",
    desc: "Doctor appointment booking system built with Python — streamline patient scheduling.",
    gh: `${GH_USER_URL}/doctor-appoinment`, live: null, tags: ["Python", "Flask", "Backend"]
  },
  {
    name: "Custom MVC Framework", cat: "php", lang: "PHP",
    icon: "fa-layer-group", color: "#ff7b72",
    desc: "My own MVC framework experiment in PHP — building a solid foundation from scratch.",
    gh: `${GH_USER_URL}/mvcframwork`, live: null, tags: ["PHP", "MVC", "OOP"]
  },
  {
    name: "E-commerce Store", cat: "web", lang: "HTML · JS",
    icon: "fa-cart-shopping", color: "#6c5ce7",
    desc: "Full e-commerce storefront — products grid, layout and shopping experience, deployed on GitHub Pages.",
    gh: `${GH_USER_URL}/ecommerce`, live: `${GH_PAGES}/ecommerce/`, tags: ["HTML", "E-commerce", "Live"]
  },
  {
    name: "CosmicDental", cat: "web", lang: "HTML · CSS",
    icon: "fa-tooth", color: "#a855f7",
    desc: "Modern dental clinic website — clean aesthetic and service presentation.",
    gh: `${GH_USER_URL}/CosmicDental`, live: `${GH_PAGES}/CosmicDental/`, tags: ["HTML", "CSS", "Live"]
  },
  {
    name: "Advocate Sites", cat: "web", lang: "HTML",
    icon: "fa-scale-balanced", color: "#22d3ee",
    desc: "Professional profile sites for legal professionals — Hafez Advocate & Advocate Sarowar, both live.",
    gh: `${GH_USER_URL}/Advocate-Sarowar`, live: `${GH_PAGES}/Advocate-Sarowar/`, tags: ["HTML", "Profile", "Live"]
  },
  {
    name: "Kids Steps", cat: "web", lang: "HTML · CSS",
    icon: "fa-child-reaching", color: "#f66c9f",
    desc: "A friendly kids-focused website — playful and engaging, deployed live.",
    gh: `${GH_USER_URL}/kidssteps`, live: `${GH_PAGES}/kidssteps/`, tags: ["HTML", "Kids", "Live"]
  },
  {
    name: "PHP CRUD (OOP)", cat: "php", lang: "PHP",
    icon: "fa-database", color: "#ff7b72",
    desc: "Basic CRUD operation built with PDO and object-oriented PHP — clean data layer.",
    gh: `${GH_USER_URL}/crud`, live: null, tags: ["PHP", "PDO", "CRUD"]
  },
  {
    name: "Business Sites", cat: "web", lang: "HTML",
    icon: "fa-briefcase", color: "#a855f7",
    desc: "Bespoke business, consultancy & brand sites — Handa Consultancy, Al-Harmain & more, all live.",
    gh: `${GH_USER_URL}/handaconsultancy`, live: `${GH_PAGES}/handaconsultancy/`, tags: ["Business", "HTML", "Live"]
  }
];

/* ---------- Skills (mapped from real repo language detection) ---------- */
const SKILLS = [
  { name: "HTML & CSS", icon: "fa-code", pct: 95, note: "22+ live sites" },
  { name: "JavaScript", icon: "fa-brands fa-js", pct: 85, note: "Games, tools, UI" },
  { name: "Python (Django/Flask)", icon: "fa-terminal", pct: 80, note: "Backend & apps" },
  { name: "PHP & MySQL", icon: "fa-database", pct: 75, note: "MVC, CRUD, OOP" },
  { name: "Backend & APIs", icon: "fa-server", pct: 72, note: "REST, PostgreSQL" },
  { name: "Deployment", icon: "fa-cloud-arrow-up", pct: 80, note: "GitHub Pages, Vercel" }
];

/* ---------- Smooth scroll to WhatsApp ---------- */
function getWaLink() {
  const n = WHATSAPP.replace(/[^0-9]/g, "");
  return `https://wa.me/${n}?text=Hi%20Arafat,%20I%20saw%20your%20portfolio!`;
}
document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  el.addEventListener("click", (e) => { e.preventDefault(); window.open(getWaLink(), "_blank"); });
});
// fix: use window.open (typo-safe)
window.openWhatsApp = () => { window.open(getWaLink(), "_blank"); };

/* =====================================================
   PARTICLE SYSTEM
   ===================================================== */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, parts = [];
  const COUNT = Math.min(80, Math.floor(innerWidth / 20));
  function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
  resize();
  class P {
    constructor() { this.reset(); }
    reset() { this.x = Math.random() * W; this.y = Math.random() * H; this.r = Math.random() * 2.2 + 0.6; this.sx = (Math.random() - 0.5) * 0.5; this.sy = (Math.random() - 0.5) * 0.5; this.a = Math.random() * 0.5 + 0.1; }
    step() { this.x += this.sx; this.y += this.sy; if (this.x < -10) this.x = W + 10; if (this.x > W + 10) this.x = -10; if (this.y < -10) this.y = H + 10; if (this.y > H + 10) this.y = -10; }
    draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(108,92,231,${this.a})`; ctx.fill(); }
  }
  for (let i = 0; i < COUNT; i++) parts.push(new P());
  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) { p.step(); p.draw(); }
    // connections
    for (let i = 0; i < parts.length; i++) {
      for (let j = i + 1; j < parts.length; j++) {
        const dx = parts[i].x - parts[j].x, dy = parts[i].y - parts[j].y, d = Math.hypot(dx, dy);
        if (d < 110) { ctx.strokeStyle = `rgba(108,92,231,${0.18 * (1 - d / 110)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(parts[i].x, parts[i].y); ctx.lineTo(parts[j].x, parts[j].y); ctx.stroke(); }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
  addEventListener("resize", resize);
}
initParticles();

/* =====================================================
   TYPED / ROTATING TEXT
   ===================================================== */
const ROLES = ["Web Developer", "AI Enthusiast", "Frontend Designer", "Backend Builder", "Open Source Contributor"];
function initRotator() {
  const el = document.getElementById("rotator");
  if (!el) return;
  let wordIdx = 0, charIdx = 0, deleting = false;
  (function type() {
    const word = ROLES[wordIdx];
    el.textContent = word.slice(0, charIdx) + (deleting ? "" : "|");
    if (!deleting && charIdx < word.length) { charIdx++; setTimeout(type, 70); }
    else if (!deleting) { deleting = true; setTimeout(type, 1400); }
    else if (charIdx > 0) { charIdx--; setTimeout(type, 45); }
    else { deleting = false; wordIdx = (wordIdx + 1) % ROLES.length; setTimeout(type, 300); }
  })();
}
initRotator();

/* =====================================================
   COUNTERS (hero metrics)
   ===================================================== */
function initCounters() {
  const targets = { mRepos: 44, mLive: 22, mLang: 6, mCommits: 300 };
  const els = { mRepos: document.getElementById("mRepos"), mLive: document.getElementById("mLive"), mLang: document.getElementById("mLang"), mCommits: document.getElementById("mCommits") };
  new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      animateCount("mRepos", 44);
      animateCount("mLive", 22);
      animateCount("mLang", 6);
      animateCount("mCommits", 300, true);
      observer.disconnect();
    }
  })).observe(document.getElementById("mRepos"));
  function animateCount(id, to, roman = false) {
    const el = els[id]; if (!el) return;
    const dur = 1600, start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(to * eased);
      el.textContent = roman ? romanize(val) : val.toLocaleString();
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function romanize(n) { const map = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]; let s = ""; for (const [v, r] of map) { while (n >= v) { s += r; n -= v; } } return s; }
}
initCounters();

/* =====================================================
   PROJECTS RENDER + FILTER
   ===================================================== */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  const icons = { "fa-brands fa-js": "fa-brands fa-js", "fa-brands fa-python": "fa-brands fa-python", "fa-brands fa-php": "fa-brands fa-php" };
  const cards = PROJECTS.map((p) => {
    const liveBtn = p.live ? `<a class="demo" href="${p.live}" target="_blank"><i class="fas fa-eye"></i> Live</a>` : "";
    return `
    <article class="project-card ${p.cat}" data-cat="${p.cat}" style="--thumb-bg:${p.color}">
      <div class="project-thumb">
        ${p.live ? `<span class="project-live-tag"><i class="fas fa-circle-check"></i> LIVE</span>` : ""}
        <i class="fas ${p.icon}"></i>
        <span class="project-lang">${p.lang}</span>
      </div>
      <div class="project-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="project-meta">${p.tags.map((t) => `<span>#${t}</span>`).join("")}</div>
        <div class="project-actions">
          <a href="${p.gh}" target="_blank"><i class="fab fa-github"></i> Code</a>
          ${liveBtn}
        </div>
      </div>
    </article>`;
  }).join(" ");
  grid.innerHTML = cards;

  // filter toggle
  const filterBar = document.getElementById("projectFilter");
  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest("button"); if (!btn) return;
      [...filterBar.querySelectorAll("button")].forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      [...grid.querySelectorAll(".project-card")].forEach((card) => {
        card.style.display = (f === "all" || card.dataset.cat === f) ? "" : "none";
      });
    });
  }
}
renderProjects();

/* =====================================================
   LIVE SITES RENDER
   ===================================================== */
function renderLive() {
  const strip = document.getElementById("liveStrip");
  if (!strip) return;
  const slug = (s) => s.toLowerCase().replace(/\s+/g, "-");
  strip.innerHTML = LIVE_SITES.map((s) => `
    <a class="live-card reveal" href="${s.url}" target="_blank">
      <div class="live-head"><i class="fas fa-globe"></i><h4>${s.name}</h4></div>
      <span class="live-url">${s.url.replace("https://", "")}</span>
      <span class="live-desc">${s.desc}</span>
      <i class="fas fa-arrow-up-right-from-square live-go"></i>
    </a>`).join("");
}
renderLive();

/* =====================================================
   SKILLS RENDER + BARS
   ===================================================== */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map((s) => `
    <div class="skill-card reveal">
      <div class="skill-card-head">
        <i class="fas ${s.icon}"></i>
        <h3>${s.name}</h3>
      </div>
      <p style="color:var(--text-faint);font-size:.85rem;margin-top:.4rem">${s.note}</p>
      <div class="skill-bar-wrap" style="position:relative">
        <div class="skill-bar-row"><span></span><span class="skill-pct">${s.pct}%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" data-w="${s.pct}"></div></div>
      </div>
    </div>`).join("");
  // animate bars on view
  new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      [...en.target.querySelectorAll(".skill-bar-fill")].forEach((f) => { f.style.width = f.dataset.w + "%"; });
      observer.unobserve(en.target);
    }
  }), { threshold: 0.3 }).observe([...grid.querySelectorAll(".skill-card")]);
}
renderSkills();

/* =====================================================
   REVEAL ON SCROLL
   ===================================================== */
function initReveal() {
  const els = document.querySelectorAll(".reveal, .about-card, .project-card, .live-card, .skill-card, .contact-item");
  const obs = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
  }), { threshold: 0.12 });
  els.forEach((el) => { el.classList.add("reveal"); obs.observe(el); });
}
initReveal();

/* =====================================================
   NAVBAR / SCROLL / HAMBURGER
   ===================================================== */
function initNav() {
  const navbar = document.getElementById("navbar");
  const progress = document.getElementById("scrollProgress");
  addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", scrollY > 30);
    const docH = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (scrollY / Math.max(docH, 1) * 100) + "%";
  });
  // active link highlight
  const sections = [...document.querySelectorAll("section")];
  const links = [...document.querySelectorAll(".nav-links a:not(.nav-cta)")];
  const obs = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      links.forEach((l) => l.classList.remove("active"));
      const id = en.target.id;
      const match = links.find((l) => l.getAttribute("href") === "#" + id);
      if (match) match.classList.add("active");
    }
  }), { threshold: 0.4 });
  sections.forEach((s) => obs.observe(s));

  // hamburger
  const ham = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  ham.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    ham.classList.toggle("open", open);
    ham.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a") && !e.target.closest(".nav-cta")) {
      navLinks.classList.remove("open"); ham.classList.remove("open");
    }
  });
}
initNav();

/* =====================================================
   CURSOR GLOW
   ===================================================== */
const cursorGlow = document.getElementById("cursorGlow");
addEventListener("pointermove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
  cursorGlow.style.opacity = 1;
});
document.addEventListener("pointerleave", () => (cursorGlow.style.opacity = 0));

/* =====================================================
   FOOTER YEAR + CONTACT FORM (WhatsApp redirect)
   ===================================================== */
document.getElementById("year").textContent = new Date().getFullYear();
function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.querySelector("input[type=text]").value;
  window.open(`${getWaLink()}&text=${encodeURIComponent(`${name} via portfolio form`)}`, "_blank");
  return false;
}
window.handleSubmit = handleSubmit;