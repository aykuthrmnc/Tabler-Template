import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRedux } from "~/hooks";
import { RootState } from "~/store";

const Breadcrumbs = () => {
  const { appSelector } = useRedux();
  const pageTitle = appSelector((state: RootState) => state.pageTitle.pageTitle);

  return (
    <div className="page-header d-print-none">
      <Container fluid="xl">
        <Row className="g-2 align-items-center">
          <Col>
            <nav className="breadcrumb-arrows">
              <ol className="breadcrumb">
                {(pageTitle?.breadCrumbItems || []).map((item, key: number) => (
                  <li key={key} className={"breadcrumb-item d-flex" + (item?.active ? " active" : "")}>
                    <Link to={item?.path} className="fs-3">
                      {item.label}
                    </Link>
                    {item?.subLabel}
                  </li>
                ))}
              </ol>
            </nav>
            {/* {pageTitle?.title && <h2 className="page-title">{pageTitle?.title}</h2>} */}
            {pageTitle?.subtitle && <small>{pageTitle?.subtitle}</small>}
          </Col>
          <Col xs="auto">
            {(pageTitle?.linkItems || []).map((item, key: number) => {
              return (
                !item?.isHidden && (
                  <Link
                    key={key}
                    to={item.path}
                    className="btn btn-primary d-flex align-items-center justify-content-center gap-1 rounded-5"
                  >
                    {item.icon && <item.icon size="16" className="flex-shrink-0" />}{" "}
                    <span className="d-none d-md-block">{item?.label}</span>
                  </Link>
                )
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Breadcrumbs;
