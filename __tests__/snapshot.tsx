import { render } from '@testing-library/react';
import Page from '../app/page'; // Ensure this path is correct

it('renders homepage unchanged', () => {
  const { container } = render(<Page />);
  console.log(container.innerHTML); // Debugging step
  expect(container).toMatchSnapshot();
});
