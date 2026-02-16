# PeakForce / Prometheus — Konzept "Roter Faden"

## Stand 16. Februar 2026

---

## 1. IST-ZUSTAND: DAS CHAOS

### 4 Systeme, 0 Verbindung

```
┌─────────────────────────────────────────────────────────────────┐
│                        AKTUELL                                  │
│                                                                 │
│  peakforce-solutions.com (?)          prometheus.coach (?)                 │
│  ┌──────────────┐          ┌──────────────┐                     │
│  │  Homepage     │          │  ???          │                    │
│  │  (Marketing)  │          │  Keine       │                    │
│  │  Keine Links  │          │  Landing     │                    │
│  │  nach aussen  │          │  Page        │                    │
│  └──────────────┘          └──────────────┘                     │
│                                                                 │
│  Prometheus Coach Web       Prometheus Enterprise Web            │
│  ┌──────────────┐          ┌──────────────┐                     │
│  │  /auth Login  │          │  /auth/login  │                   │
│  │  /pricing     │          │  /auth/register│                  │
│  │  Dashboard    │          │  /pricing      │                  │
│  │  Stripe       │          │  Dashboard     │                  │
│  │  14-Tage Trial│          │  Stripe        │                  │
│  └──────────────┘          │  14-Tage Trial │                  │
│                             └──────────────┘                    │
│  Prometheus Mobile App (Android)                                │
│  ┌──────────────┐                                               │
│  │  Onboarding   │                                              │
│  │  Google Play   │                                             │
│  │  Billing       │                                             │
│  │  10-Tage Trial │                                             │
│  │  Package:      │                                             │
│  │  prometheus.   │                                             │
│  │  coach (!)     │                                             │
│  └──────────────┘                                               │
└─────────────────────────────────────────────────────────────────┘
```

### Identifizierte Probleme

| # | Problem | Auswirkung |
|---|---------|------------|
| 1 | **Kein Weg vom Erstkontakt zum Produkt.** PeakForce-Homepage hat null externe Links. | Potenzielle Kunden landen in einer Sackgasse. |
| 2 | **prometheus.coach ist nicht definiert.** Domain wird referenziert (Deep Links, E-Mails), aber es gibt keine Landing Page dort. | Coach-App und Mobile-App nutzen die Domain, aber kein Mensch weiss, was unter prometheus.coach zu sehen ist. |
| 3 | **Mobile App Package heisst `prometheus.coach`.** Im Play Store wird die Athleten-App unter einem Coach-Domainnamen publiziert. | Verwirrung: Ist das die Coach-App oder die Athleten-App? |
| 4 | **Drei verschiedene Login-Seiten.** Enterprise: `/auth/login`. Coach: `/auth`. Mobile: eigener Onboarding-Flow. | Kein einheitlicher Einstieg. Nutzer weiss nicht, wo er sich anmeldet. |
| 5 | **Drei verschiedene Trial-Perioden.** Enterprise: 14 Tage. Coach: 14 Tage. Mobile: 10 Tage. | Inkonsistente Kommunikation. |
| 6 | **Keine Querverbindung zwischen Apps.** Coach und Enterprise teilen Supabase, aber es gibt keine User-Journey zwischen den Produkten. | Ein Gym-Besitzer der auch die Coach-App will, muss alles separat entdecken. |
| 7 | **PeakForce vs. Prometheus Branding unklar.** PeakForce = Firma. Prometheus = Produkt. Aber wo endet PeakForce, wo beginnt Prometheus? | Verwirrung bei Investoren, Kunden und in den App Stores. |
| 8 | **Gleiche Supabase-Instanz** für Coach und Enterprise, aber Mobile App hat eigene Backend-Config. | Technisch riskant und unklar, ob Daten sauber getrennt sind. |

---

## 2. SOLL-ZUSTAND: KLARE ARCHITEKTUR

### Domain-Struktur

