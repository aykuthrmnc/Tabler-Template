const PageLoader = () => {
  return (
    <div className="container container-slim py-4">
      <div className="text-center">
        <div className="mb-3">
          <a href="." className="navbar-brand navbar-brand-autodark">
            <img src="./static/logo-small.svg" height={36} alt="" />
          </a>
        </div>
        <div className="text-secondary mb-3">Preparing application</div>
        <div className="progress progress-sm">
          <div className="progress-bar progress-bar-indeterminate" />
        </div>
      </div>
    </div>
  );
};
export default PageLoader;
