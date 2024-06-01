const PricingTable = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Pricing table</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-vcenter table-bordered table-nowrap card-table">
                <thead>
                  <tr>
                    <td className="w-50">
                      <h2>Pricing plans for teams of all sizes</h2>
                      <div className="text-secondary text-wrap">
                        Choose an affordable plan that comes with the best features to engage your audience, create
                        customer loyalty and increase sales.
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="text-uppercase text-secondary font-weight-medium">Starter</div>
                      <div className="display-6 fw-bold my-3">$0</div>
                      <a href="#" className="btn w-100">
                        Choose plan
                      </a>
                    </td>
                    <td className="text-center">
                      <div className="text-uppercase text-secondary font-weight-medium">Professional</div>
                      <div className="display-6 fw-bold my-3">$9</div>
                      <a href="#" className="btn btn-green w-100">
                        Choose plan
                      </a>
                    </td>
                    <td className="text-center">
                      <div className="text-uppercase text-secondary font-weight-medium">Business</div>
                      <div className="display-6 fw-bold my-3">$16</div>
                      <a href="#" className="btn w-100">
                        Choose plan
                      </a>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-light">
                    <th colSpan={4} className="subheader">
                      Features
                    </th>
                  </tr>
                  <tr>
                    <td>Some info about feature</td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                  </tr>
                  <tr>
                    <td>Online payment gateway</td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-red"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited products can be sold</td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-red"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-red"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                  </tr>
                  <tr className="bg-light">
                    <th colSpan={4} className="subheader">
                      Reporting
                    </th>
                  </tr>
                  <tr>
                    <td>Free hosting and domain name</td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                  </tr>
                  <tr>
                    <td>Admin dashboard to control items</td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                  </tr>
                  <tr className="bg-light">
                    <th colSpan={4} className="subheader">
                      Support
                    </th>
                  </tr>
                  <tr>
                    <td>Email marketing and service</td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-red"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-red"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                  </tr>
                  <tr>
                    <td>24/7 customer support online</td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/x */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-red"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                    <td className="text-center">
                      {/* Download SVG icon from http://tabler-icons.io/i/check */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-green"
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
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    <td>
                      <a href="#" className="btn w-100">
                        Choose plan
                      </a>
                    </td>
                    <td>
                      <a href="#" className="btn btn-green w-100">
                        Choose plan
                      </a>
                    </td>
                    <td>
                      <a href="#" className="btn w-100">
                        Choose plan
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
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
export default PricingTable;
