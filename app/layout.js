import "./globals.css";

export const metadata = {
  keywords: "Tasnim, Anas, Software, Engineer, Machine, Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tasnim Anas — Software Engineer</title>
        <meta
          name="description"
          content="Tasnim Ur Rahaman Anas is a Software Engineer and a Researcher in the field of Artificial Intelligence, Machine Learning, and Computer Vision"
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
                  "name": "Tasnim Anas",
                  "alternateName": [
                    "Tasnim",
                    "Anas",
                    "Tasnim Ur Rahaman Anas"
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
                    "https://apps.apple.com/us/developer/tasnim-ur-rahaman-anas/id1782167326",
                    "https://play.google.com/store/apps/dev?id=6348998514861415043",
                    "https://tasnimanas.com"
                  ]
                }
            `}
        </script>
      </head>

      <body className="body">{children}</body>
    </html>
  );
}
