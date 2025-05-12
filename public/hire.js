console.log("✅ hire.js loaded!");

// 🌫️ Floating Smoke Particles
function createParticles(count = 12) {
  const container = document.querySelector(".smoke-particles") || document.body;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.classList.add("particle");
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(p);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".smoke-particles")) {
    const layer = document.createElement("div");
    layer.className = "smoke-particles";
    document.querySelector(".magic-header")?.appendChild(layer);
  }
  createParticles();
});

// ✅ Toast Notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `custom-toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("visible"), 100);

  setTimeout(() => {
    toast.classList.remove("visible");
    toast.addEventListener("transitionend", () => toast.remove());
  }, 4000);
}

// ✉️ Hire Form Submission with Spinner
const form = document.querySelector(".hire-form");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const specialization = form.elements["specialization"].value.trim() || "N/A";
  const message = form.elements["project"].value.trim();
  const type = form.elements["collabType"].value || "General";
  const time = new Date().toLocaleString();

  const button = form.querySelector("button");
  button.disabled = true;
  const originalText = button.innerText;

  // Add spinner
  button.innerHTML = `<span class="spinner"></span> Sending...`;

  try {
    await emailjs.send("service_qhnq5jb", "template_aej0mbq", {
      name,
      email,
      specialization,
      message,
      type,
      time
    }, "6mbHxvGgypO2zAq7k");

    showToast("✅ Proposal sent! I’ll be in touch shortly.", "success");
    form.reset();
    button.innerText = "Send Proposal 💌";
  } catch (err) {
    console.error("EmailJS Error:", err);
    showToast("❌ Oops! Something went wrong. Please try again.", "error");
    button.innerText = "Try Again 💌";
  }

  button.disabled = false;
});
