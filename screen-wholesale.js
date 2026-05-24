/* global React, Ic, HexPh, Ph, Footer, formatPrice, Logo */

// ── Wholesale-only header (no shop chrome) ──────────────────
const WholesaleHeader = () => {
  const links = [["Категории", "#cats"], ["Условия", "#tiers"], ["Как работаем", "#flow"], ["Клиенты", "#cases"], ["Вопросы", "#faq"], ["Квиз", "#quiz"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      zIndex: 5,
      background: "var(--mf-paper)",
      borderBottom: "1px solid var(--mf-stone-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      fontSize: 12,
      color: "var(--mf-stone-500)",
      borderBottom: "1px solid var(--mf-stone-200)",
      background: "var(--mf-paper-2)"
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
  }), "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043D\u0430 \u043B\u0438\u043D\u0438\u0438 \xB7 \u041F\u043D\u2013\u041F\u0442 9:00\u201320:00 \u041C\u0421\u041A"), /*#__PURE__*/React.createElement("span", null, "\u0421\u043A\u043B\u0430\u0434 4 800 \u043C\xB2 \u0432 \u0421\u0430\u043C\u0430\u0440\u0435 \xB7 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0435\u043D\u044C \u0432 \u0434\u0435\u043D\u044C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      fontFamily: "var(--mf-font-mono)",
      letterSpacing: ".03em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u043E\u043F\u0442@master-furnitura.ru"), /*#__PURE__*/React.createElement("span", null, "\xB7 Telegram @mf-opt"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 86,
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gap: 32,
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 44,
    withWord: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      paddingLeft: 14,
      borderLeft: "1px solid var(--mf-stone-300)",
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mf-font-mono)",
      fontSize: 10,
      letterSpacing: ".12em",
      color: "var(--mf-stone-500)",
      textTransform: "uppercase"
    }
  }, "\u043E\u043F\u0442 \xB7 B2B"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mf-font-display)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--mf-green-700)",
      marginTop: 2,
      letterSpacing: "-0.01em"
    }
  }, "\u043E\u043F\u0442\u043E\u0432\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 4
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: {
      padding: "10px 16px",
      borderRadius: 999,
      fontSize: 14,
      color: "var(--mf-stone-700)",
      transition: "background .15s, color .15s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--mf-stone-100)";
      e.currentTarget.style.color = "var(--mf-ink)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "var(--mf-stone-700)";
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mf-font-display)",
      fontSize: 18,
      color: "var(--mf-ink)",
      fontWeight: 500,
      letterSpacing: "-0.01em"
    }
  }, "8 800 555-04-07"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--mf-stone-500)",
      marginTop: 2
    }
  }, "\u043E\u043F\u0442-\u043E\u0442\u0434\u0435\u043B \xB7 \u0434\u043E\u0431. 102")), /*#__PURE__*/React.createElement("a", {
    href: "#lead-bottom",
    className: "mf-btn mf-btn--primary",
    style: {
      height: 46,
      padding: "0 22px"
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ", Ic.arrowR))));
};

// ============================================================
// ОПТОВЫЙ ЛЕНДИНГ — Мастер Фурнитура
// «Оставьте заявку — пришлём лучшие цены»
// Отдельная посадочная для B2B-канала. Не трогает основной макет.
// ============================================================

// ── Reusable lead form ──────────────────────────────────────
const LFField = ({
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  colSpan = 1,
  dark
}) => {
  const inputBg = dark ? "rgba(255,255,255,.06)" : "var(--mf-white)";
  const inputBorder = dark ? "rgba(255,255,255,.12)" : "var(--mf-stone-200)";
  const inputFg = dark ? "#fff" : "var(--mf-ink)";
  const labelFg = dark ? "rgba(255,255,255,.55)" : "var(--mf-stone-500)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      gridColumn: `span ${colSpan}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mf-mono",
    style: {
      fontSize: 10,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: labelFg
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      height: 46,
      padding: "0 14px",
      borderRadius: 8,
      background: inputBg,
      color: inputFg,
      border: `1px solid ${inputBorder}`,
      fontFamily: "var(--mf-font-text)",
      fontSize: 14,
      outline: "none"
    }
  }));
};
const LFSelect = ({
  value,
  onChange,
  label,
  opts,
  colSpan = 1,
  dark
}) => {
  const inputBg = dark ? "rgba(255,255,255,.06)" : "var(--mf-white)";
  const inputBorder = dark ? "rgba(255,255,255,.12)" : "var(--mf-stone-200)";
  const inputFg = dark ? "#fff" : "var(--mf-ink)";
  const labelFg = dark ? "rgba(255,255,255,.55)" : "var(--mf-stone-500)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      gridColumn: `span ${colSpan}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mf-mono",
    style: {
      fontSize: 10,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: labelFg
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      height: 46,
      padding: "0 14px",
      borderRadius: 8,
      background: inputBg,
      color: inputFg,
      border: `1px solid ${inputBorder}`,
      fontFamily: "var(--mf-font-text)",
      fontSize: 14,
      outline: "none",
      appearance: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='${dark ? "%23ffffff80" : "%236B6B66"}' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 14px center"
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))));
};
const LeadForm = ({
  dark = false,
  compact = false,
  id = "lead-top"
}) => {
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    cat: "Мебельная фурнитура",
    volume: "30–100 тыс. ₽",
    comment: ""
  });
  const upd = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const inputBg = dark ? "rgba(255,255,255,.06)" : "var(--mf-white)";
  const inputBorder = dark ? "rgba(255,255,255,.12)" : "var(--mf-stone-200)";
  const inputFg = dark ? "#fff" : "var(--mf-ink)";
  const labelFg = dark ? "rgba(255,255,255,.55)" : "var(--mf-stone-500)";
  return /*#__PURE__*/React.createElement("form", {
    id: id,
    onSubmit: e => e.preventDefault(),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(LFField, {
    dark: dark,
    value: form.name,
    onChange: upd("name"),
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E*",
    placeholder: "\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432"
  }), /*#__PURE__*/React.createElement(LFField, {
    dark: dark,
    value: form.company,
    onChange: upd("company"),
    label: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F / \u0418\u041F*",
    placeholder: "\u0418\u041F \u041F\u0435\u0442\u0440\u043E\u0432 / \u041E\u041E\u041E \xAB\u041C\u0435\u0431\u0435\u043B\u044C \u042D\u0440\u0430\xBB"
  }), /*#__PURE__*/React.createElement(LFField, {
    dark: dark,
    value: form.phone,
    onChange: upd("phone"),
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D*",
    placeholder: "+7 ___ ___-__-__",
    type: "tel"
  }), /*#__PURE__*/React.createElement(LFField, {
    dark: dark,
    value: form.email,
    onChange: upd("email"),
    label: "E-mail*",
    placeholder: "ivan@example.ru",
    type: "email"
  }), /*#__PURE__*/React.createElement(LFSelect, {
    dark: dark,
    value: form.cat,
    onChange: upd("cat"),
    label: "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
    opts: ["Мебельная фурнитура", "Швейная фурнитура", "Рукоделие и бижутерия", "Москитные сетки", "Системы Джокер", "Несколько категорий"]
  }), /*#__PURE__*/React.createElement(LFSelect, {
    dark: dark,
    value: form.volume,
    onChange: upd("volume"),
    label: "\u041E\u0431\u044A\u0451\u043C \u0437\u0430\u043A\u0443\u043F\u043A\u0438 \u0432 \u043C\u0435\u0441\u044F\u0446",
    opts: ["до 30 тыс. ₽", "30–100 тыс. ₽", "100–300 тыс. ₽", "300 тыс. – 1 млн ₽", "от 1 млн ₽"]
  }), !compact && /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mf-mono",
    style: {
      fontSize: 10,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: labelFg
    }
  }, "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E (\u043C\u043E\u0436\u043D\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C SKU)"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "\u043D\u0430\u043F\u0440.: \xAB\u043F\u0435\u0442\u043B\u0438 BLUM CLIP top 110\xB0 \u2014 600 \u0448\u0442, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0435 450 \u043C\u043C \u2014 200 \u043F\u0430\u0440\xBB",
    value: form.comment,
    onChange: upd("comment"),
    rows: 3,
    style: {
      padding: "12px 14px",
      borderRadius: 8,
      background: inputBg,
      color: inputFg,
      border: `1px solid ${inputBorder}`,
      fontFamily: "var(--mf-font-text)",
      fontSize: 14,
      outline: "none",
      resize: "vertical",
      minHeight: 84
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      marginTop: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      maxWidth: 380,
      color: labelFg,
      fontSize: 12,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F.")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "mf-btn mf-btn--lg",
    style: {
      background: dark ? "var(--mf-green-300)" : "var(--mf-green-700)",
      color: dark ? "var(--mf-green-900)" : "#fff",
      height: 54,
      padding: "0 28px",
      fontSize: 15,
      fontWeight: 600
    }
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0430\u0439\u0441 \u0441 \u043B\u0443\u0447\u0448\u0438\u043C\u0438 \u0446\u0435\u043D\u0430\u043C\u0438 ", Ic.arrowR)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      gap: 18,
      flexWrap: "wrap",
      color: labelFg,
      fontSize: 12,
      marginTop: 2
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
  }), "\u041E\u0442\u0432\u0435\u0442 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u2014 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430 \u0432 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"), /*#__PURE__*/React.createElement("span", null, "\xB7 \u041A\u041F \u0432 PDF + Excel-\u043F\u0440\u0430\u0439\u0441 \u043F\u043E \u0432\u0430\u0448\u0438\u043C SKU"), /*#__PURE__*/React.createElement("span", null, "\xB7 \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E, \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432")));
};

