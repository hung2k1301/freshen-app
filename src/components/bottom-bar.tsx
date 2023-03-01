export function BottomBar(): JSX.Element {
  return (
    <div className="bottom-bar flex-col md:flex-row gap-y-4">
      <p className="bottom-bar__text">&copy; 2021 Freshen. Made with love.</p>

      <img src="/images/payment.png" alt="payment method" />
    </div>
  );
}
