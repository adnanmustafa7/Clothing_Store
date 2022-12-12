import React from 'react';
import { useState } from 'react';
import './user.css'
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form
}
from 'react-bootstrap';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';


function Signup() {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
    <Header/>
    <Container fluid>
      <Row className='justify-content-center align-items-center m-3'>
        <Card>
          <Card.Body className='px-3'>
            <Form>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <Row>
            <Col lg={6} md={8}>
            <Row className='p-2'>
              <Col>
              <Form.Control className='p-2 input_field' type="name" placeholder="Full Name" required />                    
              </Col>    
            </Row>

            <Row className='p-2'>
            <Col>
              <Form.Control className='p-2 input_field' type="name" placeholder="Mobile Number" required />
             </Col>
            </Row>
            
            <Row className='p-2'>
              <Col>
              <Form.Control className='p-2 input_field' type="name" placeholder="Email" required />                         
              </Col>
            </Row>

            <Row className='p-2'> 
              <Col>
              <Form.Control className='p-2 input_field' type={passwordShown ? "text" : "password"} placeholder="Password" required />
               </Col>
            </Row>

            <Row className='p-2'>     
              <Col>
              <Form.Control className='p-2 input_field' type={passwordShown ? "text" : "password"} placeholder="Confirm Password" required />
             </Col>
            </Row>

            <Row className='p-2'>     
              <Col>
              <Form.Check label="Show Password" onChange={togglePassword}/>
              </Col>
            </Row>

         </Col>
      </Row>

           <Button className='mb-4 signup_button' size='lg'>Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  <Footer/>
  </>
  );
}

export default Signup;