import './user.css'
import {Tab, Nav, Row, Col} from 'react-bootstrap'
import Account from './Account'
import Order from './Order'
import Cart from '../Pages/Cart'
import Wishlist from './WishList'
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {ImSearch} from 'react-icons/im'
import {Cart3} from 'react-bootstrap-icons'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineSetting} from 'react-icons/ai'

const Dashboard = ()=>{
    return(
        <>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className='m-0'>
        <Col sm={3} lg={2} className="" style={{height: "100vh", backgroundColor: "#ffeaf6"}}>
        <div className='text-center mt-4'>
        <h4>CRING STORE</h4>
           <h6 className='mt-5'>Adnan Mustafa</h6>
         </div>

          <Nav variant="pills" className="flex-column">
            <div className='p-3 mt-3'>
            <Nav.Item className='nav_item'>  
              <Nav.Link eventKey="first" className='navlink_'><CgProfile color='blue'/> Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className='navlink_'><ImSearch color='green'/>  Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className='navlink_'><Cart3 color='brown'/> Cart</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className='navlink_'><FiHeart color='red'/> Wishlist</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className='navlink_'><AiOutlineSetting/> Setting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth" className='navlink_'>Logout</Nav.Link>
            </Nav.Item>
            </div>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Account />
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <Order />
            </Tab.Pane>

            <Tab.Pane eventKey="third">
            <Cart />
            </Tab.Pane>

            <Tab.Pane eventKey="fourth">
            <Wishlist/>
            </Tab.Pane>

            <Tab.Pane eventKey="fifth">
              
            </Tab.Pane>

            <Tab.Pane eventKey="sixth">
            </Tab.Pane>





            

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

        </>
    )
}

export default Dashboard;