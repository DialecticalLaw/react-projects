import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import { Card } from '../Card/Card';
import { useAppSelector } from '../../store/hooks';

export function Home() {
  const { controlled, uncontrolled, prevFormUpdated } = useAppSelector((store) => store.data);
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <NavLink
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          to={'controlled'}
        >
          Controlled form
        </NavLink>
        <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} to={'/'}>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          to={'uncontrolled'}
        >
          Uncontrolled form
        </NavLink>
      </header>
      {pathname === '/' ? (
        <div className={styles.cards}>
          {controlled && <Card data={controlled} isPrevUpdated={prevFormUpdated === 'controlled'} />}
          {uncontrolled && <Card data={uncontrolled} isPrevUpdated={prevFormUpdated === 'uncontrolled'} />}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
