import React, { useState } from "react";

import Tela01 from "./components/tela01/Tela01";
import Tela02 from "./components/tela02/Tela02";
import Tela03 from "./components/tela03/Tela03";
import Tela04 from "./components/tela04/Tela04";
import Tela05 from "./components/tela05/Tela05";
import Tela06 from "./components/tela06/Tela06";
import Tela07 from "./components/tela07/Tela07";
import Tela08 from "./components/tela08/Tela08";
import Tela09 from "./components/tela09/Tela09";
import Tela10 from "./components/tela10/Tela10";
import Tela11 from "./components/tela11/Tela11";
import Tela12 from "./components/tela12/Tela12";
import Tela13 from "./components/tela13/Tela13";
import Tela14 from "./components/tela14/Tela14";
import Tela15 from "./components/tela15/Tela15";
import Tela16 from "./components/tela16/Tela16";
import Tela17 from "./components/tela17/Tela17";
import Tela18 from "./components/tela18/Tela18";
import Tela19 from "./components/tela19/Tela19";
import Tela20 from "./components/tela20/Tela20";
import Tela21 from "./components/tela21/Tela21";
import Tela22 from "./components/tela22/Tela22";


function App() {
  const [tela02, setTela2] = useState("none")
  const [tela03, setTela3] = useState("none")
  const [tela04, setTela4] = useState("none")
  const [tela05, setTela5] = useState("none")
  const [tela06, setTela6] = useState("none")
  const [tela07, setTela7] = useState("none")
  const [tela08, setTela8] = useState("none")
  const [tela09, setTela9] = useState("none")
  const [tela10, setTela10] = useState("none")
  const [tela11, setTela11] = useState("none")
  const [tela12, setTela12] = useState("none")
  const [tela13, setTela13] = useState("none")
  const [tela14, setTela14] = useState("none")
  const [tela15, setTela15] = useState("none")
  const [tela16, setTela16] = useState("none")
  const [tela17, setTela17] = useState("none")
  const [tela18, setTela18] = useState("none")
  const [tela19, setTela19] = useState("none")
  const [tela20, setTela20] = useState("none")
  const [tela21, setTela21] = useState("none")
  const [tela22, setTela22] = useState("none")

  
  return (
    <div className="App">
      <Tela01 tela02={tela02} setTela2={setTela2} />
      <Tela02 tela02={tela02} tela03={tela03} setTela3={setTela3}/>
      <Tela03 tela03={tela03} tela04={tela04} setTela4={setTela4}/>
      <Tela04 tela04={tela04} tela05={tela05} setTela5={setTela5}/>
      <Tela05 tela05={tela05} tela06={tela06} setTela6={setTela6}/>
      <Tela06 tela06={tela06} tela07={tela07} setTela7={setTela7}/>
      <Tela07 tela07={tela07} tela08={tela08} setTela8={setTela8}/>
      <Tela08 tela08={tela08} tela09={tela09} setTela9={setTela9}/>
      <Tela09 tela09={tela09} tela10={tela10} setTela10={setTela10}/>
      <Tela10 tela10={tela10} tela11={tela11} setTela11={setTela11}/>
      <Tela11 tela11={tela11} tela12={tela12} setTela12={setTela12}/>
      <Tela12 tela12={tela12} tela13={tela13} setTela13={setTela13}/>
      <Tela13 tela13={tela13} tela14={tela14} setTela14={setTela14}/>
      <Tela14 tela14={tela14} tela15={tela15} setTela15={setTela15}/>
      <Tela15 tela15={tela15} tela16={tela16} setTela16={setTela16}/>
      <Tela16 tela16={tela16} tela17={tela17} setTela17={setTela17}/>
      <Tela17 tela17={tela17} tela18={tela18} setTela18={setTela18}/>
      <Tela18 tela18={tela18} tela19={tela19} setTela19={setTela19}/>
      <Tela19 tela19={tela19} tela20={tela20} setTela20={setTela20}/>
      <Tela20 tela20={tela20} tela21={tela21} setTela21={setTela21}/>
      <Tela21 tela21={tela21} tela22={tela22} setTela22={setTela22}/>
      <Tela22 tela22={tela22} />
    </div>
  );
}


export default App;
