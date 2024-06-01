const ForgotPassword = () => {
  return (
    <div className="container container-tight py-4">
      <div className="text-center mb-4">
        <a href="." className="navbar-brand navbar-brand-autodark">
          <img src="./static/logo.svg" width={110} height={32} alt="Tabler" className="navbar-brand-image" />
        </a>
      </div>
      <form className="card card-md" action="./" method="get" autoComplete="off" noValidate={true}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Forgot password</h2>
          <p className="text-secondary mb-4">
            Enter your email address and your password will be reset and emailed to you.
          </p>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-footer">
            <a href="#" className="btn btn-primary w-100">
              {/* Download SVG icon from http://tabler-icons.io/i/mail */}
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
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              Send me new password
            </a>
          </div>
        </div>
      </form>
      <div className="text-center text-secondary mt-3">
        Forget it, <a href="./sign-in.html">send me back</a> to the sign in screen.
      </div>
    </div>
  );
};
export default ForgotPassword;
