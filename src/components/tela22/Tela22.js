import "./style.css";

import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Tela22({tela22}) {
 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="tela-22" className={"background22 " + tela22}>
      <div className="container-06">
      <div className="div800 justify-content">
        <div data-aos="fade-up" data-aos-duration="1000">
          <span className="titulosBranco" >
            Parabéns!<br></br>
            Você chegou ao final do curso!<br></br><br></br>
          </span>
        </div>
        <div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Tela22;
