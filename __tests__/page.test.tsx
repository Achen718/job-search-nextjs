import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import JobStoreProvider from '../app/StoreProvider';
import HomePage from '../app/page';

describe('Page', () => {
  it('renders a heading', async () => {
    await act(async () => {
      render(
        <JobStoreProvider>
          <HomePage />
        </JobStoreProvider>
      );
    });

    await waitFor(() => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });
  });
});
