const displayProductImages = [
  "assets/images/milk-frother.jpg",
  "assets/images/air-fryer-oven.jpg",
  "assets/images/coffee-appliance.jpg"
];
const displayFooterLogo = "assets/images/velmora-footer-logo-correct.png";
const displayLanguageAttributes = {
  en: "en",
  zh: "zh-CN",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  nl: "nl",
  pt: "pt-PT",
  th: "th",
  vi: "vi",
  id: "id",
  ms: "ms",
  ja: "ja",
  ko: "ko",
  ru: "ru"
};
const displayRegions = [
  ["en", "🌐 Europe & North America / English"],
  ["zh", "🇨🇳 中国 / 中文"],
  ["es", "🇪🇸 España / Español"],
  ["fr", "🇫🇷 France / Français"],
  ["de", "🇩🇪 Deutschland / Deutsch"],
  ["it", "🇮🇹 Italia / Italiano"],
  ["nl", "🇳🇱 Nederland / Nederlands"],
  ["pt", "🇵🇹 Portugal / Português"],
  ["th", "🇹🇭 ไทย / ภาษาไทย"],
  ["vi", "🇻🇳 Việt Nam / Tiếng Việt"],
  ["id", "🇮🇩 Indonesia / Bahasa Indonesia"],
  ["ms", "🇲🇾 Malaysia / Bahasa Melayu"],
  ["ja", "🇯🇵 日本 / 日本語"],
  ["ko", "🇰🇷 한국 / 한국어"],
  ["ru", "🇷🇺 Россия / Русский"]
];

function currentDisplayLanguage() {
  try {
    const code = localStorage.getItem("velmora-lang") || "en";
    return displayLanguageAttributes[code] ? code : "en";
  } catch (error) {
    return "en";
  }
}

function applyLanguageDisplayFixes() {
  const code = currentDisplayLanguage();
  document.documentElement.lang = displayLanguageAttributes[code];

  const select = document.querySelector("[data-region-select]");
  if (select) {
    const selected = select.value || code;
    select.innerHTML = displayRegions.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    select.value = displayLanguageAttributes[selected] ? selected : code;
  }

  const label = displayRegions.find(([value]) => value === code)?.[1] || displayRegions[0][1];
  const current = document.querySelector("[data-region-current]");
  if (current) current.textContent = label.replace(/^[^\s]+\s+/, "");
}

function applyDisplayFixes() {
  applyLanguageDisplayFixes();

  document.querySelectorAll(".product-card .product-visual img").forEach((image, index) => {
    const src = displayProductImages[index];
    if (!src) return;
    image.src = src;
    image.width = 360;
    image.height = 360;
    image.loading = "lazy";
    image.decoding = "async";
  });

  [
    ["#milk-frothers .featured-visual img", displayProductImages[0]],
    ["#air-fryer-ovens .featured-visual img", displayProductImages[1]],
    ["#coffee-appliances .featured-visual img", displayProductImages[2]]
  ].forEach(([selector, src]) => {
    const image = document.querySelector(selector);
    if (image) image.src = src;
  });

  const footerHub = document.querySelector(".footer-hub");
  document.querySelectorAll(".footer-brand").forEach((brand, index) => {
    if (index > 0) brand.remove();
  });
  if (footerHub && !footerHub.querySelector(".footer-brand")) {
    footerHub.insertAdjacentHTML("afterbegin", '<div class="footer-brand"><img src="assets/images/velmora-footer-logo-correct.png" alt="Velmora full logo" width="999" height="333" loading="lazy" decoding="async"></div>');
  }
  const footerLogo = footerHub?.querySelector(".footer-brand img");
  if (footerLogo) {
    footerLogo.src = displayFooterLogo;
    footerLogo.width = 999;
    footerLogo.height = 333;
    footerLogo.alt = "Velmora full logo";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  applyDisplayFixes();
  document.querySelector("[data-region-open]")?.addEventListener("click", () => {
    window.setTimeout(applyLanguageDisplayFixes, 0);
  });
  document.querySelector("[data-region-continue]")?.addEventListener("click", () => {
    window.setTimeout(applyDisplayFixes, 0);
  });
});
