import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import OurKitties from "./pages/OurKitties/OurKitties";
import MyBox from "./Components/MyBox/MyBox";
import Checkout from "./pages/Checkout/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cats" element={<OurKitties/>} />
      <Route path="/mybox" element={MyBox} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/confirmation" element={<OrderConfirmation/>} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
