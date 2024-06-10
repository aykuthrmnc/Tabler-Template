import { Button, Col, Container, Row } from "react-bootstrap";
import { TbSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useRedux } from "~/hooks";
import { RootState } from "~/store";
import classNames from "classnames";
import Input from "../Custom/Input";

const Breadcrumbs = () => {
  const { appSelector } = useRedux();
  const pageTitle = appSelector((state: RootState) => state.pageTitle.pageTitle);

  return (
    <div className="page-header d-print-none">
      <Container fluid="xl">
        <Row className="g-2 align-items-center">
          <Col>
            {pageTitle?.breadCrumbItems?.length && (
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
            )}
            {pageTitle?.pretitle && <div className="page-pretitle">{pageTitle?.pretitle}</div>}
            {pageTitle?.title && <h2 className="page-title">{pageTitle?.title}</h2>}
            {pageTitle?.subtitle && <div className="page-subtitle">{pageTitle?.subtitle}</div>}
          </Col>
          {pageTitle?.search && (
            <Col xs="auto">
              <Input.Control
                classNameSearch="input-icon-addon"
                searchIcon={<TbSearch className="icon" />}
                type="search"
                value={pageTitle?.search?.value}
                placeholder={pageTitle?.search?.placeholder}
                className={pageTitle?.search?.className}
                onChange={pageTitle?.search?.onChange}
              />
            </Col>
          )}
          {pageTitle?.linkItems?.length && (
            <Col xs="auto" className="d-flex gap-1">
              {pageTitle?.linkItems?.map((item, key: number) =>
                item?.url ? (
                  <Link
                    key={key}
                    to={item?.url!}
                    className={classNames(
                      `btn btn-${item?.variant || "primary"} d-flex align-items-center justify-content-center gap-2`,
                      item?.className,
                    )}
                  >
                    {item?.icon?.type && <item.icon.type size="16" className={item?.icon?.className ?? "ms-md-n1"} />}{" "}
                    <span className="d-none d-md-block">{item?.label}</span>
                  </Link>
                ) : (
                  <Button
                    key={key}
                    onClick={item?.onClick}
                    variant={item?.variant || "primary"}
                    className={classNames("d-flex align-items-center justify-content-center gap-1", item?.className)}
                  >
                    {item?.icon?.type && <item.icon.type size="16" className={item?.icon?.className ?? "ms-md-n1"} />}{" "}
                    <span className="d-none d-md-block">{item?.label}</span>
                  </Button>
                ),
              )}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};
export default Breadcrumbs;
