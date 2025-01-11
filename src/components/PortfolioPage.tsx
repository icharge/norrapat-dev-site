"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  Code2,
  Briefcase,
  Database,
  Cloud,
  ChevronRight,
  Moon,
  Sun,
  Linkedin,
  Github,
  Mail,
  Calendar,
  FileDown,
} from "lucide-react";
import {
  SiSpring,
  SiReact,
  SiAngular,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { AnimatedH1, AnimatedHeader } from "./AnimatedComponent";
import { GiGraduateCap } from "react-icons/gi";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import classNames from "classnames";

const styles = {
  container: "container mx-auto px-4",
  section: "py-16",
  sectionTitle: "text-3xl font-bold mb-8",
  card: {
    base: "p-6 rounded-lg shadow-lg",
    light: "bg-white",
    dark: "bg-gray-800",
  },
  text: {
    primary: {
      light: "text-navy-900",
      dark: "text-white",
    },
    secondary: {
      light: "text-navy-700",
      dark: "text-navy-100",
    },
    tertiary: {
      light: "text-navy-500",
      dark: "text-navy-200",
    },
  },
  timeline: {
    line: "absolute left-8 -translate-x-1/2 h-full w-0.5 bg-navy-600",
    icon: {
      wrapper:
        "absolute left-8 -translate-x-1/2 w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center",
      inner: "w-4 h-4 text-white",
    },
    card: {
      wrapper: "ml-16 mb-8",
      content: "p-6 rounded-lg shadow-lg",
    },
  },
  header: {
    base: "fixed w-full z-50 transition-all duration-300",
    scrolled: "py-2",
    notScrolled: "py-4",
    blur: "backdrop-blur-md",
  },
  button: {
    primary: "bg-navy-500 hover:bg-navy-600 text-white",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white",
  },
};

const PortfolioPage = () => {
  const darkModeToggleEnabled = false;

  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (darkModeToggleEnabled) {
      const darkModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setIsDark(darkModePreference.matches);
    }
  }, [darkModeToggleEnabled]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 110);
  });

  const skills = {
    backend: ["Java", "Spring Boot", "NodeJS", "Go lang"],
    frontend: ["React", "Angular", "Ionic", "MUI", "Ant Design", "Tailwind"],
    databases: [
      "PostgreSQL",
      "Oracle",
      "MySQL",
      "MSSQL",
      "MongoDB",
      "Cassandra",
    ],
    cloud: ["AWS", "AKS", "Kubernetes", "Docker", "Jenkins"],
  };

  const projects = [
    {
      title: "Insurance Application Modernization",
      description:
        "Microservices-based insurance platform with Keycloak authentication",
      tech: ["Spring Boot", "ReactJS", "Docker", "Kubernetes"],
      icon: <SiSpring className="w-6 h-6" />,
    },
    {
      title: "Pharmaceutical Management System",
      description:
        "Containerized application with authentication system integration",
      tech: ["Spring Boot", "Angular", "AzureAD", "PostgreSQL"],
      icon: <SiDocker className="w-6 h-6" />,
    },
  ];

  const experience = [
    {
      company: "Allianz Technology (Thailand) Co., Ltd.",
      role: "Full Stack Developer",
      period: "May 2021 - Present",
      location: "Bangkok",
      achievements: [
        "Designed and implemented scalable insurance applications using microservices",
        "Led Keycloak integration with SMS OTP services",
        "Modernized legacy systems with Maven (Java 8) and CI/CD pipelines",
      ],
    },
    {
      company: "Siam Pharmaceutical Co., Ltd.",
      role: "Software Engineer",
      period: "December 2018 - May 2021",
      location: "Bangkok",
      achievements: [
        "Developed containerized applications using Spring Boot and ReactJS",
        "Engineered scalable authentication systems with Keycloak and AzureAD",
        "Optimized mobile application performance, improving sync speeds by 50%",
      ],
    },
    {
      company: "Genesis Technology Co., Ltd.",
      role: "Senior Software Engineer",
      period: "January 2018 - December 2018",
      location: "Bangkok",
      achievements: [
        "Designed web crawlers for e-commerce data harvesting",
        "Developed SODOAN marketing platform with PayPal integration",
      ],
    },
    {
      company: "Avalant Co., Ltd.",
      role: "Software Developer",
      period: "March 2015 - December 2017",
      location: "Bangkok",
      achievements: [
        "Implemented IBM BPM solutions for financial systems",
        "Developed hybrid mobile applications using Angular and Ionic",
      ],
    },
  ];

  const education = [
    {
      school: "Burapha University, Chanthaburi",
      degree: "B.A. in Information System",
      period: "2011 - 2015",
    },
    {
      school: "Singsamut School",
      degree: "High School",
      period: "2007 - 2010",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedHeader
        className={`
          ${styles.header.base}
          ${isDark ? "bg-gray-900/90" : "bg-white/90"}
          ${isScrolled ? styles.header.scrolled : styles.header.notScrolled}
          ${styles.header.blur}
        `}
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className={classNames(
            styles.container,
            "flex justify-between items-center"
          )}
        >
          <AnimatedH1
            className={`font-bold transition-all duration-300 text-2xl origin-left ${
              isScrolled ? "scale-75" : "scale-100"
            } ${isDark ? styles.text.primary.dark : styles.text.primary.light}`}
          >
            Norrapat N.
          </AnimatedH1>
          <div className="flex items-center gap-4">
            {darkModeToggleEnabled && (
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-full ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/norrapatni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`}
              />
            </a>
            <a
              title="GitHub"
              href="https://github.com/icharge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className={`w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`}
              />
            </a>
          </div>
        </div>
      </AnimatedHeader>

      {/* Hero Section */}
      <div className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-gradient-to-r from-navy-600 to-navy-800 text-white py-20`}
        >
          <div className="container mx-auto px-4">
            {
              <AnimatedH1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Norrapat Nimmanee
              </AnimatedH1>
            }
            <motion.h2
              className="text-2xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Senior Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-lg max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Motivated professional seeking to grow and contribute to the
              success of a dynamic company. Passionate about continuous learning
              and making impactful contributions to team goals.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                {category === "backend" && (
                  <Code2 className="w-6 h-6 text-navy-600 mr-2" />
                )}
                {category === "frontend" && (
                  <Briefcase className="w-6 h-6 text-navy-600 mr-2" />
                )}
                {category === "databases" && (
                  <Database className="w-6 h-6 text-navy-600 mr-2" />
                )}
                {category === "cloud" && (
                  <Cloud className="w-6 h-6 text-navy-600 mr-2" />
                )}
                <h3 className="text-xl font-semibold capitalize">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 text-navy-600 mr-2" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div
        className={`${styles.container} ${styles.section} ${
          isDark ? "text-white" : ""
        }`}
      >
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className={styles.timeline.line} />

          {experience.map((exp) => (
            <ScrollAnimationWrapper key={exp.company}>
              <div className={styles.timeline.card.wrapper}>
                {/* Timeline icon */}
                <div className={styles.timeline.icon.wrapper}>
                  <Calendar className={styles.timeline.icon.inner} />
                </div>

                {/* Card content */}
                <div
                  className={`
                  ${styles.timeline.card.content}
                  ${isDark ? styles.card.dark : styles.card.light}
                `}
                >
                  <h3 className="text-xl font-bold text-navy-600">
                    {exp.company}
                  </h3>
                  <div
                    className={
                      isDark
                        ? styles.text.secondary.dark
                        : styles.text.secondary.light
                    }
                  >
                    {exp.role}
                  </div>
                  <div
                    className={`text-sm mb-4 ${
                      isDark
                        ? styles.text.tertiary.dark
                        : styles.text.tertiary.light
                    }`}
                  >
                    {exp.period} | {exp.location}
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-navy-600 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div
        className={`container mx-auto px-4 py-16 ${isDark ? "text-white" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-xl font-bold ml-2">{project.title}</h3>
              </div>
              <p
                className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-navy-100 text-navy-800 dark:bg-navy-900 dark:text-navy-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div
        className={`container mx-auto px-4 py-16 ${isDark ? "text-white" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex items-center mb-2">
                <GiGraduateCap className="w-6 h-6 text-navy-600 mr-2" />
                <h3 className="text-xl font-bold">{edu.school}</h3>
              </div>
              <div className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {edu.degree}
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
