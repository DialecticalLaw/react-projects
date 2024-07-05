import React, { ErrorInfo, PropsWithChildren } from 'react';
import styles from './ErrorBoundary.module.css';
import { Button } from '../components/Button/Button';

export class ErrorBoundary extends React.Component<PropsWithChildren> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p className={styles.text}>Something went wrong...</p>
          <Button type="button" onClick={() => location.reload()}>
            Refresh the page
          </Button>
        </>
      );
    }

    return this.props.children;
  }
}
