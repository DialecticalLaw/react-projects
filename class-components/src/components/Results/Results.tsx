import { Component, ReactNode } from 'react';
import styles from './Results.module.css';
import { Starship } from '../../services/API_service';

export class Results extends Component<{ items: Starship[] }> {
  render(): ReactNode {
    return (
      <section className={styles.results_section}>
        {this.props.items.map((item) => {
          return (
            <div className={styles.item}>
              <h1 className={styles.item_title}>{item.name}</h1>

              <p className={styles.item_prop}>
                Model: <span className={styles.item_value}>{item.model}</span>
              </p>

              <p className={styles.item_prop}>
                Manufacturer: <span className={styles.item_value}>{item.manufacturer}</span>
              </p>

              <p className={styles.item_prop}>
                Max atmospheric speed:{' '}
                <span className={styles.item_value}>{item.max_atmosphering_speed}</span>
              </p>

              <p className={styles.item_prop}>
                Crew: <span className={styles.item_value}>{item.crew}</span>
              </p>
            </div>
          );
        })}
      </section>
    );
  }
}
