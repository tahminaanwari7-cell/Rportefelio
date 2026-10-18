
import { motion } from "motion/react";
import prof from "../assets/images (8).jpg";

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <motion.div
          className="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="about1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="aboutspan">About me</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The developer
            <br />
            behind the code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Passionate about turning creative ideas into clean, user-friendly   <br />
         
            websites. Based in Afghanistan, working with clients  and teams <br />
            globally.
          </motion.p>
        </motion.div>
      </section>

      {/* ABOUT ME SECTION */}
      <section>
        <motion.div
          className="aboutme"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* ABOUT TEXT */}
          <motion.div
            className="aboutpic1"
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About me:
            </motion.h3>

  <p>
  I’m Tahmina Anwari, a passionate Front-End Developer who enjoys
  creating clean, responsive, and user-friendly websites. I love
  working with HTML, CSS, and JavaScript to bring creative ideas
  to life and build attractive web experiences. I’m continuously
  learning new technologies, improving my skills, and challenging
  myself with new projects. My goal is to create websites that
  look beautiful, work smoothly, and provide a great experience
  for every user.
</p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                style={{
                  display: "inline-block",
                  cursor: "default",
                }}
              >
                Creative thinking · Clean code · Continuous learning
              </motion.span>
            </motion.div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            className="aboutpic"
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.04,
              rotate: 1,
              transition: { duration: 0.3 },
            }}
          >
            <motion.img
              src={prof}
              alt="Tahmina Anwari"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
