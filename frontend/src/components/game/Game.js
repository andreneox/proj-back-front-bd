import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import {useState} from "react"; 


function Jogo() {

 /*configurando o estado (useState) estaPulando, com confirmação do botao clicado 
 no onkeydown mostrando no console.log*/ 
const [estaPulando, setEstaPulando] = useState (false);

document.onkeydown = function(){
  console.log ("On Key Down");

  estaPulando = true;
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