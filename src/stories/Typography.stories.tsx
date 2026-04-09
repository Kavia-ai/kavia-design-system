import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design System/Typography",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

// ─── Types ────────────────────────────────────────────────────────────────────

interface TypeRow {
  name: string;
  fontFamily: string;
  fontSize: number;      // px
  lineHeight: number;    // px
  letterSpacing: number; // em
}

interface TypeGroup {
  category: string;
  rows: TypeRow[];
}

// ─── Type Scale Data ──────────────────────────────────────────────────────────

const typeScale: TypeGroup[] = [
  {
    category: "Display",
    rows: [
      { name: "Display-1", fontFamily: "Inter / System UI", fontSize: 56, lineHeight: 68, letterSpacing: -1.5 },
      { name: "Display-2", fontFamily: "Inter / System UI", fontSize: 48, lineHeight: 58, letterSpacing: -1.0 },
      { name: "Display-3", fontFamily: "Inter / System UI", fontSize: 40, lineHeight: 50, letterSpacing: -0.8 },
    ],
  },
  {
    category: "Heading",
    rows: [
      { name: "H1", fontFamily: "Inter / System UI", fontSize: 36, lineHeight: 44, letterSpacing: -0.75 },
      { name: "H2", fontFamily: "Inter / System UI", fontSize: 30, lineHeight: 38, letterSpacing: -0.5 },
      { name: "H3", fontFamily: "Inter / System UI", fontSize: 24, lineHeight: 32, letterSpacing: -0.3 },
      { name: "H4", fontFamily: "Inter / System UI", fontSize: 20, lineHeight: 28, letterSpacing: -0.2 },
      { name: "H5", fontFamily: "Inter / System UI", fontSize: 18, lineHeight: 26, letterSpacing: -0.1 },
      { name: "H6", fontFamily: "Inter / System UI", fontSize: 16, lineHeight: 24, letterSpacing: 0 },
    ],
  },
  {
    category: "Body",
    rows: [
      { name: "Body Large",   fontFamily: "Inter / System UI", fontSize: 18, lineHeight: 28, letterSpacing: 0 },
      { name: "Body Default", fontFamily: "Inter / System UI", fontSize: 14, lineHeight: 22, letterSpacing: 0 },
      { name: "Body Small",   fontFamily: "Inter / System UI", fontSize: 12, lineHeight: 18, letterSpacing: 0 },
    ],
  },
  {
    category: "Label / UI",
    rows: [
      { name: "Label Large",  fontFamily: "Inter / System UI", fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
      { name: "Label Default",fontFamily: "Inter / System UI", fontSize: 12, lineHeight: 16, letterSpacing: 0.2 },
      { name: "Label Small",  fontFamily: "Inter / System UI", fontSize: 11, lineHeight: 14, letterSpacing: 0.3 },
      { name: "Caption",      fontFamily: "Inter / System UI", fontSize: 10, lineHeight: 14, letterSpacing: 0.4 },
    ],
  },
  {
    category: "Code",
    rows: [
      { name: "Code Large",   fontFamily: "monospace",         fontSize: 14, lineHeight: 22, letterSpacing: 0 },
      { name: "Code Default", fontFamily: "monospace",         fontSize: 12, lineHeight: 18, letterSpacing: 0 },
    ],
  },
];

const weights = [
  { label: "Regular",   value: 400 },
  { label: "Medium",    value: 500 },
  { label: "Semi Bold", value: 600 },
  { label: "Bold",      value: 700 },
];

// ─── Components ───────────────────────────────────────────────────────────────

const col = {
  name:          { width: 130, flexShrink: 0 },
  fontFamily:    { width: 150, flexShrink: 0 },
  fontSize:      { width: 80,  flexShrink: 0 },
  lineHeight:    { width: 90,  flexShrink: 0 },
  letterSpacing: { width: 110, flexShrink: 0 },
  weights:       { width: 100, flexShrink: 0 },
  preview:       { flex: 1, minWidth: 200 },
};

const headerCell: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#d1d5db",
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  padding: "12px 16px",
};

function TableHeader() {
  return (
    <div style={{ display: "flex", alignItems: "center", background: "#111827", borderBottom: "1px solid #374151" }}>
      <div style={{ ...col.name,          ...headerCell }}>Text Styles</div>
      <div style={{ ...col.fontFamily,    ...headerCell }}>fontFamily</div>
      <div style={{ ...col.fontSize,      ...headerCell }}>fontSize</div>
      <div style={{ ...col.lineHeight,    ...headerCell }}>lineHeight</div>
      <div style={{ ...col.letterSpacing, ...headerCell }}>letterSpacing</div>
      <div style={{ ...col.weights,       ...headerCell }}>Weights</div>
      <div style={{ ...col.preview,       ...headerCell }}>Preview</div>
    </div>
  );
}

