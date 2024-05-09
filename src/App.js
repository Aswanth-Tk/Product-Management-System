import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Formpage from './Formpage';
import Tables from './Tables';
import Loginpage from './Loginpage'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const samplecontext = createContext();

function App() {
  const [hide, sethide] = useState(true)
  const [data, setdata] = useState([])
  
  const [abc, setabc] = useState([])
  const [abcd, setabcd] = useState([])
  const [first, setfirst] = useState()
  const [num, setnum] = useState([])
  const [input, setinput] = useState(
    {
      id: "",
      title: "",
      brand: "",
      category: ""

    }
  )
  const [product, setproduct] = useState([])
  const products = "https://dummyjson.com/products"
  useEffect(() => {
    axios.get(products).then((arg)=>console.log(arg.data.products))
    axios.get(products).then((arg) => { setproduct(arg.data.products) })
    axios.get(products).then((arg) => { setdata(arg.data.products) })
  

  }, [])

  return (
    <div >
      <samplecontext.Provider
        value={{
          hide, sethide,
          num, setnum,
          product, setproduct,
          input, setinput,
          abc,setabc,
          first,setfirst,
          abcd,setabcd,
          data,setdata,
          
        }}>
        <BrowserRouter>
          <Routes >
            <Route path="/form" element={<Formpage />} />
            <Route path="/tables" element={<Tables/>} />
            <Route path="/" element={<Loginpage />} />
          </Routes>
        </BrowserRouter>
      </samplecontext.Provider>
    </div>
  );
}
export default App;
export { samplecontext };
