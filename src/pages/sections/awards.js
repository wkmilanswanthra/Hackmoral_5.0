import "../../css/awards.css"
import logo from "../../assets/HackMoral4.0-Logo.png"
import React from "react";
const Awards = () =>{
    return (
        <div className="awards-container">
            <div className="title-awards">
                Awards
            </div>
            <div className="awards">
                <div className="award-set aw-3">
                    <div className="award-name" >2<sup>nd</sup> runner up</div>
                    <img className="awards-img" style={{"border": "10px outset burlywood"}} src={logo} alt=""/>
                </div>
                <div className="award-set">
                    <div className="award-name" ><strong>Champion</strong></div>
                    <img className="awards-img" style={{"border": "10px outset gold"}} src={logo} alt=""/>
                </div>
                <div className="award-set aw-3">
                    <div className="award-name">1<sup>st</sup> runner up</div>
                    <img className="awards-img" style={{"border": "10px outset silver"}} src={logo} alt=""/>
                </div>

            </div>
        </div>
    );
}

export default Awards;