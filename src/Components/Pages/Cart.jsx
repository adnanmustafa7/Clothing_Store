import './cart.css'

import {
    Container,
    Row,
    Col,
    Card,
    Button
    
  } from "react-bootstrap";

  import {AiFillDelete} from 'react-icons/ai'
  import {TiPlus, TiMinus} from 'react-icons/ti'
  import {IoChevronBack} from 'react-icons/io5'

  

const Cart = ()=>{
    return(
        <>
 <Container className="py-5 h-100">
    <Row className="justify-content-center align-items-center h-100">
      <Col size="12">
        <Card style={{ borderRadius: "15px" }}>
          <Card.Body className="p-0">
            <Row className="g-0">
              <Col>
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h3 className="fw-bold mb-0 text-black m-auto">
                      Product Cart
                    </h3>
                    <h6 className="mb-0 text-muted">
                      To be Counted
                    </h6>
                  </div>

                  <hr className="my-4" />

                  <Row className="mb-4 d-flex justify-content-between align-items-center">
                    <Col md="2" lg="2" xl="2">
                      <Card.Img
                        src="https://www.nationwideschooluniforms.co.uk/media/catalog/product/cache/54c59be51cb703524e3aec1c08ad23d8/p/l/plain_red_tshirt_6.png"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </Col>
                    <Col md="3" lg="3" xl="3">
                      <span className="text-muted font">
                        Shirt
                      </span>
                      <h5 className="text-black mb-0">
                        Cotton T-shirt
                      </h5>
                    </Col>
                    <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                    
                    <Button className="p-1 button_color">
                    <TiMinus size={20}/>
                    </Button>
                      
                      <input 
                      type="number" 
                      min="0"
                      max="50" 
                      defaultValue={1} 
                      size="1" 
                      id='number'
                      />

                    <Button  className="p-1 button_color">
                     <TiPlus size={20}/>
                    </Button>

                    </Col>
                    <Col md="3" lg="2" xl="2" className="text-end">
                      <span className="mb-0 font">
                        <b><span className='text-danger'>$</span>44.00</b>
                      </span>
                    </Col>
                    <Col md="1" lg="1" xl="1" className="text-end">
                      <a href="#/" className="text-muted">
                      <AiFillDelete color='red' size={25}/>
                      </a>
                    </Col>
                  </Row>
                  <hr className="my-4" />
                    
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <span tag="h5" className="fw-bold mb-0">
                        Total Price:
                      </span>
                      <span tag="h5" className="fw-bold mb-0">
                        <span className='text-danger'>$</span>2261
                      </span>
                    </div>
                    <hr className="my-4" />

                    <a href="#!" className='back_link'>
                    <IoChevronBack/>Back to Shopping
                    </a>

                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
     
    </>

    );
}

export default Cart;