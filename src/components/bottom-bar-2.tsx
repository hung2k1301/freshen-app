export function BottomBar2(): JSX.Element {
  return (
    <div className="bottom-bar-2">
      <a
        href="www.freshen.com"
        className="bottom-bar-2__link bottom-bar-2__link--active"
      >
        www.freshen.com
      </a>
      <a href="mailto:invoice@freshen.com" className="bottom-bar-2__link">
        invoice@freshen.com
      </a>
      <a href="tel:(123)123-456" className="bottom-bar-2__link">
        (123) 123-456
      </a>
    </div>
  );
}
