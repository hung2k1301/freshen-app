export function OrderService() {
  return (
    <div class="order-service flex-col xl:flex-row gap-y-4 xl:gap-y-5 pt-24 pb-10 xl:py-10 px-10 xl:px-0">
      <img
        src="/images/delivery.svg"
        alt="Delivery"
        class="order-service__delivery left-[43%] sm:left-[45%] md:left-[46%] lg:left-[47%] xl:left-[13px] top-[-49px] xl:top-[-29px] -translate-x-1/2 xl:translate-x-0"
      />
      <img src="/images/whatsapp-icon.svg" alt="Whatsapp" />
      <p>
        WHATSAPP ORDERING SERVICE - PLACE YOUR ORDERS AT
        <a href="tel:3929632" class="order-service__phone">
          392 96 32
        </a>
      </p>
    </div>
  );
}
