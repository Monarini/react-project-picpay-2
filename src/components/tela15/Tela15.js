import "./style.css";

import React, { useEffect, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import seta_baixo from "../images/seta_baixo.png";

function Tela15({tela15, tela16, setTela16}) {
  function liberaProximaTela(){
    setTela16("grid")
    if (tela16 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela16]);

  return (
    <div id="tela-15" className={"background2 " + tela15}>
      <div className="container-06">
      <div className="div800 justify-content">
        <div data-aos="fade-down" data-aos-duration="1000">
          <span className="textoVerde" >
            Em um rastreamento distribuído teremos os seguintes termos envolvidos:
          </span>
        </div>
        <div className="grid quatroColunas">
          <div className="shapeVerde" data-aos="flip-left" data-aos-duration="500" data-aos-delay="500">
            <span className="textoVerde">
              Trace: são os dados de desempenho sobre as requisições conforme elas são registradas pelo microsserviço
            </span>
          </div>
          <div className="shapeVerde" data-aos="flip-left" data-aos-duration="500" data-aos-delay="1000">
            <span className="textoVerde">
              Span: são operações ou segmentos que fazem parte de um trace
            </span>
          </div>
          <div className="shapeVerde"data-aos="flip-left" data-aos-duration="500" data-aos-delay="1500">
            <span className="textoVerde">
              Root span: é o primeiro intervalo em um trace
            </span>
          </div>
          <div className="shapeVerde"data-aos="flip-left" data-aos-duration="500" data-aos-delay="2000">
            <span className="textoVerde">
              Child span: é o período subsequente
            </span>
          </div>
        </div>
        <div>
          <span className="textoVerde" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="3000">
             Ao exibir o caminho percorrido por uma requisição, uma ferramenta de trace distribuído pode fornecer visibilidade para entender os diferentes serviços envolvidos e compreender em detalhes o desempenho de cada microsserviço ou componente envolvido na requisição, fazendo com que seja possível identificar rapidamente e de maneira eficaz erros e problemas de performance, inclusive fazendo o direcionamento correto para as equipes responsáveis.
          </span>
        </div>
      </div>
      <Link className="visible" to="tela-16" smooth={true} duration={500}>
        <button onClick={liberaProximaTela} className="btnSeta" type="button">
          <img src={seta_baixo} alt="Seta Avançar" />
        </button>
      </Link>
    </div>
    </div>
  );
}

export default Tela15;
