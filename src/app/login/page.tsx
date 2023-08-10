'use client';
import Link from 'next/link';
import AppTitle from '../components/app-title';
import ButtonDefault from '../components/button-default';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, submitWithEmailPassword, submitWithGoogle } = useLogin({
    email,
    password
  });

  return (
    <section className="base-page">
      <AppTitle />

      <form className="form-element" onSubmit={() => submitWithEmailPassword()}>
        <legend className="page-legend">LOGIN.</legend>

        <div className="group-label-input">
          <label htmlFor="email-input">E-MAIL:</label>
          <input
            type="email"
            id="email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span>{error.email}</span>}
        </div>

        <div className="group-label-input">
          <label htmlFor="password-input">PASSWORD:</label>
          <input
            type="password"
            id="password-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span>{error.password}</span>}
        </div>

        <ButtonDefault btnName="LOGIN" />

        <span className="txt-or">OR</span>

        <button
          className="button-google"
          type="button"
          onClick={() => submitWithGoogle()}
        >
          LOGIN WITH GOOGLE
        </button>
      </form>

      <span className="nav-message-bottom">
        NEW HERE? <Link href="/register">SIGN UP</Link>
      </span>
    </section>
  );
};

export default Login;
