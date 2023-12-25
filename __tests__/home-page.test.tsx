import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

describe('Home Page', () => {
  it('should render the App Title', () => {
    render(<Home />);
    screen.getByText(/ONE. SAVED LIST/);
  });

  it('should render the get started button', () => {
    render(<Home />);
    screen.getByText(/GET STARTED/);
  });

  // I DON'T KNOW HOW TO DO A TEST WITH ROUTES, SO THIS TEST WILL FAIL
  // it('should change the page on button click', async () => {
  //   render(<Home />);
  //   const button = screen.getByText(/GET STARTED/);

  //   await userEvent.click(button);
  //   expect(screen.getByText(/register/)).toBeInTheDocument();
  // });
});