// ── HERO ───────────────────────────────────────────────────
const WholesaleHero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "44px 40px 64px",
    background: "var(--mf-green-900)",
    color: "#fff",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: .08
  }
}, Array.from({
  length: 40
}).map((_, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    position: "absolute",
    left: `${i * 137 % 100}%`,
    top: `${i * 79 % 100}%`,
    width: 60 + i % 5 * 20,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: i % 3 ? "var(--mf-green-300)" : "var(--mf-green-500)"
  }
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 28,
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, "\u041E\u043F\u0442\u043E\u0432\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \xB7 B2B-\u043A\u0430\u043D\u0430\u043B \xB7 \u0441 2009 \u0433\u043E\u0434\u0430"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 22,
    fontSize: 12,
    color: "rgba(255,255,255,.55)"
  }
}, /*#__PURE__*/React.createElement("span", null, "3 247 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u043E\u0432 \xB7 \u0441\u043A\u043B\u0430\u0434 4 800 \u043C\xB2"), /*#__PURE__*/React.createElement("span", null, "14 \u043F\u0443\u043D\u043A\u0442\u043E\u0432 \u0432\u044B\u0434\u0430\u0447\u0438 \xB7 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0420\u0424 \u0438 \u0421\u041D\u0413"), /*#__PURE__*/React.createElement("span", {
  className: "mf-mono"
}, "8 800 555-04-07"))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 56,
    position: "relative",
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontSize: 96,
    lineHeight: .96,
    letterSpacing: "-0.04em",
    color: "#fff",
    marginBottom: 28
  }
}, "\u041E\u043F\u0442 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u2014", " ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--mf-green-300)",
    fontStyle: "italic",
    fontFamily: "var(--mf-font-display)"
  }
}, "\u043B\u0443\u0447\u0448\u0438\u0435 \u0446\u0435\u043D\u044B"), " ", "\u043F\u043E\u0434 \u0432\u0430\u0448 \u043E\u0431\u044A\u0451\u043C.", /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    verticalAlign: "middle",
    gap: 8,
    marginLeft: 14
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 60,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-green-300)"
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    width: 60,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-amber)"
  }
}))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 20,
    lineHeight: 1.5,
    color: "rgba(255,255,255,.78)",
    maxWidth: 560,
    marginBottom: 32
  }
}, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E\u0434\u0431\u0435\u0440\u0451\u0442 \u043F\u0440\u0430\u0439\u0441 \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 SKU \u0438 \u043E\u0431\u044A\u0451\u043C, \u043F\u0440\u0438\u0448\u043B\u0451\u0442 \u041A\u041F \u0432 PDF \u0438 Excel \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430. \u041F\u0440\u044F\u043C\u044B\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B \u0441 BLUM, Hettich, Boyard \u0438 \u0435\u0449\u0451 38 \u0431\u0440\u0435\u043D\u0434\u0430\u043C\u0438."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    borderTop: "1px solid rgba(255,255,255,.12)",
    borderBottom: "1px solid rgba(255,255,255,.12)"
  }
}, [["−18%", "макс. опт-скидка"], ["1 ч", "ответ менеджера"], ["30k", "мин. заказ, ₽"], ["17 лет", "на рынке РФ"]].map(([big, sm], i) => /*#__PURE__*/React.createElement("div", {
  key: sm,
  style: {
    padding: "20px 0",
    borderRight: i < 3 ? "1px solid rgba(255,255,255,.12)" : "none",
    paddingLeft: i === 0 ? 0 : 22
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 38,
    lineHeight: 1,
    color: "var(--mf-green-300)",
    fontWeight: 500
  }
}, big), /*#__PURE__*/React.createElement("div", {
  className: "mf-mono",
  style: {
    fontSize: 11,
    color: "rgba(255,255,255,.55)",
    marginTop: 8,
    letterSpacing: ".04em"
  }
}, sm)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex"
  }
}, ["А", "К", "М", "Э", "+"].map((c, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    width: 38,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: i === 4 ? "var(--mf-amber)" : "var(--mf-green-500)",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-display)",
    fontSize: 14,
    fontWeight: 600,
    marginLeft: i === 0 ? 0 : -10,
    border: "2px solid var(--mf-green-900)"
  }
}, c))), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: "rgba(255,255,255,.7)",
    lineHeight: 1.45
  }
}, /*#__PURE__*/React.createElement("b", {
  style: {
    color: "#fff"
  }
}, "1 240+"), " \u043C\u0435\u0431\u0435\u043B\u044C\u043D\u044B\u0445 \u0444\u0430\u0431\u0440\u0438\u043A, \u0430\u0442\u0435\u043B\u044C\u0435 \u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432", /*#__PURE__*/React.createElement("br", null), "\u043F\u043E\u043A\u0443\u043F\u0430\u044E\u0442 \u0443 \u043D\u0430\u0441 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E"))), /*#__PURE__*/React.createElement("aside", {
  style: {
    background: "var(--mf-paper)",
    color: "var(--mf-ink)",
    borderRadius: 22,
    padding: 32,
    boxShadow: "var(--mf-shadow-pop)",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: -14,
    left: 28,
    background: "var(--mf-amber)",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: 4,
    fontFamily: "var(--mf-font-mono)",
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase"
  }
}, "\u2605 \u0444\u043E\u0440\u043C\u0430 \u0437\u0430\u044F\u0432\u043A\u0438 \xB7 60 \u0441\u0435\u043A\u0443\u043D\u0434"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 30,
    lineHeight: 1.05,
    marginBottom: 6
  }
}, "\u041F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u043D\u0430\u043C, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u2014"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontStyle: "italic",
    fontSize: 24,
    color: "var(--mf-green-700)",
    marginBottom: 24,
    lineHeight: 1.1
  }
}, "\u0432\u044B\u0448\u043B\u0435\u043C \u043F\u0440\u0430\u0439\u0441 \u0441 \u043B\u0443\u0447\u0448\u0438\u043C\u0438 \u0446\u0435\u043D\u0430\u043C\u0438."), /*#__PURE__*/React.createElement(LeadForm, {
  id: "lead-hero"
}))));

