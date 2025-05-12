// blog2.js
console.log("✨ blog2.js loaded – Let's add UI/UX magic!");

// Typewriter effect for subtitle
function typeWriterEffect() {
  const tagline = document.querySelector(".tagline");
  if (!tagline) return;

  const text = tagline.getAttribute("data-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      tagline.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }

  tagline.textContent = "";
  type();
}

// Scroll-based glow title
function glowTitleOnScroll() {
  const title = document.querySelector(".blog-hero h1");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      title.classList.add("scrolled-glow");
    } else {
      title.classList.remove("scrolled-glow");
    }
  });
}

// Scroll progress bar
function scrollProgressBar() {
  const bar = document.createElement("div");
  bar.id = "scroll-progress";
  document.body.prepend(bar);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    bar.style.width = `${scrollPercent}%`;
  });
}

// CTA Sparkle Magic ✨
function sparkleEffect(count = 25) {
  const cta = document.querySelector(".blog-cta");
  if (!cta) return;

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    cta.appendChild(sparkle);
  }
}

// Run all on DOM load
window.addEventListener("DOMContentLoaded", () => {
  typeWriterEffect();
  glowTitleOnScroll();
  scrollProgressBar();
  sparkleEffect();
});
