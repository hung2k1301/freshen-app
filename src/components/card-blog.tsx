interface CardBlogData {
  cardBlogTitle: string;
}

const cardBlogData: CardBlogData[] = [
  { cardBlogTitle: "how to make a fresh juice blended for your family?" },
  { cardBlogTitle: "creative water features and exterior design" },
  { cardBlogTitle: "what are organic? all you need to know" },
];

export function CardBlog(): JSX.Element {
  return (
    <>
      {cardBlogData.map((data, index) => (
        <div className="col-span-full sm:col-span-3 lg:col-span-4" key={index}>
          <div className="card-blog">
            <div className="card-blog__thumbnail">
              <img
                src="https://picsum.photos/id/10/600/400"
                alt="Blog Image"
                className="card-blog__image"
              />
              <time dateTime="2022-04-08" className="card-blog__date">
                <span className="card-blog__month">april</span>
                <span className="card-blog__day">08</span>
              </time>

              <div className="card-blog__tag">life style, farm</div>
            </div>

            <a href="" className="card-blog__title">
              {data["cardBlogTitle"]}
            </a>

            <div className="card-blog__author">
              <img src="/images/blog-user-icon.svg" alt="user icon" />
              <a href="" className="card-blog__account">
                by admin
              </a>

              <img src="/images/comment-icon.svg" alt="comment icon" />
              <a href="" className="card-blog__account">
                16 comments
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
