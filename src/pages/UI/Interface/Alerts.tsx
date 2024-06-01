const Alerts = () => {
  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Alerts</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Basic alerts</h2>
                  <p className="text-secondary">
                    Wrap any text and an optional dismiss button in <code>.alert</code> and one of the four contextual
                    classes (e.g., <code>.alert-success</code>) for basic alert messages.
                  </p>
                  <div className="alert alert-success" role="alert">
                    Wow! Everything worked!
                  </div>
                  <div className="alert alert-warning" role="alert">
                    Uh oh, something went wrong
                  </div>
                  <div className="alert alert-danger" role="alert">
                    I'm so sorry…
                  </div>
                  <div className="alert alert-info" role="alert">
                    Did you know?
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Alerts with icon</h2>
                  <p className="text-secondary">Build on any alert by adding an optional icon.</p>
                  <div className="alert alert-success" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                      <div>Wow! Everything worked!</div>
                    </div>
                  </div>
                  <div className="alert alert-warning" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-triangle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M12 9v4" />
                          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>Uh oh, something went wrong</div>
                    </div>
                  </div>
                  <div className="alert alert-danger" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>I'm so sorry…</div>
                    </div>
                  </div>
                  <div className="alert alert-info" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/info-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                      </div>
                      <div>Did you know?</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Dismissible alerts</h2>
                  <p className="text-secondary">
                    Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.
                  </p>
                  <div className="alert alert-success alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                      <div>Wow! Everything worked!</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
                  </div>
                  <div className="alert alert-warning alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-triangle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M12 9v4" />
                          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>Uh oh, something went wrong</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
                  </div>
                  <div className="alert alert-danger alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>I'm so sorry…</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
                  </div>
                  <div className="alert alert-info alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/info-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                      </div>
                      <div>Did you know?</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Alert with a description</h2>
                  <p className="text-secondary">
                    Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.
                  </p>
                  <div className="alert alert-success" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="alert-title">This is a custom alert box!</h4>
                        <div className="text-secondary">Your account has been saved!</div>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-warning" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-triangle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M12 9v4" />
                          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="alert-title">This is a custom alert box!</h4>
                        <div className="text-secondary">Sorry! There was a problem with your request.</div>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-danger" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="alert-title">This is a custom alert box!</h4>
                        <div className="text-secondary">Something went wrong. Please try again.</div>
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-info" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/info-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="alert-title">This is a custom alert box!</h4>
                        <div className="text-secondary">Here is something that you might like to know.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Important alerts</h2>
                  <div className="alert alert-important alert-success alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/check */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                      <div>Wow! Everything worked!</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
                  </div>
                  <div className="alert alert-important alert-warning alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-triangle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M12 9v4" />
                          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>Uh oh, something went wrong</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
                  </div>
                  <div className="alert alert-important alert-danger alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/alert-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div>I'm so sorry…</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
                  </div>
                  <div className="alert alert-important alert-info alert-dismissible" role="alert">
                    <div className="d-flex">
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/info-circle */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon alert-icon"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                      </div>
                      <div>Did you know?</div>
                    </div>
                    <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />
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
export default Alerts;
