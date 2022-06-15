import "./style.css";
import mulher_pc2 from "./images/mulher_pc2.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela17({tela17, tela18, setTela18}) {
function liberaProximaTela(){
  setTela18("grid")
  if (tela18 !== "grid" ){
    setTimeout(() => {
        scroll.scrollToBottom()
      }, 500);
    }
  
}
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela18]);

  return (
    <div id="tela-17" className={"background5 " + tela17}>
      <div className="container-03 scale-08">
        <section className="grid texto-imagem">
          <div className="container-text-buttons">
            <div className="text-container" data-aos="fade-right"  data-aos-duration="1000">
              <span className="textoBranco">
                A Observabilidade é construída basicamente de eventos estruturados. Um evento é um registro de tudo o que ocorreu enquanto uma solicitação específica interagiu com o seu sistema. Além disso, um evento deve conter informação suficiente para ser relevante e possibilitar a  investigação de problemas, até mesmo antes deles acontecerem. 
              </span>
              <br />
              <br />
              <span className="textoBranco text2">
                Com os princípios de eventos estruturados e rastreamento, podemos assumir que eles são os blocos de construção da Observabilidade que usamos para entender o comportamento e o desempenho dos nossos sistemas. Para obter uma observabilidade completa, precisamos usar em conjunto ferramentas que utilizem as metodologias que explicamos anteriormente para melhorar a qualidade do código e também a experiência dos usuários dos sistemas.
              </span>
            </div>
          </div>
            <div className="img" data-aos="fade-left" data-aos-duration="1000">
              <img className="imagemTela2" src={mulher_pc2} alt="Foto de Homem com notebook"/>
            </div>
          <div className="alinhano-button">
            <Link className="visible" to="tela-18" smooth={true} duration={500}>
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

export default Tela17;
