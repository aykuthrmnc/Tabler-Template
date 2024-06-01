const DataGrid = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Data grid</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Base info</h3>
            </div>
            <div className="card-body">
              <div className="datagrid">
                <div className="datagrid-item">
                  <div className="datagrid-title">Registrar</div>
                  <div className="datagrid-content">Third Party</div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Nameservers</div>
                  <div className="datagrid-content">Third Party</div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Port number</div>
                  <div className="datagrid-content">3306</div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Expiration date</div>
                  <div className="datagrid-content">–</div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Creator</div>
                  <div className="datagrid-content">
                    <div className="d-flex align-items-center">
                      <span
                        className="avatar avatar-xs me-2 rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/000m.jpg)",
                        }}
                      />
                      Paweł Kuna
                    </div>
                  </div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Age</div>
                  <div className="datagrid-content">15 days</div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Edge network</div>
                  <div className="datagrid-content">
                    <span className="status status-green">Active</span>
                  </div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Avatars list</div>
                  <div className="datagrid-content">
                    <div className="avatar-list avatar-list-stacked">
                      <span
                        className="avatar avatar-xs rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/000m.jpg)",
                        }}
                      />
                      <span className="avatar avatar-xs rounded">JL</span>
                      <span
                        className="avatar avatar-xs rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/002m.jpg)",
                        }}
                      />
                      <span
                        className="avatar avatar-xs rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/003m.jpg)",
                        }}
                      />
                      <span
                        className="avatar avatar-xs rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/000f.jpg)",
                        }}
                      />
                      <span className="avatar avatar-xs rounded">+3</span>
                    </div>
                  </div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Checkbox</div>
                  <div className="datagrid-content">
                    <label className="form-check">
                      <input className="form-check-input" type="checkbox" defaultChecked={true} />
                      <span className="form-check-label">Click me</span>
                    </label>
                  </div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Icon</div>
                  <div className="datagrid-content">
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
                    Checked
                  </div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Form control</div>
                  <div className="datagrid-content">
                    <input type="text" className="form-control form-control-flush" placeholder="Input placeholder" />
                  </div>
                </div>
                <div className="datagrid-item">
                  <div className="datagrid-title">Longer description</div>
                  <div className="datagrid-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
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
export default DataGrid;
