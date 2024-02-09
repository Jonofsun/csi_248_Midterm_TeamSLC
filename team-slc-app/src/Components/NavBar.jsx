import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Landing Page</Link>
          </li>
          <li>
            <Link to="/members">Members list</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/members/create">Join Server</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
