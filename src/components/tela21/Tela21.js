import "./style.css";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "../shared/MyModal";
let modal = 0

function Tela21({tela21, tela22, setTela22}) {
  const [isActive, setIsActive] = useState(false)
  function liberaProximaTela(){
    setTela22("grid")
    if (tela22 !== "grid" ){
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
    }, [tela22]);

  return (
    <div id="tela-21" className={"background5 "+ tela21}>
      <div className="div800 container-04">
      <div data-aos="fade-up" data-aos-duration="1000">
        <span className="titulos" data-aos="zoom-in" data-aos-duration="1000">
          Ferramentas que utilizamos<br></br><br></br>
        </span>
        <span className="textoBranco" >
          Conforme citado anteriormente, o time de Observabilidade é o responsável por manter as ferramentas e soluções de Observabilidade em uso no PicPay. Usamos para isso soluções SaaS de fornecedores como New Relic e Datadog, mas também disponibilizamos soluções com ferramentas Open Source, como Prometheus, Grafana, OpenSearch, OpenTelemetry, entre outras.<br></br><br></br>
        </span>
        <a onClick={verificarClique}>
          <MyModal
            name="EXEMPLO 1"
            title="A figura abaixo apresenta o fluxo de dados e ferramentas usadas no PicPay"
            content=""
            ImgUrl
          />
        </a><br></br><br></br>
        <span className="textoBranco" >
          Você pode obter mais detalhes e a lista completa das ferramentas que utilizamos e mantemos através desse link - https://picpay.atlassian.net/l/c/QdS9oa1f. Nesse link você também vai encontrar informações sobre a nossa stack de logs, quais tecnologias utilizamos para levar as mensagens de logs dos microsserviços para a plataforma do New Relic ou OpenSearch, que são as plataformas atuais que disponibilizamos para consulta dos logs dos microsserviços.<br></br><br></br>
        </span>
        <a onClick={verificarClique}>
          <MyModal
            name="EXEMPLO 2"
            title="A figura abaixo apresenta o fluxo de dados e ferramentas usadas para logs"
            content=""
            ImgUrl
          />
        </a>
        </div>
        <Link className={isActive ? "visible" : "hidden"} to="tela-22" smooth={true} duration={500}>
          <button onClick={liberaProximaTela} className="btnSeta" type="button">
            <img src={seta_baixo} alt="Seta Avançar" />
            
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tela21;
