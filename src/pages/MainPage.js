import React from "react";
import './howItWorks.css'
const MainPage = () => {
    return (
        <React.Fragment>
            <div className="howItWorksBackground">
                <div className="howItWorks">
                    <div className="howItWorksTitle">
                         HOW IT WORKS
                    </div>
                
                     <p className="howItWorksContaint">
                         Second-year undergraduates of the Faculty of IT, University of Moratuwa get the opportunity to get registered for Hack Moral 4.0 as individual competitors. Once you are done with that can participate with your approved HackerRank account. Further details will be received via the email address provided in the registration.
                     </p>
                     <div className="howItWorksContaint seconddiv" >
                            The practice playground will take place from the 16th of February 2022 in which you can get a better idea of the way you may need to process for the upcoming competitive hours. Once the competition is announced you need to discover the solutions for enigmas presented to you.
                     </div>
                     <div className="howItWorksContaint thirddiv"> Find this great referal playlist for get an exact idea about Hackmoral Array. </div>
                     <div className="youTube"> <a href="www.youtube.com" target="_blank">  <button className="youTube" >
                             WATCH ON YOUTUBE
                      </button></a></div>                
                
                
                </div>
            </div>
  
        </React.Fragment>
    );
}
export default MainPage;