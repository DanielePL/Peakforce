import LegalLayout, { Section } from './LegalLayout'
import { company, companyLocation } from './companyInfo'

export default function Impressum() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Impressum"
      intro="Legal notice and provider identification."
      lastUpdated={company.lastUpdated}
    >
      <Section heading="Company">
        <p>
          <strong className="text-foreground">{company.legalName}</strong>
          {company.street && (
            <>
              <br />
              {company.street}
            </>
          )}
          {(company.postalCode || company.city) && (
            <>
              <br />
              {[company.postalCode, company.city].filter(Boolean).join(' ')}
            </>
          )}
          <br />
          {company.country}
        </p>
      </Section>

      <Section heading="Represented by">
        <p>{company.managingDirector}</p>
      </Section>

      <Section heading="Contact">
        <p>
          Email:{' '}
          <a href={`mailto:${company.email}`} className="text-teal hover:underline">
            {company.email}
          </a>
          <br />
          Web: {company.website}
        </p>
      </Section>

      {(company.cheNumber || company.vatId) && (
        <Section heading="Commercial register & VAT">
          <p>
            Commercial Register (Handelsregister), {company.country}
            {company.cheNumber && (
              <>
                <br />
                Company identification number (UID): {company.cheNumber}
              </>
            )}
            {company.vatId && (
              <>
                <br />
                VAT number: {company.vatId}
              </>
            )}
          </p>
        </Section>
      )}

      <Section heading="Responsible for content">
        <p>
          {company.managingDirector}
          <br />
          {company.legalName}, {companyLocation}
        </p>
      </Section>

      <Section heading="Disclaimer">
        <p>
          The content of this website has been prepared with the greatest possible care. However,{' '}
          {company.legalName} does not guarantee the accuracy, completeness, or timeliness of the
          information provided. Liability claims regarding damage caused by the use of any
          information provided, including any kind of information which is incomplete or incorrect,
          are excluded to the extent permitted by law.
        </p>
      </Section>

      <Section heading="Links">
        <p>
          References and links to third-party websites lie outside our area of responsibility. We
          accept no responsibility for any such websites. Access to and use of such websites is at
          the user's own risk.
        </p>
      </Section>

      <Section heading="Copyright">
        <p>
          The copyright and all other rights to content, images, photos, and other files on this
          website belong exclusively to {company.legalName} or the specifically named rights
          holders. Reproduction of any element requires the prior written consent of the copyright
          holder.
        </p>
      </Section>
    </LegalLayout>
  )
}
