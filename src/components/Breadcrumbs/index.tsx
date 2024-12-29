import { Button, Col, Container, Row } from "react-bootstrap";
import { TbSearch } from "react-icons/tb";
import { Link } from "react-router";
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
        <Row className="g-2 align-items-center flex-wrap">
          <Col xs="12" sm>
            <nav className="breadcrumb-arrows">
              <ol className="breadcrumb">
                {!pageTitle?.hide?.breadCrumbItems &&
                  (pageTitle?.breadCrumbItems || []).map((item, key: number) => (
                    <li
                      key={key}
                      className={"breadcrumb-item d-flex align-items-center" + (item?.active ? " active" : "")}
                    >
                      <Link to={item?.path} className="fs-3">
                        {item.label}
                      </Link>
                      {item?.subLabel}
                    </li>
                  ))}
              </ol>
            </nav>
            {!pageTitle?.hide?.title && pageTitle?.title && <h2 className="page-title">{pageTitle?.title}</h2>}
            {!pageTitle?.hide?.subtitle && pageTitle?.subtitle && (
              <div className="page-subtitle">{pageTitle?.subtitle}</div>
            )}
          </Col>
          {((!pageTitle?.hide?.linkItems && pageTitle?.linkItems?.length) || pageTitle?.search) && (
            <Col xs="12" sm="auto" className="d-flex flex-column flex-sm-row gap-1">
              {pageTitle?.search && (
                <Input.Control
                  classNameSearch="input-icon-addon"
                  searchIcon={<TbSearch className="icon" />}
                  type="search"
                  value={pageTitle?.search?.value}
                  placeholder={pageTitle?.search?.placeholder}
                  className={pageTitle?.search?.className}
                  onChange={pageTitle?.search?.onChange}
                />
              )}
              {!pageTitle?.hide?.linkItems &&
                pageTitle?.linkItems?.map(
                  (item, key: number) =>
                    !item?.hide && (
                      <Button
                        key={key}
                        {...(item?.path && { as: Link as any, to: item?.path })}
                        className={classNames(
                          "d-inline-flex align-items-center justify-content-center gap-1 rounded-5",
                          item?.className,
                        )}
                        {...item}
                      >
                        {item?.icon?.type && (
                          <item.icon.type size="16" className={item?.icon?.className ?? "ms-md-n1"} />
                        )}{" "}
                        <span>{item?.label}</span>
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
