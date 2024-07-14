import { useRef, useState } from 'react';
import styles from './ErrorThrower.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function ErrorThrower() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);

  if (isError) throw new Error(inputRef.current?.value);

  return (
    <form className={styles.wrapper}>
      <Input refLink={inputRef} classes={[styles.input]} type="text" placeholder="Error message" />
      <Button
        onClick={(e) => {
          e.preventDefault();
          setIsError(true);
        }}
        type="submit"
        classes={[styles.btn]}
      >
        Throw Error
      </Button>
    </form>
  );
}
