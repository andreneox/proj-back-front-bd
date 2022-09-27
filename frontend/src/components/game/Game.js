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
 
// atualizando para o estado true.
  setEstaPulando = true;

  // timeout de 700ms = 0.7 segundos
  setTimeout(function(){

    //voltando para o estado inicial que era ' false '
    setEstaPulando (false);
  }, 700 )

};

let marioClassName = "mario";

// fazer um SE para mudar a nome da classe do Mario
// para implementar o pulo.
if (estaPulando) {
  marioClassName = "mario mario-pulo";
}

  return (
    <div className="jogo">
      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img className="cano" src={cano} alt="Cano" />
      
      <img className={marioClassName} src={mario} alt="Mário" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;