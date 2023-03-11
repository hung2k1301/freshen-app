import { WhyChooseContent1 } from "./why-choose-content-1";
import { WhyChooseContent2 } from "./why-choose-content-2";

export function WhyChoose(): JSX.Element {

  return (
    <div className="why-choose">
      <div className="flex flex-col md:flex-row lg:justify-between lg:gap-x-5">
        <div>
          <WhyChooseContent1></WhyChooseContent1>
        </div>

        <div className="hidden xl:block">
          <img
            src="https://picsum.photos/id/323/1200/900"
            alt=""
            className="why-choose__img"
          />
        </div>

        <div>
          <WhyChooseContent2></WhyChooseContent2>
        </div>
      </div>
    </div>
  );
}
