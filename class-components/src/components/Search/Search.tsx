import { Component, createRef, ReactNode } from 'react';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export class Search extends Component<{
  changeState: React.Dispatch<React.SetStateAction<{ searchTerm: string }>>;
  initialSearchTerm: string;
}> {
  inputRef = createRef<HTMLInputElement>();
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

  componentDidMount(): void {
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
            <Input placeholder="Type something..." type="search" refLink={this.inputRef} autoFocus />
            {!this.state.isValid && <p className={styles.validation_error}>Remove the trailing spaces</p>}
          </label>

          <Button styles={[styles.btn]} type="submit">
            Search
          </Button>
        </form>
      </section>
    );
  }
}
