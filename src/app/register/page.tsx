import AppName from '../component/app-name';
import DefaultButton from '../component/default-button';

const Register = () => {
  return (
    <main className="default-page">
      <AppName />

      <form className="form-component">
        <legend>REGISTER.</legend>

        <fieldset className="form-group">
          <label>Name:</label>
          <input type="text" required />
        </fieldset>

        <fieldset className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" required />
        </fieldset>

        <DefaultButton message="REGISTER" />

        <span className="txt-or">OR</span>

        <button className="defaultButton-component _google">
          REGISTER WITH GOOGLE
        </button>

        <span className="form-link-message">
          ALREADY HAVE AN ACCOUNT?{' '}
          <a className="txt-link" href="/login">
            SIGN IN
          </a>
        </span>
      </form>
    </main>
  );
};

export default Register;
