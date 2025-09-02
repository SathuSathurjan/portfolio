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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
