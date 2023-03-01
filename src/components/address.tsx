export function Address(): JSX.Element {
  return (
    <div className="address">
      <p className="address__detail">
        Collins Street West, Victoria
        <br />
        8007, Australia.
      </p>

      <a href="" className="address__btn">
        SHOW ON MAP
        <span className="address__btn-effect"></span>
      </a>

      <div className="address__social">
        <a href="">
          <img src="/images/fb-icon.svg" alt="facebook" />
        </a>
        <a href="">
          <img src="/images/twitter-icon.svg" alt="twitter" />
        </a>
        <a href="">
          <img src="/images/ig-icon.svg" alt="instagram" />
        </a>
        <a href="">
          <img src="/images/youtube-icon.svg" alt="youtube" />
        </a>
        <a href="">
          <img src="/images/pinterest-icon.svg" alt="pinterest" />
        </a>
      </div>
    </div>
  );
}
