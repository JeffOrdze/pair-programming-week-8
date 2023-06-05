import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import OurKitties from "./pages/OurKitties/OurKitties";
import MyBoxPage from "./pages/MyBoxPage/MyBoxPage";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutShipping from "./Components/CheckoutShipping/CheckoutShipping";
import Payment from "./Components/Payment/Payment";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import "./App.scss";

function App() {

const [getCat, setGetCat] = useState([])
const [addCat, setAddCat] = useState(false)

const clickHandler = (e) => { 
  const getCat = async () => { 
    try { 
      const clickedCat = await axios.get(`http://localhost:8080/cats/checkout/${e.target.value}`)
      setGetCat(clickedCat)
      setAddCat(true)
    } catch(error) { 
      console.log(error)
    }
  }
  getCat()
}

  return (
    <BrowserRouter>
    <Header state={getCat} />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cats" element={<OurKitties confirmation={addCat} state={getCat} click={clickHandler}/>} />
      <Route path="/mybox" element={<MyBoxPage state={getCat}/>}/>
      <Route path="/checkout" element={<Checkout/>} >
        <Route path="shipping" element={<CheckoutShipping/>} />
        <Route path="payment" element={<Payment/>} />
      </Route>
      <Route path="/confirmation" element={<OrderConfirmation/>} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
