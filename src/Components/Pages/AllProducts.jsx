import './AllProducts.css'
import React from 'react';
import { Row, Col, Card, Button, Modal, Container, Form, Nav } from "react-bootstrap";
import { FiHeart } from 'react-icons/fi'

import img from '../assets/demo.jpg'
import { Link } from 'react-router-dom';

const ViewProductModal = (props) => {
  return (
    <>
      <Container>
          <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body>
            <Row>
              <Col sm={12} lg={7} className='d-flex box1'>
                <img className='img' src={img} alt=""/>
              </Col>
              <Col lg={5} className=''>
                <div>
                <h3>Watch </h3>
                <h5>Price $140</h5>
                <p>Best in condition and water profe with more than 6 years warrenty </p>
                </div>
             <div>
              

                   <Form.Select className='w-50'>
                      <option>Select Size</option>
                      <option value="2xl">2xl</option>
                      <option value="xl">xl</option>
                      <option value="large">large</option>
                      <option value="Medium">Medium</option>
                      <option value="Small">Small</option>
                   </Form.Select>

                   <Form.Select className='w-50 mt-2'>
                      <option >Select Color</option>
                      <option value="red">Red</option>
                      <option value="white">White</option>
                      <option value="black">Black</option>
                      <option value="pink">Pink</option>
                      <option value="Orange">Orange</option>
                   </Form.Select>

                      </div>
                      <div className='m-2'>
                      <input 
                      type="number" 
                      min="0"
                      max="50" 
                      defaultValue={1} 
                      size="1" 
                      id='number'
                      />
               </div>

                <div className='mt-5'>
                <Nav.Link as={Link} to="/cart">
                <Button className='p-2 button' >Add to Cart</Button>
                </Nav.Link>
                </div>
              
              </Col>
            </Row>
            </Modal.Body>
          </Modal>
      
      </Container>
    </>
  )
}


const AllProducts = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Row className='d-flex justify-content-evenly'>
        <Col lg={3} md={5} sm={12}>
          <Card className="mt-5" style={{}}>
            <Card.Img variant="top" className='img' src={img} />
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Text className="text-muted">
                  Watch
                </Card.Text>
                <FiHeart />
              </div>
              <Card.Text className="">
                <span className="text-danger">$</span>140
              </Card.Text>
            </Card.Body>
            <Button className='button' onClick={() => setModalShow(true)}>View</Button>
            <ViewProductModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card>
        </Col>
      </Row>
    </>
  );

}

export default AllProducts;