export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Edussentials Consulting",
    alternateName: "Edussentials",
    url: "https://www.edussentialsconsulting.com",
    logo: "https://www.edussentialsconsulting.com/Edulogo-Wordmark.png",
    description:
      "Boutique admissions consultancy offering founder-led advisory for students applying to top universities globally.",
    founder: {
      "@type": "Person",
      name: "Aniruddha Sapru",
      jobTitle: "Founder and Principal Counsellor",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Management, Indore",
      },
    },
    foundingDate: "2024",
    areaServed: [
      "United States",
      "United Kingdom",
      "Canada",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Netherlands",
      "Singapore",
      "Australia",
      "Ireland",
      "New Zealand",
      "India",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7990082246",
      email: "founder@edussentialsconsulting.com",
      contactType: "Customer Service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Edussentials Consulting",
    image: "https://www.edussentialsconsulting.com/Edulogo-Wordmark.png",
    url: "https://www.edussentialsconsulting.com",
    telephone: "+91-7990082246",
    email: "founder@edussentialsconsulting.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    serviceType: [
      "Admissions Counselling",
      "Profile Building",
      "Essay and Application Support",
      "Career Counselling",
      "Career Labs",
      "Entrance Exam Tutoring",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
