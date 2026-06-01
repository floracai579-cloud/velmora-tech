const productImages = [
  "assets/images/milk-frother.jpg",
  "assets/images/air-fryer-oven.jpg",
  "assets/images/coffee-appliance.jpg"
];

function applyDisplayFixes() {
  if (!document.getElementById("velmora-targeted-fixes")) {
    const style = document.createElement("style");
    style.id = "velmora-targeted-fixes";
    style.textContent = `
      .eyebrow,.hero-proof{display:none!important}
      .product-chip{display:none!important}
      .brand{width:150px!important;background:#fff!important;border-radius:10px!important}
      .brand img{width:136px!important;height:auto!important;opacity:1!important}
      .product-visual,.featured-visual{background:#fff!important;border:1px solid rgba(0,0,0,.045)!important}
      .product-visual img{width:min(88%,245px)!important;height:min(88%,245px)!important;object-fit:contain!important}
      .featured-visual img{object-fit:contain!important}
      .footer-hub{width:100%!important;max-width:none!important;display:grid!important;grid-template-columns:minmax(210px,.9fr) minmax(150px,.68fr) minmax(180px,.76fr) minmax(250px,.92fr) minmax(320px,1.05fr)!important;gap:clamp(30px,4vw,64px)!important;margin:0 auto!important;padding:88px max(28px,calc((100vw - 1320px)/2 + 28px))!important;align-items:start!important;background:#050505!important;color:#fff!important}
      .footer-brand{align-self:start!important;justify-self:start!important}
      .footer-brand img{width:min(240px,100%)!important;height:auto!important;object-fit:contain!important;background:transparent!important;border-radius:0!important;padding:0!important;filter:none!important}
      .footer-column,.footer-contact,.footer-social{justify-self:start!important;text-align:left!important}
      .footer-social{padding-right:clamp(24px,4vw,72px)!important}
      .footer-column h2,.footer-social h2{color:#fff!important;margin-top:0!important}
      .footer-column a,.footer-social p{color:rgba(245,245,247,.68)!important}
      .footer-contact a{display:grid!important;justify-items:start!important}
      .footer-contact span{color:rgba(245,245,247,.58)!important}
      .social-links{justify-content:flex-start!important}
      .social-links a{font-size:0!important}
      .social-links a{background:rgba(255,255,255,.12)!important;color:rgba(255,255,255,.82)!important}
      .social-links svg{width:18px;height:18px;fill:currentColor}
      .newsletter-form{margin-inline:0!important}
      .site-footer{background:#050505!important;color:rgba(245,245,247,.52)!important;border-top:1px solid rgba(255,255,255,.1)!important}
      .footer-hub::before,.social-links a::before{content:none!important;display:none!important}
      @media (max-width:1024px){.footer-hub{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
      @media (max-width:640px){.brand{width:124px!important}.brand img{width:112px!important}.footer-hub{grid-template-columns:1fr!important;gap:34px!important;padding-inline:24px!important}.footer-social{padding-right:0!important}}
    `;
    document.head.appendChild(style);
  }

  document.querySelectorAll(".product-card").forEach((card, index) => {
    const image = card.querySelector(".product-visual img");
    const src = productImages[index];
    if (!src || !image) return;
    image.src = src;
    image.width = 360;
    image.height = 360;
    image.loading = "lazy";
    image.decoding = "async";
  });

  [
    ["#milk-frothers .featured-visual img", "assets/images/milk-frother.jpg"],
    ["#air-fryer-ovens .featured-visual img", "assets/images/air-fryer-oven.jpg"],
    ["#coffee-appliances .featured-visual img", "assets/images/coffee-appliance.jpg"]
  ].forEach(([selector, src]) => {
    const image = document.querySelector(selector);
    if (image) image.src = src;
  });

  const footerHub = document.querySelector(".footer-hub");
  document.querySelectorAll(".footer-brand").forEach((brand, index) => {
    if (index > 0) brand.remove();
  });
  if (footerHub && !footerHub.querySelector(".footer-brand")) {
    footerHub.insertAdjacentHTML("afterbegin", '<div class="footer-brand"><img src="assets/images/velmora-logo-full-black.jpg" alt="Velmora full logo" width="700" height="175" loading="lazy" decoding="async"></div>');
  }
  const footerLogo = footerHub?.querySelector(".footer-brand img");
  if (footerLogo) {
    footerLogo.src = "assets/images/velmora-logo-full-black.jpg";
    footerLogo.width = 700;
    footerLogo.height = 175;
    footerLogo.alt = "Velmora full logo";
  }

  const social = document.querySelector(".social-links");
  if (social && !social.dataset.fixedIcons) {
    const labels = ["Facebook", "Instagram", "TikTok", "YouTube"];
    const paths = [
      "M14.2 8.2V6.8c0-.7.5-1.2 1.3-1.2h1.7V2.7c-.8-.1-1.6-.2-2.4-.2-2.7 0-4.5 1.6-4.5 4.5v1.2H7.6v3.2h2.7v8.1h3.4v-8.1h2.8l.5-3.2h-3z",
      "M7.7 2.8h8.6c2.7 0 4.9 2.2 4.9 4.9v8.6c0 2.7-2.2 4.9-4.9 4.9H7.7a4.9 4.9 0 0 1-4.9-4.9V7.7c0-2.7 2.2-4.9 4.9-4.9zm0 2a2.9 2.9 0 0 0-2.9 2.9v8.6a2.9 2.9 0 0 0 2.9 2.9h8.6a2.9 2.9 0 0 0 2.9-2.9V7.7a2.9 2.9 0 0 0-2.9-2.9H7.7zM12 7.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zm0 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zm4.4-2.8a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z",
      "M15.6 2.8c.3 2.4 1.6 3.9 3.8 4.1v3.2a6.8 6.8 0 0 1-3.7-1.1v5.6c0 3.5-2.4 6-5.8 6-3 0-5.3-2-5.3-4.9 0-3.2 2.5-5.2 5.9-5 .3 0 .5 0 .8.1v3.4a3 3 0 0 0-1-.2c-1.5 0-2.4.8-2.4 1.9 0 1.1.9 1.9 2.1 1.9 1.4 0 2.2-.8 2.2-2.5V2.8h3.4z",
      "M21.3 7.2c-.2-.9-.9-1.5-1.8-1.8C17.9 5 12 5 12 5s-5.9 0-7.5.4c-.9.3-1.6.9-1.8 1.8-.4 1.6-.4 4.8-.4 4.8s0 3.2.4 4.8c.2.9.9 1.5 1.8 1.8 1.6.4 7.5.4 7.5.4s5.9 0 7.5-.4c.9-.3 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM9.9 15.1V8.9l5.4 3.1-5.4 3.1z"
    ];
    [...social.querySelectorAll("a")].forEach((link, index) => {
      link.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[index]}"></path></svg>`;
      if (labels[index]) link.setAttribute("aria-label", `Velmora on ${labels[index]}`);
    });
    social.dataset.fixedIcons = "true";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  applyDisplayFixes();
  document.querySelector("[data-region-continue]")?.addEventListener("click", () => {
    window.setTimeout(applyDisplayFixes, 0);
  });
});
