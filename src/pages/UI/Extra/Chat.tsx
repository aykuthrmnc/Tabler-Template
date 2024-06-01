const Chat = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Chat</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="row g-0">
              <div className="col-12 col-lg-5 col-xl-3 border-end">
                <div className="card-header d-none d-md-block">
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      {" "}
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
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div className="card-body p-0 scrollable" style={{ maxHeight: "35rem" }}>
                  <div className="nav flex-column nav-pills" role="tablist">
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3 active"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="true"
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/000m.jpg)",
                            }}
                          />
                        </div>
                        <div className="col text-body">
                          <div>Paweł Kuna</div>
                          <div className="text-secondary text-truncate w-100">
                            Sure Paweł, let me pull the latest updates.
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span className="avatar">JL</span>
                        </div>
                        <div className="col text-body">
                          <div>Jeffie Lewzey</div>
                          <div className="text-secondary text-truncate w-100">I'm on it too 👊</div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/002m.jpg)",
                            }}
                          />
                        </div>
                        <div className="col text-body">
                          <div>Mallory Hulme</div>
                          <div className="text-secondary text-truncate w-100">
                            I see you've refactored the <code>calculateStatistics</code> function. The code is much
                            cleaner now.
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/003m.jpg)",
                            }}
                          />
                        </div>
                        <div className="col text-body">
                          <div>Dunn Slane</div>
                          <div className="text-secondary text-truncate w-100">
                            Yes, I thought it was getting a bit cluttered.
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/000f.jpg)",
                            }}
                          />
                        </div>
                        <div className="col text-body">
                          <div>Emmy Levet</div>
                          <div className="text-secondary text-truncate w-100">
                            The commit message is descriptive, too. Good job on mentioning the issue number it fixes.
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/001f.jpg)",
                            }}
                          />
                        </div>
                        <div className="col text-body">
                          <div>Maryjo Lebarree</div>
                          <div className="text-secondary text-truncate w-100">
                            I noticed you added some new dependencies in the <code>package.json</code>. Did you also
                            update the <code>README</code> with the setup instructions?
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span className="avatar">EP</span>
                        </div>
                        <div className="col text-body">
                          <div>Egan Poetz</div>
                          <div className="text-secondary text-truncate w-100">
                            Oops, I forgot. I'll add that right away.
                          </div>
                        </div>
                        <div className="col-auto">🌴</div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/002f.jpg)",
                            }}
                          />
                        </div>
                        <div className="col text-body">
                          <div>Kellie Skingley</div>
                          <div className="text-secondary text-truncate w-100">
                            I see a couple of edge cases we might not be handling in the <code>calculateStatistic</code>{" "}
                            function. Should I open an issue for that?
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span
                            className="avatar"
                            style={{
                              backgroundImage: "url(./static/avatars/003f.jpg)",
                            }}
                          />
                        </div>
                        <div className="col text-body">
                          <div>Christabel Charlwood</div>
                          <div className="text-secondary text-truncate w-100">
                            Yes, Bob. Please do. We should not forget to handle those.
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="#chat-1"
                      className="nav-link text-start mw-100 p-3"
                      id="chat-1-tab"
                      data-bs-toggle="pill"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="row align-items-center flex-fill">
                        <div className="col-auto">
                          <span className="avatar">HS</span>
                        </div>
                        <div className="col text-body">
                          <div>Haskel Shelper</div>
                          <div className="text-secondary text-truncate w-100">
                            Alright, once the <code>README</code> is updated, I'll merge this commit into the main
                            branch. Nice work, Paweł.
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column">
                <div className="card-body scrollable" style={{ height: "35rem" }}>
                  <div className="chat">
                    <div className="chat-bubbles">
                      <div className="chat-item">
                        <div className="row align-items-end justify-content-end">
                          <div className="col col-lg-6">
                            <div className="chat-bubble chat-bubble-me">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Paweł Kuna</div>
                                  <div className="col-auto chat-bubble-date">09:32</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>
                                  Hey guys, I just pushed a new commit on the <code>dev</code> branch. Can you have a
                                  look and tell me what you think?
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000m.jpg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/002m.jpg)",
                              }}
                            />
                          </div>
                          <div className="col col-lg-6">
                            <div className="chat-bubble">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Mallory Hulme</div>
                                  <div className="col-auto chat-bubble-date">09:34</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>Sure Paweł, let me pull the latest updates.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/003m.jpg)",
                              }}
                            />
                          </div>
                          <div className="col col-lg-6">
                            <div className="chat-bubble">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Dunn Slane</div>
                                  <div className="col-auto chat-bubble-date">09:34</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>I'm on it too 👊</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/002m.jpg)",
                              }}
                            />
                          </div>
                          <div className="col col-lg-6">
                            <div className="chat-bubble">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Mallory Hulme</div>
                                  <div className="col-auto chat-bubble-date">09:40</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>
                                  I see you've refactored the <code>calculateStatistics</code> function. The code is
                                  much cleaner now.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end justify-content-end">
                          <div className="col col-lg-6">
                            <div className="chat-bubble chat-bubble-me">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Paweł Kuna</div>
                                  <div className="col-auto chat-bubble-date">09:42</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>Yes, I thought it was getting a bit cluttered.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000m.jpg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000f.jpg)",
                              }}
                            />
                          </div>
                          <div className="col col-lg-6">
                            <div className="chat-bubble">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Emmy Levet</div>
                                  <div className="col-auto chat-bubble-date">09:43</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>
                                  The commit message is descriptive, too. Good job on mentioning the issue number it
                                  fixes.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/003m.jpg)",
                              }}
                            />
                          </div>
                          <div className="col col-lg-6">
                            <div className="chat-bubble">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Dunn Slane</div>
                                  <div className="col-auto chat-bubble-date">09:44</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>
                                  I noticed you added some new dependencies in the <code>package.json</code>. Did you
                                  also update the <code>README</code> with the setup instructions?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end justify-content-end">
                          <div className="col col-lg-6">
                            <div className="chat-bubble chat-bubble-me">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Paweł Kuna</div>
                                  <div className="col-auto chat-bubble-date">09:45</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>Oops, I forgot. I'll add that right away.</p>
                                <div className="mt-2">
                                  <img
                                    src="https://media3.giphy.com/media/VABbCpX94WCfS/giphy.gif"
                                    alt=""
                                    className="rounded img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000m.jpg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/002m.jpg)",
                              }}
                            />
                          </div>
                          <div className="col col-lg-6">
                            <div className="chat-bubble">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Mallory Hulme</div>
                                  <div className="col-auto chat-bubble-date">09:46</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>
                                  I see a couple of edge cases we might not be handling in the{" "}
                                  <code>calculateStatistic</code> function. Should I open an issue for that?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end justify-content-end">
                          <div className="col col-lg-6">
                            <div className="chat-bubble chat-bubble-me">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Paweł Kuna</div>
                                  <div className="col-auto chat-bubble-date">09:47</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>Yes, Bob. Please do. We should not forget to handle those.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000m.jpg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000f.jpg)",
                              }}
                            />
                          </div>
                          <div className="col col-lg-6">
                            <div className="chat-bubble">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Emmy Levet</div>
                                  <div className="col-auto chat-bubble-date">09:50</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>
                                  Alright, once the <code>README</code> is updated, I'll merge this commit into the main
                                  branch. Nice work, Paweł.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end justify-content-end">
                          <div className="col col-lg-6">
                            <div className="chat-bubble chat-bubble-me">
                              <div className="chat-bubble-title">
                                <div className="row">
                                  <div className="col chat-bubble-author">Paweł Kuna</div>
                                  <div className="col-auto chat-bubble-date">09:52</div>
                                </div>
                              </div>
                              <div className="chat-bubble-body">
                                <p>
                                  Thanks, <a href="#">@everyone</a>! 🙌
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000m.jpg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="chat-item">
                        <div className="row align-items-end">
                          <div className="col-auto">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage: "url(./static/avatars/000f.jpg)",
                              }}
                            />
                          </div>
                          <div className="col-auto">
                            <div className="chat-bubble">
                              <div className="chat-bubble-body">
                                <p className="text-secondary text-italic">
                                  typing
                                  <span className="animated-dots" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="input-group input-group-flat">
                    <input type="text" className="form-control" autoComplete="off" placeholder="Type message" />
                    <span className="input-group-text">
                      <a
                        href="#"
                        className="link-secondary"
                        data-bs-toggle="tooltip"
                        aria-label="Clear search"
                        data-bs-original-title="Clear search"
                      >
                        {" "}
                        {/* Download SVG icon from http://tabler-icons.io/i/mood-smile */}
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
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 10l.01 0" />
                          <path d="M15 10l.01 0" />
                          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="link-secondary ms-2"
                        data-bs-toggle="tooltip"
                        aria-label="Add notification"
                        data-bs-original-title="Add notification"
                      >
                        {" "}
                        {/* Download SVG icon from http://tabler-icons.io/i/paperclip */}
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
                          <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                        </svg>
                      </a>
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
export default Chat;
