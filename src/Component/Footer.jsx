
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="feet">
          <div className="email-input">
            <input
              type="email"
              id="email"
              placeholder="tahminaanwari7@gmail.com"
            />

            <span className="email-icon">↗</span>
          </div>

          <p>Tahmina Anwari: Front-End Dev</p>
          <p>Available for: Freelance Projects & Full-Time</p>
        </div>

        <div className="feet2">
          <p className="small">Pages</p>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/#projects">Work</Link>
        </div>

        <div className="feet3">
          <p className="small">Socials</p>

          <a href="https://www.instagram.com/anwari_ta">
            Instagram
          </a>

          <a href="https://github.com/tahminaanwari7-cell/Skill-courses">
            Github
          </a>

          <a href="https://www.linkedin.com/in/tahmina-anwari-648617428/">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="last">
        <span>© 2026 Tahmina Anwari. All rights reserved.</span>
        <span>Designed & Developed by Tahmina Anwari</span>
      </div>
    </footer>
  );
}
