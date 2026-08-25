"use client";

import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Star,
  GitPullRequest,
  BookOpen,
  Compass,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

const REPO_URL = "https://github.com/neelamnagarajgithub/swe-index";


const GUIDE_PDF_URL = "https://sweindex.nagarajneelam.in/guide.pdf";


const NAV_GROUPS: { label: string; links: { href: string; text: string }[] }[] = [
  {
    label: "Learn & Build",
    links: [
      { href: "#roadmaps", text: "Roadmaps" },
      { href: "#dsa-practice-sheets-resources", text: "DSA Sheets" },
      { href: "#cs-fundamentals-os-dbms-cn-oop", text: "CS Fundamentals" },
      { href: "#system-design-resources", text: "System Design" },
      { href: "#development-learning-tracks", text: "Dev Learning Tracks" },
      { href: "#aptitude-verbal-reasoning-service-company-drives", text: "Aptitude & Verbal" },
      { href: "#free-certifications-courses", text: "Free Certifications" },
      { href: "#paid-industry-certifications-cloud-devops", text: "Paid Certifications" },
      { href: "#competitive-programming", text: "Competitive Programming" },
      { href: "#competitive-programming-courses-channels", text: "CP Courses & Channels" },
      { href: "#books-for-software-engineers", text: "Books" },
    ],
  },
  {
    label: "Practice & Prepare",
    links: [
      { href: "#mock-interview-platforms", text: "Mock Interviews" },
      { href: "#behavioral-interview-prep", text: "Behavioral Prep" },
      { href: "#interview-experience-repositories", text: "Interview Experiences" },
      { href: "#resume-portfolio-tools", text: "Resume & Portfolio" },
    ],
  },
  {
    label: "Find Opportunities",
    links: [
      { href: "#hackathon-aggregator-platforms", text: "Hackathon Platforms" },
      { href: "#flagship-company-government-hackathons", text: "Company & Government" },
      { href: "#elite-student-run-hackathons-uscanada", text: "Student Hackathons" },
      { href: "#blockchain-web3-hackathons", text: "Web3" },
      { href: "#data-science-ml-competition-platforms", text: "Data & ML" },
      { href: "#open-source-programs", text: "Open Source" },
    ],
  },
  {
    label: "Apply",
    links: [
      { href: "#mass-hiring-drives-india", text: "Mass Hiring" },
      { href: "#job-application-platforms", text: "Job Platforms" },
    ],
  },
  {
    label: "Ongoing Support",
    links: [
      { href: "#communities", text: "Communities" },
    ],
  },
];

/* The guided tour: a short walk through how the page is organized. Each
   step (optionally) scrolls to a section id so the person sees what's
   being described as they read it. */
const TOUR_STEPS: { title: string; body: string; target?: string }[] = [
  {
    title: "Welcome to SWE Index",
    body: "This is a single living page: everything you need to learn, practice, find opportunities, apply, and stay in the loop — grouped the same way down the sidebar and in this tour.",
  },
  {
    title: "1. Learn & Build Fundamentals",
    body: "Start here if you're building skills: roadmaps, DSA sheets, CS fundamentals, system design, dev tracks, aptitude prep, certifications, competitive programming, and books.",
    target: "roadmaps",
  },
  {
    title: "2. Practice & Prepare",
    body: "Once the fundamentals are in place, use mock interview platforms, behavioral prep, real interview write-ups, and resume/portfolio tools to get interview-ready.",
    target: "mock-interview-platforms",
  },
  {
    title: "3. Find Opportunities",
    body: "Hackathons (aggregators, flagship company drives, elite student events, Web3, data/ML) and open-source programs — this is where you go looking for something to join.",
    target: "hackathon-aggregator-platforms",
  },
  {
    title: "4. Apply",
    body: "Mass hiring drives in India and general job application platforms, for when you're ready to actually send applications.",
    target: "mass-hiring-drives-india",
  },
  {
    title: "5. Community & staying updated",
    body: "Communities to ask questions and follow drives in real time, plus how to contribute a new resource yourself.",
    target: "communities",
  },
  {
    title: "One more thing",
    body: "Hit the Guide button in the header any time for a downloadable PDF walkthrough, or click Take a tour again from the same spot to replay this.",
  },
];

const TOUR_SEEN_KEY = "swe-index-tour-seen";

