import "./style.css";
import grafico13 from "./images/grafico13.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela13({tela13, tela14, setTela14}) {
  function liberaProximaTela(){
    setTela14("grid")
    if (tela14 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela14]);

  return (
    <div id="tela-13" className={"background5 "+ tela13}>
      <div className="div800 container-04">
      <div data-aos="fade-up" data-aos-duration="1000">
        <span className="titulos">
          Rastreamento distribuído
        </span>
      </div>  
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <span className="textoBranco" >
            Rastreamento distribuído (ou Distributed tracing) é um conjunto de técnicas, padrões e práticas que tem como principal objetivo mostrar o fluxo por onde passou uma requisição, se ela foi atendida e quanto tempo levou para a requisição ser atendida.<br></br><br></br>
            Temos um exemplo para demonstrar um caso simples de uma requisição. Um usuário precisa registrar uma informação em um sistema. Ele tem disponível uma interface web por onde vai iniciar a requisição que vai passar por dois microsserviços e também se comunica com uma base de dados. 
          </span>
        </div>
        <div className="caixa" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500">
          <img
            className="imagemTela14"
            src={grafico13}
            alt="Caixa de texto com imagem"
          />
        </div>
        <Link className="visible" to="tela-14" smooth={true} duration={500}>
              <button onClick={liberaProximaTela} className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
            </Link>
      </div>
    </div>
  );
}

export default Tela13;
