import styles from './Loader.module.css';
import loaderSvg from '../../assets/img/infinite-spinner.svg';

export function Loader() {
  return (
    <div className={styles.loader_wrapper}>
      <img className={styles.loader} src={loaderSvg} alt="loader" />
    </div>
  );
}
