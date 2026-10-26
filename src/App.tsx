import { useState } from "react";

const softwareStrengths = [
  {
    title: "Legacy software redesign",
    body: "Ageing systems that still hold critical work, redesigned into clearer software — without throwing away what already works.",
    icon: "legacy" as const,
    featured: true,
  },
  {
    title: "Website development",
    body: "Reliable sites that present the business well and stay easy to look after.",
    icon: "website" as const,
  },
  {
    title: "Enterprise applications",
    body: "Business systems built for real teams — scale, clarity, and day-to-day use.",
    icon: "enterprise" as const,
  },
  {
    title: "Product design consultation",
    body: "Advice on what belongs on the screen, what can go, and how the product should feel to use.",
    icon: "consult" as const,
  },
];

const softwareFeatured = softwareStrengths.find((item) => item.featured)!;
const softwareSupporting = softwareStrengths.filter((item) => !item.featured);

function StrengthIcon({
  name,
}: {
  name: (typeof softwareStrengths)[number]["icon"];
}) {
  return (
    <svg
      className="strength-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      {name === "legacy" ? (
        <>
          <rect x="5" y="7" width="14" height="18" rx="1.5" />
          <path d="M19 12h6l2 4v9H19" />
          <path d="M9 12h6M9 16h5M9 20h4" />
        </>
      ) : null}
      {name === "website" ? (
        <>
          <rect x="4" y="7" width="24" height="18" rx="2" />
          <path d="M4 12h24" />
          <circle cx="8" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="11" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
        </>
      ) : null}
      {name === "enterprise" ? (
        <>
          <path d="M7 26V10l9-5 9 5v16" />
          <path d="M12 26v-7h8v7" />
          <path d="M12 14h2M18 14h2M12 18h2M18 18h2" />
        </>
      ) : null}
      {name === "consult" ? (
        <>
          <path d="M8 8h16v12H14l-4 4v-4H8z" />
          <path d="M12 13h8M12 17h5" />
        </>
      ) : null}
    </svg>
  );
}

const practices = [
  {
    title: "Software",
    label: "Build & redesign",
    icon: "software" as const,
    body: "Websites, enterprise applications, legacy redesign, and product consultation — tools close to the real job.",
    featured: true,
  },
  {
    title: "Branding & logos",
    label: "Identity",
    icon: "branding" as const,
    body: "Logos, brand marks, and the basics that make a business easy to recognise.",
  },
  {
    title: "Marketing",
    label: "Message",
    icon: "marketing" as const,
    body: "Assets and campaigns that explain what you offer, without burying the point.",
  },
];

const careItems = [
  {
    title: "Speed",
    body: "Watch load times and flag what slows people down.",
  },
  {
    title: "Updates & security",
    body: "Steady patching so small gaps do not become bigger problems.",
  },
  {
    title: "Backups",
    body: "A restore plan for content and structure if something fails.",
  },
  {
    title: "Observability",
    body: "Notice when the site goes offline or slows, before customers wait too long.",
  },
  {
    title: "Visibility",
    body: "Clear titles, structure, and wording so the right people can find you.",
  },
  {
    title: "Progress note",
    body: "A short summary of what changed and what to do next.",
  },
];

const storyHighlights = [
  {
    label: "Engineering",
    title: "Senior software engineer",
    body: "10+ years in system design and architecture",
  },
  {
    label: "Multidisciplinary",
    title: "PhD & cyber security",
    body: "Environmental Science PhD (Australia) · Certificate IV in Cyber Security (TAFE)",
  },
  {
    label: "Stack",
    title: "Microsoft",
    body: "Practical foundations for business systems and websites",
  },
  {
    label: "Core strength",
    title: "Application redesign",
    body: "Clearer systems without discarding what still works",
    featured: true,
  },
];

const industries = [
  { name: "Tradies & builders", icon: "builders" as const },
  { name: "Automotive", icon: "auto" as const },
  { name: "Electricians & plumbers", icon: "trade" as const },
  { name: "Cafés", icon: "cafe" as const },
  { name: "Accounting & bookkeeping", icon: "books" as const },
];

