import './header.css'
import About from './About';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import {Cart3} from 'react-bootstrap-icons'
import {FiHeart} from 'react-icons/fi'
import {Link} from 'react-router-dom';

function Header() {
  return (
  <>
   <Navbar className='navbar1' bg="dark">
    <Container>
    <Navbar.Text><span className='text-secondary small'>
      Free shipping for standard order over $100</span></Navbar.Text>
    </Container>
  </Navbar>

    <Navbar bg="" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/"><h3>CRING STORE</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0" >  
            <Nav.Link as={Link} to="/" className='main_nav' active>Home</Nav.Link>
            <Nav.Link as={Link} to="/store" className='main_nav'>Store</Nav.Link>
            <Nav.Link as={Link} to="#" className='main_nav'>Features</Nav.Link>
            <Nav.Link as={Link} to="/about" className='main_nav'>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='main_nav'>Contact</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
          </Form>
         <div className='d-flex'>
         <Nav.Link as={Link} to="/cart" className="icone"><Cart3 size={30} /></Nav.Link>
         <Nav.Link as={Link} to="/wishlist" className='navlink icone'><FiHeart size={30}/></Nav.Link>
         <Nav.Link as={Link} to="/login" className='nav_login'>Login</Nav.Link>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;