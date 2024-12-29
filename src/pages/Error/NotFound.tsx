import { TbArrowLeft } from "react-icons/tb";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="border-top-wide border-primary d-flex flex-column justify-content-center min-vh-100">
      <div className="page page-center">
        <div className="container-tight py-4">
          <div className="empty">
            <div className="empty-header">404</div>
            <p className="empty-title">Oops… Sayfa bulunamadı</p>
            <p className="empty-subtitle text-muted">Aradığınız sayfa bulunamadı.</p>
            <p className="empty-subtitle text-muted">URL'nin doğru olduğundan emin misiniz?</p>
            <p className="empty-subtitle text-muted">Site sahibiyle iletişime geçin.</p>
            <div className="empty-action">
              <Link to="/" className="btn btn-primary">
                <TbArrowLeft className="icon" />
                Ana sayfaya git
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
