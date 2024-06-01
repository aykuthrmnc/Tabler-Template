const Tags = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Tags</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Default tags</h3>
                  <div className="tags-list">
                    <span className="tag">
                      Label 1
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 2
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 3
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 4
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 5
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 6
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 7
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 8
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 9
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 10
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 11
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 12
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 13
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label 14
                      <a href="#" className="btn-close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Tags with flag</h3>
                  <div className="tags-list">
                    <span className="tag">
                      Andorra
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      United Arab Emirates
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Afghanistan
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Antigua
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Anguilla
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Armenia
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Angolan
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Antarctica
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Argentina
                      <a href="#" className="btn-close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Tags with icon</h3>
                  <div className="tags-list">
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/bold */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
                        <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />
                      </svg>
                      bold
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/italic */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11 5l6 0" />
                        <path d="M7 19l6 0" />
                        <path d="M14 5l-4 14" />
                      </svg>
                      italic
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/underline */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 5v5a5 5 0 0 0 10 0v-5" />
                        <path d="M5 19h14" />
                      </svg>
                      underline
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/copy */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                      copy
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/scissors */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M8.6 8.6l10.4 10.4" />
                        <path d="M8.6 15.4l10.4 -10.4" />
                      </svg>
                      scissors
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/file-plus */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M12 11l0 6" />
                        <path d="M9 14l6 0" />
                      </svg>
                      file-plus
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/file-minus */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <path d="M9 14l6 0" />
                      </svg>
                      file-minus
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/ghost */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                        <path d="M10 10l.01 0" />
                        <path d="M14 10l.01 0" />
                        <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                      </svg>
                      ghost
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/star */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
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
                      star
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/script */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 20h-11a3 3 0 0 1 0 -6h11a3 3 0 0 0 0 6h1a3 3 0 0 0 3 -3v-11a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" />
                      </svg>
                      script
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/photo */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 8h.01" />
                        <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                      </svg>
                      photo
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/dog */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11 5h2" />
                        <path d="M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8" />
                        <path d="M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2z" />
                        <path d="M12 18v2" />
                        <path d="M10 11v.01" />
                        <path d="M14 11v.01" />
                        <path d="M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815z" />
                        <path d="M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815z" />
                      </svg>
                      dog
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      {/* Download SVG icon from http://tabler-icons.io/i/piano */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon tag-icon icon-xxs"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M9 19v-6" />
                        <path d="M8 5v8h2v-8" />
                        <path d="M15 19v-6" />
                        <path d="M14 5v8h2v-8" />
                      </svg>
                      piano
                      <a href="#" className="btn-close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Tags with avatar</h3>
                  <div className="tags-list">
                    <span className="tag">
                      <span
                        className="avatar avatar-xxs tag-avatar"
                        style={{
                          backgroundImage: "url(./static/avatars/000m.jpg)",
                        }}
                      />
                      Paweł Kuna
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="avatar avatar-xxs tag-avatar">JL</span>
                      Jeffie Lewzey
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span
                        className="avatar avatar-xxs tag-avatar"
                        style={{
                          backgroundImage: "url(./static/avatars/002m.jpg)",
                        }}
                      />
                      Mallory Hulme
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span
                        className="avatar avatar-xxs tag-avatar"
                        style={{
                          backgroundImage: "url(./static/avatars/003m.jpg)",
                        }}
                      />
                      Dunn Slane
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span
                        className="avatar avatar-xxs tag-avatar"
                        style={{
                          backgroundImage: "url(./static/avatars/000f.jpg)",
                        }}
                      />
                      Emmy Levet
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span
                        className="avatar avatar-xxs tag-avatar"
                        style={{
                          backgroundImage: "url(./static/avatars/001f.jpg)",
                        }}
                      />
                      Maryjo Lebarree
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="avatar avatar-xxs tag-avatar">EP</span>
                      Egan Poetz
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span
                        className="avatar avatar-xxs tag-avatar"
                        style={{
                          backgroundImage: "url(./static/avatars/002f.jpg)",
                        }}
                      />
                      Kellie Skingley
                      <a href="#" className="btn-close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Tags with status</h3>
                  <div className="tags-list">
                    <span className="tag">
                      <span className="badge bg-blue text-blue-fg tag-status badge-empty"></span>
                      Blue
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-azure text-azure-fg tag-status badge-empty"></span>
                      Azure
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-indigo text-indigo-fg tag-status badge-empty"></span>
                      Indigo
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-purple text-purple-fg tag-status badge-empty"></span>
                      Purple
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-pink text-pink-fg tag-status badge-empty"></span>
                      Pink
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-red text-red-fg tag-status badge-empty"></span>
                      Red
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-orange text-orange-fg tag-status badge-empty"></span>
                      Orange
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-yellow text-yellow-fg tag-status badge-empty"></span>
                      Yellow
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-lime text-lime-fg tag-status badge-empty"></span>
                      Lime
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-green text-green-fg tag-status badge-empty"></span>
                      Green
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-teal text-teal-fg tag-status badge-empty"></span>
                      Teal
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="badge bg-cyan text-cyan-fg tag-status badge-empty"></span>
                      Cyan
                      <a href="#" className="btn-close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Tags with legend</h3>
                  <div className="tags-list">
                    <span className="tag">
                      <span className="legend bg-blue" />
                      Blue
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-azure" />
                      Azure
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-indigo" />
                      Indigo
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-purple" />
                      Purple
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-pink" />
                      Pink
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-red" />
                      Red
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-orange" />
                      Orange
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-yellow" />
                      Yellow
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-lime" />
                      Lime
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-green" />
                      Green
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-teal" />
                      Teal
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <span className="legend bg-cyan" />
                      Cyan
                      <a href="#" className="btn-close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Default tags</h3>
                  <div className="tags-list">
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" />
                      Label 1
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" />
                      Label 2
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" />
                      Label 3
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" />
                      Label 4
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" />
                      Label 5
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" />
                      Label 6
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" defaultChecked={true} />
                      Label 7
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" defaultChecked={true} />
                      Label 8
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" defaultChecked={true} />
                      Label 9
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" defaultChecked={true} />
                      Label 10
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" defaultChecked={true} />
                      Label 11
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      <input type="checkbox" className="form-check-input tag-check" defaultChecked={true} />
                      Label 12
                      <a href="#" className="btn-close" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Default tags</h3>
                  <div className="tags-list">
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">1</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">2</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">3</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">4</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">5</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">6</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">7</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">8</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">9</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">10</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">11</span>
                      <a href="#" className="btn-close" />
                    </span>
                    <span className="tag">
                      Label
                      <span className="badge badge-sm tag-badge">12</span>
                      <a href="#" className="btn-close" />
                    </span>
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
export default Tags;
