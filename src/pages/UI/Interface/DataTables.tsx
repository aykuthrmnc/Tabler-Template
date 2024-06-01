const DataTables = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Datatables</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-body">
              <div id="table-default" className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <button className="table-sort" data-sort="sort-name">
                          Name
                        </button>
                      </th>
                      <th>
                        <button className="table-sort" data-sort="sort-city">
                          City
                        </button>
                      </th>
                      <th>
                        <button className="table-sort" data-sort="sort-type">
                          Type
                        </button>
                      </th>
                      <th>
                        <button className="table-sort" data-sort="sort-score">
                          Score
                        </button>
                      </th>
                      <th>
                        <button className="table-sort" data-sort="sort-date">
                          Date
                        </button>
                      </th>
                      <th>
                        <button className="table-sort" data-sort="sort-quantity">
                          Quantity
                        </button>
                      </th>
                      <th>
                        <button className="table-sort" data-sort="sort-progress">
                          Progress
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-tbody">
                    <tr>
                      <td className="sort-name">Steel Vengeance</td>
                      <td className="sort-city">Cedar Point, United States</td>
                      <td className="sort-type">RMC Hybrid</td>
                      <td className="sort-score">100,0%</td>
                      <td className="sort-date" data-date={1628122643}>
                        August 05, 2021
                      </td>
                      <td className="sort-quantity">74</td>
                      <td className="sort-progress" data-progress={30}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">30%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "30%" }}
                                role="progressbar"
                                aria-valuenow={30}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="30% Complete"
                              >
                                <span className="visually-hidden">30% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Fury 325</td>
                      <td className="sort-city">Carowinds, United States</td>
                      <td className="sort-type">B&amp;M Giga, Hyper, Steel</td>
                      <td className="sort-score">99,3%</td>
                      <td className="sort-date" data-date={1546344668}>
                        January 01, 2019
                      </td>
                      <td className="sort-quantity">49</td>
                      <td className="sort-progress" data-progress={48}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">48%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "48%" }}
                                role="progressbar"
                                aria-valuenow={48}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="48% Complete"
                              >
                                <span className="visually-hidden">48% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Wildfire</td>
                      <td className="sort-city">Kolmården Sweden</td>
                      <td className="sort-type">RMC Twister, Wooden, Terrain</td>
                      <td className="sort-score">99,3%</td>
                      <td className="sort-date" data-date={1545977105}>
                        December 28, 2018
                      </td>
                      <td className="sort-quantity">8</td>
                      <td className="sort-progress" data-progress={9}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">9%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "9%" }}
                                role="progressbar"
                                aria-valuenow={9}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="9% Complete"
                              >
                                <span className="visually-hidden">9% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Lightning Rod</td>
                      <td className="sort-city">Dollywood, United States</td>
                      <td className="sort-type">RMC Wooden</td>
                      <td className="sort-score">99,1%</td>
                      <td className="sort-date" data-date={1605096500}>
                        November 11, 2020
                      </td>
                      <td className="sort-quantity">104</td>
                      <td className="sort-progress" data-progress={98}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">98%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "98%" }}
                                role="progressbar"
                                aria-valuenow={98}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="98% Complete"
                              >
                                <span className="visually-hidden">98% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Maverick</td>
                      <td className="sort-city">Cedar Point, United States</td>
                      <td className="sort-type">Intamin Rocket, Steel</td>
                      <td className="sort-score">99,1%</td>
                      <td className="sort-date" data-date={1636929477}>
                        November 14, 2021
                      </td>
                      <td className="sort-quantity">86</td>
                      <td className="sort-progress" data-progress={46}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">46%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "46%" }}
                                role="progressbar"
                                aria-valuenow={46}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="46% Complete"
                              >
                                <span className="visually-hidden">46% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">El Toro</td>
                      <td className="sort-city">Six Flags Great Adventure, United States</td>
                      <td className="sort-type">Intamin Twister, Wooden</td>
                      <td className="sort-score">99,0%</td>
                      <td className="sort-date" data-date={1613007167}>
                        February 11, 2021
                      </td>
                      <td className="sort-quantity">130</td>
                      <td className="sort-progress" data-progress={29}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">29%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "29%" }}
                                role="progressbar"
                                aria-valuenow={29}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="29% Complete"
                              >
                                <span className="visually-hidden">29% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Twisted Colossus</td>
                      <td className="sort-city">Six Flags Magic Mountain, United States</td>
                      <td className="sort-type">RMC Hybrid</td>
                      <td className="sort-score">98,9%</td>
                      <td className="sort-date" data-date={1572695602}>
                        November 02, 2019
                      </td>
                      <td className="sort-quantity">30</td>
                      <td className="sort-progress" data-progress={57}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">57%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "57%" }}
                                role="progressbar"
                                aria-valuenow={57}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="57% Complete"
                              >
                                <span className="visually-hidden">57% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Eejanaika new</td>
                      <td className="sort-city">Fuji-Q Highland, Japan</td>
                      <td className="sort-type">S&amp;S Power 4th Dimension, Steel</td>
                      <td className="sort-score">98,6%</td>
                      <td className="sort-date" data-date={1615765992}>
                        March 14, 2021
                      </td>
                      <td className="sort-quantity">162</td>
                      <td className="sort-progress" data-progress={91}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">91%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "91%" }}
                                role="progressbar"
                                aria-valuenow={91}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="91% Complete"
                              >
                                <span className="visually-hidden">91% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Wicked Cyclone</td>
                      <td className="sort-city">Six Flags New England, United States</td>
                      <td className="sort-type">RMC Hybrid</td>
                      <td className="sort-score">98,2%</td>
                      <td className="sort-date" data-date={1570144735}>
                        October 03, 2019
                      </td>
                      <td className="sort-quantity">174</td>
                      <td className="sort-progress" data-progress={3}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">3%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "3%" }}
                                role="progressbar"
                                aria-valuenow={3}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="3% Complete"
                              >
                                <span className="visually-hidden">3% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Shambhala</td>
                      <td className="sort-city">Port Aventura, Spain</td>
                      <td className="sort-type">B&amp;M Hyper, Steel</td>
                      <td className="sort-score">98,2%</td>
                      <td className="sort-date" data-date={1536285945}>
                        September 07, 2018
                      </td>
                      <td className="sort-quantity">111</td>
                      <td className="sort-progress" data-progress={24}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">24%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "24%" }}
                                role="progressbar"
                                aria-valuenow={24}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="24% Complete"
                              >
                                <span className="visually-hidden">24% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Taron</td>
                      <td className="sort-city">Phantasialand, Germany</td>
                      <td className="sort-type">Intamin Sit Down, Steel</td>
                      <td className="sort-score">98,2%</td>
                      <td className="sort-date" data-date={1543072573}>
                        November 24, 2018
                      </td>
                      <td className="sort-quantity">130</td>
                      <td className="sort-progress" data-progress={48}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">48%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "48%" }}
                                role="progressbar"
                                aria-valuenow={48}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="48% Complete"
                              >
                                <span className="visually-hidden">48% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Expedition Ge Force</td>
                      <td className="sort-city">Holiday Park, Germany</td>
                      <td className="sort-type">Intamin Megacoaster, Steel</td>
                      <td className="sort-score">98,2%</td>
                      <td className="sort-date" data-date={1562384190}>
                        July 06, 2019
                      </td>
                      <td className="sort-quantity">157</td>
                      <td className="sort-progress" data-progress={57}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">57%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "57%" }}
                                role="progressbar"
                                aria-valuenow={57}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="57% Complete"
                              >
                                <span className="visually-hidden">57% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Storm Chaser</td>
                      <td className="sort-city">Kentucky Kingdom, United States</td>
                      <td className="sort-type">RMC Steel</td>
                      <td className="sort-score">97,9%</td>
                      <td className="sort-date" data-date={1567543123}>
                        September 03, 2019
                      </td>
                      <td className="sort-quantity">43</td>
                      <td className="sort-progress" data-progress={42}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">42%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "42%" }}
                                role="progressbar"
                                aria-valuenow={42}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="42% Complete"
                              >
                                <span className="visually-hidden">42% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Helix</td>
                      <td className="sort-city">Liseberg, Sweden</td>
                      <td className="sort-type">Mack Looper, Steel, Terrain</td>
                      <td className="sort-score">97,9%</td>
                      <td className="sort-date" data-date={1524703250}>
                        April 26, 2018
                      </td>
                      <td className="sort-quantity">151</td>
                      <td className="sort-progress" data-progress={54}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">54%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "54%" }}
                                role="progressbar"
                                aria-valuenow={54}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="54% Complete"
                              >
                                <span className="visually-hidden">54% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="sort-name">Outlaw Run</td>
                      <td className="sort-city">Silver Dollar City, United States</td>
                      <td className="sort-type">RMC Hybrid</td>
                      <td className="sort-score">96,6%</td>
                      <td className="sort-date" data-date={1559333540}>
                        May 31, 2019
                      </td>
                      <td className="sort-quantity">131</td>
                      <td className="sort-progress" data-progress={64}>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-auto">64%</div>
                          <div className="col">
                            <div className="progress" style={{ width: "5rem" }}>
                              <div
                                className="progress-bar"
                                style={{ width: "64%" }}
                                role="progressbar"
                                aria-valuenow={64}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label="64% Complete"
                              >
                                <span className="visually-hidden">64% Complete</span>
                              </div>
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
export default DataTables;
