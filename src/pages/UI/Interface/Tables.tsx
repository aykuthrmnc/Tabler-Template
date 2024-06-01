const Tables = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Tables</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-lg-8">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-vcenter card-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th className="w-1" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Paweł Kuna</td>
                        <td className="text-secondary">UI Designer, Training</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            paweluna@howstuffworks.com
                          </a>
                        </td>
                        <td className="text-secondary">User</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Jeffie Lewzey</td>
                        <td className="text-secondary">Chemical Engineer, Support</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            jlewzey1@seesaa.net
                          </a>
                        </td>
                        <td className="text-secondary">Admin</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Mallory Hulme</td>
                        <td className="text-secondary">Geologist IV, Support</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            mhulme2@domainmarket.com
                          </a>
                        </td>
                        <td className="text-secondary">User</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Dunn Slane</td>
                        <td className="text-secondary">Research Nurse, Sales</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            dslane3@epa.gov
                          </a>
                        </td>
                        <td className="text-secondary">Owner</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Emmy Levet</td>
                        <td className="text-secondary">VP Product Management, Accounting</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            elevet4@senate.gov
                          </a>
                        </td>
                        <td className="text-secondary">Admin</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Maryjo Lebarree</td>
                        <td className="text-secondary">Civil Engineer, Product Management</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            mlebarree5@unc.edu
                          </a>
                        </td>
                        <td className="text-secondary">User</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Egan Poetz</td>
                        <td className="text-secondary">Research Nurse, Engineering</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            epoetz6@free.fr
                          </a>
                        </td>
                        <td className="text-secondary">Admin</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Kellie Skingley</td>
                        <td className="text-secondary">Teacher, Services</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            kskingley7@columbia.edu
                          </a>
                        </td>
                        <td className="text-secondary">Owner</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Top Pages</h3>
                  <table className="table table-sm table-borderless">
                    <thead>
                      <tr>
                        <th>Page</th>
                        <th className="text-end">Visitors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "82.54%" }}
                                role="progressbar"
                                aria-valuenow={82.54}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="82.54% Complete"
                              >
                                <span className="visually-hidden">82.54% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">4896</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "76.29%" }}
                                role="progressbar"
                                aria-valuenow={76.29}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="76.29% Complete"
                              >
                                <span className="visually-hidden">76.29% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/form-elements.html</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">3652</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "72.65%" }}
                                role="progressbar"
                                aria-valuenow={72.65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="72.65% Complete"
                              >
                                <span className="visually-hidden">72.65% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/index.html</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">3256</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "44.89%" }}
                                role="progressbar"
                                aria-valuenow={44.89}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="44.89% Complete"
                              >
                                <span className="visually-hidden">44.89% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/icons.html</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">986</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "41.12%" }}
                                role="progressbar"
                                aria-valuenow={41.12}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="41.12% Complete"
                              >
                                <span className="visually-hidden">41.12% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/docs/</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">912</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "32.65%" }}
                                role="progressbar"
                                aria-valuenow={32.65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="32.65% Complete"
                              >
                                <span className="visually-hidden">32.65% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/accordion.html</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">855</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "16.22%" }}
                                role="progressbar"
                                aria-valuenow={16.22}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="16.22% Complete"
                              >
                                <span className="visually-hidden">16.22% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/datagrid.html</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">764</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progressbg">
                            <div className="progress progressbg-progress">
                              <div
                                className="progress-bar bg-primary-lt"
                                style={{ width: "8.69%" }}
                                role="progressbar"
                                aria-valuenow={8.69}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="8.69% Complete"
                              >
                                <span className="visually-hidden">8.69% Complete</span>
                              </div>
                            </div>
                            <div className="progressbg-text">/datatables.html</div>
                          </div>
                        </td>
                        <td className="w-1 fw-bold text-end">686</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-vcenter card-table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th className="w-1" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Maryjo Lebarree</td>
                        <td className="text-secondary">Civil Engineer, Product Management</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            mlebarree5@unc.edu
                          </a>
                        </td>
                        <td className="text-secondary">User</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Egan Poetz</td>
                        <td className="text-secondary">Research Nurse, Engineering</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            epoetz6@free.fr
                          </a>
                        </td>
                        <td className="text-secondary">Admin</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Kellie Skingley</td>
                        <td className="text-secondary">Teacher, Services</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            kskingley7@columbia.edu
                          </a>
                        </td>
                        <td className="text-secondary">User</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Christabel Charlwood</td>
                        <td className="text-secondary">Tax Accountant, Engineering</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            ccharlwood8@nifty.com
                          </a>
                        </td>
                        <td className="text-secondary">Owner</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Haskel Shelper</td>
                        <td className="text-secondary">Staff Scientist, Legal</td>
                        <td className="text-secondary">
                          <a href="#" className="text-reset">
                            hshelper9@woothemes.com
                          </a>
                        </td>
                        <td className="text-secondary">Admin</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-vcenter card-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Role</th>
                        <th className="w-1" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/006m.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Lorry Mion</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  lmiona@livejournal.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>Automation Specialist IV</div>
                          <div className="text-secondary">Accounting</div>
                        </td>
                        <td className="text-secondary">User</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/004f.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Leesa Beaty</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  lbeatyb@alibaba.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>Editor</div>
                          <div className="text-secondary">Services</div>
                        </td>
                        <td className="text-secondary">Admin</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/007m.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Perren Keemar</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  pkeemarc@yahoo.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>Analog Circuit Design manager</div>
                          <div className="text-secondary">Services</div>
                        </td>
                        <td className="text-secondary">User</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span className="avatar me-2">SA</span>
                            <div className="flex-fill">
                              <div className="font-weight-medium">Sunny Airey</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  saireyd@prlog.org
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>Nuclear Power Engineer</div>
                          <div className="text-secondary">Engineering</div>
                        </td>
                        <td className="text-secondary">Owner</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/009m.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Geoffry Flaunders</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  gflaunderse@loc.gov
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>Software Test Engineer II</div>
                          <div className="text-secondary">Accounting</div>
                        </td>
                        <td className="text-secondary">Admin</td>
                        <td>
                          <a href="#">Edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-vcenter table-mobile-md card-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Role</th>
                        <th className="w-1" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Name">
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/010m.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Thatcher Keel</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  tkeelf@blogger.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-label="Title">
                          <div>VP Sales</div>
                          <div className="text-secondary">Business Development</div>
                        </td>
                        <td className="text-secondary" data-label="Role">
                          User
                        </td>
                        <td>
                          <div className="btn-list flex-nowrap">
                            <a href="#" className="btn">
                              Edit
                            </a>
                            <div className="dropdown">
                              <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                Actions
                              </button>
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
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Name">
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/005f.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Dyann Escala</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  descalag@usatoday.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-label="Title">
                          <div>Mechanical Systems Engineer</div>
                          <div className="text-secondary">Sales</div>
                        </td>
                        <td className="text-secondary" data-label="Role">
                          Admin
                        </td>
                        <td>
                          <div className="btn-list flex-nowrap">
                            <a href="#" className="btn">
                              Edit
                            </a>
                            <div className="dropdown">
                              <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                Actions
                              </button>
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
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Name">
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/006f.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Avivah Mugleston</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  amuglestonh@intel.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-label="Title">
                          <div>Actuary</div>
                          <div className="text-secondary">Sales</div>
                        </td>
                        <td className="text-secondary" data-label="Role">
                          User
                        </td>
                        <td>
                          <div className="btn-list flex-nowrap">
                            <a href="#" className="btn">
                              Edit
                            </a>
                            <div className="dropdown">
                              <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                Actions
                              </button>
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
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Name">
                          <div className="d-flex py-1 align-items-center">
                            <span className="avatar me-2">AA</span>
                            <div className="flex-fill">
                              <div className="font-weight-medium">Arlie Armstead</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  aarmsteadi@yellowpages.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-label="Title">
                          <div>VP Quality Control</div>
                          <div className="text-secondary">Accounting</div>
                        </td>
                        <td className="text-secondary" data-label="Role">
                          Owner
                        </td>
                        <td>
                          <div className="btn-list flex-nowrap">
                            <a href="#" className="btn">
                              Edit
                            </a>
                            <div className="dropdown">
                              <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                Actions
                              </button>
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
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Name">
                          <div className="d-flex py-1 align-items-center">
                            <span
                              className="avatar me-2"
                              style={{
                                backgroundImage: "url(./static/avatars/008f.jpg)",
                              }}
                            />
                            <div className="flex-fill">
                              <div className="font-weight-medium">Tessie Curzon</div>
                              <div className="text-secondary">
                                <a href="#" className="text-reset">
                                  tcurzonj@hp.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-label="Title">
                          <div>Research Nurse</div>
                          <div className="text-secondary">Product Management</div>
                        </td>
                        <td className="text-secondary" data-label="Role">
                          Admin
                        </td>
                        <td>
                          <div className="btn-list flex-nowrap">
                            <a href="#" className="btn">
                              Edit
                            </a>
                            <div className="dropdown">
                              <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                                Actions
                              </button>
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Invoices</h3>
                </div>
                <div className="card-body border-bottom py-3">
                  <div className="d-flex">
                    <div className="text-secondary">
                      Show
                      <div className="mx-2 d-inline-block">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          defaultValue={8}
                          size={3}
                          aria-label="Invoices count"
                        />
                      </div>
                      entries
                    </div>
                    <div className="ms-auto text-secondary">
                      Search:
                      <div className="ms-2 d-inline-block">
                        <input type="text" className="form-control form-control-sm" aria-label="Search invoice" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th className="w-1">
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select all invoices"
                          />
                        </th>
                        <th className="w-1">
                          No. {/* Download SVG icon from http://tabler-icons.io/i/chevron-up */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-sm icon-thick"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 15l6 -6l6 6" />
                          </svg>
                        </th>
                        <th>Invoice Subject</th>
                        <th>Client</th>
                        <th>VAT No.</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001401</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            Design Works
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-us me-2" />
                          Carlson Limited
                        </td>
                        <td>87956621</td>
                        <td>15 Dec 2017</td>
                        <td>
                          <span className="badge bg-success me-1" /> Paid
                        </td>
                        <td>$887</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001402</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            UX Wireframes
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-gb me-2" />
                          Adobe
                        </td>
                        <td>87956421</td>
                        <td>12 Apr 2017</td>
                        <td>
                          <span className="badge bg-warning me-1" /> Pending
                        </td>
                        <td>$1200</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001403</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            New Dashboard
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-de me-2" />
                          Bluewolf
                        </td>
                        <td>87952621</td>
                        <td>23 Oct 2017</td>
                        <td>
                          <span className="badge bg-warning me-1" /> Pending
                        </td>
                        <td>$534</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001404</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            Landing Page
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-br me-2" />
                          Salesforce
                        </td>
                        <td>87953421</td>
                        <td>2 Sep 2017</td>
                        <td>
                          <span className="badge bg-secondary me-1" /> Due in 2 Weeks
                        </td>
                        <td>$1500</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001405</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            Marketing Templates
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-pl me-2" />
                          Printic
                        </td>
                        <td>87956621</td>
                        <td>29 Jan 2018</td>
                        <td>
                          <span className="badge bg-danger me-1" /> Paid Today
                        </td>
                        <td>$648</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001406</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            Sales Presentation
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-br me-2" />
                          Tabdaq
                        </td>
                        <td>87956621</td>
                        <td>4 Feb 2018</td>
                        <td>
                          <span className="badge bg-secondary me-1" /> Due in 3 Weeks
                        </td>
                        <td>$300</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001407</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            Logo &amp; Print
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-us me-2" />
                          Apple
                        </td>
                        <td>87956621</td>
                        <td>22 Mar 2018</td>
                        <td>
                          <span className="badge bg-success me-1" /> Paid Today
                        </td>
                        <td>$2500</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input m-0 align-middle"
                            type="checkbox"
                            aria-label="Select invoice"
                          />
                        </td>
                        <td>
                          <span className="text-secondary">001408</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-reset" tabIndex={-1}>
                            Icons
                          </a>
                        </td>
                        <td>
                          <span className="flag flag-xs flag-country-pl me-2" />
                          Tookapic
                        </td>
                        <td>87956621</td>
                        <td>13 May 2018</td>
                        <td>
                          <span className="badge bg-success me-1" /> Paid Today
                        </td>
                        <td>$940</td>
                        <td className="text-end">
                          <span className="dropdown">
                            <button
                              className="btn dropdown-toggle align-text-top"
                              data-bs-boundary="viewport"
                              data-bs-toggle="dropdown"
                            >
                              Actions
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer d-flex align-items-center">
                  <p className="m-0 text-secondary">
                    Showing <span>1</span> to <span>8</span> of <span>16</span> entries
                  </p>
                  <ul className="pagination m-0 ms-auto">
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
export default Tables;
