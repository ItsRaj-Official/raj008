import raj from "../assets/raj.jpeg";
import { motion } from "framer-motion";
import "./Css/About.css";
import "../App.css";
import cv from "../assets/Majharul_Islam_CV.pdf";
import { Link } from "react-router-dom";
import { FaDownload, FaFacebookF } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const [text] = useTypewriter({
    words: ["Python Developer", "Machine Learning Enthusiast", "Data Science Engineer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });
  return (
    <div className=" rounded-md py-8" id="about">
      <div className="hero-content  gap-3 flex-col-reverse md:flex-row">
        <div className=" flex-1 space-y-2  text-center md:text-start p-8">
          <motion.h1
            variants={container(0.1)}
            initial="hidden"
            animate="visible"
            className=" text-3xl md:text-5xl font-bold"
          >
            Hi , i'm <span className=" text-rose-700">Majharul Islam </span>
          </motion.h1>
          <motion.h3
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className=" text-2xl md:text-4xl"
          >
            I am a <span className="text-rose-400 font-bold"> {text}</span>
            <Cursor />
          </motion.h3>
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
          >

            <motion.h4 className=" text -2xl font-bold">
            Python | ML | DL | AI | CSE Undergrad at North Western University, Khulna
          </motion.h4>
          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            ></motion.p>
            I have experience in Python, Machine Learning, Artificial Intelligence (AI), Deep Learning, C, C++, PHP, JavaScript, and MySQL. As a Computer Science and Engineering student at North Western University, I’m passionate about exploring emerging technologies and continuously improving the quality of my work. I enjoy solving complex problems and contributing to meaningful projects in the tech field.


          </motion.p>
          <motion.div
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className=" flex gap-2 my-10 text-3xl"
          >
            <Link to="https://www.facebook.com/majhar008">
              <FaFacebookF className=" contact-icon text-[#1877F2]" />
            </Link>
            <Link to="https://www.linkedin.com/in/mohammad-majharul-islam">
              <GrLinkedin className="contact-icon text-[#0077B5]" />
            </Link>
            <Link to="https://www.instagram.com/majhar008">
              <FaSquareInstagram className="contact-icon text-[#962fbf]" />
            </Link>
            <Link to="https://x.com/Majhar008">
              <FaSquareXTwitter className="contact-icon text-[#000000]" />

            </Link>
          </motion.div>
          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className=" my-5 flex gap-3"
          >
            <a
              download=""
              href={cv}
              className="btn   text-xl font-semibold btn-secondary bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            >
              Download Resume <FaDownload />
            </a>
            {/* <Link
              to="/contact"
              className=" btn  text-xl font-semibold  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            >
              Contact me
            </Link> */}
          </motion.div>
        </div>
        <div className=" flex-1 ">
          <div className=" flex justify-center items-center">
            <img
              // className="img"
              className=" img w-[300px] h-[350px] border-2 hover:shadow-2xl img2 "
              src={raj}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
