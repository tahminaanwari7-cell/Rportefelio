
import { motion } from "motion/react";

import img1 from "../assets/web1.jpg";
import img2 from "../assets/web2.jpg";
import img3 from "../assets/web3.jpg";
import img4 from "../assets/web4.jpg";
import img5 from "../assets/web5.jpg";
import img6 from "../assets/web6.jpg";

import slide1 from "../assets/images.png";
import slide2 from "../assets/images (1).jpg";
import slide3 from "../assets/images.jpg";
import slide4 from "../assets/download.png";

import book from "../assets/googlemeet.png";

import pic1 from "../assets/botcamp2img.png";
import pic2 from "../assets/bootcamp1img.png";
import pic3 from "../assets/eco.png";
import pic4 from "../assets/crm.png";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const projectContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectItem = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const slides = [
    { image: slide1, title: "Proofly" },
    { image: slide2, title: "Finte" },
    { image: slide4, title: "Trackly" },
    { image: slide3, title: "Taskgen" },
    { image: slide4, title: "Proofly" },
    { image: slide1, title: "Finte" },
    { image: slide2, title: "Trackly" },
    { image: slide3, title: "Taskgen" },
  ];

  const images = [
    img1, img2, img3, img4, img5, img6,
    img1, img2, img3, img4, img5, img6,
  ];

  const projects = [
    {
      image: pic1,
      title: "Bootcamp 2",
      subtitle: "Findit - Real Estate Website",
      link: "https://bootcamp-2-one.vercel.app/",
      number: "01",
    },
    {
      image: pic2,
      title: "Bootcamp 1",
      subtitle: "Design to Delight",
      link: "https://boot-camp1-two.vercel.app/",
      number: "02",
    },
    {
      image: pic3,
      title: "Form",
      subtitle: "Zohoco - Framer Website",
      link: "https://zohoco-website.vercel.app/",
      number: "03",
    },
    {
      image: pic4,
      title: "Web + Figma",
      subtitle: "Netlinks CRM",
      link: "https://web4-bice-two.vercel.app/",
      number: "04",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section>
        <motion.div
          className="Hero"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="tairadot"
            variants={heroItem}
          >
            <motion.span
              className="dot"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [1, 0.65, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Front-End Developer · Open to Opportunities
          </motion.div>

          <motion.h1 variants={heroItem}>
            Building websites
            <br />
            people love to use
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.45 }}
            >
              
            </motion.span>
          </motion.h1>

          <motion.p variants={heroItem}>
            Turning creative ideas into websites that are simple,
            <br />
            engaging, and easy to use.
          </motion.p>

          <motion.div
            className="omid"
            variants={heroItem}
          >
            <motion.a
              href="https://meet.google.com/home?authuser=0"
              className="videocall"
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="call"
                whileHover={{ rotate: -8 }}
              >
                <img src={book} alt="" />
              </motion.span>
              Book a free call
            </motion.a>

            <motion.a
              href="https://t.me/tahmina_anwari"
              className="chat_btn"
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="telegram"
                whileHover={{ x: 3, y: -2 }}
              >
                ➤
              </motion.span>
              Let's chat
            </motion.a>
          </motion.div>
        </motion.div>

        {/* FIRST SLIDER */}
        <motion.div
          className="slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="slider-track">
            {slides.map((slide, index) => (
              <motion.div
                className="slide"
                key={`${slide.title}-${index}`}
                whileHover={{
                  y: -7,
                  scale: 1.04,
                }}
                transition={{ duration: 0.25 }}
              >
                <img src={slide.image} alt={slide.title} />
                <div className="slideinfo">
                  <p>{slide.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECOND SLIDER */}
        <motion.div
          className="move"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="move1">
            {images.map((image, index) => (
              <motion.div
                className="slide1"
                key={index}
                whileHover={{
                  scale: 1.06,
                  y: -5,
                }}
                transition={{ duration: 0.25 }}
              >
                <img src={image} alt={`Website design ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <motion.div
          className="projecthead"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.span
            whileHover={{ letterSpacing: "3px" }}
            transition={{ duration: 0.3 }}
          >
            View projects
          </motion.span>

          <h1>
            Websites built with purpose,
            <br />
            finished with clean code.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A selection of projects showcasing my creativity,
            development skills, and attention to detail.
          </motion.p>
        </motion.div>

        <motion.div
          className="project"
          variants={projectContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {projects.map((project) => (
            <motion.div
              className="projectpic"
              key={project.number}
              variants={projectItem}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
                whileTap={{ scale: 0.98 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.subtitle}
                  whileHover={{
                    scale: 1.07,
                  }}
                  transition={{ duration: 0.45 }}
                />
              </motion.a>

              <motion.p
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <span>{project.number} / </span>
                {project.title}
                <br />
                {project.subtitle}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}