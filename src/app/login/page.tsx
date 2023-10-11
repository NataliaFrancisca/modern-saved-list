import AppName from '../component/app-name';
import DefaultButton from '../component/default-button';

const Login = () => {
  return (
    <main className="default-page">
      <AppName />

      <form className="form-component">
        <legend>LOGIN.</legend>

        <fieldset className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" required />
        </fieldset>

        <DefaultButton message="LOGIN" />

        <span className="txt-or">OR</span>

        <button className="defaultButton-component _google">
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
