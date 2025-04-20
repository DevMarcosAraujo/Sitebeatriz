import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logo.png"; // Ajuste o caminho conforme a estrutura do seu projeto

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Dra Beatriz Vilela" className="logo-img" />
        </Link>

        {/* Menu Desktop */}
        <nav className="desktop-menu">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/consulta">Consulta</Link></li>
            <li><Link to="/contatos">Contatos</Link></li>
          </ul>
        </nav>
        
        {/* Botão Menu Mobile */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
          <li><Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
          <li><Link to="/consulta" onClick={() => setMenuOpen(false)}>Consulta</Link></li>
          <li><Link to="/contatos" onClick={() => setMenuOpen(false)}>Contatos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
