import "./style.css";

import React, { useEffect, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import seta_baixo from "../images/seta_baixo.png";

function Tela19({tela19, tela20, setTela20}) {
  function liberaProximaTela(){
    setTela20("grid")
    if (tela20 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela20]);

  return (
    <div id="tela-19" className={"background2 " + tela19}>
      <div className="container-06">
      <div className="div800 justify-content">
        <div data-aos="fade-down" data-aos-duration="1000">
          <div data-aos="fade-up"  data-aos-duration="1000" className="titulosVerde">
            O que é observabilidade?
          </div>
          <span className="textoVerde" >
            O time de Observabilidade é responsável pela experiência e plataformas de Observabilidade dos produtos e serviços do PicPay.<br></br>
            Nosso time é responsável:
          </span>
        </div>
        <div className="grid quatroColunas">
          <div className="shapeVerde" data-aos="flip-left" data-aos-duration="500" data-aos-delay="500">
            <span className="textoVerde">
              pela sustentação e evolução das plataformas de Observabilidade disponibilizadas na empresa
            </span>
          </div>
          <div className="shapeVerde" data-aos="flip-left" data-aos-duration="500" data-aos-delay="1000">
            <span className="textoVerde">
              pela experiência do usuário
            </span>
          </div>
          <div className="shapeVerde"data-aos="flip-left" data-aos-duration="500" data-aos-delay="1500">
            <span className="textoVerde">
              pela avaliação e implantação de novas opções para necessidades não atendidas pelas plataformas atuais
            </span>
          </div>
          <div className="shapeVerde"data-aos="flip-left" data-aos-duration="500" data-aos-delay="2000">
            <span className="textoVerde">
              por apoiar e propagar conhecimentos e boas práticas de Observabilidade aos times de desenvolvimento e de SREs
            </span>
          </div>
        </div>
        <div>
          <span className="textoVerde" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="3000">
          Para conhecer melhor sobre nosso time, visite nossa página no confluence: https://picpay.atlassian.net/l/c/3AUdGxzk
          </span>
        </div>
      </div>
      <Link className="visible" to="tela-20" smooth={true} duration={500}>
        <button onClick={liberaProximaTela} className="btnSeta" type="button">
          <img src={seta_baixo} alt="Seta Avançar" />
        </button>
      </Link>
    </div>
    </div>
  );
}

export default Tela19;
