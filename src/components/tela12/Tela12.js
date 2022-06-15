import "./style.css";

import React, { useEffect } from "react";
import seta_baixo from "../images/seta_baixo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela12({tela12, tela13, setTela13}) {
  function liberaProximaTela(){
    setTela13("grid")
    if (tela13 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela13]);

  return (
    <div id="tela-12" className={"background12 " + tela12}>
      <div className="shapePreto2">
        <div className="container-04">
          <span className="textoBranco"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            Usamos as mensagens de logs geradas para tentar entender o que os sistemas estão registrando.<br></br><br></br>
            Essas mensagens podem ser úteis para ajudar na resolução de problemas.<br></br><br></br>
            Não caia na tentação de armazenar dados para extrair métricas e/ou disparar alertas a partir dos seus logs.
            Além de não ser uma boa prática, acaba sendo uma informação que não será útil para observabilidade (existem outras ferramentas para esse uso), podendo até atrapalhar na leitura de mensagens importantes em momento de troubleshooting.
          </span><br></br><br></br>
          <div>
            <Link className="visible" to="tel13" smooth={true} duration={500}>
              <button onClick={liberaProximaTela} className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tela12;
