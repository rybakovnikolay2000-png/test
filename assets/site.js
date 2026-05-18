const BUILDER_HOSTS = new Set(["localhost", "127.0.0.1"]);
const DEFAULT_PAGE_IDS = ["home", "casino", "slots", "games", "bonuses", "app", "login"];

const LANGUAGE_PRESETS = {
  "ms-MY": {
    code: "ms-MY",
    label: "Malay",
    nativeLabel: "Bahasa Melayu",
    hreflang: "ms-MY",
    direction: "ltr",
    nav: {
      casino: "Kasino",
      slots: "Slot",
      games: "Permainan",
      bonuses: "Bonus",
      app: "Aplikasi",
      login: "Log Masuk"
    },
    stickyOfferLabel: "100% Bonus + 100 Putaran"
  },
  "zh-Hans-MY": {
    code: "zh-Hans-MY",
    label: "Chinese Simplified",
    nativeLabel: "简体中文",
    hreflang: "zh-Hans-MY",
    direction: "ltr",
    nav: {
      casino: "赌场",
      slots: "老虎机",
      games: "游戏",
      bonuses: "优惠",
      app: "应用",
      login: "登录"
    },
    stickyOfferLabel: "100% 奖金 + 100 次免费旋转"
  },
  "zh-Hant-MY": {
    code: "zh-Hant-MY",
    label: "Chinese Traditional",
    nativeLabel: "繁體中文",
    hreflang: "zh-Hant-MY",
    direction: "ltr",
    nav: {
      casino: "賭場",
      slots: "老虎機",
      games: "遊戲",
      bonuses: "優惠",
      app: "應用",
      login: "登入"
    },
    stickyOfferLabel: "100% 獎金 + 100 次免費旋轉"
  },
  "fr-FR": {
    code: "fr-FR",
    label: "French",
    nativeLabel: "Francais",
    hreflang: "fr-FR",
    direction: "ltr",
    nav: {
      casino: "Casino",
      slots: "Machines",
      games: "Jeux",
      bonuses: "Bonus",
      app: "App",
      login: "Connexion"
    },
    stickyOfferLabel: "100% Bonus + 100 FS"
  },
  "de-DE": {
    code: "de-DE",
    label: "German",
    nativeLabel: "Deutsch",
    hreflang: "de-DE",
    direction: "ltr",
    nav: {
      casino: "Casino",
      slots: "Slots",
      games: "Spiele",
      bonuses: "Boni",
      app: "App",
      login: "Login"
    },
    stickyOfferLabel: "100% Bonus + 100 Freispiele"
  },
  "pt-BR": {
    code: "pt-BR",
    label: "Portuguese",
    nativeLabel: "Portugues",
    hreflang: "pt-BR",
    direction: "ltr",
    nav: {
      casino: "Cassino",
      slots: "Slots",
      games: "Jogos",
      bonuses: "Bonus",
      app: "App",
      login: "Entrar"
    },
    stickyOfferLabel: "100% Bonus + 100 Giros"
  },
  "it-IT": {
    code: "it-IT",
    label: "Italian",
    nativeLabel: "Italiano",
    hreflang: "it-IT",
    direction: "ltr",
    nav: {
      casino: "Casino",
      slots: "Slot",
      games: "Giochi",
      bonuses: "Bonus",
      app: "App",
      login: "Accesso"
    },
    stickyOfferLabel: "100% Bonus + 100 Giri"
  },
  "tr-TR": {
    code: "tr-TR",
    label: "Turkish",
    nativeLabel: "Turkce",
    hreflang: "tr-TR",
    direction: "ltr",
    nav: {
      casino: "Casino",
      slots: "Slotlar",
      games: "Oyunlar",
      bonuses: "Bonuslar",
      app: "App",
      login: "Giris"
    },
    stickyOfferLabel: "100% Bonus + 100 FS"
  },
  "id-ID": {
    code: "id-ID",
    label: "Indonesian",
    nativeLabel: "Indonesia",
    hreflang: "id-ID",
    direction: "ltr",
    nav: {
      casino: "Casino",
      slots: "Slots",
      games: "Game",
      bonuses: "Bonus",
      app: "App",
      login: "Masuk"
    },
    stickyOfferLabel: "100% Bonus + 100 FS"
  },
  "pl-PL": {
    code: "pl-PL",
    label: "Polish",
    nativeLabel: "Polski",
    hreflang: "pl-PL",
    direction: "ltr",
    nav: {
      casino: "Kasyno",
      slots: "Sloty",
      games: "Gry",
      bonuses: "Bonusy",
      app: "App",
      login: "Logowanie"
    },
    stickyOfferLabel: "100% Bonus + 100 FS"
  },
  "hi-IN": {
    code: "hi-IN",
    label: "Hindi",
    nativeLabel: "Hindi",
    hreflang: "hi-IN",
    direction: "ltr",
    nav: {
      casino: "Casino",
      slots: "Slots",
      games: "Games",
      bonuses: "Bonus",
      app: "App",
      login: "Login"
    },
    stickyOfferLabel: "100% Bonus + 100 FS"
  },
  "ar-SA": {
    code: "ar-SA",
    label: "Arabic",
    nativeLabel: "Arabic",
    hreflang: "ar-SA",
    direction: "rtl",
    nav: {
      casino: "Casino",
      slots: "Slots",
      games: "Games",
      bonuses: "Bonuses",
      app: "App",
      login: "Login"
    },
    stickyOfferLabel: "100% Bonus + 100 FS"
  }
};

const FONT_OPTIONS = [
  {
    value: "montserrat",
    label: "Montserrat",
    stack: '"Montserrat", "Segoe UI", sans-serif'
  },
  {
    value: "manrope",
    label: "Manrope",
    stack: '"Manrope", "Segoe UI", sans-serif'
  },
  {
    value: "rubik",
    label: "Rubik",
    stack: '"Rubik", "Segoe UI", sans-serif'
  },
  {
    value: "space-grotesk",
    label: "Space Grotesk",
    stack: '"Space Grotesk", "Segoe UI", sans-serif'
  }
];

const builderState = {
  enabled: BUILDER_HOSTS.has(window.location.hostname),
  config: null,
  localeCode: "",
  pageId: "",
  shell: null,
  modal: null,
  fields: {},
  targets: [],
  selectedId: "",
  dirty: false,
  changeToken: 0,
  saveTimer: null,
  buildTimer: null,
  saving: false,
  building: false
};

function initAccordions() {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    const header = accordion.querySelector(".accord__header");
    const wrapper = accordion.querySelector(".accord__wrapper");

    if (!header || !wrapper) {
      return;
    }

    header.addEventListener("click", () => {
      const isOpen = accordion.classList.toggle("accord_open");
      wrapper.style.maxHeight = isOpen ? `${wrapper.scrollHeight}px` : "0px";
    });
  });
}

function initStickyCta() {
  const originButton = document.getElementById("specialBtnOrigin");
  if (!originButton) {
    return;
  }

  const sticky = originButton.cloneNode(true);
  sticky.id = "specialBtnSticky";
  sticky.classList.add("specialBtn_sticky");
  document.body.appendChild(sticky);

  const observer = new IntersectionObserver(
    ([entry]) => {
      sticky.classList.toggle("is-visible", !entry.isIntersecting);
    },
    { threshold: 0.05 }
  );

  observer.observe(originButton);
}

function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  document
    .querySelectorAll(".hero__content, .hero__picture, .contentSection .container, .guideSection .container, .faq .container, .footer__copyright")
    .forEach((element) => {
      element.classList.add("reveal-item");
      observer.observe(element);
    });
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function sanitizeText(value = "") {
  return String(value).replace(/\r/g, "").trim();
}

