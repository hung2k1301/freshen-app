export function FormLogin(): JSX.Element {
  return (
    <div className="form-login">
      <a href="" className="form-login__title form-login__title--active">
        LOGIN
      </a>
      <a href="" className="form-login__title">
        REGISTER
      </a>

      <form action="" className="">
        <div className="form-login__section">
          <label htmlFor="userName" className="form-login__label">
            Username or email address *
          </label>
          <input
            type="text"
            name=""
            id="userName"
            className="form-login__input-text"
            required
          />
        </div>

        <div className="form-login__section form-login__section--margin">
          <label htmlFor="password" className="form-login__label">
            Password *
          </label>
          <input
            type="text"
            name=""
            id="password"
            className="form-login__input-text"
            required
          />
        </div>

        <div className="form-login__section form-login__section--flex">
          <input
            type="checkbox"
            name=""
            id="remember"
            className="form-login__input-checkbox"
          />
          <label htmlFor="remember" className="form-login__label">
            Remember me
          </label>

          <a href="" className="form-login__label form-login__label--underline">
            Lost your password?
          </a>
        </div>

        <button type="submit" className="form-login__btn w-full md:max-w-[180px]">
          LOGIN
        </button>
      </form>
    </div>
  );
}
