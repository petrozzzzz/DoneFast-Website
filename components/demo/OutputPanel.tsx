"use client";

import type { OutputType } from "@/lib/demos";

type TableOutput = {
  type: "table";
  columns: string[];
  rows: (string | number)[][];
  footer?: string;
};

type EmailPreviewOutput = {
  type: "email-preview";
  from: string;
  to: string | string[];
  subject: string;
  body: string;
  attachments?: string[];
};

type ComparisonOutput = {
  type: "comparison";
  suppliers: {
    name: string;
    total: number | string;
    leadTime?: string;
    paymentTerms?: string;
    score?: number;
    highlight?: boolean;
    notes?: string[];
  }[];
  recommendation?: string;
};

type HtmlOutput = {
  type: "html";
  html: string;
  caption?: string;
};

type JsonOutput = {
  type: "json";
  data: unknown;
  caption?: string;
};

type TextOutput = {
  type: "text";
  text: string;
};

export type StepOutput =
  | TableOutput
  | EmailPreviewOutput
  | ComparisonOutput
  | HtmlOutput
  | JsonOutput
  | TextOutput;

export function OutputPanel({
  stepLabel,
  outputType,
  output,
  status,
}: {
  stepLabel: string;
  outputType?: OutputType;
  output: StepOutput | null;
  status: "pending" | "running" | "complete" | "error";
}) {
  return (
    <div className="output-panel">
      <div className="output-panel-header">
        <span className="output-panel-eyebrow">Step output</span>
        <span className="output-panel-title">{stepLabel}</span>
      </div>

      <div className="output-panel-body">
        {status === "pending" && (
          <div className="output-placeholder">
            Hit <span className="kbd">Run Demo</span> to generate this step&rsquo;s output.
          </div>
        )}

        {status === "running" && (
          <div className="output-placeholder">
            <span className="output-spinner" aria-hidden />
            <span>Claude is working on this step…</span>
          </div>
        )}

        {status === "error" && (
          <div className="output-placeholder output-error">
            Something went wrong with this step.
          </div>
        )}

        {(status === "complete" || output) && output && (
          <OutputRenderer output={output} fallbackType={outputType} />
        )}

        {status === "complete" && !output && (
          <div className="output-placeholder">Completed — no output returned.</div>
        )}
      </div>
    </div>
  );
}

function OutputRenderer({
  output,
  fallbackType,
}: {
  output: StepOutput;
  fallbackType?: OutputType;
}) {
  const type = output.type ?? fallbackType;

  if (type === "table" && output.type === "table") {
    return <TableRenderer output={output} />;
  }

  if (type === "email-preview" && output.type === "email-preview") {
    return <EmailPreviewRenderer output={output} />;
  }

  if (type === "comparison" && output.type === "comparison") {
    return <ComparisonRenderer output={output} />;
  }

  if (type === "html" && output.type === "html") {
    return (
      <div className="output-html-wrap">
        {output.caption && <div className="output-caption">{output.caption}</div>}
        <div
          className="output-html"
          dangerouslySetInnerHTML={{ __html: output.html }}
        />
      </div>
    );
  }

  if (type === "json" && output.type === "json") {
    return (
      <div>
        {output.caption && <div className="output-caption">{output.caption}</div>}
        <pre className="output-json">
          {JSON.stringify(output.data, null, 2)}
        </pre>
      </div>
    );
  }

  if (type === "text" && output.type === "text") {
    return <div className="output-text">{output.text}</div>;
  }

  return (
    <pre className="output-json">{JSON.stringify(output, null, 2)}</pre>
  );
}

function TableRenderer({ output }: { output: TableOutput }) {
  return (
    <div className="output-table-wrap">
      <table className="output-table">
        <thead>
          <tr>
            {output.columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {output.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {output.footer && <div className="output-table-footer">{output.footer}</div>}
    </div>
  );
}

function EmailPreviewRenderer({ output }: { output: EmailPreviewOutput }) {
  const to = Array.isArray(output.to) ? output.to.join(", ") : output.to;
  return (
    <div className="email-preview">
      <div className="email-preview-chrome">
        <div className="email-preview-row">
          <span className="email-preview-label">From</span>
          <span className="email-preview-value">{output.from}</span>
        </div>
        <div className="email-preview-row">
          <span className="email-preview-label">To</span>
          <span className="email-preview-value">{to}</span>
        </div>
        <div className="email-preview-row">
          <span className="email-preview-label">Subject</span>
          <span className="email-preview-value email-preview-subject">
            {output.subject}
          </span>
        </div>
      </div>
      <div className="email-preview-body">
        {output.body.split("\n").map((line, i) => (
          <p key={i}>{line || "\u00A0"}</p>
        ))}
      </div>
      {output.attachments && output.attachments.length > 0 && (
        <div className="email-preview-attachments">
          {output.attachments.map((name) => (
            <span key={name} className="email-preview-attachment">
              📎 {name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ComparisonRenderer({ output }: { output: ComparisonOutput }) {
  const totals = output.suppliers
    .map((s) => (typeof s.total === "number" ? s.total : parseFloat(String(s.total))))
    .filter((n) => Number.isFinite(n));
  const minTotal = totals.length ? Math.min(...totals) : 0;
  const maxTotal = totals.length ? Math.max(...totals) : 0;
  const range = maxTotal - minTotal || 1;

  return (
    <div>
      <div className="comparison-grid">
        {output.suppliers.map((s) => {
          const totalNum =
            typeof s.total === "number" ? s.total : parseFloat(String(s.total));
          const normalized = Number.isFinite(totalNum)
            ? 100 - ((totalNum - minTotal) / range) * 70
            : null;
          const totalDisplay =
            typeof s.total === "number"
              ? `£${s.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
              : s.total;
          return (
            <div
              key={s.name}
              className={`comparison-card ${s.highlight ? "comparison-card-winner" : ""}`}
            >
              {s.highlight && <span className="comparison-badge">Recommended</span>}
              <div className="comparison-name">{s.name}</div>
              <div className="comparison-total">{totalDisplay}</div>
              {normalized !== null && (
                <div className="comparison-bar-wrap">
                  <div
                    className="comparison-bar"
                    style={{ width: `${Math.max(15, normalized)}%` }}
                  />
                </div>
              )}
              <dl className="comparison-meta">
                {s.leadTime && (
                  <>
                    <dt>Lead time</dt>
                    <dd>{s.leadTime}</dd>
                  </>
                )}
                {s.paymentTerms && (
                  <>
                    <dt>Payment</dt>
                    <dd>{s.paymentTerms}</dd>
                  </>
                )}
                {typeof s.score === "number" && (
                  <>
                    <dt>Score</dt>
                    <dd>{s.score}/100</dd>
                  </>
                )}
              </dl>
              {s.notes && s.notes.length > 0 && (
                <ul className="comparison-notes">
                  {s.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      {output.recommendation && (
        <div className="comparison-recommendation">
          <strong>AI recommendation:</strong> {output.recommendation}
        </div>
      )}
    </div>
  );
}
