const Steps = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Steps</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Steps horizontal</h3>
                  <ul className="steps steps-green my-4">
                    <li className="step-item">1</li>
                    <li className="step-item active">2</li>
                    <li className="step-item">3</li>
                  </ul>
                </div>
                <div className="card-body">
                  <ul className="steps steps-green steps-counter my-4">
                    <li className="step-item" />
                    <li className="step-item active" />
                    <li className="step-item" />
                  </ul>
                </div>
                <div className="card-body">
                  <ul className="steps steps-green steps-counter my-4">
                    <li className="step-item">Cart</li>
                    <li className="step-item active">Billing Information</li>
                    <li className="step-item">Confirmation</li>
                  </ul>
                </div>
                <div className="card-body">
                  <ol className="breadcrumb breadcrumb-arrows">
                    <li className="breadcrumb-item">
                      <a href="#">Step one</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="#">Step two</a>
                    </li>
                    <li className="breadcrumb-item disabled">
                      <a href="#">Step three</a>
                    </li>
                    <li className="breadcrumb-item disabled">
                      <a href="#">Step four</a>
                    </li>
                  </ol>
                </div>
                <div className="card-body">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">1. Step one</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">2. Step two</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="#">3. Step three</a>
                    </li>
                    <li className="breadcrumb-item disabled">
                      <a href="#">4. Step four</a>
                    </li>
                    <li className="breadcrumb-item disabled">
                      <a href="#">5. Step five</a>
                    </li>
                  </ol>
                </div>
                <div className="card-body">
                  <ol className="breadcrumb breadcrumb-muted">
                    <li className="breadcrumb-item">
                      <a href="#">1. Step one</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">2. Step two</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="#">3. Step three</a>
                    </li>
                    <li className="breadcrumb-item disabled">
                      <a href="#">4. Step four</a>
                    </li>
                    <li className="breadcrumb-item disabled">
                      <a href="#">5. Step five</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Steps vertical</h3>
                  <ul className="steps steps-vertical">
                    <li className="step-item">
                      <div className="h4 m-0">Order received</div>
                      <div className="text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum expedita ipsam
                        laborum nam ratione reprehenderit sed sint tenetur!
                      </div>
                    </li>
                    <li className="step-item">
                      <div className="h4 m-0">Order received</div>
                      <div className="text-secondary">Lorem ipsum dolor sit amet.</div>
                    </li>
                    <li className="step-item active">
                      <div className="h4 m-0">Out for delivery</div>
                      <div className="text-secondary">Lorem ipsum dolor sit amet.</div>
                    </li>
                    <li className="step-item">
                      <div className="h4 m-0">Finalized</div>
                      <div className="text-secondary">Lorem ipsum dolor sit amet.</div>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <ul className="steps steps-counter steps-vertical">
                    <li className="step-item">Step one</li>
                    <li className="step-item">Step two</li>
                    <li className="step-item active">Step three</li>
                    <li className="step-item">Step four</li>
                    <li className="step-item">Step five</li>
                  </ul>
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
export default Steps;
