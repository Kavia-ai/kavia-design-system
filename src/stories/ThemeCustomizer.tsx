import React, { useState, useEffect, useCallback } from "react";

// ─── Color conversion utilities ────────────────────────────────────────────

function hslToHex(hslStr: string): string {
  const parts = hslStr.trim().replace(/%/g, "").split(/\s+/);
  if (parts.length < 3) return "#000000";
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]) / 100;
  const l = parseFloat(parts[2]) / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex: string): string {
  if (hex.length < 7) return "0 0% 0%";
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// ─── Token definitions ─────────────────────────────────────────────────────

interface TokenDef {
  key: string;
  label: string;
  description: string;
  default: string;
  darkDefault: string;
}

interface TokenGroup {
  name: string;
  tokens: TokenDef[];
}

const TOKEN_GROUPS: TokenGroup[] = [
  {
    name: "Brand",
    tokens: [
      { key: "--primary",            label: "Primary",            description: "Main brand color — buttons, active states, links",  default: "215 80% 48%", darkDefault: "215 80% 56%" },
      { key: "--primary-foreground", label: "Primary Foreground", description: "Text / icon color on primary backgrounds",           default: "0 0% 100%",   darkDefault: "0 0% 100%" },
      { key: "--accent",             label: "Accent",             description: "Subtle brand tint for hover backgrounds",            default: "214 91% 95%", darkDefault: "215 80% 20%" },
      { key: "--accent-foreground",  label: "Accent Foreground",  description: "Text on accent backgrounds",                         default: "215 80% 48%", darkDefault: "215 80% 70%" },
      { key: "--ring",               label: "Focus Ring",         description: "Keyboard focus ring color",                          default: "216 81% 60%", darkDefault: "216 81% 60%" },
    ],
  },
  {
    name: "Surface",
    tokens: [
      { key: "--background",         label: "Background",         description: "Main page background",              default: "0 0% 100%",   darkDefault: "222 10% 8%" },
      { key: "--foreground",         label: "Foreground",         description: "Primary text color",                default: "228 6% 17%",  darkDefault: "215 20% 87%" },
      { key: "--card",               label: "Card",               description: "Card surface background",           default: "0 0% 100%",   darkDefault: "222 10% 11%" },
      { key: "--card-foreground",    label: "Card Foreground",    description: "Text on card surfaces",             default: "228 6% 17%",  darkDefault: "215 20% 87%" },
      { key: "--popover",            label: "Popover",            description: "Dropdown / popover background",     default: "0 0% 100%",   darkDefault: "222 10% 11%" },
      { key: "--popover-foreground", label: "Popover Foreground", description: "Text inside popovers",              default: "228 6% 17%",  darkDefault: "215 20% 87%" },
    ],
  },
  {
    name: "Neutral",
    tokens: [
      { key: "--secondary",            label: "Secondary",            description: "Secondary button / muted surface",      default: "210 7% 95%",  darkDefault: "217 10% 18%" },
      { key: "--secondary-foreground", label: "Secondary Foreground", description: "Text on secondary backgrounds",         default: "228 6% 17%",  darkDefault: "215 20% 87%" },
      { key: "--muted",                label: "Muted",                description: "Disabled / inactive area background",   default: "210 7% 95%",  darkDefault: "217 10% 18%" },
      { key: "--muted-foreground",     label: "Muted Foreground",     description: "Placeholder and hint text",             default: "224 5% 44%",  darkDefault: "215 14% 55%" },
      { key: "--border",               label: "Border",               description: "Default border color",                  default: "225 6% 87%",  darkDefault: "217 10% 24%" },
      { key: "--input",                label: "Input Border",         description: "Input field border color",              default: "224 5% 57%",  darkDefault: "217 10% 35%" },
    ],
  },
  {
    name: "Semantic",
    tokens: [
      { key: "--destructive",            label: "Destructive",            description: "Error / danger action color",           default: "4 64% 48%",   darkDefault: "4 72% 55%" },
      { key: "--destructive-foreground", label: "Destructive Foreground", description: "Text on destructive backgrounds",       default: "0 0% 100%",   darkDefault: "0 0% 100%" },
    ],
  },
];

const STORAGE_KEY = "kavia-theme-tokens";
const STORAGE_KEY_DARK = "kavia-theme-tokens-dark";
const STORAGE_RADIUS_KEY = "kavia-theme-radius";

// ─── Presets ───────────────────────────────────────────────────────────────

interface Preset {
  name: string;
  description: string;
  badge: string;
  badgeColor: string;
  light: Record<string, string>;
  dark: Record<string, string>;
  radius: number;
}

const PRESETS: Preset[] = [
  {
    name: "KAVIA Blue (Default)",
    description: "Current KAVIA AI blue — #1868db — 5.3:1 on white ✓ WCAG AA",
    badge: "AA",
    badgeColor: "#1868db",
    radius: 0.5,
    light: {
      "--primary":            "215 80% 48%",
      "--primary-foreground": "0 0% 100%",
      "--accent":             "214 91% 95%",
      "--accent-foreground":  "215 80% 48%",
      "--ring":               "216 81% 60%",
    },
    dark: {
      "--primary":            "215 80% 56%",
      "--primary-foreground": "0 0% 100%",
      "--accent":             "215 80% 20%",
      "--accent-foreground":  "215 80% 70%",
      "--ring":               "216 81% 60%",
    },
  },
  {
    name: "KAVIA Brand #D35B16",
    description: "Exact Kavia brand orange #D35B16 — 3.74:1 with white ✓ WCAG AA (large text / UI components).",
    badge: "AA",
    badgeColor: "#D35B16",
    radius: 0.5,
    light: {
      "--primary":            "22 81% 46%",   // #D35B16 — exact brand
      "--primary-foreground": "0 0% 100%",    // white — 3.74:1 on #D35B16 ✓ AA large/UI
      "--accent":             "22 91% 95%",   // #FEF0E7 — very light peach tint
      "--accent-foreground":  "22 81% 35%",   // #984210 — darker for text on accent
      "--ring":               "22 78% 58%",   // #E87A40 — focus ring
    },
    dark: {
      "--primary":            "22 80% 68%",   // #F0966A — lighter for dark bg visibility
      "--primary-foreground": "22 100% 6%",   // near-black — high contrast on light orange
      "--accent":             "22 40% 18%",   // dark orange surface tint
      "--accent-foreground":  "22 80% 68%",   // light orange text
      "--ring":               "22 78% 58%",   // #E87A40 — focus ring
    },
  },
  {
    name: "KAVIA Brand #f26a1b",
    description: "Exact #f26a1b on buttons with white text. Most faithful to brand.",
    badge: "AA",
    badgeColor: "#f26a1b",
    radius: 0.5,
    light: {
      "--primary":            "25 88% 53%",   // #f26a1b — exact brand
      "--primary-foreground": "0 0% 100%",    // white
      // Light orange tint surface
      "--accent":             "25 95% 92%",   // #fee7d7 — light warm tint
      "--accent-foreground":  "25 88% 35%",   // #a84c0b — 4.76:1 on tint ✓ AA
      // Focus ring: #f26a1b meets 3:1 threshold for UI components ✓
      "--ring":               "25 88% 53%",   // exact brand
    },
    dark: {
      // Exact #f26a1b on dark bg — 5.29:1 ✓ AA. Keep near-black text for consistency.
      "--primary":            "25 88% 53%",
      "--primary-foreground": "25 100% 6%",
      "--accent":             "25 88% 16%",   // dark orange surface
      "--accent-foreground":  "25 88% 72%",   // light orange text
      "--ring":               "25 88% 53%",
    },
  },
];

// ─── PreviewSection helper ─────────────────────────────────────────────────

function PreviewSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-widest">{label}</p>
      {children}
    </div>
  );
}

