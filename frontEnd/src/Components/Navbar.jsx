import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Shift Management System</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add-shift" className="nav-link">
            Add Shift
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle">
            <FaRegUserCircle /> Rohit <MdArrowDropDown />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
