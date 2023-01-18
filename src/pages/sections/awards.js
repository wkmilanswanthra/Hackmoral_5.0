import "../../css/awards.css";
import logo from "../../assets/transparent logo.png";
import gold from "../../assets/gold.jpg";
import silver from "../../assets/silver.jpg";
import bronze from "../../assets/bronze.jpg";
import React from "react";
const Awards = () => {
  return (
    <div className="awards-container">
      <div className="title-awards">Awards</div>
      <div className="awards">
        <div className="award-set aw-3">
          <div className="award-name">
            1<sup>ST</sup> RUNNER UP
          </div>
          <img
            className="awards-img"
            style={{ border: "10px outset silver" }}
            src={silver}
            alt=""
          />
        </div>
        <div className="award-set">
          <div className="award-name">
            <strong>CHAMPION</strong>
          </div>
          <img
            className="awards-img"
            style={{ border: "10px outset gold" }}
            src={gold}
            alt=""
          />
        </div>
        <div className="award-set aw-3">
          <div className="award-name">
            2<sup>ND</sup> RUNNER UP
          </div>
          <img
            className="awards-img"
            style={{ border: "10px outset burlywood" }}
            src={bronze}
            alt=""
          />
        </div>
      </div>
      {/* <div className="awards-merit">Merit Awards</div> */}
    </div>
  );
};

export default Awards;
