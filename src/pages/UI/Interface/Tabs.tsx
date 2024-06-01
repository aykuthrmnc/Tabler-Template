const Tabs = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Tabs</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-1"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-1"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item ms-auto" role="presentation">
                      <a
                        href="#tabs-settings-1"
                        className="nav-link"
                        title="Settings"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/settings */}
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
                          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tabs-home-1" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-profile-1" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-settings-1" role="tabpanel">
                      <h4>Settings tab</h4>
                      <div>
                        Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris
                        accumsan nibh habitant senectus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs flex-row-reverse" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-2"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-2"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item me-auto" role="presentation">
                      <a
                        href="#tabs-settings-2"
                        className="nav-link"
                        title="Settings"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/settings */}
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
                          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tabs-home-2" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-profile-2" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-settings-2" role="tabpanel">
                      <h4>Settings tab</h4>
                      <div>
                        Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris
                        accumsan nibh habitant senectus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-3"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
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
                          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-3"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/user */}
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
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tabs-home-3" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-profile-3" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-4"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-4"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tabs-home-4" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-profile-4" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs nav-fill" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-5"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-5"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-activity-5"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Activity
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tabs-home-5" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-profile-5" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-activity-5" role="tabpanel">
                      <h4>Activity tab</h4>
                      <div>
                        Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris
                        accumsan nibh habitant senectus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs nav-fill" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-6"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-6"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-activity-6"
                        className="nav-link disabled"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tabs-home-6" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-profile-6" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs nav-fill" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-7"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
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
                          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-7"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/user */}
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
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        Profile
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-activity-7"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        {/* Download SVG icon from http://tabler-icons.io/i/activity */}
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
                          <path d="M3 12h4l3 8l4 -16l3 8h4" />
                        </svg>
                        Activity
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tabs-home-7" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-profile-7" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                    <div className="tab-pane" id="tabs-activity-7" role="tabpanel">
                      <h4>Activity tab</h4>
                      <div>
                        Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris
                        accumsan nibh habitant senectus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" data-bs-toggle="tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-home-8"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-selected="true"
                        role="tab"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-profile-8"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#tabs-activity-8"
                        className="nav-link"
                        data-bs-toggle="tab"
                        aria-selected="false"
                        tabIndex={-1}
                        role="tab"
                      >
                        Activity
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane fade active show" id="tabs-home-8" role="tabpanel">
                      <h4>Home tab</h4>
                      <div>
                        Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                        facilisis lacus pellentesque purus nibh
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs-profile-8" role="tabpanel">
                      <h4>Profile tab</h4>
                      <div>
                        Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                        pellentesque id egestas velit sed
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tabs-activity-8" role="tabpanel">
                      <h4>Activity tab</h4>
                      <div>
                        Donec ac vitae diam amet vel leo egestas consequat rhoncus in luctus amet, facilisi sit mauris
                        accumsan nibh habitant senectus
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
export default Tabs;
