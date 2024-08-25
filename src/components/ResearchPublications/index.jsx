import React from "react";
import "./index.css";

const ResearchPublications = () => {
  const publicationsData = [
    {
      title:
        "Implementation of a One-Shot Federated Learning Framework for Privacy Preservation in Skin Disease Detection",
      authors: "T. U. R. Anas, S. Debnath, and V. Hassija",
      publication: "In Review",
    },
    {
      title:
        "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Layers",
      authors:
        "S. Debnath, T. U. R. Anas, B. P. Singh, H. K. Tripathy, and A. H. Dheidan",
      publication:
        "International Conference on Computing Systems and Intelligent Applications (ComSIA 2024) | CEUR Workshop Proceedings [Scopus Indexed] | In Press",
    },
  ];

  return (
    <section id="publications" className="publications-section">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ResearchPublications;
