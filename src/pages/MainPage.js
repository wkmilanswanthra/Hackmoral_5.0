import React from "react";
import TimeLine from "./sections/TimeLine";
import CardView from "./sections/CardView";
import Rules from "./sections/Rules";
import Hero from "./sections/hero";
import Introduction from "./sections/introduction";
import Howitworks from "./sections/howitworks";
import Footer from "./sections/Footer";
import OrgButton from "./sections/OrgButton";
import Awards from "./sections/awards";


const MainPage = () => {


    return (
        <>
            <Hero/>
           <Introduction/>
            <Howitworks/>
            <CardView/>
            <TimeLine></TimeLine>
            <Rules/>
            <Awards/>
            <OrgButton></OrgButton>
            <Footer></Footer>
        </>
    );
}
export default MainPage;