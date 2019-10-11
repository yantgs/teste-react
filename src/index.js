import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB } from './componentes/DoisComponentes'
// import MultiElementos from "./componentes/MultiElementos";
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'


const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Familia  sobrenome="Pereira">
      <Membro nome="André" />
      {/* <Membro nome="Mariana" sobrenome="Pereira" /> */}
    </Familia>
    {/* <FamiliaSilva /> */}
    {/* <MultiElementos /> */}
    {/* <CompA valor="Comp A" /> */}
    {/* <CompB valor="Comp B" /> */}
    {/* <PrimeiroComponente /> */}
  </div>,
  elemento
);
