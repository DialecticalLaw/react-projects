import styles from './Loader.module.css';
import loaderSvg from '../../assets/img/infinite-spinner.svg';
import Image from 'next/image';

export function Loader() {
  return (
    <div className={styles.loader_wrapper}>
      <Image width={100} height={60} className={styles.loader} src={loaderSvg} alt="loader" />
    </div>
  );
}
