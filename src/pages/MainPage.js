import React from "react";
import './howItWorks.css'
import './hero.css'
import './intro.css'
import Countdown from "./countdown"
import hero_logo from '../assets/HackMoral4.0-Logo.png'
import line from '../assets/lines.png'
import {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import TimeLine from "./TimeLine";

const MainPage = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);



    return (
        <>
            <div className="section hero">
                <div className="logo-hero">
                    <img src={hero_logo} alt="" />
                </div>
                <div className="countdown">
                    <Countdown timeTillDate="01 17 2023, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
                </div>
                <div className="register-btn-container">
                    <div className="btn-hero">Register</div>
                    {/*<div className="btn-hero">Leaderboard </div>*/}
                </div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    style={{ "display": "block" }}
                    options={{
                        particles: {
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            color: {
                                value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                            },

                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#fff"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.6,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 2,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 120,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: false
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 250,
                                    line_linked: {
                                        opacity: 0.5
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />
            </div>
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
            <div className="howItWorksBackground ">
                <div className="howItWorks">
                    <div className="howItWorksTitle">
                        HOW IT WORKS
                    </div>

                    <p className="howItWorksContaint">
                        Second-year undergraduates of the Faculty of IT, University of Moratuwa get the
                        opportunity to get registered for Hack Moral 4.0 as individual competitors. Once you are
                        done with that can participate with your approved HackerRank account. Further details
                        will be received via the email address provided in the registration.
                    </p>
                    <div className="howItWorksContaint seconddiv">
                        The practice playground will take place from the 16th of February 2022 in which you can
                        get a better idea of the way you may need to process for the upcoming competitive hours.
                        Once the competition is announced you need to discover the solutions for enigmas
                        presented to you.
                    </div>
                    <div className="howItWorksContaint thirddiv"> Find this great referal playlist for get an
                        exact idea about Hackmoral Array.
                    </div>
                    <div className="youTube"><a href="www.youtube.com" target="_blank">
                        <button className="btn-youtube">
                            Watch how it works
                        </button>
                    </a></div>
                </div>
            </div>
            <TimeLine></TimeLine>
            
        </>
    );
}
export default MainPage;