// ── CATEGORIES ─────────────────────────────────────────────
const WHOLESALE_CATS = [{
  name: "Мебельные ручки",
  n: 412,
  moq: "от 50 шт.",
  price: "от 78 ₽/шт",
  group: "мебель",
  featured: true,
  bullets: ["BLUM, Boyard, GTV", "в наличии 412 SKU", "отгрузка в день оплаты"]
}, {
  name: "Доводчики и петли",
  n: 142,
  moq: "от 100 шт.",
  price: "от 142 ₽/шт",
  group: "мебель",
  bullets: ["CLIP top BLUMOTION", "антик, никель, хром", "гарантия 18 мес."]
}, {
  name: "Направляющие",
  n: 286,
  moq: "от 30 пар",
  price: "от 412 ₽/пар",
  group: "мебель",
  bullets: ["350–600 мм", "шариковые, скрытые", "до 45 кг"]
}, {
  name: "Ножки мебельные",
  n: 94,
  moq: "от 20 шт.",
  price: "от 198 ₽/шт",
  group: "мебель",
  bullets: ["50–800 мм", "±10 мм регулировка", "нагрузка 150 кг"]
}, {
  name: "Системы Джокер",
  n: 67,
  moq: "от 10 компл.",
  price: "от 1 240 ₽/компл.",
  group: "мебель",
  bullets: ["хром, латунь, антик", "полки, штанги, корзины", "совместимость 100%"]
}, {
  name: "Крепёж и метизы",
  n: 124,
  moq: "от 1 000 шт.",
  price: "от 1.8 ₽/шт",
  group: "мебель",
  bullets: ["шуруп, дюбель, евровинт", "оцинковка, нерж.", "паллеты от 50 кг"]
}, {
  name: "Швейная фурнитура",
  n: 504,
  moq: "от 200 шт.",
  price: "от 4 ₽/шт",
  group: "рукоделие",
  featured: true,
  bullets: ["молнии, пуговицы", "кнопки, фастексы", "в катушках и упаковках"]
}, {
  name: "Бусины и бижутерия",
  n: 558,
  moq: "от 100 шт.",
  price: "от 6 ₽/шт",
  group: "рукоделие",
  bullets: ["акрил, янтарь, камень", "2–24 мм", "эксклюзив из Чехии"]
}, {
  name: "Фурнитура для сумок",
  n: 198,
  moq: "от 30 шт.",
  price: "от 64 ₽/шт",
  group: "рукоделие",
  bullets: ["карабины, замки", "бронза антик, хром", "для кожи и текстиля"]
}, {
  name: "Москитные сетки",
  n: 31,
  moq: "от 10 шт.",
  price: "от 980 ₽/шт",
  group: "дом",
  bullets: ["рамочные, Roll Up", "до 150×220 см", "комплектация под объект"]
}, {
  name: "Шпагат и упаковка",
  n: 23,
  moq: "от 50 кг",
  price: "от 142 ₽/кг",
  group: "дом",
  bullets: ["джут, лён, ПП", "для производств", "намотка под заказ"]
}, {
  name: "Сезон и распродажа",
  n: 88,
  moq: "от 30 000 ₽",
  price: "до −40%",
  group: "акции",
  bullets: ["остатки коллекций", "ликвидация склада", "обновление ежемесячно"]
}];
const WholesaleCategories = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "100px 40px 60px",
    background: "var(--mf-paper)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40,
    gap: 40
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow"
}, "01 \xB7 \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043E\u043F\u0442\u0430"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 64,
    lineHeight: .95,
    marginTop: 14,
    maxWidth: 760
  }
}, "12 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 ", /*#__PURE__*/React.createElement("em", {
  style: {
    color: "var(--mf-green-700)"
  }
}, "\u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"), /*#__PURE__*/React.createElement("br", null), "\u0438 \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437.")), /*#__PURE__*/React.createElement("p", {
  style: {
    maxWidth: 380,
    fontSize: 15,
    color: "var(--mf-stone-500)",
    lineHeight: 1.55
  }
}, "\u0412 \u043A\u0430\u0436\u0434\u043E\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u2014 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043A\u043B\u0430\u0434 \u0432 \u0421\u0430\u043C\u0430\u0440\u0435 \u0438 \u043F\u0440\u044F\u043C\u044B\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B \u0441 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C\u0438. \u041C\u041F\u0417 \u2014 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F \u0434\u043B\u044F \u043E\u043F\u0442-\u0446\u0435\u043D\u044B. \u041D\u0430 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u2014 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14
  }
}, WHOLESALE_CATS.map((c, i) => {
  const featured = c.featured;
  return /*#__PURE__*/React.createElement("a", {
    key: c.name,
    style: {
      position: "relative",
      background: featured ? "var(--mf-green-700)" : "var(--mf-white)",
      color: featured ? "#fff" : "var(--mf-ink)",
      border: featured ? 0 : "1px solid var(--mf-stone-200)",
      borderRadius: 16,
      padding: "22px 22px 22px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      cursor: "pointer",
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mf-mono",
    style: {
      fontSize: 10,
      opacity: .55,
      letterSpacing: ".06em"
    }
  }, String(i + 1).padStart(2, "0"), " \xB7 ", c.group), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--mf-font-display)",
      fontSize: 22,
      lineHeight: 1.05,
      marginTop: 8,
      maxWidth: 200
    }
  }, c.name)), /*#__PURE__*/React.createElement(HexPh, {
    label: "",
    size: 56,
    tone: featured ? "dark" : i % 3 === 0 ? "green" : "stone"
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      fontSize: 12,
      opacity: .85
    }
  }, c.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      marginTop: 7,
      borderRadius: 99,
      background: featured ? "var(--mf-green-300)" : "var(--mf-green-700)",
      flexShrink: 0
    }
  }), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 14,
      borderTop: `1px ${featured ? "solid rgba(255,255,255,.18)" : "dashed var(--mf-stone-300)"}`,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mf-mono",
    style: {
      fontSize: 10,
      opacity: .55,
      letterSpacing: ".05em"
    }
  }, "\u041C\u041F\u0417"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      marginTop: 2
    }
  }, c.moq)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mf-mono",
    style: {
      fontSize: 10,
      opacity: .55,
      letterSpacing: ".05em"
    }
  }, "\u041E\u043F\u0442-\u0446\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      marginTop: 2,
      fontFamily: "var(--mf-font-mono)"
    }
  }, c.price))));
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    padding: "22px 28px",
    background: "var(--mf-ink)",
    color: "#fff",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 44,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-amber)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-display)",
    fontSize: 18
  }
}, "?"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 19
  }
}, "\u0412\u0430\u0448\u0435\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043D\u0435\u0442 \u0432 \u0441\u043F\u0438\u0441\u043A\u0435?"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: "rgba(255,255,255,.6)",
    marginTop: 3
  }
}, "\u041F\u0440\u0438\u0432\u043E\u0437\u0438\u043C \u043F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437 \u0438\u0437 6 \u0441\u0442\u0440\u0430\u043D. \u0421\u0440\u043E\u043A \u2014 3\u201314 \u0434\u043D\u0435\u0439."))), /*#__PURE__*/React.createElement("a", {
  href: "#lead-bottom",
  className: "mf-btn",
  style: {
    background: "var(--mf-green-300)",
    color: "var(--mf-green-900)",
    height: 46,
    padding: "0 22px"
  }
}, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E ", Ic.arrowR)));

// ── DISCOUNT LADDER ────────────────────────────────────────
const TIERS = [{
  from: "от 30 000 ₽",
  name: "Старт",
  disc: "−7%",
  desc: "Базовая опт-цена. Без договора, безналом или картой.",
  color: "var(--mf-stone-200)",
  fg: "var(--mf-ink)"
}, {
  from: "от 100 000 ₽",
  name: "Партнёр",
  disc: "−12%",
  desc: "Договор поставки, отсрочка до 14 дней, УПД электронно.",
  color: "var(--mf-green-300)",
  fg: "var(--mf-green-900)"
}, {
  from: "от 300 000 ₽",
  name: "Дилер",
  disc: "−18%",
  desc: "Закреплённый менеджер, бронь склада, отсрочка до 30 дней.",
  color: "var(--mf-green-500)",
  fg: "#fff",
  featured: true
}, {
  from: "от 1 000 000 ₽",
  name: "Контракт",
  disc: "инд.",
  desc: "Индивидуальные условия, импорт под объём, сертификация.",
  color: "var(--mf-ink)",
  fg: "#fff"
}];
const DiscountLadder = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "60px 40px 100px",
    background: "var(--mf-paper)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40,
    gap: 40
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow"
}, "02 \xB7 \u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E \u043E\u0431\u044A\u0451\u043C\u0443"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 64,
    lineHeight: .95,
    marginTop: 14,
    maxWidth: 780
  }
}, "\u0427\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u2014 ", /*#__PURE__*/React.createElement("em", {
  style: {
    color: "var(--mf-green-700)"
  }
}, "\u0442\u0435\u043C \u0432\u044B\u0433\u043E\u0434\u043D\u0435\u0435"), ".", /*#__PURE__*/React.createElement("br", null), "\u041B\u0435\u0441\u0442\u043D\u0438\u0446\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430.")), /*#__PURE__*/React.createElement("p", {
  style: {
    maxWidth: 380,
    fontSize: 15,
    color: "var(--mf-stone-500)",
    lineHeight: 1.55
  }
}, "\u0421\u0443\u043C\u043C\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u043C\u0435\u0441\u044F\u0447\u043D\u043E\u043C\u0443 \u043E\u0431\u043E\u0440\u043E\u0442\u0443, \u043D\u0435 \u043F\u043E \u0440\u0430\u0437\u043E\u0432\u043E\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0443. \u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430 \u2014 \u0434\u0430\u043B\u0435\u0435 \xAB\u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044F\xBB \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14,
    position: "relative"
  }
}, TIERS.map((t, i) => /*#__PURE__*/React.createElement("article", {
  key: t.name,
  style: {
    background: t.color,
    color: t.fg,
    borderRadius: 16,
    padding: "26px 24px 24px",
    position: "relative",
    overflow: "hidden",
    transform: t.featured ? "translateY(-8px)" : "none",
    boxShadow: t.featured ? "var(--mf-shadow-pop)" : "none",
    minHeight: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}, t.featured && /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 14,
    right: 14,
    background: "var(--mf-amber)",
    color: "#fff",
    padding: "3px 9px",
    borderRadius: 4,
    fontFamily: "var(--mf-font-mono)",
    fontSize: 10,
    letterSpacing: ".06em",
    textTransform: "uppercase"
  }
}, "\u2605 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u043E"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-mono",
  style: {
    fontSize: 11,
    opacity: .65,
    letterSpacing: ".06em",
    textTransform: "uppercase"
  }
}, String(i + 1).padStart(2, "0"), " \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 28,
    marginTop: 8,
    color: t.fg
  }
}, t.name), /*#__PURE__*/React.createElement("div", {
  className: "mf-mono",
  style: {
    fontSize: 12,
    marginTop: 4,
    opacity: .7
  }
}, t.from, " \u0432 \u043C\u0435\u0441\u044F\u0446")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 64,
    lineHeight: 1,
    fontWeight: 500,
    letterSpacing: "-0.02em",
    margin: "18px 0"
  }
}, t.disc), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    lineHeight: 1.5,
    opacity: .85
  }
}, t.desc)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 28,
    padding: 20,
    border: "1px dashed var(--mf-stone-300)",
    borderRadius: 12,
    display: "flex",
    gap: 30,
    flexWrap: "wrap",
    fontSize: 12,
    color: "var(--mf-stone-500)",
    fontFamily: "var(--mf-font-mono)",
    lineHeight: 1.5
  }
}, /*#__PURE__*/React.createElement("span", null, "\xB7 \u043E\u043F\u043B\u0430\u0442\u0430 \u2014 \u0441\u0447\u0451\u0442, \u0421\u0411\u041F, \u043A\u0430\u0440\u0442\u0430, \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 \u0447\u0435\u0440\u0435\u0437 \u043A\u0430\u0441\u0441\u0443"), /*#__PURE__*/React.createElement("span", null, "\xB7 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F \u2014 \u0423\u041F\u0414, \u0421\u0424, \u0434\u043E\u0433\u043E\u0432\u043E\u0440-\u043E\u0444\u0435\u0440\u0442\u0430 \u0438\u043B\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439"), /*#__PURE__*/React.createElement("span", null, "\xB7 \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u2014 \u0434\u043E 30 \u0434\u043D\u0435\u0439 \u0431\u0435\u0437 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u0447\u0438\u043D"), /*#__PURE__*/React.createElement("span", null, "\xB7 \u0440\u0435\u0437\u0435\u0440\u0432 \u2014 \u0434\u043E 7 \u0434\u043D\u0435\u0439 \u0431\u0435\u0437 \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432")));

