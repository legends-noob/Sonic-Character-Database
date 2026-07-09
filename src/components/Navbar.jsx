import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🦔 <span>Sonic Character Database</span>
      </div>

      <ul className="nav-links">
        <li>Início</li>
        <li>Personagens</li>
        <li>Sobre</li>
      </ul>
    </nav>
  );
}

export default Navbar;