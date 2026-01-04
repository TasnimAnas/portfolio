import "./globals.css";

export const metadata = {
  title: "Tasnim Anas - Software Engineer",
  description:
    "Software and AI Engineer specializing in Machine Learning, Federated Learning, and Full-stack Development.",
  keywords: ["Tasnim", "Anas", "Software Engineer", "Machine Learning"],
  openGraph: {
    title: "Tasnim Anas - Software Engineer",
    description: "Explore the portfolio of Tasnim Ur Rahaman Anas.",
    url: "https://tasnimanas.com/",
    siteName: "Tasnim Anas Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/TasnimAnas/TasnimAnas/refs/heads/main/image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tasnim Ur Rahaman Anas",
    alternateName: ["Tasnim Anas", "Tasnim", "Anas", "Tasnimur", "Rahman"],
    url: "https://tasnimanas.com/",
    image:
      "https://raw.githubusercontent.com/TasnimAnas/TasnimAnas/refs/heads/main/image.png",
    description:
      "Software and AI Engineer specializing in Machine Learning, Federated Learning, and Full-stack Development. Currently researching Privacy-Preserving AI at the University of Trento.",
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
        "@type": "CollegeOrUniversity",
        name: "University of Trento",
        url: "https://www.unitn.it/en/",
        location: {
          "@type": "Place",
          address: "Trento, Italy",
        },
      },
      {
        "@type": "CollegeOrUniversity",
        name: "KIIT University",
        url: "https://kiit.ac.in/",
        location: {
          "@type": "Place",
          address: "Bhubaneswar, India",
        },
      },
    ],
    affiliation: [
      { "@type": "Organization", name: "Techneos", url: "https://techneos.eu" },
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
      "Federated Learning",
      "Software Engineering",
      "Full-stack Development",
      "Privacy-Preserving AI",
    ],
    award: [
      "Invest Your Talent in Italy (IYT) - Italian Government Scholarship",
      "Study in India (SII) - Government of India Scholarship",
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
      "https://x.com/ImTasnimAnas",
      "https://twitter.com/ImTasnimAnas",
      "https://github.com/TasnimAnas",
      "https://scholar.google.com/citations?user=UPwnJoMAAAAJ",
      "https://orcid.org/0009-0007-9391-8732",
      "https://stackoverflow.com/users/15813678/tasnimanas",
      "https://blog.tasnimanas.com/",
      "https://www.facebook.com/tasnim.ur.rahaman.anas",
      "https://www.instagram.com/tasnim__anas",
    ],
  };

  const researchSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Privacy-Preserving Skin Disease Detection Using One-Shot Federated Learning Approach",
    name: "Privacy-Preserving Skin Disease Detection Using One-Shot Federated Learning Approach",
    author: [
      {
        "@type": "Person",
        name: "Tasnim Ur Rahaman Anas",
        url: "https://tasnimanas.com/",
      },
      {
        "@type": "Person",
        name: "Qaiser Razi",
      },
      {
        "@type": "Person",
        name: "Sparsh Bajoria",
      },
    ],
    datePublished: "2025-12-11",
    description:
      "A research article exploring FedD3, a framework combining federated learning with dataset distillation for privacy-preserving medical diagnostics.",
    publisher: {
      "@type": "Organization",
      name: "Springer Nature",
      alternateName: "Cognitive Computation",
    },
    identifier: "doi:10.1007/s12559-025-10531-0",
    url: "https://link.springer.com/article/10.1007/s12559-025-10531-0",
    about: [
      { "@type": "Thing", name: "Federated Learning" },
      { "@type": "Thing", name: "Artificial Intelligence" },
      { "@type": "Thing", name: "Skin Disease Detection" },
    ],
  };

  const researchSchema2 = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers",
    name: "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers",
    author: [
      {
        "@type": "Person",
        name: "Tasnim Ur Rahaman Anas",
        url: "https://tasnimanas.com/",
      },
    ],
    datePublished: "2025-02-19",
    description:
      "A research article on a cognitive network model for approximating and validating diseased skin dermis in remote environments.",
    publisher: {
      "@type": "Organization",
      name: "Springer Nature",
    },
    identifier: "doi:10.1007/978-981-97-7178-3_47",
    url: "https://link.springer.com/chapter/10.1007/978-981-97-7178-3_47",
    about: [
      { "@type": "Thing", name: "Deep Learning" },
      { "@type": "Thing", name: "Artificial Intelligence" },
      { "@type": "Thing", name: "Skin Disease Detection" },
    ],
  };

  return (
    <html lang="en">
      <head>
        <title>Tasnim Anas - Software Engineer</title>
        <meta
          name="description"
          content="Tasnim Ur Rahaman Anas is a Software Engineer and a Research author in the field of Artificial Intelligence, Machine Learning, and Computer Vision"
        />
        <meta property="og:title" content="Tasnim Anas - Software Engineer" />
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
          content="Explore the portfolio of Tasnim Ur Rahaman Anas, a skilled software engineer and research author specializing in full stack development, back end, and machine learning."
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema2) }}
        />
      </head>

      <body className="body">{children}</body>
    </html>
  );
}
