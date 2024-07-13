import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About1 from "../pages/About1";
import ContactUs from "./Components/ContactUs";
import Delivery from "../pages/Delivery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/C" element={<ContactUs />} />
          <Route path="/D" element={<Delivery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;