```
peakforce-solutions.com                    → Firmenwebsite (Dach, Investor-facing)
prometheus.coach                → Produkt-Hub + Login-Portal
prometheus.coach/app            → Weiterleitung App Stores
prometheus.coach/login          → Unified Login (Coach + Enterprise)
prometheus.coach/pricing        → Alle Pläne im Überblick
```

### Drei klare Kundentypen, drei klare Wege

```
                    ┌─────────────────────┐
                    │    peakforce-solutions.com      │
                    │    (Firmenseite)      │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │  prometheus.coach    │
                    │  (Produkt-Hub)       │
                    └──┬───────┬───────┬──┘
                       │       │       │
              ┌────────▼──┐ ┌──▼─────┐ ┌▼──────────┐
              │  ATHLET   │ │ COACH  │ │ ENTERPRISE │
              │           │ │        │ │            │
              │ App Store │ │ Login  │ │ Login      │
              │ Play Store│ │ Coach  │ │ Enterprise │
              │ (direkt)  │ │ Web-App│ │ Web-App    │
              └───────────┘ └────────┘ └────────────┘
```

---

## 3. DIE ROTEN FÄDEN (User Journeys)

### Roter Faden 1: ATHLET (B2C)

```
Google/Instagram Ad → peakforce-solutions.com → "Get the App" → prometheus.coach/app
                                                         │
                                              ┌──────────┴──────────┐
                                              │  iOS → App Store    │
                                              │  Android → Play St. │
                                              └─────────────────────┘

ODER direkt:

App Store Suche "Prometheus Training" → Download → Onboarding → Trial → Abo
```

**Anforderungen:**
- PeakForce-Homepage braucht prominenten "Get the App"-Button
- prometheus.coach/app = Smart-Redirect (erkennt iOS/Android, leitet weiter)
- Kein Umweg über Coach- oder Enterprise-Seiten
- Mobile App bleibt komplett eigenständig (eigene Zahlung via App Store)

### Roter Faden 2: COACH / PERSONAL TRAINER (B2B small)

```
Google Ad / Empfehlung → prometheus.coach → Produkt-Info → "Start Free Trial"
                                                │
                                    ┌───────────▼───────────┐
                                    │  prometheus.coach      │
                                    │  /auth/register        │
                                    │  (Coach Registration)  │
                                    └───────────┬───────────┘
                                                │
                                    ┌───────────▼───────────┐
                                    │  14-Tage Trial         │
                                    │  Coach Dashboard       │
                                    └───────────┬───────────┘
                                                │
                                    ┌───────────▼───────────┐
                                    │  /pricing → Stripe     │
                                    │  Abo auswählen         │
                                    └───────────────────────┘
```

**Anforderungen:**
- prometheus.coach hat eine eigene Landing Page (Produkt-Marketing für Coaches)
- Demo-Button auf dieser Landing Page (bestehendes Demo-Login nutzen)
- Login-Button rechts oben → führt zum Coach-Dashboard
- Trial-Flow bleibt wie er ist (14 Tage, Stripe)

### Roter Faden 3: GYM / KLINIK / UNTERNEHMEN (B2B enterprise)

```
Direktkontakt / peakforce-solutions.com → prometheus.coach/enterprise → Produkt-Info
                                                │
                                    ┌───────────▼───────────┐
                                    │  "Start Free Trial"    │
                                    │  ODER "Book a Demo"    │
                                    └───────────┬───────────┘
                                                │
                                    ┌───────────▼───────────┐
                                    │  prometheus.coach      │
                                    │  /auth/register        │
                                    │  (Facility Registr.)   │
                                    └───────────┬───────────┘
                                                │
                                    ┌───────────▼───────────┐
                                    │  14-Tage Trial         │
                                    │  Enterprise Dashboard  │
                                    └───────────────────────┘
```

