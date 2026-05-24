/* global React */
/* ============================================================
   МАСТЕР ФУРНИТУРА — Shared components
   ============================================================ */

// ── Logo: uses the brand PNG (cropped icon-only file).
const LogoIcon = ({
  size = 36,
  dark = false
}) => /*#__PURE__*/React.createElement("img", {
  src: dark ? "logo-icon-white.png" : "logo-icon.png",
  alt: "\u041C\u0430\u0441\u0442\u0435\u0440 \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430",
  style: {
    width: size,
    height: size,
    objectFit: "contain",
    display: "block",
    flexShrink: 0
  }
});
const Logo = ({
  size = 36,
  withWord = false,
  dark = false
}) => {
  const wordHi = dark ? "#FFFFFF" : "#0E3322";
  const wordLo = dark ? "rgba(255,255,255,.7)" : "#1F5A3A";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(LogoIcon, {
    size: size,
    dark: dark
  }), withWord && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mf-font-display)",
      fontWeight: 800,
      fontSize: Math.max(13, size * 0.40),
      color: wordHi,
      letterSpacing: "-0.015em"
    }
  }, "\u041C\u0410\u0421\u0422\u0415\u0420"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mf-font-display)",
      fontWeight: 700,
      fontSize: Math.max(10, size * 0.28),
      color: wordLo,
      letterSpacing: "0.02em",
      marginTop: 3
    }
  }, "\u0424\u0423\u0420\u041D\u0418\u0422\u0423\u0420\u0410")));
};

// ── Iconography — line, 1.5 stroke, hex-friendly ────────────────────────
const Ic = {
  search: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })),
  heart: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
  })),
  user: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  bag: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 7h14l-1 13H6L5 7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7a3 3 0 0 1 6 0"
  })),
  phone: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
  })),
  chevron: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  chevR: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })),
  arrowR: /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16M14 6l6 6-6 6"
  })),
  plus: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  minus: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })),
  close: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12M18 6 6 18"
  })),
  filter: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5h18M6 12h12M10 19h4"
  })),
  grid: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "4",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "13",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "13",
    width: "7",
    height: "7"
  })),
  list: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  camera: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h4l2-3h6l2 3h4v12H3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3.5"
  })),
  check: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5 9-11"
  })),
  truck: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h11v10H3zM14 11h4l3 3v3h-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "1.6"
  })),
  shield: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6z"
  })),
  spark: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v6M12 15v6M3 12h6M15 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"
  }))
};

// ── Hex container for icons or photos ───────────────────────────────────
const HexFrame = ({
  size = 64,
  fill = "var(--mf-green-100)",
  color = "var(--mf-green-700)",
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: size,
    aspectRatio: "0.866 / 1",
    clipPath: "var(--hex-clip)",
    background: fill,
    color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...style
  }
}, children);

// ── Striped image placeholder (typed label inside) ──────────────────────
const Ph = ({
  label = "photo",
  h = 200,
  dark = false,
  style
}) => /*#__PURE__*/React.createElement("div", {
  className: "mf-placeholder",
  style: {
    width: "100%",
    height: h,
    borderRadius: 8,
    background: dark ? "repeating-linear-gradient(135deg,#2a2e2c 0 8px,#1f2421 8px 16px)" : undefined,
    color: dark ? "rgba(255,255,255,.5)" : undefined,
    ...style
  }
}, `[ ${label} ]`);

// ── Hex-clipped image placeholder ───────────────────────────────────────
const HexPh = ({
  label,
  size = 140,
  tone = "stone"
}) => {
  const tones = {
    stone: "repeating-linear-gradient(135deg,#E4E1D7 0 8px,#EFECE3 8px 16px)",
    green: "repeating-linear-gradient(135deg,#D9EBDF 0 8px,#EDF5EF 8px 16px)",
    dark: "repeating-linear-gradient(135deg,#2a2e2c 0 8px,#1f2421 8px 16px)",
    paper: "repeating-linear-gradient(135deg,#F4F1E8 0 8px,#FAF8F3 8px 16px)"
  };
  const color = tone === "dark" ? "rgba(255,255,255,.55)" : "var(--mf-stone-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      aspectRatio: "0.866 / 1",
      clipPath: "var(--hex-clip)",
      background: tones[tone] || tones.stone,
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--mf-font-mono)",
      fontSize: 11,
      letterSpacing: ".04em"
    }
  }, label || "photo");
};

// ── Price helper ────────────────────────────────────────────────────────
const formatPrice = n => n.toLocaleString("ru-RU").replace(/,/g, " ") + " ₽";

