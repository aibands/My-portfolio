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

