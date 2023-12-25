import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '@/app/login/page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

// jest.mock('firebase/app', () => {
//   const userCredentialMock = {
//     user: {
//       sendEmailVerification: jest.fn()
//     }
//   };
//   return {
//     auth: jest.fn().mockReturnThis(),
//     currentUser: {
//       email: 'test',
//       uid: '123',
//       emailVerified: true
//     },
//     signInWithEmailAndPassword: jest.fn(),
//     createUserWithEmailAndPassword: jest.fn(() => userCredentialMock),
//     sendPasswordResetEmail: jest.fn(),
//     signOut: jest.fn(),
//     onAuthStateChanged: jest.fn(),
//     initializeApp: jest.fn()
//   };
// });

describe('Login Page FIREBASE Auth', () => {});

describe('Login Page', () => {
  it('should render the App Title', () => {
    render(<Login />);
    screen.getByText(/ONE. SAVED LIST/);
  });

  it('should show the form legend(login)', () => {
    render(<Login />);
    screen.getByText('LOGIN.');
  });

  it('should render the inputs correctly', () => {
    render(<Login />);

    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should show a error message when the input is empty and button clicked', async () => {
    render(<Login />);

    const loginButton = screen.getByRole('button', { name: 'LOGIN' });

    screen.getByLabelText('Email:');
    screen.getByLabelText('Password:');

    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(
        screen.getByText('Campo vazio, digite seu e-mail')
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText('Campo vazio, digite sua senha')
      ).toBeInTheDocument();
    });
  });

  //   it('should show a error message when the input email is fill with a no registered email', async () => {
  //     render(<Login />);

  //     const loginButton = screen.getByRole('button', { name: 'LOGIN' });

  //     await userEvent.type(
  //       screen.getByLabelText('Email:'),
  //       'emailnaoexiste@mail.com'
  //     );

  //     await userEvent.click(loginButton);

  //     await waitFor(() => {
  //       expect(
  //         screen.getByText('E-mail digitado não foi encontrado')
  //       ).toBeInTheDocument();
  //     });
  //   });

  it('should show no error message when the input is fill correctly', async () => {
    render(<Login />);

    const loginButton = screen.getByRole('button', { name: 'LOGIN' });

    await userEvent.type(screen.getByLabelText('Email:'), 'nat@mail.com');
    await userEvent.type(screen.getByLabelText('Password:'), '123456789');

    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText('LOGIN WAS SUCCESS')).toBeInTheDocument();
    });
  });
});
