// slider.js - Auto-looping Image Slider Logic

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    if (!slider) return;
  
    let scrollAmount = 1.5; // speed of scroll
  
    function autoScroll() {
      slider.scrollLeft += scrollAmount;
  
      // Reset scroll to beginning when reaching the end
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
  
      requestAnimationFrame(autoScroll);
    }
  
    autoScroll();
  });
  