"use client"

import Link  from "next/link"
import { useEffect,useState } from "react";

      {/* inicia la funcion principal añade el evento de escucha para enter 
        y añade el uso de los hooks useEffect,useStates en false muestra 
        la pagina principal en true borra todo y renderiza solamente el hola mundo*/}

export default function Home (){
  const [empiezaFalse, contadorBoleano] = useState(false);

  useEffect(() => {
    const llave = (e:KeyboardEvent) => {
      if (e.key === "Enter"){
        contadorBoleano(true)
      }
    };
    document.addEventListener("keydown", llave)


return()=>{
  document.removeEventListener("keydown", llave)

};

},[]);
  if (empiezaFalse){
    return <h1>hola mundo</h1>;
  }
      {/* renderizado pagina principal*/}

  return(
    <>
    <div className="ejm">
      <h1>hola</h1>
      <p>example</p>

      <Link href="hola">
        <button className="button">holas </button>
      </Link>
      <Conta/>
    </div>
    </>
  );

      {/* esto es lo que dibuja el boton contador y se lo añade a la pagina principal */}
   function Conta(){

    const [contador, setcontador] =useState(0);
  
    return(
      <div className="conta">
        <p>contador : {contador}</p>
        <button onClick={()=> setcontador (contador+1)} className="contador">sumar</button>
      </div>
    )
  }
  
}



