import Link from 'next/link';
import AppTitle from '../components/app-title';
import ButtonDefault from '../components/button-default';

const Register = () => {
  return (
    <section className="base-page">
      <AppTitle />

      <span className="page-legend">REGISTER.</span>

      <form className="form-element">
        <div className="group-label-input">
          <label htmlFor="name-input">NAME:</label>
          <input type="text" id="name-input" />
        </div>

        <div className="group-label-input">
          <label htmlFor="email-input">E-MAIL:</label>
          <input type="email" id="email-input" />
        </div>

        <div className="group-label-input">
          <label htmlFor="password-input">PASSWORD:</label>
          <input type="password" id="password-input" />
        </div>

        <ButtonDefault btnName="REGISTER" />

        <span className="txt-or">OR</span>

        <button className="button-google">REGISTER WITH GOOGLE</button>
      </form>

      <span className="nav-message-bottom">
        ALREADY HAVE AN ACCOUNT? <Link href="/login">SIGN IN</Link>
      </span>
    </section>
  );
};

export default Register;
