import React, { useContext } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/AKKALA NAGA VARUN_Photo.jpg';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';

function Hero() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.info}>
        <div className={styles.nameContainer}>
          <h1>Akkala Naga Varun</h1>
          <h2>Computer Science Engineer</h2>
        </div>
        
        <p className={styles.description}>
          With a passion for technology and a dedication to excellence, I aim to create impactful experiences.
        </p>

        <div className={styles.contact}>
          <a href="mailto:akkalavarun3024@gmail.com" className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span>akkalavarun3024@gmail.com</span>
          </a>
          <a href="tel:+919347983502" className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <span>+91 9347983502</span>
          </a>
        </div>
        
        <div className={styles.socials}>
          <a 
            href="https://github.com/AKKALANAGAVARUN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaGithub className={styles.socialIcon} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/akkala-naga-varun-b672a3202/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaLinkedin className={styles.socialIcon} />
            <span>LinkedIn</span>
          </a>
        </div>
        
        <a 
          href="https://drive.google.com/file/d/1AXI8pz4arkyhoWcY4IAQpbnjqfXvUj5c/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          View Resume
        </a>
      </div>
      
      <div className={styles.imageContainer}>
        <img src={heroImg} alt="Akkala Naga Varun" className={styles.heroImage} />
      </div>
    </section>
  );
}

export default Hero;
