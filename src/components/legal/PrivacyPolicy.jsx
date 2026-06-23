import LegalLayout, { Section } from './LegalLayout'
import { company, companyLocation } from './companyInfo'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`How ${company.legalName} collects, uses, and protects personal data on this website.`}
      lastUpdated={company.lastUpdated}
    >
      <Section heading="1. Controller">
        <p>
          The controller responsible for the processing of personal data on this website is:
        </p>
        <p>
          <strong className="text-foreground">{company.legalName}</strong>
          <br />
          {companyLocation}
          <br />
          Email:{' '}
          <a href={`mailto:${company.privacyEmail}`} className="text-teal hover:underline">
            {company.privacyEmail}
          </a>
        </p>
      </Section>

      <Section heading="2. Scope & legal framework">
        <p>
          {company.legalName} is a Swiss software company. We process personal data in accordance
          with the Swiss Federal Act on Data Protection (FADP / revDSG) and, where the EU General
          Data Protection Regulation (GDPR) applies — for example to visitors from the EU/EEA — in
          accordance with the GDPR. This policy covers our corporate website only; personal data
          processed within our products is governed by the respective product agreement and notice.
        </p>
      </Section>

      <Section heading="3. Data we process on this website">
        <p>
          <strong className="text-foreground">Server log files.</strong> When you access our
          website, our hosting provider automatically collects technical data your browser
          transmits — including IP address, date and time of access, browser type and version,
          operating system, and referrer URL. This data is necessary to deliver the website securely
          and reliably. The legal basis is our legitimate interest (Art. 6(1)(f) GDPR; Art. 31 FADP).
        </p>
        <p>
          <strong className="text-foreground">Contact.</strong> If you contact us by email, the
          information you provide is processed solely to handle your request and any related
          follow-up.
        </p>
      </Section>

      <Section heading="4. Cookies & analytics">
        <p>
          This website uses only technically necessary cookies. We do not deploy tracking or
          advertising cookies without your prior consent. Should we introduce analytics or marketing
          tools that require consent, we will request it in advance via a consent banner, and you
          will be able to withdraw it at any time.
        </p>
      </Section>

      <Section heading="5. Hosting & processors">
        <p>
          This website runs on infrastructure operated by third-party providers who process data on
          our behalf under data processing agreements. Where data is transferred abroad, we ensure
          an adequate level of protection through appropriate safeguards (e.g. EU Standard
          Contractual Clauses and the safeguards recognised under Swiss law).
        </p>
      </Section>

      <Section heading="6. Retention">
        <p>
          We retain personal data only as long as necessary for the purposes described or as
          required by statutory retention obligations. Server log data is deleted or anonymised
          after a short period unless required to investigate a security incident.
        </p>
      </Section>

      <Section heading="7. Your rights">
        <p>Subject to applicable law, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>request information about the personal data we hold about you;</li>
          <li>request rectification of inaccurate data;</li>
          <li>request erasure of your data;</li>
          <li>request restriction of processing;</li>
          <li>receive your data in a portable format;</li>
          <li>object to processing based on legitimate interest;</li>
          <li>withdraw any consent given, with effect for the future.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href={`mailto:${company.privacyEmail}`} className="text-teal hover:underline">
            {company.privacyEmail}
          </a>
          . You also have the right to lodge a complaint with a supervisory authority — in
          Switzerland, the Federal Data Protection and Information Commissioner (FDPIC / EDÖB); in
          the EU, your local data protection authority.
        </p>
      </Section>

      <Section heading="8. Changes to this policy">
        <p>
          We may update this privacy policy to reflect changes to our services or legal
          requirements. The current version is always available on this page together with the date
          of the last update.
        </p>
      </Section>
    </LegalLayout>
  )
}
