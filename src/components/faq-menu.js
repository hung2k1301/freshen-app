export function FaqMenu() {
  return (
    <div class="faq-menu">
      <h2 class="faq-menu__heading">FAQS CATEGORIES</h2>

      <ul class="faq-menu__categories flex-row gap-x-5 xl:flex-col">
        <li class="faq-menu__category">
          <a href="">Order</a>
        </li>
        <li class="faq-menu__category faq-menu__category--active">
          <a href="">Shipping</a>
        </li>
        <li class="faq-menu__category">
          <a href="">Payment</a>
        </li>
        <li class="faq-menu__category">
          <a href="">Refund</a>
        </li>
      </ul>
    </div>
  );
}