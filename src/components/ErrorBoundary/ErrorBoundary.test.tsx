import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

function ErrorThrower() {
  const [isError, setError] = useState(false);
  if (isError) throw new Error('THIS IS NOT A ERROR! It is checking the ErrorBoundary');
  return <button onClick={() => setError(true)}>Throw error</button>;
}

describe('ErrorBoundary', () => {
  it('displayed when an error is thrown', async () => {
    const user = userEvent.setup();
    const { getByText, getByRole } = render(
      <ErrorBoundary>
        <ErrorThrower />
      </ErrorBoundary>
    );
    const throwErrorBtn = getByText('Throw error');

    expect(throwErrorBtn).toBeInTheDocument();
    await user.click(throwErrorBtn);
    expect(getByRole('paragraph')).toHaveTextContent('Something went wrong...');
  });
});