function sanitizeSingleLine(value = "") {
  return sanitizeText(value).replace(/\n+/g, " ").replace(/\s{2,}/g, " ");
}

function sanitizeHtml(value = "") {
  return String(value)
    .replace(/<(?!\/?(strong|em|br)\b)[^>]*>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .trim();
}

function parseContext() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const fallbackLocale = document.documentElement.lang || "en-MY";
  return {
    localeCode: parts[0] || fallbackLocale,
    pageId: DEFAULT_PAGE_IDS.includes(parts[1]) ? parts[1] : "home"
  };
}

function getCurrentPage() {
  return builderState.config.pages.find((page) => page.id === builderState.pageId) || null;
}

function getCurrentContent() {
  const page = getCurrentPage();
  if (!page) {
    return null;
  }
  return page.locales[builderState.localeCode] || page.locales[builderState.config.site.defaultLocale] || null;
}

function getLocaleSettings(localeCode = builderState.localeCode) {
  return (
    builderState.config.site.localeSettings[localeCode] ||
    builderState.config.site.localeSettings[builderState.config.site.defaultLocale]
  );
}

function getLocaleRecord(localeCode = builderState.localeCode) {
  return builderState.config.site.locales.find((locale) => locale.code === localeCode) || null;
}

function getLocaleDisplayName(locale) {
  return locale?.nativeLabel || locale?.label || locale?.code || "";
}

function getFontOption(value) {
  return FONT_OPTIONS.find((option) => option.value === value) || FONT_OPTIONS[0];
}

function resolveFontScale(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return 0.94;
  }
  return Math.min(Math.max(numeric, 0.82), 1.18);
}

function buildAvailableLanguages(config, localeCode) {
  const current = config.site.locales.find((locale) => locale.code === localeCode);
  const others = config.site.locales.filter((locale) => locale.code !== localeCode);
  return [current, ...others].filter(Boolean).map(getLocaleDisplayName);
}

function syncAvailableLanguages(config) {
  config.site.locales.forEach((locale) => {
    const settings = config.site.localeSettings[locale.code];
    if (!settings) {
      return;
    }
    settings.organization = settings.organization || {};
    settings.organization.availableLanguages = buildAvailableLanguages(config, locale.code);
  });
}

function getPagePath(pageId = builderState.pageId, localeCode = builderState.localeCode) {
  const page = builderState.config.pages.find((entry) => entry.id === pageId);
  const content =
    page?.locales?.[localeCode] ||
    page?.locales?.[builderState.config.site.defaultLocale] ||
    null;
  return content?.slug ? `/${localeCode}/${content.slug}/` : `/${localeCode}/`;
}

function ensureLocaleShape(config) {
  const localeCodes = config.site.locales.map((locale) => locale.code);
  const localeSet = new Set(localeCodes);
  config.site.theme = config.site.theme || {};
  config.site.theme.fontFamily = getFontOption(config.site.theme.fontFamily).value;
  config.site.theme.fontScale = resolveFontScale(config.site.theme.fontScale);

  if (!localeCodes.includes(config.site.defaultLocale)) {
    config.site.defaultLocale = localeCodes[0] || "";
  }

  Object.keys(config.site.localeSettings || {}).forEach((localeCode) => {
    if (!localeSet.has(localeCode)) {
      delete config.site.localeSettings[localeCode];
    }
  });

  config.site.locales.forEach((locale) => {
    if (!config.site.localeSettings[locale.code]) {
      config.site.localeSettings[locale.code] = {
        siteName: config.site.brand || "Brand Name",
        applicationName: config.site.brand || "Brand Name",
        nav: {
          casino: "Casino",
          slots: "Slots",
          games: "Games",
          bonuses: "Bonuses",
          app: "App",
          login: "Login"
        },
        stickyOffer: {
          label: "Open offer",
          kind: "go",
          href: config.site.routes.goPath || "/go/"
        },
        footer: {
          heading: `${config.site.brand || "Brand Name"} - Footer`,
          subheading: "Copyright (c) 2026",
          paragraphs: ["Replace this localized footer text."]
        },
        organization: {
          name: config.site.brand || "Brand Name",
          description: "",
          logo: "/assets/logo-placeholder.svg",
          email: "",
          country: "",
          availableLanguages: [locale.nativeLabel || locale.label || locale.code]
        }
      };
    }
  });

  config.pages.forEach((page) => {
    Object.keys(page.locales || {}).forEach((localeCode) => {
      if (!localeSet.has(localeCode)) {
        delete page.locales[localeCode];
      }
    });

    localeCodes.forEach((localeCode) => {
      if (!page.locales[localeCode]) {
        const fallbackLocale =
          page.locales[config.site.defaultLocale] ||
          page.locales[Object.keys(page.locales)[0]];
        page.locales[localeCode] = fallbackLocale ? clone(fallbackLocale) : null;
      }
    });
  });

  syncAvailableLanguages(config);
}

async function fetchConfig() {
  const response = await fetch("/api/config");
  const payload = await response.json();
  if (!payload.ok) {
    throw new Error(payload.error || "Could not load config");
  }
  return payload.config;
}

async function requestSaveConfig() {
  const response = await fetch("/api/config", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(builderState.config)
  });
  const payload = await response.json();
  if (!payload.ok) {
    throw new Error(payload.error || "Could not save config");
  }
}

async function requestBuildConfig() {
  const response = await fetch("/api/build", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ config: builderState.config })
  });
  const payload = await response.json();
  if (!payload.ok) {
    throw new Error(payload.error || "Could not build site");
  }
  return payload.buildResult;
}

async function uploadMedia(file) {
  const form = new FormData();
  form.append("file", file);

  const response = await fetch("/api/upload-media", {
    method: "POST",
    body: form
  });
  const payload = await response.json();

  if (!payload.ok) {
    throw new Error(payload.error || "Could not upload media");
  }

  return payload.file;
}

