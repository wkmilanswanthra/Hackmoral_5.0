import React from "react";
import TimeLine from "./sections/TimeLine";
import CardView from "./sections/CardView";
import Rules from "./sections/Rules";
import Hero from "./sections/hero";
import Introduction from "./sections/introduction";
import Howitworks from "./sections/howitworks";


const MainPage = () => {


    return (
        <>
            <Hero/>
           <Introduction/>
            <Howitworks/>
            <CardView/>
            <TimeLine></TimeLine>
            <Rules/>
        </>
    );
}
export default MainPage;