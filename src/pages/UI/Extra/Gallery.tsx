const Gallery = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Gallery</h2>
              <div className="text-secondary mt-1">1-12 of 241 photos</div>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
              <div className="d-flex">
                <div className="me-3">
                  <div className="input-icon">
                    <input type="text" defaultValue="" className="form-control" placeholder="Search…" />
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
                  </div>
                </div>
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
                  Add event
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
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/beautiful-blonde-woman-relaxing-with-a-can-of-coke-on-a-tree-stump-by-the-beach.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
                    />
                    <div>
                      <div>Paweł Kuna</div>
                      <div className="text-secondary">3 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        467
                      </a>
                      <a href="#" className="ms-3 text-secondary">
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
                        67
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/brainstorming-session-with-creative-designers.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="avatar me-3 rounded">JL</span>
                    <div>
                      <div>Jeffie Lewzey</div>
                      <div className="text-secondary">5 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        335
                      </a>
                      <a href="#" className="ms-3 text-secondary">
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
                        80
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/finances-us-dollars-and-bitcoins-currency-money.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/002m.jpg)" }}
                    />
                    <div>
                      <div>Mallory Hulme</div>
                      <div className="text-secondary">yesterday</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        369
                      </a>
                      <a href="#" className="ms-3 text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-filled text-red"
                          width={24}
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
                        32
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/group-of-people-brainstorming-and-taking-notes-2.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/003m.jpg)" }}
                    />
                    <div>
                      <div>Dunn Slane</div>
                      <div className="text-secondary">1 week and 3 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        479
                      </a>
                      <a href="#" className="ms-3 text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-filled text-red"
                          width={24}
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
                        71
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/blue-sofa-with-pillows-in-a-designer-living-room-interior.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/000f.jpg)" }}
                    />
                    <div>
                      <div>Emmy Levet</div>
                      <div className="text-secondary">5 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        481
                      </a>
                      <a href="#" className="ms-3 text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-filled text-red"
                          width={24}
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
                        57
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/home-office-desk-with-macbook-iphone-calendar-watch-and-organizer.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/001f.jpg)" }}
                    />
                    <div>
                      <div>Maryjo Lebarree</div>
                      <div className="text-secondary">3 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        405
                      </a>
                      <a href="#" className="ms-3 text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-filled text-red"
                          width={24}
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
                        23
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img src="./static/photos/young-woman-working-in-a-cafe.jpg" className="card-img-top" />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="avatar me-3 rounded">EP</span>
                    <div>
                      <div>Egan Poetz</div>
                      <div className="text-secondary">6 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        332
                      </a>
                      <a href="#" className="ms-3 text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-filled text-red"
                          width={24}
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
                        51
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img src="./static/photos/everything-you-need-to-work-from-your-bed.jpg" className="card-img-top" />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/002f.jpg)" }}
                    />
                    <div>
                      <div>Kellie Skingley</div>
                      <div className="text-secondary">1 week and 2 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        369
                      </a>
                      <a href="#" className="ms-3 text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-filled text-red"
                          width={24}
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
                        70
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/young-entrepreneur-working-from-a-modern-cafe.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/003f.jpg)" }}
                    />
                    <div>
                      <div>Christabel Charlwood</div>
                      <div className="text-secondary">today</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        555
                      </a>
                      <a href="#" className="ms-3 text-secondary">
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
                        73
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img
                    src="./static/photos/finances-us-dollars-and-bitcoins-currency-money-2.jpg"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="avatar me-3 rounded">HS</span>
                    <div>
                      <div>Haskel Shelper</div>
                      <div className="text-secondary">2 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        383
                      </a>
                      <a href="#" className="ms-3 text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-filled text-red"
                          width={24}
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
                        37
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img src="./static/photos/group-of-people-sightseeing-in-the-city.jpg" className="card-img-top" />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/006m.jpg)" }}
                    />
                    <div>
                      <div>Lorry Mion</div>
                      <div className="text-secondary">5 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        424
                      </a>
                      <a href="#" className="ms-3 text-secondary">
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
                        45
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card card-sm">
                <a href="#" className="d-block">
                  <img src="./static/photos/color-palette-guide-sample-colors-catalog-.jpg" className="card-img-top" />
                </a>
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span
                      className="avatar me-3 rounded"
                      style={{ backgroundImage: "url(./static/avatars/004f.jpg)" }}
                    />
                    <div>
                      <div>Leesa Beaty</div>
                      <div className="text-secondary">6 days ago</div>
                    </div>
                    <div className="ms-auto">
                      <a href="#" className="text-secondary">
                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>
                        496
                      </a>
                      <a href="#" className="ms-3 text-secondary">
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
                        64
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
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
export default Gallery;
