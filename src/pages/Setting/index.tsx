import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
  const tabs = [
    {
      id: 1,
      key: "",
      title: "Hesabım",
    },
    {
      id: 2,
      key: "change-password",
      title: "Şifreyi Değiştir",
    },
    {
      id: 3,
      key: "company",
      title: "Şirket Bilgileri",
    },
  ];

  return (
    <>
      <div className="page-header d-print-none">
        <Container fluid="xl">
          <Row className="g-2 align-items-center justify-content-center">
            <Col xs="12" lg>
              <h2 className="page-title justify-content-center justify-content-lg-start">Ayarlar</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="page-body">
        <Container fluid="xl">
          <Card>
            <Row className="g-0">
              <Col xs="12" md="3" className="d-md-block border-end">
                <Card.Body>
                  <h4 className="subheader">Şirket Ayarları</h4>
                  <ListGroup className="list-group-transparent">
                    {tabs?.map((item, key) => (
                      <ListGroup.Item
                        end
                        key={key}
                        as={NavLink}
                        to={item?.key ? `/settings/${item?.key}` : `/settings`}
                        className="list-group-item-action d-flex align-items-center"
                      >
                        {item?.title}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Col>
              <Col xs="12" md className="d-flex flex-column">
                <Outlet />
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};
export default Settings;
