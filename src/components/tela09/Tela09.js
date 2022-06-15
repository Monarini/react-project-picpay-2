import "./style.css";
import menina_pc from "./images/menina_pc.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "../shared/MyModal";
let modal = 0

function Tela09({tela09, tela10, setTela10}) {
const [isActive, setIsActive] = useState(false)
function liberaProximaTela(){
  setTela10("grid")
  if (tela10 !== "grid" ){
    setTimeout(() => {
        scroll.scrollToBottom()
      }, 500);
    }
  
}

  function verificarClique(){
    modal = modal + 1
    if(modal>1){
      return setIsActive(true)
    }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela10]);

  return (
    <div id="tela-09" className={"background3 " + tela09}>
      <div className="container-03 scale-08">
        <section className="grid texto-imagem">
          <div className="container-text-buttons">
            <div className="text-container" data-aos="fade-right"  data-aos-duration="1000">
              <span className="textoVerde">
                Como mencionado anteriormente, as métricas são muito limitantes, mas em alguns casos são fundamentais. Por exemplo: os times de SRE’s conseguem ter ideia do que pode estar acontecendo no sistema só de visualizar os gráficos dessas métricas, mesmo não sabendo os detalhes da sua arquitetura. 
              </span>
              <br />
              <br />
              <span className="textoVerde text2">
                Na figura anterior, se o tempo de resposta (gráfico do topo) estivesse muito acima da média de 360 ms (repare no canto superior direito), digamos, 2 segundos.<br></br><br></br> 
                O time de SRE poderia considerar que algum evento ocorreu que degradou o tempo de resposta do microsserviço. Poderia, por exemplo, ser o deploy de uma nova versão do microsserviço.
              </span>
            </div>
            <div className="buttons-container" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="500">
              <a onClick={verificarClique}>
              <MyModal
                name="ATENÇÃO"
                title="ATENÇÃO"
                content="Os desenvolvedores não devem se prender a apenas disponibilizar as métricas do método RED, mas também instrumentar suas próprias métricas para construir dashboards e alertas padronizados do seu microsserviço. Porém, esse é um assunto para outro curso."/>
              </a>
            </div>
          </div>

          <div className="img"
          data-aos="fade-left"
          data-aos-duration="1000">
            <img
              className="imagemTela2"
              src={menina_pc}
              alt="Foto de Homem com notebook"
            />
          </div>
          <div className="alinhano-button">
            <Link className={isActive ? "visible" : "hidden"} to="tela-10" smooth={true} duration={500}>
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

export default Tela09;
