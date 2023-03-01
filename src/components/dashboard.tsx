export function Dashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <div className="grid grid-cols-8 lg:grid-cols-12">
        <div className="col-span-3">
          <div className="dashboard__menu">
            <p className="dashboard__menu-title">my account</p>
            <ul className="dashboard__menu-list">
              <li>
                <a href="" className="dashboard__menu-detail">
                  dashboard
                  <span className="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="dashboard__menu-detail dashboard__menu-detail--green"
                >
                  orders
                  <span className="dashboard__menu-detail-effect dashboard__menu-detail-effect--visible"></span>
                </a>
              </li>
              <li>
                <a href="" className="dashboard__menu-detail">
                  downloads
                  <span className="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" className="dashboard__menu-detail">
                  addresses
                  <span className="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" className="dashboard__menu-detail">
                  account details
                  <span className="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" className="dashboard__menu-detail">
                  wishlist
                  <span className="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" className="dashboard__menu-detail">
                  logout
                  <span className="dashboard__menu-detail-effect"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-5 lg:col-span-7">
          <div className="dashboard__content">
            <p className="dashboard__text">
              Hello
              <span className="dashboard__text-bold">alitfn58</span>
              (not
              <span className="dashboard__text-bold">alitfn58?</span>
              <button> Log out</button>)
              <br />
              <br />
              <br />
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
