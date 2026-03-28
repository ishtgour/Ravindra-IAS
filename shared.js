// shared.js — inject nav, footer, init common behaviours

function getPageName() {
  const path = window.location.pathname.split('/').pop() || 'home.html';
  return path;
}

function injectNav(activePage) {
  const pages = [
    { href: 'home.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'courses.html', label: 'Courses' },
    { href: 'resources.html', label: 'Resources' },
    { href: 'results.html', label: 'Results' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="navbar">
      <a href="home.html" class="nav-logo">
        <div class="nav-logo-icon">R</div>
        <span class="nav-logo-text">Ravindra <span>IAS</span></span>
      </a>
      <div class="nav-links">${links}</div>
      <div class="nav-actions">
        <button class="btn-ghost" onclick="window.location.href='contact.html'">Sign In</button>
        <button class="btn-primary" onclick="window.location.href='contact.html'">Enroll Now</button>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      ${mobileLinks}
      <a href="contact.html" class="enroll-mobile">Enroll Now →</a>
    </div>
  `);
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-logo">Ravindra <span>IAS</span></div>
            <p class="footer-desc">Empowering aspirants with structured knowledge, expert mentorship and a relentless focus on results since 2004.</p>
            <div class="footer-socials">
              <a href="#" class="social-btn">in</a>
              <a href="#" class="social-btn">▶</a>
              <a href="#" class="social-btn">✈</a>
              <a href="#" class="social-btn">📸</a>
            </div>
          </div>
          <div>
            <div class="footer-heading">Courses</div>
            <ul class="footer-links">
              <li><a href="courses.html">GS Foundation</a></li>
              <li><a href="courses.html">CSAT Mastery</a></li>
              <li><a href="courses.html">Optional Subjects</a></li>
              <li><a href="courses.html">Mains Answer Writing</a></li>
              <li><a href="courses.html">Interview Guidance</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-heading">Resources</div>
            <ul class="footer-links">
              <li><a href="resources.html">Daily Current Affairs</a></li>
              <li><a href="resources.html">UPSC Syllabus PDF</a></li>
              <li><a href="resources.html">Previous Year Papers</a></li>
              <li><a href="resources.html">Free E-Books</a></li>
              <li><a href="resources.html">Video Lectures</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-heading">Contact</div>
            <ul class="footer-links">
              <li>📍 Old Rajinder Nagar, Delhi</li>
              <li>📞 +91 98765 43210</li>
              <li>✉ info@ravindraias.com</li>
              <li>🕐 Mon–Sat: 9AM – 7PM</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2025 Ravindra IAS. All Rights Reserved.</span>
          <div style="display:flex;gap:24px">
            <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Privacy Policy</a>
            <a href="#" style="color:rgba(255,255,255,0.4);text-decoration:none">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  `);
}

function initCommon() {
  // Scroll navbar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));
  }
  // Hamburger
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      const isOpen = mob.style.display === 'flex';
      mob.style.display = isOpen ? 'none' : 'flex';
      setTimeout(() => mob.classList.toggle('open', !isOpen), 10);
    });
  }
  // Scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.sr').forEach(el => obs.observe(el));
}