function CategoryRow({ label }: { label: string }) {
  return (
    <div style={{ background: "#f3f4f6", borderBottom: "1px solid #e5e7eb", padding: "14px 16px" }}>
      <span style={{ fontSize: 22, fontWeight: 700, color: "#111827" }}>{label}</span>
    </div>
  );
}

function TypeRow({ row }: { row: TypeRow }) {
  const isCode = row.fontFamily === "monospace";
  const previewSize = Math.min(row.fontSize, 48); // cap preview so it fits

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #e5e7eb",
      minHeight: 88,
      background: "#ffffff",
    }}>
      {/* Name */}
      <div style={{ ...col.name, padding: "16px 16px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{row.name}</span>
      </div>

      {/* Font Family */}
      <div style={{ ...col.fontFamily, padding: "16px 16px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, color: "#374151", fontFamily: isCode ? "monospace" : "inherit" }}>
          {isCode ? "monospace" : "Inter / System"}
        </span>
      </div>

      {/* Font Size */}
      <div style={{ ...col.fontSize, padding: "16px 16px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, color: "#374151" }}>{row.fontSize}</span>
      </div>

      {/* Line Height */}
      <div style={{ ...col.lineHeight, padding: "16px 16px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, color: "#374151" }}>{row.lineHeight}</span>
      </div>

      {/* Letter Spacing */}
      <div style={{ ...col.letterSpacing, padding: "16px 16px", flexShrink: 0 }}>
        <span style={{ fontSize: 13, color: "#374151" }}>{row.letterSpacing > 0 ? `+${row.letterSpacing}` : row.letterSpacing}</span>
      </div>

      {/* Weights */}
      <div style={{ ...col.weights, padding: "16px 16px", flexShrink: 0 }}>
        {weights.map((w) => (
          <div key={w.value} style={{ fontSize: 11, color: "#6b7280", lineHeight: "1.7", fontWeight: w.value }}>
            {w.label}
          </div>
        ))}
      </div>

      {/* Preview */}
      <div style={{ ...col.preview, padding: "16px 16px", display: "flex", alignItems: "center", gap: 24 }}>
        {weights.map((w) => (
          <span
            key={w.value}
            style={{
              fontSize: previewSize,
              fontWeight: w.value,
              lineHeight: 1,
              color: "#111827",
              fontFamily: isCode ? "monospace" : "system-ui, -apple-system, sans-serif",
              letterSpacing: `${row.letterSpacing}px`,
            }}
          >
            Aa
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Story ────────────────────────────────────────────────────────────────────

export const Scale: Story = {
  name: "Type Scale",
  render: () => (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      {/* Page header */}
      <div style={{ padding: "32px 40px 24px", borderBottom: "1px solid #e5e7eb", background: "#ffffff" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Typography</h1>
        <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
          Base font size: <code style={{ fontFamily: "monospace", background: "#f3f4f6", padding: "1px 6px", borderRadius: 4, fontSize: 12 }}>14px</code>
          {" · "}Font sizes shown in px · lineHeight in px · letterSpacing in px
        </p>
      </div>

      {/* Table */}
      <div style={{ margin: "24px 40px", border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <TableHeader />
        {typeScale.map((group) => (
          <div key={group.category}>
            <CategoryRow label={group.category} />
            {group.rows.map((row) => (
              <TypeRow key={row.name} row={row} />
            ))}
          </div>
        ))}
      </div>

      {/* Weight Reference */}
      <div style={{ margin: "0 40px 40px", padding: 24, background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 20px" }}>
          Font Weight Reference
        </h2>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          {[
            { label: "Thin",      w: 100 },
            { label: "Light",     w: 300 },
            { label: "Regular",   w: 400 },
            { label: "Medium",    w: 500 },
            { label: "Semi Bold", w: 600 },
            { label: "Bold",      w: 700 },
            { label: "Extra Bold",w: 800 },
            { label: "Black",     w: 900 },
          ].map(({ label, w }) => (
            <div key={w}>
              <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>{label} · {w}</div>
              <div style={{ fontSize: 24, fontWeight: w, color: "#111827", lineHeight: 1 }}>Ag</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
