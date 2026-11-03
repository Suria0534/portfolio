
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav container">
      <a href="#home" className="logo" aria-label="Suraiya home">
        S<span>.</span>
      </a>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        {/* <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a> */}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <a href="#projects" className="nav-cta">
        View my work <span aria-hidden="true">↗</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {menuOpen ? '×' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;
