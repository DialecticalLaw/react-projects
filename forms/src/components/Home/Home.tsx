import { NavLink, Outlet } from 'react-router-dom';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <NavLink
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          to={'controlled'}
        >
          Controlled form
        </NavLink>
        <NavLink
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          to={'uncontrolled'}
        >
          Uncontrolled form
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
}