// ─── ThemeCustomizer component ─────────────────────────────────────────────

export function ThemeCustomizer() {
  const allLightDefaults = TOKEN_GROUPS.flatMap((g) => g.tokens).reduce<Record<string, string>>(
    (acc, t) => ({ ...acc, [t.key]: t.default }),
    {}
  );
  const allDarkDefaults = TOKEN_GROUPS.flatMap((g) => g.tokens).reduce<Record<string, string>>(
    (acc, t) => ({ ...acc, [t.key]: t.darkDefault }),
    {}
  );

  const loadSaved = (storageKey: string, defaults: Record<string, string>) => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? { ...defaults, ...JSON.parse(saved) } : { ...defaults };
    } catch {
      return { ...defaults };
    }
  };

  const [mode, setMode] = useState<"light" | "dark">("light");
  const [lightValues, setLightValues] = useState<Record<string, string>>(() => loadSaved(STORAGE_KEY, allLightDefaults));
  const [darkValues, setDarkValues] = useState<Record<string, string>>(() => loadSaved(STORAGE_KEY_DARK, allDarkDefaults));
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [radius, setRadius] = useState(() => {
    try { return parseFloat(localStorage.getItem(STORAGE_RADIUS_KEY) ?? "0.5"); }
    catch { return 0.5; }
  });

  const values = mode === "light" ? lightValues : darkValues;
  const setValues = mode === "light" ? setLightValues : setDarkValues;

  // Apply light tokens to :root and dark to a .dark-preview style block
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(lightValues).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.style.setProperty("--radius", `${radius}rem`);
  }, [lightValues, radius]);

  const handleColorChange = useCallback((key: string, hex: string) => {
    setValues((prev) => ({ ...prev, [key]: hexToHsl(hex) }));
  }, [setValues]);

  // Accepts either HSL ("215 80% 48%") or hex ("#1868db") — auto-converts hex
  const handleHslChange = useCallback((key: string, raw: string) => {
    const trimmed = raw.trim();
    if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(trimmed)) {
      const full = trimmed.length === 4
        ? `#${trimmed[1]}${trimmed[1]}${trimmed[2]}${trimmed[2]}${trimmed[3]}${trimmed[3]}`
        : trimmed;
      setValues((prev) => ({ ...prev, [key]: hexToHsl(full) }));
    } else {
      setValues((prev) => ({ ...prev, [key]: trimmed }));
    }
  }, [setValues]);

  // ─── Hex ↔ HSL Converter state ────────────────────────────────────────────
  const [converterHex, setConverterHex] = useState("#1868db");
  const [converterHsl, setConverterHsl] = useState(() => hexToHsl("#1868db"));
  const [converterCopied, setConverterCopied] = useState<"hex" | "hsl" | null>(null);
  const [applyTarget, setApplyTarget] = useState("");
  const [applyDone, setApplyDone] = useState(false);

  const allTokenKeys = TOKEN_GROUPS.flatMap((g) => g.tokens.map((t) => t.key));

  const handleConverterHexChange = (val: string) => {
    setConverterHex(val);
    const trimmed = val.trim();
    if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(trimmed)) {
      const full = trimmed.length === 4
        ? `#${trimmed[1]}${trimmed[1]}${trimmed[2]}${trimmed[2]}${trimmed[3]}${trimmed[3]}`
        : trimmed;
      setConverterHsl(hexToHsl(full));
    }
  };

  const handleConverterHslChange = (val: string) => {
    setConverterHsl(val);
    try {
      const hex = hslToHex(val);
      if (hex !== "#000000" || val.startsWith("0 0%")) setConverterHex(hex);
    } catch {}
  };

  const handleApplyConverter = () => {
    if (!applyTarget) return;
    setValues((prev) => ({ ...prev, [applyTarget]: converterHsl }));
    setApplyDone(true);
    setTimeout(() => setApplyDone(false), 1500);
  };

  const [activePreset, setActivePreset] = useState<string>("KAVIA Blue (Default)");

  const handleApplyPreset = (preset: Preset) => {
    setLightValues((prev) => ({ ...prev, ...preset.light }));
    setDarkValues((prev) => ({ ...prev, ...preset.dark }));
    setRadius(preset.radius);
    setActivePreset(preset.name);
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lightValues));
    localStorage.setItem(STORAGE_KEY_DARK, JSON.stringify(darkValues));
    localStorage.setItem(STORAGE_RADIUS_KEY, String(radius));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    setLightValues({ ...allLightDefaults });
    setDarkValues({ ...allDarkDefaults });
    setRadius(0.5);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY_DARK);
    localStorage.removeItem(STORAGE_RADIUS_KEY);
  };

  const generateCSS = () => {
    const lightCSS = Object.entries(lightValues).map(([k, v]) => `  ${k}: ${v};`).join("\n");
    const darkCSS = Object.entries(darkValues).map(([k, v]) => `  ${k}: ${v};`).join("\n");
    return `:root {\n${lightCSS}\n  --radius: ${radius}rem;\n}\n\n.dark {\n${darkCSS}\n}`;
  };

  const handleCopyCSS = () => {
    navigator.clipboard.writeText(generateCSS()).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const r = radius;

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Theme Customizer</h1>
            <span className="text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
              KAVIA AI
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            Edit design tokens live. Save to persist across all stories.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={handleCopyCSS} className="px-3 py-1.5 text-sm border border-border rounded-md bg-background text-foreground hover:bg-muted transition-colors">
            {copied ? "✓ Copied CSS" : "Copy CSS"}
          </button>
          <button onClick={handleReset} className="px-3 py-1.5 text-sm border border-border rounded-md bg-background hover:bg-muted transition-colors text-destructive">
            Reset Defaults
          </button>
          <button onClick={handleSave} className="px-4 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium">
            {saved ? "✓ Saved!" : "Save Theme"}
          </button>
        </div>
      </div>

      {/* Presets */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="bg-muted px-4 py-3 border-b border-border">
          <h2 className="font-semibold text-sm text-foreground">Theme Presets</h2>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {PRESETS.map((preset) => {
            const isActive = activePreset === preset.name;
            return (
              <button
                key={preset.name}
                onClick={() => handleApplyPreset(preset)}
                className={`text-left p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                  isActive
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: preset.badgeColor }}
                    />
                    <span className="text-sm font-semibold text-foreground">{preset.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold px-1.5 py-0.5 rounded text-white"
                      style={{ backgroundColor: preset.badgeColor }}
                    >
                      {preset.badge}
                    </span>
                    {isActive && (
                      <span className="text-xs font-medium text-primary">● Active</span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{preset.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Light / Dark tab */}
      <div className="flex gap-1 p-1 bg-muted rounded-lg w-fit">
        {(["light", "dark"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-1.5 text-sm rounded-md font-medium transition-all capitalize ${
              mode === m ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {m === "light" ? "☀ Light" : "☾ Dark"}
          </button>
        ))}
      </div>

      {/* Hex ↔ HSL Converter */}
      <div className="rounded-lg border border-primary/30 bg-primary/5 overflow-hidden">
        <div className="px-4 py-3 border-b border-primary/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <h2 className="font-semibold text-sm text-foreground">Hex ↔ HSL Converter</h2>
          <span className="text-xs text-muted-foreground ml-1">— type either format, both update live</span>
        </div>
        <div className="p-4 flex flex-wrap items-end gap-4">
          {/* Hex input */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Hex</label>
            <div className="flex items-center gap-2">
              <label className="cursor-pointer relative block w-9 h-9 rounded-md border-2 border-border overflow-hidden shadow-sm hover:border-primary transition-colors">
                <div className="absolute inset-0" style={{ backgroundColor: /^#[0-9a-fA-F]{6}$/.test(converterHex) ? converterHex : "#000" }} />
                <input
                  type="color"
                  value={/^#[0-9a-fA-F]{6}$/.test(converterHex) ? converterHex : "#000000"}
                  onChange={(e) => handleConverterHexChange(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
              </label>
              <input
                type="text"
                value={converterHex}
                onChange={(e) => handleConverterHexChange(e.target.value)}
                placeholder="#1868db"
                className="font-mono text-sm border border-border rounded px-3 py-2 w-32 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={() => { navigator.clipboard.writeText(converterHex).catch(() => {}); setConverterCopied("hex"); setTimeout(() => setConverterCopied(null), 1500); }}
                className="px-2 py-2 text-xs border border-border rounded bg-background text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {converterCopied === "hex" ? "✓" : "Copy"}
              </button>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-muted-foreground text-lg pb-2">⇄</div>

          {/* HSL input */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">HSL</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={converterHsl}
                onChange={(e) => handleConverterHslChange(e.target.value)}
                placeholder="215 80% 48%"
                className="font-mono text-sm border border-border rounded px-3 py-2 w-40 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={() => { navigator.clipboard.writeText(converterHsl).catch(() => {}); setConverterCopied("hsl"); setTimeout(() => setConverterCopied(null), 1500); }}
                className="px-2 py-2 text-xs border border-border rounded bg-background text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {converterCopied === "hsl" ? "✓" : "Copy"}
              </button>
            </div>
          </div>

          {/* Apply to token */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Apply to Token</label>
            <div className="flex items-center gap-2">
              <select
                value={applyTarget}
                onChange={(e) => setApplyTarget(e.target.value)}
                className="text-sm border border-border rounded px-2 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring font-mono"
              >
                <option value="">— select token —</option>
                {TOKEN_GROUPS.map((g) => (
                  <optgroup key={g.name} label={g.name}>
                    {g.tokens.map((t) => (
                      <option key={t.key} value={t.key}>{t.key}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <button
                onClick={handleApplyConverter}
                disabled={!applyTarget}
                className="px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {applyDone ? "✓ Applied!" : "Apply"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="bg-muted px-4 py-3 border-b border-border">
          <h2 className="font-semibold text-sm text-foreground">Border Radius — <code className="font-mono text-primary">--radius</code></h2>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-4">
            <input
              type="range" min="0" max="1.5" step="0.125" value={radius}
              onChange={(e) => setRadius(parseFloat(e.target.value))}
              className="flex-1 accent-primary"
            />
            <span className="text-sm font-mono text-muted-foreground w-16 text-right">{radius}rem</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {[0, 0.25, 0.375, 0.5, 0.75, 1, 1.5].map((rv) => (
              <button
                key={rv}
                onClick={() => setRadius(rv)}
                title={`${rv}rem`}
                className={`w-10 h-10 border text-xs font-mono transition-all ${
                  radius === rv ? "border-primary bg-primary text-primary-foreground" : "border-border bg-muted/50 text-muted-foreground hover:border-primary hover:text-primary"
                }`}
                style={{ borderRadius: `${rv}rem` }}
              >
                {rv}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Token groups */}
      {TOKEN_GROUPS.map((group) => (
        <div key={group.name} className="rounded-lg border border-border overflow-hidden">
          <div className="bg-muted px-4 py-3 border-b border-border">
            <h2 className="font-semibold text-sm text-foreground">{group.name} Tokens</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  <th className="text-left px-4 py-2 font-medium w-14">Color</th>
                  <th className="text-left px-4 py-2 font-medium">Token</th>
                  <th className="text-left px-4 py-2 font-medium">HSL Value</th>
                  <th className="text-left px-4 py-2 font-medium hidden lg:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {group.tokens.map((token, i) => {
                  const currentVal = values[token.key] ?? token.default;
                  const hex = hslToHex(currentVal);
                  return (
                    <tr
                      key={token.key}
                      className={`border-b border-border/50 last:border-0 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                    >
                      <td className="px-4 py-3">
                        <label className="cursor-pointer relative block w-9 h-9 rounded-md border-2 border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-primary">
                          <div className="absolute inset-0" style={{ backgroundColor: hex }} />
                          <input
                            type="color"
                            value={hex}
                            onChange={(e) => handleColorChange(token.key, e.target.value)}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                          />
                        </label>
                      </td>
                      <td className="px-4 py-3">
                        <code className="text-xs font-mono text-primary block">{token.key}</code>
                        <span className="text-xs text-muted-foreground font-mono">{hex}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="space-y-1">
                          <input
                            type="text"
                            value={currentVal}
                            onChange={(e) => handleHslChange(token.key, e.target.value)}
                            className="font-mono text-xs bg-muted/50 border border-border rounded px-2 py-1.5 w-36 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow text-foreground"
                            placeholder="H S% L% or #hex"
                          />
                          <p className="text-[10px] text-muted-foreground">HSL or #hex — auto-converts</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground hidden lg:table-cell">
                        {token.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Live Preview */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="bg-muted px-4 py-3 border-b border-border">
          <h2 className="font-semibold text-sm text-foreground">Live Preview</h2>
          <p className="text-xs text-muted-foreground mt-0.5">All components reflect the current token values in real time.</p>
        </div>
        <div className="p-6 space-y-8">

          {/* ── Buttons ── */}
          <PreviewSection label="Buttons">
            <div className="flex flex-wrap gap-2">
              {[
                { bg: `hsl(${values["--primary"] ?? "215 80% 48%"})`,   fg: `hsl(${values["--primary-foreground"] ?? "0 0% 100%"})`,    label: "Primary" },
                { bg: `hsl(${values["--secondary"] ?? "210 7% 95%"})`,  fg: `hsl(${values["--secondary-foreground"] ?? "228 6% 17%"})`, label: "Secondary", border: true },
                { bg: `hsl(${values["--destructive"] ?? "4 64% 48%"})`, fg: `hsl(${values["--destructive-foreground"] ?? "0 0% 100%"})`,label: "Destructive" },
                { bg: `hsl(${values["--accent"] ?? "214 91% 95%"})`,    fg: `hsl(${values["--accent-foreground"] ?? "215 80% 48%"})`,   label: "Accent" },
                { bg: "transparent",                                      fg: `hsl(${values["--primary"] ?? "215 80% 48%"})`,            label: "Ghost", border: true, borderColor: `hsl(${values["--primary"] ?? "215 80% 48%"})` },
                { bg: "transparent",                                      fg: `hsl(${values["--foreground"] ?? "228 6% 17%"})`,          label: "Outline", border: true },
              ].map((btn) => (
                <button
                  key={btn.label}
                  className="px-4 py-2 text-sm font-medium transition-opacity hover:opacity-75"
                  style={{
                    backgroundColor: btn.bg,
                    color: btn.fg,
                    borderRadius: `${r}rem`,
                    border: btn.border ? `1px solid ${(btn as any).borderColor ?? `hsl(${values["--border"] ?? "225 6% 87%"})`}` : "none",
                  }}
                >{btn.label}</button>
              ))}
            </div>
          </PreviewSection>

          {/* ── Badges ── */}
          <PreviewSection label="Badges">
            <div className="flex flex-wrap gap-2 items-center">
              {[
                { bg: `hsl(${values["--primary"] ?? "215 80% 48%"})`,   fg: `hsl(${values["--primary-foreground"] ?? "0 0% 100%"})`,    label: "Default" },
                { bg: `hsl(${values["--secondary"] ?? "210 7% 95%"})`,  fg: `hsl(${values["--secondary-foreground"] ?? "228 6% 17%"})`, label: "Secondary", border: true },
                { bg: `hsl(${values["--destructive"] ?? "4 64% 48%"})`, fg: `hsl(${values["--destructive-foreground"] ?? "0 0% 100%"})`,label: "Destructive" },
                { bg: `hsl(${values["--accent"] ?? "214 91% 95%"})`,    fg: `hsl(${values["--accent-foreground"] ?? "215 80% 48%"})`,   label: "Accent" },
                { bg: `hsl(${values["--muted"] ?? "210 7% 95%"})`,      fg: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})`,     label: "Muted" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    backgroundColor: b.bg, color: b.fg,
                    borderRadius: `calc(${r}rem * 2)`,
                    border: b.border ? `1px solid hsl(${values["--border"] ?? "225 6% 87%"})` : "none",
                  }}
                >{b.label}</span>
              ))}
            </div>
          </PreviewSection>

          {/* ── Form Controls ── */}
          <PreviewSection label="Form Controls">
            <div className="flex flex-wrap gap-6 items-start">
              {/* Text input */}
              <div className="space-y-1">
                <label className="text-xs font-medium" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>Email</label>
                <input
                  type="text"
                  defaultValue="hello@kavia.ai"
                  className="block px-3 py-2 text-sm focus:outline-none w-48"
                  style={{
                    backgroundColor: `hsl(${values["--background"] ?? "0 0% 100%"})`,
                    color: `hsl(${values["--foreground"] ?? "228 6% 17%"})`,
                    border: `1px solid hsl(${values["--input"] ?? "224 5% 57%"})`,
                    borderRadius: `${r}rem`,
                  }}
                  onFocus={(e) => { e.currentTarget.style.boxShadow = `0 0 0 2px hsl(${values["--ring"] ?? "216 81% 60%"})`; }}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
              {/* Placeholder input */}
              <div className="space-y-1">
                <label className="text-xs font-medium" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>Search</label>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block px-3 py-2 text-sm focus:outline-none w-48"
                  style={{
                    backgroundColor: `hsl(${values["--background"] ?? "0 0% 100%"})`,
                    color: `hsl(${values["--foreground"] ?? "228 6% 17%"})`,
                    border: `1px solid hsl(${values["--input"] ?? "224 5% 57%"})`,
                    borderRadius: `${r}rem`,
                  }}
                  onFocus={(e) => { e.currentTarget.style.boxShadow = `0 0 0 2px hsl(${values["--ring"] ?? "216 81% 60%"})`; }}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
              {/* Select */}
              <div className="space-y-1">
                <label className="text-xs font-medium" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>Role</label>
                <select
                  className="block px-3 py-2 text-sm focus:outline-none w-40"
                  style={{
                    backgroundColor: `hsl(${values["--background"] ?? "0 0% 100%"})`,
                    color: `hsl(${values["--foreground"] ?? "228 6% 17%"})`,
                    border: `1px solid hsl(${values["--input"] ?? "224 5% 57%"})`,
                    borderRadius: `${r}rem`,
                  }}
                  onFocus={(e) => { e.currentTarget.style.boxShadow = `0 0 0 2px hsl(${values["--ring"] ?? "216 81% 60%"})`; }}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>
            </div>

            {/* Checkbox + Switch row */}
            <div className="flex flex-wrap gap-6 items-center mt-4">
              {/* Checkbox checked */}
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>
                <span
                  className="flex items-center justify-center w-4 h-4 text-[10px] font-bold"
                  style={{
                    backgroundColor: `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                    color: `hsl(${values["--primary-foreground"] ?? "0 0% 100%"})`,
                    borderRadius: `calc(${r}rem * 0.4)`,
                    border: `1px solid hsl(${values["--primary"] ?? "215 80% 48%"})`,
                  }}
                >✓</span>
                Agreed
              </label>
              {/* Checkbox unchecked */}
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>
                <span
                  className="flex items-center justify-center w-4 h-4"
                  style={{
                    backgroundColor: `hsl(${values["--background"] ?? "0 0% 100%"})`,
                    borderRadius: `calc(${r}rem * 0.4)`,
                    border: `1px solid hsl(${values["--input"] ?? "224 5% 57%"})`,
                  }}
                />
                Subscribe
              </label>
              {/* Toggle ON */}
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>
                <span className="relative inline-flex h-5 w-9 items-center" style={{ borderRadius: `9999px`, backgroundColor: `hsl(${values["--primary"] ?? "215 80% 48%"})` }}>
                  <span className="inline-block h-3.5 w-3.5 translate-x-4 bg-white rounded-full shadow transition-transform" />
                </span>
                Enabled
              </label>
              {/* Toggle OFF */}
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm" style={{ color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` }}>
                <span className="relative inline-flex h-5 w-9 items-center" style={{ borderRadius: `9999px`, backgroundColor: `hsl(${values["--muted"] ?? "210 7% 95%"})` }}>
                  <span className="inline-block h-3.5 w-3.5 translate-x-1 bg-white rounded-full shadow transition-transform" style={{ border: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})` }} />
                </span>
                Disabled
              </label>
            </div>
          </PreviewSection>

          {/* ── Tabs ── */}
          <PreviewSection label="Tabs">
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})` }}
            >
              <div
                className="flex"
                style={{ borderBottom: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})`, backgroundColor: `hsl(${values["--muted"] ?? "210 7% 95%"})` }}
              >
                {["Overview", "Analytics", "Settings"].map((tab, i) => (
                  <div
                    key={tab}
                    className="px-5 py-2.5 text-sm font-medium cursor-pointer"
                    style={i === 0 ? {
                      borderBottom: `2px solid hsl(${values["--primary"] ?? "215 80% 48%"})`,
                      color: `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                      backgroundColor: `hsl(${values["--background"] ?? "0 0% 100%"})`,
                      marginBottom: "-1px",
                    } : {
                      color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})`,
                      borderBottom: "2px solid transparent",
                      marginBottom: "-1px",
                    }}
                  >{tab}</div>
                ))}
              </div>
              <div
                className="p-4 text-sm"
                style={{
                  backgroundColor: `hsl(${values["--background"] ?? "0 0% 100%"})`,
                  color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})`,
                }}
              >
                Active tab content area — <span style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})`, fontWeight: 500 }}>Overview</span> is selected.
              </div>
            </div>
          </PreviewSection>

          {/* ── Card ── */}
          <PreviewSection label="Card">
            <div className="flex flex-wrap gap-4">
              {/* Standard card */}
              <div
                className="w-64 p-5 shadow-sm"
                style={{
                  backgroundColor: `hsl(${values["--card"] ?? "0 0% 100%"})`,
                  color: `hsl(${values["--card-foreground"] ?? "228 6% 17%"})`,
                  border: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})`,
                  borderRadius: `${r}rem`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-semibold">Monthly Revenue</div>
                  <span
                    className="text-xs px-2 py-0.5 font-medium"
                    style={{
                      backgroundColor: `hsl(${values["--accent"] ?? "214 91% 95%"})`,
                      color: `hsl(${values["--accent-foreground"] ?? "215 80% 48%"})`,
                      borderRadius: `calc(${r}rem * 1.5)`,
                    }}
                  >+12%</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>$24,563</div>
                <div className="text-xs mt-1" style={{ color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` }}>vs $21,900 last month</div>
                <div className="mt-4 flex gap-2">
                  <button
                    className="flex-1 py-1.5 text-xs font-medium"
                    style={{
                      backgroundColor: `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                      color: `hsl(${values["--primary-foreground"] ?? "0 0% 100%"})`,
                      borderRadius: `calc(${r}rem * 0.75)`,
                    }}
                  >View Details</button>
                  <button
                    className="px-3 py-1.5 text-xs font-medium"
                    style={{
                      border: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})`,
                      color: `hsl(${values["--foreground"] ?? "228 6% 17%"})`,
                      borderRadius: `calc(${r}rem * 0.75)`,
                      backgroundColor: "transparent",
                    }}
                  >Export</button>
                </div>
              </div>
              {/* Accent card */}
              <div
                className="w-64 p-5 shadow-sm"
                style={{
                  backgroundColor: `hsl(${values["--accent"] ?? "214 91% 95%"})`,
                  color: `hsl(${values["--accent-foreground"] ?? "215 80% 48%"})`,
                  border: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})`,
                  borderRadius: `${r}rem`,
                }}
              >
                <div className="text-sm font-semibold mb-1">Upgrade Plan</div>
                <div className="text-xs leading-relaxed" style={{ color: `hsl(${values["--accent-foreground"] ?? "215 80% 48%"})`, opacity: 0.8 }}>
                  Unlock unlimited projects, advanced analytics, and priority support.
                </div>
                <button
                  className="mt-4 w-full py-1.5 text-xs font-semibold"
                  style={{
                    backgroundColor: `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                    color: `hsl(${values["--primary-foreground"] ?? "0 0% 100%"})`,
                    borderRadius: `calc(${r}rem * 0.75)`,
                  }}
                >Get Pro →</button>
              </div>
            </div>
          </PreviewSection>

          {/* ── Alerts ── */}
          <PreviewSection label="Alerts">
            <div className="space-y-3 max-w-lg">
              {[
                {
                  bg: `hsl(${values["--accent"] ?? "214 91% 95%"})`,
                  border: `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                  titleColor: `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                  textColor: `hsl(${values["--accent-foreground"] ?? "215 80% 48%"})`,
                  icon: "ℹ", title: "Info", msg: "Your account has been updated successfully.",
                },
                {
                  bg: "#f0fdf4", border: "#16a34a", titleColor: "#15803d", textColor: "#166534",
                  icon: "✓", title: "Success", msg: "Changes saved. The team has been notified.",
                },
                {
                  bg: "#fffbeb", border: "#d97706", titleColor: "#b45309", textColor: "#92400e",
                  icon: "⚠", title: "Warning", msg: "Your trial ends in 3 days. Upgrade to continue.",
                },
                {
                  bg: `hsl(${values["--destructive"] ?? "4 64% 48%"} / 0.08)`,
                  border: `hsl(${values["--destructive"] ?? "4 64% 48%"})`,
                  titleColor: `hsl(${values["--destructive"] ?? "4 64% 48%"})`,
                  textColor: `hsl(${values["--destructive"] ?? "4 64% 48%"})`,
                  icon: "✕", title: "Error", msg: "Unable to process request. Please try again.",
                },
              ].map((a) => (
                <div
                  key={a.title}
                  className="px-4 py-3 text-sm flex gap-3"
                  style={{
                    backgroundColor: a.bg,
                    border: `1px solid ${a.border}`,
                    borderRadius: `${r}rem`,
                    borderLeft: `4px solid ${a.border}`,
                  }}
                >
                  <span className="font-bold mt-0.5 text-base leading-none" style={{ color: a.titleColor }}>{a.icon}</span>
                  <div>
                    <div className="font-semibold text-xs mb-0.5" style={{ color: a.titleColor }}>{a.title}</div>
                    <div className="text-xs" style={{ color: a.textColor, opacity: 0.9 }}>{a.msg}</div>
                  </div>
                </div>
              ))}
            </div>
          </PreviewSection>

          {/* ── Progress & Skeleton ── */}
          <PreviewSection label="Progress & Skeleton">
            <div className="space-y-4 max-w-sm">
              {[
                { label: "Uploading", pct: 72 },
                { label: "Storage used", pct: 45 },
                { label: "API quota", pct: 91 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1" style={{ color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` }}>
                    <span>{label}</span><span>{pct}%</span>
                  </div>
                  <div
                    className="h-2 w-full"
                    style={{
                      backgroundColor: `hsl(${values["--muted"] ?? "210 7% 95%"})`,
                      borderRadius: `9999px`,
                    }}
                  >
                    <div
                      className="h-2 transition-all"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: pct > 85
                          ? `hsl(${values["--destructive"] ?? "4 64% 48%"})`
                          : `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                        borderRadius: `9999px`,
                      }}
                    />
                  </div>
                </div>
              ))}
              {/* Skeleton loader */}
              <div className="pt-2 space-y-2">
                <div className="text-xs font-medium mb-2" style={{ color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` }}>Skeleton loader</div>
                {[{ w: "75%" }, { w: "100%" }, { w: "55%" }].map(({ w }, i) => (
                  <div
                    key={i}
                    className="h-3 animate-pulse"
                    style={{
                      width: w,
                      backgroundColor: `hsl(${values["--muted"] ?? "210 7% 95%"})`,
                      borderRadius: `${r}rem`,
                    }}
                  />
                ))}
              </div>
            </div>
          </PreviewSection>

          {/* ── Avatars & Chips ── */}
          <PreviewSection label="Avatars & Chips">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Avatars */}
              {[
                { initials: "KA", bg: values["--primary"] ?? "215 80% 48%", fg: values["--primary-foreground"] ?? "0 0% 100%" },
                { initials: "JD", bg: values["--secondary"] ?? "210 7% 95%", fg: values["--secondary-foreground"] ?? "228 6% 17%" },
                { initials: "MR", bg: values["--accent"] ?? "214 91% 95%", fg: values["--accent-foreground"] ?? "215 80% 48%" },
                { initials: "TS", bg: values["--muted"] ?? "210 7% 95%", fg: values["--muted-foreground"] ?? "224 5% 44%" },
              ].map(({ initials, bg, fg }) => (
                <div
                  key={initials}
                  className="w-10 h-10 flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: `hsl(${bg})`,
                    color: `hsl(${fg})`,
                    borderRadius: "9999px",
                    border: `2px solid hsl(${values["--background"] ?? "0 0% 100%"})`,
                    boxShadow: `0 0 0 1px hsl(${values["--border"] ?? "225 6% 87%"})`,
                  }}
                >{initials}</div>
              ))}
              {/* Avatar group */}
              <div className="flex -space-x-2 ml-2">
                {["KA", "JD", "MR"].map((i, idx) => (
                  <div
                    key={i}
                    className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: `hsl(${values["--primary"] ?? "215 80% 48%"})`,
                      color: `hsl(${values["--primary-foreground"] ?? "0 0% 100%"})`,
                      opacity: 1 - idx * 0.2,
                      borderRadius: "9999px",
                      border: `2px solid hsl(${values["--background"] ?? "0 0% 100%"})`,
                      zIndex: 3 - idx,
                      position: "relative",
                    }}
                  >{i}</div>
                ))}
                <div
                  className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: `hsl(${values["--muted"] ?? "210 7% 95%"})`,
                    color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})`,
                    borderRadius: "9999px",
                    border: `2px solid hsl(${values["--background"] ?? "0 0% 100%"})`,
                    position: "relative",
                    zIndex: 0,
                  }}
                >+5</div>
              </div>
            </div>
            {/* Status chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                { label: "Active",   bg: "#dcfce7", fg: "#15803d", dot: "#16a34a" },
                { label: "Pending",  bg: "#fef9c3", fg: "#a16207", dot: "#ca8a04" },
                { label: "Archived", bg: `hsl(${values["--muted"] ?? "210 7% 95%"})`, fg: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})`, dot: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` },
                { label: "Error",    bg: `hsl(${values["--destructive"] ?? "4 64% 48%"} / 0.1)`, fg: `hsl(${values["--destructive"] ?? "4 64% 48%"})`, dot: `hsl(${values["--destructive"] ?? "4 64% 48%"})` },
              ].map(({ label, bg, fg, dot }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium"
                  style={{ backgroundColor: bg, color: fg, borderRadius: `9999px` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />
                  {label}
                </span>
              ))}
            </div>
          </PreviewSection>

          {/* ── Table ── */}
          <PreviewSection label="Table">
            <div
              className="overflow-hidden rounded-lg w-full max-w-xl"
              style={{ border: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})` }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: `hsl(${values["--muted"] ?? "210 7% 95%"})`, borderBottom: `1px solid hsl(${values["--border"] ?? "225 6% 87%"})` }}>
                    {["Name", "Role", "Status", "Action"].map((h) => (
                      <th key={h} className="text-left px-4 py-2.5 text-xs font-semibold" style={{ color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: `hsl(${values["--card"] ?? "0 0% 100%"})` }}>
                  {[
                    { name: "Alice Kim",    role: "Admin",   status: "Active",   statusBg: "#dcfce7", statusFg: "#15803d" },
                    { name: "Bob Torres",   role: "Editor",  status: "Pending",  statusBg: "#fef9c3", statusFg: "#a16207" },
                    { name: "Carol Smith",  role: "Viewer",  status: "Archived", statusBg: `hsl(${values["--muted"] ?? "210 7% 95%"})`, statusFg: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` },
                  ].map((row, i) => (
                    <tr key={row.name} style={{ borderTop: i > 0 ? `1px solid hsl(${values["--border"] ?? "225 6% 87%"})` : "none" }}>
                      <td className="px-4 py-3 font-medium" style={{ color: `hsl(${values["--foreground"] ?? "228 6% 17%"})` }}>{row.name}</td>
                      <td className="px-4 py-3" style={{ color: `hsl(${values["--muted-foreground"] ?? "224 5% 44%"})` }}>{row.role}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: row.statusBg, color: row.statusFg }}>{row.status}</span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          className="text-xs font-medium underline-offset-2 hover:underline"
                          style={{ color: `hsl(${values["--primary"] ?? "215 80% 48%"})` }}
                        >Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PreviewSection>

        </div>
      </div>

      {/* Generated CSS */}
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="bg-muted px-4 py-3 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold text-sm text-foreground">Generated CSS</h2>
          <button onClick={handleCopyCSS} className="text-xs px-2 py-1 rounded border border-border bg-background text-muted-foreground hover:text-foreground transition-colors">
            {copied ? "✓ Copied" : "Copy"}
          </button>
        </div>
        <pre className="p-4 text-xs font-mono bg-zinc-950 text-zinc-100 overflow-x-auto leading-relaxed">
          <code>{generateCSS()}</code>
        </pre>
      </div>
    </div>
  );
}
