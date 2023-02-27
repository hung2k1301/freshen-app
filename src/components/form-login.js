export function FormLogin() {
  return (
    <div class="form-login">
      <a href="" class="form-login__title form-login__title--active">
        LOGIN
      </a>
      <a href="" class="form-login__title">
        REGISTER
      </a>

      <form action="" class="">
        <div class="form-login__section">
          <label for="userName" class="form-login__label">
            Username or email address *
          </label>
          <input
            type="text"
            name=""
            id="userName"
            class="form-login__input-text"
            required
          />
        </div>

        <div class="form-login__section form-login__section--margin">
          <label for="password" class="form-login__label">
            Password *
          </label>
          <input
            type="text"
            name=""
            id="password"
            class="form-login__input-text"
            required
          />
        </div>

        <div class="form-login__section form-login__section--flex">
          <input
            type="checkbox"
            name=""
            id="remember"
            class="form-login__input-checkbox"
          />
          <label for="remember" class="form-login__label">
            Remember me
          </label>

          <a href="" class="form-login__label form-login__label--underline">
            Lost your password?
          </a>
        </div>

        <button type="submit" class="form-login__btn w-full md:max-w-[180px]">
          LOGIN
        </button>
      </form>
    </div>
  );
}
