import "./style.css";
import caixa_imagem from "./images/pop.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link,animateScroll as scroll } from "react-scroll";
import MyModal from "../shared/MyModal";
let modal = 0

function Tela05({tela05, tela06, setTela6}) {
  const [isActive, setIsActive] = useState(false)

  function liberaProximaTela(){
    setTela6("grid")
    if (tela06 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }

  function verificarClique(){
    modal = modal + 1
    if(modal>1){
      return setIsActive(true)
    }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela06]);

  return (
    <div id="tela-05" className={"background5 "+ tela05}>
      <div className="div800 container-04">
      <div data-aos="fade-up" data-aos-duration="1000">
          <span className="textoBranco" >
          Mas, no atual cenário que vivemos, com sistemas complexos, distribuídos em microsserviços, não é mais a técnica ideal para entender e resolver problemas críticos em sistemas de Engenharia de Software.
          </span>
        </div>
        <div className="caixa" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          <img
            className="imagemTela5 "
            src={caixa_imagem}
            alt="Caixa de texto com imagem"
          />
        </div>
        <div className="caixa" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
          <a onClick={verificarClique}>
            <MyModal
              name="SAIBA MAIS"
              title="SAIBA MAIS"
              content="Apesar de ser considerado um dos sinais para praticar a Observabilidade, as métricas são muito limitantes para servir como um bloco de construção fundamental da Observabilidade. Por esse motivo, você não deve acreditar que métricas são um dos pilares da Observabilidade (assim como logs também não são e você vai saber o motivo mais adiante)."
            />
          </a>
        </div>
        <Link className={isActive ? "visible" : "hidden"} to="tela-06" smooth={true} duration={500}>
          <button onClick={liberaProximaTela} className="btnSeta p-20" type="button">
            <img src={seta_baixo} alt="Seta Avançar" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tela05;
