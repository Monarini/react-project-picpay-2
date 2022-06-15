import "./style.css";

import React, { useEffect, useState } from "react";
import seta_baixo from "../images/seta_baixo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import MyModal from "../shared/MyModal";
let modal = 0

function Tela14({tela14, tela15, setTela15}) {
  const [isActive, setIsActive] = useState(false)
  function liberaProximaTela(){
    setTela15("grid")
    if (tela15 !== "grid" ){
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
    }, [tela15]);

  return (
    <div id="tela-14" className={"background14 "+ tela14}>
      <div className="div800 container-04">
      <div data-aos="fade-up" data-aos-duration="1000">
          <span className="textoBranco" >            
            Vamos imaginar que esse usuário está enfrentando uma lentidão para receber a resposta que o seu cadastro foi concluído. Sem usar rastreamento distribuído (por exemplo, olhando os logs isolados de cada microsserviço) ficará difícil identificar rapidamente onde está ocorrendo o gargalo, onde podem ocorrer erros etc. Com muitos serviços envolvidos em apenas uma única requisição, é difícil também você reportar as equipes responsáveis por esses componentes sem saber identificar o problema, gerando lentidão na resolução do problema.<br></br><br></br>
            O rastreamento distribuído é a melhor maneira de entender as relações e interações entre os microsserviços. O objetivo é identificar onde estão ocorrendo falhas ou problemas de desempenho no sistema e por quê.<br></br><br></br>
            Clique no botão e veja como é a estrutura de um rastreamento distribuído
          </span>
        </div>
        <div className="caixa" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
          <a onClick={verificarClique}>
            <MyModal
              name="ESTRUTURA"
              title="ESTRUTURA"
              content=""
              ImgUrl
            />
          </a>
        </div>
        <Link className="visible" to="tela-15" smooth={true} duration={500}>
              <button onClick={liberaProximaTela} className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
            </Link>
      </div>
    </div>
  );
}

export default Tela14;
