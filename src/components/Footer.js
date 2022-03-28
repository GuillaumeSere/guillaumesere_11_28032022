import { useState,useRef,useEffect } from "react";
import logoWhite from "../assets/logo_white.png"


function Footer(){

  const [bottomPosition, setBottomPosition] = useState(null);
  let ref = useRef();

  const updatePosition = () => {
    console.log(ref.current.getBoundingClientRect().bottom);
    if (ref.current) setBottomPosition(ref.current.getBoundingClientRect().bottom);
  };

  useEffect(() => {
    window.addEventListener("resize", updatePosition);
    setBottomPosition(ref.current.getBoundingClientRect().bottom);
    return () => {
      console.log("clear?");
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

 
   return (
    <footer className="footer" ref={ref} style={{marginTop: bottomPosition < window.innerHeight? window.innerHeight - bottomPosition : "0"}}>
    <div className="footer_img_container">
        <img src={logoWhite} alt="logo" />
    </div>
    <p className="footer_text">© 2020 Kasa. All rights reserved</p>
  </footer>
   )

}

export default Footer;