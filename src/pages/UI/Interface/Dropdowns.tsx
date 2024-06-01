const Dropdowns = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Dropdowns</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="dropdown-menu dropdown-menu-demo">
                <h6 className="dropdown-header">Dropdown header</h6>
                <a href="#" className="dropdown-item">
                  {/* Download SVG icon from http://tabler-icons.io/i/activity */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M3 12h4l3 8l4 -16l3 8h4" />
                  </svg>
                  Item 1
                </a>
                <a href="#" className="dropdown-item">
                  {/* Download SVG icon from http://tabler-icons.io/i/edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                  Item 2
                </a>
                <div className="dropdown-item">
                  <a href="#" className="text-reset">
                    My profile
                  </a>
                  <label className="form-check m-0 ms-auto">
                    <input type="checkbox" className="form-check-input" />
                    Public
                  </label>
                </div>
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="radio" /> Radio input
                </label>
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="checkbox" /> Checkbox input
                </label>
                <label className="dropdown-item form-switch">
                  <input className="form-check-input m-0 me-2" type="checkbox" /> Checkbox input
                </label>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  Dropdown item 1
                </a>
                <a href="#" className="dropdown-item">
                  Dropdown item 2
                </a>
                <a href="#" className="dropdown-item disabled">
                  Dropdown disabled
                </a>
                <a href="#" className="dropdown-item active">
                  Dropdown active
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <span
                    className="avatar avatar-xs rounded me-2"
                    style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
                  />
                  Paweł Kuna
                </a>
                <a href="#" className="dropdown-item">
                  <span className="avatar avatar-xs rounded me-2">JL</span>
                  Jeffie Lewzey
                </a>
                <a href="#" className="dropdown-item">
                  <span
                    className="avatar avatar-xs rounded me-2"
                    style={{ backgroundImage: "url(./static/avatars/002m.jpg)" }}
                  />
                  Mallory Hulme
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Download SVG icon from http://tabler-icons.io/i/logout */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M9 12h12l-3 -3" />
                    <path d="M18 15l3 -3" />
                  </svg>
                  Logout
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item active" href="#">
                  Active action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item disabled" href="#">
                  Disabled action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <span className="dropdown-header">Dropdown header</span>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <span className="dropdown-header">Dropdown header</span>
                <a className="dropdown-item" href="#">
                  {/* Download SVG icon from http://tabler-icons.io/i/settings */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  {/* Download SVG icon from http://tabler-icons.io/i/edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo dropdown-menu-arrow">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item active" href="#">
                  Active action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item disabled" href="#">
                  Disabled action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <span className="dropdown-header">Dropdown header</span>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  {/* Download SVG icon from http://tabler-icons.io/i/settings */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  {/* Download SVG icon from http://tabler-icons.io/i/edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a className="dropdown-item" href="#">
                  Action
                  <span className="badge bg-primary text-primary-fg ms-auto">12</span>
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                  <span className="badge bg-green ms-auto" />
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="dropdown-menu dropdown-menu-demo" data-bs-theme="dark">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo" data-bs-theme="dark">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-menu-demo dropdown-menu-arrow"
                data-bs-theme="dark"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-menu-demo dropdown-menu-arrow"
                data-bs-theme="dark"
              >
                <a className="dropdown-item" href="#">
                  {/* Download SVG icon from http://tabler-icons.io/i/settings */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  {/* Download SVG icon from http://tabler-icons.io/i/edit */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon dropdown-item-icon"
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
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                  Another action
                </a>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="checkbox" /> Option 1
                </label>
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="checkbox" /> Option 2
                </label>
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="checkbox" /> Option 3
                </label>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="radio" /> Option 1
                </label>
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="radio" /> Option 2
                </label>
                <label className="dropdown-item">
                  <input className="form-check-input m-0 me-2" type="radio" /> Option 3
                </label>
              </div>
              <div className="dropdown-menu dropdown-menu-demo">
                <a href="#" className="dropdown-item">
                  <span
                    className="avatar avatar-xs rounded me-2"
                    style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
                  />
                  Paweł Kuna
                </a>
                <a href="#" className="dropdown-item">
                  <span className="avatar avatar-xs rounded me-2">JL</span>
                  Jeffie Lewzey
                </a>
                <a href="#" className="dropdown-item">
                  <span
                    className="avatar avatar-xs rounded me-2"
                    style={{ backgroundImage: "url(./static/avatars/002m.jpg)" }}
                  />
                  Mallory Hulme
                </a>
                <a href="#" className="dropdown-item">
                  <span
                    className="avatar avatar-xs rounded me-2"
                    style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}
                  />
                  Dunn Slane
                </a>
                <a href="#" className="dropdown-item">
                  <span
                    className="avatar avatar-xs rounded me-2"
                    style={{ backgroundImage: "url(./static/avatars/000f.jpg)" }}
                  />
                  Emmy Levet
                </a>
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
export default Dropdowns;