function IndustryIcon({ name }: { name: (typeof industries)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-[1.05rem]">
      {name === "builders" ? (
        <>
          <path
            d="M4 20V10.5L12 5l8 5.5V20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 20v-5h5v5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </>
      ) : null}
      {name === "auto" ? (
        <>
          <path
            d="M4 14h16l-1.4-4.2A2 2 0 0 0 16.7 8.5H7.3a2 2 0 0 0-1.9 1.3L4 14Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M4 14v3.5h2.2M20 14v3.5h-2.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle
            cx="7.5"
            cy="17.5"
            r="1.6"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="16.5"
            cy="17.5"
            r="1.6"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </>
      ) : null}
      {name === "trade" ? (
        <path
          d="M13 3 7.5 13h4L11 21l6.5-11h-4L13 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "cafe" ? (
        <>
          <path
            d="M7.5 10.5h9v6.2a2.3 2.3 0 0 1-2.3 2.3H9.8a2.3 2.3 0 0 1-2.3-2.3v-6.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M9.2 10.5V8.4a2.8 2.8 0 0 1 5.6 0v2.1"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M7.5 13.5H5.8a1.5 1.5 0 0 1 0-3h1.7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {name === "books" ? (
        <>
          <rect
            x="5"
            y="3.5"
            width="14"
            height="17"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8.5 8h7M8.5 12h7M8.5 16h4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      ) : null}
    </svg>
  );
}

function OfferIcon({
  name,
}: {
  name: (typeof practices)[number]["icon"] | "care";
}) {
  return (
    <svg
      className="offer-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      {name === "software" ? (
        <>
          <rect x="4" y="6" width="24" height="16" rx="2" />
          <path d="M10 26h12" />
          <path d="M12 12h8M12 16h5" />
        </>
      ) : null}
      {name === "branding" ? (
        <>
          <circle cx="13" cy="16" r="7.5" />
          <circle cx="19" cy="16" r="7.5" />
        </>
      ) : null}
      {name === "marketing" ? (
        <>
          <path d="M6 12h6l8-5v18l-8-5H6z" />
          <path d="M24 12.5c1.4 1.2 1.4 5.8 0 7" />
          <path d="M26.5 10c2.4 2.1 2.4 9.9 0 12" />
        </>
      ) : null}
      {name === "care" ? (
        <>
          <path d="M16 6v4M16 22v4M6 16h4M22 16h4" />
          <circle cx="16" cy="16" r="6" />
        </>
      ) : null}
    </svg>
  );
}

const steps = [
  {
    name: "Listen",
    icon: "listen" as const,
    body: "Start with what you need and who you serve — from the real work, not a template.",
  },
  {
    name: "Focus",
    icon: "focus" as const,
    body: "Agree the outcome, the audience, and the edges of the job.",
  },
  {
    name: "Remove",
    icon: "remove" as const,
    body: "Cut extra features, busy layouts, and unclear wording.",
  },
  {
    name: "Shape",
    icon: "shape" as const,
    body: "Arrange screens, words, and flows before anything is locked in.",
  },
  {
    name: "Build",
    icon: "build" as const,
    body: "Make software, brand, or marketing that is plain to use and look after.",
  },
  {
    name: "Remain",
    icon: "remain" as const,
    body: "After go-live, keep details honest so clutter does not creep back.",
  },
];

function StepIcon({ name }: { name: (typeof steps)[number]["icon"] }) {
  return (
    <svg
      className="process-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      {name === "listen" ? (
        <>
          <path d="M8 14v4c0 4.4 3.6 8 8 8s8-3.6 8-8v-4" />
          <path d="M11 14a5 5 0 0 1 10 0" />
          <path d="M16 22v3" />
        </>
      ) : null}
      {name === "focus" ? (
        <>
          <circle cx="16" cy="16" r="7" />
          <circle cx="16" cy="16" r="2.5" />
          <path d="M16 5v3M16 24v3M5 16h3M24 16h3" />
        </>
      ) : null}
      {name === "remove" ? (
        <>
          <circle cx="16" cy="16" r="10" />
          <path d="M10 16h12" />
        </>
      ) : null}
      {name === "shape" ? (
        <>
          <path d="M7 22l7-16 3 7 8 2-11 7z" />
          <path d="M14 13l3 7" />
        </>
      ) : null}
      {name === "build" ? (
        <>
          <rect x="7" y="14" width="18" height="11" rx="1.5" />
          <path d="M11 14V10a5 5 0 0 1 10 0v4" />
          <path d="M16 18v3" />
        </>
      ) : null}
      {name === "remain" ? (
        <>
          <path d="M8 16a8 8 0 1 1 2.3 5.7" />
          <path d="M8 22v-5h5" />
          <path d="M13 16l3 3 5-6" />
        </>
      ) : null}
    </svg>
  );
}

