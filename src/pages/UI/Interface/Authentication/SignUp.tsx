const SignUp = () => {
  return (
    <div className="container container-tight py-4">
      <div className="text-center mb-4">
        <a href="." className="navbar-brand navbar-brand-autodark">
          <img src="./static/logo.svg" width={110} height={32} alt="Tabler" className="navbar-brand-image" />
        </a>
      </div>
      <form className="card card-md" action="./" method="get" autoComplete="off" noValidate={true}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Create new account</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group input-group-flat">
              <input type="password" className="form-control" placeholder="Password" autoComplete="off" />
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
          <div className="mb-3">
            <label className="form-check">
              <input type="checkbox" className="form-check-input" />
              <span className="form-check-label">
                Agree the{" "}
                <a href="./terms-of-service.html" tabIndex={-1}>
                  terms and policy
                </a>
                .
              </span>
            </label>
          </div>
          <div className="form-footer">
            <button type="submit" className="btn btn-primary w-100">
              Create new account
            </button>
          </div>
        </div>
      </form>
      <div className="text-center text-secondary mt-3">
        Already have account?{" "}
        <a href="./sign-in.html" tabIndex={-1}>
          Sign in
        </a>
      </div>
    </div>
  );
};
export default SignUp;
