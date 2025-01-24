import { Link } from "react-router"

export const Nav = () => {
  return (
    <nav className="align-middle flex bg-pink-500 h-10 mb-10">
      <div className="align-middle flex gap-5 m-auto w-3/4">
        <Link to='/'>Home</Link>
        <Link to='cuatroxmil'>4x1000</Link>
        <Link to='interesCompuesto'>Interes Compuesto</Link>
      </div>
    </nav>
  )
}
