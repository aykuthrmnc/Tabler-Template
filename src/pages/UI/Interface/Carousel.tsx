const Carousel = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Carousel</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel</h3>
                </div>
                <div className="card-body">
                  <div id="carousel-default" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/beautiful-blonde-woman-relaxing-with-a-can-of-coke-on-a-tree-stump-by-the-beach.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/brainstorming-session-with-creative-designers.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/finances-us-dollars-and-bitcoins-currency-money.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/group-of-people-brainstorming-and-taking-notes-2.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/blue-sofa-with-pillows-in-a-designer-living-room-interior.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel with indicators</h3>
                </div>
                <div className="card-body">
                  <div id="carousel-indicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators"
                        data-bs-slide-to={0}
                        className=" active"
                      />
                      <button type="button" data-bs-target="#carousel-indicators" data-bs-slide-to={1} className="" />
                      <button type="button" data-bs-target="#carousel-indicators" data-bs-slide-to={2} className="" />
                      <button type="button" data-bs-target="#carousel-indicators" data-bs-slide-to={3} className="" />
                      <button type="button" data-bs-target="#carousel-indicators" data-bs-slide-to={4} className="" />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/home-office-desk-with-macbook-iphone-calendar-watch-and-organizer.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="./static/photos/young-woman-working-in-a-cafe.jpg" />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/everything-you-need-to-work-from-your-bed.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/young-entrepreneur-working-from-a-modern-cafe.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/finances-us-dollars-and-bitcoins-currency-money-2.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel with controls</h3>
                </div>
                <div className="card-body">
                  <div id="carousel-controls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/group-of-people-sightseeing-in-the-city.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/color-palette-guide-sample-colors-catalog-.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/stylish-workplace-with-computer-at-home.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="./static/photos/pink-desk-in-the-home-office.jpg" />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/young-woman-sitting-on-the-sofa-and-working-on-her-laptop.jpg"
                        />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-controls" role="button" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-controls" role="button" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel with captions</h3>
                </div>
                <div className="card-body">
                  <div id="carousel-captions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/coffee-on-a-table-with-other-items.jpg"
                        />
                        <div className="carousel-caption-background d-none d-md-block" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/young-entrepreneur-working-from-a-modern-cafe-2.jpg"
                        />
                        <div className="carousel-caption-background d-none d-md-block" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/soft-photo-of-woman-on-the-bed-with-the-book-and-cup-of-coffee-in-hands.jpg"
                        />
                        <div className="carousel-caption-background d-none d-md-block" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/fairy-lights-at-the-beach-in-bulgaria.jpg"
                        />
                        <div className="carousel-caption-background d-none d-md-block" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/woman-working-on-laptop-at-home-office.jpg"
                        />
                        <div className="carousel-caption-background d-none d-md-block" />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>Slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-captions" role="button" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-captions" role="button" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel with dot indicators</h3>
                </div>
                <div className="card-body">
                  <div id="carousel-indicators-dot" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators carousel-indicators-dot">
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot"
                        data-bs-slide-to={0}
                        className=" active"
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot"
                        data-bs-slide-to={1}
                        className=""
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot"
                        data-bs-slide-to={2}
                        className=""
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot"
                        data-bs-slide-to={3}
                        className=""
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot"
                        data-bs-slide-to={4}
                        className=""
                      />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" alt="" src="./static/photos/modern-home-office.jpg" />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/blond-using-her-laptop-at-her-bedroom.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/tropical-palm-leaves-floral-pattern-background.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/woman-read-book-and-drink-coffee.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="./static/photos/book-on-the-grass.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel with thumbnail indicators</h3>
                </div>
                <div className="card-body">
                  <div id="carousel-indicators-thumb" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators carousel-indicators-thumb">
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb"
                        data-bs-slide-to={0}
                        className=" ratio ratio-4x3 active"
                        style={{
                          backgroundImage: "url(./static/photos/colorful-exotic-flowers-and-greenery.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb"
                        data-bs-slide-to={1}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/workplace-with-laptop-on-table-at-home.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb"
                        data-bs-slide-to={2}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/city-lights-reflected-in-the-water-at-night.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb"
                        data-bs-slide-to={3}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/cryptocurrency-bitcoin-coins.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb"
                        data-bs-slide-to={4}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/woman-read-book-and-drink-coffee-2.jpg)",
                        }}
                      />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/colorful-exotic-flowers-and-greenery.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/workplace-with-laptop-on-table-at-home.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/city-lights-reflected-in-the-water-at-night.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="./static/photos/cryptocurrency-bitcoin-coins.jpg" />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/woman-read-book-and-drink-coffee-2.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel with vertical dot indicators</h3>
                </div>
                <div className="card-body">
                  <div
                    id="carousel-indicators-dot-vertical"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators carousel-indicators-vertical carousel-indicators-dot">
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot-vertical"
                        data-bs-slide-to={0}
                        className=" active"
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot-vertical"
                        data-bs-slide-to={1}
                        className=""
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot-vertical"
                        data-bs-slide-to={2}
                        className=""
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot-vertical"
                        data-bs-slide-to={3}
                        className=""
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-dot-vertical"
                        data-bs-slide-to={4}
                        className=""
                      />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/friends-at-a-restaurant-drinking-wine.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/beautiful-blonde-woman-on-a-wooden-pier-by-the-lake.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/white-apple-imac-computer-with-elephant-mousepad.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/workplace-with-laptop-on-table-at-home-2.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/working-in-a-restaurant-macbook-cheese-cake-and-cup-of-coffee.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Carousel with thumbnail indicators</h3>
                </div>
                <div className="card-body">
                  <div
                    id="carousel-indicators-thumb-vertical"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators carousel-indicators-vertical carousel-indicators-thumb">
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb-vertical"
                        data-bs-slide-to={0}
                        className=" ratio ratio-4x3 active"
                        style={{
                          backgroundImage: "url(./static/photos/tropical-palm-leaves-floral-pattern-background.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb-vertical"
                        data-bs-slide-to={1}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/woman-read-book-and-drink-coffee.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb-vertical"
                        data-bs-slide-to={2}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/book-on-the-grass.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb-vertical"
                        data-bs-slide-to={3}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/colorful-exotic-flowers-and-greenery.jpg)",
                        }}
                      />
                      <button
                        type="button"
                        data-bs-target="#carousel-indicators-thumb-vertical"
                        data-bs-slide-to={4}
                        className=" ratio ratio-4x3"
                        style={{
                          backgroundImage: "url(./static/photos/workplace-with-laptop-on-table-at-home.jpg)",
                        }}
                      />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/tropical-palm-leaves-floral-pattern-background.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/woman-read-book-and-drink-coffee.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" alt="" src="./static/photos/book-on-the-grass.jpg" />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/colorful-exotic-flowers-and-greenery.jpg"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          alt=""
                          src="./static/photos/workplace-with-laptop-on-table-at-home.jpg"
                        />
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
export default Carousel;
