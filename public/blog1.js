console.log("🪄 blog1.js loaded with enhanced magic!");

// Shimmer effect on scroll
window.addEventListener("scroll", () => {
  const title = document.querySelector(".blog-hero h1");
  if (title) {
    title.classList.toggle("scrolled-glow", window.scrollY > 50);
  }
});

// ✨ Floating sparkles around CTA (with fade and drift)
function createSparkles(count = 20) {
  const cta = document.querySelector(".blog-cta");
  if (!cta) return;

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    sparkle.style.opacity = Math.random().toFixed(2);
    sparkle.style.transform = `scale(${0.5 + Math.random()})`;
    cta.appendChild(sparkle);
  }
}

// ✍️ Typewriter Effect with delay after complete
function typeWriter() {
  const tagline = document.querySelector(".tagline");
  if (!tagline) return;

  const text = tagline.getAttribute("data-text");
  let i = 0;
  tagline.textContent = "";

  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }

  type();
}

// 📊 Scroll Progress Bar
function updateScrollProgress() {
  const progressBar = document.querySelector("#scrollProgress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent.toFixed(1)}%`;
  });
}

// ✨ Initialize on DOM Load
window.addEventListener("DOMContentLoaded", () => {
  createSparkles();
  typeWriter();
  updateScrollProgress();
});
