import "./index.css";

const awardsData = [
  "Awarded Invest Your Talent in Italy (IYT) Scholarship - Prestigious Italian Government scholarship supporting international students for master's studies in Italy.",
  "Prestigious Study in India (SII) Scholar – Fully funded Indian Government scholarship for 4 years of bachelor’s study; awarded to top performers of the Ind-SAT test",
  "1st Runner up in GDSC Hackathon - Devsprint",
  "2nd Runner up in Hack for Climate Hackathon - Machine Learning",
  "National rank 1128 in ACM - ICPC India Prelims 2023",
  "Completed Meta Hacker Cup 2022 and Google Kick Start 2021 rounds.",
  "Won multiple regional and national-level debate competitions.",
];

const Awards = () => {
  return (
    <section id="awards" className="awards-section">
      <h1 className="section-heading">Awards</h1>
      <ul className="awards-list">
        {awardsData.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </section>
  );
};

export default Awards;