// ── Header (sticky top of every screen) ─────────────────────────────────
const Header = ({
  cartCount = 3,
  megaOpen = false,
  onCatalogHover,
  mode = "master"
}) => {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      zIndex: 5,
      background: "var(--mf-white)",
      borderBottom: "1px solid var(--mf-stone-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      fontSize: 12,
      color: "var(--mf-stone-500)",
      borderBottom: "1px solid var(--mf-stone-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "var(--mf-green-500)"
    }
  }), "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \xB7 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0420\u0424"), /*#__PURE__*/React.createElement("span", null, "\u041E\u043F\u0442 \u043E\u0442 30 000 \u20BD \u2014 \u043B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B"), /*#__PURE__*/React.createElement("span", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"), /*#__PURE__*/React.createElement("span", null, "\u041E\u043F\u0442 \u0438 B2B"), /*#__PURE__*/React.createElement("span", null, "\u0411\u043B\u043E\u0433"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 76,
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gap: 32,
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 42,
    withWord: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 46,
      background: "var(--mf-paper-2)",
      borderRadius: 999,
      padding: "0 6px 0 18px",
      border: "1px solid transparent",
      maxWidth: 720,
      justifySelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mf-stone-500)"
    }
  }, Ic.search), /*#__PURE__*/React.createElement("input", {
    placeholder: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B, \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u0441\u0435\u0440\u0438\u044F \u2014 \u043D\u0430\u043F\u0440. \xAB\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0435 450 BLUM\xBB",
    style: {
      flex: 1,
      border: 0,
      background: "transparent",
      outline: "none",
      fontSize: 14,
      marginLeft: 12,
      color: "var(--mf-ink)"
    },
    defaultValue: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "mf-mono",
    style: {
      fontSize: 11,
      color: "var(--mf-stone-400)",
      paddingRight: 6
    }
  }, "\u21B5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      marginRight: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mf-font-display)",
      fontSize: 15,
      color: "var(--mf-ink)",
      fontWeight: 500
    }
  }, "8 800 555-04-07"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--mf-stone-500)"
    }
  }, "\u041F\u043D\u2013\u041F\u0442 \xB7 9:00\u201320:00")), /*#__PURE__*/React.createElement(IconBtn, {
    label: "\u0418\u0437\u0431\u0440.",
    count: 12
  }, Ic.heart), /*#__PURE__*/React.createElement(IconBtn, {
    label: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442"
  }, Ic.user), /*#__PURE__*/React.createElement(IconBtn, {
    label: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
    count: cartCount,
    primary: true
  }, Ic.bag))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "0 40px",
      borderTop: "1px solid var(--mf-stone-200)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      height: 38,
      padding: "0 18px 0 14px",
      background: megaOpen ? "var(--mf-green-700)" : "var(--mf-ink)",
      color: "#fff",
      borderRadius: 999,
      border: 0,
      fontSize: 14,
      fontWeight: 500
    },
    onMouseEnter: onCatalogHover
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 1.5,
      background: "#fff"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 1.5,
      background: "#fff"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 1.5,
      background: "#fff"
    }
  })), "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"), ["Мебельная фурнитура", "Швейная фурнитура", "Рукоделие", "Москитные сетки", "Системы Джокер", "Бренды"].map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: c,
    style: {
      padding: "0 14px",
      height: 38,
      display: "inline-flex",
      alignItems: "center",
      fontSize: 14,
      color: i === 0 ? "var(--mf-green-700)" : "var(--mf-stone-700)",
      fontWeight: i === 0 ? 500 : 400,
      borderRadius: 999
    }
  }, c)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mf-eyebrow",
    style: {
      fontSize: 10
    }
  }, "\u0440\u0435\u0436\u0438\u043C"), /*#__PURE__*/React.createElement(ModeToggle, {
    mode: mode
  }))), megaOpen && /*#__PURE__*/React.createElement(MegaMenu, null));
};
const IconBtn = ({
  children,
  count,
  primary,
  label
}) => /*#__PURE__*/React.createElement("button", {
  style: {
    position: "relative",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    width: 56,
    height: 56,
    border: 0,
    background: primary ? "var(--mf-green-700)" : "transparent",
    color: primary ? "#fff" : "var(--mf-ink)",
    borderRadius: 14
  }
}, children, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 10,
    opacity: .8
  }
}, label), count != null && /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: 8,
    right: 8,
    minWidth: 16,
    height: 16,
    padding: "0 4px",
    background: primary ? "#fff" : "var(--mf-green-700)",
    color: primary ? "var(--mf-green-700)" : "#fff",
    borderRadius: 99,
    fontSize: 10,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-mono)"
  }
}, count));

