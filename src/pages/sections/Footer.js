import React from "react";
import uomLogo from "../../assets/uomlogo.png";
import intecsLogo from "../../assets/intecslogo.png";
import "../../css/footer.css";
import { SocialIcon } from "react-social-icons";
// import twitter from "../../assets/footer/tw.svg";
// import facebook from "../../assets/footer/fb.svg";
// import linkedin from "../../assets/footer/li.svg";
// import intecs from "../../assets/footer/bb.svg";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="container">
          <br></br>
          <div className="row" style={{ alignContent: "center" }}>
            <div className="col-6">
              <img
                className="uom-logo"
                src={uomLogo}
                alt="UOM Logo"
                style={{ height: "80px", float: "right" }}
              ></img>
            </div>
            <div className="col-6">
              <img
                className="intecs-logo"
                src={intecsLogo}
                alt="UOM Logo"
                style={{ height: "70px", float: "left" }}
              ></img>
            </div>
          </div>
          <div className="mt-3">
            <center>
              <SocialIcon
                url="https://twitter.com/intecsfit?lang=en"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.linkedin.com/company/intecs-uom/?originalSubdomain=lk"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.facebook.com/intecs.lk/"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="http://intecs.itfac.mrt.ac.lk/"
                bgColor="black"
                fgColor="white"
              />

              <div className="text-white mt-3">
                Copyright © 2023 | Crafted by INTECS
              </div>
              <br></br>
              <br></br>
            </center>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
