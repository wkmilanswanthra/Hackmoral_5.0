import line from "../../assets/lines.png";
import React from "react";
import '../../css/intro.css'

const Introduction = () =>{
    return(
        <div className="section introduction">
            <div className="fade-section"></div>
            <div className="title-intro">
                Hackmoral 5.0
            </div>
            <p className="text-intro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque dolorum ex
                itaque
                suscipit! Animi blanditiis delectus esse eum, maiores natus nemo. Asperiores atque
                consectetur
                cupiditate facere laudantium nemo perferendis saepe temporibus? Aliquid, dolores, dolorum!
                Aliquid
                aperiam consectetur deleniti excepturi in ipsum nihil non obcaecati rem similique? Deserunt,
                quae,
                voluptatum?
            </p>
            <p className="text-intro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque dolorum ex
                itaque
                suscipit! Animi blanditiis delectus esse eum, maiores natus nemo. Asperiores atque
                consectetur
                cupiditate
            </p>
            <div className="glass"></div>
            <img src={line} alt="" className="line-img"/>
            <div className="fade-section-2"></div>
        </div>
    )
}
export default Introduction;