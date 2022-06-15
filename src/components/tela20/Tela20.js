import "./style.css";

import React, { useEffect } from "react";
import seta_baixo from "../images/seta_baixo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Tela20({tela20, tela21, setTela21}) {
  function liberaProximaTela(){
    setTela21("grid")
    if (tela21 !== "grid" ){
      setTimeout(() => {
          scroll.scrollToBottom()
        }, 500);
      }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [tela21]);

  return (
    <div id="tela-20" className={"background20 " + tela20}>
      <div className="shapePreto2">
        <div className="container-04">
          <span className="textoBranco"  data-aos="fade-up" data-aos-duration="1000">
            Você provavelmente vai precisar tirar alguma dúvida ou fazer alguma solicitação ao nosso time em algum momento.<br></br><br></br>
            Nesse link você tem à disposição um guia de solicitações ao nosso time. Você também pode tirar dúvidas pontuais usando a nossa FAQ no confluence.<br></br><br></br>
            Porém, se você não encontrar uma resposta para suas dúvidas, sinta-se à vontade para bater um papo conosco no Slack - #observability-team.<br></br><br></br>
            Por lá, você também consegue acionar nossa equipe registrando uma solicitação ou até mesmo para reportar um problema.<br></br><br></br>
          </span>
          <div>
            <Link className="visible" to="tela21" smooth={true} duration={500}>
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

export default Tela20;
