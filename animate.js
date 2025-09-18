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