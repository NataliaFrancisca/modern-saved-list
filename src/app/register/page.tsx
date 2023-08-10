'use client';
import Link from 'next/link';
import AppTitle from '../components/app-title';
import ButtonDefault from '../components/button-default';
import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, submitWithEmailPassword, submitWithGoogle } = useRegister({
    name,
    email,
    password
  });

  return (
    <section className="base-page">
      <AppTitle />

      <form className="form-element" onSubmit={() => submitWithEmailPassword()}>
        <legend className="page-legend">REGISTER.</legend>

        <div className="group-label-input">
          <label htmlFor="name-input">NAME:</label>
          <input
            type="text"
            id="name-input"
            onChange={(e) => setName(e.target.value)}
          />
          {error && <span>{error.name}</span>}
        </div>

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

        <ButtonDefault btnName="REGISTER" />

        <span className="txt-or">OR</span>

        <button
          className="button-google"
          onClick={() => submitWithGoogle()}
          type="button"
        >
          REGISTER WITH GOOGLE
        </button>
      </form>

      <span className="nav-message-bottom">
        ALREADY HAVE AN ACCOUNT? <Link href="/login">SIGN IN</Link>
      </span>
    </section>
  );
};

export default Register;
