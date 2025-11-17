import "./globals.css";

export const metadata = {
  title: "Tasnim Ur Rahaman Anas",
  description:
    "Portfolio website of software engineer Tasnim Ur Rahaman Anas who is a full stack, front end, back end, machine learning developer",
  keywords: "Tasnim, Anas, Software, Engineer, Machine, Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tasnim Anas — Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer and Researcher in the field of Artificial Intelligence, Machine Learning, and Computer Vision"
        />
        <meta property="og:title" content="Tasnim Anas — Software Engineer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Tasnim Ur Rahaman Anas, a skilled software engineer specializing in full stack development, front end, back end, and machine learning."
        />
        <meta property="og:url" content="https://tasnimanas.com/" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/80065444?v=4"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tasnim Anas — Software Engineer" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Tasnim Ur Rahaman Anas, a skilled software engineer specializing in full stack development, front end, back end, and machine learning."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/80065444?v=4"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tasnimanas.com" />

        {/* Google Knowledge Panel Structured Data */}
        <script type="application/ld+json">
          {`
              {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Tasnim Ur Rahaman Anas",
                  "alternateName": [
                    "Tasnim",
                    "Tasnim Ur",
                    "Tasnimur",
                    "TasnimAnas",
                    "Tasnimur Rahman",
                    "Tasnimur Rahaman",
                    "Tasnim Ur Rahaman",
                    "Tasnim Ur Rahman"
                  ],
                  "url": "https://tasnimanas.com",
                  "jobTitle": "Software Engineer",
                  "image": "https://avatars.githubusercontent.com/u/80065444?v=4",
                  "sameAs": [
                    "https://www.linkedin.com/in/TasnimAnas",
                    "https://twitter.com/ImTasnimAnas",
                    "https://www.instagram.com/tasnim__anas",
                    "https://github.com/TasnimAnas",
                    "https://scholar.google.com/citations?user=UPwnJoMAAAAJ",
                    "https://www.facebook.com/tasnim.ur.rahaman.anas",
                    "https://blog.tasnimanas.com/",
                    "https://orcid.org/0009-0007-9391-8732",
                    "https://tasnimanas.com"
                  ],
                  "award": [
                    "Invest Your Talent in Italy - IYT (Italian Government Scholarship) Winner",
                    "Study in India - SII (Government of India Scholarship) Winner"
                  ],
                  "knowsAbout": "Software Development, Machine Learning, Artificial Intelligence, Computer Vision",
                  "alumniOf": [
                    {
                      "@type": "EducationalOrganization",
                      "name": "University of Trento",
                      "url": "https://www.unitn.it/en"
                    },
                    {
                      "@type": "EducationalOrganization",
                      "name": "Kalinga Institute of Industrial Technology",
                      "url": "https://kiit.ac.in"
                    }
                  ],
                  "subjectOf": [
                    {
                      "@id": "https://tasnimanas.com/#article"
                    },
                    {
                      "@type": "NewsArticle",
                      "headline": "KSAC Organizes International Student Podcast",
                      "url": "https://news.kiit.ac.in/ksac/ksac-organizes-international-student-podcast/",
                      "publisher": {
                        "@type": "Organization",
                        "name": "KIIT News and Events",
                        "url": "https://news.kiit.ac.in/"
                      },
                      "image": "https://news.kiit.ac.in/wp-content/uploads/2022/03/KSACStudentPodcast5-750x430.jpg",
                      "thumbnailUrl": "https://news.kiit.ac.in/wp-content/uploads/2022/03/KSACStudentPodcast5.jpg",
                      "datePublished": "2022-03-02T04:23:00+00:00",
                      "author": {
                        "@type": "Organization",
                        "name": "KIIT News and Events",
                        "url": "https://news.kiit.ac.in/"
                      }
                    }
                  ]
                }
            `}
        </script>
      </head>

      <body className="body">{children}</body>
    </html>
  );
}
