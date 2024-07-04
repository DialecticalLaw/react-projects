import { Component, ReactNode } from 'react';
import styles from './Results.module.css';
import { Starship } from '../../services/API_service';

export class Results extends Component<{ items: Starship[] }> {
  render(): ReactNode {
    return <section className={styles.results_section}>{JSON.stringify(this.props.items)}</section>;
  }
}
