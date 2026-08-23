import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Star } from "lucide-react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

export default function Home() {
  const readmePath = path.join(process.cwd(), "README.md");
  const markdown = fs.readFileSync(readmePath, "utf8");

  return (
    <main className="min-h-screen bg-[#08090a] text-zinc-100">
      {/* ───────────────── HEADER ───────────────── */}

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#08090a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black text-black">
              S
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white">
                SWE Index
              </div>

              <div className="text-[11px] text-zinc-500">
                Hackathons · Hiring · Open Source
              </div>
            </div>
          </a>

          <a
            href="https://github.com/neelamnagarajgithub/Software-Engineer-Hackathons-and-Hiring-and-OpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-zinc-300 transition hover:border-yellow-400/30 hover:bg-yellow-400/[0.05] hover:text-white"
          >
            <Star
              size={15}
              strokeWidth={1.8}
              className="transition group-hover:fill-yellow-400 group-hover:text-yellow-400"
            />
            Star on GitHub
          </a>
        </div>
      </header>



      {/* ───────────────── CONTENT ───────────────── */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Sidebar */}

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-zinc-600">
              On this page
            </p>

            <nav className="space-y-1 text-sm">
              <SideLink href="#hackathon-aggregator-platforms">
                Hackathons
              </SideLink>

              <SideLink href="#flagship-company-government-hackathons">
                Company & Government
              </SideLink>

              <SideLink href="#elite-student-run-hackathons-uscanada">
                Student Hackathons
              </SideLink>

              <SideLink href="#blockchain-web3-hackathons">
                Web3
              </SideLink>

              <SideLink href="#data-science-ml-competition-platforms">
                Data & ML
              </SideLink>

              <SideLink href="#open-source-programs">
                Open Source
              </SideLink>

              <SideLink href="#mass-hiring-drives-india">
                Mass Hiring
              </SideLink>

              <SideLink href="#job-application-platforms">
                Job Platforms
              </SideLink>
            </nav>
          </div>
        </aside>

        {/* Markdown */}

        <article className="min-w-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              /* ───────── HEADINGS ───────── */

              h1: ({ children }) => {
                const text = String(children);
                return (
                  <h1
                    id={slugify(text)}
                    className="mb-6 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl"
                  >
                    {children}
                  </h1>
                );
              },

              h2: ({ children }) => {
                const text = String(children);

                return (
                  <section
                    id={slugify(text)}
                    className="scroll-mt-24 pt-16"
                  >
                    <h2 className="mb-7 border-b border-white/[0.08] pb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {children}
                    </h2>
                  </section>
                );
              },

              h3: ({ children }) => (
                <h3 className="mb-5 mt-12 text-xl font-semibold text-white">
                  {children}
                </h3>
              ),

              /* ───────── TEXT ───────── */

              p: ({ children }) => (
                <p className="mb-5 max-w-4xl text-[15px] leading-7 text-zinc-400">
                  {children}
                </p>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold text-zinc-200">
                  {children}
                </strong>
              ),

              /* ───────── LINKS ───────── */

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-400 underline decoration-blue-400/20 underline-offset-4 transition hover:text-blue-300 hover:decoration-blue-300"
                >
                  {children}
                </a>
              ),

              /* ───────── LISTS ───────── */

              ul: ({ children }) => (
                <ul className="mb-7 ml-5 list-disc space-y-2 text-zinc-400 marker:text-zinc-600">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="mb-7 ml-5 list-decimal space-y-2 text-zinc-400 marker:text-zinc-600">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="pl-1 leading-7">{children}</li>
              ),

              /* ───────── TABLES ───────── */

              table: ({ children }) => (
                <div className="my-8 overflow-x-auto rounded-xl border border-white/[0.08] bg-white/[0.015] shadow-2xl shadow-black/20">
                  <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                    {children}
                  </table>
                </div>
              ),

              thead: ({ children }) => (
                <thead className="bg-white/[0.04]">{children}</thead>
              ),

              th: ({ children }) => (
                <th className="whitespace-nowrap border-b border-white/[0.08] px-5 py-4 text-xs font-semibold uppercase tracking-wide text-zinc-300">
                  {children}
                </th>
              ),

              tbody: ({ children }) => <tbody>{children}</tbody>,

              tr: ({ children }) => (
                <tr className="transition hover:bg-white/[0.025]">
                  {children}
                </tr>
              ),

              td: ({ children }) => (
                <td className="border-b border-white/[0.05] px-5 py-4 align-top leading-6 text-zinc-400">
                  {children}
                </td>
              ),

              /* ───────── CODE ───────── */

              code: ({ children }) => (
                <code className="rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-zinc-300">
                  {children}
                </code>
              ),

              /* ───────── BLOCKQUOTE ───────── */

              blockquote: ({ children }) => (
                <blockquote className="my-8 rounded-r-xl border-l-2 border-amber-400/50 bg-amber-400/[0.04] px-6 py-5 text-sm leading-7 text-zinc-400">
                  {children}
                </blockquote>
              ),

              /* ───────── HR ───────── */

              hr: () => <hr className="my-16 border-white/[0.08]" />,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </div>

      {/* ───────────────── FOOTER ───────────────── */}

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Built for software engineers. Maintained by the community.
          </p>

          <a
            href="https://github.com/YOUR_USERNAME/Software-Engineer-Hackathons-and-Hiring-and-OpenSource"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Suggest an update →
          </a>
        </div>
      </footer>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="bg-[#0c0d0f] px-5 py-6">
      <div className="text-2xl font-bold tracking-tight text-white">
        {number}
      </div>

      <div className="mt-1 text-xs text-zinc-500">{label}</div>
    </div>
  );
}

function SideLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block rounded-md px-3 py-2 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white"
    >
      {children}
    </a>
  );
}