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
          {
            '{"@context":"https://schema.org","@type":"ProfilePage","dateCreated":"2024-01-01T00:00:00Z","dateModified":"2024-01-01T00:00:00Z","mainEntity":{"@type":"Person","@id":"#TasnimAnas","name":"Tasnim Anas","alternateName":["Tasnim","Anas","Tasnim Ur Rahaman Anas"],"image":"https://avatars.githubusercontent.com/u/80065444?v=4","description":"Software Engineer","jobTitle":"Software Engineer","worksFor":[{"@type":"Organization","name":"Téchnéos","url":"https://techneos.eu"},{"@type":"Organization","name":"Ollyo","url":"https://ollyo.com"},{"@type":"Organization","name":"HighRadius","url":"https://www.highradius.com"}],"hasOccupation":[{"@type":"Occupation","name":"Software & AI Engineer","description":"Responsible for developing scalable AI software systems.","occupationLocation":{"@type":"AdministrativeArea","name":"Trento, Italy"}},{"@type":"Occupation","name":"Software Engineer","description":"Worked on developing no-code Wordpress website builder droip (https://droip.com).","occupationLocation":{"@type":"AdministrativeArea","name":"Dhaka, Bangladesh"}},{"@type":"Occupation","name":"Software Engineer Intern","description":"Developed AI-powered solutions for automating accounts receivable and credit management processes.","occupationLocation":{"@type":"AdministrativeArea","name":"Bhubaneswar, India"}}],"sameAs":["https://www.linkedin.com/in/TasnimAnas","https://twitter.com/ImTasnimAnas","https://www.instagram.com/tasnim__anas","https://github.com/TasnimAnas","https://scholar.google.com/citations?user=UPwnJoMAAAAJ","https://www.facebook.com/tasnim.ur.rahaman.anas","https://blog.tasnimanas.com/","https://orcid.org/0009-0007-9391-8732","https://apps.apple.com/us/developer/tasnim-ur-rahaman-anas/id1782167326","https://play.google.com/store/apps/dev?id=6348998514861415043"],"award":["Invest Your Talent in Italy - IYT (Italian Government Scholarship) Winner","Study in India - SII (Government of India Scholarship) Winner"],"knowsAbout":"Software Development, Machine Learning, Artificial Intelligence, Computer Vision","alumniOf":[{"@type":"EducationalOrganization","name":"University of Trento","url":"https://www.unitn.it/en"},{"@type":"EducationalOrganization","name":"Kalinga Institute of Industrial Technology","url":"https://kiit.ac.in"}],"subjectOf":[{"@type":"NewsArticle","headline":"KSAC Organizes International Student Podcast","url":"https://news.kiit.ac.in/ksac/ksac-organizes-international-student-podcast/","publisher":{"@type":"Organization","name":"KIIT News and Events","url":"https://news.kiit.ac.in/"},"image":"https://news.kiit.ac.in/wp-content/uploads/2022/03/KSACStudentPodcast5-750x430.jpg","thumbnailUrl":"https://news.kiit.ac.in/wp-content/uploads/2022/03/KSACStudentPodcast5.jpg","datePublished":"2022-03-02T04:23:00+00:00","author":{"@type":"Organization","name":"KIIT News and Events","url":"https://news.kiit.ac.in/"}},{"@type":"ScholarlyArticle","name":"Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers","headline":"Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers","author":[{"@type":"Person","name":"S. Debnath","url":"https://scholar.google.com/citations?user=uJz9qyAAAAAJ"},{"@id":"#TasnimAnas"},{"@type":"Person","name":"B. P. Singh"},{"@type":"Person","name":"H. K. Tripathy","url":"https://scholar.google.com/citations?user=juILRYkAAAAJ"},{"@type":"Person","name":"A. H. Dheidan"}],"datePublished":"2025-02-19T08:00:00+06:00","isPartOf":{"@type":"Book","name":"Proceedings of Fifth Doctoral Symposium on Computational Intelligence (DoSCI 2023)","publisher":{"@type":"Organization","name":"Springer"},"isPartOf":{"@type":"CreativeWorkSeries","name":"Lecture Notes in Networks and Systems","identifier":"1096"}},"identifier":"https://doi.org/10.1007/978-981-97-7178-3_47","url":"https://doi.org/10.1007/978-981-97-7178-3_47"}]}}'
          }
        </script>
      </head>

      <body className="body">{children}</body>
    </html>
  );
}