function setStatus(message, kind = "info") {
  const targets = document.querySelectorAll("[data-builder-status]");
  if (!targets.length) {
    return;
  }
  const stamp =
    kind === "success"
      ? ` · ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
      : "";
  targets.forEach((target) => {
    target.textContent = `${message}${stamp}`;
    target.dataset.kind = kind;
  });
}

function clearTimers() {
  window.clearTimeout(builderState.saveTimer);
  window.clearTimeout(builderState.buildTimer);
  builderState.saveTimer = null;
  builderState.buildTimer = null;
}

function markDirty(message = "Unsaved changes") {
  builderState.dirty = true;
  builderState.changeToken += 1;
  setStatus(message, "pending");
  scheduleAutoPersist();
}

function scheduleAutoPersist() {
  window.clearTimeout(builderState.saveTimer);
  window.clearTimeout(builderState.buildTimer);

  builderState.saveTimer = window.setTimeout(() => {
    runSave("Autosaved draft");
  }, 900);

  builderState.buildTimer = window.setTimeout(() => {
    runBuild("Preview updated");
  }, 1700);
}

async function runSave(successMessage = "Saved") {
  window.clearTimeout(builderState.saveTimer);

  if (builderState.saving) {
    return;
  }

  const tokenAtStart = builderState.changeToken;
  builderState.saving = true;
  setStatus("Saving draft...", "pending");

  try {
    await requestSaveConfig();
    if (tokenAtStart === builderState.changeToken) {
      builderState.dirty = false;
    }
    setStatus(successMessage, "success");
  } catch (error) {
    setStatus(error.message, "error");
    throw error;
  } finally {
    builderState.saving = false;
  }
}

async function runBuild(successMessage = "Preview updated") {
  window.clearTimeout(builderState.buildTimer);

  if (builderState.building) {
    return;
  }

  builderState.building = true;
  try {
    await runSave("Draft saved");
    setStatus("Building preview...", "pending");
    const result = await requestBuildConfig();
    setStatus(`${successMessage}: ${result.pagesBuilt} pages`, "success");
  } catch (error) {
    setStatus(error.message, "error");
    throw error;
  } finally {
    builderState.building = false;
  }
}

async function flushPending(build = true) {
  clearTimers();
  if (build) {
    await runBuild("Preview updated");
  } else {
    await runSave("Saved");
  }
}

function applyThemePreview() {
  const theme = builderState.config.site.theme;
  const root = document.documentElement.style;
  const font = getFontOption(theme.fontFamily);
  root.setProperty("--accent", theme.accent);
  root.setProperty("--accent-strong", theme.accentStrong);
  root.setProperty("--bg", theme.bg);
  root.setProperty("--panel", theme.panel);
  root.setProperty("--panel-strong", theme.panelStrong);
  root.setProperty("--text", theme.text);
  root.setProperty("--muted", theme.muted);
  root.setProperty("--border", theme.border);
  root.setProperty("--shadow", theme.shadow);
  root.setProperty("--font-base", font.stack);
  root.setProperty("--font-display", font.stack);
  root.setProperty("--font-scale", String(resolveFontScale(theme.fontScale)));
}

function updateHeadPreview() {
  const content = getCurrentContent();
  if (!content) {
    return;
  }

  document.title = content.title || builderState.config.site.brand;

  const description = document.querySelector('meta[name="description"]');
  const keywords = document.querySelector('meta[name="keywords"]');
  const canonical = document.querySelector('link[rel="canonical"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');

  if (description) {
    description.setAttribute("content", content.description || "");
  }
  if (keywords) {
    keywords.setAttribute("content", content.keywords || "");
  }
  if (canonical) {
    canonical.setAttribute(
      "href",
      content.canonical || `${builderState.config.site.baseUrl.replace(/\/+$/, "")}${getPagePath()}`
    );
  }
  if (ogTitle) {
    ogTitle.setAttribute("content", content.title || "");
  }
  if (ogDescription) {
    ogDescription.setAttribute("content", content.description || "");
  }
  if (ogUrl) {
    ogUrl.setAttribute("content", `${builderState.config.site.baseUrl.replace(/\/+$/, "")}${getPagePath()}`);
  }
}

function resolveActionHref(action) {
  if (!action) {
    return "#";
  }
  if (action.kind === "go") {
    return builderState.config.site.routes.goPath || "/go/";
  }
  if (action.kind === "download") {
    return builderState.config.site.routes.downloadHref || "/downloads/app.apk";
  }
  return action.href || "#";
}

function applyActionElement(anchor, action) {
  if (!anchor || !action) {
    return;
  }
  anchor.textContent = action.label || "Open";
  anchor.setAttribute("href", resolveActionHref(action));
}

function refreshNavigationPreview() {
  const localeSettings = getLocaleSettings();
  const visibleNav = builderState.config.navigation.filter((entry) => entry.show);
  const menu = document.querySelector(".menu");
  if (menu) {
    menu.innerHTML = "";
    visibleNav.forEach((entry) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      item.className = "menu__item";
      link.className = "menu__link";
      link.href = getPagePath(entry.pageId, builderState.localeCode);
      link.textContent = localeSettings.nav?.[entry.pageId] || entry.pageId;
      item.appendChild(link);
      menu.appendChild(item);
    });
  }

  const switcher = document.querySelector(".lang-switcher");
  if (switcher) {
    switcher.innerHTML = "";
    builderState.config.site.locales.forEach((locale) => {
      const link = document.createElement("a");
      link.className = "lang-link";
      link.href = getPagePath(builderState.pageId, locale.code);
      link.textContent = getLocaleDisplayName(locale);
      link.classList.toggle("is-current", locale.code === builderState.localeCode);
      switcher.appendChild(link);
    });
  }

  const loginLink = document.querySelector(".header__actions .btn_mini");
  if (loginLink) {
    loginLink.textContent = localeSettings.nav?.login || "Login";
    loginLink.setAttribute("href", getPagePath("login", builderState.localeCode));
  }
}

function refreshActionPreview() {
  const content = getCurrentContent();
  const localeSettings = getLocaleSettings();

  if (!content || !localeSettings) {
    return;
  }

  applyActionElement(document.querySelector(".hero__pretitle .btn"), content.hero?.badgeButton);

  [...document.querySelectorAll(".hero__actions a")].forEach((anchor, index) => {
    applyActionElement(anchor, content.hero?.actions?.[index]);
  });

  const sectionRoots = [...document.querySelectorAll("main > section")].filter(
    (section) => !section.classList.contains("hero")
  );

  content.sections.forEach((section, sectionIndex) => {
    const root = sectionRoots[sectionIndex];
    if (!root) {
      return;
    }
    [...root.querySelectorAll(".contentSection__actions a, .guideSection__actions a")].forEach(
      (anchor, actionIndex) => {
        applyActionElement(anchor, section.actions?.[actionIndex]);
      }
    );
  });

  const stickyOffer = localeSettings.stickyOffer;
  applyActionElement(document.getElementById("specialBtnOrigin"), stickyOffer);
  applyActionElement(document.getElementById("specialBtnSticky"), stickyOffer);
}

function updateBrandPreview() {
  const brand = builderState.config.site.brand || "Brand Name";
  document.querySelectorAll(".logo__img").forEach((logo) => {
    logo.setAttribute("alt", brand);
    logo.setAttribute("title", brand);
  });
}

function registerTarget(options) {
  if (!options.element) {
    return;
  }

  const target = {
    id: `target-${builderState.targets.length + 1}`,
    ...options
  };

  builderState.targets.push(target);
  target.element.dataset.builderTarget = target.id;
  target.element.classList.add("builder-selectable");
  target.element.addEventListener("click", (event) => {
    if (!builderState.enabled) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    selectTarget(target.id);
  });
}

function clearSelectionState() {
  builderState.targets.forEach((target) => {
    target.element.classList.remove("is-selected");
  });
}

function setPanelOpen(panelName, isOpen) {
  const panel = builderState.shell?.querySelector(`[data-builder-panel="${panelName}"]`);
  const toggle = builderState.shell?.querySelector(`[data-builder-toggle="${panelName}"]`);
  if (!panel || !toggle) {
    return;
  }

  panel.classList.toggle("is-open", isOpen);
  toggle.classList.toggle("is-active", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function selectTarget(targetId) {
  builderState.selectedId = targetId;
  clearSelectionState();
  const target = builderState.targets.find((entry) => entry.id === targetId);
  if (!target) {
    renderInspector();
    return;
  }
  setPanelOpen("content", true);
  target.element.classList.add("is-selected");
  renderInspector();
}

function getSelectedTarget() {
  return builderState.targets.find((entry) => entry.id === builderState.selectedId) || null;
}

function refreshTargetElement(target) {
  const value = target.getValue();

  if (target.type === "text") {
    target.element.textContent = value || "";
    return;
  }
  if (target.type === "html") {
    target.element.innerHTML = value || "";
    return;
  }
  if (target.type === "action") {
    applyActionElement(target.element, value);
    return;
  }
  if (target.type === "image") {
    target.element.setAttribute("src", value?.src || "");
    target.element.setAttribute("alt", value?.alt || "");
    target.element.setAttribute("title", value?.title || "");
  }
}

function buildInspectorFieldMarkup(target) {
  if (!target) {
    return `
      <div class="builder-empty">
        <h4>Select an element</h4>
        <p>Click any headline, paragraph, button, or image on the page. For images, just upload a file from your computer here.</p>
      </div>
    `;
  }

  if (target.type === "text" || target.type === "html") {
    const value = target.getValue() || "";
    const field = target.multiline || target.type === "html"
      ? `<textarea id="builderSelectionValue" rows="${target.type === "html" ? 5 : 4}">${value}</textarea>`
      : `<input id="builderSelectionValue" type="text" value="${value.replace(/"/g, "&quot;")}">`;
    const note = target.type === "html"
      ? `<p class="builder-note">Allowed tags: <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;br&gt;</code></p>`
      : "";
    return `
      <div class="builder-section">
        <div class="builder-section__head">
          <h4>${target.label}</h4>
          <p>${target.description || "Edit content safely without breaking the layout."}</p>
        </div>
        ${field}
        ${note}
      </div>
    `;
  }

  if (target.type === "action") {
    const action = target.getValue() || {};
    return `
      <div class="builder-section">
        <div class="builder-section__head">
          <h4>${target.label}</h4>
          <p>Manage button text and destination in one place.</p>
        </div>
        <label>
          Button text
          <input id="builderActionLabel" type="text" value="${(action.label || "").replace(/"/g, "&quot;")}">
        </label>
        <label>
          Action type
          <select id="builderActionKind">
            ${["go", "download", "internal", "external"]
              .map((kind) => `<option value="${kind}" ${action.kind === kind ? "selected" : ""}>${kind}</option>`)
              .join("")}
          </select>
        </label>
        <label>
          Link
          <input id="builderActionHref" type="text" value="${(action.href || "").replace(/"/g, "&quot;")}">
        </label>
      </div>
    `;
  }

  if (target.type === "image") {
    const image = target.getValue() || {};
    return `
      <div class="builder-section">
        <div class="builder-section__head">
          <h4>${target.label}</h4>
          <p>Upload from your computer first. The direct URL field is optional.</p>
        </div>
        <label class="builder-file">
          Upload from computer
          <input id="builderImageUpload" type="file" accept="image/*">
        </label>
        <label>
          Optional image URL
          <input id="builderImageSrc" type="text" value="${(image.src || "").replace(/"/g, "&quot;")}">
        </label>
        <label>
          Alt
          <input id="builderImageAlt" type="text" value="${(image.alt || "").replace(/"/g, "&quot;")}">
        </label>
        <label>
          Title
          <input id="builderImageTitle" type="text" value="${(image.title || "").replace(/"/g, "&quot;")}">
        </label>
      </div>
    `;
  }

  return "";
}

