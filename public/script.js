document.addEventListener("DOMContentLoaded", () => {
    // 🌐 Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 🧭 Navbar Shrink on Scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector(".sticky-nav");
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        navbar.style.top = scrollTop > lastScrollTop ? "-80px" : "0";
        lastScrollTop = scrollTop;
    });

    // ✨ Active Link Highlighting
    const sections = document.querySelectorAll("section");
    function highlightActiveLink() {
        let scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                document.querySelectorAll(".nav-links a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }
    window.addEventListener("scroll", highlightActiveLink);
    highlightActiveLink();

    // 🎉 Logo Click Confetti
    function launchConfetti() {
        const container = document.createElement("div");
        container.classList.add("confetti-container");
        document.body.appendChild(container);
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            container.appendChild(confetti);
        }
        setTimeout(() => container.remove(), 5000);
    }
    document.querySelector(".logo").addEventListener("click", launchConfetti);

    // ✍️ Typing Effect for Roles
    const roles = ["Frontend Developer", "UI/UX Designer", "Programmer", "Dreamer", "Creative Coder"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingSpan = document.querySelector(".typing-effect");

    function typeRole() {
        if (!typingSpan) return;
        const currentRole = roles[roleIndex];
        if (charIndex < currentRole.length) {
            typingSpan.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 100);
        } else {
            setTimeout(eraseRole, 2000);
        }
    }

    function eraseRole() {
        const currentText = typingSpan.textContent;
        if (currentText.length > 0) {
            typingSpan.textContent = currentText.substring(0, currentText.length - 1);
            setTimeout(eraseRole, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            charIndex = 0;
            setTimeout(typeRole, 500);
        }
    }

    typeRole();

    // ☁️ Smoke Effect
    function createSmoke() {
        const smokeContainer = document.querySelector(".smoke-container");
        for (let i = 0; i < 4; i++) {
            const smoke = document.createElement("div");
            smoke.classList.add("smoke");
            smoke.style.left = `${Math.random() * 80 + 10}%`;
            smoke.style.top = `${Math.random() * 60 + 10}%`;
            smoke.style.animationDuration = `${Math.random() * 5 + 6}s`;
            smokeContainer.appendChild(smoke);
        }
    }
    createSmoke();

    // 🔘 Button Ripple
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            this.appendChild(ripple);
            ripple.style.left = `${e.clientX - this.offsetLeft}px`;
            ripple.style.top = `${e.clientY - this.offsetTop}px`;
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // 🌗 Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // 👀 Reveal Sections on Scroll
    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // 🔢 Visitor Counter
    let visits = parseInt(localStorage.getItem("visits")) || 0;
    visits++;
    localStorage.setItem("visits", visits);
    const visitorCount = document.getElementById("visitor-count");
    let count = 0;
    const interval = setInterval(() => {
        if (visitorCount && count < visits) {
            count++;
            visitorCount.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 50);

    // 📱 Mobile Menu
    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.innerHTML = "☰";
    navbar.appendChild(menuButton);

    menuButton.addEventListener("click", () => {
        navbar.classList.toggle("expanded");
    });

    // 🔮 Navbar Hover Glow & Easter Egg
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            50% { transform: translateX(3px); }
            75% { transform: translateX(-3px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(styleSheet);

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.animation = "shake 0.4s ease-in-out";
            link.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.8)";
        });
        link.addEventListener("mouseout", () => {
            link.style.animation = "none";
            link.style.boxShadow = "none";
        });
    });
});
