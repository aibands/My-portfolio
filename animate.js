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


// about page - gallery
  const images = document.querySelectorAll('.carousel-images img');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let currentIndex = 0;

  function showImage(index) {
    const total = images.length;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    document.querySelector('.carousel-images').style.transform = `translateX(-${index * 100}%)`;
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showImage(currentIndex + 1);
    });
  }
 if (prevBtn) {
   prevBtn.addEventListener('click', () => {
     showImage(currentIndex - 1);
   });
 }

// wave
window.addEventListener("load", () => {
  const strokePath = document.getElementById('wave-stroke');
  if (!strokePath) return;

  const length = Math.ceil(strokePath.getTotalLength());
  strokePath.style.setProperty('--path-length', length);
  strokePath.style.strokeDasharray = length;
});


// hamburgur
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('overlay');
console.log(menuButton)
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
} else {
  console.warn("Menu elements not found!");
}
