import styles from './HeroStyles.module.css';
import heroImg from '../../assets/AKKALA NAGA VARUN_Photo.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Akkala Naga Varun"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Akkala
          <br />
          Naga Varun
        </h1>
        <h2>Computer Science Engineer</h2>
        <span>
          <a href="https://github.com/AKKALANAGAVARUN" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/akkala-naga-varun-b672a3202/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for technology and a dedication to excellence, I aim to create impactful experiences.
        </p>
        <a href="https://drive.google.com/file/d/15Y5mrPsr5IsyTcVE8V21D-93U8mh56Mj/view?usp=sharing" target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
