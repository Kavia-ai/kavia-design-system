import React, { useState } from "react";

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export interface TokenDef {
  token: string;
  value: string;
  description: string;
}

export interface DevGuideProps {
  name: string;
  description: string;
  shadcnCommand: string;
  importCode: string;
  usageCode: string;
  preview: React.ReactNode;
  props?: PropDef[];
  tokens?: TokenDef[];
  notes?: string[];
}

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 text-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{language}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-2 py-0.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-zinc-950 text-zinc-100 text-xs leading-relaxed whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">{title}</h2>
      {children}
    </section>
  );
}

export function DevGuide({
  name,
  description,
  shadcnCommand,
  importCode,
  usageCode,
  preview,
  props,
  tokens,
  notes,
}: DevGuideProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{name}</h1>
          <span className="text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1 rounded-full tracking-wide">
            KAVIA AI
          </span>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
      </div>

      {/* Installation */}
      <Section title="Installation">
        <p className="text-sm text-muted-foreground">
          Install the KAVIA AI design system package:
        </p>
        <CodeBlock language="bash" code={`npm install @kavia-ai/ui`} />
      </Section>

      {/* Import */}
      <Section title="Import">
        <p className="text-sm text-muted-foreground">
          Import from the <code className="text-primary font-mono text-xs">@/kavia</code> namespace:
        </p>
        <CodeBlock language="tsx" code={importCode} />
      </Section>

      {/* Usage */}
      <Section title="Usage">
        <CodeBlock language="tsx" code={usageCode} />
      </Section>

      {/* Theme Previews */}
      <Section title="Theme Previews">
        <p className="text-sm text-muted-foreground">
          The component adapts automatically to light and dark themes via CSS variables.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Light Mode */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500" />
              <span className="text-sm font-medium text-foreground">Light Mode</span>
            </div>
            <div
              className="rounded-xl border border-zinc-200 p-6 flex items-center justify-center min-h-[120px]"
              style={{ backgroundColor: "#ffffff", color: "#172b4d" }}
            >
              {preview}
            </div>
          </div>

          {/* Dark Mode */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-400 border border-indigo-500" />
              <span className="text-sm font-medium text-foreground">Dark Mode</span>
            </div>
            <div
              className="dark rounded-xl border border-zinc-700 p-6 flex items-center justify-center min-h-[120px]"
              style={{ backgroundColor: "#1d2125", color: "#c7d1db" }}
            >
              {preview}
            </div>
          </div>
        </div>
      </Section>

      {/* Props */}
      {props && props.length > 0 && (
        <Section title="Props">
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop, i) => (
                  <tr
                    key={prop.name}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}
                  >
                    <td className="px-4 py-3">
                      <code className="text-primary font-mono text-xs">
                        {prop.name}
                        {prop.required && (
                          <span className="text-destructive ml-0.5">*</span>
                        )}
                      </code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-muted-foreground font-mono text-xs">{prop.type}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-muted-foreground font-mono text-xs">
                        {prop.default ?? "—"}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            <code className="text-destructive">*</code> Required prop
          </p>
        </Section>
      )}

      {/* Design Tokens */}
      {tokens && tokens.length > 0 && (
        <Section title="Design Tokens Used">
          <p className="text-sm text-muted-foreground">
            CSS custom properties consumed by this component. Override them in your theme to customize appearance.
          </p>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Token</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Default Value</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token, i) => (
                  <tr key={token.token} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 py-3">
                      <code className="text-xs font-mono text-primary">{token.token}</code>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {token.value.startsWith("#") || token.value.startsWith("hsl") || token.value.match(/^\d+ \d+%/) ? (
                          <div
                            className="w-4 h-4 rounded border border-border shrink-0"
                            style={{
                              backgroundColor: token.value.includes(" ")
                                ? `hsl(${token.value})`
                                : token.value,
                            }}
                          />
                        ) : null}
                        <code className="text-xs font-mono text-muted-foreground">{token.value}</code>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock
            language="css"
            code={`/* Override in your globals.css or theme file */\n:root {\n${tokens.map((t) => `  ${t.token}: /* your value */;`).join("\n")}\n}`}
          />
        </Section>
      )}

      {/* Notes */}
      {notes && notes.length > 0 && (
        <Section title="Developer Notes">
          <ul className="space-y-2">
            {notes.map((note, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">→</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Footer */}
      <div className="pt-4 border-t border-border flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">KAVIA AI Design System</span>
          {" — "}
          {name} component · Accessible, composable, and fully customizable.
        </p>
        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
          @kavia-ai/ui
        </span>
      </div>
    </div>
  );
}