// ── HOW IT WORKS ───────────────────────────────────────────
const STEPS = [{
  n: "01",
  t: "Заявка",
  d: "Оставьте форму с категорией и объёмом. Можно прислать готовый список SKU или Excel — мы импортируем.",
  time: "60 секунд"
}, {
  n: "02",
  t: "Прайс под объём",
  d: "Менеджер рассчитает индивидуальную цену под ваши позиции и пришлёт КП в PDF и Excel.",
  time: "до 1 часа"
}, {
  n: "03",
  t: "Договор и оплата",
  d: "Подписываем договор поставки в ЭДО (Контур, СБИС, Диадок). Счёт — день в день.",
  time: "1 день"
}, {
  n: "04",
  t: "Отгрузка",
  d: "В день оплаты — со склада в Самаре. По РФ — CDEK, Boxberry, ПЭК, своя машина в области.",
  time: "1–3 дня по РФ"
}];
const HowItWorks = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "100px 40px",
    background: "var(--mf-paper-2)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow"
}, "03 \xB7 \u041F\u0440\u043E\u0446\u0435\u0441\u0441"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 64,
    lineHeight: .95,
    marginTop: 14
  }
}, "4 \u0448\u0430\u0433\u0430 \u043E\u0442 \u0437\u0430\u044F\u0432\u043A\u0438 \u2014", /*#__PURE__*/React.createElement("br", null), "\u0434\u043E ", /*#__PURE__*/React.createElement("em", {
  style: {
    color: "var(--mf-green-700)"
  }
}, "\u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438"), ".")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14,
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    top: 36,
    left: "12.5%",
    right: "12.5%",
    height: 1,
    backgroundImage: "repeating-linear-gradient(90deg, var(--mf-stone-400) 0 6px, transparent 6px 12px)",
    backgroundSize: "100% 1px",
    zIndex: 0
  }
}), STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
  key: s.n,
  style: {
    background: "var(--mf-paper)",
    borderRadius: 16,
    padding: 24,
    position: "relative",
    zIndex: 1,
    border: "1px solid var(--mf-stone-200)",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    minHeight: 240
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 52,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: i === 0 ? "var(--mf-amber)" : "var(--mf-green-700)",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-display)",
    fontSize: 16,
    fontWeight: 600
  }
}, s.n), /*#__PURE__*/React.createElement("span", {
  className: "mf-mono",
  style: {
    fontSize: 11,
    color: "var(--mf-stone-500)"
  }
}, "~ ", s.time)), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 26,
    lineHeight: 1.05,
    color: "var(--mf-ink)"
  }
}, s.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    color: "var(--mf-stone-700)",
    lineHeight: 1.55
  }
}, s.d)))));

