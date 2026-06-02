const displayProductImages = [
  "assets/images/milk-frother.jpg",
  "assets/images/air-fryer-oven.jpg",
  "assets/images/coffee-appliance.jpg"
];
const displayFooterLogo = "assets/images/velmora-footer-logo-correct.png";
const displayLanguageAttributes = { en: "en", zh: "zh-CN" };
const displayRegions = [
  ["en", "🌐 Global / English"],
  ["zh", "🇨🇳 中国 / 中文"]
];

const displayCopy = {
  en: {
    navProducts: "Products",
    navOem: "OEM/ODM",
    navQuality: "Quality",
    navContact: "Contact",
    navCatalog: "Get Catalog",
    heroTitle: "Small Appliances, Built for Global Brands.",
    heroLead: "Velmora develops OEM/ODM kitchen appliance programs for importers, distributors, private-label brands, and retail buyers.",
    heroPrimary: "View Products",
    heroSecondary: "Start a Project",
    heroProofOne: "Private-label ready",
    heroProofTwo: "Sample review support",
    heroProofThree: "Export coordination",
    selectionEyebrow: "Product Insights",
    selectionTitle: "Product Selection Guide",
    selectionText: "Useful product information to help buyers choose the right category, customization direction, and market fit.",
    selectionOneTitle: "Market Fit",
    selectionOneText: "Choose product directions based on your target market, sales channel, price range, and customer use scenario.",
    selectionTwoTitle: "Key Specifications",
    selectionTwoText: "Buyers often review category, capacity, wattage, voltage, plug type, material, and finish before selecting a model.",
    selectionThreeTitle: "Customization Options",
    selectionThreeText: "Common OEM/ODM options include logo placement, product color, control panel details, packaging structure, and manual language.",
    selectionFourTitle: "Recommended Product Paths",
    selectionFourText: "Milk frothers support coffee accessories and gift sets. Air fryer ovens suit healthy cooking. Coffee appliance programs work for home, office, hotel, and lifestyle collections.",
    stripOneTitle: "EU & US Buyer Focus",
    stripOneText: "Built around importer, distributor, and retail decision workflows.",
    stripTwoTitle: "Private Label Ready",
    stripTwoText: "Brand, finish, packaging, manuals, and channel positioning support.",
    stripThreeTitle: "Retail Presentation",
    stripThreeText: "Clean product stories for online listings, catalogs, and shelf displays.",
    productsEyebrow: "Product Categories",
    productsTitle: "Product Programs for Modern Retail",
    productsText: "Explore OEM/ODM-ready appliance categories for coffee, healthy cooking, and premium home beverage scenarios.",
    featuredEyebrow: "Featured Appliance Programs",
    featuredTitle: "Buyer-ready product directions with clearer sourcing details.",
    featuredText: "Explore focused appliance programs with customization options, retail positioning, and product knowledge for global B2B buyers.",
    featuredLearn: "Learn More",
    featuredQuote: "Request Quote",
    featuredOneEyebrow: "Coffee Retail",
    featuredOneTitle: "Milk Frothers",
    featuredOneSubtitle: "Compact coffee accessories for private-label coffee programs.",
    featuredOneBody: "Ideal for coffee brands, gift sets, lifestyle e-commerce, and retail shelves.",
    featuredOnePointOne: "Compact and easy to bundle with coffee products",
    featuredOnePointTwo: "Suitable for gift box and retail display programs",
    featuredOnePointThree: "Logo, color, packaging, and manual customization available",
    featuredOnePointFour: "Good fit for coffee accessories, holiday promotions, and private-label programs",
    featuredTwoEyebrow: "Healthy Cooking",
    featuredTwoTitle: "Air Fryer Ovens",
    featuredTwoSubtitle: "High-demand healthy cooking appliances for modern kitchens.",
    featuredTwoBody: "Ideal for retail chains, distributors, home appliance brands, and seasonal promotions.",
    featuredTwoPointOne: "Strong demand in healthy cooking and family kitchen categories",
    featuredTwoPointTwo: "Suitable for online retail, supermarket promotions, and home appliance channels",
    featuredTwoPointThree: "Capacity, control panel, plug type, packaging, and manual options can be discussed",
    featuredTwoPointFour: "Helpful for seasonal campaigns, holiday sales, and retail appliance programs",
    featuredThreeEyebrow: "Coffee Programs",
    featuredThreeTitle: "Coffee Appliances",
    featuredThreeSubtitle: "Build a focused coffee appliance line for home, office, and hospitality buyers.",
    featuredThreeBody: "Ideal for home, office, hotel, lifestyle retail, and private-label coffee collections.",
    featuredThreePointOne: "Suitable for complete coffee product programs",
    featuredThreePointTwo: "Supports brand positioning, finish selection, packaging, and manual localization",
    featuredThreePointThree: "Can be planned by channel: home use, office use, hotel use, gift sets, or lifestyle retail",
    oemEyebrow: "OEM/ODM Partnership",
    oemTitle: "From Sourcing Brief to Launch-Ready Products.",
    oemText: "Velmora helps importers, distributors, and private-label buyers move from product selection and sample review to branding, packaging, production follow-up, and shipment coordination.",
    oemCta: "Start OEM/ODM Project",
    processNote: "For faster review: target market · quantity range · voltage · plug type · logo needs · packaging direction · compliance requirements",
    qualityEyebrow: "Buyer-Focused Support",
    qualityTitle: "Clear choices. Brand-ready details. Easier launches.",
    qualityText: "Velmora helps global buyers review product fit, branding options, packaging details, and shipment requirements before moving forward.",
    qualityCta: "Request Support",
    insightsEyebrow: "Buyer Priorities",
    insightsTitle: "The details importers, distributors, and retail teams check first.",
    insightsText: "Velmora highlights the practical questions buyers care about before they request samples or open a new line.",
    rfqEyebrow: "Faster Quotation",
    rfqContactTitle: "Start with a clear sourcing brief.",
    rfqTitle: "Share your target market, quantity range, product category, voltage, plug type, logo needs, packaging direction, and compliance requirements. Velmora will help you review suitable product options and quotation details.",
    rfqCta: "Send Your Brief",
    rfqCatalogCta: "Get Catalog",
    rfqNote: "Useful details: target market · quantity range · voltage · plug type · logo needs · packaging direction · compliance requirements",
    rfqMarketTitle: "Market",
    rfqMarketText: "Country, sales channel, and customer group.",
    rfqProductTitle: "Product",
    rfqProductText: "Category, function, capacity, material, and finish.",
    rfqBrandingTitle: "Branding",
    rfqBrandingText: "Logo, color, packaging, manual, and label requirements.",
    rfqOrderTitle: "Order",
    rfqOrderText: "Quantity range, voltage, plug type, certificates, and delivery time.",
    footerSupportTitle: "Support",
    footerSupportContact: "Contact Sales",
    footerSupportQuality: "Quality & Compliance",
    footerSupportSample: "Sample & Project Review",
    footerAboutTitle: "About Us",
    footerAboutCategories: "Small Appliance Categories",
    footerAboutOem: "OEM/ODM Partnership",
    footerContactTitle: "Contact",
    footerSocialTitle: "Follow Velmora",
    contactEmail: "Email",
    newsletterText: "Enter your email address to receive product updates and sourcing support.",
    newsletterPlaceholder: "Enter email address",
    newsletterMessage: "Thanks. Please email sales@velmora-tech.com to confirm product update requests.",
    dialogTitle: "Choose your location and language",
    dialogContinue: "Continue",
    searchLabel: "Search Velmora",
    searchPlaceholder: "Search products, OEM, support, packaging...",
    searchEmpty: "Search for products, OEM, samples, packaging, compliance, support, or contact.",
    searchNoResults: "No matching content yet. Try products, OEM, support, or packaging.",
    footerText: "Smart Living Starts Here",
    productCta: "Learn More →",
    products: [
      ["Coffee Retail", "Milk Frothers", "Compact coffee accessories for gift sets, retail shelves, and lifestyle e-commerce.", ["Logo", "Color", "Gift Box", "Manual"], "assets/images/milk-frother.jpg", "#milk-frothers"],
      ["Healthy Cooking", "Air Fryer Ovens", "High-demand cooking appliances for retail chains, distributors, and seasonal promotions.", ["Capacity", "Panel", "Plug", "Packaging"], "assets/images/air-fryer-oven.jpg", "#air-fryer-ovens"],
      ["Coffee Programs", "Coffee Appliances", "Coffee preparation products for home, office, hotel, and private-label lifestyle collections.", ["Frothers", "Coffee Makers", "Grinders", "Kettles"], "assets/images/coffee-appliance.jpg", "#coffee-appliances"]
    ],
    process: [
      ["01", "Sourcing Brief", "Share your target market, quantity range, voltage, plug type, budget, and product direction."],
      ["02", "Product Matching", "Review suitable models, logo placement, finish options, packaging structure, and manual languages."],
      ["03", "Sample Review", "Confirm function, appearance, packaging direction, and buyer feedback before production."],
      ["04", "Production & Shipment", "Coordinate production follow-up, quality checkpoints, carton marks, export documents, and shipment readiness."]
    ],
    quality: [
      ["01", "Market Fit", "Products matched to your target market, channel, price range, and customer use scenario."],
      ["02", "Private Label", "Logo placement, color, finish, packaging structure, manual language, and retail presentation support."],
      ["03", "Sample Review", "Function, appearance, packaging direction, and buyer feedback can be reviewed before production."],
      ["04", "Shipment Support", "Carton marks, export documents, plug requirements, and shipment readiness can be coordinated before delivery."]
    ],
    insights: [
      ["Retail Shelf", "Packaging hierarchy, colorways, and product story for private-label lines."],
      ["Compliance Path", "Labeling needs, manuals, documents, and certification conversations."],
      ["Sample Review", "Function, finish, packaging, and user experience checkpoints before purchase orders."],
      ["Channel Content", "Product angles, listing copy, category positioning, and sales material buyers can use internally."]
    ]
  },
  zh: {
    navProducts: "产品",
    navOem: "OEM/ODM",
    navQuality: "品质与合规",
    navContact: "联系我们",
    navCatalog: "获取目录",
    heroTitle: "为全球品牌打造小家电项目。",
    heroLead: "Velmora 为进口商、经销商、自有品牌和零售买家开发 OEM/ODM 厨房小家电项目。",
    heroPrimary: "查看产品",
    heroSecondary: "启动项目",
    heroProofOne: "适合自有品牌",
    heroProofTwo: "支持样品确认",
    heroProofThree: "出口协同",
    selectionEyebrow: "产品洞察",
    selectionTitle: "产品选择指南",
    selectionText: "帮助买家判断合适类目、定制方向和市场适配度的实用信息。",
    selectionOneTitle: "市场适配",
    selectionOneText: "根据目标市场、销售渠道、价格区间和消费者使用场景选择产品方向。",
    selectionTwoTitle: "关键规格",
    selectionTwoText: "买家通常会在选型前确认类目、容量、功率、电压、插头类型、材质和表面处理。",
    selectionThreeTitle: "定制选项",
    selectionThreeText: "常见 OEM/ODM 选项包括 Logo 位置、产品颜色、控制面板细节、包装结构和说明书语言。",
    selectionFourTitle: "推荐产品路径",
    selectionFourText: "奶泡器适合咖啡配件和礼品套装；空气炸锅烤箱适合健康烹饪；咖啡类小家电适合家庭、办公室、酒店和生活方式系列。",
    stripOneTitle: "欧美买家导向",
    stripOneText: "围绕进口商、经销商和零售团队的决策流程设计。",
    stripTwoTitle: "适合自有品牌",
    stripTwoText: "支持品牌、表面处理、包装、说明书和渠道定位。",
    stripThreeTitle: "适合零售展示",
    stripThreeText: "为线上列表、目录和货架展示准备清晰产品故事。",
    productsEyebrow: "产品类别",
    productsTitle: "面向现代零售的产品项目",
    productsText: "探索适合咖啡、健康烹饪和高端家庭饮品场景的 OEM/ODM 小家电类别。",
    featuredEyebrow: "精选小家电项目",
    featuredTitle: "更清晰采购细节的买家就绪产品方向。",
    featuredText: "为全球 B2B 买家提供聚焦小家电项目、定制选项、零售定位和产品知识。",
    featuredLearn: "了解更多",
    featuredQuote: "获取报价",
    featuredOneEyebrow: "咖啡零售",
    featuredOneTitle: "奶泡器",
    featuredOneSubtitle: "适合自有品牌咖啡项目的紧凑型咖啡配件。",
    featuredOneBody: "适合咖啡品牌、礼品套装、生活方式电商和零售货架。",
    featuredOnePointOne: "体积紧凑，适合与咖啡产品组合销售",
    featuredOnePointTwo: "适合礼盒和零售展示项目",
    featuredOnePointThree: "支持 Logo、颜色、包装和说明书定制",
    featuredOnePointFour: "适合咖啡配件、节日促销和自有品牌项目",
    featuredTwoEyebrow: "健康烹饪",
    featuredTwoTitle: "空气炸锅烤箱",
    featuredTwoSubtitle: "适合现代厨房的高需求健康烹饪小家电。",
    featuredTwoBody: "适合连锁零售、经销商、家电品牌和季节性促销。",
    featuredTwoPointOne: "健康烹饪和家庭厨房类目需求强",
    featuredTwoPointTwo: "适合线上零售、商超促销和家电渠道",
    featuredTwoPointThree: "可沟通容量、控制面板、插头类型、包装和说明书选项",
    featuredTwoPointFour: "适合季节活动、节日销售和零售家电项目",
    featuredThreeEyebrow: "咖啡项目",
    featuredThreeTitle: "咖啡类小家电",
    featuredThreeSubtitle: "为家庭、办公室和酒店买家打造聚焦咖啡产品线。",
    featuredThreeBody: "适合家庭、办公室、酒店、生活方式零售和自有品牌咖啡系列。",
    featuredThreePointOne: "适合完整咖啡产品项目",
    featuredThreePointTwo: "支持品牌定位、表面处理选择、包装和说明书本地化",
    featuredThreePointThree: "可按家庭、办公室、酒店、礼品套装或生活方式零售渠道规划",
    oemEyebrow: "OEM/ODM 合作",
    oemTitle: "从采购需求到可上市产品。",
    oemText: "Velmora 帮助进口商、经销商和自有品牌买家完成产品选型、样品确认、品牌、包装、生产跟进和出货协同。",
    oemCta: "启动 OEM/ODM 项目",
    processNote: "更快评估：目标市场 · 数量范围 · 电压 · 插头类型 · Logo 需求 · 包装方向 · 合规要求",
    qualityEyebrow: "买家支持",
    qualityTitle: "选择清晰，品牌细节到位，上市更轻松。",
    qualityText: "Velmora 帮助全球买家在推进前评估产品适配、品牌选项、包装细节和出货要求。",
    qualityCta: "获取支持",
    insightsEyebrow: "买家关注点",
    insightsTitle: "进口商、经销商和零售团队优先检查的细节。",
    insightsText: "Velmora 梳理买家在申请样品或开启新品线前最关心的实际问题。",
    rfqEyebrow: "更快报价",
    rfqContactTitle: "从清晰的采购需求开始。",
    rfqTitle: "请提供目标市场、数量范围、产品类别、电压、插头类型、Logo 需求、包装方向和合规要求。Velmora 将帮助你评估合适产品方案和报价细节。",
    rfqCta: "发送采购需求",
    rfqCatalogCta: "获取目录",
    rfqNote: "有用信息：目标市场 · 数量范围 · 电压 · 插头类型 · Logo 需求 · 包装方向 · 合规要求",
    rfqMarketTitle: "市场",
    rfqMarketText: "国家、销售渠道和客户群体。",
    rfqProductTitle: "产品",
    rfqProductText: "类别、功能、容量、材质和表面处理。",
    rfqBrandingTitle: "品牌",
    rfqBrandingText: "Logo、颜色、包装、说明书和标签要求。",
    rfqOrderTitle: "订单",
    rfqOrderText: "数量范围、电压、插头类型、认证和交期。",
    footerSupportTitle: "支持",
    footerSupportContact: "联系销售",
    footerSupportQuality: "品质与合规",
    footerSupportSample: "样品与项目评估",
    footerAboutTitle: "关于我们",
    footerAboutCategories: "小家电类目",
    footerAboutOem: "OEM/ODM 合作",
    footerContactTitle: "联系",
    footerSocialTitle: "关注 Velmora",
    contactEmail: "邮箱",
    newsletterText: "输入邮箱，获取产品更新和采购支持。",
    newsletterPlaceholder: "输入邮箱地址",
    newsletterMessage: "感谢。请发送邮件至 sales@velmora-tech.com 确认产品更新需求。",
    dialogTitle: "选择你的地区和语言",
    dialogContinue: "继续",
    searchLabel: "搜索 Velmora",
    searchPlaceholder: "搜索产品、OEM、支持、包装...",
    searchEmpty: "可搜索产品、OEM、样品、包装、合规、支持或联系方式。",
    searchNoResults: "暂无匹配内容。请尝试产品、OEM、支持或包装。",
    footerText: "智慧生活，从这里开始",
    productCta: "了解更多 →",
    products: [
      ["咖啡零售", "奶泡器", "适合礼品套装、零售货架和生活方式电商的紧凑型咖啡配件。", ["Logo", "颜色", "礼盒", "说明书"], "assets/images/milk-frother.jpg", "#milk-frothers"],
      ["健康烹饪", "空气炸锅烤箱", "适合连锁零售、经销商和季节性促销的高需求烹饪小家电。", ["容量", "面板", "插头", "包装"], "assets/images/air-fryer-oven.jpg", "#air-fryer-ovens"],
      ["咖啡项目", "咖啡类小家电", "适合家庭、办公室、酒店和自有品牌生活方式系列的咖啡产品。", ["奶泡器", "咖啡机", "磨豆机", "手冲壶"], "assets/images/coffee-appliance.jpg", "#coffee-appliances"]
    ],
    process: [
      ["01", "采购需求", "分享目标市场、数量范围、电压、插头类型、预算和产品方向。"],
      ["02", "产品匹配", "评估合适型号、Logo 位置、表面处理、包装结构和说明书语言。"],
      ["03", "样品确认", "量产前确认功能、外观、包装方向和买家反馈。"],
      ["04", "生产与出货", "协同生产跟进、质量节点、箱唛、出口文件和出货准备。"]
    ],
    quality: [
      ["01", "市场适配", "产品匹配目标市场、渠道、价格区间和客户使用场景。"],
      ["02", "自有品牌", "支持 Logo 位置、颜色、表面处理、包装结构、说明书语言和零售呈现。"],
      ["03", "样品确认", "量产前可确认功能、外观、包装方向和买家反馈。"],
      ["04", "出货支持", "可在交付前协同箱唛、出口文件、插头要求和出货准备。"]
    ],
    insights: [
      ["零售货架", "面向自有品牌产品线的包装层级、颜色和产品故事。"],
      ["合规路径", "标签、说明书、文件和认证沟通。"],
      ["样品确认", "采购订单前检查功能、表面处理、包装和用户体验。"],
      ["渠道内容", "产品角度、列表文案、类目定位和内部销售材料。"]
    ]
  }
};

