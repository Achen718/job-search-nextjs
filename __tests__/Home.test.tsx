import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import HomePage from '@/app/page';

// Mock redux-persist
import { ReactNode } from 'react';

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: ({ children }: { children: ReactNode }) => children,
}));

describe('Page', () => {
  it('renders a heading', async () => {
    await act(async () => {
      render(<HomePage />);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
