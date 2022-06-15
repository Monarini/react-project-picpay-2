import "./style.css";
import computador_grafico8 from "./images/computador_grafico8.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela08({tela08, tela09, setTela9}) {
  function liberaProximaTela(){
    setTela9("grid")
    if (tela09 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela09]);

  return (
    <div id="tela-08" className={"background5 "+ tela08}>
      <div className="div800 container-04">
      <div data-aos="fade-up" data-aos-duration="1000">
          <span className="textoBranco" >
          Essas três métricas são o ponto de partida para você iniciar com observabilidade. Com essas métricas já é possível obter gráficos e começar a entender padrões que vão se desenhando com o comportamento dos seus sistemas.
          </span>
        </div>
        <div className="caixa" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          <img
            className="imagemTela8 "
            src={computador_grafico8}
            alt="Caixa de texto com imagem"
          />
        </div>
        <Link className="visible" to="tela-09" smooth={true} duration={500}>
              <button onClick={liberaProximaTela} className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
            </Link>
      </div>
    </div>
  );
}

export default Tela08;
