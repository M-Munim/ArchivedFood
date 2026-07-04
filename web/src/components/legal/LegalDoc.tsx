import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export type LegalTable = {
  head: string[];
  rows: string[][];
};

export type LegalBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type LegalSection = {
  heading: string;
  body?: string[];
  /** Optional bullet list rendered after the body paragraphs. */
  list?: string[];
  /** Ordered paragraphs and lists for sections with interleaved content. */
  blocks?: LegalBlock[];
  /** Optional table (used by the Cookie Policy for cookie categories). */
  table?: LegalTable;
};

/**
 * Shared, readable layout for the legal pages (Privacy, Terms, Cookies).
 */
export function LegalDoc({
  eyebrow,
  title,
  lastUpdated,
  documentLabel,
  intro,
  sections,
  showTemplateDisclaimer = true,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  documentLabel?: string;
  intro: string;
  sections: LegalSection[];
  showTemplateDisclaimer?: boolean;
}) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Eyebrow className="text-brand-teal">{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-serif text-[36px] font-extrabold leading-[1.05] text-brand-teal-dark sm:text-[48px]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-ink/60">Last updated: {lastUpdated}</p>
        {documentLabel && (
          <p className="mt-2 text-sm font-medium text-ink/70">
            {documentLabel}
          </p>
        )}

        <p className="mt-8 text-lg leading-[1.5] text-ink">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-2xl font-bold text-ink">
                {s.heading}
              </h2>
              {s.body && (
                <div className="mt-3 space-y-4 text-lg leading-[1.5] text-ink/90">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
              {s.list && (
                <ul className="mt-4 space-y-2 text-lg leading-[1.5] text-ink/90">
                  {s.list.map((li, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
                      />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.blocks && (
                <div className="mt-3 space-y-4 text-lg leading-[1.5] text-ink/90">
                  {s.blocks.map((block, i) => {
                    if (block.type === "paragraph") {
                      return <p key={i}>{block.text}</p>;
                    }

                    if (block.type === "subheading") {
                      return (
                        <h3 key={i} className="font-semibold text-ink">
                          {block.text}
                        </h3>
                      );
                    }

                    return (
                      <ul key={i} className="space-y-2">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              )}
              {s.table && (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-base">
                    <thead>
                      <tr className="border-b-2 border-ink/15">
                        {s.table.head.map((h) => (
                          <th
                            key={h}
                            className="py-2 pr-4 font-semibold text-ink"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          className="border-b border-ink/10 align-top"
                        >
                          {row.map((cell, ci) => (
                            <td key={ci} className="py-3 pr-4 text-ink/85">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {showTemplateDisclaimer && (
          <p className="mt-14 rounded-2xl bg-brand-cream px-6 py-5 text-sm leading-[1.5] text-ink/80">
            This page is a general template provided for convenience and does
            not constitute legal advice. Please have it reviewed and tailored by
            qualified legal counsel — including for the specific privacy laws
            that apply to your centers and families — before relying on it. You
            can manage your cookie choices any time from our{" "}
            <Link
              href="/cookies"
              className="font-semibold text-brand-teal underline"
            >
              Cookie Policy
            </Link>
            .
          </p>
        )}
      </Container>
    </section>
  );
}
