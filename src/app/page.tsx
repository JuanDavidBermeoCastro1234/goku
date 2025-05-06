"use client"

import Link  from "next/link"
import { useState } from "react";


export default function Home (){
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
  )
}

export function Conta(){

  const [contador, setcontador] =useState(0);

  return(
    <div className="conta">
      <p>contador : {contador}</p>
      <button onClick={()=> setcontador (contador+1)} className="contador">sumar</button>
    </div>
  )
}