// Central company / legal data used across all legal pages.
// Fields left as empty strings are intentionally hidden on the rendered pages
// until the details are available. Fill them in to make the lines appear.
//
// STATUS (June 2026): PeakForce AG is being established in Switzerland. Once the
// entry in the Swiss commercial register (Handelsregister) is complete, add the
// street address, CHE number and VAT number below — the legal pages will then
// display them automatically.
export const company = {
  legalName: 'PeakForce AG',
  brand: 'PeakForce',
  // Registered address — leave empty to hide the street / postal lines.
  street: '',
  postalCode: '',
  city: 'Zürich',
  country: 'Switzerland',
  // Swiss commercial register identifier, e.g. "CHE-123.456.789" — leave empty to hide.
  cheNumber: '',
  // Swiss VAT number, e.g. "CHE-123.456.789 MWST" — leave empty to hide.
  vatId: '',
  // Person authorised to represent the company (board / management).
  managingDirector: 'Daniele Pauli',
  // Contact
  email: 'hello@peakforce.com',
  privacyEmail: 'hello@peakforce.com',
  website: 'peakforce-solutions.com',
  // Last update of the legal documents (keep in sync when content changes).
  lastUpdated: '17 June 2026',
}

// "City, Country" — short location used wherever a full address isn't shown.
export const companyLocation = [company.city, company.country].filter(Boolean).join(', ')
