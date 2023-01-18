import line from "../../assets/side-back.png";
import React from "react";
import "../../css/intro.css";

const Introduction = () => {
  return (
    <div className="section introduction">
      {/* <div className="fade-section"></div> */}
      <div className="title-text-intro">
        <div className="title-intro">HackMoral 5.0</div>
        <p className="text-intro">
          HackMoral 5.0 is a mini hackathon hosted by the INTECS of the Faculty
          of Information Technology, University of Moratuwa. It is a focused
          4-hour competition. All the challenges that the contestants are facing
          will be set by the HackMoral team of exceptional question moderators.
          This event is exclusive for technophiles of FIT20. During the event,
          you can showcase your problem-solving skills to hunt for points by
          reaching out to the solutions.
        </p>
        <p className="text-intro">
          Live leaderboard metrics will let you know how your colleagues are
          performing and will keep you motivated to drive results by improving
          on your past performance. Tune the pitch and let the game on!
        </p>
      </div>
      <div className="img-intro">
        <img src={line} alt="" />
      </div>
    </div>
  );
};
export default Introduction;
