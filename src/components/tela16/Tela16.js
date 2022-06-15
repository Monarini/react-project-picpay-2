import "./style.css";
import homem_pc2 from "./images/homem_pc2.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela16({tela16, tela17, setTela17}) {
  function liberaProximaTela(){
    setTela17("grid")
    if (tela17 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela17]);

  return (
    <div id="tela-16" className={"background3 " + tela16}>
      <div className="container-03 scale-08">
        <section className="grid texto-imagem">
          <div className="container-text-buttons">
            <div data-aos="fade-up"  data-aos-duration="1000" className="titulos">
              Como a observabilidade é construída?
            </div>
            <div className="text-container" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
              <span className="textoVerde">
                A Observabilidade é construída basicamente de eventos estruturados. Um evento é um registro de tudo o que ocorreu enquanto uma solicitação específica interagiu com o seu sistema. Além disso, um evento deve conter informação suficiente para ser relevante e possibilitar a  investigação de problemas, até mesmo antes deles acontecerem. 
              </span>
              <br />
              <br />
              <span className="textoVerde text2">
                Com os princípios de eventos estruturados e rastreamento, podemos assumir que eles são os blocos de construção da Observabilidade que usamos para entender o comportamento e o desempenho dos nossos sistemas. Para obter uma observabilidade completa, precisamos usar em conjunto ferramentas que utilizem as metodologias que explicamos anteriormente para melhorar a qualidade do código e também a experiência dos usuários dos sistemas.
              </span>
            </div>
          </div>

          <div className="img"
          data-aos="fade-left"
          data-aos-duration="1000">
            <img
              className="imagemTela2"
              src={homem_pc2}
              alt="Foto de Homem com notebook"
            />
          </div>
          <div className="alinhano-button">
          <Link className="visible" to="tela-16" smooth={true} duration={500}>
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

export default Tela16;
