import "./style.css";
import logo from "./images/PicPay.png";
import seta_baixo from "../images/seta_baixo.png";
import logoPrograma from "./images/logo_observatorio.png";

import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link , animateScroll as scroll } from "react-scroll";


function Tela01({tela02, setTela2}) {
  function liberaProximaTela(){
    setTela2("grid")
    if (tela02 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela02]);

  return (
    <div id="tela-01" className="background">
      <div className="container scale-08">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="grid"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <div className='text-center'>
            <span className="titulos">Seja bem vindo ao curso</span>
          </div>
          <div>
            <img src={logoPrograma} alt="logo" />
          </div>
        </div>
        <div >
          <div  >
            <Link className="visible" to="tela-02" smooth={true} duration={500}>
              <button
                onClick={liberaProximaTela}
               className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tela01;