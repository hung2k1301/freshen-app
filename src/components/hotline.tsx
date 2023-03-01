export function Hotline(): JSX.Element {
  return (
    <div className="hotline">
      <img src="/images/hotline-phone.svg" alt=" Hotline Phone" />
      <span className="hotline__text">
        <a href="tel:(42)500-78-42">HOTLINE</a>
      </span>
      <a href="tel:(42)500-78-42" className="hotline__number">
        (42) 500-78-42
      </a>
    </div>
  );
}
