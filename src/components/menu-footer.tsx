interface MenuFooter {
  title: string;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
  detail5: string;
  detail6: string;
}

const menuFooter: MenuFooter[] = [
  {
    title: "information",
    detail1: "delivery information",
    detail2: "privacy policy",
    detail3: "terms & conditions",
    detail4: "contact",
    detail5: "returns",
    detail6: "affilate",
  },
  {
    title: "account",
    detail1: "my account",
    detail2: "order history",
    detail3: "wishlist",
    detail4: "shipping",
    detail5: "privacy policy",
    detail6: "help",
  },
  {
    title: "our stores",
    detail1: "new york",
    detail2: "london sF",
    detail3: "cockfosters bP",
    detail4: "los angeles",
    detail5: "chicago",
    detail6: "las vegas",
  },
];

export function MenuFooter(): JSX.Element {
  return (
    <>
      {menuFooter.map((menuData, index) => (
        <div className="col-span-full sm:col-span-2" key={index}>
          <div className="menu-footer-2" key={index}>
            <p className="menu-footer-2__title">{menuData.title}</p>

            <ul className="menu-footer-2__list">
              {Object.values(menuData).map((detail, detailIndex) => {
                if (detailIndex > 0 && typeof detail === "string") {
                  return (
                    <li key={detailIndex}>
                      <a href="" className={`menu-footer-2__detail`}>
                        {detail}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
