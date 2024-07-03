import { Component, ReactNode } from 'react';
import styles from './Search.module.css';

export class Search extends Component {
  render(): ReactNode {
    return (
      <section className={styles.search_section}>
        <input className={styles.input} type="search" placeholder="Type something..." />
        <button className={styles.btn} type="button">
          Search
        </button>
      </section>
    );
  }
}
