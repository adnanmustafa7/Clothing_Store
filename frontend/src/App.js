import './App.css';

import {Routes, Route} from 'react-router-dom'

// Front Page
import Home from './Components/Pages/Home';
// End Front Page

import Signin from './Components/User/Signin';
import Signup from './Components/User/Signup';

import MainUserPanel from './Components/User/MainUserPanel';
import Wishlist from './Components/User/WishList';
import Cart from './Components/Pages/Cart';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Store from './Components/Pages/Store';
import Header from './Components/Pages/Header';


function App() {
  return (
    <div className="">  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/store" element={<Store/>}/>
 
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/mainuserpanel' element={<MainUserPanel/>}/>
    </Routes>
  

   </div>
  );
}

export default App;
