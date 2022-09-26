import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import React, {useState} from "react"; 


function Jogo() {

 /* Criamos o estado useState `estaPulando`, com o valor padrão `false`.
   Primeiro valor (estaPulando) é apenas para ler (GET)
   Segundo valor(setEstaPulando) é para atualizar o estado (SET)
    No momento que um estado é atualizado, o componente atualiza
   tudo o que está sendo renderizado. */
const [estaPulando, setEstaPulando] = useState (false);

document.onkeydown = function(){
 

  setEstaPulando = true;
};

console.log(15, {useState} );

  return (
    <div className="jogo">
      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img className="cano" src={cano} alt="Cano" />
      
      <img className="mario" src={mario} alt="Mário" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;