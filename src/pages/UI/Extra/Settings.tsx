const Settings = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Account Settings</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="row g-0">
              <div className="col-12 col-md-3 border-end">
                <div className="card-body">
                  <h4 className="subheader">Business settings</h4>
                  <div className="list-group list-group-transparent">
                    <a
                      href="./settings.html"
                      className="list-group-item list-group-item-action d-flex align-items-center active"
                    >
                      My Account
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                      My Notifications
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                      Connected Apps
                    </a>
                    <a
                      href="./settings-plan.html"
                      className="list-group-item list-group-item-action d-flex align-items-center"
                    >
                      Plans
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
                      Billing &amp; Invoices
                    </a>
                  </div>
                  <h4 className="subheader mt-4">Experience</h4>
                  <div className="list-group list-group-transparent">
                    <a href="#" className="list-group-item list-group-item-action">
                      Give Feedback
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-9 d-flex flex-column">
                <div className="card-body">
                  <h2 className="mb-4">My Account</h2>
                  <h3 className="card-title">Profile Details</h3>
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span
                        className="avatar avatar-xl"
                        style={{
                          backgroundImage: "url(./static/avatars/000m.jpg)",
                        }}
                      />
                    </div>
                    <div className="col-auto">
                      <a href="#" className="btn">
                        Change avatar
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="btn btn-ghost-danger">
                        Delete avatar
                      </a>
                    </div>
                  </div>
                  <h3 className="card-title mt-4">Business Profile</h3>
                  <div className="row g-3">
                    <div className="col-md">
                      <div className="form-label">Business Name</div>
                      <input type="text" className="form-control" defaultValue="Tabler" />
                    </div>
                    <div className="col-md">
                      <div className="form-label">Business ID</div>
                      <input type="text" className="form-control" defaultValue="560afc32" />
                    </div>
                    <div className="col-md">
                      <div className="form-label">Location</div>
                      <input type="text" className="form-control" defaultValue="Peimei, China" />
                    </div>
                  </div>
                  <h3 className="card-title mt-4">Email</h3>
                  <p className="card-subtitle">
                    This contact will be shown to others publicly, so choose it carefully.
                  </p>
                  <div>
                    <div className="row g-2">
                      <div className="col-auto">
                        <input type="text" className="form-control w-auto" defaultValue="paweluna@howstuffworks.com" />
                      </div>
                      <div className="col-auto">
                        <a href="#" className="btn">
                          Change
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="card-title mt-4">Password</h3>
                  <p className="card-subtitle">
                    You can set a permanent password if you don't want to use temporary login codes.
                  </p>
                  <div>
                    <a href="#" className="btn">
                      Set new password
                    </a>
                  </div>
                  <h3 className="card-title mt-4">Public profile</h3>
                  <p className="card-subtitle">
                    Making your profile public means that anyone on the Dashkit network will be able to find you.
                  </p>
                  <div>
                    <label className="form-check form-switch form-switch-lg">
                      <input className="form-check-input" type="checkbox" />
                      <span className="form-check-label form-check-label-on">You're currently visible</span>
                      <span className="form-check-label form-check-label-off">You're currently invisible</span>
                    </label>
                  </div>
                </div>
                <div className="card-footer bg-transparent mt-auto">
                  <div className="btn-list justify-content-end">
                    <a href="#" className="btn">
                      Cancel
                    </a>
                    <a href="#" className="btn btn-primary">
                      Submit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-transparent d-print-none">
        <div className="container-xl">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-lg-auto ms-lg-auto">
              <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                  <a href="https://tabler.io/docs" target="_blank" className="link-secondary" rel="noopener">
                    Documentation
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="./license.html" className="link-secondary">
                    License
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/tabler/tabler" target="_blank" className="link-secondary" rel="noopener">
                    Source code
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/sponsors/codecalm"
                    target="_blank"
                    className="link-secondary"
                    rel="noopener"
                  >
                    {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon text-pink icon-filled icon-inline"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    Sponsor
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
              <ul className="list-inline list-inline-dots mb-0">
                <li className="list-inline-item">
                  Copyright © 2023
                  <a href="." className="link-secondary">
                    Tabler
                  </a>
                  . All rights reserved.
                </li>
                <li className="list-inline-item">
                  <a href="./changelog.html" className="link-secondary" rel="noopener">
                    v1.0.0-beta20
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Settings;
