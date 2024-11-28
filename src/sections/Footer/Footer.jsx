import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCopyright } from 'react-icons/fa';
import styles from './FooterStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.copyright}>
            <FaCopyright className={styles.copyrightIcon} /> {currentYear} Akkala Naga Varun. All rights reserved.
          </span>
          <span className={styles.separator}>|</span>
          <a href="mailto:akkalavarun3024@gmail.com" className={styles.link}>
            <FaEnvelope className={styles.icon} />
            akkalavarun3024@gmail.com
          </a>
          <span className={styles.separator}>|</span>
          <a href="tel:+919347983502" className={styles.link}>
            <FaPhone className={styles.icon} />
            +91 9347983502
          </a>
          <span className={styles.separator}>|</span>
          <a 
            href="https://www.linkedin.com/in/akkala-naga-varun-b672a3202/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedin className={styles.icon} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