export default function SiteShell({ markdown }: { markdown: string }) {
  const [tourOpen, setTourOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  // Auto-launch the tour once per browser, after the page has had a beat
  // to render, so first-time visitors get oriented without it feeling
  // like a popup ambush.
  useEffect(() => {
    const seen = typeof window !== "undefined" && window.localStorage.getItem(TOUR_SEEN_KEY);
    if (!seen) {
      const timer = setTimeout(() => setTourOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  // Whenever the active step changes (and the tour is open), scroll its
  // target section into view.
  useEffect(() => {
    if (!tourOpen) return;
    const target = TOUR_STEPS[tourStep]?.target;
    if (target) {
      const el = document.getElementById(target);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [tourStep, tourOpen]);

  const startTour = useCallback(() => {
    setTourStep(0);
    setTourOpen(true);
  }, []);

  const closeTour = useCallback(() => {
    setTourOpen(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(TOUR_SEEN_KEY, "1");
    }
  }, []);

  const nextStep = useCallback(() => {
    setTourStep((s) => {
      if (s >= TOUR_STEPS.length - 1) {
        closeTour();
        return s;
      }
      return s + 1;
    });
  }, [closeTour]);

  const prevStep = useCallback(() => {
    setTourStep((s) => Math.max(0, s - 1));
  }, []);

  return (
    <main className="min-h-screen bg-[#08090a] text-zinc-100">
      {/* ───────────────── HEADER ───────────────── */}

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#08090a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={45}
                height={45}
                className="rounded-lg object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white">SWE Index</div>
              <div className="text-[11px] text-zinc-500">
                Hackathons · Hiring · Open Source
              </div>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={startTour}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2 text-sm font-medium text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-400/[0.05] hover:text-white sm:px-3.5"
            >
              <Compass
                size={15}
                strokeWidth={1.8}
                className="shrink-0 transition group-hover:text-violet-400"
              />
              <span className="hidden sm:inline">Take a tour</span>
            </button>

            <a
              href={GUIDE_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-zinc-300 transition hover:border-sky-400/30 hover:bg-sky-400/[0.05] hover:text-white"
            >
              <BookOpen
                size={15}
                strokeWidth={1.8}
                className="transition group-hover:text-sky-400"
              />
              Guide
            </a>

            <a
              href={`https://github.com/neelamnagarajgithub/swe-index/issues/new/choose`}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-zinc-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:text-white sm:flex"
            >
              <GitPullRequest
                size={15}
                strokeWidth={1.8}
                className="transition group-hover:text-emerald-400"
              />
              Contribute
            </a>

            <a
              href={REPO_URL}
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
        </div>
      </header>

      {/* ───────────────── CONTENT ───────────────── */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Sidebar */}

        <aside className="hidden lg:block">
          <div className="sidebar-scroll sticky top-24 max-h-[calc(100vh-7rem)] space-y-7 overflow-y-auto pb-8 pr-2">
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-600">
                  {group.label}
                </p>

                <nav className="space-y-1 text-sm">
                  {group.links.map((link) => (
                    <SideLink key={link.href} href={link.href}>
                      {link.text}
                    </SideLink>
                  ))}
                </nav>
              </div>
            ))}

            <a
              href={`${REPO_URL}#-contributing`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 rounded-md border border-white/[0.06] px-3 py-2.5 text-sm font-medium text-zinc-400 transition hover:border-emerald-400/20 hover:bg-emerald-400/[0.04] hover:text-emerald-300"
            >
              <GitPullRequest size={14} strokeWidth={1.8} />
              Suggest an addition
            </a>
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
                  <section id={slugify(text)} className="scroll-mt-24 pt-16">
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
                <div className="table-scroll my-8 overflow-x-auto rounded-xl border border-white/[0.08] bg-white/[0.015] shadow-2xl shadow-black/20">
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
          <p>Built for software engineers. Maintained by the community.</p>

          <div className="flex items-center gap-5">
            <a
              href={GUIDE_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Read the guide →
            </a>

            <a
              href={`${REPO_URL}#-contributing`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Suggest an update →
            </a>

            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* ───────────────── TOUR OVERLAY ───────────────── */}

      {tourOpen && (
        <TourOverlay
          step={TOUR_STEPS[tourStep]}
          stepIndex={tourStep}
          stepCount={TOUR_STEPS.length}
          onNext={nextStep}
          onPrev={prevStep}
          onClose={closeTour}
        />
      )}

      <style>{`
        .sidebar-scroll,
        .table-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.14) transparent;
        }
        .sidebar-scroll::-webkit-scrollbar,
        .table-scroll::-webkit-scrollbar {
          width: 5px;
          height: 6px;
        }
        .sidebar-scroll::-webkit-scrollbar-track,
        .table-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb,
        .table-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.14);
          border-radius: 9999px;
        }
        .sidebar-scroll:hover::-webkit-scrollbar-thumb,
        .table-scroll:hover::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.28);
        }
      `}</style>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

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

function TourOverlay({
  step,
  stepIndex,
  stepCount,
  onNext,
  onPrev,
  onClose,
}: {
  step: { title: string; body: string; target?: string };
  stepIndex: number;
  stepCount: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}) {
  const isLast = stepIndex === stepCount - 1;
  const isFirst = stepIndex === 0;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[70] flex items-end justify-center p-5 sm:items-end sm:justify-end sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Guided tour"
    >
      {/* Soft scrim so the card is legible without hiding the page it's
          explaining. Clicks pass through everywhere except the card. */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="pointer-events-auto relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#111214] p-5 shadow-2xl shadow-black/50">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close tour"
          className="absolute right-4 top-4 rounded-md p-1 text-zinc-500 transition hover:bg-white/[0.06] hover:text-white"
        >
          <X size={16} strokeWidth={1.8} />
        </button>

        <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-violet-400">
          Step {stepIndex + 1} of {stepCount}
        </p>

        <h3 className="mb-2 pr-6 text-lg font-semibold text-white">
          {step.title}
        </h3>

        <p className="mb-5 text-sm leading-6 text-zinc-400">{step.body}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {Array.from({ length: stepCount }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  i === stepIndex ? "bg-violet-400" : "bg-white/15"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {!isFirst && (
              <button
                type="button"
                onClick={onPrev}
                className="flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                <ArrowLeft size={13} strokeWidth={2} />
                Back
              </button>
            )}

            <button
              type="button"
              onClick={onNext}
              className="flex items-center gap-1 rounded-lg bg-violet-500/90 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-400"
            >
              {isLast ? "Done" : "Next"}
              {!isLast && <ArrowRight size={13} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}