import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Formpage from './modules/Components/Formpage';
import Tables from './modules/Components/Tables';
import Loginpage from './modules/Components/Loginpage'
import { createContext, useState } from 'react';
import ProductDetails from './modules/Components/ProductDetails';

const samplecontext = createContext();
function App() {
  // const products = "https://dummyjson.com/products"
  // useEffect(() => {
  //   axios.get(products).then((arg)=>console.log(arg.data.products))
  //   axios.get(products).then((arg) => { setproduct(arg.data.products) })
  //   axios.get(products).then((arg) => { setdata(arg.data.products) })
  // }, [])

  return (
    <div >
      <samplecontext.Provider>
        <BrowserRouter>
          <Routes >
            <Route path="/form" element={<Formpage />} />
            <Route path="/products" element={<Tables/>} />
            <Route path="/" element={<Loginpage />} />
           <Route path="/product-details/:id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </samplecontext.Provider>
    </div>
  );
}
export default App;
export { samplecontext };
