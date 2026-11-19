import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero-adire-market.jpg";
import market from "@/assets/lagos-market-aerial.jpg";
import hands from "@/assets/kano-dye-pit.jpg";
import { rungs, phases, governance, measures, partners, team, advisors, type Person } from "./data";
import { useCountUp } from "./hooks";

const nav = [
  ["model", "The Model"], ["journey", "The Journey"], ["governance", "Governance"],
  ["impact", "Impact"], ["partners", "Partners"], ["people", "People"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-background/90 backdrop-blur border-b" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className={`font-display text-xl leading-none ${scrolled ? "text-foreground" : "text-band-foreground"}`}>
          TAWAF<span className="eyebrow ml-2 align-middle text-brass">Collective</span>
        </a>
        <nav className="hidden gap-7 lg:flex">
          {nav.map(([id, l]) => (
            <a key={id} href={`#${id}`} className={`text-sm transition-colors hover:text-brass ${scrolled ? "text-muted-foreground" : "text-band-muted"}`}>{l}</a>
          ))}
        </nav>
        <a href="#join" className="eyebrow border border-brass px-4 py-2 text-brass transition-colors hover:bg-brass hover:text-accent-foreground">Join the Fund</a>
      </div>
    </header>
  );
}

const acronym = [["T", "ransforming"], ["A", "ltruism into"], ["W", "ork,"], ["A", "ssets, and"], ["F", "utures"]];

