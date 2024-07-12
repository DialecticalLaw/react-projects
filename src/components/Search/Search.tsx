import { useRef, useState } from 'react';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function Search({
  saveSearchTerm,
  initialSearchTerm
}: {
  saveSearchTerm: (searchTerm: string) => void;
  initialSearchTerm: string;
}) {
  const [isValid, setValid] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeSearchTerm = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue === undefined) return;

    if (inputValue[inputValue.length - 1] !== ' ' || inputValue === '') {
      setValid(true);
      saveSearchTerm(inputValue);
    } else setValid(false);
  };

  return (
    <section className={styles.search_section}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeSearchTerm();
        }}
        className={styles.search_form}
      >
        <label className={styles.label}>
          <Input
            refLink={inputRef}
            placeholder="Type something..."
            type="search"
            defaultValue={initialSearchTerm}
            autoFocus
          />
          {!isValid && <p className={styles.validation_error}>Remove the trailing spaces</p>}
        </label>

        <Button classes={[styles.btn]} type="submit">
          Search
        </Button>
      </form>
    </section>
  );
}
