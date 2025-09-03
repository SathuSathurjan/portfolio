import React from "react";
import { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/helper";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 text-foreground bg-background relative overflow-hidden"
    >
      {/* background elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 bg-blue-400" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-400" />
      </motion.div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* section header */}
        <motion.div
          initial="hidden"
          variants={containerVariants}
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-foreground mb-4"
          >
            Get to know me
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="
          text-3xl md:text-5xl font-foreground mb-6"
          >
            About
            <span className="text-blue-500 font-medium"> Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* personal details */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-background backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed mb-6 font-gray">
                I am a passionate and motivated Software Developer with hands-on
                experience in both web and mobile application development. I
                began my career with a 6-month internship, where I built a
                strong foundation in PHP, MySQL, HTML, CSS, JavaScript, Flutter
                and Bootstrap. Afterward, I worked as an Associate Software
                Engineer, further expanding my skills in frontend and backend
                development while collaborating with teams to deliver real-world
                projects.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-gray">
                I enjoy solving problems, writing clean and efficient code, and
                continuously learning new technologies. I am currently exploring
                React.js and Laravel, with the goal of growing as a developer
                and contributing to the creation of impactful, user-friendly
                software solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center py-8">
              <div className="text-sm mb-4 text-gray">
                Crafted with passion by
              </div>
              <div className="text-lg font-medium text-blue-500 mt-2">Thavarasa Sathurjan</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
