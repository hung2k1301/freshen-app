import { Logo } from "./logo";

export function InvoiceInfo() {
  return (
    <div class="invoice-info">
      <div class="grid grid-cols-12 gap-y-16">
        <div class="col-start-2 col-span-6">
          <Logo></Logo>
        </div>

        <div class="col-span-4">
          <div class="flex justify-between">
            <p class="invoice-info__number">INVOICE #</p>
            <p class="invoice-info__number--detail">0043128641</p>
          </div>
        </div>

        <div class="col-start-2 col-span-6">
          <time class="invoice-info__date" datetime="2021-10--3">
            Invoice date
            <br />
            <span class="invoice-info__time">03/10/2021</span>
          </time>
        </div>

        <div class="col-span-5">
          <time class="invoice-info__date" datetime="2021-10--3">
            Due date
            <br />
            <span class="invoice-info__time">03/10/2021</span>
          </time>
        </div>

        <div class="col-start-2 col-span-6">
          <h2 class="invoice-info__party">SUPPLIER</h2>
          <p class="invoice-info__party-name">
            Skola LLC
            <br />
            <span class="invoice-info__party-address">
              2301 Ravenswood Rd Madison, WI 53711
            </span>
          </p>
        </div>

        <div class="col-span-4">
          <h2 class="invoice-info__party">CUSTOMER</h2>
          <p class="invoice-info__party-name">
            john doe
            <br />
            <span class="invoice-info__party-address">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
