import { Link } from 'react-router-dom'
import { Music } from 'lucide-react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <Music size={28} />
          <span>Bully Sound Services</span>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Book Now</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}
