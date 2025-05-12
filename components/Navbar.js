// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fw-bold text-light">SoftSell</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <Link href="#" className="nav-link text-light">Home</Link>
            </li>
            <li className="nav-item dropdown mx-4">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown">
                Products
              </a>
              <ul className="dropdown-menu bg-light">
                <li><Link className="dropdown-item" href="#">Enterprise</Link></li>
                <li><Link className="dropdown-item" href="#">Individual</Link></li>
              </ul>
            </li>
            <li className="nav-item mx-4">
              <Link href="#" className="nav-link text-light">About</Link>
            </li>
            <li className="nav-item mx-4">
              <Link href="#contact" className="nav-link text-light">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
