import Card from "../components/Card";
import "../css/card.css"
import problem from "../assets/problem.svg"
import fun from "../assets/fun.svg"
import coding from "../assets/coding.svg"
const CardView = () =>{
    return (
        <div style={{"backgroundColor":"#000613"}}>     
          
        <div className="container" >
            <div className="row">
            <Card photo={problem} heading="PROBLEM SOLVING" description="Hack Moral 5.0 lets you gain an opportunity to assess and identify potential talent in problem-solving among like-minded people." />
            <Card photo={fun} heading="FUN" description="Take these few hours as indeed another great occasion of the FIT'20 Family." />
            <Card photo={coding} heading="CODING" description="Ensure that every single technophile engages in problem-solving in the most favourable language and gains self-confidence to achieving victory." />
               
               

            </div>
        </div>
        </div>
    )

}
export default CardView;