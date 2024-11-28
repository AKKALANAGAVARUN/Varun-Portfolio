import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './ContactStyles.module.css';
import { ThemeContext } from '../../context/ThemeContext';

function Contact() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="contact" className={`${styles.contact} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.icon}><FaEnvelope /></span>
              <a href="mailto:akkalavarun3024@gmail.com" className={styles.text}>akkalavarun3024@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}><FaPhone /></span>
              <a href="tel:+919347983502" className={styles.text}>+91 9347983502</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}><FaLinkedin /></span>
              <a 
                href="https://www.linkedin.com/in/akkala-naga-varun-b672a3202/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.text}
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/mldrdarl" 
            method="POST"
            className={styles.form}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" hidden>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" hidden>Email</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  placeholder="Email"
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" hidden>Subject</label>
              <input
                type="text"
                name="_subject"
                id="subject"
                placeholder="Subject"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" hidden>Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                className={styles.textarea}
                rows="6"
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
