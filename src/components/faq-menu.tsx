export function FaqMenu(): JSX.Element {
  return (
    <div className="faq-menu">
      <h2 className="faq-menu__heading">FAQS CATEGORIES</h2>

      <ul className="faq-menu__categories flex-row gap-x-5 xl:flex-col">
        <li className="faq-menu__category">
          <a href="">Order</a>
        </li>
        <li className="faq-menu__category faq-menu__category--active">
          <a href="">Shipping</a>
        </li>
        <li className="faq-menu__category">
          <a href="">Payment</a>
        </li>
        <li className="faq-menu__category">
          <a href="">Refund</a>
        </li>
      </ul>
    </div>
  );
}