function displayLang() {
  try {
    return localStorage.getItem("velmora-lang") === "zh" ? "zh" : "en";
  } catch (error) {
    return "en";
  }
}

function injectDisplayStyles() {
  if (document.getElementById("velmora-display-fixes")) return;
  const style = document.createElement("style");
  style.id = "velmora-display-fixes";
  style.textContent = `
    .product-visual,.featured-visual{background:#fff!important;border:1px solid rgba(0,0,0,.045)!important}
    .product-visual img{width:min(88%,245px)!important;height:min(88%,245px)!important;object-fit:contain!important;object-position:center!important}
    .featured-visual img{width:min(560px,90%)!important;height:auto!important;object-fit:contain!important;object-position:center!important}
    .footer-hub{box-sizing:border-box!important;width:100%!important;max-width:none!important;display:grid!important;grid-template-columns:minmax(160px,.9fr) minmax(120px,.68fr) minmax(140px,.76fr) minmax(200px,.92fr) minmax(260px,1.05fr)!important;gap:clamp(22px,3vw,44px)!important;margin:0 auto!important;padding:88px max(28px,calc((100vw - 1320px)/2 + 28px))!important;align-items:start!important;background:#050505!important;color:#fff!important}
    .footer-brand{align-self:start!important;justify-self:start!important}
    .footer-brand img{display:block!important;width:min(240px,100%)!important;max-width:240px!important;height:auto!important;aspect-ratio:3/1!important;object-fit:contain!important;object-position:left center!important;background:transparent!important;border-radius:0!important;padding:0!important;filter:none!important}
    .footer-column,.footer-contact,.footer-social{justify-self:start!important;text-align:left!important}
    .footer-social{padding-right:clamp(24px,4vw,72px)!important}
    .footer-column h2,.footer-social h2{color:#fff!important;margin-top:0!important}
    .footer-column a,.footer-social p{color:rgba(245,245,247,.68)!important}
    .footer-contact a{display:grid!important;justify-items:start!important}
    .footer-contact span{color:rgba(245,245,247,.58)!important}
    .social-links{justify-content:flex-start!important}
    .social-links a{font-size:0!important;background:rgba(255,255,255,.12)!important;color:rgba(255,255,255,.82)!important}
    .social-links svg{width:18px!important;height:18px!important;fill:currentColor!important}
    .newsletter-form{max-width:390px!important;margin-inline:0!important}
    .site-footer{background:#050505!important;color:rgba(245,245,247,.52)!important;border-top:1px solid rgba(255,255,255,.1)!important}
    .footer-hub::before,.social-links a::before{content:none!important;display:none!important}
    @media (max-width:1024px){.footer-hub{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
    @media (max-width:640px){.footer-hub{grid-template-columns:1fr!important;gap:34px!important;padding-inline:24px!important}.footer-social{padding-right:0!important}.newsletter-form{width:100%!important}}
  `;
  document.head.appendChild(style);
}