**Anforderungen:**
- Enterprise bekommt eigene Subpage auf prometheus.coach (nicht eigene Domain)
- "Book a Demo"-Option für grössere Kunden (Kalender-Link oder Kontaktformular)
- Login leitet korrekt ins Enterprise-Dashboard weiter (basierend auf User-Rolle)

---

## 4. KONKRETE MASSNAHMEN

### 4.1 peakforce-solutions.com — Firmenseite (BEREITS GEBAUT, MUSS ANGEPASST WERDEN)

**Was bleibt:** Investor-/Company-Story, Team, Vision, Roadmap, Tech-Sections

**Was sich ändert:**

| Element | Aktuell | Neu |
|---------|---------|-----|
| Hero CTA "Start Free Trial" | Scrollt zu #trial | Linkt zu `prometheus.coach` |
| Hero CTA "Watch Demo" | Scrollt zu #product | Linkt zu `prometheus.coach/demo` |
| Navbar CTA | Scrollt zu #trial | Linkt zu `prometheus.coach` |
| Neuer CTA: "Get the App" | Existiert nicht | Prominent in Hero, linkt zu App Stores |
| Free Trial Section | Eigenes Email-Formular | Entfernen oder umleiten zu prometheus.coach |
| Pricing Cards | Eigene Preisdarstellung | Entweder entfernen oder als "ab €X" Übersicht mit Link zu prometheus.coach/pricing |
| Footer | Platzhalter-Links | Echte Links zu prometheus.coach, App Stores, Social Media |

**Neue Navigation im Hero:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   "The Future of Intelligent Training"              │
│                                                     │
│   ┌─────────────┐  ┌──────────┐  ┌──────────────┐  │
│   │ Get the App │  │ For      │  │ For Gyms &   │  │
│   │ (gold)      │  │ Coaches  │  │ Clinics      │  │
│   │ → App Store │  │ (blue)   │  │ (outline)    │  │
│   │             │  │ → prom.  │  │ → prom.coach │  │
│   │             │  │   coach  │  │   /enterprise│  │
│   └─────────────┘  └──────────┘  └──────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 4.2 prometheus.coach — Produkt-Hub (NEU ZU BAUEN)

Dies ist die **zentrale Produkt-Seite**. Sie ersetzt die fehlende Landing Page und wird gleichzeitig zum Einstiegspunkt für Coach- und Enterprise-Login.

**Seitenstruktur:**

```
prometheus.coach/
├── /                     → Landing Page (Produkt-Marketing)
├── /app                  → Smart Redirect zu App Stores
├── /pricing              → Alle Pläne (Athlet, Coach, Enterprise)
├── /demo                 → Demo-Zugang (Guest Login)
├── /enterprise           → Enterprise Landing (Sub-Page)
│
├── /login                → Unified Login
│   ├── Coach Login       → Coach Dashboard (/dashboard)
│   └── Enterprise Login  → Enterprise Dashboard (/dashboard)
│
├── /auth/register        → Registration (Coach ODER Facility Owner)
├── /auth/callback        → Auth Callback
├── /auth/forgot-password → Passwort vergessen
│
├── /coach/*              → Coach Web-App (Dashboard, Clients, etc.)
├── /enterprise/*         → Enterprise Web-App (Dashboard, Members, etc.)
│
└── /legal
    ├── /privacy          → Datenschutz
    ├── /terms            → AGB
    └── /impressum        → Impressum
```

**Unified Login — Kernstück:**

