import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
      &copy; 2024 <a href="https://www.linkedin.com/in/akkala-naga-varun-b672a3202/" target="_blank" className={styles.link}>Akkala Naga Varun</a>.<br />        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
