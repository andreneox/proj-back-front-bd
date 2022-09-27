import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import React, {useRef, useState} from "react"; 


function Jogo() {

 /* Criamos o estado useState `estaPulando`, com o valor padrão `false`.
   Primeiro valor (estaPulando) é apenas para ler (GET)
   Segundo valor(setEstaPulando) é para atualizar o estado (SET)
    No momento que um estado é atualizado, o componente atualiza
   tudo o que está sendo renderizado. */
const [estaPulando, setEstaPulando] = useState (false);

// criando as referencias para mario e o cano com o useRef
const marioRef = useRef();
const canoRef = useRef();

// Criando a funcao marioEstaNoCano
function marioEstaNoCano(){
  // Acessamos as referências do mario e do cano atuais.
  const mario = marioRef.current;
  const cano = canoRef.current;

// Se por acaso `mario` ou `cano` não forem encontrados,
// encerra essa função
  if ( !mario || !cano ) {
    return;
  }

// Esse é o valor da lógica que determina se o mário
// está na mesma posição do cano ou não (com as checagens
// que consideram toda a área do cano)
  return (
    cano.offsetLeft > mario.offsetLeft && 
    cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
    mario.offsetTop + mario.offsetHeight > cano.offsetTop 
  );
}

// Implementação temporária para exibir se o mário está no cano
// ou não
setInterval (function(){
  const valor = marioEstaNoCano();

  console.log("Mario esta no cano?", valor);
}, 100)



document.onkeydown = function(){
 
// atualizando para o estado true.
  setEstaPulando = true;

  // timeout de 700ms = 0.7 segundos
  setTimeout(function(){

    //voltando para o estado inicial que era ' false '
    setEstaPulando (false);
  }, 700 )

};

// o padrao é a classe estar : ".mario"
let marioClassName = "mario";

// fazer um SE (estaPulando = true) para mudar a nome da classe do Mario
// de ".mario" para ".mario mario-pulo" e implementar o pulo.
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