const Navigation = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Navigation</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="box">
            <div className="mb-3">
              <header className="navbar navbar-expand-md navbar-transparent d-print-none">
                <div className="container-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">
                      <img
                        src="./static/logo.svg"
                        width={110}
                        height={32}
                        alt="Tabler"
                        className="navbar-brand-image"
                      />
                    </a>
                  </h1>
                  <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex">
                      <a
                        href="?theme=dark"
                        className="nav-link px-0 hide-theme-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable dark mode"
                        data-bs-original-title="Enable dark mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                      </a>
                      <a
                        href="?theme=light"
                        className="nav-link px-0 hide-theme-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable light mode"
                        data-bs-original-title="Enable light mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                      </a>
                      <div className="nav-item dropdown d-none d-md-flex me-3">
                        <a
                          href="#"
                          className="nav-link px-0"
                          data-bs-toggle="dropdown"
                          tabIndex={-1}
                          aria-label="Show notifications"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                          <span className="badge bg-red" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 1
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 2
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions show">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-yellow"
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
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 3
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Update change-version.js (#29736)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 4
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Regenerate package-lock.json (#29730)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex lh-1 text-reset p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                      >
                        <span
                          className="avatar avatar-sm"
                          style={{
                            backgroundImage: "url(./static/avatars/002m.jpg)",
                          }}
                        />
                        <div className="d-none d-xl-block ps-2">
                          <div>Mallory Hulme</div>
                          <div className="mt-1 small text-secondary">Geologist IV</div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <a href="#" className="dropdown-item">
                          Status
                        </a>
                        <a href="./profile.html" className="dropdown-item">
                          Profile
                        </a>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <div className="dropdown-divider" />
                        <a href="./settings.html" className="dropdown-item">
                          Settings
                        </a>
                        <a href="./sign-in.html" className="dropdown-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="collapse navbar-collapse" id="navbar-menu">
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="./#">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">First</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./#">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">Second</span>
                            <span className="badge badge-sm bg-red">2</span>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#navbar-third"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">Third</span>
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="./#">
                              First
                            </a>
                            <a className="dropdown-item" href="./#">
                              Second
                            </a>
                            <a className="dropdown-item" href="./#">
                              Third
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="./#">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">Disabled</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="mb-3">
              <header className="navbar navbar-expand-md d-print-none">
                <div className="container-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">
                      <img
                        src="./static/logo.svg"
                        width={110}
                        height={32}
                        alt="Tabler"
                        className="navbar-brand-image"
                      />
                    </a>
                  </h1>
                  <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex">
                      <a
                        href="?theme=dark"
                        className="nav-link px-0 hide-theme-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable dark mode"
                        data-bs-original-title="Enable dark mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                      </a>
                      <a
                        href="?theme=light"
                        className="nav-link px-0 hide-theme-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable light mode"
                        data-bs-original-title="Enable light mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                      </a>
                      <div className="nav-item dropdown d-none d-md-flex me-3">
                        <a
                          href="#"
                          className="nav-link px-0"
                          data-bs-toggle="dropdown"
                          tabIndex={-1}
                          aria-label="Show notifications"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                          <span className="badge bg-red" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 1
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 2
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions show">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-yellow"
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
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 3
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Update change-version.js (#29736)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 4
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Regenerate package-lock.json (#29730)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex lh-1 text-reset p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                      >
                        <span
                          className="avatar avatar-sm"
                          style={{
                            backgroundImage: "url(./static/avatars/003m.jpg)",
                          }}
                        />
                        <div className="d-none d-xl-block ps-2">
                          <div>Dunn Slane</div>
                          <div className="mt-1 small text-secondary">Research Nurse</div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <a href="#" className="dropdown-item">
                          Status
                        </a>
                        <a href="./profile.html" className="dropdown-item">
                          Profile
                        </a>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <div className="dropdown-divider" />
                        <a href="./settings.html" className="dropdown-item">
                          Settings
                        </a>
                        <a href="./sign-in.html" className="dropdown-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="collapse navbar-collapse" id="navbar-menu">
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="./#">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">First</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./#">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">Second</span>
                            <span className="badge badge-sm bg-red">2</span>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#navbar-third"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">Third</span>
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="./#">
                              First
                            </a>
                            <a className="dropdown-item" href="./#">
                              Second
                            </a>
                            <a className="dropdown-item" href="./#">
                              Third
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="./#">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                            </span>
                            <span className="nav-link-title">Disabled</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="mb-3">
              <header className="navbar navbar-expand-md d-print-none" data-bs-theme="dark">
                <div className="container-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">Dashboard</a>
                  </h1>
                  <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex">
                      <a
                        href="?theme=dark"
                        className="nav-link px-0 hide-theme-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable dark mode"
                        data-bs-original-title="Enable dark mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                      </a>
                      <a
                        href="?theme=light"
                        className="nav-link px-0 hide-theme-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable light mode"
                        data-bs-original-title="Enable light mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                      </a>
                      <div className="nav-item dropdown d-none d-md-flex me-3">
                        <a
                          href="#"
                          className="nav-link px-0"
                          data-bs-toggle="dropdown"
                          tabIndex={-1}
                          aria-label="Show notifications"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                          <span className="badge bg-red" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 1
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 2
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions show">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-yellow"
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
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 3
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Update change-version.js (#29736)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 4
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Regenerate package-lock.json (#29730)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex lh-1 text-reset p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                      >
                        <span
                          className="avatar avatar-sm"
                          style={{
                            backgroundImage: "url(./static/avatars/000f.jpg)",
                          }}
                        />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" data-bs-theme="light">
                        <a href="#" className="dropdown-item">
                          Status
                        </a>
                        <a href="./profile.html" className="dropdown-item">
                          Profile
                        </a>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <div className="dropdown-divider" />
                        <a href="./settings.html" className="dropdown-item">
                          Settings
                        </a>
                        <a href="./sign-in.html" className="dropdown-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="collapse navbar-collapse" id="navbar-menu">
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="./#">
                            <span className="nav-link-title">First</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./#">
                            <span className="nav-link-title">Second</span>
                            <span className="badge badge-sm bg-red">2</span>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#navbar-third"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            <span className="nav-link-title">Third</span>
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="./#">
                              First
                            </a>
                            <a className="dropdown-item" href="./#">
                              Second
                            </a>
                            <a className="dropdown-item" href="./#">
                              Third
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="./#">
                            <span className="nav-link-title">Disabled</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="mb-3">
              <header
                className="navbar navbar-expand-md d-print-none"
                style={{ background: "#7952b3" }}
                data-bs-theme="dark"
              >
                <div className="container-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">
                      <img
                        src="./static/logo-small.svg"
                        width={32}
                        height={32}
                        alt="Tabler"
                        className="navbar-brand-image"
                      />
                    </a>
                  </h1>
                  <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex">
                      <a
                        href="?theme=dark"
                        className="nav-link px-0 hide-theme-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable dark mode"
                        data-bs-original-title="Enable dark mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                      </a>
                      <a
                        href="?theme=light"
                        className="nav-link px-0 hide-theme-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable light mode"
                        data-bs-original-title="Enable light mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                      </a>
                      <div className="nav-item dropdown d-none d-md-flex me-3">
                        <a
                          href="#"
                          className="nav-link px-0"
                          data-bs-toggle="dropdown"
                          tabIndex={-1}
                          aria-label="Show notifications"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                          <span className="badge bg-red" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 1
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 2
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions show">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-yellow"
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
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 3
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Update change-version.js (#29736)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 4
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Regenerate package-lock.json (#29730)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex lh-1 text-reset p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                      >
                        <span
                          className="avatar avatar-sm"
                          style={{
                            backgroundImage: "url(./static/avatars/001f.jpg)",
                          }}
                        />
                        <div className="d-none d-xl-block ps-2">
                          <div>Maryjo Lebarree</div>
                          <div className="mt-1 small text-secondary">Civil Engineer</div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" data-bs-theme="light">
                        <a href="#" className="dropdown-item">
                          Status
                        </a>
                        <a href="./profile.html" className="dropdown-item">
                          Profile
                        </a>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <div className="dropdown-divider" />
                        <a href="./settings.html" className="dropdown-item">
                          Settings
                        </a>
                        <a href="./sign-in.html" className="dropdown-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" href="./#">
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          </span>
                          <span className="nav-link-title">First</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="./#">
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          </span>
                          <span className="nav-link-title">Second</span>
                          <span className="badge badge-sm bg-red">2</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#navbar-third"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          role="button"
                          aria-expanded="false"
                        >
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          </span>
                          <span className="nav-link-title">Third</span>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="./#">
                            First
                          </a>
                          <a className="dropdown-item" href="./#">
                            Second
                          </a>
                          <a className="dropdown-item" href="./#">
                            Third
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="./#">
                          <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          </span>
                          <span className="nav-link-title">Disabled</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
            </div>
            <div className="mb-3">
              <header className="navbar navbar-expand-md bg-primary d-print-none" data-bs-theme="dark">
                <div className="container-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex">
                      <a
                        href="?theme=dark"
                        className="nav-link px-0 hide-theme-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable dark mode"
                        data-bs-original-title="Enable dark mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                      </a>
                      <a
                        href="?theme=light"
                        className="nav-link px-0 hide-theme-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable light mode"
                        data-bs-original-title="Enable light mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                      </a>
                      <div className="nav-item dropdown d-none d-md-flex me-3">
                        <a
                          href="#"
                          className="nav-link px-0"
                          data-bs-toggle="dropdown"
                          tabIndex={-1}
                          aria-label="Show notifications"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                          <span className="badge bg-red" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 1
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 2
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions show">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-yellow"
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
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 3
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Update change-version.js (#29736)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 4
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Regenerate package-lock.json (#29730)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex lh-1 text-reset p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                      >
                        <span className="avatar avatar-sm">EP</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" data-bs-theme="light">
                        <a href="#" className="dropdown-item">
                          Status
                        </a>
                        <a href="./profile.html" className="dropdown-item">
                          Profile
                        </a>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <div className="dropdown-divider" />
                        <a href="./settings.html" className="dropdown-item">
                          Settings
                        </a>
                        <a href="./sign-in.html" className="dropdown-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="collapse navbar-collapse" id="navbar-menu">
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" href="./#">
                            <span className="nav-link-title">First</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./#">
                            <span className="nav-link-title">Second</span>
                            <span className="badge badge-sm bg-red">2</span>
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#navbar-third"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                          >
                            <span className="nav-link-title">Third</span>
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="./#">
                              First
                            </a>
                            <a className="dropdown-item" href="./#">
                              Second
                            </a>
                            <a className="dropdown-item" href="./#">
                              Third
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="./#">
                            <span className="nav-link-title">Disabled</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="mb-3">
              <header className="navbar navbar-expand-md d-print-none">
                <div className="container-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">
                      <img
                        src="./static/logo-small.svg"
                        width={32}
                        height={32}
                        alt="Tabler"
                        className="navbar-brand-image me-3"
                      />
                      Dashboard
                    </a>
                  </h1>
                  <div className="navbar-nav flex-row order-md-last">
                    <div className="nav-item d-none d-md-flex me-3">
                      <div className="btn-list">
                        <a href="https://github.com/tabler/tabler" className="btn" target="_blank" rel="noreferrer">
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
                          Source code
                        </a>
                        <a href="https://github.com/sponsors/codecalm" className="btn" target="_blank" rel="noreferrer">
                          {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon text-pink"
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
                      </div>
                    </div>
                    <div className="d-none d-md-flex">
                      <a
                        href="?theme=dark"
                        className="nav-link px-0 hide-theme-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable dark mode"
                        data-bs-original-title="Enable dark mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                      </a>
                      <a
                        href="?theme=light"
                        className="nav-link px-0 hide-theme-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable light mode"
                        data-bs-original-title="Enable light mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                      </a>
                      <div className="nav-item dropdown d-none d-md-flex me-3">
                        <a
                          href="#"
                          className="nav-link px-0"
                          data-bs-toggle="dropdown"
                          tabIndex={-1}
                          aria-label="Show notifications"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                          <span className="badge bg-red" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 1
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 2
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions show">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-yellow"
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
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 3
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Update change-version.js (#29736)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 4
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Regenerate package-lock.json (#29730)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex lh-1 text-reset p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                      >
                        <span
                          className="avatar avatar-sm"
                          style={{
                            backgroundImage: "url(./static/avatars/002f.jpg)",
                          }}
                        />
                        <div className="d-none d-xl-block ps-2">
                          <div>Kellie Skingley</div>
                          <div className="mt-1 small text-secondary">Teacher</div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <a href="#" className="dropdown-item">
                          Status
                        </a>
                        <a href="./profile.html" className="dropdown-item">
                          Profile
                        </a>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <div className="dropdown-divider" />
                        <a href="./settings.html" className="dropdown-item">
                          Settings
                        </a>
                        <a href="./sign-in.html" className="dropdown-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <header className="navbar-expand-md">
                <div className="collapse navbar-collapse" id="navbar-menu">
                  <div className="navbar">
                    <div className="container-xl">
                      <div className="row flex-fill align-items-center">
                        <div className="col">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a className="nav-link active" href="./#">
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">First</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="./#">
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">Second</span>
                                <span className="badge badge-sm bg-red">2</span>
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#navbar-third"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                role="button"
                                aria-expanded="false"
                              >
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">Third</span>
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="./#">
                                  First
                                </a>
                                <a className="dropdown-item" href="./#">
                                  Second
                                </a>
                                <a className="dropdown-item" href="./#">
                                  Third
                                </a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href="./#">
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">Disabled</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-2 d-none d-xxl-block">
                          <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <form action="./" method="get" autoComplete="off" noValidate={true}>
                              <div className="input-icon">
                                <span className="input-icon-addon">
                                  {/* Download SVG icon from http://tabler-icons.io/i/search */}
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
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                  </svg>
                                </span>
                                <input
                                  type="text"
                                  defaultValue=""
                                  className="form-control"
                                  placeholder="Search…"
                                  aria-label="Search in website"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className="mb-3">
              <header className="navbar navbar-expand-md d-print-none" data-bs-theme="dark">
                <div className="container-xl">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">
                      <img
                        src="./static/logo.svg"
                        width={110}
                        height={32}
                        alt="Tabler"
                        className="navbar-brand-image"
                      />
                    </a>
                  </h1>
                  <div className="navbar-nav flex-row order-md-last">
                    <div className="nav-item d-none d-md-flex me-3">
                      <div className="btn-list">
                        <a href="https://github.com/tabler/tabler" className="btn" target="_blank" rel="noreferrer">
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
                          Source code
                        </a>
                        <a href="https://github.com/sponsors/codecalm" className="btn" target="_blank" rel="noreferrer">
                          {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon text-pink"
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
                      </div>
                    </div>
                    <div className="d-none d-md-flex">
                      <a
                        href="?theme=dark"
                        className="nav-link px-0 hide-theme-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable dark mode"
                        data-bs-original-title="Enable dark mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/moon */}
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
                          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                      </a>
                      <a
                        href="?theme=light"
                        className="nav-link px-0 hide-theme-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        aria-label="Enable light mode"
                        data-bs-original-title="Enable light mode"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/sun */}
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
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                        </svg>
                      </a>
                      <div className="nav-item dropdown d-none d-md-flex me-3">
                        <a
                          href="#"
                          className="nav-link px-0"
                          data-bs-toggle="dropdown"
                          tabIndex={-1}
                          aria-label="Show notifications"
                        >
                          {/* Download SVG icon from http://tabler-icons.io/i/bell */}
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
                            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          </svg>
                          <span className="badge bg-red" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">Last updates</h3>
                            </div>
                            <div className="list-group list-group-flush list-group-hoverable">
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 1
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Change deprecated html tags to text decoration classes (#29604)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 2
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      justify-content:between ⇒ justify-content:space-between (#29734)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions show">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-yellow"
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
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 3
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Update change-version.js (#29736)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="list-group-item">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                  </div>
                                  <div className="col text-truncate">
                                    <a href="#" className="text-body d-block">
                                      Example 4
                                    </a>
                                    <div className="d-block text-secondary text-truncate mt-n1">
                                      Regenerate package-lock.json (#29730)
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <a href="#" className="list-group-item-actions">
                                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
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
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link d-flex lh-1 text-reset p-0"
                        data-bs-toggle="dropdown"
                        aria-label="Open user menu"
                      >
                        <span
                          className="avatar avatar-sm"
                          style={{
                            backgroundImage: "url(./static/avatars/003f.jpg)",
                          }}
                        />
                        <div className="d-none d-xl-block ps-2">
                          <div>Christabel Charlwood</div>
                          <div className="mt-1 small text-secondary">Tax Accountant</div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow" data-bs-theme="light">
                        <a href="#" className="dropdown-item">
                          Status
                        </a>
                        <a href="./profile.html" className="dropdown-item">
                          Profile
                        </a>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <div className="dropdown-divider" />
                        <a href="./settings.html" className="dropdown-item">
                          Settings
                        </a>
                        <a href="./sign-in.html" className="dropdown-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <header className="navbar-expand-md">
                <div className="collapse navbar-collapse" id="navbar-menu">
                  <div className="navbar">
                    <div className="container-xl">
                      <div className="row flex-fill align-items-center">
                        <div className="col">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a className="nav-link active" href="./#">
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">First</span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="./#">
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">Second</span>
                                <span className="badge badge-sm bg-red">2</span>
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#navbar-third"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                role="button"
                                aria-expanded="false"
                              >
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">Third</span>
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="./#">
                                  First
                                </a>
                                <a className="dropdown-item" href="./#">
                                  Second
                                </a>
                                <a className="dropdown-item" href="./#">
                                  Third
                                </a>
                              </div>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link disabled" href="./#">
                                <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                                </span>
                                <span className="nav-link-title">Disabled</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-2 d-none d-xxl-block">
                          <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                            <form action="./" method="get" autoComplete="off" noValidate={true}>
                              <div className="input-icon">
                                <span className="input-icon-addon">
                                  {/* Download SVG icon from http://tabler-icons.io/i/search */}
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
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                  </svg>
                                </span>
                                <input
                                  type="text"
                                  defaultValue=""
                                  className="form-control"
                                  placeholder="Search…"
                                  aria-label="Search in website"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
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
export default Navigation;
