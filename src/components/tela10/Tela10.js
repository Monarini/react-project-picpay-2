import "./style.css";
import seta_baixo from "../images/seta_baixo.png";
import imgTeste from "./images/formatacao1.png"

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "../shared/MyModal";
let modal = 0

function Tela10({tela10, tela11, setTela11}) {
  const [isActive, setIsActive] = useState(false)
  function liberaProximaTela(){
    setTela11("grid")
    if (tela11 !== "grid" ){
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
    }, [tela11]);

  return (
    <div id="tela-10" className={"background5 "+ tela10}>
      <div className="div800 container-04">
      <div data-aos="fade-up" data-aos-duration="1000">
        <span className="titulos">
          Então vamos adicionar  LOGS para tornar um sistema observável?<br></br>
        </span>
        <span className="textoBranco" data-aos-delay="500" >
          Anteriormente, comentamos que as métricas não são um dos pilares da Observabilidade e citamos que logs também não são. E por que não?<br></br>
          A maioria dos serviços e suas bibliotecas geram logs como dados não estruturados (textos em múltiplas linhas).<br></br><br></br>
        </span>
        <a onClick={verificarClique}>
          <MyModal
            name="EXEMPLO 1"
            title="Vejo o exemplo de um log não estruturado"
            content=""
            ImgUrl={imgTeste}
          />
        </a><br></br><br></br>
        <span className="textoBranco">
        Dados não estruturados em Observabilidade simplesmente são descartáveis, não são úteis. Os logs tornam-se úteis para a Observabilidade quando estruturamos em um formato que seja possível realizar buscas indexadas por chaves. Portanto, o primeiro passo em direção a observabilidade é utilizar logs em formatos como JSON, que é um padrão aberto independente utilizado para troca de dados simples e rápida entre sistemas, utilizando um formato chave:valor.<br></br><br></br>
        </span>
        <a onClick={verificarClique}>
          <MyModal
            name="EXEMPLO 2"
            title="Vejamos a seguir o exemplo do log acima no formato JSON"
            content=""
            ImgUrl={imgTeste}
          />
        </a>
        </div>
        <Link className={isActive ? "visible" : "hidden"} to="tela-11" smooth={true} duration={500}>
          <button onClick={liberaProximaTela} className="btnSeta" type="button">
            <img src={seta_baixo} alt="Seta Avançar" />
            
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tela10;
