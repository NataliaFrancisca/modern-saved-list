'use client';
import { useState } from 'react';
import { UseLogin } from '@/hooks/useLogin';
import AppName from '../component/app-name';
import DefaultButton from '../component/default-button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, onSubmit, onSubmitWithGoogle } = UseLogin({ email, password });

  return (
    <main className="default-page">
      <AppName />

      <form className="form-component" onClick={() => onSubmit()}>
        <legend>LOGIN.</legend>

        {error?.google && (
          <span className="error-login_google">
            PROBLEM DOING LOGIN WITH GOOGLE, <br /> TRY AGAIN
          </span>
        )}

        <fieldset className="form-group">
          <label htmlFor="email-input">Email:</label>
          <input
            type="email"
            required
            id="email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span>{error.email}</span>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password-input">Password:</label>
          <input
            type="password"
            required
            id="password-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span>{error.password}</span>}
        </fieldset>

        <DefaultButton message="LOGIN" />

        <span className="txt-or">OR</span>

        <button
          className="defaultButton-component _google"
          onClick={() => onSubmitWithGoogle()}
        >
          LOGIN WITH GOOGLE
        </button>

        <span className="form-link-message">
          NEW HERE?{' '}
          <a className="txt-link" href="/register">
            REGISTER
          </a>
        </span>
      </form>
    </main>
  );
};

export default Login;
