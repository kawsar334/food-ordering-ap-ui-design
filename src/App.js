import logo from './logo.svg';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/details/Details';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Details />} />
        <Route path='/cart' element={<Cart />} />


      </Routes>
     
    </div>
  );
}

export default App;
