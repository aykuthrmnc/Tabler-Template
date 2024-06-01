const ColorPicker = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Color picker</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Basic</h3>
              <div className="row g-3">
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(0, 84, 166)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-1" defaultValue="#0054a6" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(69, 170, 242)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-2" defaultValue="#45aaf2" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(101, 116, 205)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-3" defaultValue="#6574cd" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(165, 94, 234)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-4" defaultValue="#a55eea" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(246, 109, 155)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-5" defaultValue="#f66d9b" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(250, 70, 84)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-6" defaultValue="#fa4654" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(253, 150, 68)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-7" defaultValue="#fd9644" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(241, 196, 15)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-8" defaultValue="#f1c40f" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(123, 210, 53)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-9" defaultValue="#7bd235" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(94, 186, 0)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-10" defaultValue="#5eba00" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(43, 203, 186)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-11" defaultValue="#2bcbba" />
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <div className="clr-field" style={{ color: "rgb(23, 162, 184)" }}>
                      <button type="button" aria-labelledby="clr-open-label" />
                      <input type="text" className="form-control d-block" id="colorpicker-12" defaultValue="#17a2b8" />
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
export default ColorPicker;
