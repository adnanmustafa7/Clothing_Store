import { Row, Col, Container, Button } from "react-bootstrap";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import Form from "react-bootstrap/Form";

function EmailInput() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    </Form>
  );
}

function ListItems(props) {
  return (
    <>
      <h4 className="footer-text-heading">{props.heading}</h4>
      <ul>
        <li className="p-b-10 footer-list-text">{props.item1}</li>
        <li className="p-b-10 footer-list-text">{props.item2}</li>
        <li className="p-b-10 footer-list-text">{props.item3}</li>
        <li className="p-b-10 footer-list-text">{props.item4}</li>
      </ul>
    </>
  );
}

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <Container>
          <Row className=" text-syle d-flex justify-content-evenly">
            <Col sm={12} md={6} lg={3}>
              <ListItems
                heading="categories"
                item1="Women"
                item2="Men"
                item3="Shoes"
                item4="Watches"
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <ListItems
                heading="help"
                item1="Track Order"
                item2="Returns"
                item3="Shipping"
                item4="FAQs"
              />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h4 className="footer-text-heading">GET IN TOUCH</h4>
              <p className="p-b-10 footer-list-text">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
              <p>
                <a href="https://facebook.com" className="icon-padding">
                  <BsFacebook color="#BBB09B" />
                </a>
                <a href="https://instagram.com" className="icon-padding">
                  <BsInstagram color="#BBB09B" />
                </a>
                <a href="https://twitter.com" className="icon-padding">
                  <BsTwitter color="#BBB09B" />
                </a>
              </p>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h4 className="footer-text-heading">Newsletter</h4>
              <p>
                <EmailInput />
              </p>
              <Button as="input" type="submit" value="Submit" />{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="p-t-40 footer-copyright">
                Copyright ©2022 All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