// Master ↔ Studio mode toggle (key differentiator)
const ModeToggle = ({
  mode = "master",
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    padding: 3,
    background: "var(--mf-stone-100)",
    borderRadius: 999,
    border: "1px solid var(--mf-stone-200)"
  }
}, [{
  id: "master",
  label: "Мастеру",
  hint: "артикулы · опт"
}, {
  id: "studio",
  label: "Студии",
  hint: "проекты · вдохновение"
}].map(m => /*#__PURE__*/React.createElement("button", {
  key: m.id,
  onClick: () => onChange?.(m.id),
  style: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "5px 14px",
    borderRadius: 999,
    border: 0,
    background: mode === m.id ? "var(--mf-white)" : "transparent",
    boxShadow: mode === m.id ? "0 1px 3px rgba(0,0,0,.06)" : "none",
    color: mode === m.id ? "var(--mf-ink)" : "var(--mf-stone-500)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    fontWeight: 500
  }
}, m.label), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--mf-font-mono)",
    fontSize: 9,
    opacity: .7,
    letterSpacing: ".04em"
  }
}, m.hint))));
const MEGA_GROUPS = [{
  title: "Мебельная фурнитура",
  color: "var(--mf-green-700)",
  items: ["Доводчики мебельные · 142", "Направляющие мебельные · 286", "Ножки мебельные · 94", "Подлокотники · 38", "Ручки мебельные · 412", "Системы Джокер · 67", "Стулья · 51", "Прочая фурнитура · 188"]
}, {
  title: "Швейная фурнитура и рукоделие",
  color: "var(--mf-green-500)",
  items: ["Швейная фурнитура · 504", "Аксессуары для рукоделия · 312", "Аксессуары для бижутерии · 246", "Заготовки для поделок · 159", "Резинки для рукоделия · 88", "Фурнитура для чемоданов · 41", "Шпагат хоз.-бытовой · 23"]
}, {
  title: "Дом и быт",
  color: "var(--mf-amber)",
  items: ["Москитные сетки · 31", "Крепёж и метизы · 124", "Кронштейны · 72", "Сезонные предложения", "Распродажа · −40%"]
}];
const MegaMenu = () => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "var(--mf-white)",
    boxShadow: "var(--mf-shadow-pop)",
    padding: "32px 40px",
    display: "grid",
    gridTemplateColumns: "260px 1fr 320px",
    gap: 40,
    borderTop: "1px solid var(--mf-stone-200)",
    zIndex: 10
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    marginBottom: 16
  }
}, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B"), MEGA_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
  key: g.title,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 0",
    borderBottom: "1px solid var(--mf-stone-100)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 8,
    background: g.color,
    clipPath: "var(--hex-clip)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 500
  }
}, g.title), /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: "auto",
    color: "var(--mf-stone-400)"
  }
}, Ic.chevR)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 32
  }
}, MEGA_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
  key: g.title
}, /*#__PURE__*/React.createElement("h4", {
  style: {
    fontFamily: "var(--mf-font-text)",
    fontSize: 13,
    fontWeight: 600,
    color: g.color,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: ".06em"
  }
}, g.title.split(" ")[0]), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, g.items.map(i => {
  const [name, count] = i.split(" · ");
  return /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mf-stone-700)"
    }
  }, name), count && /*#__PURE__*/React.createElement("span", {
    className: "mf-mono",
    style: {
      color: "var(--mf-stone-400)"
    }
  }, count));
}))))), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--mf-green-700)",
    color: "#fff",
    borderRadius: 14,
    padding: 22,
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    right: -30,
    bottom: -30,
    width: 160,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-green-500)",
    opacity: .4
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, "\u0441\u043F\u0435\u0446\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("h3", {
  style: {
    color: "#fff",
    fontSize: 22,
    margin: "8px 0 6px"
  }
}, "\u0414\u043E\u0432\u043E\u0434\u0447\u0438\u043A\u0438 BLUM \xB7 \u221218%"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    color: "rgba(255,255,255,.7)",
    marginBottom: 16
  }
}, "\u0421\u0435\u0440\u0438\u044F CLIP top BLUMOTION 71B. \u041E\u043F\u0442 \u043E\u0442 50 \u0448\u0442."), /*#__PURE__*/React.createElement("button", {
  className: "mf-btn mf-btn--sm",
  style: {
    background: "#fff",
    color: "var(--mf-green-700)"
  }
}, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u0434\u0431\u043E\u0440\u043A\u0443 ", Ic.arrowR)));

// ── Product card (works in both Master and Studio modes) ────────────────
const ProductCard = ({
  p,
  mode = "master",
  hover = false
}) => {
  if (mode === "studio") return /*#__PURE__*/React.createElement(ProductCardStudio, {
    p: p,
    hover: hover
  });
  return /*#__PURE__*/React.createElement(ProductCardMaster, {
    p: p,
    hover: hover
  });
};
const Badges = ({
  p,
  dark
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 12,
    left: 12,
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
}, p.badge_new && /*#__PURE__*/React.createElement("span", {
  className: "mf-chip mf-chip--mint",
  style: {
    height: 22,
    fontSize: 10,
    padding: "0 8px",
    fontWeight: 600
  }
}, "new"), p.badge_hit && /*#__PURE__*/React.createElement("span", {
  className: "mf-chip mf-chip--amber",
  style: {
    height: 22,
    fontSize: 10,
    padding: "0 8px",
    fontWeight: 600
  }
}, "\u0445\u0438\u0442 \xB7 ", p.badge_hit), p.discount && /*#__PURE__*/React.createElement("span", {
  style: {
    width: 38,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-red)",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-display)",
    fontSize: 11,
    fontWeight: 600
  }
}, "\u2212", p.discount, "%"));
const ProductCardMaster = ({
  p,
  hover
}) => /*#__PURE__*/React.createElement("article", {
  style: {
    background: "var(--mf-white)",
    border: "1px solid var(--mf-stone-200)",
    borderRadius: 12,
    overflow: "hidden",
    transition: "transform .18s ease, box-shadow .18s ease",
    transform: hover ? "translateY(-4px)" : "none",
    boxShadow: hover ? "var(--mf-shadow-pop)" : "none",
    position: "relative",
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    background: "var(--mf-paper-2)",
    aspectRatio: "1 / 1"
  }
}, /*#__PURE__*/React.createElement(Ph, {
  label: p.imgLabel || p.sku,
  h: "100%",
  style: {
    borderRadius: 0,
    height: "100%"
  }
}), /*#__PURE__*/React.createElement(Badges, {
  p: p
}), hover && /*#__PURE__*/React.createElement("button", {
  className: "mf-btn mf-btn--primary mf-btn--sm",
  style: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    height: 38,
    justifyContent: "center",
    width: "auto"
  }
}, Ic.bag, " \u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \xB7 ", formatPrice(p.price)), /*#__PURE__*/React.createElement("button", {
  title: "\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
  style: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 99,
    background: "var(--mf-white)",
    border: "1px solid var(--mf-stone-200)",
    color: "var(--mf-stone-700)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, Ic.heart)), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "14px 16px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "mf-mono",
  style: {
    color: "var(--mf-stone-400)"
  }
}, p.sku), /*#__PURE__*/React.createElement("span", {
  className: "mf-mono",
  style: {
    color: p.stock > 0 ? "var(--mf-green-700)" : "var(--mf-red)"
  }
}, p.stock > 0 ? `● в наличии ${p.stock}` : "○ под заказ")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    lineHeight: 1.3,
    color: "var(--mf-ink)",
    minHeight: 36
  }
}, p.name), p.spec && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 2
  }
}, p.spec.map(s => /*#__PURE__*/React.createElement("span", {
  key: s,
  style: {
    fontSize: 11,
    color: "var(--mf-stone-500)",
    padding: "2px 8px",
    background: "var(--mf-stone-100)",
    borderRadius: 6,
    fontFamily: "var(--mf-font-mono)"
  }
}, s))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: "auto",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingTop: 10
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 19,
    fontWeight: 500,
    color: "var(--mf-ink)"
  }
}, formatPrice(p.price)), p.priceOld && /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "var(--mf-stone-400)",
    textDecoration: "line-through"
  }
}, formatPrice(p.priceOld))))));
const ProductCardStudio = ({
  p,
  hover
}) => /*#__PURE__*/React.createElement("article", {
  style: {
    background: "transparent",
    borderRadius: 14,
    overflow: "hidden",
    transition: "transform .25s ease",
    transform: hover ? "translateY(-6px)" : "none",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    aspectRatio: "4 / 5",
    borderRadius: 14,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Ph, {
  label: p.imgLabel || "lifestyle",
  h: "100%",
  style: {
    borderRadius: 0,
    height: "100%"
  }
}), /*#__PURE__*/React.createElement(Badges, {
  p: p
}), /*#__PURE__*/React.createElement("button", {
  title: "\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
  style: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 38,
    height: 38,
    borderRadius: 99,
    background: "rgba(255,255,255,.85)",
    backdropFilter: "blur(8px)",
    border: 0,
    color: "var(--mf-ink)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, Ic.heart)), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "14px 4px 4px",
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    fontSize: 10
  }
}, p.category || "коллекция"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 17,
    lineHeight: 1.15,
    color: "var(--mf-ink)"
  }
}, p.name), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    fontWeight: 500
  }
}, formatPrice(p.price)), /*#__PURE__*/React.createElement("button", {
  style: {
    height: 34,
    padding: "0 12px",
    borderRadius: 999,
    background: "var(--mf-ink)",
    color: "#fff",
    border: 0,
    fontSize: 12,
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  }
}, "+ \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"))));

