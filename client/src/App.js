import Header from "./Components/Header/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OurKitties from "./pages/OurKitties/OurKitties";
import Checkout from "./pages/Checkout/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cats" element={<OurKitties/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/confirmation" element={<OrderConfirmation/>} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
