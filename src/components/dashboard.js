export function Dashboard() {
  return (
    <div class="dashboard">
      <div class="grid grid-cols-8 lg:grid-cols-12">
        <div class="col-span-3">
          <div class="dashboard__menu">
            <p class="dashboard__menu-title">my account</p>
            <ul class="dashboard__menu-list">
              <li>
                <a href="" class="dashboard__menu-detail">
                  dashboard
                  <span class="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  class="dashboard__menu-detail dashboard__menu-detail--green"
                >
                  orders
                  <span class="dashboard__menu-detail-effect dashboard__menu-detail-effect--visible"></span>
                </a>
              </li>
              <li>
                <a href="" class="dashboard__menu-detail">
                  downloads
                  <span class="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" class="dashboard__menu-detail">
                  addresses
                  <span class="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" class="dashboard__menu-detail">
                  account details
                  <span class="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" class="dashboard__menu-detail">
                  wishlist
                  <span class="dashboard__menu-detail-effect"></span>
                </a>
              </li>
              <li>
                <a href="" class="dashboard__menu-detail">
                  logout
                  <span class="dashboard__menu-detail-effect"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-span-5 lg:col-span-7">
          <div class="dashboard__content">
            <p class="dashboard__text">
              Hello
              <span class="dashboard__text-bold">alitfn58</span>
              (not
              <span class="dashboard__text-bold">alitfn58?</span>
              <button href=""> Log out</button>)
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
