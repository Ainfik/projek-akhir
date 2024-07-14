import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About1 from "../pages/About1";
import ContactUs from "./Components/ContactUs";
import Delivery from "../pages/Delivery";
import Delivery2 from "../pages/Delivery2";
import Delivery3 from "../pages/Delivery3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/C" element={<ContactUs />} />
          <Route path="/D" element={<Delivery />} />
          <Route path="/D2" element={<Delivery2 />} />
          <Route path="/D3" element={<Delivery3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;