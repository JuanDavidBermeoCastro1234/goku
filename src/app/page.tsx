import Link  from "next/link"


export default function Home (){
  return(
    <>
    <div className="ejm">
      <h1>hola</h1>
      <p>example</p>

      <Link href="hola">
        <button>holas </button>
      </Link>
    </div>
    </>
  )
}