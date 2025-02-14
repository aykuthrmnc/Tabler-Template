const Users = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Users</h2>
              <div className="text-secondary mt-1">1-18 of 413 people</div>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
              <div className="d-flex">
                <input type="search" className="form-control d-inline-block w-9 me-3" placeholder="Search user…" />
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
                  New user
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Paweł Kuna</a>
                  </h3>
                  <div className="text-secondary">UI Designer</div>
                  <div className="mt-3">
                    <span className="badge bg-purple-lt">Owner</span>
                  </div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span className="avatar avatar-xl mb-3 rounded">JL</span>
                  <h3 className="m-0 mb-1">
                    <a href="#">Jeffie Lewzey</a>
                  </h3>
                  <div className="text-secondary">Chemical Engineer</div>
                  <div className="mt-3">
                    <span className="badge bg-green-lt">Admin</span>
                  </div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/002m.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Mallory Hulme</a>
                  </h3>
                  <div className="text-secondary">Geologist IV</div>
                  <div className="mt-3">
                    <span className="badge bg-green-lt">Admin</span>
                  </div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Dunn Slane</a>
                  </h3>
                  <div className="text-secondary">Research Nurse</div>
                  <div className="mt-3">
                    <span className="badge bg-green-lt">Admin</span>
                  </div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/000f.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Emmy Levet</a>
                  </h3>
                  <div className="text-secondary">VP Product Management</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/001f.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Maryjo Lebarree</a>
                  </h3>
                  <div className="text-secondary">Civil Engineer</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span className="avatar avatar-xl mb-3 rounded">EP</span>
                  <h3 className="m-0 mb-1">
                    <a href="#">Egan Poetz</a>
                  </h3>
                  <div className="text-secondary">Research Nurse</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/002f.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Kellie Skingley</a>
                  </h3>
                  <div className="text-secondary">Teacher</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/003f.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Christabel Charlwood</a>
                  </h3>
                  <div className="text-secondary">Tax Accountant</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span className="avatar avatar-xl mb-3 rounded">HS</span>
                  <h3 className="m-0 mb-1">
                    <a href="#">Haskel Shelper</a>
                  </h3>
                  <div className="text-secondary">Staff Scientist</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/006m.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Lorry Mion</a>
                  </h3>
                  <div className="text-secondary">Automation Specialist IV</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/004f.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Leesa Beaty</a>
                  </h3>
                  <div className="text-secondary">Editor</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/007m.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Perren Keemar</a>
                  </h3>
                  <div className="text-secondary">Analog Circuit Design manager</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span className="avatar avatar-xl mb-3 rounded">SA</span>
                  <h3 className="m-0 mb-1">
                    <a href="#">Sunny Airey</a>
                  </h3>
                  <div className="text-secondary">Nuclear Power Engineer</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/009m.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Geoffry Flaunders</a>
                  </h3>
                  <div className="text-secondary">Software Test Engineer II</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/010m.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Thatcher Keel</a>
                  </h3>
                  <div className="text-secondary">VP Sales</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/005f.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Dyann Escala</a>
                  </h3>
                  <div className="text-secondary">Mechanical Systems Engineer</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body p-4 text-center">
                  <span
                    className="avatar avatar-xl mb-3 rounded"
                    style={{ backgroundImage: "url(./static/avatars/006f.jpg)" }}
                  />
                  <h3 className="m-0 mb-1">
                    <a href="#">Avivah Mugleston</a>
                  </h3>
                  <div className="text-secondary">Actuary</div>
                  <div className="mt-3"></div>
                </div>
                <div className="d-flex">
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/mail */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    Email
                  </a>
                  <a href="#" className="card-btn">
                    {/* Download SVG icon from http://tabler-icons.io/i/phone */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon me-2 text-muted"
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
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4">
            <ul className="pagination ms-auto">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
                  {/* Download SVG icon from http://tabler-icons.io/i/chevron-left */}
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
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                  prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  next {/* Download SVG icon from http://tabler-icons.io/i/chevron-right */}
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
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </a>
              </li>
            </ul>
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
export default Users;
