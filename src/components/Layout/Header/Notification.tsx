import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";
import { TbBell, TbStar } from "react-icons/tb";
import { Link } from "react-router-dom";

const HeaderNotification = () => {
  return (
    <Dropdown align="end" className="nav-item d-none d-md-flex me-3">
      <Dropdown.Toggle as="a" role="button" className="nav-link px-0" bsPrefix="dropdown-button">
        <TbBell className="icon" />
        <span className="badge bg-red" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-arrow dropdown-menu-card">
        <Card>
          <Card.Header>
            <Card.Title as="h3">Son Güncellemeler</Card.Title>
          </Card.Header>
          <ListGroup variant="flush" className="list-group-hoverable">
            <ListGroup.Item>
              <Row className="align-items-center">
                <Col xs="auto">
                  <span className="status-dot status-dot-animated bg-red d-block" />
                </Col>
                <Col className="text-truncate">
                  <Link to="#" className="text-body d-block">
                    Lorem, ipsum.
                  </Link>
                  <div className="d-block text-muted text-truncate mt-n1">Lorem, ipsum dolor.</div>
                </Col>
                <Col xs="auto">
                  <Link to="#" className="list-group-item-actions">
                    <TbStar className="icon text-muted" />
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="align-items-center">
                <Col xs="auto">
                  <span className="status-dot d-block" />
                </Col>
                <Col className="text-truncate">
                  <Link to="#" className="text-body d-block">
                    Lorem, ipsum.
                  </Link>
                  <div className="d-block text-muted text-truncate mt-n1">Lorem, ipsum dolor.</div>
                </Col>
                <Col xs="auto">
                  <Link to="#" className="list-group-item-actions show">
                    <TbStar className="icon text-yellow" />
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="align-items-center">
                <Col xs="auto">
                  <span className="status-dot status-dot-animated bg-green d-block" />
                </Col>
                <Col className="text-truncate">
                  <Link to="#" className="text-body d-block">
                    Lorem, ipsum.
                  </Link>
                  <div className="d-block text-muted text-truncate mt-n1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </div>
                </Col>
                <Col xs="auto">
                  <Link to="#" className="list-group-item-actions">
                    <TbStar className="icon text-muted" />
                  </Link>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default HeaderNotification;
