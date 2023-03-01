export function Testimonials(): JSX.Element {
  return (
    <div className="testimonials">
      <img src="/images/quote.svg" alt="" />

      <p className="testimonials__quote xl:w-[760px]">
        When it comes to immediate body treatment, I know who I can count on.
        Being an accountant, you sometimes need rest to relieve all the stress
        and get new energy. I look forward to meeting you again soon!
      </p>

      <div className="testimonials__author">
        <p className="testimonials__author-name">wade warren</p>
        <p className="testimonials__author-title">marketing coordinator</p>
      </div>

      <div className="testimonials__avatar">
        <img
          src="https://picsum.photos/id/401/900/800"
          alt=""
          className="testimonials__avatar-small hidden lg:block"
        />
        <img
          src="https://picsum.photos/id/401/900/800"
          alt=""
          className="testimonials__avatar-big"
        />
        <img
          src="https://picsum.photos/id/401/900/800"
          alt=""
          className="testimonials__avatar-small hidden lg:block"
        />
      </div>
    </div>
  );
}
