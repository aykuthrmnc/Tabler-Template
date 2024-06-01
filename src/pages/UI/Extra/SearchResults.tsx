const SearchResults = () => {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Search results</h2>
              <div className="text-secondary mt-1">About 2,410 result (0.19 seconds)</div>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="row g-4">
            <div className="col-3">
              <form action="./" method="get" autoComplete="off" noValidate>
                <div className="subheader mb-2">Category</div>
                <div className="list-group list-group-transparent mb-3">
                  <a className="list-group-item list-group-item-action d-flex align-items-center active" href="#">
                    Games
                    <small className="text-secondary ms-auto">24</small>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex align-items-center" href="#">
                    Clothing
                    <small className="text-secondary ms-auto">149</small>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex align-items-center" href="#">
                    Jewelery
                    <small className="text-secondary ms-auto">88</small>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex align-items-center" href="#">
                    Toys
                    <small className="text-secondary ms-auto">54</small>
                  </a>
                </div>
                <div className="subheader mb-2">Rating</div>
                <div className="mb-3">
                  <label className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="form-stars"
                      defaultValue="5 stars"
                      defaultChecked
                    />
                    <span className="form-check-label">5 stars</span>
                  </label>
                  <label className="form-check">
                    <input type="radio" className="form-check-input" name="form-stars" defaultValue="4 stars" />
                    <span className="form-check-label">4 stars</span>
                  </label>
                  <label className="form-check">
                    <input type="radio" className="form-check-input" name="form-stars" defaultValue="3 stars" />
                    <span className="form-check-label">3 stars</span>
                  </label>
                  <label className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="form-stars"
                      defaultValue="2 and less stars"
                    />
                    <span className="form-check-label">2 and less stars</span>
                  </label>
                </div>
                <div className="subheader mb-2">Tags</div>
                <div className="mb-3">
                  <label className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="form-tags[]"
                      defaultValue="business"
                      defaultChecked
                    />
                    <span className="form-check-label">business</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" name="form-tags[]" defaultValue="evening" />
                    <span className="form-check-label">evening</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" name="form-tags[]" defaultValue="leisure" />
                    <span className="form-check-label">leisure</span>
                  </label>
                  <label className="form-check">
                    <input type="checkbox" className="form-check-input" name="form-tags[]" defaultValue="party" />
                    <span className="form-check-label">party</span>
                  </label>
                </div>
                <div className="subheader mb-2">Price</div>
                <div className="row g-2 align-items-center mb-3">
                  <div className="col">
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="from"
                        defaultValue={3}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-auto">—</div>
                  <div className="col">
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input type="text" className="form-control" placeholder="to" autoComplete="off" />
                    </div>
                  </div>
                </div>
                <div className="subheader mb-2">Shipping</div>
                <div>
                  <select name="" className="form-select">
                    <option>United Kingdom</option>
                    <option>USA</option>
                    <option>Germany</option>
                    <option>Poland</option>
                    <option>Other…</option>
                  </select>
                </div>
                <div className="mt-5">
                  <button className="btn btn-primary w-100">Confirm changes</button>
                  <a href="#" className="btn btn-link w-100">
                    Reset to defaults
                  </a>
                </div>
              </form>
            </div>
            <div className="col-9">
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
                          style={{
                            backgroundImage: "url(./static/avatars/000m.jpg)",
                          }}
                        />
                        <div>
                          <div>Paweł Kuna</div>
                          <div className="text-secondary">3 days ago</div>
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
                          style={{
                            backgroundImage: "url(./static/avatars/002m.jpg)",
                          }}
                        />
                        <div>
                          <div>Mallory Hulme</div>
                          <div className="text-secondary">yesterday</div>
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
                          style={{
                            backgroundImage: "url(./static/avatars/003m.jpg)",
                          }}
                        />
                        <div>
                          <div>Dunn Slane</div>
                          <div className="text-secondary">1 week and 3 days ago</div>
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
                          style={{
                            backgroundImage: "url(./static/avatars/000f.jpg)",
                          }}
                        />
                        <div>
                          <div>Emmy Levet</div>
                          <div className="text-secondary">5 days ago</div>
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
                          style={{
                            backgroundImage: "url(./static/avatars/001f.jpg)",
                          }}
                        />
                        <div>
                          <div>Maryjo Lebarree</div>
                          <div className="text-secondary">3 days ago</div>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/everything-you-need-to-work-from-your-bed.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/002f.jpg)",
                          }}
                        />
                        <div>
                          <div>Kellie Skingley</div>
                          <div className="text-secondary">1 week and 2 days ago</div>
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
                          style={{
                            backgroundImage: "url(./static/avatars/003f.jpg)",
                          }}
                        />
                        <div>
                          <div>Christabel Charlwood</div>
                          <div className="text-secondary">today</div>
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
                          style={{
                            backgroundImage: "url(./static/avatars/006m.jpg)",
                          }}
                        />
                        <div>
                          <div>Lorry Mion</div>
                          <div className="text-secondary">5 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/color-palette-guide-sample-colors-catalog-.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/004f.jpg)",
                          }}
                        />
                        <div>
                          <div>Leesa Beaty</div>
                          <div className="text-secondary">6 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/stylish-workplace-with-computer-at-home.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/007m.jpg)",
                          }}
                        />
                        <div>
                          <div>Perren Keemar</div>
                          <div className="text-secondary">4 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/pink-desk-in-the-home-office.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="avatar me-3 rounded">SA</span>
                        <div>
                          <div>Sunny Airey</div>
                          <div className="text-secondary">5 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/young-woman-sitting-on-the-sofa-and-working-on-her-laptop.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/009m.jpg)",
                          }}
                        />
                        <div>
                          <div>Geoffry Flaunders</div>
                          <div className="text-secondary">1 week ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/coffee-on-a-table-with-other-items.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/010m.jpg)",
                          }}
                        />
                        <div>
                          <div>Thatcher Keel</div>
                          <div className="text-secondary">1 week and 2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/young-entrepreneur-working-from-a-modern-cafe-2.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/005f.jpg)",
                          }}
                        />
                        <div>
                          <div>Dyann Escala</div>
                          <div className="text-secondary">4 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/soft-photo-of-woman-on-the-bed-with-the-book-and-cup-of-coffee-in-hands.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/006f.jpg)",
                          }}
                        />
                        <div>
                          <div>Avivah Mugleston</div>
                          <div className="text-secondary">6 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/fairy-lights-at-the-beach-in-bulgaria.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="avatar me-3 rounded">AA</span>
                        <div>
                          <div>Arlie Armstead</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/woman-working-on-laptop-at-home-office.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/008f.jpg)",
                          }}
                        />
                        <div>
                          <div>Tessie Curzon</div>
                          <div className="text-secondary">3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/modern-home-office.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/009f.jpg)",
                          }}
                        />
                        <div>
                          <div>Flossi Uttley</div>
                          <div className="text-secondary">4 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/blond-using-her-laptop-at-her-bedroom.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/010f.jpg)",
                          }}
                        />
                        <div>
                          <div>Cesya Spritt</div>
                          <div className="text-secondary">1 week ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/tropical-palm-leaves-floral-pattern-background.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/011m.jpg)",
                          }}
                        />
                        <div>
                          <div>Johnnie Gilby</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/woman-read-book-and-drink-coffee.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/012m.jpg)",
                          }}
                        />
                        <div>
                          <div>Ban Rzehor</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/book-on-the-grass.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/011f.jpg)",
                          }}
                        />
                        <div>
                          <div>Carroll Erat</div>
                          <div className="text-secondary">6 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/colorful-exotic-flowers-and-greenery.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/012f.jpg)",
                          }}
                        />
                        <div>
                          <div>Marsha Labat</div>
                          <div className="text-secondary">today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/workplace-with-laptop-on-table-at-home.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/013m.jpg)",
                          }}
                        />
                        <div>
                          <div>Elston Muffett</div>
                          <div className="text-secondary">1 week and 3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/city-lights-reflected-in-the-water-at-night.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/013f.jpg)",
                          }}
                        />
                        <div>
                          <div>Leigha Gorce</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/cryptocurrency-bitcoin-coins.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="avatar me-3 rounded">TB</span>
                        <div>
                          <div>Tallie Bettis</div>
                          <div className="text-secondary">3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/woman-read-book-and-drink-coffee-2.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/015f.jpg)",
                          }}
                        />
                        <div>
                          <div>Merrily Garforth</div>
                          <div className="text-secondary">3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/friends-at-a-restaurant-drinking-wine.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span className="avatar me-3 rounded">EB</span>
                        <div>
                          <div>Errol Blackley</div>
                          <div className="text-secondary">2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/beautiful-blonde-woman-on-a-wooden-pier-by-the-lake.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/016f.jpg)",
                          }}
                        />
                        <div>
                          <div>Ninon Don</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/white-apple-imac-computer-with-elephant-mousepad.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/015m.jpg)",
                          }}
                        />
                        <div>
                          <div>Delaney Cairney</div>
                          <div className="text-secondary">1 week and 3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/workplace-with-laptop-on-table-at-home-2.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/017f.jpg)",
                          }}
                        />
                        <div>
                          <div>Gratia Gooley</div>
                          <div className="text-secondary">6 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/working-in-a-restaurant-macbook-cheese-cake-and-cup-of-coffee.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/018f.jpg)",
                          }}
                        />
                        <div>
                          <div>Odelinda McCosh</div>
                          <div className="text-secondary">1 week and 3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/young-woman-sitting-on-the-sofa-and-working-on-her-laptop-2.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/016m.jpg)",
                          }}
                        />
                        <div>
                          <div>Wilburt Siegertsz</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/brainstorming-session-with-creative-designers-2.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/019f.jpg)",
                          }}
                        />
                        <div>
                          <div>Julietta Coke</div>
                          <div className="text-secondary">1 week ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/woman-drinking-hot-tea-in-her-home-office.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/017m.jpg)",
                          }}
                        />
                        <div>
                          <div>Portie Christou</div>
                          <div className="text-secondary">6 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/stylish-workspace-with-macbook-pro.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/018m.jpg)",
                          }}
                        />
                        <div>
                          <div>Emmott Dowsett</div>
                          <div className="text-secondary">yesterday</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/people-by-a-banquet-table-full-with-food.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/019m.jpg)",
                          }}
                        />
                        <div>
                          <div>Rooney Cassy</div>
                          <div className="text-secondary">4 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/woman-working-on-a-laptop-while-enjoying-a-breakfast-coffee-and-chocolate-in-bed.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/020m.jpg)",
                          }}
                        />
                        <div>
                          <div>Haze Hubbert</div>
                          <div className="text-secondary">1 week and 2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/businesswoman-working-at-her-laptop.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/021m.jpg)",
                          }}
                        />
                        <div>
                          <div>Mata Codlin</div>
                          <div className="text-secondary">5 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/finances-us-dollars-and-bitcoins-currency-money-5.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/022m.jpg)",
                          }}
                        />
                        <div>
                          <div>Parker Oaten</div>
                          <div className="text-secondary">3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/cup-of-coffee-on-table-in-cafe.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/023m.jpg)",
                          }}
                        />
                        <div>
                          <div>Johannes Paternoster</div>
                          <div className="text-secondary">2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/young-woman-sitting-on-the-sofa-and-working-on-her-laptop-3.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/024m.jpg)",
                          }}
                        />
                        <div>
                          <div>Cary Baleine</div>
                          <div className="text-secondary">5 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/man-looking-out-to-sea.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/020f.jpg)",
                          }}
                        />
                        <div>
                          <div>Riane Milward</div>
                          <div className="text-secondary">today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/cup-of-coffee-on-table-in-cafe-2.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/025m.jpg)",
                          }}
                        />
                        <div>
                          <div>Reynold Indgs</div>
                          <div className="text-secondary">1 week and 3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/workplace-with-laptop-on-table-at-home-3.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/026m.jpg)",
                          }}
                        />
                        <div>
                          <div>Parke Moneypenny</div>
                          <div className="text-secondary">2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/businesswoman-working-at-her-laptop-2.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/021f.jpg)",
                          }}
                        />
                        <div>
                          <div>Sandi Keys</div>
                          <div className="text-secondary">yesterday</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/cup-of-coffee-and-an-open-book.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/022f.jpg)",
                          }}
                        />
                        <div>
                          <div>Peria Errichiello</div>
                          <div className="text-secondary">1 week and 2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/group-of-people-brainstorming-and-taking-notes-4.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/023f.jpg)",
                          }}
                        />
                        <div>
                          <div>Eva Acres</div>
                          <div className="text-secondary">5 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/young-woman-sitting-on-the-sofa-and-working-on-her-laptop-4.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/027m.jpg)",
                          }}
                        />
                        <div>
                          <div>Jermaine Booley</div>
                          <div className="text-secondary">3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/making-magic-with-fairy-lights.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/024f.jpg)",
                          }}
                        />
                        <div>
                          <div>Juanita Nobles</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/woman-working-on-a-laptop-while-enjoying-a-breakfast-coffee-and-chocolate-in-bed-2.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/025f.jpg)",
                          }}
                        />
                        <div>
                          <div>Nanni Wooler</div>
                          <div className="text-secondary">1 week and 3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/woman-drinking-tea-and-reading-book.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/026f.jpg)",
                          }}
                        />
                        <div>
                          <div>Mela Sydes</div>
                          <div className="text-secondary">1 week and 2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/a-woman-works-at-a-desk-with-a-laptop-and-a-cup-of-coffee.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/028m.jpg)",
                          }}
                        />
                        <div>
                          <div>Price Letixier</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/everything-you-need-to-work-from-your-bed-2.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/027f.jpg)",
                          }}
                        />
                        <div>
                          <div>Beatrix Ladewig</div>
                          <div className="text-secondary">yesterday</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/workplace-with-laptop-on-table-at-home-4.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/029m.jpg)",
                          }}
                        />
                        <div>
                          <div>Donnie Biggin</div>
                          <div className="text-secondary">5 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/stylish-workspace-with-macbook-pro-2.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/030m.jpg)",
                          }}
                        />
                        <div>
                          <div>Kerwinn Burkart</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/netflix-drug-lords-from-narcos.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/028f.jpg)",
                          }}
                        />
                        <div>
                          <div>Harriot McGeady</div>
                          <div className="text-secondary">1 week and 1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/stone-texture-high-resolution-background-2.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/029f.jpg)",
                          }}
                        />
                        <div>
                          <div>Desirae Prahm</div>
                          <div className="text-secondary">1 week and 3 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img src="./static/photos/a-visit-to-the-bookstore.jpg" className="card-img-top" />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/030f.jpg)",
                          }}
                        />
                        <div>
                          <div>Netti Vondrasek</div>
                          <div className="text-secondary">6 days ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/books-and-purple-flowers-on-a-wooden-stool-by-the-bed.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/031m.jpg)",
                          }}
                        />
                        <div>
                          <div>Emlen Stairmand</div>
                          <div className="text-secondary">today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/people-watching-a-presentation-in-a-room.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/031f.jpg)",
                          }}
                        />
                        <div>
                          <div>Madeleine Salle</div>
                          <div className="text-secondary">today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="card card-sm">
                    <a href="#" className="d-block">
                      <img
                        src="./static/photos/home-office-laptop-organizer-and-cup-of-coffee.jpg"
                        className="card-img-top"
                      />
                    </a>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <span
                          className="avatar me-3 rounded"
                          style={{
                            backgroundImage: "url(./static/avatars/032f.jpg)",
                          }}
                        />
                        <div>
                          <div>Otha Denial</div>
                          <div className="text-secondary">yesterday</div>
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
export default SearchResults;
