import React from "react";
import "../../css/howItWorks.css";

const Howitworks = () => {
  return (
    <div className="howItWorksBackground">
      <div className="howItWorks">
        <div className="howItWorksTitle">HOW IT WORKS</div>

        <p className="howItWorksContaint">
          Second-year undergraduates of the Faculty of IT, University of
          Moratuwa get the opportunity to get registered for HackMoral 5.0 as
          individual competitors. Once you are done with that, you can
          participate with your approved HackerRank account. Further details
          will be received via the email address provided in the registration.
        </p>
        <div className="howItWorksContaint seconddiv">
          The practice playground will take place from 22nd of January 2023. In
          this, you can get a better idea of the way you may need to process for
          the upcoming competitive hours. Once the competition is announced you
          need to discover the solutions for enigmas presented to you.
        </div>
        <div className="howItWorksContaint thirddiv">
          Click below link to enter the practice playground.
        </div>
        <a
          href={"https://www.hackerrank.com/hackmoral-v5-0-practice-playground"}
          target="_blank"
          type="button"
          className="btn-play"
          style={{ textDecoration: "none" }}
        >
          Practice Playground
        </a>
      </div>
    </div>
  );
};
export default Howitworks;
