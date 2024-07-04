import { Component, createRef, ReactNode } from 'react';
import styles from './Search.module.css';

export class Search extends Component<{
  changeState: React.Dispatch<React.SetStateAction<{ searchTerm: string }>>;
}> {
  inputRef = createRef<HTMLInputElement>();

  render(): ReactNode {
    return (
      <section className={styles.search_section}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (this.inputRef.current) {
              this.props.changeState({ searchTerm: this.inputRef.current.value });
            }
          }}
          className={styles.search_form}
        >
          <input ref={this.inputRef} className={styles.input} type="search" placeholder="Type something..." />
          <button className={styles.btn} type="submit">
            Search
          </button>
        </form>
      </section>
    );
  }
}
