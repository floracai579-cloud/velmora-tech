(() => {
  const productImages = [
    "assets/product-milk-frother.svg",
    "assets/product-air-fryer.svg",
    "assets/product-coffee-appliance.svg"
  ];

  function applyFooterLayoutFix() {
    if (document.getElementById("velmora-footer-layout-fix")) return;
    const style = document.createElement("style");
    style.id = "velmora-footer-layout-fix";
    style.textContent = `
      .footer-brand{display:none!important}
      .footer-hub{grid-template-columns:minmax(160px,.8fr) minmax(180px,.9fr) minmax(230px,1fr) minmax(280px,1.1fr)!important;gap:clamp(34px,4vw,72px)!important;align-items:start!important}
      .footer-column,.footer-contact,.footer-social{justify-self:start!important;text-align:left!important}
      .footer-social{padding-right:0!important;max-width:420px!important}
      .newsletter-form{width:100%!important;max-width:390px!important;overflow:hidden!important}
      .newsletter-form input{min-width:0!important}
      .product-visual,.featured-visual{overflow:hidden!important}
      .product-visual img,.featured-visual img{display:block!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;object-position:center!important;image-rendering:auto!important}
      @media (max-width:1024px){.footer-hub{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
      @media (max-width:640px){.footer-hub{grid-template-columns:1fr!important;gap:34px!important}.footer-social{max-width:none!important}.newsletter-form{max-width:100%!important}}
    `;
    document.head.appendChild(style);
  }

  function applyProductImageIntegrityFix() {
    document.querySelectorAll(".product-card .product-visual img").forEach((image, index) => {
      const src = productImages[index];
      if (!src) return;
      image.src = src;
      image.width = 720;
      image.height = 520;
      image.loading = "lazy";
      image.decoding = "async";
    });

    [
      ["#milk-frothers .featured-visual img", productImages[0]],
      ["#air-fryer-ovens .featured-visual img", productImages[1]],
      ["#coffee-appliances .featured-visual img", productImages[2]]
    ].forEach(([selector, src]) => {
      const image = document.querySelector(selector);
      if (!image) return;
      image.src = src;
      image.width = 720;
      image.height = 520;
      image.loading = "lazy";
      image.decoding = "async";
    });
  }

  function applyFixes() {
    applyFooterLayoutFix();
    applyProductImageIntegrityFix();
  }

  window.addEventListener("DOMContentLoaded", applyFixes);
  window.addEventListener("load", applyFixes);
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-region-continue]")) window.setTimeout(applyProductImageIntegrityFix, 0);
  });
})();