// ── WHAT YOU GET (benefits grid) ───────────────────────────
const BENEFITS = [{
  t: "Прямые контракты",
  d: "BLUM, Hettich, Boyard, GTV, AKS, AMIX — без посредников. Цены ниже московских ритейл-сетей на 12–22%."
}, {
  t: "Склад 4 800 м²",
  d: "Самара, тёплый склад, видеонаблюдение, бронь до 30 дней. 3 247 позиций — в наличии."
}, {
  t: "Свой автопарк",
  d: "8 машин по Самаре и области — отгрузка день в день. По РФ — CDEK, Boxberry, ПЭК, авиа."
}, {
  t: "Бухгалтерия в ЭДО",
  d: "Контур, СБИС, Диадок. УПД, СФ, договор поставки. Отгрузка с НДС или без — по вашей системе."
}, {
  t: "Закреплённый менеджер",
  d: "Из мастеров с 10+ лет на производстве. Помогает с подбором, заменой и спорными позициями."
}, {
  t: "Возврат и обмен",
  d: "До 30 дней без объяснения причин. Брак — забираем сами, возмещаем 100% в течение 3 дней."
}];
const Benefits = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "100px 40px",
    background: "var(--mf-paper)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.6fr",
    gap: 60,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow"
}, "04 \xB7 \u0427\u0442\u043E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 56,
    lineHeight: .95,
    marginTop: 14
  }
}, "\u041E\u043F\u0442 \u2014 \u044D\u0442\u043E \u043D\u0435", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
  style: {
    color: "var(--mf-green-700)"
  }
}, "\xAB\u0441\u043A\u0438\u0434\u043A\u0430 \u0437\u0430 \u043E\u0431\u044A\u0451\u043C\xBB."), /*#__PURE__*/React.createElement("br", null), "\u042D\u0442\u043E \u0441\u0435\u0440\u0432\u0438\u0441."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: "var(--mf-stone-500)",
    lineHeight: 1.55,
    marginTop: 20,
    maxWidth: 360
  }
}, "\u0412 \u0446\u0435\u043D\u0443 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440, \u0441\u043A\u043B\u0430\u0434, \u042D\u0414\u041E, \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u0431\u043C\u0435\u043D. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A \u043D\u0430\u043C \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u2014", " ", /*#__PURE__*/React.createElement("b", {
  style: {
    color: "var(--mf-ink)"
  }
}, "87% \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432"), " ", "\u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 3 \u043C\u0435\u0441\u044F\u0446\u0435\u0432.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14
  }
}, BENEFITS.map((b, i) => /*#__PURE__*/React.createElement("div", {
  key: b.t,
  style: {
    padding: 22,
    background: "var(--mf-white)",
    border: "1px solid var(--mf-stone-200)",
    borderRadius: 14,
    display: "flex",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 44,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: i % 2 ? "var(--mf-green-100)" : "var(--mf-stone-100)",
    color: "var(--mf-green-700)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-display)",
    fontSize: 14,
    fontWeight: 600,
    flexShrink: 0
  }
}, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
  style: {
    fontFamily: "var(--mf-font-text)",
    fontSize: 16,
    fontWeight: 600,
    color: "var(--mf-ink)",
    marginBottom: 6
  }
}, b.t), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    color: "var(--mf-stone-500)",
    lineHeight: 1.5
  }
}, b.d)))))));

// ── CLIENTS / CASES ────────────────────────────────────────
const CASES = [{
  co: "«Мебель Эра»",
  city: "Самара",
  role: "мебельная фабрика",
  since: "с 2014",
  what: "20 000 петель + 8 000 направляющих в месяц",
  saving: "−16% к прошлому поставщику",
  tone: "dark"
}, {
  co: "Ателье «Шов»",
  city: "Казань",
  role: "пошив сумок",
  since: "с 2019",
  what: "карабины, заклёпки, молнии — мелкий опт",
  saving: "ассортимент x2.4 за полгода",
  tone: "paper"
}, {
  co: "ИП Кирсанов",
  city: "Уфа",
  role: "монтаж москиток",
  since: "с 2021",
  what: "сезонные поставки 4 800 сеток",
  saving: "−24% и доставка день в день",
  tone: "stone"
}];
const Cases = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "0 40px 100px",
    background: "var(--mf-paper)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow"
}, "05 \xB7 \u041A\u043B\u0438\u0435\u043D\u0442\u044B"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: 56,
    lineHeight: .95,
    marginTop: 14,
    maxWidth: 760
  }
}, "1 240+ \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0443\u0436\u0435", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
  style: {
    color: "var(--mf-green-700)"
  }
}, "\u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0441 \u043D\u0430\u043C\u0438"), ".")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8
  }
}, ["Все", "Мебельные", "Швейные", "Стройка", "Розница"].map((t, i) => /*#__PURE__*/React.createElement("button", {
  key: t,
  className: "mf-btn mf-btn--sm",
  style: {
    background: i === 0 ? "var(--mf-ink)" : "transparent",
    color: i === 0 ? "#fff" : "var(--mf-stone-700)",
    border: i === 0 ? 0 : "1px solid var(--mf-stone-200)"
  }
}, t)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 0,
    border: "1px solid var(--mf-stone-200)",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 28
  }
}, ["МЕБЕЛЬ ЭРА", "Шов&Со", "Кирсанов", "ТД АЛЬТА", "KronoCity", "Сделай-Сам", "ИП Васнецов", "ШкафПрофи", "Бусины+", "МосДекор", "Стройсити", "и 1 230 +"].map((logo, i) => /*#__PURE__*/React.createElement("div", {
  key: logo + i,
  style: {
    padding: "26px 14px",
    borderRight: (i + 1) % 6 ? "1px solid var(--mf-stone-200)" : 0,
    borderBottom: i < 6 ? "1px solid var(--mf-stone-200)" : 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--mf-white)",
    color: i === 11 ? "var(--mf-green-700)" : "var(--mf-stone-500)",
    fontFamily: i === 11 ? "var(--mf-font-display)" : "var(--mf-font-text)",
    fontWeight: i === 11 ? 600 : 500,
    fontSize: i === 11 ? 14 : 13,
    letterSpacing: i === 11 ? 0 : ".08em",
    textTransform: i === 11 ? "none" : "uppercase",
    fontStyle: i === 11 ? "italic" : "normal"
  }
}, logo))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14
  }
}, CASES.map((c, i) => /*#__PURE__*/React.createElement("article", {
  key: c.co,
  style: {
    background: i === 0 ? "var(--mf-green-700)" : "var(--mf-white)",
    color: i === 0 ? "#fff" : "var(--mf-ink)",
    borderRadius: 16,
    padding: 24,
    overflow: "hidden",
    border: i === 0 ? 0 : "1px solid var(--mf-stone-200)",
    position: "relative",
    minHeight: 360,
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 22,
    lineHeight: 1.1
  }
}, c.co), /*#__PURE__*/React.createElement("div", {
  className: "mf-mono",
  style: {
    fontSize: 11,
    opacity: .6,
    marginTop: 4,
    letterSpacing: ".04em"
  }
}, c.city, " \xB7 ", c.role, " \xB7 ", c.since)), /*#__PURE__*/React.createElement(HexPh, {
  size: 66,
  tone: c.tone
})), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "16px 0",
    margin: "auto 0",
    borderTop: `1px ${i === 0 ? "solid rgba(255,255,255,.15)" : "dashed var(--mf-stone-300)"}`,
    borderBottom: `1px ${i === 0 ? "solid rgba(255,255,255,.15)" : "dashed var(--mf-stone-300)"}`
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mf-mono",
  style: {
    fontSize: 10,
    opacity: .55,
    letterSpacing: ".06em",
    textTransform: "uppercase"
  }
}, "\u0447\u0442\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u044E\u0442"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 15,
    marginTop: 6,
    lineHeight: 1.4
  }
}, c.what)), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 36,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: i === 0 ? "var(--mf-amber)" : "var(--mf-green-700)",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--mf-font-display)",
    fontSize: 14,
    fontWeight: 600
  }
}, "\u2191"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontStyle: "italic",
    fontSize: 17,
    lineHeight: 1.2
  }
}, c.saving))))));

