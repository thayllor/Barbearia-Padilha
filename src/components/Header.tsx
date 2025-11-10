import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { getContactWhatsAppLink, getAppointmentWhatsAppLink } from '../utils/whatsapp';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <img src="/assets/logo nova.png" alt="Barbearia Padilha Logo" className="logo" />
          <h1>Barbearia Padilha</h1>
        </div>
        
        {/* Botão Hamburger para Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        {/* Menu Desktop */}
        <ul className="nav-menu desktop-menu">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
          <li><a href={getContactWhatsAppLink()} target="_blank" rel="noopener noreferrer">Contato</a></li>
        </ul>
        
        <div className="nav-cta desktop-cta">
          <a href={getAppointmentWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <button className="btn-agendar">AGENDAR</button>
          </a>
        </div>
      </nav>
      
      {/* Menu Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu">
          <li><Link to="/" onClick={closeMenu}>Início</Link></li>
          <li><Link to="/sobre" onClick={closeMenu}>Sobre</Link></li>
          <li><Link to="/galeria" onClick={closeMenu}>Galeria</Link></li>
          <li><a href={getContactWhatsAppLink()} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Contato</a></li>
          <li className="mobile-cta">
            <a href={getAppointmentWhatsAppLink()} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <button className="btn-agendar">AGENDAR</button>
            </a>
          </li>
        </ul>
      </div>
      
      {/* Overlay para fechar o menu ao clicar fora */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
