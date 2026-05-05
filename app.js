/**
 * Velmora Tech - Production Script (Stable Version)
 * 适配当前 HTML + CSS
 */

document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initScrollReveal();
    initSmartNav();
    initFormHandler();
});

/* ========================================
   1. 平滑滚动优化
======================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;

            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });
}

/* ========================================
   2. 滚动动画（配合 .fade-in）
======================================== */
function initScrollReveal() {
    const elements = document.querySelectorAll(".fade-in");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(el => el.classList.add("show"));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
}

/* ========================================
   3. 导航高亮（滚动联动）
======================================== */
function initSmartNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }, { passive: true });
}

/* ========================================
   4. 表单处理（升级版）
======================================== */
function initFormHandler() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector("textarea");
        const btn = form.querySelector("button");

        // === 清除状态 ===
        [name, email].forEach(i => {
            i.classList.remove("error", "success");
        });

        let valid = true;

        // === 验证 Name ===
        if (!name.value.trim()) {
            name.classList.add("error");
            valid = false;
        } else {
            name.classList.add("success");
        }

        // === 验证 Email ===
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add("error");
            valid = false;
        } else {
            email.classList.add("success");
        }

        // === 验证 Message ===
        if (!message.value.trim()) {
            valid = false;
        }

        if (!valid) {
            showToast("Please fill in all fields correctly.");
            return;
        }

        // === 按钮状态 ===
        btn.disabled = true;
        btn.innerText = "Sending...";

        // === 模拟提交（后期可接 EmailJS）===
        setTimeout(() => {
            showToast("✅ Inquiry sent! We will contact you within 24 hours.");
            form.reset();

            btn.disabled = false;
            btn.innerText = "Send Inquiry";

            // 清除状态
            [name, email].forEach(i => {
                i.classList.remove("success");
            });

        }, 1200);
    });
}

/* ========================================
   5. Toast 提示（轻量版）
======================================== */
function showToast(message) {
    const old = document.querySelector(".toast");
    if (old) old.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    Object.assign(toast.style, {
        position: "fixed",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        color: "#fff",
        padding: "12px 22px",
        borderRadius: "8px",
        zIndex: "9999",
        opacity: "0",
        transition: "0.3s"
    });

    document.body.appendChild(toast);

    setTimeout(() => toast.style.opacity = "1", 50);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}