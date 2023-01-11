import "../../css/TimeLine.css"
import TimeLineLeft from "../../components/TimeLineLeft";
import TimeLineRight from "../../components/TimeLineRight";
const TimeLine = () => {
    return (
        <div style={{"backgroundColor":"#260101"}} className="timeline">
            <div className="container py-5">
                <div className="main-timeline-4 text-white">
                    <TimeLineLeft
                        heading="COMMENCEMENT OF REGISTRATION"
                        date="12TH FEBRUARY 2022"
                        buttonText="Google.com"
                        link="https://www.google.com"
                        description="Exclusive for second-year undergraduates of the Faculty of Information Technology, University of Moratuwa."
                    />
                    <TimeLineRight
                        heading="AWARENESS SESSION"
                        date="14TH FEBRUARY 2022"
                        buttonText="Button Text"
                        description="A brief discussion will be conducted to make the competitors aware of Hack Moral 4.0."
                    />
                    <TimeLineLeft
                        heading="OPENING THE PLAYGROUND"
                        date="16TH FEBRUARY 2022"
                        buttonText="Button Text"
                        description="This is a practice playground set for the competitors to sharpen their skills and computational thinking before the upcoming competitive hours."
                    />
                    <TimeLineRight
                        heading="REGISTRATION CLOSES"
                        date="17TH FEBRUARY 2022"
                        buttonText="Button Text"
                        description="Every competitor must be registered for the competition before the deadline."
                    />
                    <TimeLineLeft
                        heading="THE GAME DAY"
                        date="19TH FEBRUARY 2022"
                        buttonText="Button Text"
                        description="It's the day! Competitors can make their way to the winners' table by untangling the challenges given via HackerRank playground."
                    />
                    <TimeLineRight
                        heading="ANNOUNCING THE WINNERS"
                        date="20TH FEBRUARY 2022"
                        buttonText="Button Text"
                        description="This commences at the end of the event and winners will be announced."
                    />
                    <TimeLineLeft
                        heading="DISTRIBUTING E-CERTIFICATES"
                        date="22ND FEBRUARY 2022"
                        buttonText="Button Text"
                        description="Finally, certificates for the competitors will be distributed and the event will be concluded."
                    />
                    {/* <TimeLineLeft
                    heading="COMMENCEMENT OF REGISTRATION"
                    date="May 28"
                    description="Contest Registration"
                />
                <TimeLineRight
                    heading="Contest"
                    date="May 28"
                    description="Contest Registration"
                /> */}
                </div>
            </div>
        </div>
    );
}
export default TimeLine;