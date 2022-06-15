import "./style.css";

import React, { useEffect, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import seta_baixo from "../images/seta_baixo.png";

function Tela11({tela11, tela12, setTela12}) {
  function liberaProximaTela(){
    setTela12("grid")
    if (tela12 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela12]);

  return (
    <div id="tela-11" className={"background2 " + tela11}>
      <div className="container-06">
      <div className="div800 justify-content">
        <div data-aos="fade-down" data-aos-duration="1000">
          <span className="textoVerde" >
            Com dados de eventos estruturados, conseguimos tratar os campos e facilitar a consulta desses dados.<br></br><br></br>
            Uma mensagem de log deve conter:
          </span>
        </div>
        <div className="grid tresColunas">
          <div className="shapeVerde" data-aos="flip-left" data-aos-duration="500" data-aos-delay="500">
            <span className="textoVerde">
              Data: data e hora em que o evento ocorreu (formato ISO-8601 em UTC)
            </span>
          </div>
          <div className="shapeVerde" data-aos="flip-left" data-aos-duration="500" data-aos-delay="1000">
            <span className="textoVerde">
              Severidade: nível de importância da mensagem (INFO, ERROR, WARNING etc.)
            </span>
          </div>
          <div className="shapeVerde"data-aos="flip-left" data-aos-duration="500" data-aos-delay="1500">
            <span className="textoVerde">
              Conteúdo: indica o que aconteceu no evento
            </span>
          </div>
        </div>
        <div>
          <span className="textoVerde" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
            Podemos considerar então que as mensagens de logs representam os vários eventos que ocorrem nos sistemas, podendo ser informativos ou até mesmo registrar um problema que aconteceu em seu sistema.
          </span>
        </div>
      </div>
      <Link className="visible" to="tela-12" smooth={true} duration={500}>
        <button onClick={liberaProximaTela} className="btnSeta" type="button">
          <img src={seta_baixo} alt="Seta Avançar" />
        </button>
      </Link>
    </div>
    </div>
  );
}

export default Tela11;
