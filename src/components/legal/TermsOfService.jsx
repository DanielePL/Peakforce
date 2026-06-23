import LegalLayout, { Section } from './LegalLayout'
import { company } from './companyInfo'

export default function TermsOfService() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      intro={`Terms governing your use of the ${company.legalName} website.`}
      lastUpdated={company.lastUpdated}
    >
      <Section heading="1. Scope">
        <p>
          These Terms of Service govern your use of the corporate website operated by{' '}
          <strong className="text-foreground">{company.legalName}</strong> ({company.website}, the
          "Website"). By accessing or using the Website, you agree to these terms. Use of our
          software products and platforms is governed by separate agreements and is not subject to
          these terms.
        </p>
      </Section>

      <Section heading="2. About us">
        <p>
          {company.legalName} is a Swiss software company that designs, builds, and operates
          software infrastructure for performance, health, and wellness platforms. Company details
          are set out in our{' '}
          <a href="#/impressum" className="text-teal hover:underline">
            Impressum
          </a>
          .
        </p>
      </Section>

      <Section heading="3. Use of the Website">
        <p>
          The Website is provided for informational purposes about our company and products. You
          agree not to misuse it — including attempting unauthorised access, interfering with its
          operation, scraping content at scale, or using it for any unlawful purpose.
        </p>
      </Section>

      <Section heading="4. Intellectual property">
        <p>
          All content on the Website — including text, graphics, logos, the {company.brand} name and
          marks, software, and design — is owned by {company.legalName} or its licensors and is
          protected by intellectual property law. You may not reproduce, distribute, or create
          derivative works without our prior written consent, except as permitted by mandatory law.
        </p>
      </Section>

      <Section heading="5. Third-party links">
        <p>
          The Website may contain links to third-party websites and services. We have no influence
          over their content and assume no responsibility for it. Accessing such sites is at your
          own risk and subject to their terms.
        </p>
      </Section>

      <Section heading="6. No warranty">
        <p>
          The Website is provided "as is" and "as available" without warranties of any kind, whether
          express or implied, to the maximum extent permitted by law. We do not warrant that the
          Website will be uninterrupted, error-free, or free of harmful components, or that the
          information provided is complete or current.
        </p>
      </Section>

      <Section heading="7. Limitation of liability">
        <p>
          To the maximum extent permitted by applicable law, {company.legalName} shall not be liable
          for any indirect or consequential damages arising out of or in connection with your use of
          the Website. Nothing in these terms excludes or limits liability that cannot be excluded or
          limited under mandatory law (in particular for unlawful intent or gross negligence).
        </p>
      </Section>

      <Section heading="8. Changes">
        <p>
          We may modify these terms or the Website at any time. The current version is always
          available on this page. Continued use of the Website after changes take effect constitutes
          acceptance of the revised terms.
        </p>
      </Section>

      <Section heading="9. Governing law & jurisdiction">
        <p>
          These terms are governed by the substantive laws of {company.country}, excluding its
          conflict-of-law rules and any international treaties. Subject to mandatory law, the
          exclusive place of jurisdiction is {company.city}, {company.country}.
        </p>
      </Section>

      <Section heading="10. Contact">
        <p>
          Questions about these terms?{' '}
          <a href={`mailto:${company.email}`} className="text-teal hover:underline">
            {company.email}
          </a>
        </p>
      </Section>
    </LegalLayout>
  )
}
