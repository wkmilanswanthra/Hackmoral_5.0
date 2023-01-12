import React from "react";
import uomLogo from "../../assets/uomlogo.png"
import intecsLogo from "../../assets/intecslogo.png"
import "../../css/footer.css"
import twitter from "../../assets/footer/tw.svg"
import facebook from "../../assets/footer/fb.svg"
import linkedin from "../../assets/footer/li.svg"
import intecs from "../../assets/footer/bb.svg"
const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-container" >
                <div className="container"><br></br>
                    <div className="row">
                        <div className="col-6">
                            <img className="uom-logo" src={uomLogo} alt="UOM Logo" style={{ "height": "100px", "float": "right" }}></img>
                        </div>
                        <div className="col-6">
                            <img className="intecs-logo" src={intecsLogo} alt="UOM Logo" style={{ "height": "100px", "float": "left" }}></img>
                        </div>
                    </div>
                    <div className="mt-3">
                        <center>
                            <a href="https://twitter.com/intecsfit?lang=en" target="_blank">
                                {/* <img src={twitter} alt="" style={{ "height": "26px" }} /> */}
                                Twitter
                            </a> &nbsp;&nbsp;
                            <a href="https://www.facebook.com/intecs.lk/" target="_blank">
                                {/* <img src={facebook} alt="" style={{ "height": "26px" }} /> */}
                                Facebook
                            </a>&nbsp;&nbsp;
                            <a href="https://www.linkedin.com/company/intecs-uom/?originalSubdomain=lk" target="_blank">
                                {/* <img src={linkedin} alt="" style={{ "height": "26px" }} /> */}
                                LinkedIn
                            </a>&nbsp;&nbsp;
                            <a href="http://intecs.itfac.mrt.ac.lk/" target="_blank">
                                {/* <img src={intecs} alt="" style={{ "height": "26px" }} /> */}
                                Intecs
                            </a>
                            <div className="text-white mt-3">Copyright © 2023 | Crafted by INTECS</div><br></br><br></br>
                        </center>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Footer;