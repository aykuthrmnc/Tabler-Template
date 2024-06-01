const SignInLink = () => {
  return (
    <div className="container container-tight py-4">
      <div className="text-center mb-4">
        <a href="." className="navbar-brand navbar-brand-autodark">
          <img src="./static/logo.svg" width={110} height={32} alt="Tabler" className="navbar-brand-image" />
        </a>
      </div>
      <div className="text-center">
        <div className="my-5">
          <h2 className="h1">Check your inbox</h2>
          <p className="fs-h3 text-secondary">
            We've sent you a magic link to <strong>support@tabler.io</strong>.<br />
            Please click the link to confirm your address.
          </p>
        </div>
        <div className="text-center text-secondary mt-3">
          Can't see the email? Please check the spam folder.
          <br />
          Wrong email? Please <a href="#">re-enter your address</a>.
        </div>
      </div>
    </div>
  );
};
export default SignInLink;
