import "../../css/TimeLine.css";
import TimeLineLeft from "../../components/TimeLineLeft";
import TimeLineRight from "../../components/TimeLineRight";
const TimeLine = () => {
  return (
    <div style={{ backgroundColor: "#000000" }} className="timeline">
      <center>
        <h6 className="title-timeline">TIMELINE</h6>
      </center>

      <div className="container py-5">
        <div className="main-timeline-4 text-white">
          <TimeLineLeft
            heading="COMMENCEMENT OF REGISTRATION"
            date="15TH JANUARY 2023"
            buttonText="Register Now"
            link="https://forms.gle/CgTR2Fq7DDq2ZfEH7"
            description="Exclusive for second-year undergraduates of the Faculty of Information Technology, University of Moratuwa."
          />
          <TimeLineRight
            heading="AWARENESS SESSION"
            date="18TH JANUARY 2023"
            buttonText="JOIN SESSION"
            visibilityState="hidden"
            description="A brief session on how HackMoral 5.0 and getting familiar with HackerRank platform."
          />
          <TimeLineLeft
            heading="PRACTICE PLAYGROUND"
            date="18TH JANUARY 2023"
            buttonText="WARM UP"
            description="A practice playground will be held as a warm up before HackMoral 5.0"
            link="https://www.hackerrank.com/hackmoral-v5-0-practice-playground"
          />
          <TimeLineRight
            heading="CLOSING OF REGISTRATION"
            date="20TH JANUARY 2023"
            description="All competitors must be registered before the deadline."
            visibilityState="hidden"
          />
          <TimeLineLeft
            heading="THE GAME DAY"
            date="22ND JANUARY 2023"
            buttonText="PLAY NOW"
            description="All registered competitors will participate in the game for 4-hours"
            link="https://www.hackerrank.com/hackmoral-v5-0"
          />
          <TimeLineRight
            heading="ANNOUNCING THE WINNERS"
            date="23RD JANUARY 2023"
            buttonText="LEADERBOARD"
            link="https://www.hackerrank.com/hackmoral-v5-0/leaderboard"
            description="Champion, First Runner Up and Second Runner Up will be announced along with the merit awards for next 10 rankers."
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
};
export default TimeLine;