// ── FAQ ────────────────────────────────────────────────────
const FAQ_ITEMS = [{
  q: "С какого объёма начинается опт?",
  a: "С 30 000 ₽ месячного оборота. Это около 200 петель или 50 пар направляющих среднего класса. Для разовой покупки от 30 000 ₽ — −7% автоматически в кабинете."
}, {
  q: "Работаете с самозанятыми?",
  a: "Да. УПД и кассовый чек ОФД. Договор-оферта или индивидуальный. НДС включён в цену; счёт без НДС — по запросу."
}, {
  q: "Какие сроки отгрузки?",
  a: "День в день при оплате до 14:00 МСК. По РФ — CDEK, Boxberry, ПЭК (1–3 дня в ЦФО, 3–7 дней до Сибири и ДФО). По Самаре и области — своя машина."
}, {
  q: "Можно ли резервировать товар?",
  a: "Да, до 7 дней без предоплаты для постоянных клиентов. Для новых — после первого заказа. Бронь — через закреплённого менеджера."
}, {
  q: "Что с импортом и санкциями?",
  a: "Импортируем BLUM, Hettich, Häfele через прямые контракты в Турции и Казахстане. Сертификаты ТР ТС — на всю партию."
}, {
  q: "Какой минимум по SKU?",
  a: "Минимальная партия зависит от категории (см. блок «Категории»). Меньшие объёмы возможны, но не по опт-цене. Несколько SKU суммируются в один заказ."
}];
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 40px",
      background: "var(--mf-paper-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 60,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mf-eyebrow"
  }, "06 \xB7 \u0412\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 56,
      lineHeight: .95,
      marginTop: 14
    }
  }, "\u0422\u043E, \u0447\u0442\u043E \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--mf-green-700)"
    }
  }, "\u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u044E\u0442"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: 20,
      background: "var(--mf-paper)",
      borderRadius: 14,
      border: "1px solid var(--mf-stone-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mf-mono",
    style: {
      fontSize: 11,
      color: "var(--mf-stone-500)"
    }
  }, "\u041D\u0435 \u043D\u0430\u0448\u043B\u0438 \u043E\u0442\u0432\u0435\u0442?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--mf-font-display)",
      fontSize: 18,
      marginTop: 6,
      lineHeight: 1.2
    }
  }, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 Telegram \u2014", /*#__PURE__*/React.createElement("br", null), "\u043E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0437\u0430 5 \u043C\u0438\u043D\u0443\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "mf-btn mf-btn--sm",
    style: {
      background: "var(--mf-ink)",
      color: "#fff"
    }
  }, "Telegram"), /*#__PURE__*/React.createElement("button", {
    className: "mf-btn mf-btn--sm mf-btn--light"
  }, "WhatsApp")))), /*#__PURE__*/React.createElement("div", null, FAQ_ITEMS.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? "1px solid var(--mf-stone-300)" : "none",
        borderBottom: "1px solid var(--mf-stone-300)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        padding: "22px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 18,
        background: "transparent",
        border: 0,
        textAlign: "left",
        fontFamily: "var(--mf-font-display)",
        fontSize: 22,
        lineHeight: 1.15,
        color: "var(--mf-ink)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        aspectRatio: "0.866/1",
        clipPath: "var(--hex-clip)",
        background: isOpen ? "var(--mf-green-700)" : "var(--mf-stone-100)",
        color: isOpen ? "#fff" : "var(--mf-ink)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        transition: "all .2s",
        flexShrink: 0
      }
    }, isOpen ? "−" : "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 22,
        paddingRight: 60,
        fontSize: 15,
        color: "var(--mf-stone-700)",
        lineHeight: 1.6
      }
    }, it.a));
  }))));
};

// ── PURCHASE QUIZ — квалификация лида за 5 шагов ───────────
const QUIZ_STEPS = [{
  key: "cat",
  title: "Что закупаете?",
  sub: "Выберите основную категорию — детали уточним в КП.",
  options: [{ v: "Мебельная фурнитура", h: "М" }, { v: "Швейная фурнитура", h: "Ш" }, { v: "Рукоделие и бижутерия", h: "Б" }, { v: "Москитные сетки", h: "С" }, { v: "Системы Джокер", h: "Д" }, { v: "Несколько категорий", h: "+" }]
}, {
  key: "volume",
  title: "Объём закупки в месяц?",
  sub: "От объёма зависит ваш уровень и опт-скидка.",
  options: [{ v: "до 30 тыс. ₽", tier: 0 }, { v: "30–100 тыс. ₽", tier: 1 }, { v: "100–300 тыс. ₽", tier: 2 }, { v: "300 тыс. – 1 млн ₽", tier: 3 }, { v: "от 1 млн ₽", tier: 3 }]
}, {
  key: "timing",
  title: "Когда нужна первая поставка?",
  sub: "Если срочно — забронируем склад сразу после получения заявки.",
  options: [{ v: "Сегодня–завтра", h: "!" }, { v: "На этой неделе", h: "7" }, { v: "В течение месяца", h: "M" }, { v: "Пока подбираем", h: "?" }]
}, {
  key: "format",
  title: "Формат работы",
  sub: "Подскажет, какие документы готовить и какую цену показывать.",
  options: [{ v: "ИП / ООО, с НДС", h: "Ю" }, { v: "ИП / ООО, без НДС", h: "У" }, { v: "Самозанятый", h: "С" }, { v: "Физлицо / опт по карте", h: "Ф" }]
}, {
  key: "region",
  title: "Регион доставки",
  sub: "Подберём оптимальный способ и срок.",
  options: [{ v: "Самара и область", h: "С" }, { v: "Москва / Санкт-Петербург", h: "М" }, { v: "ЦФО / Поволжье", h: "Ц" }, { v: "Урал / Сибирь / ДФО", h: "У" }, { v: "СНГ", h: "+" }]
}];
const QUIZ_TIERS = [{ name: "Старт", disc: "−7%", desc: "Базовый опт без договора, оплата картой или СБП." }, { name: "Партнёр", disc: "−12%", desc: "Договор, отсрочка до 14 дней, УПД в ЭДО." }, { name: "Дилер", disc: "−18%", desc: "Закреплённый менеджер, бронь склада, отсрочка до 30 дней." }, { name: "Контракт", disc: "инд.", desc: "Индивидуальные условия, импорт под объём, сертификация." }];

