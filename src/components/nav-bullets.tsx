export function NavBullets(): JSX.Element {
  return (
    <>
      <div className="nav-bullets">
        <button className="nav-bullets__bullet"></button>
        <button className="nav-bullets__bullet nav-bullets__bullet--active"></button>
        <button className="nav-bullets__bullet"></button>
        <button className="nav-bullets__bullet"></button>
        <button className="nav-bullets__bullet"></button>
      </div>
    </>
  );
}