```
┌────────────────────────────────────────┐
│                                        │
│          prometheus.coach/login         │
│                                        │
│   ┌────────────────────────────────┐   │
│   │        PROMETHEUS              │   │
│   │        Sign In                 │   │
│   │                                │   │
│   │   Email:  [________________]   │   │
│   │   Pass:   [________________]   │   │
│   │                                │   │
│   │   [       Sign In          ]   │   │
│   │                                │   │
│   │   Forgot password?             │   │
│   │                                │   │
│   │   ─────── or ───────           │   │
│   │                                │   │
│   │   [  Continue with Google  ]   │   │
│   │                                │   │
│   │   No account?                  │   │
│   │   → Coach Registration         │   │
│   │   → Facility Registration      │   │
│   │   → Looking for the App?       │   │
│   │     Download here              │   │
│   └────────────────────────────────┘   │
│                                        │
│   ┌────────────────────────────────┐   │
│   │  🏋️ Athlete?                   │   │
│   │  Get the Prometheus App →      │   │
│   │  [App Store] [Google Play]     │   │
│   └────────────────────────────────┘   │
│                                        │
└────────────────────────────────────────┘
```

**Routing nach Login (basierend auf User-Rolle/Typ):**
- User hat `gym_id` + Staff-Rolle → Enterprise Dashboard
- User hat `role: coach` → Coach Dashboard
- User ist beides → Auswahl-Screen ("Welches Dashboard?")

### 4.3 Prometheus Mobile App — Minimaler Eingriff

| Änderung | Detail |
|----------|--------|
| Package Name | `prometheus.coach` beibehalten (App-Store-Migration ist zu riskant) |
| Trial-Dauer | Von 10 auf **14 Tage** angleichen |
| Deep Links | `prometheus.coach/app` als primärer Marketing-Link |
| Referral Links | `prometheus.coach/r/{code}` bleibt |
| App-Store-Listing | PeakForce OÜ als Publisher, "Prometheus" als Produktname |

### 4.4 Branding-Klarstellung

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   PeakForce OÜ                                     │
│   ══════════                                        │
│   Die Firma. Der Publisher. Das Dach.               │
│   → peakforce-solutions.com (Investor/Company Site)            │
│   → In den App Stores als Publisher                 │
│   → Keine Zahlungsanbindung                         │
│   → Impressum, Legal Entity                         │
│                                                     │
│   Prometheus                                        │
│   ══════════                                        │
│   Das Produkt-Ökosystem. Die Marke für Kunden.     │
│   → prometheus.coach (Produkt-Hub + Apps)           │
│   → Alle Zahlungen laufen hier                      │
│   → Drei Produkte:                                  │
│     • Prometheus App (Athleten, B2C)                │
│     • Prometheus Coach (Trainer, B2B small)         │
│     • Prometheus Enterprise (Gyms/Kliniken, B2B)    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Regel:** Ein Kunde sieht "Prometheus". Ein Investor sieht "PeakForce".

---

## 5. TECHNISCHE UMSETZUNG

### Option A: Monorepo unter prometheus.coach (EMPFOHLEN)

```
prometheus.coach (Single Deployment — Vite/React)
├── Landing Page (/)
├── Auth Pages (/login, /register, /forgot-password)
├── Pricing (/pricing)
├── Coach App (/coach/*)         ← bestehender Coach-Code
├── Enterprise App (/enterprise/*)← bestehender Enterprise-Code
└── Shared: Auth Context, Supabase Client, UI Components
```

**Vorteile:**
- Ein Login für alles
- Geteilte Supabase-Instanz (bereits der Fall!)
- Konsistentes Design
- Einfaches Deployment (ein Render/Vercel Projekt)
- User kann zwischen Coach und Enterprise wechseln

**Nachteile:**
- Grösseres Bundle (kann mit Code-Splitting gelöst werden)
- Migration beider Apps in ein Repo

### Option B: Micro-Frontends / Subdomain-Split

```
prometheus.coach           → Landing + Auth (neues Projekt)
coach.prometheus.coach     → Coach App (bestehend)
app.prometheus.coach       → Enterprise App (bestehend)
```

**Vorteile:**
- Bestehende Apps bleiben unverändert
- Unabhängige Deployments
- Schneller umzusetzen

**Nachteile:**
- Session-Sharing über Subdomains nötig (Supabase-Cookie-Config)
- Drei separate Deployments zu warten
- UX-Bruch beim Wechsel zwischen Subdomains

