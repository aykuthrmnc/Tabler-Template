const FAQ = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Frequently Asked Questions</h2>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
              <div className="d-flex">
                <ol className="breadcrumb breadcrumb-arrows" aria-label="breadcrumbs">
                  <li className="breadcrumb-item">
                    <a href="#">Tabler</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Pages</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">Frequently Asked Questions</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card card-lg">
            <div className="card-body">
              <div className="space-y-4">
                <div>
                  <h2 className="mb-3">1. Introduction</h2>
                  <div id="faq-1" className="accordion" role="tablist" aria-multiselectable="true">
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq-1-1">
                          Welcome to our service!
                        </button>
                      </div>
                      <div
                        id="faq-1-1"
                        className="accordion-collapse collapse show"
                        role="tabpanel"
                        data-bs-parent="#faq-1"
                      >
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-2"
                        >
                          Who are we?
                        </button>
                      </div>
                      <div id="faq-1-2" className="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-3"
                        >
                          What are our values?
                        </button>
                      </div>
                      <div id="faq-1-3" className="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-1">
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="mb-3">2. Functionality</h2>
                  <div id="faq-2" className="accordion" role="tablist" aria-multiselectable="true">
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq-2-1">
                          What are the key features?
                        </button>
                      </div>
                      <div
                        id="faq-2-1"
                        className="accordion-collapse collapse show"
                        role="tabpanel"
                        data-bs-parent="#faq-2"
                      >
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-2-2"
                        >
                          Does your App support mobile devices?
                        </button>
                      </div>
                      <div id="faq-2-2" className="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-2">
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-2-3"
                        >
                          Why should I choose your service?
                        </button>
                      </div>
                      <div id="faq-2-3" className="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-2">
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-2-4"
                        >
                          Is my data secure?
                        </button>
                      </div>
                      <div id="faq-2-4" className="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-2">
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="mb-3">3. Payments</h2>
                  <div id="faq-3" className="accordion" role="tablist" aria-multiselectable="true">
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq-3-1">
                          Is there any free plan?
                        </button>
                      </div>
                      <div
                        id="faq-3-1"
                        className="accordion-collapse collapse show"
                        role="tabpanel"
                        data-bs-parent="#faq-3"
                      >
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-3-2"
                        >
                          What are the available payment options?
                        </button>
                      </div>
                      <div id="faq-3-2" className="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-3">
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" role="tab">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-3-3"
                        >
                          Can I get a refund?
                        </button>
                      </div>
                      <div id="faq-3-3" className="accordion-collapse collapse" role="tabpanel" data-bs-parent="#faq-3">
                        <div className="accordion-body pt-0">
                          <div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias dignissimos
                              dolorum ea est eveniet, excepturi illum in iste iure maiores nemo recusandae rerum saepe
                              sed, sunt totam! Explicabo, ipsa?
                            </p>
                          </div>
                        </div>
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
export default FAQ;
