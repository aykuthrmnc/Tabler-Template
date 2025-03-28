const JobListing = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Search for Jobs</h2>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
              <a href="#" className="btn btn-primary">
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
                Post a job
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row g-4">
            <div className="col-md-3">
              <form action="./" method="get" autoComplete="off" noValidate className="sticky-top">
                <div className="form-label">Job Types</div>
                <div className="mb-4">
                  <label className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="form-type[]"
                      defaultValue={1}
                      defaultChecked
                    />
                    <span className="form-check-label">Programming</span>
                  </label>
                  <label className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="form-type[]"
                      defaultValue={2}
                      defaultChecked
                    />
                    <span className="form-check-label">Design</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" name="form-type[]" defaultValue={3} />
                    <span className="form-check-label">Management / Finance</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" name="form-type[]" defaultValue={4} />
                    <span className="form-check-label">Customer Support</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" name="form-type[]" defaultValue={5} />
                    <span className="form-check-label">Sales / Marketing</span>
                  </label>
                </div>
                <div className="form-label">Remote</div>
                <div className="mb-4">
                  <label className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" />
                    <span className="form-check-label form-check-label-on">On</span>
                    <span className="form-check-label form-check-label-off">Off</span>
                  </label>
                </div>
                <div className="form-label">Salary Range</div>
                <div className="mb-4">
                  <label className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="form-salary"
                      defaultValue={1}
                      defaultChecked
                    />
                    <span className="form-check-label">$20K - $50K</span>
                  </label>
                  <label className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="form-salary"
                      defaultValue={2}
                      defaultChecked
                    />
                    <span className="form-check-label">$50K - $100K</span>
                  </label>
                  <label className="form-check">
                    <input type="radio" className="form-check-input" name="form-salary" defaultValue={3} />
                    <span className="form-check-label">&gt; $100K</span>
                  </label>
                  <label className="form-check">
                    <input type="radio" className="form-check-input" name="form-salary" defaultValue={4} />
                    <span className="form-check-label">Drawing / Painting</span>
                  </label>
                </div>
                <div className="form-label">Immigration</div>
                <div className="mb-4">
                  <label className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" />
                    <span className="form-check-label form-check-label-on">On</span>
                    <span className="form-check-label form-check-label-off">Off</span>
                  </label>
                  <div className="small text-secondary">Only show companies that can sponsor a visa</div>
                </div>
                <div className="form-label">Location</div>
                <div className="mb-4">
                  <select className="form-select">
                    <option>Anywhere</option>
                    <option>London</option>
                    <option>San Francisco</option>
                    <option>New York</option>
                    <option>Berlin</option>
                  </select>
                </div>
                <div className="mt-5">
                  <button className="btn btn-primary w-100">Confirm changes</button>
                  <a href="#" className="btn btn-link w-100">
                    Reset to defaults
                  </a>
                </div>
              </form>
            </div>
            <div className="col-md-9">
              <div className="row row-cards">
                <div className="space-y">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-1.jpg)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Lead Tailwind Developer</a>
                              </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  CMS Max
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  CMS Max
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  PHP
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  Laravel
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  CSS
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  Vue
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-2.png)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Frontend Web Engineer</a>
                              </h3>
                            </div>
                            <div className="col-auto fs-3 text-green">$140,000 - $180,000</div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Center Pixel, Inc
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time or Contract
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / Palo Alto, CA
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Center Pixel, Inc
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time or Contract
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / Palo Alto, CA
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  HTML
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  CSS
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  React
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  +3
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-3.png)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Principal Web Application Developer</a>
                              </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Chicago Botanic Garden
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Hybrid / Chicago Botanic Garden
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Chicago Botanic Garden
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Hybrid / Chicago Botanic Garden
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  HTML
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  PHP
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  Laravel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-4.png)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Front-End Developer</a>
                              </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Simple Focus
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Simple Focus
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  HTML
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  PHP
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  CSS
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  +2
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-5.png)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Senior Front-End Engineer</a>
                              </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Infinia ML
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Durham, NC
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Infinia ML
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Durham, NC
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  HTML
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  PHP
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  CSS
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  +4
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-6.png)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Senior Web Developer, Open Source</a>
                              </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Crowd Favorite
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Crowd Favorite
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  HTML
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  JavaScript
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  CSS
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  +8
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-7.png)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Frontend Engineer</a>
                              </h3>
                            </div>
                            <div className="col-auto fs-3 text-green">$95,000 – $145,000 USD</div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Spear AI
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Washington D.C.
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Spear AI
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Washington D.C.
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  HTML
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  JavaScript
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  CSS
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  +3
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-8.png)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Web Developer</a>
                              </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Third Time Games
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / North America
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Third Time Games
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / North America
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  PHP
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  Laravel
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  React
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  +8
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-auto">
                        <div className="card-body">
                          <div
                            className="avatar avatar-md"
                            style={{
                              backgroundImage: "url(./static/jobs/job-9.jpg)",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="card-body ps-0">
                          <div className="row">
                            <div className="col">
                              <h3 className="mb-0">
                                <a href="#">Laravel Developer</a>
                              </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="mt-3 list-inline list-inline-dots mb-0 text-secondary d-sm-block d-none">
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Mindsize
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-inline-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                              <div className="mt-3 list mb-0 text-secondary d-block d-sm-none">
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/building-community */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                    <path d="M13 7l0 .01" />
                                    <path d="M17 7l0 .01" />
                                    <path d="M17 11l0 .01" />
                                    <path d="M17 15l0 .01" />
                                  </svg>
                                  Mindsize
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/license */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                    <path d="M9 7l4 0" />
                                    <path d="M9 11l4 0" />
                                  </svg>
                                  Full-time
                                </div>
                                <div className="list-item">
                                  {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-inline"
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
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                  </svg>
                                  Remote / USA
                                </div>
                              </div>
                            </div>
                            <div className="col-md-auto">
                              <div className="mt-3 badges">
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  PHP
                                </a>
                                <a href="#" className="badge badge-outline text-secondary fw-normal badge-pill">
                                  Laravel
                                </a>
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
export default JobListing;
