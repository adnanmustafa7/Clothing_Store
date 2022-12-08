import './App.css';
import Header from './Components/Pages/Header';
import Slider from './Components/Pages/Slider';
import ProductOverView from './Components/Pages/Product_Overview';
import Signin from './Components/User/Signin';
import Signup from './Components/User/Signup';

import MainUserPanel from './Components/User/MainUserPanel';
import Wishlist from './Components/User/WishList';
import Cart from './Components/Pages/Cart';



function App() {
  return (
    <div className="">
    <Header/>  
    <Slider/>

    <ProductOverView/>
   </div>
  );
}

export default App;
