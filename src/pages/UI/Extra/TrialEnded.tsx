const TrialEnded = () => {
  return (
    <div className="container container-tight py-4">
      <div className="text-center mb-4">
        <a href="." className="navbar-brand navbar-brand-autodark">
          <img src="./static/logo.svg" width={110} height={32} alt="Tabler" className="navbar-brand-image" />
        </a>
      </div>
      <div className="card card-md">
        <div className="card-body">
          <h2 className="mb-3">Your free trial period has expired!</h2>
          <p className="text-secondary mb-4">
            If you want to continue to benefit from Tabler, it's time to upgrade your plan.
          </p>
          <ul className="list-unstyled space-y">
            <li className="row g-2">
              <span className="col-auto">
                {/* Download SVG icon from http://tabler-icons.io/i/check */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon me-1 text-success"
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
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
              <span className="col">
                <strong className="d-block">Over 800+ productions</strong>
                <span className="d-block text-secondary">Unlimited movies, TV shows and more.</span>
              </span>
            </li>
            <li className="row g-2">
              <span className="col-auto">
                {/* Download SVG icon from http://tabler-icons.io/i/check */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon me-1 text-success"
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
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
              <span className="col">
                <strong className="d-block">Watch everywhere</strong>
                <span className="d-block text-secondary">
                  Watch on smart TVs, PlayStation, Xbox, Apple TV, Blu-ray players and more.
                </span>
              </span>
            </li>
            <li className="row g-2">
              <span className="col-auto">
                {/* Download SVG icon from http://tabler-icons.io/i/check */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon me-1 text-success"
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
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
              <span className="col">
                <strong className="d-block">Personalize</strong>
                <span className="d-block text-secondary">Choose your own style, watch what you like.</span>
              </span>
            </li>
          </ul>
          <div className="my-4">
            <a href="#" className="btn btn-primary w-100">
              Upgrade to a paid plan
            </a>
          </div>
          <p className="text-secondary">
            If you need to get a trial extension please feel free to <a href="#">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrialEnded;
