import styles from "./index.module.css";

const ResearchPublications = () => {
  const publicationsData = [
    {
      title:
        "Diseased Skin Dermis Approximation and Validation in Remote Space Using a Cognitive Network with Multiple Hidden Layers",
      authors:
        "S. Debnath, T. U. R. Anas, B. P. Singh, H. K. Tripathy, and A. H. Dheidan",
      publication:
        "Fifth Doctoral Symposium on Computational Intelligence 2024 [Scopus Indexed], Springer Nature",
      supervisor: [
        "Dr. Sushruta Mishra",
        "https://scholar.google.com/citations?user=m9kbIrsAAAAJ",
      ],
      link: "https://link.springer.com/chapter/10.1007/978-981-97-7178-3_47",
    },
    /*
    {
      title:
        "Privacy-Preserving Skin Disease Detection Using One-Shot Federated Learning Approach",
      authors:
        "T. U. R. Anas, Q. Razi, and V. Hassija, A Pandey, and GSS Chalapathi",
      publication: "Manuscript in Review",
      supervisor: [
        "Dr. Vikas Hassija",
        "https://scholar.google.com/citations?user=X45MXxsAAAAJ",
      ],
    },
    */
  ];

  return (
    <section
      id="research-publications"
      className={styles["publications-section"]}
    >
      <div className={styles["publications-container"]}>
        <h2>Research Publications</h2>
        <ul className={styles["publications-list"]}>
          {publicationsData.map((pub, index) => (
            <li key={index} className={styles["publication-item"]}>
              {pub.link && (
                <a
                  style={{ color: "white", textDecoration: "underline" }}
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>{pub.title}</h3>
                </a>
              )}
              {!pub.link && <h3>{pub.title}</h3>}
              <p>
                <strong>Authors:</strong> {pub.authors}
              </p>
              <p>
                <strong>Publication:</strong> {pub.publication}
              </p>
              <p>
                <strong>{`Supervisor: `}</strong>
                <a
                  style={{ color: "white", textDecoration: "underline" }}
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
