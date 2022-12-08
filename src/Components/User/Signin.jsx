import './user.css';

import {
    Button,
    Container,
    Card,
    Row,
    Col,
    Form
}
    from 'react-bootstrap';

import img from '../assets/demo.jpg';

const Signin = () => {
    return (
        <Container className="my-3">
            <Card>
                <Row className='g-0'>
                    <Col md='6'>
                        <img src={img}  alt="" />
                    </Col>
                    <Col md='6'>
                        <Card.Body className='d-flex flex-column'>
                            <h3 className="fw-normal my-4 pb-3 text-center" style={{ letterSpacing: '1px' }}>
                                <b>Login</b></h3>
                            <Form action-="">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control className='p-3 input' type="email" placeholder="Email" required />
                                    <Form.Control className='p-3 mt-3 mb-3 input'  type="password" placeholder="Password" required/>
                                    <Button className="mb-4 signin_button" size='lg'>Login</Button>
                                </Form.Group>
                            </Form>
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default Signin;