export function Welcome(): JSX.Element {
  return (
    <div className="welcome">
      <div className="flex flex-col xl:grid xl:grid-cols-12 xl:items-end xl:gap-x-6">
        <div className="xl:col-span-5">
          <div className="welcome__thumbnail">
            <img
              src="https://picsum.photos/id/287/1600/1900"
              alt=""
              className="welcome__image"
            />
            <video
              src=""
              className="welcome__video hidden xl:block"
              controls
            ></video>
          </div>
        </div>
        <div className="xl:col-[8_/_-1]">
          <div className="welcome__content">
            <p className="welcome__title text-[20px] lg:text-[30px]">
              Save more with Freshen ! We give you the lowest prices on all your
              grocery needs.
            </p>
            <p className="welcome__text welcome__text--spacing">
              <span className="welcome__text--bold text-[14px] lg:text-[20px]">
                Our Vision
              </span>
              Essentially, the good stuff is right here. We source the best
              suppliers and makers of natural and organic products that you
              won’t find on the high street. If you care about how things get
              made and what’s in them, we bring you products created with care.
            </p>
            <p className="welcome__text">
              <span className="welcome__text--bold text-[14px] lg:text-[20px]">
                Our Goal
              </span>
              Essentially, the good stuff is right here. We source the best
              suppliers and makers of natural and organic products that you
              won’t find on the high street. If you care about how things get
              made and what’s in them, we bring you products created with care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