function bindInspectorEvents() {
  const target = getSelectedTarget();
  if (!target) {
    return;
  }

  if (target.type === "text" || target.type === "html") {
    const field = document.getElementById("builderSelectionValue");
    if (!field) {
      return;
    }
    field.addEventListener("input", () => {
      const nextValue = target.type === "html" ? sanitizeHtml(field.value) : sanitizeText(field.value);
      target.setValue(nextValue);
      refreshTargetElement(target);
      updateHeadPreview();
      refreshNavigationPreview();
      refreshActionPreview();
      refreshTopFields();
      markDirty(`${target.label} updated`);
    });
    return;
  }

  if (target.type === "action") {
    const labelInput = document.getElementById("builderActionLabel");
    const kindSelect = document.getElementById("builderActionKind");
    const hrefInput = document.getElementById("builderActionHref");
    const apply = () => {
      const nextAction = {
        ...(target.getValue() || {}),
        label: sanitizeSingleLine(labelInput.value),
        kind: kindSelect.value,
        href: hrefInput.value.trim()
      };
      target.setValue(nextAction);
      refreshTargetElement(target);
      refreshActionPreview();
      markDirty(`${target.label} updated`);
    };
    labelInput.addEventListener("input", apply);
    kindSelect.addEventListener("change", apply);
    hrefInput.addEventListener("input", apply);
    return;
  }

  if (target.type === "image") {
    const srcInput = document.getElementById("builderImageSrc");
    const altInput = document.getElementById("builderImageAlt");
    const titleInput = document.getElementById("builderImageTitle");
    const uploadInput = document.getElementById("builderImageUpload");

    const apply = () => {
      const nextImage = {
        ...(target.getValue() || {}),
        src: srcInput.value.trim(),
        alt: sanitizeSingleLine(altInput.value),
        title: sanitizeSingleLine(titleInput.value)
      };
      target.setValue(nextImage);
      refreshTargetElement(target);
      markDirty(`${target.label} updated`);
    };

    srcInput.addEventListener("input", apply);
    altInput.addEventListener("input", apply);
    titleInput.addEventListener("input", apply);

    uploadInput.addEventListener("change", async () => {
      const file = uploadInput.files?.[0];
      if (!file) {
        return;
      }
      try {
        setStatus("Uploading image...", "pending");
        const uploaded = await uploadMedia(file);
        srcInput.value = uploaded.src;
        apply();
        setStatus("Image uploaded", "success");
      } catch (error) {
        setStatus(error.message, "error");
      }
    });
  }
}

function renderInspector() {
  const target = getSelectedTarget();
  builderState.fields.inspector.innerHTML = buildInspectorFieldMarkup(target);
  bindInspectorEvents();
}

function refreshTopFields() {
  const content = getCurrentContent();
  const locale = getLocaleRecord();
  const localeSettings = getLocaleSettings();

  builderState.fields.pageSelect.innerHTML = builderState.config.pages
    .map((page) => `<option value="${page.id}" ${page.id === builderState.pageId ? "selected" : ""}>${page.id}</option>`)
    .join("");

  builderState.fields.localeSelect.innerHTML = builderState.config.site.locales
    .map((entry) => `<option value="${entry.code}" ${entry.code === builderState.localeCode ? "selected" : ""}>${entry.code}</option>`)
    .join("");

  builderState.fields.brand.value = builderState.config.site.brand || "";
  builderState.fields.baseUrl.value = builderState.config.site.baseUrl || "";
  builderState.fields.pageTitle.value = content?.title || "";
  builderState.fields.pageDescription.value = content?.description || "";
  builderState.fields.pageKeywords.value = content?.keywords || "";
  builderState.fields.pageSlug.value = content?.slug || "";
  builderState.fields.pageCanonical.value = content?.canonical || "";
  builderState.fields.localeLabel.value = locale?.label || "";
  builderState.fields.localeNativeLabel.value = locale?.nativeLabel || "";
  builderState.fields.localeHreflang.value = locale?.hreflang || "";
  builderState.fields.loginLabel.value = localeSettings?.nav?.login || "";
  builderState.fields.goTarget.value = builderState.config.site.redirects.goTargetUrl || "";
  builderState.fields.downloadHref.value = builderState.config.site.routes.downloadHref || "";
  builderState.fields.accent.value = builderState.config.site.theme.accent;
  builderState.fields.accentStrong.value = builderState.config.site.theme.accentStrong;
  builderState.fields.background.value = builderState.config.site.theme.bg;
  builderState.fields.fontFamily.value = getFontOption(builderState.config.site.theme.fontFamily).value;
  builderState.fields.fontScale.value = String(resolveFontScale(builderState.config.site.theme.fontScale));
}