### Option C: Hybrid (PRAGMATISCH, EMPFOHLEN FÜR JETZT)

```
prometheus.coach           → Neue Landing + Login-Portal + Routing
                             (leichtes React-Projekt)
                             Leitet nach Login weiter an:

prometheus.coach/coach     → Coach App (Render, bestehend, angepasste Auth)
prometheus.coach/manage    → Enterprise App (bestehend, angepasste Auth)

ODER mit Subdomains:
coach.prometheus.coach     → Coach App
manage.prometheus.coach    → Enterprise App
```

**Login-Flow:**
1. User loggt sich ein auf prometheus.coach/login
2. Supabase-Session wird gesetzt
3. Basierend auf Rolle → Redirect zu Coach oder Enterprise
4. Coach/Enterprise-Apps lesen bestehende Supabase-Session

**Das ist der schnellste Weg zum Ziel** mit minimalen Änderungen an den bestehenden Apps.

---

## 6. PRIORISIERTE UMSETZUNGSREIHENFOLGE

### Phase 1 — Sofort (1-2 Wochen)

| # | Aufgabe | System |
|---|---------|--------|
| 1 | **PeakForce-Homepage CTAs reparieren** — Echte Links zu prometheus.coach und App Stores einbauen | peakforce-solutions.com |
| 2 | **prometheus.coach Landing Page bauen** — Produkt-Marketing mit drei klaren Wegen (Athlet/Coach/Enterprise) | prometheus.coach |
| 3 | **App Store Smart-Redirect** — prometheus.coach/app erkennt OS und leitet weiter | prometheus.coach |
| 4 | **Trial auf 14 Tage vereinheitlichen** — Mobile App von 10 auf 14 Tage | Mobile App |

### Phase 2 — Kurzfristig (2-4 Wochen)

| # | Aufgabe | System |
|---|---------|--------|
| 5 | **Unified Login Page** — Ein Login für Coach + Enterprise | prometheus.coach |
| 6 | **Rollen-basiertes Routing nach Login** — Automatische Weiterleitung | prometheus.coach |
| 7 | **Demo-Zugang über prometheus.coach/demo** | prometheus.coach |
| 8 | **Pricing-Übersicht** — Alle drei Produkte auf einer Seite | prometheus.coach |

### Phase 3 — Mittelfristig (1-2 Monate)

| # | Aufgabe | System |
|---|---------|--------|
| 9 | **Cross-Selling in den Apps** — Coach-App zeigt Enterprise-Upgrade, Enterprise zeigt Coach-Features | Alle Apps |
| 10 | **Einheitliches Onboarding** — Konsistente Willkommens-E-Mails, gleiche Sprache | Alle |
| 11 | **Legal Pages** — Privacy Policy, Terms, Impressum unter prometheus.coach/legal | prometheus.coach |
| 12 | **Analytics** — Tracking des gesamten Funnels: peakforce-solutions.com → prometheus.coach → App/Dashboard | Alle |

---

## 7. ZUSAMMENFASSUNG: DIE DREI REGELN

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  REGEL 1:  peakforce-solutions.com = FIRMA                            │
│            prometheus.coach = PRODUKT                       │
│            Kein Vermischen.                                 │
│                                                             │
│  REGEL 2:  Jeder Kundentyp hat EINEN klaren Weg.           │
│            Athlet → App Store (max 2 Klicks)                │
│            Coach → prometheus.coach → Login → Dashboard     │
│            Enterprise → prometheus.coach/enterprise → Login │
│                                                             │
│  REGEL 3:  prometheus.coach ist die ZENTRALE.               │
│            Alles Produkt-bezogene lebt hier.                │
│            Login, Pricing, Demo, Legal.                     │
│            PeakForce.ai verlinkt hierhin, nicht umgekehrt.  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

*Erstellt für PeakForce OÜ — Konzept zur Vereinheitlichung der Customer Journey*
