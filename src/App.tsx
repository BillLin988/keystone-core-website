import { motion } from "motion/react";
import { BookOpen, ShieldCheck } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4";

const legalNotice =
  "This website is provided for general corporate information only. Nothing on this website constitutes an offer to sell securities, a solicitation of investment, immigration advice, legal advice, tax advice, or financial advice. Keystone Core LLC is a holding company and does not provide commercial client services directly.";

function KeystoneLogo() {
  return (
    <div className="flex items-center gap-3 text-zinc-50">
      <svg className="h-6 w-6 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
        <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
      </svg>
      <span className="text-lg font-medium md:text-xl">Keystone Core LLC</span>
    </div>
  );
}

function PlatformPills({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`mt-6 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
      {["Ownership", "Governance", "Oversight"].map((item) => (
        <span key={item} className="rounded-full border border-zinc-100/15 bg-black/20 px-4 py-2 text-sm leading-6 text-zinc-200/86 backdrop-blur-md">
          {item}
        </span>
      ))}
    </div>
  );
}

function HeroSectionThree() {
  return (
    <section className="flex w-full flex-1 flex-col justify-between pb-4 pt-[14vh] text-zinc-50 md:pb-6 md:pt-[13vh]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-5 inline-flex rounded-full border border-zinc-100/10 bg-black/20 px-5 py-2 text-sm font-medium uppercase tracking-wider text-zinc-100/88 backdrop-blur-md">
          Private Holding Company
        </p>
        <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-[0.95] text-zinc-50 drop-shadow-[0_2px_30px_rgba(0,0,0,0.55)] lg:text-6xl xl:text-[4.75rem]">
          Building the structure behind accountable operating businesses.
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-100/80 drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)] md:text-base">
          Keystone Core LLC is a private holding company focused on ownership, governance, and strategic oversight for operating businesses under the Keystone brand family.
        </p>
        <PlatformPills centered />
      </div>

      <div className="mx-auto h-[18vh] min-h-[96px] w-full max-w-5xl shrink-0" aria-hidden="true" />

      <div className="liquid-glass w-full rounded-3xl p-5 text-left text-zinc-200/86 md:p-6">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1.1fr]">
          <article>
            <KeystoneLogo />
            <p className="mt-4 text-sm leading-6 text-zinc-200/78 md:text-base md:leading-7">
              A parent-company platform focused on ownership, governance, and strategic oversight for operating businesses under the Keystone brand family.
            </p>
          </article>

          <article>
            <ShieldCheck className="mb-4 h-5 w-5 text-zinc-100/78" aria-hidden="true" />
            <p className="text-sm font-medium text-zinc-50">Governance</p>
            <p className="mt-2 text-sm leading-6 text-zinc-200/78">Policy-level oversight, capitalization discipline, and parent-company administrative control.</p>
          </article>

          <article>
            <BookOpen className="mb-4 h-5 w-5 text-zinc-100/78" aria-hidden="true" />
            <p className="text-sm font-medium text-zinc-50">Records</p>
            <p className="mt-2 text-sm leading-6 text-zinc-200/78">Corporate records, approvals, and operating documentation maintained with audit-ready discipline.</p>
          </article>

          <article>
            <p className="text-sm font-medium text-zinc-50">Current Operating Company</p>
            <p className="mt-2 text-sm leading-6 text-zinc-200/78">
              Keystone Pillar, Inc. is the current operating company within the Keystone Core corporate platform.
            </p>
            <a
              href="https://www.keystonepillar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-zinc-100/15 bg-black/15 px-4 py-2 text-sm leading-6 text-zinc-200/86 hover:text-zinc-50"
            >
              Visit Keystone Pillar
            </a>
          </article>
        </div>

        <div className="mt-5 border-t border-zinc-100/10 pt-4">
          <p className="mb-1 text-sm font-medium uppercase tracking-wider text-zinc-50">Legal Notice</p>
          <p className="text-xs leading-6 text-white/72 lg:text-[13px]">{legalNotice}</p>
          <div className="mt-3 grid gap-2 text-xs leading-6 text-zinc-300/64 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="justify-self-start">
              Corporate Contact:{" "}
              <a href="mailto:info@keystone-core.com" className="hover:text-zinc-50">
                info@keystone-core.com
              </a>
            </p>
            <p className="justify-self-start sm:justify-self-end">&copy; 2026 Keystone Core LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center overflow-x-hidden font-sans selection:bg-white/20 selection:text-white">
      <video
        className="fixed inset-0 z-[0] h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="relative z-10 flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-4 md:px-8">
        <HeroSectionThree />
      </div>
    </main>
  );
}

export default App;
