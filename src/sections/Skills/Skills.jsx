import React, { useContext } from 'react';
import styles from './SkillsStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';

function Skills() {
  const { darkMode } = useContext(ThemeContext);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "Java", "JavaScript", "R"]
    },
    {
      title: "Web Technologies",
      icon: <FaLaptopCode />,
      skills: ["React", "Node.js", "HTML5", "CSS3"]
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: ["Git", "VS Code", "Power BI", "Linux", "Windows", "UML", "Microsoft Office"]
    },
    {
      title: "Database & Others",
      icon: <FaDatabase />,
      skills: ["SQL", "IPC Frameworks", "SDLC", "Agile"]
    }
  ];

  return (
    <section className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