const PurchaseQuiz = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [contact, setContact] = React.useState({ name: "", phone: "", company: "" });
  const [sent, setSent] = React.useState(false);

  const total = QUIZ_STEPS.length;
  const done = step >= total;
  const tierIdx = (() => {
    const v = answers.volume;
    const opt = (QUIZ_STEPS[1].options || []).find(o => o.v === v);
    return opt ? opt.tier : 0;
  })();
  const tier = QUIZ_TIERS[tierIdx];

  const choose = (key, value) => {
    setAnswers(a => ({ ...a, [key]: value }));
    setTimeout(() => setStep(s => Math.min(s + 1, total)), 180);
  };
  const back = () => setStep(s => Math.max(0, s - 1));
  const restart = () => { setStep(0); setAnswers({}); setContact({ name: "", phone: "", company: "" }); setSent(false); };

  const progress = Math.min(100, Math.round(((done ? total : step) / total) * 100));

  return /*#__PURE__*/React.createElement("section", {
    id: "quiz",
    style: {
      padding: "100px 40px",
      background: "var(--mf-paper)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: { position: "absolute", right: -120, top: -120, width: 380, aspectRatio: "0.866/1", clipPath: "var(--hex-clip)", background: "var(--mf-green-100)", opacity: .55 }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: { position: "absolute", left: -80, bottom: -80, width: 260, aspectRatio: "0.866/1", clipPath: "var(--hex-clip)", background: "var(--mf-stone-100)" }
  }), /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, gap: 40, position: "relative" }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", { className: "mf-eyebrow" }, "07 · Квиз на закупку"), /*#__PURE__*/React.createElement("h2", {
    style: { fontSize: 64, lineHeight: .95, marginTop: 14, maxWidth: 780 }
  }, "Подберём ваш уровень — ", /*#__PURE__*/React.createElement("em", { style: { color: "var(--mf-green-700)" } }, "5 вопросов"), ".")), /*#__PURE__*/React.createElement("p", {
    style: { maxWidth: 360, fontSize: 15, color: "var(--mf-stone-500)", lineHeight: 1.55 }
  }, "Ответьте на 5 простых вопросов — и менеджер пришлёт прайс под ваш объём, формат работы и регион. Без обязательств.")), /*#__PURE__*/React.createElement("div", {
    style: { position: "relative", background: "var(--mf-white)", border: "1px solid var(--mf-stone-200)", borderRadius: 20, padding: 36, boxShadow: "var(--mf-shadow-card)", overflow: "hidden" }
  },
  /* progress */
  /*#__PURE__*/React.createElement("div", {
    style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22, gap: 16, flexWrap: "wrap" }
  }, /*#__PURE__*/React.createElement("div", { className: "mf-mono", style: { fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mf-stone-500)" } }, done ? "результат" : `шаг ${step + 1} из ${total}`),
  /*#__PURE__*/React.createElement("div", {
    style: { flex: 1, minWidth: 180, height: 6, background: "var(--mf-stone-100)", borderRadius: 99, overflow: "hidden" }
  }, /*#__PURE__*/React.createElement("div", { style: { width: `${progress}%`, height: "100%", background: "var(--mf-green-500)", transition: "width .3s" } })),
  /*#__PURE__*/React.createElement("div", { className: "mf-mono", style: { fontSize: 11, color: "var(--mf-stone-500)" } }, `${progress}%`),
  step > 0 && !done && /*#__PURE__*/React.createElement("button", {
    onClick: back, className: "mf-btn mf-btn--sm mf-btn--light"
  }, "← Назад")),

  /* steps */
  !done && QUIZ_STEPS.map((q, qi) => qi === step && /*#__PURE__*/React.createElement("div", {
    key: q.key
  }, /*#__PURE__*/React.createElement("h3", {
    style: { fontFamily: "var(--mf-font-display)", fontSize: 30, lineHeight: 1.1, color: "var(--mf-ink)", marginBottom: 8 }
  }, q.title),
  q.sub && /*#__PURE__*/React.createElement("p", {
    style: { fontSize: 14, color: "var(--mf-stone-500)", marginBottom: 22, lineHeight: 1.5 }
  }, q.sub),
  /*#__PURE__*/React.createElement("div", {
    style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }
  }, q.options.map(o => {
    const selected = answers[q.key] === o.v;
    return /*#__PURE__*/React.createElement("button", {
      key: o.v,
      onClick: () => choose(q.key, o.v),
      style: {
        textAlign: "left",
        padding: "16px 16px",
        background: selected ? "var(--mf-green-700)" : "var(--mf-white)",
        color: selected ? "#fff" : "var(--mf-ink)",
        border: `1px solid ${selected ? "var(--mf-green-700)" : "var(--mf-stone-200)"}`,
        borderRadius: 12,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 14,
        transition: "background .15s, border-color .15s, color .15s",
        font: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: { width: 38, aspectRatio: "0.866/1", clipPath: "var(--hex-clip)", background: selected ? "var(--mf-green-300)" : "var(--mf-stone-100)", color: selected ? "var(--mf-green-900)" : "var(--mf-green-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mf-font-display)", fontSize: 14, fontWeight: 600, flexShrink: 0 }
    }, o.h || "·"), /*#__PURE__*/React.createElement("span", { style: { fontSize: 14, fontWeight: 500, lineHeight: 1.3 } }, o.v));
  })))),

  /* result */
  done && !sent && /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("div", {
      style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }
    },
      /*#__PURE__*/React.createElement("div", {
        style: { background: tier.name === "Старт" ? "var(--mf-stone-100)" : tier.name === "Партнёр" ? "var(--mf-green-100)" : tier.name === "Дилер" ? "var(--mf-green-700)" : "var(--mf-ink)", color: tier.name === "Дилер" || tier.name === "Контракт" ? "#fff" : "var(--mf-ink)", borderRadius: 16, padding: 28, position: "relative", overflow: "hidden" }
      },
        /*#__PURE__*/React.createElement("div", { className: "mf-mono", style: { fontSize: 11, opacity: .65, letterSpacing: ".08em", textTransform: "uppercase" } }, "Ваш уровень"),
        /*#__PURE__*/React.createElement("div", { style: { fontFamily: "var(--mf-font-display)", fontSize: 42, marginTop: 8, lineHeight: 1 } }, tier.name),
        /*#__PURE__*/React.createElement("div", { style: { fontFamily: "var(--mf-font-display)", fontSize: 64, lineHeight: 1, margin: "18px 0 12px", letterSpacing: "-0.02em" } }, tier.disc),
        /*#__PURE__*/React.createElement("p", { style: { fontSize: 13, lineHeight: 1.5, opacity: .85 } }, tier.desc),
        /*#__PURE__*/React.createElement("ul", {
          style: { listStyle: "none", padding: 0, marginTop: 18, display: "flex", flexDirection: "column", gap: 6, fontSize: 12, opacity: .9 }
        }, QUIZ_STEPS.map(q => answers[q.key] && /*#__PURE__*/React.createElement("li", {
          key: q.key, style: { display: "flex", gap: 8 }
        }, /*#__PURE__*/React.createElement("span", { style: { opacity: .55 } }, q.title.replace("?", ":")), /*#__PURE__*/React.createElement("b", null, answers[q.key]))))
      ),
      /*#__PURE__*/React.createElement("form", {
        onSubmit: e => { e.preventDefault(); setSent(true); },
        style: { display: "flex", flexDirection: "column", gap: 12 }
      },
        /*#__PURE__*/React.createElement("h3", { style: { fontFamily: "var(--mf-font-display)", fontSize: 26, lineHeight: 1.1 } }, "Куда прислать прайс?"),
        /*#__PURE__*/React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 6 } },
          /*#__PURE__*/React.createElement("span", { className: "mf-mono", style: { fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--mf-stone-500)" } }, "Имя*"),
          /*#__PURE__*/React.createElement("input", { className: "mf-input", required: true, value: contact.name, onChange: e => setContact(c => ({ ...c, name: e.target.value })), placeholder: "Иван Петров" })
        ),
        /*#__PURE__*/React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 6 } },
          /*#__PURE__*/React.createElement("span", { className: "mf-mono", style: { fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--mf-stone-500)" } }, "Телефон*"),
          /*#__PURE__*/React.createElement("input", { className: "mf-input", required: true, type: "tel", value: contact.phone, onChange: e => setContact(c => ({ ...c, phone: e.target.value })), placeholder: "+7 ___ ___-__-__" })
        ),
        /*#__PURE__*/React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 6 } },
          /*#__PURE__*/React.createElement("span", { className: "mf-mono", style: { fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--mf-stone-500)" } }, "Компания / ИП"),
          /*#__PURE__*/React.createElement("input", { className: "mf-input", value: contact.company, onChange: e => setContact(c => ({ ...c, company: e.target.value })), placeholder: "ИП Петров / ООО «Мебель Эра»" })
        ),
        /*#__PURE__*/React.createElement("button", {
          type: "submit", className: "mf-btn mf-btn--primary mf-btn--lg",
          style: { marginTop: 8, justifyContent: "center" }
        }, "Получить КП с лучшими ценами ", Ic.arrowR),
        /*#__PURE__*/React.createElement("div", { style: { fontSize: 11, color: "var(--mf-stone-500)", lineHeight: 1.45 } }, "Нажимая кнопку, вы соглашаетесь на обработку персональных данных и получение коммерческого предложения. Без рассылок."),
        /*#__PURE__*/React.createElement("button", { type: "button", onClick: restart, className: "mf-btn mf-btn--sm mf-btn--light", style: { alignSelf: "flex-start", marginTop: 4 } }, "← Пройти заново")
      )
    )
  ),

  /* sent */
  done && sent && /*#__PURE__*/React.createElement("div", {
    style: { padding: "20px 0 6px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }
  },
    /*#__PURE__*/React.createElement("span", {
      style: { width: 60, aspectRatio: "0.866/1", clipPath: "var(--hex-clip)", background: "var(--mf-green-500)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mf-font-display)", fontSize: 26 }
    }, "✓"),
    /*#__PURE__*/React.createElement("h3", { style: { fontFamily: "var(--mf-font-display)", fontSize: 32, lineHeight: 1.05 } }, "Заявка отправлена."),
    /*#__PURE__*/React.createElement("p", { style: { fontSize: 15, color: "var(--mf-stone-700)", lineHeight: 1.55, maxWidth: 520 } }, "Менеджер пришлёт прайс с лучшими ценами под ваш уровень «", tier.name, "» в течение часа в рабочее время. Если нужно срочно — звоните 8 800 555-04-07."),
    /*#__PURE__*/React.createElement("button", { onClick: restart, className: "mf-btn mf-btn--light" }, "Пройти ещё раз")
  )));
};

