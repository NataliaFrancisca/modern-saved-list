'use client';
import { useState } from 'react';
import AppName from '../component/app-name';
import DefaultButton from '../component/default-button';
import { UseRegister } from '@/hooks/useRegister';
import Link from 'next/link';
import Loader from '../component/loader';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, loading, onSubmit, onSubmitWithGoogle } = UseRegister({
    name,
    email,
    password
  });

  return (
    <main className="default-page">
      <AppName />

      <form className="form-component" onSubmit={() => onSubmit()}>
        <legend>REGISTER.</legend>

        {loading && <Loader color="PURPLE" />}

        {error?.google && (
          <span className="error-login_google">
            PROBLEM DOING REGISTER WITH GOOGLE, <br /> TRY AGAIN
          </span>
        )}

        <fieldset className="form-group">
          <label htmlFor="input-name">Name:</label>
          <input
            type="text"
            required
            id="input-name"
            onChange={(e) => setName(e.target.value)}
          />
          {error && <span>{error.name}</span>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="input-email">Email:</label>
          <input
            type="email"
            required
            id="input-email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span>{error.email}</span>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="input-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span>{error.password}</span>}
        </fieldset>

        <DefaultButton message="REGISTER" />

        <span className="txt-or">OR</span>

        <button
          className="defaultButton-component _google"
          onClick={() => onSubmitWithGoogle()}
        >
          REGISTER WITH GOOGLE
        </button>

        <span className="form-link-message">
          ALREADY HAVE AN ACCOUNT?{' '}
          <Link href="/login" className="txt-link">
            LOGIN
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Register;
