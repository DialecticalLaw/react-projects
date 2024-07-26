import { useContext } from 'react';
import styles from './ThemeSwitch.module.css';
import { ThemeContext } from '../../store/ThemeContext';
import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';

export function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);
  if (!setTheme) throw new Error('setTheme not provided');

  return (
    <div
      className={styles.absolute_wrapper}
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
    >
      <div className={styles.relative_wrapper}>
        <div className={`${styles.switch} ${theme === 'light' ? styles.light : styles.dark}`}>
          <img src={moon} className={styles.theme_icon} alt="moon" />
          <img src={sun} className={styles.theme_icon} alt="sun" />
        </div>
      </div>
    </div>
  );
}
