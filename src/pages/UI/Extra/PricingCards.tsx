const PricingCards = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Pricing cards</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-sm-6 col-lg-3">
              <div className="card card-md">
                <div className="card-body text-center">
                  <div className="text-uppercase text-secondary font-weight-medium">Free</div>
                  <div className="display-5 fw-bold my-3">$0</div>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <strong>3</strong> Users
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Sharing Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-danger"
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
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      Design Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-danger"
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
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      Private Messages
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-danger"
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
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      Twitter API
                    </li>
                  </ul>
                  <div className="text-center mt-4">
                    <a href="#" className="btn w-100">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-md">
                <div className="ribbon ribbon-top ribbon-bookmark bg-green">
                  {/* Download SVG icon from http://tabler-icons.io/i/star */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-filled"
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
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </div>
                <div className="card-body text-center">
                  <div className="text-uppercase text-secondary font-weight-medium">Premium</div>
                  <div className="display-5 fw-bold my-3">$49</div>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <strong>10</strong> Users
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Sharing Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Design Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-danger"
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
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      Private Messages
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-danger"
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
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      Twitter API
                    </li>
                  </ul>
                  <div className="text-center mt-4">
                    <a href="#" className="btn btn-green w-100">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-md">
                <div className="card-body text-center">
                  <div className="text-uppercase text-secondary font-weight-medium">Enterprise</div>
                  <div className="display-5 fw-bold my-3">$99</div>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <strong>100</strong> Users
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Sharing Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Design Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Private Messages
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-danger"
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
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      Twitter API
                    </li>
                  </ul>
                  <div className="text-center mt-4">
                    <a href="#" className="btn w-100">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card card-md">
                <div className="card-body text-center">
                  <div className="text-uppercase text-secondary font-weight-medium">Unlimited</div>
                  <div className="display-5 fw-bold my-3">$139</div>
                  <ul className="list-unstyled lh-lg">
                    <li>
                      <strong>Unlimited</strong> Users
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Sharing Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Design Tools
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Private Messages
                    </li>
                    <li>
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon me-1 text-success"
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
                      Twitter API
                    </li>
                  </ul>
                  <div className="text-center mt-4">
                    <a href="#" className="btn w-100">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card card-md">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h2 className="h3">Enterprise-ready. Reach out for a custom quote.</h2>
                      <p className="m-0 text-secondary">
                        Tabler is designed to work great for large enterprises. Take a look at our feature comparison.
                      </p>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="btn">
                        Book a demo
                      </a>
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
export default PricingCards;
