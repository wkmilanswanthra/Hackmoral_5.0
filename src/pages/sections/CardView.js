import "../../css/card.css";
import Card from "../../components/Card";
import problem from "../../assets/problem.jpg";
import fun from "../../assets/fun.png";
import coding from "../../assets/coding.jpg";
import prbcir from "../../assets/problem.svg";
import funcir from "../../assets/fun.svg";
import codingcir from "../../assets/coding.svg";
function App() {
  return (
    <div style={{"backgroundColor":"#260101FF"}} className="cards">
      <div className="container">
        <div className="row p-5">
          <div className="col-md-4 pb-3">
            <Card
              title="Problem Solving"
              description="Hack Moral 4.0 lets you gain an opportunity to assess and identify potential talent in problem-solving among like-minded people."
              bg={problem}
              circleImage={prbcir}
            ></Card>
          </div>
          <div className="col-md-4 pb-3">
            <Card
              title="Fun"
              description="Take these few hours as indeed another great occasion of the FIT'19 Family."
              bg={fun}
              circleImage={funcir}
            ></Card>
          </div>
          <div className="col-md-4 pb-3">
            <Card
              title="Coding"
              description="Ensure that every single technophile engages in problem-solving in the most favourable language and gains self-confidence to achieving victory."
              bg={coding}
              circleImage={codingcir}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
