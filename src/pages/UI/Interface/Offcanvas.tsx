const Offcanvas = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Offcanvas</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-body">
              <a
                className="btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasStart"
                role="button"
                aria-controls="offcanvasStart"
              >
                Toggle start offcanvas
              </a>
              <a
                className="btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasEnd"
                role="button"
                aria-controls="offcanvasEnd"
              >
                Toggle end offcanvas
              </a>
              <a
                className="btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasTop"
                role="button"
                aria-controls="offcanvasTop"
              >
                Toggle top offcanvas
              </a>
              <a
                className="btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasBottom"
                role="button"
                aria-controls="offcanvasBottom"
              >
                Toggle bottom offcanvas
              </a>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasStart"
            aria-labelledby="offcanvasStartLabel"
          >
            <div className="offcanvas-header">
              <h2 className="offcanvas-title" id="offcanvasStartLabel">
                Start offcanvas
              </h2>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda ea est, eum exercitationem fugiat
                illum itaque laboriosam magni necessitatibus, nemo nisi numquam quae reiciendis repellat sit soluta
                unde. Aut!
              </div>
              <div className="mt-3">
                <button className="btn btn-primary" type="button" data-bs-dismiss="offcanvas">
                  Close offcanvas
                </button>
              </div>
            </div>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
            <div className="offcanvas-header">
              <h2 className="offcanvas-title" id="offcanvasEndLabel">
                End offcanvas
              </h2>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda ea est, eum exercitationem fugiat
                illum itaque laboriosam magni necessitatibus, nemo nisi numquam quae reiciendis repellat sit soluta
                unde. Aut!
              </div>
              <div className="mt-3">
                <button className="btn btn-primary" type="button" data-bs-dismiss="offcanvas">
                  Close offcanvas
                </button>
              </div>
            </div>
          </div>
          <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header">
              <h2 className="offcanvas-title" id="offcanvasTopLabel">
                Top offcanvas
              </h2>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda ea est, eum exercitationem fugiat
                illum itaque laboriosam magni necessitatibus, nemo nisi numquam quae reiciendis repellat sit soluta
                unde. Aut!
              </div>
              <div className="mt-3">
                <button className="btn btn-primary" type="button" data-bs-dismiss="offcanvas">
                  Close offcanvas
                </button>
              </div>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-bottom"
            tabIndex={-1}
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div className="offcanvas-header">
              <h2 className="offcanvas-title" id="offcanvasBottomLabel">
                Bottom offcanvas
              </h2>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda ea est, eum exercitationem fugiat
                illum itaque laboriosam magni necessitatibus, nemo nisi numquam quae reiciendis repellat sit soluta
                unde. Aut!
              </div>
              <div className="mt-3">
                <button className="btn btn-primary" type="button" data-bs-dismiss="offcanvas">
                  Close offcanvas
                </button>
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
export default Offcanvas;
