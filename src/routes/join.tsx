import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { rungs } from "@/components/tawaf/data";
import { SiteFooter } from "@/components/tawaf/Sections";

type Track = "institution" | "donor" | "entrepreneur";
type PathKey = "a" | "b" | "c";

const VALID_TRACKS: Track[] = ["institution", "donor", "entrepreneur"];
const VALID_PATHS: PathKey[] = ["a", "b", "c"];

export const Route = createFileRoute("/join")({
  validateSearch: (search: Record<string, unknown>): { track?: Track; path?: PathKey } => {
    const track = VALID_TRACKS.includes(search.track as Track) ? (search.track as Track) : undefined;
    const path = VALID_PATHS.includes(search.path as PathKey) ? (search.path as PathKey) : undefined;
    return { track, path };
  },
  head: () => ({
    meta: [
      { title: "Join the Cycle · The TAWAF Collective" },
      {
        name: "description",
        content: "Connect with The TAWAF Collective as an institutional partner, Zakat or Sadaqah donor, or Muslim entrepreneur.",
      },
    ],
  }),
  component: JoinPage,
});

const TRACK_META: Record<
  Track,
  {
    label: string;
    title: string;
    subtitle: string;
    orgLabel: string;
    orgPlaceholder: string;
    optionLabel: string;
    options: string[];
    steps: string[];
    whatsappIntro: string;
  }
> = {
  institution: {
    label: "Institutions & foundations",
    title: "Co-fund the pool",
    subtitle:
      "Commit capital to the shared fund, take a Funding Board seat, and receive quarterly impact reporting through our Zakat Impact Tracker.",
    orgLabel: "Organization / Institution",
    orgPlaceholder: "e.g. Foundation, Waqf, Islamic Bank, or Family Office",
    optionLabel: "Area of interest",
    options: [
      "Funding Board seat & co-funding",
      "Zakat pool partnership",
      "Qard Hassan revolving pool",
      "Mudarabah / Musharakah capital",
      "Exploratory conversation",
    ],
    steps: [
      "We send you the current cohort brief and segregated-pool overview.",
      "A 20-minute introductory call with our Principal Administrators.",
      "Align on pool allocation, governance, and quarterly reporting.",
    ],
    whatsappIntro: "Assalamu alaikum, I'd like to discuss co-funding the TAWAF Collective pool / a Funding Board seat.",
  },
  donor: {
    label: "Individual donors",
    title: "Give your Zakat or Sadaqah",
    subtitle:
      "Your Zakat goes directly to eligible founders in full ownership (tamlik). Your Sadaqah powers the revolving Qard Hassan pool, lent and repaid again.",
    orgLabel: "City / Country (optional)",
    orgPlaceholder: "e.g. Lagos, Abuja, Indianapolis, London",
    optionLabel: "How would you like to give?",
    options: [
      "Zakat (100% direct tamlik to eligible founders)",
      "Sadaqah (revolving Qard Hassan pool)",
      "Both Zakat and Sadaqah",
      "Need guidance on Shariah eligibility",
    ],
    steps: [
      "We share verified Zakat/Sadaqah giving details for your region.",
      "Optional brief call if you have Shariah or allocation questions.",
      "Receive quarterly updates on the cohort your gift supports.",
    ],
    whatsappIntro: "Assalamu alaikum, I'd like to talk about giving Zakat or Sadaqah through The TAWAF Collective.",
  },
  entrepreneur: {
    label: "Entrepreneurs",
    title: "Apply to a cohort",
    subtitle:
      "Muslim-led businesses at any stage can apply. Our diagnostic intake places you on the path that fits your business today—no blank pitch required.",
    orgLabel: "Business name & location",
    orgPlaceholder: "e.g. Amina Textiles · Kano",
    optionLabel: "Current stage",
    options: [
      "Path A · Zakat Grant (survival / formalizing)",
      "Path B · Qard Hassan (steady revenue, ready to repay)",
      "Path C · Mudarabah & Musharakah (scaling / partnership-ready)",
      "Not sure yet — help me assess",
    ],
    steps: [
      "Our team reviews your stage and sends the short intake link.",
      "A diagnostic business check and founder conversation.",
      "Placement into Path A, B, or C for the upcoming cohort.",
    ],
    whatsappIntro: "Assalamu alaikum, I'm a founder interested in applying to the next TAWAF Collective cohort.",
  },
};

