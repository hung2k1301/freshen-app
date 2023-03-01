export function FormRegister(): JSX.Element {
  return (
    <div className="form-register">
      <a href="" className="form-register__title">
        LOGIN
      </a>
      <a href="" className="form-register__title form-register__title--active">
        REGISTER
      </a>

      <form action="" className="form-register__container">
        <div className="form-register__section">
          <label htmlFor="userName" className="form-register__label">
            Username or email address *
          </label>
          <input
            type="text"
            name=""
            id="userName"
            className="form-register__input"
            required
          />
        </div>

        <div className="form-register__section">
          <label htmlFor="password" className="form-register__label">
            Email address *
          </label>
          <input
            type="text"
            name=""
            id="password"
            className="form-register__input"
            required
          />
        </div>

        <div className="form-register__section form-register__section--margin">
          <label htmlFor="password" className="form-register__label">
            Password *
          </label>
          <input
            type="text"
            name=""
            id="password"
            className="form-register__input"
            required
          />
        </div>

        <p className="form-register__note">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>

        <button
          type="submit"
          className="form-register__btn w-full md:max-w-[180px]"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}