export default function App() {
  const year = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div
      className="min-h-dvh bg-[radial-gradient(ellipse_50%_36%_at_100%_0%,rgba(8,48,112,0.05),transparent_55%),radial-gradient(ellipse_32%_24%_at_0%_8%,rgba(8,48,112,0.03),transparent_50%),var(--color-white)]"
      id="top"
    >
      <a
        className="absolute left-4 top-[-48px] z-[3] rounded-lg bg-white px-3 py-2 text-ink focus:top-3"
        href="#main"
      >
        Skip to content
      </a>
      <header
        className={`header sticky top-0 z-20 border-b border-line bg-white/88 py-3 backdrop-blur-[18px] backdrop-saturate-150 max-[800px]:py-2.5${menuOpen ? " is-open" : ""}`}
      >
        <div className="shell flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <a
            className="relative z-[2] shrink-0 leading-none"
            href="#top"
            onClick={closeMenu}
          >
            <img
              className="block h-[48px] w-auto max-[800px]:h-[42px]"
              src="/logo.png"
              alt="AyoraOne. Solutions made simple."
            />
          </a>
          <button
            className="nav-toggle relative z-[2] m-0 ml-auto hidden cursor-pointer items-center gap-2 rounded-full border border-line-strong bg-surface-raised px-3.5 py-2.5 font-sans text-[0.82rem] font-medium tracking-[-0.01em] text-ink shadow-[0_1px_0_rgba(255,255,255,0.6)] max-[800px]:inline-flex"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bars" aria-hidden="true" />
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
          <nav
            className={`flex items-center gap-2.5 max-[800px]:basis-full max-[800px]:w-full max-[800px]:flex-col max-[800px]:items-stretch max-[800px]:gap-3.5 max-[800px]:pt-3.5 max-[800px]:pb-1.5 ${menuOpen ? "max-[800px]:flex" : "max-[800px]:hidden"}`}
            id="site-nav"
            aria-label="Page"
          >
            <div className="flex flex-wrap items-center gap-0.5 rounded-full border border-line bg-[rgba(230,236,244,0.95)] p-[0.28rem] max-[800px]:flex-col max-[800px]:items-stretch max-[800px]:gap-0.5 max-[800px]:rounded-[18px] max-[800px]:p-1.5">
              {(
                [
                  ["#work", "What we do"],
                  ["#software", "Software"],
                  ["#story", "Story"],
                  ["#approach", "Approach"],
                  ["#care", "Care"],
                ] as const
              ).map(([href, label]) => (
                <a
                  key={href}
                  className="inline-flex min-h-[2.15rem] items-center rounded-full px-3.5 py-1.5 text-[0.86rem] font-medium tracking-[-0.01em] text-ink-soft no-underline transition duration-200 ease-[var(--ease-brand)] hover:bg-surface-raised hover:text-ink max-[800px]:min-h-[2.6rem] max-[800px]:px-3.5 max-[800px]:py-2.5"
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              className="btn btn-secondary btn-sm shrink-0 max-[800px]:w-full max-[800px]:min-h-[2.75rem]"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="shell animate-[rise_0.85s_var(--ease-brand)_both] border-b border-line py-14 max-[800px]:py-14 md:py-24">
          <div className="grid items-center gap-8 max-[800px]:grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] md:gap-x-14 md:gap-y-10">
            <div>
              <p className="kicker">Salisbury, QLD · SME</p>
              <h1>
                Solutions made
                <span> simple.</span>
              </h1>
              <p className="mt-6 max-w-[34rem] text-[1.12rem] font-medium leading-[1.7] tracking-[-0.01em] text-body">
                Software, branding, and marketing for small and medium
                businesses — with a particular strength in redesigning ageing
                applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-arrow" href="#contact">
                  Contact
                </a>
                <a className="btn btn-secondary" href="#work">
                  What we do
                </a>
              </div>
            </div>
            <aside
              className="rounded-2xl border border-line bg-white px-6 py-6 max-[800px]:order-first"
              aria-label="Software focus"
            >
              <p className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-brown">
                Core strength
              </p>
              <p className="mt-2.5 mb-0 max-w-[16ch] font-serif text-[clamp(1.45rem,2.2vw,1.8rem)] font-medium tracking-[-0.035em] leading-[1.15] text-ink max-[800px]:max-w-none">
                Legacy software redesign
              </p>
              <p className="mt-3.5 mb-0 border-t border-line pt-3.5 text-[0.94rem] leading-[1.6] text-ink-soft">
                Clearer systems for the work people already do — plus websites,
                enterprise apps, and product design advice.
              </p>
              <a className="btn btn-secondary btn-arrow btn-sm mt-5" href="#software">
                Explore software
              </a>
            </aside>
          </div>
        </section>

        <section className="scroll-mt-24" id="work">
          <div className="shell py-24 max-[800px]:py-[4.5rem]">
            <header className="section-intro section-intro-wide">
              <div className="section-heading">
                <p className="eyebrow">What we do</p>
                <div className="section-heading-title">
                  <h2>Three offers. One standard.</h2>
                </div>
              </div>
              <p>
                Keep the brief simple and useful — whether you need a system, a
                brand, marketing, or ongoing site care.
              </p>
            </header>
            <ul className="m-0 grid list-none grid-cols-1 gap-0 border-0 pt-2 max-[1100px]:pt-1.5 min-[1101px]:grid-cols-3 min-[1101px]:border-t min-[1101px]:border-line md:pt-7">
              {practices.map((item, index) => (
                <li
                  key={item.title}
                  className={`relative grid content-start gap-2.5 border-b border-line bg-transparent py-[1.35rem] transition duration-300 ease-[var(--ease-brand)] max-[800px]:hover:translate-y-0 min-[1101px]:border-b-0 min-[1101px]:border-r min-[1101px]:py-7 min-[1101px]:hover:-translate-y-0.5 ${index === 0 ? "min-[1101px]:pl-0 min-[1101px]:pr-6" : ""} ${index === 1 ? "min-[1101px]:px-6" : ""} ${index === 2 ? "min-[1101px]:border-r-0 min-[1101px]:pl-6 min-[1101px]:pr-0" : ""} ${index === practices.length - 1 ? "border-b-0" : ""}`}
                >
                  <div className="mb-0.5 flex items-center gap-3">
                    <span className="icon-wrap" aria-hidden="true">
                      <OfferIcon name={item.icon} />
                    </span>
                    <p className="offer-label">{item.label}</p>
                  </div>
                  <h3
                    className={
                      item.featured
                        ? "m-0 font-serif text-[clamp(1.7rem,2.4vw,2.15rem)] font-medium tracking-[-0.04em] leading-[1.08] max-[800px]:text-[1.75rem]"
                        : "m-0 text-[1.35rem] font-medium tracking-[-0.03em] leading-[1.15]"
                    }
                  >
                    {item.title}
                  </h3>
                  <p className="m-0 max-w-md text-[0.96rem] leading-[1.65] text-ink-soft">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <aside
              className="mt-9 grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-3.5 border-0 border-l-2 border-navy bg-[linear-gradient(90deg,rgba(8,48,112,0.06)_0%,transparent_55%)] py-[1.15rem] pl-4 max-[800px]:mt-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-x-6 md:py-[1.35rem] md:pl-[1.15rem]"
              aria-label="Site care"
            >
              <span className="icon-wrap" aria-hidden="true">
                <OfferIcon name="care" />
              </span>
              <div className="min-w-0">
                <p className="offer-label">After launch</p>
                <h3 className="mt-1 mb-0 font-serif text-[1.4rem] font-medium tracking-[-0.03em]">
                  Site care
                </h3>
                <p className="mt-1.5 mb-0 max-w-3xl text-[0.96rem] leading-[1.65] text-ink-soft">
                  Speed, safety, backups, visibility, and observability — so the
                  site stays useful once it is live.
                </p>
              </div>
              <a
                className="btn btn-secondary btn-arrow btn-sm max-[800px]:col-start-2 max-[800px]:justify-self-start md:mt-0 md:justify-self-end"
                href="#care"
              >
                See care
              </a>
            </aside>
          </div>
        </section>

        <section className="scroll-mt-24 bg-paper" id="software">
          <div className="shell py-24 max-[800px]:py-[4.5rem]">
            <header className="section-intro section-intro-wide">
              <div className="section-heading">
                <p className="eyebrow">Software</p>
                <div className="section-heading-title">
                  <h2>Built for the work. Strong where systems age.</h2>
                </div>
              </div>
              <p>
                Websites and enterprise applications on a Microsoft stack, with
                legacy redesign at the centre.
              </p>
            </header>
            <div className="grid gap-8 max-[800px]:gap-8 md:gap-11">
              <article className="grid grid-cols-1 items-start gap-4 border-b border-line pb-7 max-[800px]:pb-7 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-9 md:gap-y-6 md:pb-[2.35rem]">
                <div className="flex min-w-0 items-center gap-3.5 md:grid md:min-w-[7rem] md:justify-items-start md:gap-3.5">
                  <span
                    className="grid size-[3.35rem] place-items-center rounded-full border border-[rgba(24,24,32,0.18)] text-[#181820] [&_.strength-icon]:size-[1.45rem]"
                    style={{
                      background:
                        "radial-gradient(circle at 32% 28%, rgba(8,48,112,0.06), rgba(255,255,255,0.55) 70%)",
                    }}
                    aria-hidden="true"
                  >
                    <StrengthIcon name={softwareFeatured.icon} />
                  </span>
                  <p className="strength-label">Our strength</p>
                </div>
                <div className="grid gap-3.5 pt-0.5">
                  <h3 className="m-0 max-w-none font-serif text-[clamp(1.45rem,4vw,1.85rem)] font-normal tracking-[-0.04em] leading-[1.12] text-balance md:max-w-[18ch]">
                    {softwareFeatured.title}
                  </h3>
                  <p className="m-0 max-w-3xl text-[1.08rem] leading-[1.7] text-ink-soft">
                    {softwareFeatured.body}
                  </p>
                </div>
              </article>
              <ul className="m-0 grid list-none grid-cols-1 gap-[1.35rem] pt-0 min-[1101px]:grid-cols-3 min-[1101px]:gap-x-8 min-[1101px]:gap-y-7">
                {softwareSupporting.map((item, index) => (
                  <li
                    key={item.title}
                    className={`grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-4 gap-y-3.5 border-b border-line pb-5 transition duration-300 ease-[var(--ease-brand)] max-[800px]:hover:translate-y-0 min-[1101px]:border-0 min-[1101px]:pb-0 min-[1101px]:hover:-translate-y-0.5 ${index === softwareSupporting.length - 1 ? "border-b-0 pb-0" : ""}`}
                  >
                    <span
                      className="grid size-[2.55rem] place-items-center rounded-full border border-[rgba(24,24,32,0.18)] bg-white/55 text-[#181820]"
                      aria-hidden="true"
                    >
                      <StrengthIcon name={item.icon} />
                    </span>
                    <div>
                      <h3 className="mb-1.5 mt-0 font-serif text-[1.28rem] font-medium tracking-[-0.03em] leading-[1.15]">
                        {item.title}
                      </h3>
                      <p className="m-0 text-[0.96rem] leading-[1.65] text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24" id="story">
          <div className="shell py-24 max-[800px]:py-[4.5rem]">
            <header className="section-intro section-intro-wide">
              <div className="section-heading">
                <p className="eyebrow">Our story</p>
                <div className="section-heading-title">
                  <h2>Built from real systems work.</h2>
                </div>
              </div>
              <p>
                A small Salisbury team — engineering depth and multidisciplinary
                skill — for small and medium businesses.
              </p>
            </header>
            <div className="grid grid-cols-1 items-start gap-7 max-[800px]:gap-7 md:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] md:gap-x-[3.25rem] md:gap-y-9">
              <aside
                className="m-0 w-full max-w-none justify-self-start border-l-2 border-navy bg-transparent p-0 text-left md:max-w-[22rem]"
                aria-label="Team highlights"
              >
                {storyHighlights.map((item, index) => (
                  <div
                    key={item.label}
                    className={`border-b border-line py-[1.05rem] pl-[1.15rem] text-left ${index === 0 ? "pt-0.5" : ""} ${index === storyHighlights.length - 1 ? "border-b-0 pb-0.5" : "pb-[1.15rem]"} ${item.featured ? "mt-0.5 border-b-0 bg-[linear-gradient(90deg,rgba(8,48,112,0.06)_0%,transparent_85%)] pt-[1.15rem]" : ""}`}
                  >
                    <p className="mb-1.5 mt-0 text-left text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-brown">
                      {item.label}
                    </p>
                    <p className="m-0 text-left font-serif text-[1.22rem] font-medium tracking-[-0.035em] leading-[1.18] text-ink text-balance">
                      {item.title}
                    </p>
                    <p className="mt-1.5 mb-0 max-w-none text-left text-[0.9rem] leading-[1.55] text-ink-soft md:max-w-[18rem]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </aside>
              <div className="grid gap-[1.15rem]">
                <p className="m-0 text-[1.05rem] leading-[1.7] text-ink-soft">
                  AyoraOne grew from senior engineering practice: reliable
                  systems, then branding and marketing that stay easy to read.
                  A multidisciplinary teammate — with an Australian PhD in
                  Environmental Science and a Certificate IV in Cyber Security
                  from TAFE — strengthens how we think about risk and careful
                  detail.
                </p>
                <p className="m-0 text-[1.05rem] leading-[1.7] text-ink-soft">
                  We support the businesses that keep local work moving. Less
                  time fighting software; more time on the work that pays.
                </p>
                <div className="mt-1.5 grid gap-3.5 border-t border-line pt-5">
                  <p className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-brown">
                    Who we support
                  </p>
                  <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                    {industries.map((item) => (
                      <li
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-[0.65rem] border border-[rgba(8,48,112,0.2)] bg-[linear-gradient(165deg,rgba(238,241,246,0.95)_0%,rgba(245,247,250,0.9)_55%,rgba(255,255,255,0.98)_100%)] py-2.5 pr-3.5 pl-2.5 text-[0.9rem] font-medium tracking-[-0.015em] leading-[1.2] text-ink transition duration-200 ease-[var(--ease-brand)] hover:-translate-y-px hover:border-[rgba(8,48,112,0.4)] hover:bg-[linear-gradient(165deg,rgba(232,237,244,0.98)_0%,#fff_100%)]"
                      >
                        <span
                          className="grid size-[1.85rem] shrink-0 place-items-center rounded-[0.45rem] bg-[rgba(8,48,112,0.06)] text-[#181820]"
                          aria-hidden="true"
                        >
                          <IndustryIcon name={item.icon} />
                        </span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-paper" id="approach">
          <div className="shell py-24 max-[800px]:py-[4.5rem]">
            <header className="section-intro section-intro-wide">
              <div className="section-heading">
                <p className="eyebrow">Approach</p>
                <div className="section-heading-title">
                  <h2>How we work</h2>
                </div>
              </div>
              <p>
                Same order every time: understand the need, remove what does not
                help, build what is left, and stay with the details after launch.
              </p>
            </header>
            <ol className="process">
              {steps.map((step, index) => (
                <li key={step.name}>
                  <div className="process-node">
                    <span className="process-icon-wrap">
                      <StepIcon name={step.icon} />
                    </span>
                    <span className="process-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="process-copy">
                    <h3>{step.name}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="scroll-mt-24" id="care">
          <div className="shell py-24 max-[800px]:py-[4.5rem]">
            <header className="section-intro section-intro-wide">
              <div className="section-heading">
                <p className="eyebrow">Site care</p>
                <div className="section-heading-title">
                  <h2>Still useful once it is live.</h2>
                </div>
              </div>
              <p>
                Practical looking-after — including{" "}
                <span className="border-b-[1.5px] border-[rgba(8,48,112,0.45)] font-semibold tracking-[-0.01em] text-brown">
                  observability
                </span>{" "}
                — without burying you in noise.
              </p>
            </header>
            <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 min-[801px]:max-[1100px]:grid-cols-2 min-[1101px]:grid-cols-3 md:gap-x-8 md:gap-y-6">
              {careItems.map((item) => {
                const featured = item.title === "Observability";
                return (
                  <li
                    key={item.title}
                    className={`border-t pt-5 ${featured ? "border-[rgba(8,48,112,0.45)]" : "border-line"}`}
                  >
                    <h3
                      className={
                        featured
                          ? "m-0 font-serif text-[1.25rem] font-medium tracking-[-0.03em] text-brown"
                          : "m-0 text-[1.1rem] font-medium tracking-[-0.02em]"
                      }
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2.5 mb-0 text-[0.96rem] leading-[1.6] text-ink-soft">
                      {item.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="scroll-mt-24 bg-paper" id="contact">
          <div className="shell grid grid-cols-1 items-end gap-10 py-24 max-[800px]:py-[4.5rem] md:grid-cols-[minmax(16rem,1fr)_minmax(18rem,0.95fr)] md:gap-x-16 md:gap-y-10">
            <div className="grid gap-[1.15rem]">
              <div className="section-heading">
                <p className="eyebrow">Contact</p>
                <div className="section-heading-title">
                  <h2 className="max-w-[12ch] max-[800px]:max-w-none">
                    Based in Salisbury, QLD.
                  </h2>
                </div>
              </div>
              <p className="m-0 max-w-[30rem] text-ink-soft">
                Tell us what you need. We will reply with a clear next step.
              </p>
              <a
                className="btn btn-primary btn-arrow justify-self-start"
                href="mailto:enquire@ayoraone.com.au"
              >
                Email AyoraOne
              </a>
            </div>
            <dl className="m-0 border-t border-line p-0">
              {(
                [
                  ["Business", "AyoraOne"],
                  ["Email", "enquire@ayoraone.com.au", "mailto:enquire@ayoraone.com.au"],
                  ["Location", "Salisbury, QLD 4107"],
                  ["ABN", "36 404 700 508"],
                ] as const
              ).map(([label, value, href]) => (
                <div
                  key={label}
                  className="grid grid-cols-1 items-baseline gap-1 border-b border-line py-[1.1rem] max-[800px]:gap-1 md:grid-cols-[7rem_1fr] md:gap-x-5"
                >
                  <dt className="m-0 text-[0.78rem] font-medium uppercase tracking-[0.06em] text-ink-soft">
                    {label}
                  </dt>
                  <dd className="m-0 text-[1.08rem] font-medium text-ink">
                    {href ? (
                      <a
                        className="border-b border-transparent text-inherit no-underline transition-[color,border-color] duration-200 ease-[var(--ease-brand)] hover:border-[rgba(8,48,112,0.45)] hover:text-brown"
                        href={href}
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <footer className="border-t border-line bg-paper text-ink">
        <div className="shell grid grid-cols-1 gap-8 py-9 max-[800px]:pt-9 md:grid-cols-[1.4fr_1fr_1fr] md:gap-x-12 md:gap-y-8 md:pb-7 md:pt-12">
          <div>
            <p className="m-0 font-serif text-[1.55rem] font-medium tracking-[-0.03em]">
              AyoraOne
            </p>
            <p className="mt-2 mb-0 text-ink-soft">
              Software, branding, marketing, and care.
            </p>
          </div>
          <nav
            className="flex w-auto flex-col items-start gap-2 pt-1.5"
            aria-label="Footer"
          >
            {(
              [
                ["#work", "What we do"],
                ["#software", "Software"],
                ["#story", "Story"],
                ["#approach", "Approach"],
                ["#care", "Care"],
                ["#contact", "Contact"],
              ] as const
            ).map(([href, label]) => (
              <a key={href} className="footer-link" href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="pt-1.5 text-ink-soft">
            <p className="mt-1 mb-0 first:mt-0">
              <a
                className="border-b border-transparent text-inherit no-underline transition-[color,border-color] duration-200 ease-[var(--ease-brand)] hover:border-[rgba(8,48,112,0.45)] hover:text-brown"
                href="mailto:enquire@ayoraone.com.au"
              >
                enquire@ayoraone.com.au
              </a>
            </p>
            <p className="mt-1 mb-0">Salisbury, QLD 4107</p>
            <p className="mt-1 mb-0">ABN 36 404 700 508</p>
          </div>
        </div>
        <div className="shell flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line py-[18px] pb-6 text-[0.88rem] text-ink-soft">
          <p className="m-0">© {year} AyoraOne</p>
          <p className="m-0">Solutions made simple</p>
        </div>
      </footer>
    </div>
  );
}
