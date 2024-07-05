import { Component } from 'react';
import styles from './Loader.module.css';
import loaderSvg from '../../assets/img/infinite-spinner.svg';

export class Loader extends Component {
  render() {
    return (
      <div className={styles.loader_wrapper}>
        <img className={styles.loader} src={loaderSvg} alt="loader" />
      </div>
    );
  }
}
