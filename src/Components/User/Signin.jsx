import './user.css';
import { Button, Container, Card, Row, Col, Form, Nav } from 'react-bootstrap';
import img from '../assets/demo.jpg';
import { Link } from 'react-router-dom';
// import Header from '../Pages/Header';
// import Footer from '../Pages/Footer';


const Signin = () => {
    return (
        <>
        <Container className="my-3">
            <Card>
                <Row className='g-0'>
                    <Col md='6' className='d-flex box1'>
                        <img src={img} width="100%" height="464px" alt="" />
                    </Col>
                    <Col md='6'>
                        <Card.Body className='d-flex flex-column'>
                            <h3 className="fw-normal my-4 pb-3 text-center" style={{ letterSpacing: '1px' }}>
                                <b>Login</b></h3>
                            <Form action-="">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control className='p-3 input' type="email" placeholder="Email" required />
                                    <Form.Control className='p-3 mt-3 mb-3 input'  type="password" placeholder="Password" required/>
                                    <Nav.Link as={Link} to="/mainuserpanel"> <Button className="mb-4 signin_button" size='lg'>Login</Button> </Nav.Link>
                                </Form.Group>
                            </Form>
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/signup" style={{ color: '#393f81' }}>Register here</Link></p>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    </>


    );
}

export default Signin;