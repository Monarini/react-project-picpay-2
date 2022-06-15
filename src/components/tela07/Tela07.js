import "./style.css";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "../shared/MyModal";
let modal = 0

function Tela07({tela07, tela08, setTela8}) {
  const [isActive, setIsActive] = useState(false)
  function liberaProximaTela(){
    setTela8("grid")
    if (tela08 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
    
  }
  
    function verificarClique(){
      modal = modal + 1
      if(modal>2){
        return setIsActive(true)
      }
    }
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, [tela08]);

  return (
    <div id="tela-07" className={"background7 " + tela07}>
      <div className="container-04 div800 justify-content">
        <div data-aos="fade-up" data-aos-duration="1000">
          <span className="textoBranco" >
          Os sistemas modernos introduziram complexidade adicional, fazendo com que as falhas sejam mais difíceis de prever, detectar e solucionar problemas. A Observabilidade surgiu em Engenharia de Software para fornecer um nível de introspecção e ajudar as pessoas a raciocinar sobre os estados internos de seus sistemas. Isso exige um investimento contínuo. Não é uma adoção ou solução única.
          </span>
        </div>
        <div className="shapeVerde2" data-aos="flip-left" data-aos-duration="500" data-aos-delay="500">
            <span className="textoVerde">
            A Observabilidade é uma prática que deve ser adotada desde o início do seu projeto de software, empregando uma combinação de logs, métricas e rastreamentos como sinais de depuração, visando auxiliar diversas personas, como por exemplo:
            </span>
          </div>
        <div data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000">
          <span className="textoBranco" >
          Clique no botões para saber mais sobre esses perfis
          </span>
        </div>
        <div className="grid duasColunas">
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="3000">
          <a onClick={verificarClique}>
              <MyModal
                name="DESENVOLVEDOR"
                title="DESENVOLVEDOR"
                content="Ajudar na correção de bugs; Identificar melhorias de performance; Ajustar integração entre sistemas, etc."
                
              />
              </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="3000">
          <a onClick={verificarClique}>
              <MyModal
                name="SRE’s"
                title="SRE’s"
                content="Investigar problemas; Diagnosticar problemas de maneira rápida e precisa; Diminuir o tempo médio para reparo (MTTR) de sistemase, etc."     
              />
              </a>
          </div>
        </div>
        <Link className={isActive ? "visible" : "hidden"} to="tela-08" smooth={true} duration={500}>
              <button onClick={liberaProximaTela} className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
            </Link>
      </div>
    </div>
  );
}

export default Tela07;
