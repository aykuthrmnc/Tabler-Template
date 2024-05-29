import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-header d-print-none">
          <Container fluid="xl">
            <Row className="g-2 align-items-center">
              <Col>
                <h2 className="page-title">Home</h2>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="page-body">
          <Container fluid="xl"></Container>
        </div>
      </div>
    </>
  );
};
export default Home;
