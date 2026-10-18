
import { Link } from "react-router";
import logo from "../assets/images (8).jpg"
export default function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <div className="navv">
          <img src={logo} alt="" />

          <div className="profile-info">
            <h3>Tahmina Anwari</h3>
            <p>Front-End Dev</p>
          </div>
        </div>

        <div className="nav_link">
          <ul className="menu">
            <li>
              <Link to="/#projects">Projects</Link>
            </li>

            <li>
              <Link to="/about">About me</Link>
            </li>

            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>

          <a
            href="https://t.me/tahmina_anwari"
            className="chat_btn"
          >
            <span className="telegram">➤</span>
            Let's chat
          </a>
        </div>
      </nav>
    </section>
  );
}
