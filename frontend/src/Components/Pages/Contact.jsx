import PageInfo from "./PageInfo";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { VscLocation } from "react-icons/vsc";
import {BsTelephone } from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import "./contact.css"

import Header from "./Header";
import Footer from "./Footer";


const Contact = () => {
  return (
    <>
    <Header/>
      <PageInfo title="Contact" />
      <Container>
        <Row className="pt-40">
          <Col sm={12} md={6} lg={6}> 
            <Form>
              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control className="input" type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control className="input" as="textarea" rows={5} />
              </Form.Group>
              <Button>Submit</Button>
            </Form>
          </Col>
          <Col sm={12} md={6} lg={6} className="pt-20">
            <Row>
                <Col sm={1} md={1} lg={1} className="icon-center"><VscLocation className="icon-size"/></Col>
                <Col sm={11} md={11} lg={11}><h4>Address</h4> <h6 className="text-muted line-h">Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</h6></Col>
            </Row>
            <Row className="mt-3">
                <Col sm={1} md={1} lg={1} className="icon-center" ><BsTelephone className="icon-size"/></Col>
                <Col sm={11} md={11} lg={11}><h4>Lets Talk</h4> <h6 className="text-muted line-h">+1 800 1236879</h6></Col>
            </Row>
            <Row className="mt-3">
                <Col sm={1} md={1} lg={1} className="icon-center"><AiOutlineMail className="icon-size"/></Col>
                <Col sm={11} md={11} lg={11}><h4>Sale Support</h4> <h6 className="text-muted line-h">contact@example.com</h6></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Contact;
