import { Component, ReactNode } from 'react';
import styles from './Button.module.css';

export class Button extends Component<{
  children: JSX.Element | string;
  type: 'button' | 'submit';
  styles?: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> {
  render(): ReactNode {
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.type}
        className={`${styles.btn} ${this.props.styles?.join(' ')}`}
      >
        {this.props.children}
      </button>
    );
  }
}
