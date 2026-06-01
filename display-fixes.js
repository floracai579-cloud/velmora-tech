const displayCopy = {
  en: {
    tagRetail: "Retail",
    tagEcommerce: "E-commerce",
    tagGiftPrograms: "Gift programs",
    tagHospitality: "Hospitality",
    tagCapacity: "Capacity",
    tagVoltage: "Voltage",
    tagPlugType: "Plug type",
    tagMaterial: "Material",
    tagLogo: "Logo",
    tagColor: "Color",
    tagPackaging: "Packaging",
    tagManual: "Manual",
    tagMilkFrothers: "Milk Frothers",
    tagAirFryerOvens: "Air Fryer Ovens",
    tagCoffeeAppliances: "Coffee Appliances"
  },
  zh: {
    tagRetail: "零售",
    tagEcommerce: "电商",
    tagGiftPrograms: "礼品项目",
    tagHospitality: "酒店与商用",
    tagCapacity: "容量",
    tagVoltage: "电压",
    tagPlugType: "插头类型",
    tagMaterial: "材质",
    tagLogo: "Logo",
    tagColor: "颜色",
    tagPackaging: "包装",
    tagManual: "说明书",
    tagMilkFrothers: "奶泡器",
    tagAirFryerOvens: "空气炸锅烤箱",
    tagCoffeeAppliances: "咖啡类小家电"
  }
};

const productImageMap = new Map([
  ["Milk Frothers", "assets/images/milk-frother.jpg"],
  ["奶泡器", "assets/images/milk-frother.jpg"],
  ["Air Fryer Ovens", "assets/images/air-fryer-oven.jpg"],
  ["空气炸锅烤箱", "assets/images/air-fryer-oven.jpg"],
  ["Coffee Appliances", "assets/images/coffee-appliance.jpg"],
  ["咖啡类小家电", "assets/images/coffee-appliance.jpg"]
]);

function currentLanguage() {
  return document.documentElement.lang.toLowerCase().startsWith("zh") ? "zh" : "en";
}

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
      .footer-hub{width:100%!important;max-width:none!important;display:grid!important;grid-template-columns:minmax(180px,.78fr) minmax(150px,.72fr) minmax(180px,.82fr) minmax(270px,1fr) minmax(320px,1.16fr)!important;gap:clamp(28px,4vw,68px)!important;margin:0 auto!important;padding:88px max(28px,calc((100vw - 1320px)/2 + 28px))!important;align-items:start!important;background:#050505!important;color:#fff!important}
      .footer-brand{align-self:start!important;justify-self:center!important}
      .footer-brand img{background:#050505!important;border-radius:10px!important;padding:0!important;filter:invert(1)!important}
      .footer-column,.footer-contact,.footer-social{justify-self:center!important;text-align:center!important}
      .footer-social{padding-right:clamp(18px,3vw,52px)!important}
      .footer-column h2,.footer-social h2{color:#fff!important;margin-top:0!important}
      .footer-column a,.footer-social p{color:rgba(245,245,247,.68)!important}
      .footer-contact a{display:grid!important;justify-items:center!important}
      .footer-contact span{color:rgba(245,245,247,.58)!important}
      .social-links{justify-content:center!important}
      .social-links a{font-size:0!important}
      .social-links a{background:rgba(255,255,255,.12)!important;color:rgba(255,255,255,.82)!important}
      .social-links svg{width:18px;height:18px;fill:currentColor}
      .site-footer{background:#050505!important;color:rgba(245,245,247,.52)!important;border-top:1px solid rgba(255,255,255,.1)!important}
      .footer-hub::before,.social-links a::before{content:none!important;display:none!important}
      @media (max-width:1024px){.footer-hub{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
      @media (max-width:640px){.brand{width:124px!important}.brand img{width:112px!important}.footer-hub{grid-template-columns:1fr!important;gap:34px!important}}
    `;
    document.head.appendChild(style);
  }

  const copy = displayCopy[currentLanguage()];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = copy[node.dataset.i18n];
    if (value) node.textContent = value;
  });

  const tagText = Object.fromEntries(Object.values(displayCopy).flatMap((languageCopy) =>
    Object.entries(languageCopy).map(([key, value]) => [value, copy[key] || value])
  ));
  document.querySelectorAll(".tag-row span, .product-meta span").forEach((tag) => {
    const value = tagText[tag.textContent.trim()];
    if (value) tag.textContent = value;
  });

  document.querySelectorAll(".product-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.trim();
    const image = card.querySelector(".product-visual img");
    const src = productImageMap.get(title);
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
    footerHub.insertAdjacentHTML("afterbegin", '<div class="footer-brand"><img src="assets/images/velmora-logo-full-white.jpg" alt="Velmora full logo" width="700" height="233" loading="lazy" decoding="async"></div>');
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
