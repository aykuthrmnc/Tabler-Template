const Widgets = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Widgets</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src="https://cdn.dribbble.com/users/844826/screenshots/14553706/media/2be9a4847b939e02702648d058cf2df8.png"
                        alt="Food Deliver UI dashboards"
                        className="rounded"
                      />
                    </div>
                    <div className="col">
                      <h3 className="card-title mb-1">
                        <a href="#" className="text-reset">
                          Food Deliver UI dashboards
                        </a>
                      </h3>
                      <div className="text-secondary">Updated 2 hours ago</div>
                      <div className="mt-3">
                        <div className="row g-2 align-items-center">
                          <div className="col-auto">25%</div>
                          <div className="col">
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar"
                                style={{ width: "25%" }}
                                role="progressbar"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="25% Complete"
                              >
                                <span className="visually-hidden">25% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="dropdown">
                        <a href="#" className="btn-action" data-bs-toggle="dropdown" aria-expanded="false">
                          {/* Download SVG icon from http://tabler-icons.io/i/dots-vertical */}
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
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            Import
                          </a>
                          <a href="#" className="dropdown-item">
                            Export
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                          <a href="#" className="dropdown-item text-danger">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src="https://cdn.dribbble.com/users/844826/screenshots/14547977/media/e7749bd1b09d9415b8dc265a7dbe81f6.png"
                        alt="Projects Dashboards"
                        className="rounded"
                      />
                    </div>
                    <div className="col">
                      <h3 className="card-title mb-1">
                        <a href="#" className="text-reset">
                          Projects Dashboards
                        </a>
                      </h3>
                      <div className="text-secondary">Updated 2 hours ago</div>
                      <div className="mt-3">
                        <div className="row g-2 align-items-center">
                          <div className="col-auto">76%</div>
                          <div className="col">
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar"
                                style={{ width: "76%" }}
                                role="progressbar"
                                aria-valuenow={76}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="76% Complete"
                              >
                                <span className="visually-hidden">76% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="dropdown">
                        <a href="#" className="btn-action" data-bs-toggle="dropdown" aria-expanded="false">
                          {/* Download SVG icon from http://tabler-icons.io/i/dots-vertical */}
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
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            Import
                          </a>
                          <a href="#" className="dropdown-item">
                            Export
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                          <a href="#" className="dropdown-item text-danger">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div className="card-body">
                  <div className="row">
                    <div className="col-auto">
                      <span
                        className="avatar rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/001f.jpg)",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">Maryjo Lebarree</div>
                      <div className="text-secondary">Civil Engineer</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div className="card-body">
                  <div className="row">
                    <div className="col-auto">
                      <span className="avatar rounded">EP</span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">Egan Poetz</div>
                      <div className="text-secondary">Research Nurse</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="font-weight-medium">Kellie Skingley</div>
                      <div className="text-secondary">Teacher</div>
                    </div>
                    <div className="col-auto">
                      <span
                        className="avatar rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/002f.jpg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="font-weight-medium">Christabel Charlwood</div>
                      <div className="text-secondary">Tax Accountant</div>
                    </div>
                    <div className="col-auto">
                      <span
                        className="avatar rounded"
                        style={{
                          backgroundImage: "url(./static/avatars/003f.jpg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span
                      className="avatar avatar-xl rounded"
                      style={{ backgroundImage: "url(./static/avatars/010m.jpg)" }}
                    />
                  </div>
                  <div className="card-title mb-1">Thatcher Keel</div>
                  <div className="text-secondary">VP Sales</div>
                </div>
                <a href="#" className="card-btn">
                  View full profile
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span
                      className="avatar avatar-xl rounded"
                      style={{ backgroundImage: "url(./static/avatars/005f.jpg)" }}
                    />
                  </div>
                  <div className="card-title mb-1">Dyann Escala</div>
                  <div className="text-secondary">Mechanical Systems Engineer</div>
                </div>
                <a href="#" className="card-btn">
                  View full profile
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span
                      className="avatar avatar-xl rounded"
                      style={{ backgroundImage: "url(./static/avatars/006f.jpg)" }}
                    />
                  </div>
                  <div className="card-title mb-1">Avivah Mugleston</div>
                  <div className="text-secondary">Actuary</div>
                </div>
                <a href="#" className="card-btn">
                  View full profile
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mb-3">
                    <span className="avatar avatar-xl rounded">AA</span>
                  </div>
                  <div className="card-title mb-1">Arlie Armstead</div>
                  <div className="text-secondary">VP Quality Control</div>
                </div>
                <a href="#" className="card-btn">
                  View full profile
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div
                  className="card-cover card-cover-blurred text-center"
                  style={{
                    backgroundImage: "url(./static/photos/blond-using-her-laptop-at-her-bedroom.jpg)",
                  }}
                >
                  <span
                    className="avatar avatar-xl avatar-thumb rounded"
                    style={{ backgroundImage: "url(./static/avatars/012f.jpg)" }}
                  />
                </div>
                <div className="card-body text-center">
                  <div className="card-title mb-1">Marsha Labat</div>
                  <div className="text-secondary">Research Associate</div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div
                  className="card-cover card-cover-blurred text-center"
                  style={{
                    backgroundImage: "url(./static/photos/tropical-palm-leaves-floral-pattern-background.jpg)",
                  }}
                >
                  <span
                    className="avatar avatar-xl avatar-thumb rounded"
                    style={{ backgroundImage: "url(./static/avatars/013m.jpg)" }}
                  />
                </div>
                <div className="card-body text-center">
                  <div className="card-title mb-1">Elston Muffett</div>
                  <div className="text-secondary">Account Coordinator</div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div
                  className="card-cover card-cover-blurred text-center card-cover-blurred"
                  style={{
                    backgroundImage: "url(./static/photos/woman-read-book-and-drink-coffee.jpg)",
                  }}
                >
                  <span
                    className="avatar avatar-xl avatar-thumb rounded"
                    style={{ backgroundImage: "url(./static/avatars/013f.jpg)" }}
                  />
                </div>
                <div className="card-body text-center">
                  <div className="card-title mb-1">Leigha Gorce</div>
                  <div className="text-secondary">Geologist II</div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-3">
              <a className="card card-link" href="#">
                <div
                  className="card-cover card-cover-blurred text-center card-cover-blurred"
                  style={{
                    backgroundImage: "url(./static/photos/book-on-the-grass.jpg)",
                  }}
                >
                  <span className="avatar avatar-xl avatar-thumb rounded">TB</span>
                </div>
                <div className="card-body text-center">
                  <div className="card-title mb-1">Tallie Bettis</div>
                  <div className="text-secondary">Director of Sales</div>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <span
                        className="avatar avatar-lg"
                        style={{
                          backgroundImage: "url(./static/avatars/000m.jpg)",
                        }}
                      />
                    </div>
                    <div className="col">
                      <h4 className="card-title m-0">
                        <a href="#">Paweł Kuna</a>
                      </h4>
                      <div className="text-secondary">Working in Tabler</div>
                      <div className="small mt-1">
                        <span className="badge bg-green" /> Online
                      </div>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="btn">
                        Subscribe
                      </a>
                    </div>
                    <div className="col-auto">
                      <div className="dropdown">
                        <a href="#" className="btn-action" data-bs-toggle="dropdown" aria-expanded="false">
                          {/* Download SVG icon from http://tabler-icons.io/i/dots-vertical */}
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
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            Import
                          </a>
                          <a href="#" className="dropdown-item">
                            Export
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                          <a href="#" className="dropdown-item text-danger">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <span
                        className="avatar avatar-lg"
                        style={{
                          backgroundImage: "url(./static/avatars/002m.jpg)",
                        }}
                      />
                    </div>
                    <div className="col">
                      <h4 className="card-title m-0">
                        <a href="#">Mallory Hulme</a>
                      </h4>
                      <div className="text-secondary">Working in Kare</div>
                      <div className="small mt-1">
                        <span className="badge bg-green" /> Online
                      </div>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="btn">
                        Subscribe
                      </a>
                    </div>
                    <div className="col-auto">
                      <div className="dropdown">
                        <a href="#" className="btn-action" data-bs-toggle="dropdown" aria-expanded="false">
                          {/* Download SVG icon from http://tabler-icons.io/i/dots-vertical */}
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
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          </svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            Import
                          </a>
                          <a href="#" className="dropdown-item">
                            Export
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                          <a href="#" className="dropdown-item text-danger">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-primary text-white avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/currency-dollar */}
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
                          <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                          <path d="M12 3v3m0 12v3" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">132 Sales</div>
                      <div className="text-secondary">12 waiting payments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-green text-white avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/shopping-cart */}
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
                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M17 17h-11v-14h-2" />
                          <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">78 Orders</div>
                      <div className="text-secondary">32 shipped</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-red text-white avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/user */}
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
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">1352 Members</div>
                      <div className="text-secondary">163 registered today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-yellow text-white avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/message */}
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
                          <path d="M8 9h8" />
                          <path d="M8 13h6" />
                          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">132 Comments</div>
                      <div className="text-secondary">16 waitings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <div
                        className="chart-sparkline chart-sparkline-square"
                        id="sparkline-sales"
                        style={{ minHeight: 41 }}
                      >
                        <div
                          id="apexchartsnngnb9d8"
                          className="apexcharts-canvas apexchartsnngnb9d8 apexcharts-theme-light"
                          style={{ width: 40, height: 41 }}
                        >
                          <svg
                            id="SvgjsSvg1001"
                            width={40}
                            height={41}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                          >
                            <foreignObject x={0} y={0} width={40} height={41}>
                              <div className="apexcharts-legend" />
                            </foreignObject>
                            <g
                              id="SvgjsG1003"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(0, 0)"
                            >
                              <defs id="SvgjsDefs1002">
                                <clipPath id="gridRectMasknngnb9d8">
                                  <rect
                                    id="SvgjsRect1004"
                                    width={46}
                                    height={42}
                                    x={-3}
                                    y={-1}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMasknngnb9d8" />
                                <clipPath id="nonForecastMasknngnb9d8" />
                                <clipPath id="gridRectMarkerMasknngnb9d8">
                                  <rect
                                    id="SvgjsRect1005"
                                    width={44}
                                    height={44}
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                              </defs>
                              <g id="SvgjsG1006" className="apexcharts-radialbar">
                                <g id="SvgjsG1007">
                                  <g id="SvgjsG1008" className="apexcharts-tracks">
                                    <g id="SvgjsG1009" className="apexcharts-radialbar-track apexcharts-track">
                                      <path
                                        id="apexcharts-radialbarTrack-0"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 19.99723301461454 4.1463417048796565"
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="rgba(242,242,242,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.3658536585365857"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area"
                                      />
                                    </g>
                                  </g>
                                  <g id="SvgjsG1011">
                                    <g id="SvgjsG1013" className="apexcharts-series apexcharts-radial-series">
                                      <path
                                        id="SvgjsPath1014"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 14.061114982430661 34.699256230936875"
                                        fill="none"
                                        fillOpacity="0.85"
                                        stroke="rgba(32,107,196,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.439024390243903"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                      />
                                    </g>
                                    <circle
                                      id="SvgjsCircle1012"
                                      r="14.670731707317076"
                                      cx={20}
                                      cy={20}
                                      className="apexcharts-radialbar-hollow"
                                      fill="transparent"
                                    />
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine1015"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1016"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">132 Sales</div>
                      <div className="text-secondary">12 waiting payments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <div
                        className="chart-sparkline chart-sparkline-square"
                        id="sparkline-orders"
                        style={{ minHeight: 41 }}
                      >
                        <div
                          id="apexcharts05ed0tv7"
                          className="apexcharts-canvas apexcharts05ed0tv7 apexcharts-theme-light"
                          style={{ width: 40, height: 41 }}
                        >
                          <svg
                            id="SvgjsSvg1017"
                            width={40}
                            height={41}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                          >
                            <foreignObject x={0} y={0} width={40} height={41}>
                              <div className="apexcharts-legend" />
                            </foreignObject>
                            <g
                              id="SvgjsG1019"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(0, 0)"
                            >
                              <defs id="SvgjsDefs1018">
                                <clipPath id="gridRectMask05ed0tv7">
                                  <rect
                                    id="SvgjsRect1020"
                                    width={46}
                                    height={42}
                                    x={-3}
                                    y={-1}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMask05ed0tv7" />
                                <clipPath id="nonForecastMask05ed0tv7" />
                                <clipPath id="gridRectMarkerMask05ed0tv7">
                                  <rect
                                    id="SvgjsRect1021"
                                    width={44}
                                    height={44}
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                              </defs>
                              <g id="SvgjsG1022" className="apexcharts-radialbar">
                                <g id="SvgjsG1023">
                                  <g id="SvgjsG1024" className="apexcharts-tracks">
                                    <g id="SvgjsG1025" className="apexcharts-radialbar-track apexcharts-track">
                                      <path
                                        id="apexcharts-radialbarTrack-0"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 19.99723301461454 4.1463417048796565"
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="rgba(242,242,242,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.3658536585365857"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area"
                                      />
                                    </g>
                                  </g>
                                  <g id="SvgjsG1027">
                                    <g id="SvgjsG1029" className="apexcharts-series apexcharts-radial-series">
                                      <path
                                        id="SvgjsPath1030"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 14.061114982430661 34.699256230936875"
                                        fill="none"
                                        fillOpacity="0.85"
                                        stroke="rgba(47,179,68,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.439024390243903"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                      />
                                    </g>
                                    <circle
                                      id="SvgjsCircle1028"
                                      r="14.670731707317076"
                                      cx={20}
                                      cy={20}
                                      className="apexcharts-radialbar-hollow"
                                      fill="transparent"
                                    />
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine1031"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1032"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">78 Orders</div>
                      <div className="text-secondary">32 shipped</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <div
                        className="chart-sparkline chart-sparkline-square"
                        id="sparkline-members"
                        style={{ minHeight: 41 }}
                      >
                        <div
                          id="apexchartsw0gjjgdn"
                          className="apexcharts-canvas apexchartsw0gjjgdn apexcharts-theme-light"
                          style={{ width: 40, height: 41 }}
                        >
                          <svg
                            id="SvgjsSvg1033"
                            width={40}
                            height={41}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                          >
                            <foreignObject x={0} y={0} width={40} height={41}>
                              <div className="apexcharts-legend" />
                            </foreignObject>
                            <g
                              id="SvgjsG1035"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(0, 0)"
                            >
                              <defs id="SvgjsDefs1034">
                                <clipPath id="gridRectMaskw0gjjgdn">
                                  <rect
                                    id="SvgjsRect1036"
                                    width={46}
                                    height={42}
                                    x={-3}
                                    y={-1}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMaskw0gjjgdn" />
                                <clipPath id="nonForecastMaskw0gjjgdn" />
                                <clipPath id="gridRectMarkerMaskw0gjjgdn">
                                  <rect
                                    id="SvgjsRect1037"
                                    width={44}
                                    height={44}
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                              </defs>
                              <g id="SvgjsG1038" className="apexcharts-radialbar">
                                <g id="SvgjsG1039">
                                  <g id="SvgjsG1040" className="apexcharts-tracks">
                                    <g id="SvgjsG1041" className="apexcharts-radialbar-track apexcharts-track">
                                      <path
                                        id="apexcharts-radialbarTrack-0"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 19.99723301461454 4.1463417048796565"
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="rgba(242,242,242,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.3658536585365857"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area"
                                      />
                                    </g>
                                  </g>
                                  <g id="SvgjsG1043">
                                    <g
                                      id="SvgjsG1045"
                                      className="apexcharts-series apexcharts-radial-series"
                                    >
                                      <path
                                        id="SvgjsPath1046"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 14.061114982430661 34.699256230936875"
                                        fill="none"
                                        fillOpacity="0.85"
                                        stroke="rgba(214,57,57,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.439024390243903"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                      />
                                    </g>
                                    <circle
                                      id="SvgjsCircle1044"
                                      r="14.670731707317076"
                                      cx={20}
                                      cy={20}
                                      className="apexcharts-radialbar-hollow"
                                      fill="transparent"
                                    />
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine1047"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1048"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">1352 Members</div>
                      <div className="text-secondary">163 registered today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <div
                        className="chart-sparkline chart-sparkline-square"
                        id="sparkline-comments"
                        style={{ minHeight: 41 }}
                      >
                        <div
                          id="apexcharts4bkp7ib3g"
                          className="apexcharts-canvas apexcharts4bkp7ib3g apexcharts-theme-light"
                          style={{ width: 40, height: 41 }}
                        >
                          <svg
                            id="SvgjsSvg1049"
                            width={40}
                            height={41}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                          >
                            <foreignObject x={0} y={0} width={40} height={41}>
                              <div className="apexcharts-legend" />
                            </foreignObject>
                            <g
                              id="SvgjsG1051"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(0, 0)"
                            >
                              <defs id="SvgjsDefs1050">
                                <clipPath id="gridRectMask4bkp7ib3g">
                                  <rect
                                    id="SvgjsRect1052"
                                    width={46}
                                    height={42}
                                    x={-3}
                                    y={-1}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMask4bkp7ib3g" />
                                <clipPath id="nonForecastMask4bkp7ib3g" />
                                <clipPath id="gridRectMarkerMask4bkp7ib3g">
                                  <rect
                                    id="SvgjsRect1053"
                                    width={44}
                                    height={44}
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                              </defs>
                              <g id="SvgjsG1054" className="apexcharts-radialbar">
                                <g id="SvgjsG1055">
                                  <g id="SvgjsG1056" className="apexcharts-tracks">
                                    <g id="SvgjsG1057" className="apexcharts-radialbar-track apexcharts-track">
                                      <path
                                        id="apexcharts-radialbarTrack-0"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 19.99723301461454 4.1463417048796565"
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="rgba(242,242,242,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.3658536585365857"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area"
                                      />
                                    </g>
                                  </g>
                                  <g id="SvgjsG1059">
                                    <g
                                      id="SvgjsG1061"
                                      className="apexcharts-series apexcharts-radial-series"
                                    >
                                      <path
                                        id="SvgjsPath1062"
                                        d="M 20 4.146341463414631 A 15.85365853658537 15.85365853658537 0 1 1 14.061114982430661 34.699256230936875"
                                        fill="none"
                                        fillOpacity="0.85"
                                        stroke="rgba(245,159,0,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth="2.439024390243903"
                                        strokeDasharray={0}
                                        className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                      />
                                    </g>
                                    <circle
                                      id="SvgjsCircle1060"
                                      r="14.670731707317076"
                                      cx={20}
                                      cy={20}
                                      className="apexcharts-radialbar-hollow"
                                      fill="transparent"
                                    />
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine1063"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1064"
                                x1={0}
                                y1={0}
                                x2={40}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">132 Comments</div>
                      <div className="text-secondary">16 waitings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-green-lt avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/arrow-up */}
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
                          <path d="M18 11l-6 -6" />
                          <path d="M6 11l6 -6" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">
                        $5,256.99
                        <span className="float-right font-weight-medium text-green">+4%</span>
                      </div>
                      <div className="text-secondary">Revenue last 30 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-red-lt avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/arrow-down */}
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
                          <path d="M18 13l-6 6" />
                          <path d="M6 13l6 6" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">
                        342
                        <span className="float-right font-weight-medium text-red">-4.3%</span>
                      </div>
                      <div className="text-secondary">Sales last 30 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-green-lt avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/arrow-up */}
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
                          <path d="M18 11l-6 -6" />
                          <path d="M6 11l6 -6" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">
                        132
                        <span className="float-right font-weight-medium text-green">+6.8%</span>
                      </div>
                      <div className="text-secondary">Customers last 30 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="card card-sm">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <span className="bg-red-lt avatar">
                        {/* Download SVG icon from http://tabler-icons.io/i/arrow-down */}
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
                          <path d="M18 13l-6 6" />
                          <path d="M6 13l6 6" />
                        </svg>
                      </span>
                    </div>
                    <div className="col">
                      <div className="font-weight-medium">
                        78
                        <span className="float-right font-weight-medium text-red">-2%</span>
                      </div>
                      <div className="text-secondary">Members registered today</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <div className="font-weight-medium">1700</div>
                          <div className="text-secondary">Users</div>
                        </div>
                        <div className="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-red text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/heart */}
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
                              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">1700</div>
                          <div className="text-secondary">Users</div>
                        </div>
                        <div className="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="bg-green text-white avatar">
                            {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}
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
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                          </span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">1700</div>
                          <div className="text-secondary">Users</div>
                        </div>
                        <div className="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="avatar">HS</span>
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">1700</div>
                          <div className="text-secondary">Users</div>
                        </div>
                        <div className="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/006m.jpg)",
                            }}
                          />
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">1700</div>
                          <div className="text-secondary">Users</div>
                        </div>
                        <div className="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/000m.jpg)",
                            }}
                          />
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">1700</div>
                          <div className="text-secondary">Users</div>
                        </div>
                        <div className="col-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/003m.jpg)",
                            }}
                          />
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">1700</div>
                          <div className="text-secondary">Users</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/002m.jpg)",
                            }}
                          />
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">
                            1700
                            {/* Download SVG icon from http://tabler-icons.io/i/trending-down */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-sm ms-1 text-red"
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
                              <path d="M3 7l6 6l4 -4l8 8" />
                              <path d="M21 10l0 7l-7 0" />
                            </svg>
                          </div>
                          <div className="text-secondary">Users</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Card with code</h3>
                    </div>
                    <div className="card-code">
                      <figure className="highlight">
                        <pre>
                          <code className="language-scss" data-lang="scss">
                            <span className="nc">.card-footer</span> <span className="p">{"{"}</span>
                            {"\n"}
                            {"\t"}
                            <span className="nl">background</span>
                            <span className="p">:</span> <span className="nb">transparent</span>
                            <span className="p">;</span>
                            {"\n"}
                            {"\n"}
                            {"\t"}
                            <span className="k">&amp;</span>
                            <span className="nd">:last-child</span> <span className="p">{"{"}</span>
                            {"\n"}
                            {"\t"}
                            {"\t"}
                            <span className="nl">border-radius</span>
                            <span className="p">:</span> <span className="m">0</span> <span className="m">0</span>{" "}
                            <span className="m">1</span> <span className="m">2</span>
                            <span className="p">;</span>
                            {"\n"}
                            {"\t"}
                            <span className="p">{"}"}</span>
                            {"\n"}
                            <span className="p">{"}"}</span>
                          </code>
                        </pre>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body p-4 py-5 text-center">
                      <span className="avatar avatar-xl mb-4 rounded">W</span>
                      <h3 className="mb-0">New website</h3>
                      <p className="text-secondary">Due to: 28 Aug 2019</p>
                      <p className="mb-3">
                        <span className="badge bg-red-lt">Waiting</span>
                      </p>
                      <div>
                        <div className="avatar-list avatar-list-stacked">
                          <span
                            className="avatar avatar-sm rounded"
                            style={{
                              backgroundImage: "url(./static/avatars/000m.jpg)",
                            }}
                          />
                          <span className="avatar avatar-sm rounded">JL</span>
                          <span
                            className="avatar avatar-sm rounded"
                            style={{
                              backgroundImage: "url(./static/avatars/002m.jpg)",
                            }}
                          />
                          <span
                            className="avatar avatar-sm rounded"
                            style={{
                              backgroundImage: "url(./static/avatars/003m.jpg)",
                            }}
                          />
                          <span
                            className="avatar avatar-sm rounded"
                            style={{
                              backgroundImage: "url(./static/avatars/000f.jpg)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="progress card-progress">
                      <div
                        className="progress-bar"
                        style={{ width: "38%" }}
                        role="progressbar"
                        aria-valuenow={38}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="38% Complete"
                      >
                        <span className="visually-hidden">38% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="row row-cards">
                <div className="col-12">
                  <div className="card">
                    <div className="progress card-progress">
                      <div
                        className="progress-bar bg-red"
                        style={{ width: "20%" }}
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="20% Complete"
                      >
                        <span className="visually-hidden">20% Complete</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="#">Tabler UI</a>
                        <span className="badge ms-2">v1.0</span>
                      </h3>
                      <div className="avatar-list avatar-list-stacked mb-3">
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/000m.jpg)",
                          }}
                        />
                        <span className="avatar avatar-sm rounded">JL</span>
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/002m.jpg)",
                          }}
                        />
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/003m.jpg)",
                          }}
                        />
                      </div>
                      <div className="card-meta d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          {/* Download SVG icon from http://tabler-icons.io/i/check */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon me-2"
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
                          <span>5/10</span>
                        </div>
                        <span>Due 72 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="progress card-progress">
                      <div
                        className="progress-bar bg-green"
                        style={{ width: "20%" }}
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="20% Complete"
                      >
                        <span className="visually-hidden">20% Complete</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="#">Tabler React</a>
                      </h3>
                      <div className="avatar-list avatar-list-stacked mb-3">
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/009f.jpg)",
                          }}
                        />
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/010f.jpg)",
                          }}
                        />
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/011m.jpg)",
                          }}
                        />
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/012m.jpg)",
                          }}
                        />
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/011f.jpg)",
                          }}
                        />
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/012f.jpg)",
                          }}
                        />
                        <span
                          className="avatar avatar-sm rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/013m.jpg)",
                          }}
                        />
                      </div>
                      <div className="card-meta d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          {/* Download SVG icon from http://tabler-icons.io/i/check */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon me-2"
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
                          <span>5/10</span>
                        </div>
                        <span>Due 2 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">Basic info</div>
                      <div className="mb-2">
                        {/* Download SVG icon from http://tabler-icons.io/i/book */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon me-2 text-secondary"
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
                          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                          <path d="M3 6l0 13" />
                          <path d="M12 6l0 13" />
                          <path d="M21 6l0 13" />
                        </svg>
                        Went to: <strong>University of Ljubljana</strong>
                      </div>
                      <div className="mb-2">
                        {/* Download SVG icon from http://tabler-icons.io/i/briefcase */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon me-2 text-secondary"
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
                          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                          <path d="M12 12l0 .01" />
                          <path d="M3 13a20 20 0 0 0 18 0" />
                        </svg>
                        Worked at: <strong>Devpulse</strong>
                      </div>
                      <div className="mb-2">
                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon me-2 text-secondary"
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
                          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                        Lives in: <strong>Šentilj v Slov. Goricah, Slovenia</strong>
                      </div>
                      <div className="mb-2">
                        {/* Download SVG icon from http://tabler-icons.io/i/map-pin */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon me-2 text-secondary"
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
                        From:{" "}
                        <strong>
                          <span className="flag flag-country-si" />
                          Slovenia
                        </strong>
                      </div>
                      <div className="mb-2">
                        {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon me-2 text-secondary"
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
                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                          <path d="M16 3v4" />
                          <path d="M8 3v4" />
                          <path d="M4 11h16" />
                          <path d="M11 15h1" />
                          <path d="M12 15v3" />
                        </svg>
                        Birth date: <strong>13/01/1985</strong>
                      </div>
                      <div>
                        {/* Download SVG icon from http://tabler-icons.io/i/clock */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon me-2 text-secondary"
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
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 7v5l3 3" />
                        </svg>
                        Time zone: <strong>Europe/Ljubljana</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Configuration</h3>
                      <div className="card-actions">
                        <a href="#">
                          Edit configuration
                          {/* Download SVG icon from http://tabler-icons.io/i/edit */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ms-1"
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
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                            <path d="M16 5l3 3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <dl className="row">
                        <dt className="col-5">Date:</dt>
                        <dd className="col-7">2020-01-05 16:42:29 UTC</dd>
                        <dt className="col-5">Account:</dt>
                        <dd className="col-7">tabler</dd>
                        <dt className="col-5">Location:</dt>
                        <dd className="col-7">
                          <span className="flag flag-country-pl" />
                          Poland
                        </dd>
                        <dt className="col-5">IP Address:</dt>
                        <dd className="col-7">46.113.11.3</dd>
                        <dt className="col-5">Operating system:</dt>
                        <dd className="col-7">OS X 10.15.2 64-bit</dd>
                        <dt className="col-5">Browser:</dt>
                        <dd className="col-7">Chrome</dd>
                      </dl>
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
export default Widgets;
