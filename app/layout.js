import "./globals.css";

export const metadata = {
  keywords: "Tasnim, Anas, Software, Engineer, Machine, Learning",
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://tasnimanas.com/#person",
    name: "Tasnim Anas",
    alternateName: ["Tasnim Ur Rahaman Anas", "Tasnim", "Anas"],
    url: "https://tasnimanas.com/",
    image:
      "https://raw.githubusercontent.com/TasnimAnas/TasnimAnas/refs/heads/main/image.png",
    description:
      "Software and AI Engineer with research contributions in machine learning and computer vision.",
    jobTitle: "Software & AI Engineer",
    nationality: {
      "@type": "Country",
      name: "Bangladesh",
    },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trento",
        addressCountry: "Italy",
      },
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Trento",
        url: "https://www.unitn.it/en",
      },
      {
        "@type": "EducationalOrganization",
        name: "Kalinga Institute of Industrial Technology",
        url: "https://kiit.ac.in",
      },
    ],
    affiliation: [
      { "@type": "Organization", name: "Téchnéos", url: "https://techneos.eu" },
      { "@type": "Organization", name: "Ollyo", url: "https://ollyo.com" },
      {
        "@type": "Organization",
        name: "HighRadius",
        url: "https://www.highradius.com",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Software Engineering",
    ],
    award: [
      "Invest Your Talent in Italy (IYT) – Italian Government Scholarship",
      "Study in India (SII) – Government of India Scholarship",
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "ORCID",
        value: "0009-0007-9391-8732",
        url: "https://orcid.org/0009-0007-9391-8732",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/TasnimAnas",
      "https://github.com/TasnimAnas",
      "https://scholar.google.com/citations?user=UPwnJoMAAAAJ",
      "https://orcid.org/0009-0007-9391-8732",
      "https://stackoverflow.com/users/15813678/tasnimanas",
      "https://blog.tasnimanas.com/",
      "https://www.facebook.com/tasnim.ur.rahaman.anas",
      "https://www.instagram.com/tasnim__anas",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tasnimanas.com/#website",
    url: "https://tasnimanas.com/",
    name: "Tasnim Anas",
    publisher: { "@type": "Person", "@id": "https://tasnimanas.com/#person" },
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://tasnimanas.com/#webpage",
    url: "https://tasnimanas.com/",
    name: "Tasnim Anas — Software & AI Engineer",
    about: { "@type": "Person", "@id": "https://tasnimanas.com/#person" },
  };

  const article1Schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": "https://doi.org/10.1007/s12559-025-10531-0",
    headline:
      "Privacy-Preserving Skin Disease Detection Using One-Shot Federated Learning Approach",
    datePublished: "2025-12-11T08:00:00+01:00",
    author: [
      {
        "@type": "Person",
        "@id": "https://tasnimanas.com/#person",
        name: "Tasnim Ur Rahaman Anas",
      },
      { "@type": "Person", name: "Qaiser Razi" },
    ],
    publisher: { "@type": "Organization", name: "Springer" },
    isPartOf: { "@type": "Periodical", name: "Cognitive Computation" },
    sameAs: "https://doi.org/10.1007/s12559-025-10531-0",
  };

  const article2Schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": "https://doi.org/10.1007/978-981-97-7178-3_47",
    headline:
      "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers",
    datePublished: "2025-02-19T08:00:00+01:00",
    author: [
      {
        "@type": "Person",
        "@id": "https://tasnimanas.com/#person",
        name: "Tasnim Ur Rahaman Anas",
      },
      { "@type": "Person", name: "S. Debnath" },
    ],
    publisher: { "@type": "Organization", name: "Springer" },
    isPartOf: {
      "@type": "Book",
      name: "Proceedings of Fifth Doctoral Symposium on Computational Intelligence (DoSCI 2023)",
    },
    sameAs: "https://doi.org/10.1007/978-981-97-7178-3_47",
  };

  return (
    <html lang="en">
      <head>
        <title>Tasnim Anas — Software Engineer</title>
        <meta
          name="description"
          content="Tasnim Ur Rahaman Anas is a Software Engineer and a Research author in the field of Artificial Intelligence, Machine Learning, and Computer Vision"
        />
        <meta property="og:title" content="Tasnim Anas — Software Engineer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Tasnim Ur Rahaman Anas, a skilled software engineer and research author specializing in full stack development, front end, back end, and machine learning."
        />
        <meta property="og:url" content="https://tasnimanas.com/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/TasnimAnas/TasnimAnas/refs/heads/main/image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tasnim Anas — Software Engineer" />
        <meta name="twitter:site" content="@ImTasnimAnas" />
        <meta name="twitter:creator" content="@ImTasnimAnas" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Tasnim Ur Rahaman Anas, a skilled software engineer and research author specializing in full stack development, front end, back end, and machine learning."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/TasnimAnas/TasnimAnas/refs/heads/main/image.png"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tasnimanas.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article1Schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article2Schema) }}
        />
      </head>

      <body className="body">{children}</body>
    </html>
  );
}
