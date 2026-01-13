// FAQ

document.querySelectorAll(".box-title").forEach(title => {
  title.addEventListener("click", () => {
    const parentBox = title.parentElement;
    
    // close others box
    document.querySelectorAll(".about-box").forEach(box => {
      if (box !== parentBox) {
        box.classList.remove("active");
      }
    });
    
    parentBox.classList.toggle("active");
  });
});

// close overlay when load new page
window.addEventListener('load', () => {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) menuToggle.checked = false; 
  });

// SideNav

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidenav a");

// Highlight on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
sections.forEach((section) => observer.observe(section));

// Highlight on click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((lnk) => lnk.classList.remove("active"));
    link.classList.add("active");
  });
});


// hamburgur
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('overlay');

if (menuButton && closeButton && overlay) {
  menuButton.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });

  // Close menu when clicking a link inside the overlay
  const overlayLinks = overlay.querySelectorAll('a');
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  });
} else {
  console.warn("Menu elements not found!");
}

// fadein
  const section = document.querySelectorAll('.fade-in-section');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9; // 90% of viewport

    section.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
      else {
        section.classList.remove('visible');
      }
    });
  }

  // Run on scroll and on page load
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);