export function Hero() {
  return (
    <section id="top" className="grain relative min-h-[100svh] overflow-hidden bg-band text-band-foreground">
      <img src={hero} alt="Stacks of printed fabric at a Nigerian textile market"
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-[15%_50%] opacity-90 md:w-[62%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-band via-band/70 to-transparent" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32">
        <p className="eyebrow text-brass">Islamic Venture Philanthropy · Nigeria &amp; West Africa</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-8xl">
          Giving that does not just relieve hardship.<br />
          <em className="text-brass">It ends it.</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-band-muted">
          The TAWAF Collective turns Zakat, Sadaqah and Islamic finance into enterprises, livelihoods and assets that last for generations. Today's Zakat recipient becomes tomorrow's Zakat payer.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#join" className="bg-brass px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">Become a Funding Partner</a>
          <a href="#model" className="border border-band-muted/40 px-6 py-3 text-sm transition-colors hover:border-brass hover:text-brass">See how capital moves ↓</a>
        </div>
        <div className="group mt-16 flex flex-wrap items-baseline gap-x-3 border-t border-band-muted/20 pt-6">
          {acronym.map(([l, r], i) => (
            <span key={i} className="font-display text-2xl md:text-3xl">
              <span className="text-brass">{l}</span>
              <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap align-bottom text-band-muted transition-all duration-700 group-hover:max-w-[12rem]">{r}</span>
            </span>
          ))}
          <span className="eyebrow ml-auto text-band-muted">hover to unfold · seven circuits</span>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const items = [
    ["Capital that excludes", "Many Muslim entrepreneurs in Nigeria run informal businesses and stay small because conventional credit is interest-bearing and often out of reach."],
    ["Charity that stops short", "Zakat and Sadaqah usually meet urgent needs well, but they rarely build the income systems that prevent the next crisis."],
    ["An architecture already in place", "Zakat, Qard Hassan and partnership finance together form a complete system for economic justice. TAWAF puts all of it to work, in sequence."],
  ];
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-12">
      <div className="md:col-span-5">
        <p className="eyebrow text-brass">Why TAWAF exists</p>
        <h2 className="reveal mt-5 font-display text-4xl leading-tight md:text-5xl">What if Islamic giving worked twice: once to lift a family out of crisis, and again to keep them out for good?</h2>
        <img src={hands} alt="Workers at the Kofar Mata dye pits in Kano" loading="lazy" className="reveal mt-10 aspect-[4/5] w-full max-w-sm object-cover" />
      </div>
      <ol className="space-y-0 md:col-span-6 md:col-start-7 md:pt-24">
        {items.map(([t, d], i) => (
          <li key={t} className="reveal group border-t py-8 last:border-b">
            <div className="flex gap-6">
              <span className="font-mono text-sm text-brass">0{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl transition-colors group-hover:text-primary">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Ladder() {
  const [a, setA] = useState(0);
  const r = rungs[a]!;
  return (
    <section id="model" className="bg-card py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brass">The Model</p>
        <h2 className="reveal mt-5 max-w-3xl font-display text-4xl md:text-6xl">A ladder of capital, matched to where each founder stands</h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">We never apply one kind of capital to every business. Select a rung to see who it serves.</p>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="flex items-end gap-2 lg:col-span-5" role="tablist">
            {rungs.map((x, i) => (
              <button key={x.name} role="tab" aria-selected={a === i} onClick={() => setA(i)}
                style={{ height: `${10 + i * 6}rem` }}
                className={`group relative flex flex-1 flex-col justify-between border p-3 text-left transition-all duration-500 ${a === i ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-brass"}`}>
                <span className="font-mono text-xs opacity-70">{i + 1}</span>
                <span className="font-display text-sm leading-tight md:text-base">{x.name}</span>
              </button>
            ))}
          </div>
          <div key={a} className="animate-in fade-in slide-in-from-bottom-3 border-l-2 border-brass pl-8 duration-500 lg:col-span-7">
            <p className="eyebrow text-muted-foreground">{r.tag} · {r.kind}</p>
            <h3 className="mt-3 font-display text-4xl">{r.name}</h3>
            <dl className="mt-8 grid gap-6 md:grid-cols-2">
              <div><dt className="eyebrow text-brass">Who it serves</dt><dd className="mt-2">{r.who}</dd></div>
              <div><dt className="eyebrow text-brass">How it works</dt><dd className="mt-2">{r.how}</dd></div>
              <div className="md:col-span-2"><dt className="eyebrow text-brass">Success looks like</dt><dd className="mt-2 font-display text-xl">{r.success}</dd></div>
            </dl>
            <button onClick={() => setA((a + 1) % rungs.length)} className="mt-8 text-sm text-primary underline-offset-4 hover:underline">{r.next} →</button>
          </div>
        </div>
        <p className="mt-16 max-w-3xl border-t pt-8 font-display text-xl text-muted-foreground">
          Charity becomes a loan, a loan becomes a partnership, and a partnership becomes a market-ready enterprise. Every founder shares one intake, one curriculum and one mentorship network.
        </p>
      </div>
    </section>
  );
}

export function Journey() {
  const [a, setA] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setA((x) => (x + 1) % 7), 4200);
    return () => clearInterval(t);
  }, [auto]);
  const R = 42;
  return (
    <section id="journey" className="grain overflow-hidden bg-band py-28 text-band-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <circle cx="50" cy="50" r={R} fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth=".3" />
            <circle cx="50" cy="50" r={R} fill="none" stroke="var(--brass)" strokeWidth=".6"
              strokeDasharray={`${(2 * Math.PI * R * (a + 1)) / 7} 999`} transform="rotate(-90 50 50)"
              style={{ transition: "stroke-dasharray .8s ease" }} />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeOpacity=".08" strokeDasharray=".5 1.5" className="orbit-slow origin-center" />
          </svg>
          <div className="absolute left-1/2 top-1/2 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-foreground">
            <span className="font-display text-5xl">{a + 1}</span>
          </div>
          {phases.map((p, i) => {
            const ang = (i / 7) * 2 * Math.PI - Math.PI / 2;
            return (
              <button key={p.t} onClick={() => { setA(i); setAuto(false); }} aria-label={p.t}
                style={{ left: `${50 + R * Math.cos(ang)}%`, top: `${50 + R * Math.sin(ang)}%` }}
                className={`absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border font-mono text-sm transition-all duration-500 ${i === a ? "scale-125 border-brass bg-brass text-accent-foreground" : i < a ? "border-brass bg-band text-brass" : "border-band-muted/40 bg-band text-band-muted hover:border-brass"}`}>
                {i + 1}
              </button>
            );
          })}
        </div>
        <div>
          <p className="eyebrow text-brass">The Journey</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">Seven phases, one program</h2>
          <p className="mt-6 max-w-md text-band-muted">Tawaf is completed in seven circuits. Our program follows seven phases, from first application to a founder who strengthens the ecosystem for those who come after.</p>
          <div key={a} className="mt-12 min-h-[12rem] animate-in fade-in slide-in-from-right-4 duration-500">
            <p className="eyebrow text-band-muted">Circuit {a + 1} of 7 {phases[a]!.note && <span className="ml-3 text-brass">· {phases[a]!.note}</span>}</p>
            <h3 className="mt-3 font-display text-3xl">{phases[a]!.t}</h3>
            <p className="mt-4 max-w-md text-band-muted">{phases[a]!.d}</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => { setA((a + 6) % 7); setAuto(false); }} className="border border-band-muted/40 px-4 py-2 hover:border-brass">←</button>
            <button onClick={() => { setA((a + 1) % 7); setAuto(false); }} className="border border-band-muted/40 px-4 py-2 hover:border-brass">→</button>
            <button onClick={() => setAuto(!auto)} className="eyebrow ml-2 text-band-muted hover:text-brass">{auto ? "Pause" : "Play"} circuit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Governance() {
  const [open, setOpen] = useState(0);
  return (
    <section id="governance" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-brass">Shariah Governance &amp; Fund Integrity</p>
          <h2 className="reveal mt-5 font-display text-4xl md:text-5xl">Rigor that a scholar, an auditor and an investor can all verify</h2>
          <p className="mt-6 text-muted-foreground">Faith-aligned capital earns trust when its rules are clear and enforced. Every instrument we use is reviewed and approved before a single naira moves.</p>
          <div className="mt-10 grid grid-cols-3 gap-2 text-center">
            {["Zakat fund", "Qard Hassan revolving", "Partnership capital"].map((p) => (
              <div key={p} className="border border-dashed border-primary bg-teal-soft p-4">
                <div className="mx-auto h-8 w-8 rounded-full border-2 border-primary" />
                <p className="mt-3 text-xs">{p}</p>
              </div>
            ))}
          </div>
          <p className="eyebrow mt-3 text-muted-foreground">Three pools · never mixed</p>
        </div>
        <ul className="lg:col-span-6 lg:col-start-7">
          {governance.map((g, i) => (
            <li key={g.t} className="border-t last:border-b">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between py-6 text-left">
                <span className="font-display text-2xl">{g.t}</span>
                <span className={`font-mono text-brass transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden text-muted-foreground">{g.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stat({ prefix = "", n, suffix = "", label }: { prefix?: string; n: number; suffix?: string; label: string }) {
  const { ref, v } = useCountUp(n);
  return (
    <div className="border-t border-band-muted/30 pt-6">
      <p className="font-display text-5xl md:text-7xl"><span ref={ref}>{prefix}{v}{suffix}</span></p>
      <p className="mt-3 text-sm text-band-muted">{label}</p>
    </div>
  );
}

export function Impact() {
  const keys = Object.keys(measures) as (keyof typeof measures)[];
  const [k, setK] = useState(keys[0]!);
  return (
    <section id="impact" className="relative bg-band text-band-foreground">
      <img src={market} alt="Aerial view of a busy tomato market in Lagos" loading="lazy" className="h-[50vh] w-full object-cover opacity-70" />
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow text-brass">Impact &amp; Ambition</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl md:text-6xl">We are building proof, and we will measure it</h2>
        <p className="mt-6 max-w-2xl text-band-muted">Proof that faith-aligned capital can be rigorous and measurable. Proof that interest-free finance outlasts charity alone. Proof that a model built in West Africa can serve the wider Muslim world.</p>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat prefix="₦" n={150} suffix="M" label="Pilot co-capital pool" />
          <Stat prefix="₦" n={5} suffix="B" label="Five-year capital target" />
          <Stat n={70} suffix="%+" label="Target recovery rate on recoverable capital" />
          <Stat n={50} suffix="%" label="Target share of women-led ventures" />
        </div>
        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          <div className="flex gap-2 lg:col-span-4 lg:flex-col">
            {keys.map((x) => (
              <button key={x} onClick={() => setK(x)} className={`eyebrow border px-4 py-3 text-left transition-colors ${k === x ? "border-brass bg-brass text-accent-foreground" : "border-band-muted/30 text-band-muted hover:border-brass"}`}>{x} measures</button>
            ))}
          </div>
          <ul key={k} className="animate-in fade-in grid gap-4 duration-500 md:grid-cols-3 lg:col-span-8">
            {measures[k].map((m) => <li key={m} className="border border-band-muted/20 p-6 font-display text-xl">{m}</li>)}
          </ul>
        </div>
        <p className="mt-10 text-sm text-band-muted">Across every path we track revenue growth, jobs created, businesses formalized, women empowered and capital mobilized at each rung.</p>
      </div>
    </section>
  );
}

const quiz = [
  { q: "Is your business earning steady revenue today?", o: ["Not yet, it's survival stage", "Yes, consistently", "Yes, and growing fast"] },
  { q: "Could you repay capital from cash flow?", o: ["Not right now", "Yes, over time", "Yes, and share profit"] },
  { q: "How ready is your business to scale?", o: ["Need to formalize first", "Records in order", "Ready for partners"] },
];

export function PathFinder() {
  const [ans, setAns] = useState<number[]>([]);
  const done = ans.length === quiz.length;
  const score = done ? Math.round(ans.reduce((s, x) => s + x, 0) / quiz.length) : 0;
  const result = rungs[score]!;
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <p className="eyebrow text-brass">For entrepreneurs</p>
      <h2 className="mt-5 font-display text-4xl md:text-5xl">Which rung fits you today?</h2>
      <p className="mt-4 text-muted-foreground">An indicative three-question check. Our intake makes the real assessment.</p>
      <div className="mt-12 border bg-card p-8 md:p-12">
        {!done ? (
          <div key={ans.length} className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex gap-2">{quiz.map((_, i) => <span key={i} className={`h-1 flex-1 ${i <= ans.length ? "bg-brass" : "bg-border"}`} />)}</div>
            <p className="eyebrow mt-8 text-muted-foreground">Question {ans.length + 1} of 3</p>
            <h3 className="mt-3 font-display text-3xl">{quiz[ans.length]!.q}</h3>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {quiz[ans.length]!.o.map((o, i) => (
                <button key={o} onClick={() => setAns([...ans, i])} className="border bg-background p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary">{o}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <p className="eyebrow text-brass">Your likely starting point</p>
            <h3 className="mt-3 font-display text-4xl">{result.name}</h3>
            <p className="mt-2 text-muted-foreground">{result.tag} · {result.kind}</p>
            <p className="mt-6 max-w-2xl">{result.how}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/join"
                search={{ track: "entrepreneur", path: (["a", "b", "c"] as const)[score] }}
                className="bg-primary px-6 py-3 text-sm text-primary-foreground"
              >
                Apply to a cohort
              </Link>
              <button onClick={() => setAns([])} className="border px-6 py-3 text-sm hover:border-brass">Start over</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section id="partners" className="bg-card py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brass">Our Partners</p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl">Funders who build together</h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">Each TAWAF funding partner commits to a shared fund, takes a seat on the Funding Board, reviews impact quarterly and shapes the fund's direction.</p>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {partners.map((p) => (
            <article key={p.name} className="reveal group bg-card p-8 transition-colors hover:bg-background">
              <p className="eyebrow text-brass">{p.role}</p>
              <h3 className="mt-6 font-display text-3xl transition-transform group-hover:translate-x-1">{p.name}</h3>
              <p className="mt-4 text-muted-foreground">{p.d}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-6 border border-dashed border-brass p-8">
          <div>
            <h3 className="font-display text-2xl">Funding Board seats are open.</h3>
            <p className="mt-2 text-muted-foreground">Zakat institutions, waqf endowments, Islamic banks, CSR programs and mission-driven investors are invited to join the pool.</p>
          </div>
          <Link to="/join" search={{ track: "institution" }} className="bg-brass px-6 py-3 text-sm text-accent-foreground">Discuss a seat</Link>
        </div>
      </div>
    </section>
  );
}

function initials(n: string) {
  return n.replace(/^(Sheikh|Dr\.|Imam|Ustadha)\s/, "").split(" ").map((x) => x[0]).join("");
}

function Portrait({ p, big }: { p: Person; big?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-band ${big ? "aspect-[3/4]" : "aspect-square"}`}>
      {p.photo ? (
        <img src={p.photo} alt={p.name} loading="lazy" className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display text-6xl text-brass transition-transform duration-700 group-hover:scale-110">{initials(p.name)}</span>
        </div>
      )}
    </div>
  );
}

export function People() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="people" className="mx-auto max-w-7xl px-6 py-28">
      <p className="eyebrow text-brass">Leadership</p>
      <h2 className="mt-5 font-display text-4xl md:text-6xl">Managed by Ventures Work</h2>
      <p className="mt-6 max-w-2xl text-muted-foreground">Ventures Work designs and delivers the program, administers capital, chairs the Funding Board and reports to every partner.</p>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((p, i) => (
          <button key={p.name} onClick={() => setOpen(open === i ? null : i)} className="group text-left">
            <Portrait p={p} big />
            <h3 className="mt-4 font-display text-2xl">{p.name}</h3>
            <p className="eyebrow mt-1 text-muted-foreground">{p.role}</p>
            <div className={`grid transition-all duration-500 ${open === i ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden text-sm text-muted-foreground">{p.bio}</p>
            </div>
            <span className="mt-2 inline-block text-sm text-primary">{open === i ? "Close" : "Read bio"} →</span>
          </button>
        ))}
      </div>

      <div className="mt-28 border-t pt-16">
        <p className="eyebrow text-brass">Advisory Board</p>
        <h2 className="mt-5 font-display text-4xl">Scholarly guidance on every instrument</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((p) => (
            <div key={p.name} className="group reveal">
              <Portrait p={p} />
              <h3 className="mt-4 font-display text-xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ways: { who: string; track: "institution" | "donor" | "entrepreneur"; t: string; d: string; cta: string }[] = [
  { who: "Institutions & foundations", track: "institution", t: "Co-fund the pool", d: "Commit capital to the shared fund, take a Funding Board seat and co-own the outcomes, with quarterly reporting and co-branded impact results.", cta: "Discuss a seat" },
  { who: "Individual donors", track: "donor", t: "Give your Zakat or Sadaqah", d: "Your Zakat goes directly to eligible founders in full ownership. Your Sadaqah can fund the revolving pool, where each gift is lent, repaid and lent again.", cta: "Talk about a gift" },
  { who: "Entrepreneurs", track: "entrepreneur", t: "Apply to a cohort", d: "Muslim-led businesses at any stage can apply. Our intake finds the path that fits where you are today and shows you the next step.", cta: "Ask about the next cohort" },
];

function Copy({ label, value }: { label: string; value: string }) {
  const [c, setC] = useState(false);
  return (
    <div className="flex items-center justify-between border-b border-band-muted/20 py-4">
      <div><p className="eyebrow text-band-muted">{label}</p><p className="mt-1 font-display text-xl">{value}</p></div>
      <button onClick={() => { navigator.clipboard.writeText(value); setC(true); setTimeout(() => setC(false), 1500); }} className="eyebrow text-brass">{c ? "Copied" : "Copy"}</button>
    </div>
  );
}

export function SiteFooter({ embedded = false }: { embedded?: boolean }) {
  const year = new Date().getFullYear();
  return (
    <div className={embedded ? "mt-28 border-t border-band-muted/20 pt-16" : "grain bg-band py-20 text-band-foreground"}>
      <div className={embedded ? "" : "mx-auto max-w-7xl px-6"}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Let us build this together</h2>
            <p className="mt-6 max-w-md font-display text-xl italic text-band-muted">Every gift is an act of worship, an investment in people, and a seed for futures not yet imagined.</p>
          </div>
          <div>
            <Copy label="Email" value="enquiries@tawafcollective.com" />
            <Copy label="Phone" value="+1 574 386 4517" />
            <div className="border-b border-band-muted/20 py-4"><p className="eyebrow text-band-muted">Web</p><a href="https://tawafcollective.org" target="_blank" rel="noreferrer" className="mt-1 block font-display text-xl hover:text-brass">tawafcollective.org</a></div>
            <div className="py-4"><p className="eyebrow text-band-muted">Offices</p><p className="mt-1 font-display text-xl">Lagos, Nigeria · Indianapolis, Indiana, USA</p></div>
          </div>
        </div>
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-band-muted/20 pt-6 text-xs text-band-muted">
          <span>Copyright {year} | The TAWAF Collective · A Muslim Business Fund program by Ventures Work. All rights reserved.</span>
          <span className="eyebrow">Shariah-governed · Riba-free · Independently reported</span>
        </footer>
      </div>
    </div>
  );
}

export function Join() {
  const [w, setW] = useState(0);
  return (
    <section id="join" className="grain bg-band py-28 text-band-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-brass">Get Involved</p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl">Three ways to join the circuit</h2>
        <div className="mt-12 flex flex-wrap gap-2">
          {ways.map((x, i) => (
            <button key={x.who} onClick={() => setW(i)} className={`eyebrow border px-4 py-3 transition-colors ${w === i ? "border-brass bg-brass text-accent-foreground" : "border-band-muted/30 text-band-muted hover:border-brass"}`}>{x.who}</button>
          ))}
        </div>
        <div key={w} className="mt-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="font-display text-4xl">{ways[w]!.t}</h3>
          <p className="mt-4 max-w-2xl text-band-muted">{ways[w]!.d}</p>
          <Link to="/join" search={{ track: ways[w]!.track }} className="mt-8 inline-block border border-brass px-6 py-3 text-sm text-brass hover:bg-brass hover:text-accent-foreground">{ways[w]!.cta} →</Link>
        </div>

        <SiteFooter embedded />
      </div>
    </section>
  );
}
