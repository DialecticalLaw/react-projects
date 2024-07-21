import React, { ErrorInfo, PropsWithChildren } from 'react';
import styles from './ErrorBoundary.module.css';
import { Button } from '../Button/Button';

export class ErrorBoundary extends React.Component<PropsWithChildren> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <p className={styles.text}>Something went wrong...</p>
          <Button type="button" onClick={() => location.reload()}>
            Refresh the page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
