import hero_logo from "../../assets/transparent logo.png";
import Countdown from "../../components/countdown";
import '../../css/hero.css';
import {useCallback, useEffect, useState, useRef} from "react";
import WAVES from 'vanta/dist/vanta.waves.min'


const Hero = () => {

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }
    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: window.innerHeight,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.5,
                color: 0xb0b0b,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    // VANTA.WAVES({
    //     el: '#background', // element selector string or DOM object reference
    //     color: 0x000000,
    //     waveHeight: 20,
    //     shininess: 50,
    //     waveSpeed: 1.5,
    //     zoom: 0.75
    // })
    return (

        <div id="background" ref={myRef} className="section hero">
            <div className="logo-hero">
                <img src={hero_logo} alt=""/>
            </div>
            <div className="countdown">
                <Countdown timeTillDate="01 17 2023, 12:00 am" timeFormat="MM DD YYYY, h:mm a"/>
            </div>
            <div className="count-desc">
                until registration opens
            </div>
            <div className="register-btn-container">
                <div className="btn-hero">Register</div>
                {/*<div className="btn-hero">Leaderboard </div>*/}
            </div>
        </div>
    )
}
export default Hero;