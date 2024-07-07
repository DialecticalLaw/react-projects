import { Component, createRef, ReactNode } from 'react';
import styles from './ErrorThrower.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export class ErrorThrower extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = { isError: false };

  render(): ReactNode {
    if (this.state.isError) throw new Error(this.inputRef.current?.value);

    return (
      <form className={styles.wrapper}>
        <Input refLink={this.inputRef} styles={[styles.input]} type="text" placeholder="Error message" />
        <Button
          onClick={(e) => {
            e.preventDefault();
            this.setState({ isError: true });
          }}
          type="submit"
          styles={[styles.btn]}
        >
          Throw Error
        </Button>
      </form>
    );
  }
}
