import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom"
import "../Pages/Styles.css"

function CardsGrid({posts}) {
  return (
    <Row xs={1} md={3} className="m-2">
      {posts.map(curPost => (
        <Link to={`/post/${curPost.title}`}>    
            <Col>
                <Card className='mb-3 rounded-0'>
                    <Card.Img variant="top img-size rounded-0" src={curPost.imageUrl} />
                    <Card.Body className="card-size">
                    <Card.Title>{curPost.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
      ))}
    </Row>
  );
}

export default CardsGrid;