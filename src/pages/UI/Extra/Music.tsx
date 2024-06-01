const Music = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Music components</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="list-group card-list-group">
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">1</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/a4fb1d293bd8d3fd38352418c50fcf1369a7a87d.jpg"
                          className="rounded"
                          alt="Górą ty"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Górą ty
                        <div className="text-secondary">GOLEC UORKIESTRA, Gromee, Bedoes</div>
                      </div>
                      <div className="col-auto text-secondary">03:41</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">2</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/f04bb6fba32e89475d9981007aff21e13745dec2.jpg"
                          className="rounded"
                          alt="High Life"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        High Life
                        <div className="text-secondary">Daft Punk</div>
                      </div>
                      <div className="col-auto text-secondary">03:21</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">3</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/c3f13b4f7a674abda9aa36fd72fa341e918c0f26.jpg"
                          className="rounded"
                          alt="Houdini"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Houdini
                        <div className="text-secondary">Foster The People</div>
                      </div>
                      <div className="col-auto text-secondary">03:23</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">4</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/4d4ab714dfca7b9df41d4a02a2c39394ebdeb6b6.jpg"
                          className="rounded"
                          alt="Safe And Sound"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Safe And Sound
                        <div className="text-secondary">Capital Cities</div>
                      </div>
                      <div className="col-auto text-secondary">03:12</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">5</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/79b2422b467ad20c07576e8f8f5f2f1692ac7142.jpg"
                          className="rounded"
                          alt="Partied Out"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Partied Out
                        <div className="text-secondary">Con Bro Chill</div>
                      </div>
                      <div className="col-auto text-secondary">03:17</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">6</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/aac97056fc02fe02c7e95f7ff77a07c6e82f7d6e.jpg"
                          className="rounded"
                          alt="Runaway (U & I)"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Runaway (U &amp; I)
                        <div className="text-secondary">Galantis</div>
                      </div>
                      <div className="col-auto text-secondary">03:47</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">7</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/859337f0eaa49b1ad6ed76719b7c1ae26d6412c8.jpg"
                          className="rounded"
                          alt="Light It Up (feat. Nyla & Fuse ODG) - Remix"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Light It Up (feat. Nyla &amp; Fuse ODG) - Remix
                        <div className="text-secondary">Major Lazer, Nyla, Fuse ODG</div>
                      </div>
                      <div className="col-auto text-secondary">02:46</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">8</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/2e7357491deb8a6796ee8d9181ca9ea1f407bb5f.jpg"
                          className="rounded"
                          alt="Hangover"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Hangover
                        <div className="text-secondary">Taio Cruz, Flo Rida</div>
                      </div>
                      <div className="col-auto text-secondary">04:04</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">9</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/c976bfc96d5e44820e553a16a6097cd02a61fd2f.jpg"
                          className="rounded"
                          alt="Shape of You"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Shape of You
                        <div className="text-secondary">Ed Sheeran</div>
                      </div>
                      <div className="col-auto text-secondary">03:53</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">10</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/c9a8350feee77e9345eec4155cddc96694803d1a.jpg"
                          className="rounded"
                          alt="Alone"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Alone
                        <div className="text-secondary">Alan Walker</div>
                      </div>
                      <div className="col-auto text-secondary">02:41</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">11</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/fe4ee21d30450829e5b172e806b3c1e14ca1e5f3.jpg"
                          className="rounded"
                          alt="Langrennsfar"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Langrennsfar
                        <div className="text-secondary">Ylvis</div>
                      </div>
                      <div className="col-auto text-secondary">02:43</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row g-2 align-items-center">
                      <div className="col-auto fs-3">12</div>
                      <div className="col-auto">
                        <img
                          src="./static/tracks/f4e96086f44c4dff1758b1fc1338cd88c1b5ce9c.jpg"
                          className="rounded"
                          alt="Skibidi - Romantic Edition"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="col">
                        Skibidi - Romantic Edition
                        <div className="text-secondary">Little Big</div>
                      </div>
                      <div className="col-auto text-secondary">03:12</div>
                      <div className="col-auto">
                        <a href="#" className="link-secondary">
                          <button className="switch-icon" data-bs-toggle="switch-icon">
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
                        </a>
                      </div>
                      <div className="col-auto lh-1">
                        <div className="dropdown">
                          <a href="#" className="link-secondary" data-bs-toggle="dropdown">
                            {/* Download SVG icon from http://tabler-icons.io/i/dots */}
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
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h3 className="mb-3">Top tracks</h3>
              <div className="row row-cards">
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="row row-0">
                      <div className="col-auto">
                        <img
                          src="./static/tracks/c976bfc96d5e44820e553a16a6097cd02a61fd2f.jpg"
                          className="rounded-start"
                          alt="Shape of You"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="col">
                        <div className="card-body">
                          Shape of You
                          <div className="text-secondary">Ed Sheeran</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="row row-0">
                      <div className="col-auto">
                        <img
                          src="./static/tracks/c9a8350feee77e9345eec4155cddc96694803d1a.jpg"
                          className="rounded-start"
                          alt="Alone"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="col">
                        <div className="card-body">
                          Alone
                          <div className="text-secondary">Alan Walker</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="row row-0">
                      <div className="col-auto">
                        <img
                          src="./static/tracks/fe4ee21d30450829e5b172e806b3c1e14ca1e5f3.jpg"
                          className="rounded-start"
                          alt="Langrennsfar"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="col">
                        <div className="card-body">
                          Langrennsfar
                          <div className="text-secondary">Ylvis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="row row-0">
                      <div className="col-auto">
                        <img
                          src="./static/tracks/f4e96086f44c4dff1758b1fc1338cd88c1b5ce9c.jpg"
                          className="rounded-start"
                          alt="Skibidi - Romantic Edition"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="col">
                        <div className="card-body">
                          Skibidi - Romantic Edition
                          <div className="text-secondary">Little Big</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="row row-0">
                      <div className="col-auto">
                        <img
                          src="./static/tracks/73f4938130140174efb1cc0a82ececb277e40932.jpg"
                          className="rounded-start"
                          alt="Miracle"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="col">
                        <div className="card-body">
                          Miracle
                          <div className="text-secondary">Caravan Palace</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12">
                  <div className="card">
                    <div className="row row-0">
                      <div className="col-auto">
                        <img
                          src="./static/tracks/cfb2a532996512eff95c4b0d566d067384aaa441.jpg"
                          className="rounded-start"
                          alt="Different World (feat. CORSAK)"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="col">
                        <div className="card-body">
                          Different World (feat. CORSAK)
                          <div className="text-secondary">Alan Walker, K-391, Sofia Carson, CORSAK</div>
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
export default Music;
