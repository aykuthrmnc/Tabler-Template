import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="page-body">
      <Container fluid="xl">
        <Row xs="2" className="g-2">
          <Col>
            <Card as={Link} to="/table">
              <Card.Body>
                <div className="text-center">
                  <h2>Table</h2>
                  <p>Table component with custom fields and search</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card as={Link} to="/datagrid">
              <Card.Body>
                <div className="text-center">
                  <h2>DataGrid</h2>
                  <p>DataGrid component with custom fields and search</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card as={Link} to="/partial-datagrid">
              <Card.Body>
                <div className="text-center">
                  <h2>Partial DataGrid</h2>
                  <p>Partial DataGrid component with custom fields and search</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
