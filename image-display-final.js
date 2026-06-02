(() => {
  const productImages = [
    "assets/images/milk-frother-product.svg",
    "assets/images/air-fryer-oven-product.svg",
    "assets/images/coffee-appliance-product.svg"
  ];
  const footerLogo = "assets/images/velmora-logo-full-white.jpg";

  function injectImageStyles() {
    if (document.getElementById("velmora-image-display-final")) return;
    const style = document.createElement("style");
    style.id = "velmora-image-display-final";
    style.textContent = `
      .product-visual,.featured-visual{background:#fff!important;overflow:hidden!important;border:1px solid rgba(0,0,0,.045)!important}
      .product-visual{min-height:320px!important;aspect-ratio:1/1!important;display:grid!important;place-items:center!important}
      .product-visual img{display:block!important;width:min(100%,420px)!important;height:auto!important;max-width:100%!important;max-height:100%!important;padding:0!important;object-fit:contain!important;object-position:center!important;image-rendering:auto!important;background:transparent!important}
      .featured-visual{display:grid!important;place-items:center!important}
      .featured-visual img{display:block!important;width:min(100%,760px)!important;height:auto!important;max-height:100%!important;padding:0!important;object-fit:contain!important;object-position:center!important;image-rendering:auto!important;background:transparent!important}
      .footer-brand{overflow:visible!important;background:transparent!important}
      .footer-brand img{display:block!important;width:min(240px,100%)!important;max-width:240px!important;height:auto!important;aspect-ratio:auto!important;object-fit:contain!important;object-position:left center!important;background:transparent!important;border:0!important;border-radius:0!important;padding:0!important;filter:none!important}
    `;
    document.head.appendChild(style);
  }

  function applyImageFixes() {
    injectImageStyles();

    document.querySelectorAll(".product-card .product-visual img").forEach((image, index) => {
      const src = productImages[index];
      if (!src) return;
      image.src = src;
      image.width = 1200;
      image.height = 1200;
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
      image.width = 1200;
      image.height = 1200;
      image.loading = "lazy";
      image.decoding = "async";
    });

    const logo = document.querySelector(".footer-brand img");
    if (logo) {
      logo.src = footerLogo;
      logo.width = 700;
      logo.height = 233;
      logo.alt = "Velmora full logo";
      logo.loading = "eager";
      logo.decoding = "async";
    }
  }

  window.addEventListener("DOMContentLoaded", applyImageFixes);
  window.addEventListener("load", applyImageFixes);
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-region-continue]")) window.setTimeout(applyImageFixes, 0);
  });
})();
