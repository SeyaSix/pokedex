//Le header de chaque page affiche une image (au choix) et le menu avec toutes les pages
import pikachu from "../img/pikachu.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="h-container">
      <img src={pikachu} alt="Pikachu" className="pikachu-image" />
      <h1>Pokedex</h1>
      <nav className="nav-container">
        <div className="nav-header">
          <p>Navigation</p>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail">details</Link>
            </li>
            <li>
              {" "}
              <Link to="/liste">liste</Link>
            </li>
            <li>
              {" "}
              <Link to="/typeFeu">Type Feu</Link>
            </li>
            <li>
              {" "}
              <Link to="/typeWater">Type Eau</Link>
            </li>
            <li>
              {" "}
              <Link to="/typePoison">Type Poison</Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;