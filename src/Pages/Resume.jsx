
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Resume() {
  return (
    <motion.div
      className="resume"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* HEADER */}
      <motion.header
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tahmina Anwari
          </motion.h1>

          <p className="job-title">
            Frontend Developer | Creative Web Designer
          </p>

          <p>
            Building responsive, interactive, and user-friendly
            digital experiences.
          </p>
        </div>

        <div className="contact">
          <p>📧 tahminaanwari7@gmail.com</p>
          <p>📱 +93 700 713333</p>
          <p>📍 Kabul, Afghanistan</p>
        </div>
      </motion.header>

      <div className="content">
        <main>
          {/* PROFILE */}
          <motion.section variants={fadeUp}>
            <h2>Profile</h2>
            <p>
              I am a motivated and creative web developer with a strong
              interest in modern web technologies and user interface
              design. I enjoy transforming ideas into attractive,
              accessible, and responsive websites.
            </p>
            <p>
              I am continuously improving my programming skills,
              exploring new tools, and learning how to build better
              digital experiences. My goal is to grow as a developer
              and contribute to meaningful projects through creativity,
              problem-solving, and dedication.
            </p>
          </motion.section>

          {/* PROJECTS */}
          <motion.section variants={fadeUp}>
            <h2>Projects</h2>

            <motion.div
              className="item"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <h3>Personal Portfolio Website</h3>
              <p className="company">
                HTML, CSS, React | Personal Project | 2026
              </p>
              <ul>
                <li>
                  Developed a personal website to showcase projects,
                  skills, and professional information.
                </li>
                <li>
                  Designed responsive layouts for desktop, tablet,
                  and mobile devices.
                </li>
                <li>
                  Focused on visual consistency, accessible content,
                  and smooth user interactions.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="item"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <h3>Resume Website</h3>
              <p className="company">
                HTML, CSS | Student Project | 2026
              </p>
              <ul>
                <li>
                  Created a digital resume to present education,
                  technical skills, and project experience.
                </li>
                <li>
                  Organized information into clear and readable sections.
                </li>
                <li>
                  Practiced responsive design, typography, and CSS layouts.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="item"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.25 }}
            >
              <h3>Interactive Web Interfaces</h3>
              <p className="company">
                React, JavaScript, CSS | Learning Project | 2026
              </p>
              <ul>
                <li>
                  Practiced building reusable React components and
                  interactive page elements.
                </li>
                <li>
                  Explored animations and transitions to improve
                  the browsing experience.
                </li>
                <li>
                  Worked on creating clean interfaces with organized code.
                </li>
              </ul>
            </motion.div>
          </motion.section>

          {/* EDUCATION */}
          <motion.section variants={fadeUp}>
            <h2>Education</h2>

            <div className="item">
              <h3>Computer Science</h3>
              <p className="company">
                Faculty of Computer Science
              </p>
              <p>
                Studying computer science fundamentals, programming,
                problem-solving, and software development concepts.
                Developing practical skills through personal projects
                and continuous learning.
              </p>
            </div>
          </motion.section>

          {/* GOALS */}
          <motion.section variants={fadeUp}>
            <h2>Career Objective</h2>
            <p>
              To develop my skills in frontend development, collaborate
              with creative teams, and build modern websites that combine
              thoughtful design with reliable functionality. I am eager
              to gain practical experience and continue learning through
              real-world challenges.
            </p>
          </motion.section>
        </main>

        {/* SIDEBAR */}
        <aside>
          <motion.section variants={fadeUp}>
            <h2>Technical Skills</h2>

            {[
              { name: "HTML", level: "80%" },
              { name: "CSS", level: "70%" },
              { name: "JavaScript", level: "50%" },
              { name: "React", level: "50%" },
              { name: "Tailwind CSS", level: "50%" },
            ].map((skill, index) => (
              <div className="skill" key={skill.name}>
                <span>{skill.name}</span>

                <div className="bar">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: skill.level }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + index * 0.15,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.section>

          <motion.section variants={fadeUp}>
            <h2>Languages</h2>
            <p>English — C1 (Advanced)</p>
            <p>Dari — Native</p>
          </motion.section>

          <motion.section variants={fadeUp}>
            <h2>Interests</h2>
            <p>💻 Frontend Development</p>
            <p>🎨 UI/UX Design</p>
            <p>✨ Web Animations</p>
            <p>📚 Continuous Learning</p>
            <p>🌐 Emerging Technology</p>
          </motion.section>

          <motion.section variants={fadeUp}>
            <h2>Personal Strengths</h2>
            <p>✓ Creative thinking</p>
            <p>✓ Problem-solving</p>
            <p>✓ Attention to detail</p>
            <p>✓ Willingness to learn</p>
            <p>✓ Team collaboration</p>
          </motion.section>

          <motion.section
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          >
            <h2>My Vision</h2>
            <p>
              To turn creative ideas into meaningful digital
              experiences and become a skilled, confident
              frontend developer.
            </p>
          </motion.section>
        </aside>
      </div>
    </motion.div>
  );
}
