import "./style.css";
import homem_apontando from "./images/homem_apontando.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "../shared/MyModal";
let modal = 0

function Tela03({tela03, tela04, setTela4}) {
const [isActive, setIsActive] = useState(false)
function liberaProximaTela(){
  setTela4("grid")
  if (tela04 !== "grid" ){
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
  }, [tela04]);

  return (
    <div id="tela-03" className={"background3 " + tela03}>
      <div className="container-03 scale-08">
        <section className="grid texto-imagem">
          <div className="container-text-buttons">
            <div data-aos="fade-up" data-aos-duration="1000" className="titulos">O que é observabilidade?</div>
            <div className="text-container" data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="500">
              <span className="textoVerde">
                Observabilidade é a habilidade de entender o que está
                acontecendo dentro do seu sistema com base em suas saídas. Isso
                significa que você deve saber explicar qualquer estado em que
                seu sistema possa entrar. Por exemplo: estado de falha, estado
                de lentidão etc.
              </span>
              <br />
              <br />
              <span className="textoVerde text2">
                A Observabilidade em sistemas de Engenharia de Software busca
                alcançar uma melhor compreensão de como o software está
                operando. Portanto, a Observabilidade é um desafio técnico e
                cultural.
              </span>
              <br />
              <br />
              <span className="textoVerde">
                Clique nos botões abaixo para saber a diferença entre eles.
              </span>
            </div>

            <div className="buttons-container" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="1000">
              <a onClick={verificarClique}>
              <MyModal
                name="TÉCNICO"
                title="TÉCNICO"
                content="Quando você precisa conhecer ferramentas que vão possibilitar criar insumos para sinais de Observabilidade."
                
              />
              </a>
              <a onClick={verificarClique}>
              <MyModal
                name="CULTURAL"
                title="CULTURAL"
                content="Quando você precisa compreender e adotar novas práticas que vão possibilitar um desenvolvimento contínuo, buscando entender como seus sistemas estão funcionando em um ambiente de produção."     
              />
              </a>
            </div>
          </div>

          <div className="img"
          data-aos="fade-left"
          data-aos-duration="1000">
            <img
              className="imagemTela2"
              src={homem_apontando}
              alt="Foto de Homem com notebook"
            />
          </div>
          <div className="alinhano-button">
            <Link className={isActive ? "visible" : "hidden"} to="tela-04" smooth={true} duration={500}>
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

export default Tela03;
