import "./style.css";
import homem_sentado from "./images/homem_sentado.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela18({tela18, tela19, setTela19}) {
  function liberaProximaTela(){
    setTela19("grid")
    if (tela19 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela19]);

  return (
    <div id="tela-18" className={"background3 " + tela18}>
      <div className="container-03 scale-08">
        <section className="grid texto-imagem">
          <div className="container-text-buttons">
            <div className="text-container" data-aos="fade-right"  data-aos-duration="1000">
              <span className="textoVerde">
                Em uma plataforma de observabilidade, mesmo em cenários de pró-ativos, devemos também trabalhar com alertas. Os alertas permitem definir condições e eventos no sistema que devem gerar notificações.<br></br><br></br>
                O objetivo é sinalizar e possibilitar aos responsáveis pelos sistemas tomar as providências necessárias para eliminar, mitigar ou evitar um problema que esteja ocorrendo ou que tende a ocorrer.<br></br><br></br> 
                Para conhecer mais sobre como trabalhamos com os alertas no PicPay, acesso o link: https://picpay.atlassian.net/l/c/HNz4Y5gd para entender o fluxo de trabalho e as boas práticas que sugerimos, além de conhecer as ferramentas que usamos para criação dos alertas.
              </span>
            </div>
          </div>

          <div className="img"
          data-aos="fade-left"
          data-aos-duration="1000">
            <img
              className="imagemTela2"
              src={homem_sentado}
              alt="Foto de Homem com notebook"
            />
          </div>
          <div className="alinhano-button">
          <Link className="visible" to="tela-19" smooth={true} duration={500}>
              <button onClick={liberaProximaTela} className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
          </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tela18;
