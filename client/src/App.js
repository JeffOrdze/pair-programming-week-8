import Header from "./Components/Header/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OurKitties from "./pages/OurKitties/OurKitties";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/cats" element={<OurKitties/>} />
    </Routes>
    </BrowserRouter>
    );
}

export default App;