function bindTopFields() {
  const bind = (element, handler) => {
    const apply = () => {
      handler(element.value);
      refreshNavigationPreview();
      refreshActionPreview();
      updateHeadPreview();
      applyThemePreview();
      updateBrandPreview();
      markDirty("Settings updated");
    };

    element.addEventListener("input", apply);
    element.addEventListener("change", apply);
  };

  bind(builderState.fields.brand, (value) => {
    builderState.config.site.brand = sanitizeSingleLine(value);
  });

  bind(builderState.fields.baseUrl, (value) => {
    builderState.config.site.baseUrl = value.trim();
  });

  bind(builderState.fields.pageTitle, (value) => {
    const content = getCurrentContent();
    content.title = sanitizeSingleLine(value);
  });

  bind(builderState.fields.pageDescription, (value) => {
    const content = getCurrentContent();
    content.description = sanitizeText(value);
  });

  bind(builderState.fields.pageKeywords, (value) => {
    const content = getCurrentContent();
    content.keywords = sanitizeSingleLine(value);
  });

  bind(builderState.fields.pageSlug, (value) => {
    const content = getCurrentContent();
    content.slug = value.trim();
  });

  bind(builderState.fields.pageCanonical, (value) => {
    const content = getCurrentContent();
    content.canonical = value.trim();
  });

  bind(builderState.fields.localeLabel, (value) => {
    const locale = getLocaleRecord();
    locale.label = sanitizeSingleLine(value);
    syncAvailableLanguages(builderState.config);
  });

  bind(builderState.fields.localeNativeLabel, (value) => {
    const locale = getLocaleRecord();
    locale.nativeLabel = sanitizeSingleLine(value);
    syncAvailableLanguages(builderState.config);
  });

  bind(builderState.fields.localeHreflang, (value) => {
    const locale = getLocaleRecord();
    locale.hreflang = value.trim();
  });

  bind(builderState.fields.loginLabel, (value) => {
    const localeSettings = getLocaleSettings();
    localeSettings.nav.login = sanitizeSingleLine(value);
  });

  bind(builderState.fields.goTarget, (value) => {
    builderState.config.site.redirects.goTargetUrl = value.trim();
  });

  bind(builderState.fields.downloadHref, (value) => {
    builderState.config.site.routes.downloadHref = value.trim();
  });

  bind(builderState.fields.accent, (value) => {
    builderState.config.site.theme.accent = value;
  });

  bind(builderState.fields.accentStrong, (value) => {
    builderState.config.site.theme.accentStrong = value;
  });

  bind(builderState.fields.background, (value) => {
    builderState.config.site.theme.bg = value;
  });

  bind(builderState.fields.fontFamily, (value) => {
    builderState.config.site.theme.fontFamily = value;
  });

  bind(builderState.fields.fontScale, (value) => {
    builderState.config.site.theme.fontScale = resolveFontScale(value);
  });
}

function createBuilderShell() {
  const fontOptions = FONT_OPTIONS
    .map((option) => `<option value="${option.value}">${option.label}</option>`)
    .join("");
  const fontScaleOptions = [
    { value: "0.86", label: "Compact" },
    { value: "0.94", label: "Standard" },
    { value: "1.02", label: "Comfortable" },
    { value: "1.1", label: "Large" }
  ]
    .map((option) => `<option value="${option.value}">${option.label}</option>`)
    .join("");

  const shell = document.createElement("div");
  shell.className = "builder-shell";
  shell.innerHTML = `
    <aside class="builder-panel builder-panel_content" id="builderContentPanel" data-builder-panel="content">
      <div class="builder-panel__top">
        <div>
          <p class="builder-kicker">Content / Design</p>
          <h3>Visual editor</h3>
        </div>
        <button type="button" class="builder-icon-btn" id="builderContentClose">Hide</button>
      </div>

      <div class="builder-panel__section">
        <div class="builder-inline-grid">
          <label>
            Page
            <select id="builderPageSelect"></select>
          </label>
          <label>
            Language
            <select id="builderLocaleSelect"></select>
          </label>
        </div>
        <p class="builder-helper">Click any visible text, button, or image on the page. This panel is only for content and design changes.</p>
      </div>

      <div class="builder-panel__section builder-settings">
        <div class="builder-section__head">
          <h4>Design controls</h4>
          <p>Brand, visible labels, font size, and colors live here.</p>
        </div>
        <div class="builder-inline-grid">
          <label>
            Brand
            <input id="builderBrand" type="text">
          </label>
          <label>
            Login label
            <input id="builderLoginLabel" type="text">
          </label>
          <label>
            Accent
            <input id="builderAccent" type="color">
          </label>
          <label>
            Accent strong
            <input id="builderAccentStrong" type="color">
          </label>
          <label>
            Background
            <input id="builderBackground" type="color">
          </label>
          <label>
            Site font
            <select id="builderFontFamily">${fontOptions}</select>
          </label>
          <label>
            Text size
            <select id="builderFontScale">${fontScaleOptions}</select>
          </label>
        </div>
      </div>

      <div class="builder-panel__section">
        <div class="builder-section__head">
          <h4>Selected content</h4>
          <p>Change the visible content here without touching code.</p>
        </div>
        <div id="builderInspector"></div>
      </div>

      <div class="builder-panel__footer">
        <div class="builder-status" data-builder-status data-kind="info">Ready</div>
      </div>
    </aside>

    <aside class="builder-panel builder-panel_tech" id="builderTechPanel" data-builder-panel="tech">
      <div class="builder-panel__top">
        <div>
          <p class="builder-kicker">Tech / Build</p>
          <h3>SEO and export</h3>
        </div>
        <button type="button" class="builder-icon-btn" id="builderTechClose">Hide</button>
      </div>

      <div class="builder-panel__section">
        <div class="builder-actions-row">
          <button type="button" class="builder-btn" id="builderSave">Save</button>
          <button type="button" class="builder-btn builder-btn_dark" id="builderBuild">Build</button>
          <button type="button" class="builder-btn builder-btn_dark" id="builderZip">ZIP</button>
        </div>
        <div class="builder-actions-row">
          <button type="button" class="builder-ghost-btn" id="builderAddLanguage">Languages</button>
        </div>
        <p class="builder-helper">Use this panel for saving, canonical, slug, meta, redirects, and language management.</p>
      </div>

      <div class="builder-panel__section builder-settings">
        <div class="builder-section__head">
          <h4>SEO and page data</h4>
          <p>These fields are technical and affect indexing, sharing, and routing.</p>
        </div>
        <div class="builder-inline-grid">
          <label>
            Base URL
            <input id="builderBaseUrl" type="url">
          </label>
          <label>
            Slug
            <input id="builderPageSlug" type="text">
          </label>
          <label class="builder-wide">
            Page title
            <input id="builderPageTitle" type="text">
          </label>
          <label class="builder-wide">
            Description
            <textarea id="builderPageDescription" rows="3"></textarea>
          </label>
          <label class="builder-wide">
            Keywords
            <input id="builderPageKeywords" type="text">
          </label>
          <label class="builder-wide">
            Canonical
            <input id="builderPageCanonical" type="text">
          </label>
        </div>
      </div>

      <div class="builder-panel__section builder-settings">
        <div class="builder-section__head">
          <h4>Locale and routing</h4>
          <p>Use these only when you need hreflang, redirect, or download routing changes.</p>
        </div>
        <div class="builder-inline-grid">
          <label>
            Locale label
            <input id="builderLocaleLabel" type="text">
          </label>
          <label>
            Native label
            <input id="builderLocaleNativeLabel" type="text">
          </label>
          <label>
            Hreflang
            <input id="builderLocaleHreflang" type="text">
          </label>
          <label class="builder-wide">
            Go redirect target
            <input id="builderGoTarget" type="text">
          </label>
          <label class="builder-wide">
            Download href
            <input id="builderDownloadHref" type="text">
          </label>
        </div>
      </div>

      <div class="builder-panel__footer">
        <div class="builder-status" data-builder-status data-kind="info">Ready</div>
      </div>
    </aside>

    <div class="builder-shell__controls">
      <button type="button" class="builder-shell__toggle" data-builder-toggle="content" aria-expanded="false">Content</button>
      <button type="button" class="builder-shell__toggle" data-builder-toggle="tech" aria-expanded="false">Tech</button>
    </div>
    <div class="builder-modal" id="builderModal" hidden></div>
  `;

  document.body.appendChild(shell);
  document.body.classList.add("builder-mode");

  builderState.shell = shell;
  builderState.modal = shell.querySelector("#builderModal");
  builderState.fields = {
    pageSelect: shell.querySelector("#builderPageSelect"),
    localeSelect: shell.querySelector("#builderLocaleSelect"),
    brand: shell.querySelector("#builderBrand"),
    baseUrl: shell.querySelector("#builderBaseUrl"),
    pageTitle: shell.querySelector("#builderPageTitle"),
    pageDescription: shell.querySelector("#builderPageDescription"),
    pageKeywords: shell.querySelector("#builderPageKeywords"),
    pageSlug: shell.querySelector("#builderPageSlug"),
    pageCanonical: shell.querySelector("#builderPageCanonical"),
    localeLabel: shell.querySelector("#builderLocaleLabel"),
    localeNativeLabel: shell.querySelector("#builderLocaleNativeLabel"),
    localeHreflang: shell.querySelector("#builderLocaleHreflang"),
    loginLabel: shell.querySelector("#builderLoginLabel"),
    goTarget: shell.querySelector("#builderGoTarget"),
    downloadHref: shell.querySelector("#builderDownloadHref"),
    accent: shell.querySelector("#builderAccent"),
    accentStrong: shell.querySelector("#builderAccentStrong"),
    background: shell.querySelector("#builderBackground"),
    fontFamily: shell.querySelector("#builderFontFamily"),
    fontScale: shell.querySelector("#builderFontScale"),
    inspector: shell.querySelector("#builderInspector")
  };

  shell.querySelector('[data-builder-toggle="content"]').addEventListener("click", () => {
    const panel = shell.querySelector('[data-builder-panel="content"]');
    setPanelOpen("content", !panel.classList.contains("is-open"));
  });

  shell.querySelector('[data-builder-toggle="tech"]').addEventListener("click", () => {
    const panel = shell.querySelector('[data-builder-panel="tech"]');
    setPanelOpen("tech", !panel.classList.contains("is-open"));
  });

  shell.querySelector("#builderContentClose").addEventListener("click", () => {
    setPanelOpen("content", false);
  });

  shell.querySelector("#builderTechClose").addEventListener("click", () => {
    setPanelOpen("tech", false);
  });

  shell.querySelector("#builderSave").addEventListener("click", async () => {
    try {
      await flushPending(false);
    } catch {}
  });

  shell.querySelector("#builderBuild").addEventListener("click", async () => {
    try {
      await flushPending(true);
    } catch {}
  });

  shell.querySelector("#builderZip").addEventListener("click", async () => {
    try {
      await flushPending(true);
      window.location.href = `/api/export?ts=${Date.now()}`;
    } catch {}
  });

  shell.querySelector("#builderAddLanguage").addEventListener("click", openLanguageModal);

  builderState.fields.pageSelect.addEventListener("change", async (event) => {
    try {
      await flushPending(true);
      window.location.href = getPagePath(event.target.value, builderState.localeCode);
    } catch {}
  });

  builderState.fields.localeSelect.addEventListener("change", async (event) => {
    try {
      await flushPending(true);
      window.location.href = getPagePath(builderState.pageId, event.target.value);
    } catch {}
  });

  bindTopFields();
  setPanelOpen("content", false);
  setPanelOpen("tech", false);
}