function renderDisplayCards(copy) {
  const products = document.querySelector("[data-products]");
  if (products) {
    products.innerHTML = copy.products.map(([chip, title, text, tags, image, href], index) => `
      <article class="product-card">
        <span class="product-chip">${chip}</span>
        <h3>${title}</h3>
        <p>${text}</p>
        <div class="product-meta">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="product-visual"><img src="${displayProductImages[index] || image}" alt="${title}" width="360" height="360" loading="lazy" decoding="async"></div>
        <a class="product-cta" href="${href}">${copy.productCta}</a>
      </article>
    `).join("");
  }
  const process = document.querySelector("[data-process]");
  if (process) process.innerHTML = copy.process.map(([number, title, text]) => `<article class="process-item"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  const quality = document.querySelector("[data-quality]");
  if (quality) quality.innerHTML = copy.quality.map(([number, title, text]) => `<article class="quality-card"><span class="metric">${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
  const insights = document.querySelector("[data-insights]");
  if (insights) insights.innerHTML = copy.insights.map(([title, text]) => `<article class="buyer-card"><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function applyDisplayFixes() {
  injectDisplayStyles();
  const lang = displayLang();
  const copy = { ...displayCopy.en, ...(displayCopy[lang] || {}) };
  document.documentElement.lang = displayLanguageAttributes[lang] || "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = copy[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = copy[node.dataset.i18nPlaceholder];
    if (value) {
      node.placeholder = value;
      node.setAttribute("aria-label", value);
    }
  });

  const select = document.querySelector("[data-region-select]");
  if (select) {
    select.innerHTML = displayRegions.map(([code, label]) => `<option value="${code}">${label}</option>`).join("");
    select.value = lang;
  }
  const current = document.querySelector("[data-region-current]");
  if (current) current.textContent = (displayRegions.find(([code]) => code === lang)?.[1] || displayRegions[0][1]).replace(/^[^\s]+\s+/, "");

  renderDisplayCards(copy);

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

  const footerLogo = document.querySelector(".footer-brand img");
  if (footerLogo) {
    footerLogo.src = displayFooterLogo;
    footerLogo.width = 999;
    footerLogo.height = 333;
    footerLogo.alt = "Velmora full logo";
    footerLogo.loading = "eager";
    footerLogo.decoding = "async";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  applyDisplayFixes();
  document.querySelector("[data-region-continue]")?.addEventListener("click", () => {
    window.setTimeout(applyDisplayFixes, 0);
  });
});
