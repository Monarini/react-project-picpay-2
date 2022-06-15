import "./style.css";
import foto_homem from "./images/foto_homem.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela02({tela02, tela03, setTela3}) {
  function liberaProximaTela(){
    setTela3("grid")
    if (tela03 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela03]);
  return (
    <div id="tela-02" className={'background2 ' + tela02}>
      <div className="container-02 scale-08">
        <section className="grid imagem-texto">
          <div className="container-img" data-aos="fade-right"
          data-aos-duration="1000">
            <img
              className="imagemTela2"
              src={foto_homem}
              alt="Foto de Homem com notebook"
            />
          </div>
          <div className="container-text" data-aos="fade-left"
          data-aos-duration="1000">
            <span className="textoVerde">
              Sejam muito bem-vindos ao curso básico de <b>Observabilidade</b>.
              <br></br>
              <br></br>
              Neste treinamento vamos abordar os conceitos de observabilidade,
              um pouco sobre métricas, logs e rastreamento distribuído.<br></br>
              <br></br>
              Ao final desse treinamento você será capaz de compreender a
              importância da observabilidade aqui no PicPay e terá uma base para
              aplicar esses conceitos em seus projetos.
            </span>
          </div>
          <div className="alinhamento-button-02">
            <Link className="visible" to="tela-03" smooth={true} duration={500}>
              <button
                onClick={liberaProximaTela}
                className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tela02;
