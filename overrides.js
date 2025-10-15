(function () {
  const BASE_PATH = "/goldencellqoder";
  const LOCALES = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "ru", label: "Русский" },
    { code: "ko", label: "한국어" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "ar", label: "العربية" },
    { code: "he", label: "עברית" },
  ];
  const MENU_ID = "gc-locale-menu";
  const STYLE_ID = "gc-overrides-style";
  const LOGO_SIZE = 160;

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      img[alt="GoldenCell Logo"] {
        width: ${LOGO_SIZE}px !important;
        height: ${LOGO_SIZE}px !important;
        max-width: ${LOGO_SIZE}px !important;
        max-height: ${LOGO_SIZE}px !important;
        filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.6));
      }

      header nav .logo-container {
        min-height: ${LOGO_SIZE}px;
      }

      #${MENU_ID} {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-left: 1.5rem;
        align-items: center;
      }

      #${MENU_ID} a {
        padding: 0.4rem 0.85rem;
        border-radius: 9999px;
        border: 1px solid rgba(212, 175, 55, 0.35);
        color: rgba(17, 24, 39, 0.75);
        background: rgba(255, 255, 255, 0.12);
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
      }

      #${MENU_ID} a:hover {
        background: rgba(212, 175, 55, 0.3);
        color: #000;
        border-color: rgba(212, 175, 55, 0.7);
      }

      #${MENU_ID} a.is-active {
        background: rgb(212, 175, 55);
        color: #111;
        border-color: rgba(212, 175, 55, 0.8);
        box-shadow: 0 3px 12px rgba(212, 175, 55, 0.25);
      }

      @media (max-width: 1023px) {
        #${MENU_ID} {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function getCurrentLocale() {
    const path = window.location.pathname.replace(BASE_PATH, "");
    const parts = path.split("/").filter(Boolean);
    const candidate = parts[0];
    return LOCALES.some((loc) => loc.code === candidate) ? candidate : "en";
  }

  function updateLogo() {
    const img = document.querySelector('img[alt="GoldenCell Logo"]');
    if (img) {
      img.loading = "eager";
      img.decoding = "async";
      img.style.width = `${LOGO_SIZE}px`;
      img.style.height = `${LOGO_SIZE}px`;
      img.style.maxWidth = `${LOGO_SIZE}px`;
      img.style.maxHeight = `${LOGO_SIZE}px`;
      const container = img.closest("div");
      if (container) {
        container.classList.add("logo-container");
      }
    }
  }

  function updateBrandLink(locale) {
    const link = document.querySelector("header nav a[href*='/goldencellqoder']");
    if (link) {
      link.href = `${BASE_PATH}/${locale}/`;
    }
  }

  function updateLocaleLabel(locale) {
    const labelEl = document.querySelector("header nav button span.font-medium");
    const localeInfo = LOCALES.find((loc) => loc.code === locale);
    if (labelEl && localeInfo) {
      labelEl.textContent = localeInfo.label;
    }
  }

  function ensureMenu(locale) {
    const nav = document.querySelector("header nav");
    if (!nav) return;

    const flexSection =
      nav.querySelector(".hidden.lg\\:flex") || nav.querySelector(".lg\\:flex");

    let host =
      nav.querySelector(`#${MENU_ID}`) ||
      nav.querySelector(".ml-6.hidden.xl\\:flex.flex-wrap.gap-2");

    if (!host) {
      host = document.createElement("div");
      host.id = MENU_ID;
      if (flexSection && flexSection.parentElement) {
        flexSection.parentElement.insertBefore(host, flexSection.nextSibling);
      } else {
        nav.appendChild(host);
      }
    }

    host.id = MENU_ID;
    host.classList.add("gc-locale-menu");

    if (!host.dataset.initialized) {
      host.innerHTML = "";
      LOCALES.forEach((loc) => {
        const anchor = document.createElement("a");
        anchor.textContent = loc.code.toUpperCase();
        anchor.href = `${BASE_PATH}/${loc.code}/`;
        anchor.setAttribute("aria-label", loc.label);
        anchor.dataset.locale = loc.code;
        host.appendChild(anchor);
      });
      host.dataset.initialized = "true";
    }

    host.querySelectorAll("a").forEach((anchor) => {
      if (anchor.dataset.locale === locale) {
        anchor.classList.add("is-active");
      } else {
        anchor.classList.remove("is-active");
      }
    });
  }

  function applyEnhancements() {
    addStyles();
    const locale = getCurrentLocale();
    updateLogo();
    updateBrandLink(locale);
    updateLocaleLabel(locale);
    ensureMenu(locale);
  }

  function setupObservers() {
    const nav = document.querySelector("header nav");
    if (!nav) return;
    const observer = new MutationObserver(() => applyEnhancements());
    observer.observe(nav, { childList: true, subtree: true, attributes: true });
  }

  ready(() => {
    applyEnhancements();
    setupObservers();
  });

  window.addEventListener("load", applyEnhancements);
  window.addEventListener("pageshow", applyEnhancements);
  setInterval(applyEnhancements, 4000);
})();
