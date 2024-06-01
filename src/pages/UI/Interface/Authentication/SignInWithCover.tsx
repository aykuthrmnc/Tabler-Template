const SignInWithCover = () => {
  return (
    <div className="row g-0 flex-fill">
      <div className="col-12 col-lg-6 col-xl-4 border-top-wide border-primary d-flex flex-column justify-content-center">
        <div className="container container-tight my-5 px-lg-5">
          <div className="text-center mb-4">
            <a href="." className="navbar-brand navbar-brand-autodark">
              <img src="./static/logo.svg" height={36} alt="" />
            </a>
          </div>
          <h2 className="h3 text-center mb-3">Login to your account</h2>
          <form action="./" method="get" autoComplete="off" noValidate={true}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="your@email.com" autoComplete="off" />
            </div>
            <div className="mb-2">
              <label className="form-label">
                Password
                <span className="form-label-description">
                  <a href="./forgot-password.html">I forgot password</a>
                </span>
              </label>
              <div className="input-group input-group-flat">
                <input type="password" className="form-control" placeholder="Your password" autoComplete="off" />
                <span className="input-group-text">
                  <a
                    href="#"
                    className="link-secondary"
                    data-bs-toggle="tooltip"
                    aria-label="Show password"
                    data-bs-original-title="Show password"
                  >
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
                  </a>
                </span>
              </div>
            </div>
            <div className="mb-2">
              <label className="form-check">
                <input type="checkbox" className="form-check-input" />
                <span className="form-check-label">Remember me on this device</span>
              </label>
            </div>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary w-100">
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center text-secondary mt-3">
            Don't have account yet?{" "}
            <a href="./sign-up.html" tabIndex={-1}>
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-8 d-none d-lg-block">
        {/* Photo */}
        <div
          className="bg-cover h-100 min-vh-100"
          style={{
            backgroundImage: "url(./static/photos/finances-us-dollars-and-bitcoins-currency-money-2.jpg)",
          }}
        />
      </div>
    </div>
  );
};
export default SignInWithCover;
