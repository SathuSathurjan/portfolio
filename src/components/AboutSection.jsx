import React from "react";
import { useRef } from "react";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/helper";
import { Briefcase, Code2, Rocket } from "lucide-react";

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

  const JourneySteps = [
    {
      year: "2022",
      title: "Started Coding Journey",
      company: "Accademic Projects",
      description:
        "I began my coding journey by learning the fundamentals of web development using HTML, CSS, and JavaScript. During this time, I created my first interactive website and discovered my passion for building user-friendly digital experiences.",
      icon: Code2,
    },
    {
      year: "2024",
      title: "First Internship",
      company: "The Dev Friend Tech",
      description:
        "Completed a 6-month internship where I gained practical experience in web and software development. Worked on real-world projects, collaborated with teams, and strengthened my skills in PHP,Flutter and modern frontend technologies.",
      icon: Briefcase,
    },
    {
      year: "2025",
      title: "FullStack Developer",
      company: "The Dev Friend Tech",
      description:
        "Joined as a Full-Stack Developer, where I contribute to designing, developing, and maintaining web applications and mobile application. This role has helped me enhance my problem-solving abilities, improve backend logic, and deliver efficient, responsive user interfaces.",
      icon: Rocket,
    },
  ];

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
              <div className="text-lg font-medium text-blue-500 mt-2">
                Thavarasa Sathurjan
              </div>
            </motion.div>
          </motion.div>

          {/* my developer journey timeline */}
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={timelineVariants}
            className="relative"
          >
            <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
              My Developer Journey
            </h3>
            {/* timeline */}
            <div className="absolute top-16 left-8 bottom-0 w-px bg-gray-300" />
            <div className="space-y-8">
              {JourneySteps.map((step, index) => (
                <motion.div
                  key={step.year}
                  variants={stepVariants}
                  whileHover={{ x: 4 }}
                  className="relative flex items-start space-x-6 group"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={24} className="text-white" />
                  </div>

                  {/* content */}
                  <div className="flex-grow p-6 rounded-xl border transition-all duration-300 bg-background/80 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-medium">{step.title}</h4>
                      <span className="text-sm px-3 py-1 rounded-full ">
                        {step.year}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-blue-400">
                      {step.company}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
