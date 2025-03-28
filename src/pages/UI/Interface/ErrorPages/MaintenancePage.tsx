const MaintenancePage = () => {
  return (
    <div className="container-tight py-4">
      <div className="empty">
        <div className="empty-img">
          <img src="./static/illustrations/undraw_quitting_time_dm8t.svg" height={128} alt="" />
        </div>
        <p className="empty-title">Temporarily down for maintenance</p>
        <p className="empty-subtitle text-secondary">
          Sorry for the inconvenience but we’re performing some maintenance at the moment. We’ll be back online shortly!
        </p>
        <div className="empty-action">
          <a href="./." className="btn btn-primary">
            {/* Download SVG icon from http://tabler-icons.io/i/arrow-left */}
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
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
            Take me home
          </a>
        </div>
      </div>
    </div>
  );
};
export default MaintenancePage;
