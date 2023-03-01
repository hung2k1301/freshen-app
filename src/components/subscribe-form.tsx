export function SubsForm(): JSX.Element {
  return (
    <div className="subs-form">
      <input
        type="text"
        name="subscribe"
        placeholder="Your Email..."
        className="subs-form__input"
      />

      <button className="subs-form__btn">SUBSCRIBE</button>
    </div>
  );
}
