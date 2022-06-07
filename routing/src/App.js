import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { Routes, Route } from "react-router-dom"
import CheckHere from './components/CheckHere';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='products/*' element={<Products />}>
          <Route path=':id' element={<Product />}></Route>

        </Route>


      </Routes>
      <CheckHere />
      {/* <About/>
      <Home/>
      <Products/>
      <Product/> */}


    </div>
  );
}

export default App;
