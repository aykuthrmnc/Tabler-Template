const LockScreen = () => {
  return (
    <div className="container container-tight py-4">
      <div className="text-center mb-4">
        <a href="." className="navbar-brand navbar-brand-autodark">
          <img src="./static/logo.svg" width={110} height={32} alt="Tabler" className="navbar-brand-image" />
        </a>
      </div>
      <form className="card card-md" action="./" method="get" autoComplete="off" noValidate={true}>
        <div className="card-body text-center">
          <div className="mb-4">
            <h2 className="card-title">Account Locked</h2>
            <p className="text-secondary">Please enter your password to unlock your account</p>
          </div>
          <div className="mb-4">
            <span className="avatar avatar-xl mb-3" style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }} />
            <h3>Paweł Kuna</h3>
          </div>
          <div className="mb-4">
            <input type="password" className="form-control" placeholder="Password…" />
          </div>
          <div>
            <a href="#" className="btn btn-primary w-100">
              {/* Download SVG icon from http://tabler-icons.io/i/lock-open */}
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
                <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M8 11v-5a4 4 0 0 1 8 0" />
              </svg>
              Unlock
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LockScreen;
