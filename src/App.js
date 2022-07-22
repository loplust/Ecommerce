import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<Product/>}/>
        <Route exact path='/products/:id' element={<ProductDetail/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