const PATH_TO_INDEX: Record<PathKey, number> = { a: 0, b: 1, c: 2 };

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between border-b border-band-muted/20 py-4">
      <div>
        <p className="eyebrow text-band-muted">{label}</p>
        <p className="mt-1 font-display text-lg text-band-foreground">{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="eyebrow text-brass hover:underline"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function JoinPage() {
  const { track: initialTrack, path } = Route.useSearch();
  const [track, setTrack] = useState<Track>(initialTrack ?? "institution");

  const meta = TRACK_META[track];
  const matchedRung = path ? rungs[PATH_TO_INDEX[path]] : undefined;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [focus, setFocus] = useState(meta.options[0]!);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "fallback" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (initialTrack) setTrack(initialTrack);
  }, [initialTrack]);

  useEffect(() => {
    if (track === "entrepreneur" && path) {
      setFocus(TRACK_META.entrepreneur.options[PATH_TO_INDEX[path]]!);
    } else {
      setFocus(TRACK_META[track].options[0]!);
    }
    setStatus("idle");
    setErrorMsg("");
  }, [track, path]);

  const formEndpoint =
    (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || "https://formspree.io/f/xljblajn";
  const bookingUrl = import.meta.env.VITE_BOOKING_URL as string | undefined;
  const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? "15743864517";

  const whatsappText = encodeURIComponent(
    `${meta.whatsappIntro}${matchedRung ? ` (PathFinder result: ${matchedRung.tag} · ${matchedRung.name})` : ""}${name ? ` My name is ${name}.` : ""}`,
  );
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${whatsappText}`;

  const summaryText = [
    `Track: ${meta.label} — ${meta.title}`,
    matchedRung ? `PathFinder match: ${matchedRung.tag} (${matchedRung.name})` : null,
    `Selection: ${focus}`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone / WhatsApp: ${phone}` : null,
    org ? `${meta.orgLabel}: ${org}` : null,
    notes ? `Notes: ${notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (!formEndpoint) {
      setStatus("fallback");
      return;
    }

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          track: meta.label,
          title: meta.title,
          pathFinderMatch: matchedRung ? `${matchedRung.tag} · ${matchedRung.name}` : undefined,
          selection: focus,
          name,
          email,
          phone,
          organizationOrLocation: org,
          notes,
          _subject: `[TAWAF] ${meta.title} — ${name}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Submission failed (${res.status})`);
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Could not send right now. Please try WhatsApp or copy your summary below.");
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl leading-none text-foreground">
            TAWAF<span className="eyebrow ml-2 align-middle text-brass">Collective</span>
          </Link>
          <Link to="/" className="eyebrow text-muted-foreground transition-colors hover:text-brass">
            ← Back to overview
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="eyebrow text-brass">Get Involved</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">Join the cycle</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Choose how you want to participate. Leave your details below, message us on WhatsApp with one tap, or reach our team directly—no blank email required.
        </p>

        {/* Track selector */}
        <div className="mt-10 flex flex-wrap gap-2">
          {VALID_TRACKS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTrack(t)}
              className={`eyebrow border px-4 py-3 transition-colors ${
                track === t
                  ? "border-brass bg-brass text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-brass hover:text-foreground"
              }`}
            >
              {TRACK_META[t].label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          {/* Left: Guided Form */}
          <section className="border bg-card p-8 md:p-10 lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl">{meta.title}</h2>
            <p className="mt-3 text-muted-foreground">{meta.subtitle}</p>

            {matchedRung && track === "entrepreneur" && (
              <div className="mt-6 border border-brass/50 bg-background px-4 py-3 text-sm">
                <span className="eyebrow text-brass">PathFinder match: </span>
                <span className="font-medium">
                  {matchedRung.tag} · {matchedRung.name}
                </span>
              </div>
            )}

            {status === "sent" ? (
              <div className="mt-8 border border-brass/50 bg-background p-6">
                <p className="eyebrow text-brass">Received</p>
                <h3 className="mt-2 font-display text-2xl">Thank you, {name || "friend"}.</h3>
                <p className="mt-3 text-muted-foreground">
                  Your {meta.label.toLowerCase()} note has been sent to our team. We typically respond within 1–2 business days.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brass px-5 py-2.5 text-sm font-medium text-accent-foreground"
                  >
                    Also message on WhatsApp →
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setNotes("");
                    }}
                    className="border px-5 py-2.5 text-sm hover:border-brass"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : status === "fallback" ? (
              <div className="mt-8 border border-brass/50 bg-background p-6">
                <p className="eyebrow text-brass">Ready to send</p>
                <h3 className="mt-2 font-display text-2xl">Choose how to deliver your note</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your details are formatted below—send them in one tap via WhatsApp, copy them, or open a pre-filled email.
                </p>
                <pre className="mt-4 whitespace-pre-wrap border bg-card p-4 font-mono text-xs text-muted-foreground">
                  {summaryText}
                </pre>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brass px-5 py-2.5 text-sm font-medium text-accent-foreground"
                  >
                    Send via WhatsApp →
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(summaryText);
                      setCopiedSummary(true);
                      setTimeout(() => setCopiedSummary(false), 1800);
                    }}
                    className="border px-5 py-2.5 text-sm hover:border-brass"
                  >
                    {copiedSummary ? "Copied summary" : "Copy summary"}
                  </button>
                  <a
                    href={`mailto:enquiries@tawafcollective.com?subject=${encodeURIComponent(meta.title)}&body=${encodeURIComponent(summaryText)}`}
                    className="border px-5 py-2.5 text-sm hover:border-brass"
                  >
                    Open pre-filled email
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs text-muted-foreground underline hover:text-foreground"
                >
                  Edit details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="eyebrow block text-muted-foreground" htmlFor="join-focus">
                    {meta.optionLabel}
                  </label>
                  <select
                    id="join-focus"
                    value={focus}
                    onChange={(e) => setFocus(e.target.value)}
                    className="mt-2 w-full border bg-background px-4 py-3 text-sm focus:border-brass focus:outline-none"
                  >
                    {meta.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="eyebrow block text-muted-foreground" htmlFor="join-name">
                      Full name *
                    </label>
                    <input
                      id="join-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full border bg-background px-4 py-3 text-sm focus:border-brass focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="eyebrow block text-muted-foreground" htmlFor="join-email">
                      Email address *
                    </label>
                    <input
                      id="join-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full border bg-background px-4 py-3 text-sm focus:border-brass focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="eyebrow block text-muted-foreground" htmlFor="join-phone">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="join-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 ... or +1 ..."
                      className="mt-2 w-full border bg-background px-4 py-3 text-sm focus:border-brass focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="eyebrow block text-muted-foreground" htmlFor="join-org">
                      {meta.orgLabel}
                    </label>
                    <input
                      id="join-org"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder={meta.orgPlaceholder}
                      className="mt-2 w-full border bg-background px-4 py-3 text-sm focus:border-brass focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="eyebrow block text-muted-foreground" htmlFor="join-notes">
                    Anything else you'd like to share (optional)
                  </label>
                  <textarea
                    id="join-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional — leave blank if you prefer to discuss on a call."
                    className="mt-2 w-full border bg-background px-4 py-3 text-sm focus:border-brass focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">{errorMsg}</p>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-brass px-7 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending..." : "Submit inquiry →"}
                  </button>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="border px-6 py-3 text-sm hover:border-brass"
                  >
                    Message on WhatsApp instead
                  </a>
                </div>
              </form>
            )}
          </section>

          {/* Right: Direct Details & What to Expect */}
          <aside className="space-y-8 lg:col-span-5">
            <div className="grain bg-band p-8 text-band-foreground">
              <p className="eyebrow text-brass">Instant channels</p>
              <h3 className="mt-3 font-display text-2xl">Reach us directly</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brass px-5 py-2.5 text-sm font-medium text-accent-foreground"
                >
                  WhatsApp us →
                </a>
                {bookingUrl && (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-brass px-5 py-2.5 text-sm text-brass hover:bg-brass hover:text-accent-foreground"
                  >
                    Book a 15-min call
                  </a>
                )}
              </div>

              <div className="mt-8">
                <CopyRow label="Email" value="enquiries@tawafcollective.com" />
                <CopyRow label="Phone / WhatsApp" value="+1 574 386 4517" />
                <div className="border-b border-band-muted/20 py-4">
                  <p className="eyebrow text-band-muted">Web</p>
                  <a
                    href="https://tawafcollective.org"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block font-display text-lg hover:text-brass"
                  >
                    tawafcollective.org
                  </a>
                </div>
                <div className="pt-4">
                  <p className="eyebrow text-band-muted">Offices</p>
                  <p className="mt-1 font-display text-lg">Lagos, Nigeria · Indianapolis, Indiana, USA</p>
                </div>
              </div>
            </div>

            <div className="border bg-card p-8">
              <p className="eyebrow text-brass">What happens next</p>
              <ol className="mt-5 space-y-4">
                {meta.steps.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm text-muted-foreground">
                    <span className="font-mono text-brass">0{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
