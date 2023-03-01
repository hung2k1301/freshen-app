import { Logo } from "./logo";

export function InvoiceInfo(): JSX.Element {
  return (
    <div className="invoice-info">
      <div className="grid grid-cols-12 gap-y-16">
        <div className="col-start-2 col-span-6">
          <Logo></Logo>
        </div>

        <div className="col-span-4">
          <div className="flex justify-between">
            <p className="invoice-info__number">INVOICE #</p>
            <p className="invoice-info__number--detail">0043128641</p>
          </div>
        </div>

        <div className="col-start-2 col-span-6">
          <time className="invoice-info__date" dateTime="2021-10--3">
            Invoice date
            <br />
            <span className="invoice-info__time">03/10/2021</span>
          </time>
        </div>

        <div className="col-span-5">
          <time className="invoice-info__date" dateTime="2021-10--3">
            Due date
            <br />
            <span className="invoice-info__time">03/10/2021</span>
          </time>
        </div>

        <div className="col-start-2 col-span-6">
          <h2 className="invoice-info__party">SUPPLIER</h2>
          <p className="invoice-info__party-name">
            Skola LLC
            <br />
            <span className="invoice-info__party-address">
              2301 Ravenswood Rd Madison, WI 53711
            </span>
          </p>
        </div>

        <div className="col-span-4">
          <h2 className="invoice-info__party">CUSTOMER</h2>
          <p className="invoice-info__party-name">
            john doe
            <br />
            <span className="invoice-info__party-address">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
