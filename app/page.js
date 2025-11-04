import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import ResearchPublications from "./components/ResearchPublications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import Contact from "./components/Contact";
import Awards from "./components/Awards";

const jsonLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tasnimanas.com/#person",
      name: "Tasnim Ur Rahaman Anas",
      url: "https://tasnimanas.com",
      alternateName: [
        "Tasnim Ur Rahman Anas",
        "Tasnim Anas",
        "TasnimAnas",
        "Tasnimur Rahaman Anas",
        "Tasnimur Rahman Anas",
        "Tasnim Rahaman Anas",
        "Tasnim Rahman Anas",
        "Tasnimur Anas",
      ],
      award: "Study in India - SII Government Scholar",
      knowsAbout: "Software Development, Machine Learning, Computer Vision",
      description:
        "Software Engineer and Researcher in the field of Artificial Intelligence, Machine Learning, and Computer Vision",
      sameAs: [
        "https://www.linkedin.com/in/TasnimAnas",
        "https://twitter.com/ImTasnimAnas",
        "https://www.instagram.com/tasnim__anas",
        "https://github.com/TasnimAnas",
        "https://scholar.google.com/citations?user=UPwnJoMAAAAJ",
        "https://www.facebook.com/Tranas18",
        "https://blog.tasnimanas.com/",
        "https://orcid.org/0009-0007-9391-8732",
      ],
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Ollyo",
        url: "https://www.ollyo.com",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Kalinga Institute of Industrial Technology",
          url: "https://kiit.ac.in",
        },
      ],
      subjectOf: [
        {
          "@id": "https://tasnimanas.com/#article",
        },
        {
          "@type": "NewsArticle",
          headline: "KSAC Organizes International Student Podcast",
          url: "https://news.kiit.ac.in/ksac/ksac-organizes-international-student-podcast/",
          publisher: {
            "@type": "Organization",
            name: "KIIT News and Events",
            url: "https://news.kiit.ac.in/",
          },
          image:
            "https://news.kiit.ac.in/wp-content/uploads/2022/03/KSACStudentPodcast5-750x430.jpg",
          thumbnailUrl:
            "https://news.kiit.ac.in/wp-content/uploads/2022/03/KSACStudentPodcast5.jpg",
          datePublished: "2022-03-02T04:23:00+00:00",
          author: {
            "@type": "Organization",
            name: "KIIT News and Events",
            url: "https://news.kiit.ac.in/",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://tasnimanas.com/#website",
      url: "https://tasnimanas.com",
      name: "Tasnim Ur Rahaman Anas",
      publisher: { "@id": "https://tasnimanas.com/#person" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://tasnimanas.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ImageObject",
      "@id": "https://tasnimanas.com/profile.webp",
      url: "https://tasnimanas.com/profile.webp",
      width: "2400",
      height: "1260",
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://tasnimanas.com/#webpage",
      url: "https://tasnimanas.com/",
      name: "Software Developer &amp; Researcher | Tasnim Ur Rahaman Anas",
      datePublished: "2023-12-11T22:16:32-05:00",
      dateModified: "2025-03-25T13:15:40-05:00",
      about: { "@id": "https://tasnimanas.com/#person" },
      isPartOf: { "@id": "https://tasnimanas.com/#website" },
      primaryImageOfPage: {
        "@id": "https://tasnimanas.com/profile.webp",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Article",
      "@id": "https://tasnimanas.com/#article",
      name: "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers",
      headline:
        "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers",
      abstract:
        "The human body’s largest organ is its skin, thus, skin diseases are also one of the most common health problems around the world. In developing countries like India, there is 1 doctor for every 834 people and an alarming 1 dermatologist for every 1.40 lakh people. This is way below the current requirement. Most of the dermatologists are concentrated in the urban areas of the country. People in remote areas generally remain unaware of the problems or choose to ignore small symptoms like lesions on their skin until it is too late, which often leads to life-endangering situations. To help solve the problem of skin diseases, we have developed a deep learning model using CNN for differentiating between normal and diseased skin and further classifying the skin disease into 8 classes with an accuracy of 93.1%.",
      url: "https://link.springer.com/chapter/10.1007/978-981-97-7178-3_47",
      datePublished: "2025-02-19T00:00:00+00:00",
      sameAs: [
        "https://doi.org/10.1007/978-981-97-7178-3_47",
        "https://www.researchgate.net/publication/389099013_Diseased_Skin_Dermis_Approximation_and_Validation_in_Remote_Space_Using_a_Cognitive_Network_with_Multiple_Hidden_Layers",
        "https://link.springer.com/chapter/10.1007/978-981-97-7178-3_47",
      ],
      author: [
        {
          "@id": "https://tasnimanas.com/#person",
        },
      ],
      isPartOf: {
        "@type": "Book",
        name: "Proceedings of Fifth Doctoral Symposium on Computational Intelligence (DoSCI 2023)",
        publisher: {
          "@type": "Organization",
          name: "Springer, Singapore",
        },
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <div className={styles.App}>
        <Navbar />
        <About />
        <Education />
        <WorkExperience />
        <ResearchPublications />
        <Skills />
        <Projects />
        <Coursework />
        <Awards />
        <Contact />
      </div>
    </>
  );
}
