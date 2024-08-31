import { render } from '@testing-library/react';
import HomePage from '@/app/page'; // Ensure this path is correct

it('renders homepage unchanged', () => {
  const { container } = render(<HomePage />);
  console.log(container.innerHTML); // Debugging step
  expect(container).toMatchSnapshot();
});
