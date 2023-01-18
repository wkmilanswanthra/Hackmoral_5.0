import hero_logo from "../../assets/transparent logo.png";
import Countdown from "../../components/countdown";
import "../../css/hero.css";
import { useCallback, useEffect, useState, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

const Hero = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: window.innerHeight,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.5,
          color: 0xb0b0b,
          shininess: 24.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="background" ref={myRef} className="section hero">
      <div className="logo-hero">
        <img src={hero_logo} alt="" />
      </div>
      <div className="countdown">
        <Countdown
          timeTillDate="01 20 2023, 11:59 pm"
          timeFormat="MM DD YYYY, h:mm a"
        />
      </div>
      <div className="count-desc">until registration closes</div>
      <div className="register-btn-container">
        <a
          href={"https://forms.gle/CgTR2Fq7DDq2ZfEH7"}
          target="_blank"
          type="button"
          className="btn-hero"
          style={{ textDecoration: "none" }}
        >
          Register
        </a>
        {/* <div className="btn-hero">Register</div> */}
        {/* <div className="btn-hero">Leaderboard </div> */}
      </div>
    </div>
  );
};
export default Hero;