// ── Footer ──────────────────────────────────────────────────────────────
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: "var(--mf-ink)",
    color: "rgba(255,255,255,.75)",
    padding: "64px 40px 28px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    right: -120,
    top: -120,
    width: 520,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "rgba(111,191,143,.06)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1.2fr",
    gap: 48,
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
  size: 48,
  withWord: true,
  dark: true
}), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 22,
    maxWidth: 280,
    fontSize: 13,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.6)"
  }
}, "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u0440\u0443\u043A\u0430\u043C\u0438. \u0421 2009 \u0433\u043E\u0434\u0430 \u2014 3 200 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u043E\u0432, 14 \u043F\u0443\u043D\u043A\u0442\u043E\u0432 \u0432\u044B\u0434\u0430\u0447\u0438, \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0420\u0424 \u0438 \u0421\u041D\u0413."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    marginTop: 18
  }
}, ["TG", "VK", "YT", "RT"].map(s => /*#__PURE__*/React.createElement("span", {
  key: s,
  style: {
    width: 36,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-mono)",
    fontSize: 10
  }
}, s)))), [{
  title: "Каталог",
  items: ["Мебельная фурнитура", "Швейная фурнитура", "Рукоделие", "Москитные сетки", "Системы Джокер", "Бренды"]
}, {
  title: "Покупателям",
  items: ["Доставка и оплата", "Возврат", "Гарантия", "Подбор по задаче", "FAQ"]
}, {
  title: "Опт и B2B",
  items: ["Стать партнёром", "Прайс-лист", "Договор-оферта", "Личный менеджер", "Кредит-нота"]
}].map(c => /*#__PURE__*/React.createElement("div", {
  key: c.title
}, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, c.title), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "14px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, c.items.map(i => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    fontSize: 13
  }
}, i))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    color: "rgba(255,255,255,.6)",
    margin: "10px 0 14px"
  }
}, "\u041D\u043E\u0432\u0438\u043D\u043A\u0438, \u043E\u043F\u0442-\u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u043C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u044B. 2 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u043C\u0435\u0441\u044F\u0446."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 6
  }
}, /*#__PURE__*/React.createElement("input", {
  className: "mf-input",
  placeholder: "\u0432\u0430\u0448\u0430 \u043F\u043E\u0447\u0442\u0430",
  style: {
    background: "rgba(255,255,255,.06)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,.14)",
    height: 42
  }
}), /*#__PURE__*/React.createElement("button", {
  className: "mf-btn mf-btn--primary",
  style: {
    height: 42,
    background: "var(--mf-green-300)",
    color: "var(--mf-green-900)"
  }
}, "OK")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 22,
    display: "flex",
    gap: 10,
    alignItems: "center",
    fontSize: 11,
    color: "rgba(255,255,255,.45)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 22,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "rgba(255,255,255,.08)"
  }
}), "\u0421 2009 \xB7 14 \u043F\u0443\u043D\u043A\u0442\u043E\u0432 \u0432\u044B\u0434\u0430\u0447\u0438"))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    paddingTop: 22,
    borderTop: "1px solid rgba(255,255,255,.08)",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 11,
    color: "rgba(255,255,255,.35)",
    fontFamily: "var(--mf-font-mono)"
  }
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2009 \u2014 2026 \xB7 \u041E\u041E\u041E \xAB\u041C\u0430\u0441\u0442\u0435\u0440 \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430\xBB \xB7 \u0418\u041D\u041D 7714000000"), /*#__PURE__*/React.createElement("span", null, "v.3.04 \xB7 \u0441\u043E\u0431\u0440\u0430\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0432 \u0421\u0430\u043C\u0430\u0440\u0435")));
Object.assign(window, {
  Logo,
  LogoIcon,
  Ic,
  HexFrame,
  HexPh,
  Ph,
  formatPrice,
  Header,
  IconBtn,
  ModeToggle,
  MegaMenu,
  ProductCard,
  ProductCardMaster,
  ProductCardStudio,
  Badges,
  Footer
});
