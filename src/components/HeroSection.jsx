import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImage from "../assets/profile.jpeg"; // Adjust the path as necessary
import { ArrowDown, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { containerVariants, itemVariants } from "../utils/helper";
import TextChanger from "../utils/TextChanger";

export const HeroSection = () => {
  const { scrollY } = useScroll();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SocialLinks = [
    { icon: GithubIcon, href: "#" },
    { icon: LinkedinIcon, href: "#" },
    { icon: MailIcon, href: "#" },
  ];

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen transition-all duration-500 bg-background">
      {/* hero section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 bg-background`}
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 bg-background`}
          />
          <div className="max-w-7xl mx-auto w-full z-10 mt-20">
            {/* mobile layout centered */}
            <div className="block lg:hidden">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center pt-6"
              >
                {/* profile image -mobile */}
                <motion.div variants={imageVariants} className="mb-8">
                  <div className="w-32 h-32 mx-auto relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-full h-32 rounded-2xl overflow-hidden border-4 border-gray-500 shadow-2xl`}
                    >
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* decorative ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                    />
                  </div>
                </motion.div>

                {/* content -mobile */}
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl md:text:5xl font-light leading-tight"
                >
                  <span className="text-foreground">Hi, It's </span>
                  <span className="text-blue-500 font-medium ml-2">
                    Sathurjan
                  </span>
                  <br />
                  <span className="text-foreground max-w-xl mx-auto font-medium flex justify-start pl-8 gap-3 text-xl">
                    I'm a
                    <TextChanger />
                  </span>
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-foreground mb-8 max-w-xl mx-auto font-light leading-relaxed px-4 text-left"
                >
                  I’m a passionate developer specializing in full-stack web
                  development, Flutter mobile apps, and modern web design.I
                  build functional, visually appealing, and user-friendly
                  applications that bring ideas to life with clean code and
                  creativity.
                </motion.p>
                {/* buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                >
                  <motion.button
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("work")}
                    className="bg-blue-500 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer"
                  >
                    View Work
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("contact")}
                    className="border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer"
                  >
                    Get in Touch
                  </motion.button>
                </motion.div>
                {/* social links */}
                <motion.div
                  variants={itemVariants}
                  className="flex justify-center space-x-6 mb-8"
                >
                  {SocialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="p-3 rounded-full transition-colors"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            {/* desktop layout split */}
            <div className="hidden lg:grid lg:grid-cols-[60%_40%] lg:gap-16 lg:items-center px-5">
              {/* left column-left */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-left"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl xl:text-6xl font-light mb-2 leading-tight mt-15"
                >
                  <span className="text-foreground font-medium">Hi, It's </span>
                  <span className="text-blue-500 font-medium">Sathurjan</span>
                  <br />
                </motion.h1>
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl xl:text-4xl font-light mb-8 leading-tight"
                >
                  <span className="text-foreground font-medium flex gap-3">
                    I'm a
                    <TextChanger />
                  </span>
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-foreground mb-12 font-light leading-relaxed max-w-lg"
                >
                  I’m a passionate developer specializing in full-stack web
                  development, Flutter mobile apps, and modern web design.I
                  build functional, visually appealing, and user-friendly
                  applications that bring ideas to life with clean code and
                  creativity.
                </motion.p>
                {/* buttons - desktop */}
                <motion.div variants={itemVariants} className="flex gap-6 mb-8">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("work")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer"
                  >
                    View Work
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("contact")}
                    className="border border-blue-500 text-blue-500 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer"
                  >
                    Get in Touch
                  </motion.button>
                </motion.div>
                {/* social links - desktop */}
                <motion.div
                  variants={itemVariants}
                  className="flex space-x-6 mb-12"
                >
                  {[
                    { icon: GithubIcon, href: "#" },
                    { icon: LinkedinIcon, href: "#" },
                    { icon: MailIcon, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="p-3 rounded-full transition-colors text-foreground"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
              {/* right column - image */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                className="flex justify-center lg:justify-center"
              >
                <div className="relative">
                  {/* decorative element */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-3xl border border-blue-500/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-0 rounded-3xl border-purple-500/10"
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-gray-400 shadow-2xl"
                  >
                    <img
                      src={profileImage}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-foreground" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
