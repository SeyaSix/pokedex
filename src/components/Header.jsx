//Le header de chaque page affiche une image (au choix) et le menu avec toutes les pages

import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="h-container">
      <img src="/img/pikachu.jpg" alt="Pikachu" className="pikachu-image" width="70px"/>
      <h1>Pokedex</h1>
      <nav className="nav-container">
        <div className="nav-header">
          <p>Navigation</p>
          <ul className="nav-list">
            <li>
            <button className="buttonNav"><Link to="/">Home</Link></button>
            </li>
            <li>
            <button className="buttonNav"><Link to="/detail">Details</Link></button>
            </li>
            <li>
              {" "}
              <button className="buttonNav"> <Link to="/liste">Liste</Link></button>
            </li>
            <li>
              {" "}
              <button className="buttonNav"><Link to="/typeFire">Type Feu</Link></button>
            </li>
            <li>
              {" "}
              <button className="buttonNav"><Link to="/typeWater">Type Eau</Link></button>
            </li>
            <li>
              {" "}
              <button className="buttonNav"><Link to="/typePoison">Type Poison</Link></button>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;