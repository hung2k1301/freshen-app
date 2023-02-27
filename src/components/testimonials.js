export function Testimonials() {
  return (
    <div class="testimonials">
      <img src="/images/quote.svg" alt="" />

      <p class="testimonials__quote xl:w-[760px]">
        When it comes to immediate body treatment, I know who I can count on.
        Being an accountant, you sometimes need rest to relieve all the stress
        and get new energy. I look forward to meeting you again soon!
      </p>

      <div class="testimonials__author">
        <p class="testimonials__author-name">wade warren</p>
        <p class="testimonials__author-title">marketing coordinator</p>
      </div>

      <div class="testimonials__avatar">
        <img
          src="https://picsum.photos/id/401/900/800"
          alt=""
          class="testimonials__avatar-small hidden lg:block"
        />
        <img
          src="https://picsum.photos/id/401/900/800"
          alt=""
          class="testimonials__avatar-big"
        />
        <img
          src="https://picsum.photos/id/401/900/800"
          alt=""
          class="testimonials__avatar-small hidden lg:block"
        />
      </div>
    </div>
  );
}
