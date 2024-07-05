import { Component, createRef, ReactNode } from 'react';
import styles from './Search.module.css';

export class Search extends Component<{
  changeState: React.Dispatch<React.SetStateAction<{ searchTerm: string }>>;
  initialSearchTerm: string;
}> {
  private inputRef = createRef<HTMLInputElement>();
  state = { isValid: true };

  private changeSearchTerm() {
    const inputValue = this.inputRef.current?.value;

    if (inputValue !== undefined) {
      if (inputValue[inputValue.length - 1] !== ' ' || inputValue === '') {
        this.setState({ isValid: true });
        localStorage.setItem('dialecticallaw-search-term', inputValue);
        this.props.changeState({ searchTerm: inputValue });
      } else this.setState({ isValid: false });
    }
  }

  componentDidUpdate(): void {
    const input = this.inputRef.current;
    if (input) input.value = this.props.initialSearchTerm;
  }

  render(): ReactNode {
    return (
      <section className={styles.search_section}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.changeSearchTerm();
          }}
          className={styles.search_form}
        >
          <label className={styles.label}>
            <input
              ref={this.inputRef}
              className={styles.input}
              type="search"
              placeholder="Type something..."
            />
            {!this.state.isValid && <p className={styles.validation_error}>Remove the trailing spaces</p>}
          </label>

          <button className={styles.btn} type="submit">
            Search
          </button>
        </form>
      </section>
    );
  }
}
