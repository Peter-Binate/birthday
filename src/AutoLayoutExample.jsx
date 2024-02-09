import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container className='border-bottom border-dark'>
      <Row>
        <Col>
          <div className="p-2 fs-4">CITATION ET ANNIVERSAIRES</div>
        </Col>
        <Col>
          <div className="ps-2 fs-4 text-end">MERCREDI 08 MARS 2023</div>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;