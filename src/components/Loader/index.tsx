const Loader = ({
  title = "Yükleniyor",
  showLogo = false,
  minHeight,
  maxWidth,
}: {
  title?: string;
  showLogo?: boolean;
  minHeight?: string;
  maxWidth?: string;
}) => {
  return (
    <div className="d-flex flex-column justify-content-center flex-fill">
      <div className="page page-center" style={{ minHeight }}>
        <div className="container container-slim py-4" style={{ maxWidth }}>
          <div className="text-center">
            {showLogo && (
              <div className="mb-3">
                <div className="navbar-brand navbar-brand-autodark">
                  <img height="36" src={import.meta.env.VITE_APP_ICON} alt={import.meta.env.VITE_APP_NAME} />
                </div>
              </div>
            )}
            <div className="text-muted mb-3">{title}</div>
            <div className="progress progress-sm">
              <div className="progress-bar progress-bar-indeterminate"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loader;
