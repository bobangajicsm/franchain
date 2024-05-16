import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/franchain-logo.webp";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar text-white">
      <img className="logo" src={logo} alt="Franchain logo" />
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active flex justify-between items-center"
                  : "nav-link flex justify-between items-center"
              }
              to="/"
            >
              Home
              <span className="nav-progress bg-white">1/6</span>
            </NavLink>
          </li>
          <li>
            <div className="collapse collapse-arrow">
              <input type="radio" name="nav-accordion" />
              <div className="collapse-title nav-link flex justify-between items-center">
                Collections
              </div>
              <div className="collapse-content">links</div>
            </div>
          </li>
          <li>
            <div className="collapse collapse-arrow">
              <input type="radio" name="nav-accordion" />
              <div className="collapse-title nav-link flex justify-between items-center">
                Operators
              </div>
              <div className="collapse-content">links</div>
            </div>
          </li>
          <li>
            <div className="collapse collapse-arrow">
              <input type="radio" name="nav-accordion" />
              <div className="collapse-title nav-link flex justify-between items-center">
                Locations
              </div>
              <div className="collapse-content">links</div>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
