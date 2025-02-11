import React from "react";
import "./index.css";

const ResearchPublications = () => {
  const publicationsData = [
    {
      title:
        "Privacy-Preserving Skin Disease Detection Using a One-Shot Federated Learning Approach",
      authors: "T. U. R. Anas, Q. Razi, and V. Hassija",
      publication: "Manuscript in Review",
      supervisor: [
        "Dr. Vikas Hassija",
        "https://scholar.google.com/citations?user=X45MXxsAAAAJ",
      ],
    },
    {
      title:
        "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Layers",
      authors:
        "S. Debnath, T. U. R. Anas, B. P. Singh, H. K. Tripathy, and A. H. Dheidan",
      publication: "CEUR Workshop Proceedings [Scopus Indexed] | In Press",
      supervisor: [
        "Dr. Sushruta Mishra",
        "https://scholar.google.com/citations?user=m9kbIrsAAAAJ",
      ],
    },
  ];

  return (
    <section id="research-publications" className="publications-section">
      <div className="publications-container">
        <h2>Research Publications</h2>
        <ul className="publications-list">
          {publicationsData.map((pub, index) => (
            <li key={index} className="publication-item">
              <h3>{pub.title}</h3>
              <p>
                <strong>Authors:</strong> {pub.authors}
              </p>
              <p>
                <strong>Publication:</strong> {pub.publication}
              </p>
              <p>
                <strong>{`Supervisor: `}</strong>
                <a
                  style={{ color: "white" }}
                  href={pub.supervisor[1]}
                  target="_blank"
                >
                  {pub.supervisor[0]}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ResearchPublications;