function removeLocaleFromConfig(localeCode) {
  if (builderState.config.site.locales.length <= 1) {
    throw new Error("At least one language must remain");
  }

  builderState.config.site.locales = builderState.config.site.locales.filter(
    (locale) => locale.code !== localeCode
  );
  delete builderState.config.site.localeSettings[localeCode];

  builderState.config.pages.forEach((page) => {
    delete page.locales[localeCode];
  });

  if (builderState.config.site.defaultLocale === localeCode) {
    builderState.config.site.defaultLocale = builderState.config.site.locales[0]?.code || "";
  }

  if (builderState.localeCode === localeCode) {
    builderState.localeCode = builderState.config.site.defaultLocale;
  }

  builderState.selectedId = "";
  ensureLocaleShape(builderState.config);
}

function openLanguageModal() {
  setPanelOpen("tech", true);

  const modal = builderState.modal;
  const cloneOptions = builderState.config.site.locales
    .map(
      (locale) =>
        `<option value="${locale.code}" ${locale.code === builderState.localeCode ? "selected" : ""}>${locale.code}</option>`
    )
    .join("");
  const localeCards = builderState.config.site.locales
    .map((locale) => {
      const isDefault = locale.code === builderState.config.site.defaultLocale;
      const isCurrent = locale.code === builderState.localeCode;
      return `
        <div class="builder-locale-card">
          <div class="builder-locale-meta">
            <strong>${locale.code}</strong>
            <span>${getLocaleDisplayName(locale)} · ${locale.hreflang || locale.code}</span>
          </div>
          <div class="builder-locale-actions">
            ${isDefault ? `<span class="builder-pill">Default</span>` : `<button type="button" class="builder-ghost-btn" data-set-default="${locale.code}">Make default</button>`}
            ${isCurrent ? `<span class="builder-pill">Open now</span>` : `<button type="button" class="builder-ghost-btn" data-open-locale="${locale.code}">Open</button>`}
            ${
              builderState.config.site.locales.length > 1
                ? `<button type="button" class="builder-danger-btn" data-remove-locale="${locale.code}">Remove</button>`
                : `<span class="builder-pill">Only language</span>`
            }
          </div>
        </div>
      `;
    })
    .join("");

  modal.innerHTML = `
    <div class="builder-modal__backdrop" data-close-modal></div>
    <div class="builder-modal__card">
      <div class="builder-modal__head">
        <div>
          <p class="builder-kicker">Languages</p>
          <h3>Manage languages</h3>
        </div>
        <button type="button" class="builder-icon-btn" data-close-modal>Close</button>
      </div>
      <div class="builder-modal__body">
        <div class="builder-section">
          <div class="builder-section__head">
            <h4>Current languages</h4>
            <p>Keep one simple locale or add more later. Removing a locale also removes its generated pages.</p>
          </div>
          <div class="builder-locale-list">${localeCards}</div>
        </div>
        <div class="builder-section">
          <div class="builder-section__head">
            <h4>Add language</h4>
            <p>Clone the current template, then translate only what you need.</p>
          </div>
          <label>
            Preset
            <select id="builderPresetSelect">
              <option value="">Custom</option>
              ${Object.values(LANGUAGE_PRESETS)
                .map((preset) => `<option value="${preset.code}">${preset.code} - ${preset.label}</option>`)
                .join("")}
            </select>
          </label>
          <div class="builder-inline-grid">
            <label>
              Locale code
              <input id="builderLocaleCode" type="text" placeholder="ms-MY">
            </label>
            <label>
              Hreflang
              <input id="builderLocaleHreflangNew" type="text" placeholder="ms-MY">
            </label>
            <label>
              Label
              <input id="builderLocaleLabelNew" type="text" placeholder="Malay">
            </label>
            <label>
              Native label
              <input id="builderLocaleNativeNew" type="text" placeholder="Bahasa Melayu">
            </label>
            <label>
              Direction
              <select id="builderLocaleDirectionNew">
                <option value="ltr">ltr</option>
                <option value="rtl">rtl</option>
              </select>
            </label>
            <label>
              Clone content from
              <select id="builderLocaleCloneFrom">${cloneOptions}</select>
            </label>
          </div>
        </div>
      </div>
      <div class="builder-modal__actions">
        <button type="button" class="builder-ghost-btn" data-close-modal>Cancel</button>
        <button type="button" class="builder-btn" id="builderCreateLocale">Create</button>
      </div>
    </div>
  `;

  modal.hidden = false;

  const presetSelect = modal.querySelector("#builderPresetSelect");
  const codeInput = modal.querySelector("#builderLocaleCode");
  const hreflangInput = modal.querySelector("#builderLocaleHreflangNew");
  const labelInput = modal.querySelector("#builderLocaleLabelNew");
  const nativeLabelInput = modal.querySelector("#builderLocaleNativeNew");
  const directionSelect = modal.querySelector("#builderLocaleDirectionNew");

  const fillPreset = (preset) => {
    codeInput.value = preset.code;
    hreflangInput.value = preset.hreflang;
    labelInput.value = preset.label;
    nativeLabelInput.value = preset.nativeLabel;
    directionSelect.value = preset.direction;
  };

  presetSelect.addEventListener("change", () => {
    const preset = LANGUAGE_PRESETS[presetSelect.value];
    if (preset) {
      fillPreset(preset);
    }
  });

  modal.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeLanguageModal);
  });

  modal.querySelectorAll("[data-set-default]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        const localeCode = button.dataset.setDefault;
        builderState.config.site.defaultLocale = localeCode;
        ensureLocaleShape(builderState.config);
        refreshTopFields();
        refreshNavigationPreview();
        markDirty(`Default locale set to ${localeCode}`);
        await flushPending(true);
        openLanguageModal();
      } catch (error) {
        setStatus(error.message, "error");
      }
    });
  });

  modal.querySelectorAll("[data-open-locale]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        const localeCode = button.dataset.openLocale;
        await flushPending(true);
        closeLanguageModal();
        window.location.href = getPagePath(builderState.pageId, localeCode);
      } catch (error) {
        setStatus(error.message, "error");
      }
    });
  });

  modal.querySelectorAll("[data-remove-locale]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        const localeCode = button.dataset.removeLocale;
        const fallbackLocale = builderState.config.site.locales.find(
          (locale) => locale.code !== localeCode
        )?.code;

        if (!window.confirm(`Remove ${localeCode}? Its pages and settings will be deleted from the static build.`)) {
          return;
        }

        const shouldRedirect = builderState.localeCode === localeCode;
        removeLocaleFromConfig(localeCode);
        refreshTopFields();
        refreshNavigationPreview();
        refreshActionPreview();
        updateHeadPreview();
        renderInspector();
        markDirty(`Removed locale ${localeCode}`);
        await flushPending(true);

        if (shouldRedirect && fallbackLocale) {
          closeLanguageModal();
          window.location.href = getPagePath(builderState.pageId, fallbackLocale);
          return;
        }

        openLanguageModal();
      } catch (error) {
        setStatus(error.message, "error");
      }
    });
  });

  modal.querySelector("#builderCreateLocale").addEventListener("click", async () => {
    try {
      const localeCode = codeInput.value.trim();
      const cloneFrom = modal.querySelector("#builderLocaleCloneFrom").value;
      if (!localeCode) {
        throw new Error("Locale code is required");
      }
      if (builderState.config.site.locales.some((locale) => locale.code === localeCode)) {
        throw new Error("Locale already exists");
      }

      const locale = {
        code: localeCode,
        label: labelInput.value.trim(),
        nativeLabel: nativeLabelInput.value.trim(),
        hreflang: hreflangInput.value.trim(),
        direction: directionSelect.value
      };

      builderState.config.site.locales.push(locale);
      const clonedSettings = clone(getLocaleSettings(cloneFrom));
      const preset = LANGUAGE_PRESETS[localeCode];
      if (preset) {
        clonedSettings.nav = { ...clonedSettings.nav, ...preset.nav };
        clonedSettings.stickyOffer.label = preset.stickyOfferLabel;
      }
      builderState.config.site.localeSettings[localeCode] = clonedSettings;

      builderState.config.pages.forEach((page) => {
        page.locales[localeCode] = clone(
          page.locales[cloneFrom] || page.locales[builderState.config.site.defaultLocale]
        );
      });

      ensureLocaleShape(builderState.config);
      refreshTopFields();
      refreshNavigationPreview();
      markDirty(`Added locale ${localeCode}`);
      await flushPending(true);
      closeLanguageModal();
      window.location.href = getPagePath(builderState.pageId, localeCode);
    } catch (error) {
      setStatus(error.message, "error");
    }
  });
}

