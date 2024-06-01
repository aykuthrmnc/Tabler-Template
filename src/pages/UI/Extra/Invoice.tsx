const Invoice = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Invoice</h2>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
              <button type="button" className="btn btn-primary">
                {/* Download SVG icon from http://tabler-icons.io/i/printer */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
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
                  <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                  <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                  <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                </svg>
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card card-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <p className="h3">Company</p>
                  <address>
                    Street Address
                    <br />
                    State, City
                    <br />
                    Region, Postal Code
                    <br />
                    ltd@example.com
                  </address>
                </div>
                <div className="col-6 text-end">
                  <p className="h3">Client</p>
                  <address>
                    Street Address
                    <br />
                    State, City
                    <br />
                    Region, Postal Code
                    <br />
                    ctr@example.com
                  </address>
                </div>
                <div className="col-12 my-5">
                  <h1>Invoice INV/001/15</h1>
                </div>
              </div>
              <table className="table table-transparent table-responsive">
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: "1%" }} />
                    <th>Product</th>
                    <th className="text-center" style={{ width: "1%" }}>
                      Qnt
                    </th>
                    <th className="text-end" style={{ width: "1%" }}>
                      Unit
                    </th>
                    <th className="text-end" style={{ width: "1%" }}>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>
                      <p className="strong mb-1">Logo Creation</p>
                      <div className="text-secondary">Logo and business cards design</div>
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-end">$1.800,00</td>
                    <td className="text-end">$1.800,00</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>
                      <p className="strong mb-1">Online Store Design &amp; Development</p>
                      <div className="text-secondary">Design/Development for all popular modern browsers</div>
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-end">$20.000,00</td>
                    <td className="text-end">$20.000,00</td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>
                      <p className="strong mb-1">App Design</p>
                      <div className="text-secondary">Promotional mobile application</div>
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-end">$3.200,00</td>
                    <td className="text-end">$3.200,00</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="strong text-end">
                      Subtotal
                    </td>
                    <td className="text-end">$25.000,00</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="strong text-end">
                      Vat Rate
                    </td>
                    <td className="text-end">20%</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="strong text-end">
                      Vat Due
                    </td>
                    <td className="text-end">$5.000,00</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="font-weight-bold text-uppercase text-end">
                      Total Due
                    </td>
                    <td className="font-weight-bold text-end">$30.000,00</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-secondary text-center mt-5">
                Thank you very much for doing business with us. We look forward to working with you again!
              </p>
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
export default Invoice;
