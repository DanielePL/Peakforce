import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Eye,
  Smartphone,
  Building2,
  Receipt,
  ShieldCheck,
  Users,
  Sparkles,
  Languages,
  Palette,
  Database,
  Check,
} from 'lucide-react'
import Footer from '../Footer'
import Shot from './Shot'

const MAILTO = 'mailto:hello@peakforce.com?subject=Prometheus%20Demo'

function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.3em] font-medium text-prometheus ${className}`}
    >
      {children}
    </p>
  )
}

/* ── content ─────────────────────────────────────────────── */

const PROMISES = [
  {
    icon: FileText,
    title: 'Zero paper. Forever.',
    body: 'Contracts, health questionnaires, signatures, payment receipts, ID copies — all digital, all in one place, one click away. The onboarding tablet captures personal data, anamnesis, photo, signature and the direct-debit mandate (LSV+ / PostFinance) in one flow.',
  },
  {
    icon: Eye,
    title: 'One truth, every level.',
    body: 'Reception, club management, region and headquarters see the same contract the moment a member signs at the tablet. Data exists once — never duplicated into a "headquarters copy". Who sees what is enforced at the database level, not by app logic that can be bypassed.',
  },
  {
    icon: Smartphone,
    title: 'Zero-touch member experience.',
    body: 'The member scans the kiosk QR with their phone, is checked in automatically and walks past reception. They book a class on their phone and it appears on the room display — without anyone touching anything. Reception turns from gatekeeper into host.',
  },
]

const SURFACES = [
  { tier: '01 · Board', name: 'CEO', detail: 'Pulse · approvals · reviews · secured mobile login' },
  { tier: '02 · HQ', name: 'Headquarters', detail: 'Group KPIs · benchmarks · finance · compliance · audit' },
  { tier: '03 · Region', name: 'Regional Management', detail: 'KPI roll-up · club switching · territory oversight' },
  { tier: '04 · Club', name: 'Manager', detail: 'Day cockpit for the whole club' },
  { tier: '04 · Club', name: 'Reception', detail: 'Desk terminal in daily operation' },
  { tier: '04 · Club', name: 'Coach Day', detail: 'PT & group classes' },
  { tier: '04 · Club', name: 'Welcome Tablet', detail: 'Staff clock-in (QR + PIN)' },
  { tier: '04 · Club', name: 'Onboard Tablet', detail: 'Member onboarding at the counter' },
  { tier: '05 · Coach', name: 'Coach Web', detail: 'PT workspace · clients · programming · billing' },
  { tier: '06 · End users', name: 'Coach Mobile', detail: 'iOS + Android · clients on the go' },
  { tier: '06 · End users', name: 'Member App', detail: 'iOS + Android · tracking · QR check-in · AI coach' },
]

const COVERAGE = [
  {
    icon: Users,
    title: 'Members & contracts',
    body: 'Member file, plans, contracts, freezes, cancellation, billing, collections. The anamnesis sits one click away, with a red emergency section.',
  },
  {
    icon: Receipt,
    title: 'Till, accounting & payroll',
    body: 'A legally compliant till plus the most advanced back-office in the industry: receipts read by AI, auto-coded, settled. Payroll, direct debit (LSV+ / PostFinance), journal, dunning, exports.',
  },
  {
    icon: Sparkles,
    title: 'Classes & access',
    body: 'Class planning, booking portal, group display in the room, QR self check-in, smart locks, zones. From BodyPump and RPM to Hyrox and your own format — the schedule runs itself.',
  },
  {
    icon: Users,
    title: 'People & shifts',
    body: 'Shift planner, absences, swaps, substitutions. Staff onboarding with one e-mail and two codes, and an application funnel from job posting to first shift.',
  },
  {
    icon: ShieldCheck,
    title: 'Steering & AI',
    body: 'HQ benchmarks between clubs, churn prediction, compliance and audit. A globally embedded AI assistant with an emergency mode (fire / water / injury triage).',
  },
]

const AI_PROMPTS = [
  'Which members at the Flon club are about to churn?',
  'Book Anna into tonight’s Hyrox class and freeze her contract for July.',
  'Close May’s books, run the VAT plausibility check and show me what does not reconcile.',
  'Which clubs are behind on their control rounds right now?',
]

const AI_GOVERNANCE = [
  {
    title: 'Nothing happens silently.',
    body: 'Every action that changes data is shown as a preview first and only runs once you confirm it.',
  },
  {
    title: 'Everything is logged.',
    body: 'Each executed action is written to an audit trail tied to the user who triggered it — and most actions can be undone.',
  },
  {
    title: 'The database draws the line.',
    body: 'What the assistant may read or write is enforced by the same row-level rules as the rest of the platform. It can never reach across a club boundary it is not entitled to.',
  },
]

const IT_NOTES = [
  {
    title: 'A check-in is one write.',
    body: 'The kiosk shows a signed QR rotated every 55 seconds with a single claim. The scan is verified cryptographically and committed as one indexed insert — no queue, no sync job, no batch step between the door and the database.',
  },
  {
    title: 'Clubs do not share a hot path.',
    body: 'Sixty-five clubs checking members in at 18:00 are sixty-five independent write streams into one PostgreSQL database. No per-club server to size, patch or reboot, and no cross-club lock to contend on.',
  },
  {
    title: 'A stateless application layer.',
    body: 'Check-in endpoints run as auto-scaling serverless functions. Peak-hour load scales horizontally without anyone provisioning for it in advance.',
  },
  {
    title: 'Boring, proven foundations.',
    body: 'The system of record is PostgreSQL, not a custom datastore. Access control is enforced inside the database itself (row-level security), not in application code that could be bypassed.',
  },
  {
    title: 'The AI is governed, not trusted.',
    body: 'The assistant reads and writes under the same row-level rules as every user. Every state-changing action is previewed and logged to an audit trail, and most are reversible.',
  },
  {
    title: 'Swiss data residency.',
    body: 'The platform is provisioned in a Swiss data region: member data is stored in Switzerland.',
  },
]

/* ── primitives ──────────────────────────────────────────── */

function SectionHeading({ eyebrow, title, intro, dark = false, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
      <h2
        className={`font-serif leading-[1.06] tracking-tight text-balance ${
          dark ? 'text-primary-foreground' : 'text-foreground'
        }`}
        style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)' }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg md:text-xl leading-relaxed ${
            dark ? 'text-primary-foreground/70' : 'text-muted-foreground'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/* ── page ────────────────────────────────────────────────── */

export default function PrometheusPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/10">
        <div className="container-edge flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label="PeakForce">
            <img src="/lovable/peakforce-logo-YY_iTjKO.png" alt="PeakForce" className="h-8 w-auto invert" />
            <span className="hidden sm:inline text-primary-foreground/40 text-sm">/</span>
            <span className="hidden sm:inline text-primary-foreground text-sm font-medium tracking-wide">
              Prometheus
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft size={15} />
              PeakForce
            </a>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 rounded-full bg-prometheus text-white px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] font-semibold hover:bg-prometheus-deep transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-charcoal text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_0%,hsl(23_87%_55%/0.18),transparent_55%)]" />
        <div className="relative container-edge pt-40 md:pt-48 pb-24 md:pb-32">
          <div className="max-w-4xl">
            <Eyebrow className="mb-6">The operating system for fitness</Eyebrow>
            <h1
              className="font-serif leading-[1.02] tracking-tight text-balance"
              style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
            >
              The Prometheus <span className="text-prometheus">Ecosystem</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              One platform. One database. One identity. From the reception tablet to the boardroom.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
              {['Live since January 2026', 'Swiss data residency', 'White-label'].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-primary-foreground/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-prometheus" />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={MAILTO}
                className="group inline-flex items-center gap-2 rounded-full bg-prometheus text-white px-7 py-4 text-sm font-medium hover:gap-3 transition-all"
              >
                Book a demo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#it"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-white/5 transition-colors"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three promises */}
      <section className="container-edge py-24 md:py-32">
        <SectionHeading
          eyebrow="The three promises"
          title="Whoever knows these three knows Prometheus."
          intro="Every function in the system serves one of them."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {PROMISES.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-secondary/40 p-8">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-prometheus/10 text-prometheus mb-6">
                <p.icon size={20} />
              </span>
              <h3 className="font-serif text-2xl tracking-tight mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Built for the chain */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container-edge py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Built for the chain"
              title="One club is easy. Sixty-five is the opposite."
              intro="…unless the hierarchy is the foundation of the system. In Prometheus, it is. Each level sees exactly its slice — club management runs their house, the region compares its clubs, headquarters rolls up every club in real time."
            />
          </div>
          <div className="rounded-2xl bg-charcoal text-primary-foreground p-8 md:p-10 font-mono text-sm leading-7">
            <div className="text-prometheus">Group <span className="text-primary-foreground/50">(your brand)</span></div>
            <div className="text-primary-foreground/70">│</div>
            <div className="text-primary-foreground/70">├─ Region <span className="text-primary-foreground/40">(e.g. Lausanne, Genève)</span></div>
            <div className="text-primary-foreground/70">│&nbsp;&nbsp;&nbsp;└─ Club <span className="text-primary-foreground/40">(e.g. Flon, Vevey, Sion)</span></div>
            <div className="text-primary-foreground/70">│</div>
            <div className="text-primary-foreground/70">└─ Club <span className="text-primary-foreground/40">(directly under the group)</span></div>
            <p className="mt-8 pt-6 border-t border-white/10 font-sans text-primary-foreground/80 not-italic">
              “From the tablet at reception to the CEO dashboard: the same software, each person sees
              only their level.”
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem / surfaces */}
      <section className="bg-charcoal text-primary-foreground">
        <div className="container-edge py-24 md:py-32">
          <SectionHeading
            dark
            eyebrow="Eight apps · one backend · one identity"
            title="The Ecosystem."
            intro="The same software, a different entrance depending on the role. One sign-in carries across all of them."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {SURFACES.map((s) => (
              <div key={s.name} className="bg-charcoal p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-prometheus mb-2">{s.tier}</p>
                <h3 className="text-lg font-semibold text-primary-foreground">{s.name}</h3>
                <p className="mt-1 text-sm text-primary-foreground/60 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-dashed border-white/20 p-6 flex items-start gap-4">
            <Database size={20} className="text-prometheus shrink-0 mt-0.5" />
            <p className="text-primary-foreground/75 leading-relaxed">
              <span className="text-primary-foreground font-medium">Foundation —</span> one shared
              backend, one identity (SSO across every surface), no ETL, no API bridges, no nightly
              sync jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-charcoal text-primary-foreground border-t border-white/5">
        <div className="container-edge pb-24 md:pb-32 space-y-16">
          <Shot
            src="/lovable/prometheus/command-center.png"
            tone="dark"
            label="Command Center — the club cockpit"
            caption="The club cockpit: today’s numbers, expiring memberships, sessions and alerts on one screen."
          />
          <div className="grid lg:grid-cols-2 gap-12">
            <Shot
              src="/lovable/prometheus/hq-dashboard.png"
              tone="dark"
              label="HQ Dashboard — every club side by side"
              caption="Headquarters: members, revenue, retention and acquisition across the operation, updating live."
            />
            <Shot
              src="/lovable/prometheus/ceo-pulse.png"
              tone="dark"
              device="phone"
              label="CEO Pulse — on the phone"
              caption="The CEO’s pulse on the phone: group KPIs and the points worth a closer look."
            />
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="container-edge py-24 md:py-32">
        <SectionHeading
          eyebrow="What it covers"
          title="The entire club operation, five areas deep."
          intro="Ordered by what counts in daily business — not by what looks good on a feature list."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COVERAGE.map((c) => (
            <div key={c.title} className="border-t border-border pt-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-prometheus/10 text-prometheus mb-4">
                <c.icon size={18} />
              </span>
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI management system */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container-edge py-24 md:py-32 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              eyebrow="An intelligent management system"
              title="Not a database with screens — software that acts when you ask."
              intro="The same generation of AI behind the member app runs your back office. A manager, receptionist or CEO asks in plain language and the system answers from live data, scoped to who is asking:"
            />
            <ul className="mt-8 space-y-3">
              {AI_PROMPTS.map((q) => (
                <li
                  key={q}
                  className="rounded-xl border border-border bg-background px-5 py-4 text-foreground/80 italic"
                >
                  “{q}”
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pt-16">
            <p className="text-foreground font-medium mb-6">
              Crucially for an operation your size, it is governed by design, not by trust:
            </p>
            <div className="space-y-6">
              {AI_GOVERNANCE.map((g) => (
                <div key={g.title} className="flex gap-4">
                  <Check size={20} className="text-prometheus shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{g.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{g.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back office */}
      <section className="container-edge py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="lg:order-2">
          <Shot
            src="/lovable/prometheus/accounting.png"
            tone="light"
            label="Accounting — receipts read by AI"
            caption="Supplier receipts read by AI, coded and posted to a revision-safe journal. The VAT return and year-end statements derive from this automatically."
          />
        </div>
        <div className="lg:order-1">
          <SectionHeading
            eyebrow="The back office that closes itself"
            title="Your books close themselves. The fiduciary just reviews."
            intro="A receipt is just a photo — AI reads vendor, date, amount, VAT rate and document number, proposes the account, you confirm. Every booking lands in a real double-entry journal that is hash-chained and immutable once exported (Swiss GoB). Payroll, LSV+ / PostFinance direct debit, dunning, TWINT and cards — CHF throughout. The balance sheet and VAT return are live, with an AI plausibility check before anything goes out."
          />
        </div>
      </section>

      {/* Accountability */}
      <section className="bg-charcoal text-primary-foreground">
        <div className="container-edge py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              dark
              eyebrow="Accountability across every club"
              title="The QR is the proof, not a tick."
              intro="Each zone (WC, locker room, bar, floor) carries a schedule of checks. A round only opens when staff scan the printed QR in that exact zone — time-stamped on the server, so it can never be ticked from the back office. Members are your sensors: a QR in each zone lets them report a problem in two taps, correlated automatically against the last check. Every club rolls up to a single facility score."
            />
          </div>
          <Shot
            src="/lovable/prometheus/facility.png"
            tone="dark"
            label="Facility — control rounds & compliance"
            caption="Control rounds per zone with checklist and photo, member complaints, and a compliance view that rolls up to one facility score."
          />
        </div>
      </section>

      {/* Member + Coach */}
      <section className="container-edge py-24 md:py-32">
        <SectionHeading
          eyebrow="From the boardroom to the member’s phone"
          title="One member app for the whole chain. One workspace for every coach."
          intro="One member, one login, all your clubs. Coaches work at the desk or on the floor with the same client data — the AI drafts training and nutrition plans the coach reviews and signs off."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-12 items-start">
          <Shot
            tone="light"
            device="phone"
            label="Member App — calendar & booking"
            caption="One-tap class reservations, nutrition and training. Booked on the phone, checked in at the kiosk."
          />
          <Shot
            tone="light"
            device="phone"
            label="Member App — entrance kiosk QR"
            caption="A rotating access QR for zero-touch entry, one scan-to-check-in code per class."
          />
          <Shot
            src="/lovable/prometheus/coach-dashboard.png"
            tone="light"
            label="Coach Web — the coach’s workspace"
            caption="The coach’s day on the floor: checked-in clients, open tabs and today’s schedule in one workspace — clients, programming and billing connected to the member app."
            aspect="aspect-[16/10]"
          />
        </div>
      </section>

      {/* Marketing + Hiring */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-background border border-border p-8 md:p-10">
            <Eyebrow className="mb-4">Marketing on autopilot</Eyebrow>
            <h3 className="font-serif text-3xl tracking-tight mb-4">A photo becomes a post.</h3>
            <p className="text-muted-foreground leading-relaxed">
              Staff snap a moment — a packed class, a new rack, a member win — and send it in. AI
              reads the image and writes the caption, three hook variants, the hashtags and the
              @-mentions in seconds. Goal-driven and in your club’s voice, consent-aware tagging,
              approved and published to Instagram in one tap. The channel that fills your classes
              runs without a marketing hire.
            </p>
          </div>
          <div className="rounded-2xl bg-background border border-border p-8 md:p-10">
            <Eyebrow className="mb-4">Hiring without paper</Eyebrow>
            <h3 className="font-serif text-3xl tracking-tight mb-4">Job post to first shift, one inbox.</h3>
            <p className="text-muted-foreground leading-relaxed">
              A job posting becomes a shareable link — candidates apply and mark availability with no
              login. The interview books itself from a grid that already knows your shifts. Fit is
              checked against mandatory shifts before the interview, and on hire the contract is
              signed on screen with a full audit trail. One tap later the new hire clocks in on their
              phone.
            </p>
          </div>
        </div>
      </section>

      {/* Swiss + white-label */}
      <section className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-12">
        <div>
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-prometheus/10 text-prometheus mb-6">
            <Languages size={20} />
          </span>
          <h3 className="font-serif text-3xl tracking-tight mb-4">Swiss from the ground up</h3>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li>Interface in <span className="text-foreground">French, German and English</span> — every member and employee in their own language.</li>
            <li>Payments the Swiss way: <span className="text-foreground">LSV+ / PostFinance</span> direct debit, TWINT and card at the till, CHF throughout.</li>
            <li>Data protection strict from the ground up <span className="text-foreground">(revDSG)</span>, enforced at the database level.</li>
          </ul>
        </div>
        <div>
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-prometheus/10 text-prometheus mb-6">
            <Palette size={20} />
          </span>
          <h3 className="font-serif text-3xl tracking-tight mb-4">In your colours</h3>
          <p className="text-muted-foreground leading-relaxed">
            Prometheus is white-label: every operator picks their own colours and the whole system
            dresses accordingly, from the reception tablet to the CEO’s phone. The same platform that
            runs in Prometheus orange runs just as well in your brand.
          </p>
        </div>
      </section>

      {/* Notes for IT — credibility */}
      <section id="it" className="bg-charcoal text-primary-foreground scroll-mt-20">
        <div className="container-edge py-24 md:py-32">
          <SectionHeading
            dark
            eyebrow="Notes for your IT team"
            title="We are the new name on your list — so this sticks to facts."
            intro="No adjectives. How the platform behaves under real load, and why a new vendor is not a new risk."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {IT_NOTES.map((n) => (
              <div key={n.title} className="flex gap-4">
                <Building2 size={18} className="text-prometheus shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">{n.title}</h4>
                  <p className="text-primary-foreground/65 leading-relaxed">{n.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-prometheus/30 bg-prometheus/5 p-8">
            <Eyebrow className="mb-3">Measured, not promised</Eyebrow>
            <p className="text-lg md:text-xl text-primary-foreground leading-relaxed">
              We prefer evidence to claims. Before you commit, we run a joint load test with your IT
              team against a pilot club, with your real scan volumes — and hand you the numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="container-edge py-24 md:py-32">
        <SectionHeading
          center
          eyebrow="From your current software to Prometheus"
          title="Going live is a configuration, not a project."
          intro="Through the Migration Center we bring your existing data across without depending on a restrictive export. Prometheus is deliberately one closed system — everything works together from day one. You pay by the size of your operation, not by a feature list."
        />
        <div className="mt-10 flex justify-center">
          <a
            href={MAILTO}
            className="group inline-flex items-center gap-2 rounded-full bg-prometheus text-white px-7 py-4 text-sm font-medium hover:gap-3 transition-all"
          >
            Request a multi-club offer
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-charcoal text-primary-foreground">
        <div className="container-edge py-28 md:py-40 text-center">
          <h2
            className="font-serif leading-[1.05] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)' }}
          >
            Zero paper. <span className="text-prometheus">One truth.</span> Every club.
          </h2>
          <div className="mt-10 flex justify-center">
            <a
              href={MAILTO}
              className="group inline-flex items-center gap-2 rounded-full bg-prometheus text-white px-8 py-4 text-sm font-medium hover:gap-3 transition-all"
            >
              Book a demo
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
