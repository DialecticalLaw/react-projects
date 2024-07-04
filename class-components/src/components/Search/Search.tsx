import { Component, createRef, ReactNode } from 'react';
import styles from './Search.module.css';

export class Search extends Component<{
  changeState: React.Dispatch<React.SetStateAction<{ searchTerm: string }>>;
}> {
  inputRef = createRef<HTMLInputElement>();

  render(): ReactNode {
    return (
      <section className={styles.search_section}>
        <input ref={this.inputRef} className={styles.input} type="search" placeholder="Type something..." />

        <button
          onClick={() => {
            if (this.inputRef.current) {
              this.props.changeState({ searchTerm: this.inputRef.current.value });
            }
          }}
          className={styles.btn}
          type="button"
        >
          Search
        </button>
      </section>
    );
  }
}
