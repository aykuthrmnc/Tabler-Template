const Badges = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Badges</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h1>
                    Example heading <span className="badge">New</span>
                  </h1>
                  <h2>
                    Example heading <span className="badge">New</span>
                  </h2>
                  <h3>
                    Example heading <span className="badge">New</span>
                  </h3>
                  <h4>
                    Example heading <span className="badge">New</span>
                  </h4>
                  <h5>
                    Example heading <span className="badge">New</span>
                  </h5>
                  <h6>
                    Example heading <span className="badge">New</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="badges-list">
                        <span className="badge bg-blue text-blue-fg">Blue</span>
                        <span className="badge bg-azure text-azure-fg">Azure</span>
                        <span className="badge bg-indigo text-indigo-fg">Indigo</span>
                        <span className="badge bg-purple text-purple-fg">Purple</span>
                        <span className="badge bg-pink text-pink-fg">Pink</span>
                        <span className="badge bg-red text-red-fg">Red</span>
                        <span className="badge bg-orange text-orange-fg">Orange</span>
                        <span className="badge bg-yellow text-yellow-fg">Yellow</span>
                        <span className="badge bg-lime text-lime-fg">Lime</span>
                        <span className="badge bg-green text-green-fg">Green</span>
                        <span className="badge bg-teal text-teal-fg">Teal</span>
                        <span className="badge bg-cyan text-cyan-fg">Cyan</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="badges-list">
                        <span className="badge bg-blue-lt">Blue</span>
                        <span className="badge bg-azure-lt">Azure</span>
                        <span className="badge bg-indigo-lt">Indigo</span>
                        <span className="badge bg-purple-lt">Purple</span>
                        <span className="badge bg-pink-lt">Pink</span>
                        <span className="badge bg-red-lt">Red</span>
                        <span className="badge bg-orange-lt">Orange</span>
                        <span className="badge bg-yellow-lt">Yellow</span>
                        <span className="badge bg-lime-lt">Lime</span>
                        <span className="badge bg-green-lt">Green</span>
                        <span className="badge bg-teal-lt">Teal</span>
                        <span className="badge bg-cyan-lt">Cyan</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="badges-list">
                        <span className="badge badge-outline text-blue">Blue</span>
                        <span className="badge badge-outline text-azure">Azure</span>
                        <span className="badge badge-outline text-indigo">Indigo</span>
                        <span className="badge badge-outline text-purple">Purple</span>
                        <span className="badge badge-outline text-pink">Pink</span>
                        <span className="badge badge-outline text-red">Red</span>
                        <span className="badge badge-outline text-orange">Orange</span>
                        <span className="badge badge-outline text-yellow">Yellow</span>
                        <span className="badge badge-outline text-lime">Lime</span>
                        <span className="badge badge-outline text-green">Green</span>
                        <span className="badge badge-outline text-teal">Teal</span>
                        <span className="badge badge-outline text-cyan">Cyan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="dropdown-menu dropdown-menu-demo dropdown-menu-arrow">
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
            <div className="col-sm-6 col-lg-9">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="btn-list">
                        <button className="btn">
                          Blue badge <span className="badge bg-blue text-blue-fg ms-2">1</span>
                        </button>
                        <button className="btn">
                          Azure badge <span className="badge bg-azure text-azure-fg ms-2">2</span>
                        </button>
                        <button className="btn">
                          Indigo badge <span className="badge bg-indigo text-indigo-fg ms-2">3</span>
                        </button>
                        <button className="btn">
                          Purple badge <span className="badge bg-purple text-purple-fg ms-2">4</span>
                        </button>
                        <button className="btn">
                          Pink badge <span className="badge bg-pink text-pink-fg ms-2">5</span>
                        </button>
                        <button className="btn">
                          Red badge <span className="badge bg-red text-red-fg ms-2">6</span>
                        </button>
                        <button className="btn">
                          Orange badge <span className="badge bg-orange text-orange-fg ms-2">7</span>
                        </button>
                        <button className="btn">
                          Yellow badge <span className="badge bg-yellow text-yellow-fg ms-2">8</span>
                        </button>
                        <button className="btn">
                          Lime badge <span className="badge bg-lime text-lime-fg ms-2">9</span>
                        </button>
                        <button className="btn">
                          Green badge <span className="badge bg-green text-green-fg ms-2">10</span>
                        </button>
                        <button className="btn">
                          Teal badge <span className="badge bg-teal text-teal-fg ms-2">11</span>
                        </button>
                        <button className="btn">
                          Cyan badge <span className="badge bg-cyan text-cyan-fg ms-2">12</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="btn-list">
                        <button className="btn position-relative">
                          Blue badge <span className="badge bg-blue text-blue-fg badge-notification badge-pill">1</span>
                        </button>
                        <button className="btn position-relative">
                          Azure badge{" "}
                          <span className="badge bg-azure text-azure-fg badge-notification badge-pill">2</span>
                        </button>
                        <button className="btn position-relative">
                          Indigo badge{" "}
                          <span className="badge bg-indigo text-indigo-fg badge-notification badge-pill">3</span>
                        </button>
                        <button className="btn position-relative">
                          Purple badge{" "}
                          <span className="badge bg-purple text-purple-fg badge-notification badge-pill">4</span>
                        </button>
                        <button className="btn position-relative">
                          Pink badge <span className="badge bg-pink text-pink-fg badge-notification badge-pill">5</span>
                        </button>
                        <button className="btn position-relative">
                          Red badge <span className="badge bg-red text-red-fg badge-notification badge-pill">6</span>
                        </button>
                        <button className="btn position-relative">
                          Orange badge{" "}
                          <span className="badge bg-orange text-orange-fg badge-notification badge-pill">7</span>
                        </button>
                        <button className="btn position-relative">
                          Yellow badge{" "}
                          <span className="badge bg-yellow text-yellow-fg badge-notification badge-pill">8</span>
                        </button>
                        <button className="btn position-relative">
                          Lime badge <span className="badge bg-lime text-lime-fg badge-notification badge-pill">9</span>
                        </button>
                        <button className="btn position-relative">
                          Green badge{" "}
                          <span className="badge bg-green text-green-fg badge-notification badge-pill">10</span>
                        </button>
                        <button className="btn position-relative">
                          Teal badge{" "}
                          <span className="badge bg-teal text-teal-fg badge-notification badge-pill">11</span>
                        </button>
                        <button className="btn position-relative">
                          Cyan badge{" "}
                          <span className="badge bg-cyan text-cyan-fg badge-notification badge-pill">12</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="btn-list">
                        <button className="btn position-relative">
                          Blue badge <span className="badge bg-blue badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Azure badge <span className="badge bg-azure badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Indigo badge <span className="badge bg-indigo badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Purple badge <span className="badge bg-purple badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Pink badge <span className="badge bg-pink badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Red badge <span className="badge bg-red badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Orange badge <span className="badge bg-orange badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Yellow badge <span className="badge bg-yellow badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Lime badge <span className="badge bg-lime badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Green badge <span className="badge bg-green badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Teal badge <span className="badge bg-teal badge-notification badge-blink" />
                        </button>
                        <button className="btn position-relative">
                          Cyan badge <span className="badge bg-cyan badge-notification badge-blink" />
                        </button>
                      </div>
                    </div>
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
export default Badges;