// ── FINAL CTA WITH FORM ────────────────────────────────────
const FinalCTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "100px 40px",
    background: "var(--mf-green-700)",
    color: "#fff",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: -160,
    top: -160,
    width: 520,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-green-500)",
    opacity: .35
  }
}), /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    left: -100,
    bottom: -100,
    width: 300,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-green-300)",
    opacity: .25
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1.1fr",
    gap: 60,
    position: "relative",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, "07 \xB7 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("h2", {
  style: {
    color: "#fff",
    fontSize: 84,
    lineHeight: .95,
    marginTop: 16,
    letterSpacing: "-0.035em"
  }
}, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
  style: {
    color: "var(--mf-green-300)"
  }
}, "\u043F\u0440\u0438\u0448\u043B\u0451\u043C \u043F\u0440\u0430\u0439\u0441"), /*#__PURE__*/React.createElement("br", null), "\u0441 \u043B\u0443\u0447\u0448\u0438\u043C\u0438 \u0446\u0435\u043D\u0430\u043C\u0438."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 18,
    color: "rgba(255,255,255,.75)",
    maxWidth: 460,
    marginTop: 24,
    lineHeight: 1.5
  }
}, "\u041E\u0434\u0438\u043D \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u2014 \u043E\u0434\u0438\u043D \u043E\u0442\u0432\u0435\u0442 \u0437\u0430 \u0447\u0430\u0441. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E, \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u0431\u0435\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginTop: 32
  }
}, [["Менеджер из мастеров с 10+ лет на производстве"], ["КП в PDF и Excel — под ваши SKU, в день обращения"], ["Договор поставки + ЭДО · отсрочка от уровня «Партнёр»"], ["Без рассылок: пишем только по делу"]].map(([t]) => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 15
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 24,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-green-300)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--mf-green-900)",
    fontSize: 12,
    fontWeight: 700,
    flexShrink: 0
  }
}, Ic.check), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    padding: "18px 22px",
    background: "rgba(0,0,0,.18)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    gap: 18
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 48,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "var(--mf-amber)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, Ic.phone), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "rgba(255,255,255,.55)"
  }
}, "\u041F\u0440\u044F\u043C\u043E\u0439 \u043E\u043F\u0442-\u0442\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 22,
    fontWeight: 500
  }
}, "8 800 555-04-07 \xB7 \u0434\u043E\u0431. 102"), /*#__PURE__*/React.createElement("div", {
  className: "mf-mono",
  style: {
    fontSize: 11,
    color: "rgba(255,255,255,.55)",
    marginTop: 4
  }
}, "\u041F\u043D\u2013\u041F\u0442 \xB7 9:00\u201320:00 \u041C\u0421\u041A \xB7 \u043E\u043F\u0442@master-furnitura.ru")))), /*#__PURE__*/React.createElement("aside", {
  id: "lead-bottom",
  style: {
    background: "var(--mf-paper)",
    color: "var(--mf-ink)",
    borderRadius: 22,
    padding: 36,
    boxShadow: "0 30px 80px rgba(0,0,0,.30)",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: -14,
    left: 28,
    background: "var(--mf-amber)",
    color: "#fff",
    padding: "5px 12px",
    borderRadius: 4,
    fontFamily: "var(--mf-font-mono)",
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase"
  }
}, "\u2605 \u0444\u043E\u0440\u043C\u0430 \u0437\u0430\u044F\u0432\u043A\u0438 \xB7 60 \u0441\u0435\u043A\u0443\u043D\u0434"), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontSize: 32,
    lineHeight: 1.05,
    marginBottom: 6
  }
}, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u2014"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontStyle: "italic",
    fontSize: 22,
    color: "var(--mf-green-700)",
    marginBottom: 26,
    lineHeight: 1.1
  }
}, "\u0432\u044B\u0448\u043B\u0435\u043C \u043B\u0443\u0447\u0448\u0435\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435."), /*#__PURE__*/React.createElement(LeadForm, {
  id: "lead-bottom-form"
}))));

// ── COMPOSE ────────────────────────────────────────────────
const WholesalePage = () => /*#__PURE__*/React.createElement("div", {
  className: "mf-frame",
  id: "top",
  "data-screen-label": "Wholesale"
}, /*#__PURE__*/React.createElement(WholesaleHeader, null), /*#__PURE__*/React.createElement(WholesaleHero, null), /*#__PURE__*/React.createElement("section", {
  id: "cats"
}, /*#__PURE__*/React.createElement(WholesaleCategories, null)), /*#__PURE__*/React.createElement("section", {
  id: "tiers"
}, /*#__PURE__*/React.createElement(DiscountLadder, null)), /*#__PURE__*/React.createElement("section", {
  id: "flow"
}, /*#__PURE__*/React.createElement(HowItWorks, null)), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement("section", {
  id: "cases"
}, /*#__PURE__*/React.createElement(Cases, null)), /*#__PURE__*/React.createElement("section", {
  id: "faq"
}, /*#__PURE__*/React.createElement(FAQ, null)), /*#__PURE__*/React.createElement(PurchaseQuiz, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(WholesaleFooter, null));

// ── Wholesale-specific footer (no shop nav) ────────────────
const WholesaleFooter = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: "var(--mf-ink)",
    color: "rgba(255,255,255,.75)",
    padding: "56px 40px 28px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    right: -140,
    top: -140,
    width: 480,
    aspectRatio: "0.866/1",
    clipPath: "var(--hex-clip)",
    background: "rgba(111,191,143,.06)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
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
    maxWidth: 320,
    fontSize: 13,
    lineHeight: 1.55,
    color: "rgba(255,255,255,.6)"
  }
}, "\u041E\u043F\u0442-\u043A\u0430\u043D\u0430\u043B \xAB\u041C\u0430\u0441\u0442\u0435\u0440 \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430\xBB. \u0421 2009 \u0433\u043E\u0434\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0443 \u043C\u0435\u0431\u0435\u043B\u044C\u043D\u044B\u043C \u0444\u0430\u0431\u0440\u0438\u043A\u0430\u043C, \u0430\u0442\u0435\u043B\u044C\u0435, \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u0438 \u0440\u043E\u0437\u043D\u0438\u0447\u043D\u044B\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u043C \u043F\u043E \u0420\u0424 \u0438 \u0421\u041D\u0413."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    marginTop: 18
  }
}, ["TG", "WA", "VK"].map(s => /*#__PURE__*/React.createElement("span", {
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
}, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, "\u041E\u043F\u0442"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "14px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: 13
  }
}, [["Категории", "#cats"], ["Условия и скидки", "#tiers"], ["Как мы работаем", "#flow"], ["Клиенты", "#cases"], ["FAQ", "#faq"], ["Квиз на закупку", "#quiz"]].map(([t, h]) => /*#__PURE__*/React.createElement("li", {
  key: t
}, /*#__PURE__*/React.createElement("a", {
  href: h,
  style: {
    color: "inherit"
  }
}, t))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "14px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: 13
  }
}, ["Договор-оферта", "Карточка предприятия", "Реквизиты для УПД", "Сертификаты ТР ТС", "Политика конфиденциальности"].map(t => /*#__PURE__*/React.createElement("li", {
  key: t
}, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "mf-eyebrow",
  style: {
    color: "var(--mf-green-300)"
  }
}, "\u041E\u043F\u0442-\u043E\u0442\u0434\u0435\u043B"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "var(--mf-font-display)",
    fontSize: 24,
    fontWeight: 500,
    marginTop: 14,
    color: "#fff"
  }
}, "8 800 555-04-07"), /*#__PURE__*/React.createElement("div", {
  className: "mf-mono",
  style: {
    fontSize: 11,
    color: "rgba(255,255,255,.55)",
    marginTop: 4
  }
}, "\u0434\u043E\u0431. 102 \xB7 \u041F\u043D\u2013\u041F\u0442 \xB7 9:00\u201320:00 \u041C\u0421\u041A"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 14,
    fontSize: 13,
    color: "rgba(255,255,255,.7)"
  }
}, "\u043E\u043F\u0442@master-furnitura.ru"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 4,
    fontSize: 13,
    color: "rgba(255,255,255,.7)"
  }
}, "Telegram \xB7 @mf-opt"), /*#__PURE__*/React.createElement("a", {
  href: "#lead-bottom",
  className: "mf-btn",
  style: {
    marginTop: 18,
    background: "var(--mf-green-300)",
    color: "var(--mf-green-900)",
    height: 44,
    padding: "0 20px"
  }
}, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ", Ic.arrowR))), /*#__PURE__*/React.createElement("div", {
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
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2009 \u2014 2026 \xB7 \u041E\u041E\u041E \xAB\u041C\u0430\u0441\u0442\u0435\u0440 \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430\xBB \xB7 \u0418\u041D\u041D 7714000000 \xB7 \u043E\u043F\u0442-\u043A\u0430\u043D\u0430\u043B"), /*#__PURE__*/React.createElement("span", null, "\u0421\u0430\u043C\u0430\u0440\u0430 \xB7 \u0443\u043B. \u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F 14 \xB7 \u0441\u043A\u043B\u0430\u0434 4 800 \u043C\xB2")));
Object.assign(window, {
  WholesalePage,
  WholesaleHeader,
  WholesaleFooter,
  LeadForm
});
