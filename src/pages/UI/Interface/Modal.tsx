const Modal = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Modals</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-body">
              <div className="btn-list">
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-simple">
                  Simple modal
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-large">
                  Large modal
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-small">
                  Small modal
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-full-width">
                  Full width modal
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-scrollable">
                  Scrollable modal
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-report">
                  Modal with form
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-success">
                  Success modal
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-danger">
                  Danger modal
                </a>
                <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#modal-team">
                  Modal with simple form
                </a>
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

      <>
        <div className="modal modal-blur fade" id="modal-simple" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
                dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
                tempora totam unde.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn me-auto" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-large" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Large modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
                dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
                tempora totam unde.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn me-auto" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-small" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-title">Are you sure?</div>
                <div>If you proceed, you will lose all your personal data.</div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-link link-secondary me-auto" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                  Yes, delete all my data
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-full-width" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-full-width modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Full width modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti
                dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit
                tempora totam unde.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn me-auto" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-scrollable" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Scrollable modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn me-auto" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-report" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">New report</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="example-text-input"
                    placeholder="Your report name"
                  />
                </div>
                <label className="form-label">Report type</label>
                <div className="form-selectgroup-boxes row mb-3">
                  <div className="col-lg-6">
                    <label className="form-selectgroup-item">
                      <input
                        type="radio"
                        name="report-type"
                        defaultValue={1}
                        className="form-selectgroup-input"
                        defaultChecked={true}
                      />
                      <span className="form-selectgroup-label d-flex align-items-center p-3">
                        <span className="me-3">
                          <span className="form-selectgroup-check" />
                        </span>
                        <span className="form-selectgroup-label-content">
                          <span className="form-selectgroup-title strong mb-1">Simple</span>
                          <span className="d-block text-secondary">Provide only basic data needed for the report</span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <label className="form-selectgroup-item">
                      <input type="radio" name="report-type" defaultValue={1} className="form-selectgroup-input" />
                      <span className="form-selectgroup-label d-flex align-items-center p-3">
                        <span className="me-3">
                          <span className="form-selectgroup-check" />
                        </span>
                        <span className="form-selectgroup-label-content">
                          <span className="form-selectgroup-title strong mb-1">Advanced</span>
                          <span className="d-block text-secondary">
                            Insert charts and additional advanced analyses to be inserted in the report
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="mb-3">
                      <label className="form-label">Report url</label>
                      <div className="input-group input-group-flat">
                        <span className="input-group-text">https://tabler.io/reports/</span>
                        <input type="text" className="form-control ps-0" defaultValue="report-01" autoComplete="off" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-3">
                      <label className="form-label">Visibility</label>
                      <select className="form-select">
                        <option value={1} selected={true}>
                          Private
                        </option>
                        <option value={2}>Public</option>
                        <option value={3}>Hidden</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Client name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Reporting period</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div>
                      <label className="form-label">Additional information</label>
                      <textarea className="form-control" rows={3} defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-link link-secondary" data-bs-dismiss="modal">
                  Cancel
                </a>
                <a href="#" className="btn btn-primary ms-auto" data-bs-dismiss="modal">
                  {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  Create new report
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-success" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              <div className="modal-status bg-success" />
              <div className="modal-body text-center py-4">
                {/* Download SVG icon from http://tabler-icons.io/i/circle-check */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon mb-2 text-green icon-lg"
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
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <h3>Payment succedeed</h3>
                <div className="text-secondary">
                  Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.
                </div>
              </div>
              <div className="modal-footer">
                <div className="w-100">
                  <div className="row">
                    <div className="col">
                      <a href="#" className="btn w-100" data-bs-dismiss="modal">
                        Go to dashboard
                      </a>
                    </div>
                    <div className="col">
                      <a href="#" className="btn btn-success w-100" data-bs-dismiss="modal">
                        View invoice
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-danger" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              <div className="modal-status bg-danger" />
              <div className="modal-body text-center py-4">
                {/* Download SVG icon from http://tabler-icons.io/i/alert-triangle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon mb-2 text-danger icon-lg"
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
                  <path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <h3>Are you sure?</h3>
                <div className="text-secondary">
                  Do you really want to remove 84 files? What you've done cannot be undone.
                </div>
              </div>
              <div className="modal-footer">
                <div className="w-100">
                  <div className="row">
                    <div className="col">
                      <a href="#" className="btn w-100" data-bs-dismiss="modal">
                        Cancel
                      </a>
                    </div>
                    <div className="col">
                      <a href="#" className="btn btn-danger w-100" data-bs-dismiss="modal">
                        Delete 84 items
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal modal-blur fade" id="modal-team" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add a new team</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="row mb-3 align-items-end">
                  <div className="col-auto">
                    <a href="#" className="avatar avatar-upload rounded">
                      {/* Download SVG icon from http://tabler-icons.io/i/plus */}
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
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                      </svg>
                      <span className="avatar-upload-text">Add</span>
                    </a>
                  </div>
                  <div className="col">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Pick your team color</label>
                  <div className="row g-2">
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="dark" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-dark" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput form-colorinput-light">
                        <input
                          name="color"
                          type="radio"
                          defaultValue="white"
                          className="form-colorinput-input"
                          defaultChecked={true}
                        />
                        <span className="form-colorinput-color bg-white" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="blue" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-blue" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="azure" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-azure" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="indigo" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-indigo" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="purple" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-purple" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="pink" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-pink" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="red" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-red" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="orange" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-orange" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="yellow" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-yellow" />
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="form-colorinput">
                        <input name="color" type="radio" defaultValue="lime" className="form-colorinput-input" />
                        <span className="form-colorinput-color bg-lime" />
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="form-label">Additional info</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn me-auto" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Add Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Modal;
