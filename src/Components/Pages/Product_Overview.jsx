import './Product_Overview.css'
import AllProducts from './AllProducts';

import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

const ProductOverView = ()=> {
    return(
        <>
        <Container>
        <h2 className="mt-5 mb-4"><b>PRODUCT OVERVIEW</b></h2>
        <Row>
            <Col>
                <Tabs defaultActiveKey="/" 
                    id="controlled-tab-example"
                    className='tabs'
                    >
                
                <Tab eventKey="/" className="" title="All Products">
                <AllProducts />
                </Tab>
                
                <Tab eventKey="//" title="Women">
                {/* <Profile /> */}
                </Tab>
                <Tab eventKey="#" title="Men">
                {/* <Contact /> */}
                </Tab>
               
                <Tab eventKey="///" title="Bag">
                {/* <Contact /> */}
                </Tab>
                <Tab eventKey="../" title="Shoes">
                {/* <Contact /> */}
                </Tab>
                <Tab eventKey="./" title="Watches">
                {/* <Contact /> */}
                </Tab>


            </Tabs>
        </Col>
    </Row>

        </Container> 
        
        </>

    )
}

export default ProductOverView;