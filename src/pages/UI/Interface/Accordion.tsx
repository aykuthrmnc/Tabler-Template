const Accordion = () => {
  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Accordion</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-body">
              <div className="accordion" id="accordion-example">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapse-1" className="accordion-collapse collapse show" data-bs-parent="#accordion-example">
                    <div className="accordion-body pt-0">
                      <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our default variables. It's also worth noting
                      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapse-2" className="accordion-collapse collapse" data-bs-parent="#accordion-example">
                    <div className="accordion-body pt-0">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our default variables. It's also worth noting
                      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapse-3" className="accordion-collapse collapse" data-bs-parent="#accordion-example">
                    <div className="accordion-body pt-0">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our default variables. It's also worth noting
                      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                      does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                    >
                      Accordion Item #4
                    </button>
                  </h2>
                  <div id="collapse-4" className="accordion-collapse collapse" data-bs-parent="#accordion-example">
                    <div className="accordion-body pt-0">
                      <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the
                      collapse plugin adds the appropriate classes that we use to style each element. These classes
                      control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our default variables. It's also worth noting
                      that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                      does limit overflow.
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
export default Accordion;
