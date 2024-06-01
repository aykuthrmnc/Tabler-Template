const Tasks = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Tabler Inc. Tasks</h2>
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
                Add board
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <ul className="nav nav-bordered mb-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                View all
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Marketing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Development
              </a>
            </li>
          </ul>
          <div className="row">
            <div className="col-12 col-md-6 col-lg">
              <h2 className="mb-3">To Do</h2>
              <div className="mb-4">
                <div className="row row-cards">
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">Enable analytics tracking</h3>
                        <div className="ratio ratio-16x9">
                          <img
                            src="./static/projects/dashboard-1.png"
                            className="rounded object-cover"
                            alt="Enable analytics tracking"
                          />
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
                                <span className="avatar avatar-xs rounded">EP</span>
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/002f.jpg)",
                                  }}
                                />
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/003f.jpg)",
                                  }}
                                />
                                <span className="avatar avatar-xs rounded">HS</span>
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              7
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                2
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">User should receive a daily digest email</h3>
                        <div className="text-secondary">
                          Dedicated form for a category of users that will perform actions.
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/000f.jpg)",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-warning">
                                {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
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
                                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                                  <path d="M16 3v4" />
                                  <path d="M8 3v4" />
                                  <path d="M4 11h16" />
                                  <path d="M11 15h1" />
                                  <path d="M12 15v3" />
                                </svg>
                                10 Sep
                              </a>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              6
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-status-top bg-yellow" />
                      <div className="card-body">
                        <h3 className="card-title">Change license and remove references to products</h3>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col"></div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale active" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              34
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                4
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
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
            <div className="col-12 col-md-6 col-lg">
              <h2 className="mb-3">In Progress</h2>
              <div className="mb-4">
                <div className="row row-cards">
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-status-top bg-green" />
                      <div className="card-body">
                        <h3 className="card-title">Write a release note for Admin v1.0</h3>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col"></div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/activity */}
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
                                  <path d="M3 12h4l3 8l4 -16l3 8h4" />
                                </svg>
                                1/3
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                11
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="divide-y-2 mt-4">
                          <div>
                            {/* Download SVG icon from http://tabler-icons.io/i/check */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-muted"
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
                            <span className="text-secondary text-decoration-line-through">Implement new designs</span>
                          </div>
                          <div>
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
                            Usability testing
                          </div>
                          <div>
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
                            Design navigation changes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="ribbon ribbon-top ribbon-bookmark bg-yellow">
                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                        </svg>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Product Update - Q4 2021</h3>
                        <div className="text-secondary">
                          Dedicated form for a category of users that will perform actions.
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/002f.jpg)",
                                  }}
                                />
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/003f.jpg)",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              11
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                6
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">Code HTML email template for welcome email</h3>
                        <div className="ratio ratio-16x9">
                          <img
                            src="./static/projects/dashboard-3.png"
                            className="rounded object-cover"
                            alt="Code HTML email template for welcome email"
                          />
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col"></div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                11
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
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
            <div className="col-12 col-md-6 col-lg">
              <h2 className="mb-3">Test</h2>
              <div className="mb-4">
                <div className="row row-cards">
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-status-top bg-red" />
                      <div className="card-body">
                        <h3 className="card-title">Design new diagrams</h3>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
                                <span className="avatar avatar-xs rounded">HS</span>
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/006m.jpg)",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              6
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                9
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">Improve animation loader</h3>
                        <div className="ratio ratio-16x9">
                          <img
                            src="./static/projects/dashboard-2.png"
                            className="rounded object-cover"
                            alt="Improve animation loader"
                          />
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/004f.jpg)",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale active" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              5
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                6
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">iOS App home page</h3>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
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
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-status-top bg-blue" />
                      <div className="card-body">
                        <h3 className="card-title">Changelog 1.7</h3>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col"></div>
                            <div className="col-auto">
                              <a href="#" className="link-warning">
                                {/* Download SVG icon from http://tabler-icons.io/i/calendar */}
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
                                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                                  <path d="M16 3v4" />
                                  <path d="M8 3v4" />
                                  <path d="M4 11h16" />
                                  <path d="M11 15h1" />
                                  <path d="M12 15v3" />
                                </svg>
                                10 Jan
                              </a>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
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
                                6
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
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
            <div className="col-12 col-md-6 col-lg">
              <h2 className="mb-3">Completed</h2>
              <div className="mb-4">
                <div className="row row-cards">
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">Enable analytics tracking</h3>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/002f.jpg)",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              1
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">Coordinate with business development</h3>
                        <div className="text-secondary">This content is a little bit longer.</div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
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
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale active" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              7
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/activity */}
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
                                  <path d="M3 12h4l3 8l4 -16l3 8h4" />
                                </svg>
                                1/3
                              </a>
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="divide-y-2 mt-4">
                          <div>
                            {/* Download SVG icon from http://tabler-icons.io/i/check */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon text-muted"
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
                            <span className="text-secondary text-decoration-line-through">
                              Find out the old contract documents
                            </span>
                          </div>
                          <div>
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
                            Organize meeting sales associates to understand need in detail
                          </div>
                          <div>
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
                            Make sure to cover every small details
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card card-sm">
                      <div className="card-body">
                        <h3 className="card-title">Managing teams</h3>
                        <div className="text-secondary">
                          Publishing industries for previewing layouts and visual <a href="#">#family</a> 🔥
                        </div>
                        <div className="mt-4">
                          <div className="row">
                            <div className="col">
                              <div className="avatar-list avatar-list-stacked">
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/006m.jpg)",
                                  }}
                                />
                                <span
                                  className="avatar avatar-xs rounded"
                                  style={{
                                    backgroundImage: "url(./static/avatars/004f.jpg)",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-auto text-secondary">
                              <button className="switch-icon switch-icon-scale" data-bs-toggle="switch-icon">
                                <span className="switch-icon-a text-muted">
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
                                <span className="switch-icon-b text-red">
                                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-filled"
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
                              </button>
                              4
                            </div>
                            <div className="col-auto">
                              <a href="#" className="link-muted">
                                {/* Download SVG icon from http://tabler-icons.io/i/share */}
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
                                  <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                  <path d="M8.7 10.7l6.6 -3.4" />
                                  <path d="M8.7 13.3l6.6 3.4" />
                                </svg>
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
export default Tasks;
