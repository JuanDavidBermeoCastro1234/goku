import Link  from "next/link"


export default function home(){

    return(
        <>
    <h1>que pasa vale </h1>
      <p>agua</p>  
      
    <Link href='/'>
    <button className="buttton">regresar</button>
    </Link>
    
    </>

    )
}