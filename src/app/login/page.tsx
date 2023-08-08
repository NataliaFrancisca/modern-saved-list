import Link from 'next/link';
import AppTitle from '../components/app-title';
import ButtonDefault from '../components/button-default';

const Login = () => {
  return (
    <section className="base-page">
      <AppTitle />

      <span className="page-legend">LOGIN.</span>

      <form className="form-element">
        <div className="group-label-input">
          <label htmlFor="name-input">NAME:</label>
          <input type="text" id="name-input" />
        </div>

        <div className="group-label-input">
          <label htmlFor="password-input">PASSWORD:</label>
          <input type="password" id="password-input" />
        </div>

        <ButtonDefault btnName="LOGIN" />

        <span className="txt-or">OR</span>

        <button className="button-google">LOGIN WITH GOOGLE</button>
      </form>

      <span className="nav-message-bottom">
        NEW HERE? <Link href="/register">SIGN UP</Link>
      </span>
    </section>
  );
};

export default Login;
