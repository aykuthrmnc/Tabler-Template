import classNames from "classnames";
import { TbArrowLeft } from "react-icons/tb";
import { Link } from "react-router-dom";

const Error500 = ({ isLayout = false }: { isLayout?: boolean }) => {
  return (
    <div
      className={classNames("d-flex flex-column justify-content-center flex-fill", {
        "border-top-wide border-primary": isLayout,
      })}
    >
      <div className="page page-center">
        <div className="container-tight py-4">
          <div className="empty">
            <div className="empty-header">500</div>
            <p className="empty-title">Oops… Bir hata oluştu</p>
            <p className="empty-subtitle text-muted">Üzgünüz ama sayfamız dahili bir hatayla karşılaştı.</p>
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
export default Error500;
