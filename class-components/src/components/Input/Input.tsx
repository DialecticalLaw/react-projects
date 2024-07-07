import { Component, ReactNode } from 'react';
import styles from './Input.module.css';

export class Input extends Component<{
  type: 'text' | 'search';
  placeholder: string;
  styles?: string[];
  autoFocus?: boolean;
  refLink?: React.RefObject<HTMLInputElement>;
}> {
  render(): ReactNode {
    return (
      <input
        className={`${styles.input} ${this.props.styles?.join(' ')}`}
        ref={this.props.refLink}
        type={this.props.type}
        placeholder={this.props.placeholder}
        autoFocus={this.props.autoFocus}
      />
    );
  }
}