function closeLanguageModal() {
  builderState.modal.hidden = true;
  builderState.modal.innerHTML = "";
}

function registerPageTargets() {
  const content = getCurrentContent();
  const localeSettings = getLocaleSettings();

  registerTarget({
    element: document.querySelector(".hero__pretitle .btn"),
    type: "action",
    label: "Hero badge button",
    getValue: () => content.hero.badgeButton,
    setValue: (value) => {
      content.hero.badgeButton = value;
    }
  });

  registerTarget({
    element: document.querySelector(".hero__pretitle span"),
    type: "text",
    label: "Hero badge text",
    multiline: false,
    description: "Short line above the main headline.",
    getValue: () => content.hero.badgeText,
    setValue: (value) => {
      content.hero.badgeText = sanitizeSingleLine(value);
    }
  });

  registerTarget({
    element: document.querySelector(".hero h1"),
    type: "html",
    label: "Hero headline",
    multiline: true,
    description: "Main headline. Keep it punchy. Simple HTML is allowed.",
    getValue: () => content.hero.headlineHtml,
    setValue: (value) => {
      content.hero.headlineHtml = sanitizeHtml(value);
    }
  });

  registerTarget({
    element: document.querySelector(".hero__descr"),
    type: "text",
    label: "Hero description",
    multiline: true,
    getValue: () => content.hero.description,
    setValue: (value) => {
      content.hero.description = sanitizeText(value);
    }
  });

  [...document.querySelectorAll(".hero__actions a")].forEach((anchor, index) => {
    registerTarget({
      element: anchor,
      type: "action",
      label: `Hero button ${index + 1}`,
      getValue: () => content.hero.actions[index],
      setValue: (value) => {
        content.hero.actions[index] = value;
      }
    });
  });

  [...document.querySelectorAll(".hero__advent")].forEach((item, index) => {
    registerTarget({
      element: item.querySelector(".hero__number"),
      type: "text",
      label: `Hero stat ${index + 1} value`,
      multiline: false,
      getValue: () => content.hero.stats[index].value,
      setValue: (value) => {
        content.hero.stats[index].value = sanitizeSingleLine(value);
      }
    });

    registerTarget({
      element: item.querySelector(".hero__label"),
      type: "text",
      label: `Hero stat ${index + 1} label`,
      multiline: false,
      getValue: () => content.hero.stats[index].label,
      setValue: (value) => {
        content.hero.stats[index].label = sanitizeSingleLine(value);
      }
    });
  });

  registerTarget({
    element: document.querySelector(".hero__img"),
    type: "image",
    label: "Hero image",
    getValue: () => content.hero.image,
    setValue: (value) => {
      content.hero.image = value;
    }
  });

  registerTarget({
    element: document.querySelector(".logo__img"),
    type: "image",
    label: "Logo image",
    getValue: () => localeSettings.organization.logo ? {
      src: localeSettings.organization.logo,
      alt: builderState.config.site.brand,
      title: builderState.config.site.brand
    } : null,
    setValue: (value) => {
      localeSettings.organization.logo = value.src;
      updateBrandPreview();
    }
  });

  const sectionRoots = [...document.querySelectorAll("main > section")].filter(
    (section) => !section.classList.contains("hero")
  );

  content.sections.forEach((section, sectionIndex) => {
    const root = sectionRoots[sectionIndex];
    if (!root) {
      return;
    }

    registerTarget({
      element: root.querySelector("h2"),
      type: "text",
      label: `Section ${sectionIndex + 1} title`,
      multiline: false,
      getValue: () => section.title,
      setValue: (value) => {
        section.title = sanitizeSingleLine(value);
      }
    });

    if (section.type === "text" || section.type === "textWithImage" || section.type === "cards") {
      [...root.querySelectorAll(":scope > .container > p.descr")].forEach((paragraph, paragraphIndex) => {
        registerTarget({
          element: paragraph,
          type: "text",
          label: `Section ${sectionIndex + 1} paragraph ${paragraphIndex + 1}`,
          multiline: true,
          getValue: () => section.paragraphs[paragraphIndex],
          setValue: (value) => {
            section.paragraphs[paragraphIndex] = sanitizeText(value);
          }
        });
      });
    }

    if (section.type === "cards") {
      [...root.querySelectorAll(".card")].forEach((card, cardIndex) => {
        registerTarget({
          element: card.querySelector(".card__icon"),
          type: "text",
          label: `Card ${cardIndex + 1} icon text`,
          multiline: false,
          getValue: () => section.cards[cardIndex].icon,
          setValue: (value) => {
            section.cards[cardIndex].icon = sanitizeSingleLine(value);
          }
        });

        registerTarget({
          element: card.querySelector(".card__title"),
          type: "text",
          label: `Card ${cardIndex + 1} title`,
          multiline: false,
          getValue: () => section.cards[cardIndex].title,
          setValue: (value) => {
            section.cards[cardIndex].title = sanitizeSingleLine(value);
          }
        });

        registerTarget({
          element: card.querySelector(".card__descr"),
          type: "text",
          label: `Card ${cardIndex + 1} description`,
          multiline: true,
          getValue: () => section.cards[cardIndex].description,
          setValue: (value) => {
            section.cards[cardIndex].description = sanitizeText(value);
          }
        });
      });
    }

    if (section.type === "guide") {
      registerTarget({
        element: root.querySelector(":scope > .container > p.descr"),
        type: "text",
        label: `Guide ${sectionIndex + 1} intro`,
        multiline: true,
        getValue: () => section.description,
        setValue: (value) => {
          section.description = sanitizeText(value);
        }
      });

      [...root.querySelectorAll(".step")].forEach((step, stepIndex) => {
        registerTarget({
          element: step.querySelector(".step__title"),
          type: "text",
          label: `Step ${stepIndex + 1} title`,
          multiline: false,
          getValue: () => section.steps[stepIndex].title,
          setValue: (value) => {
            section.steps[stepIndex].title = sanitizeSingleLine(value);
          }
        });

        registerTarget({
          element: step.querySelector(".step__descr"),
          type: "text",
          label: `Step ${stepIndex + 1} description`,
          multiline: true,
          getValue: () => section.steps[stepIndex].description,
          setValue: (value) => {
            section.steps[stepIndex].description = sanitizeText(value);
          }
        });
      });
    }

    if (section.type === "textWithImage") {
      registerTarget({
        element: root.querySelector(".contentSection__img"),
        type: "image",
        label: `Section ${sectionIndex + 1} image`,
        getValue: () => section.image,
        setValue: (value) => {
          section.image = value;
        }
      });
    }

    if (section.type === "faq") {
      registerTarget({
        element: root.querySelector(":scope > .container > p.descr"),
        type: "text",
        label: "FAQ intro",
        multiline: true,
        getValue: () => section.description,
        setValue: (value) => {
          section.description = sanitizeText(value);
        }
      });

      [...root.querySelectorAll(".accord")].forEach((item, itemIndex) => {
        registerTarget({
          element: item.querySelector(".accord__title"),
          type: "text",
          label: `FAQ ${itemIndex + 1} question`,
          multiline: false,
          getValue: () => section.items[itemIndex].question,
          setValue: (value) => {
            section.items[itemIndex].question = sanitizeSingleLine(value);
          }
        });

        registerTarget({
          element: item.querySelector(".accord__content"),
          type: "text",
          label: `FAQ ${itemIndex + 1} answer`,
          multiline: true,
          getValue: () => section.items[itemIndex].answer,
          setValue: (value) => {
            section.items[itemIndex].answer = sanitizeText(value);
          }
        });
      });
    }

    [...root.querySelectorAll(".contentSection__actions a, .guideSection__actions a")].forEach(
      (anchor, actionIndex) => {
        registerTarget({
          element: anchor,
          type: "action",
          label: `Section ${sectionIndex + 1} button ${actionIndex + 1}`,
          getValue: () => section.actions[actionIndex],
          setValue: (value) => {
            section.actions[actionIndex] = value;
          }
        });
      }
    );
  });

  registerTarget({
    element: document.getElementById("specialBtnOrigin"),
    type: "action",
    label: "Sticky footer CTA",
    getValue: () => localeSettings.stickyOffer,
    setValue: (value) => {
      localeSettings.stickyOffer = value;
    }
  });

  const footer = document.querySelector(".footer__copyright");
  if (footer) {
    registerTarget({
      element: footer.querySelector("h3"),
      type: "text",
      label: "Footer heading",
      multiline: false,
      getValue: () => localeSettings.footer.heading,
      setValue: (value) => {
        localeSettings.footer.heading = sanitizeSingleLine(value);
      }
    });

    registerTarget({
      element: footer.querySelector("h4"),
      type: "text",
      label: "Footer subheading",
      multiline: false,
      getValue: () => localeSettings.footer.subheading,
      setValue: (value) => {
        localeSettings.footer.subheading = sanitizeSingleLine(value);
      }
    });

    [...footer.querySelectorAll("p")].forEach((paragraph, paragraphIndex) => {
      registerTarget({
        element: paragraph,
        type: "text",
        label: `Footer paragraph ${paragraphIndex + 1}`,
        multiline: true,
        getValue: () => localeSettings.footer.paragraphs[paragraphIndex],
        setValue: (value) => {
          localeSettings.footer.paragraphs[paragraphIndex] = sanitizeText(value);
        }
      });
    });
  }
}

async function initBuilder() {
  try {
    const context = parseContext();
    builderState.localeCode = context.localeCode;
    builderState.pageId = context.pageId;
    builderState.config = await fetchConfig();
    ensureLocaleShape(builderState.config);
    createBuilderShell();
    applyThemePreview();
    refreshTopFields();
    updateBrandPreview();
    updateHeadPreview();
    refreshNavigationPreview();
    refreshActionPreview();
    registerPageTargets();
    renderInspector();
    setStatus("Ready", "success");

    window.addEventListener("beforeunload", (event) => {
      if (!builderState.dirty) {
        return;
      }
      event.preventDefault();
      event.returnValue = "";
    });
  } catch (error) {
    console.error(error);
    setStatus(error.message, "error");
  }
}

initAccordions();
initStickyCta();
initRevealAnimations();

if (builderState.enabled) {
  initBuilder();
}
