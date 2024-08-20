import { AuthProvider } from './Components/AuthProvider';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/about";
import Delivery from "../pages/Delivery";
import Delivery2 from "../pages/Delivery2";
import Delivery3 from "../pages/Delivery3";
import Contact from "../pages/contact";
import FormPage from "../pages/FormPage";
import Popup from "./Components/popup";
import Daftar from "../pages/Daftar";
import { useState, useEffect } from 'react';
import Login from "../pages/Login";

function App() {
  const [token, setToken] = useState(false)
if(token){
sessionStorage.setItem('token',JSON.stringify(token))
}
useEffect(() => {
if(sessionStorage.getItem('token')){
let data = JSON.parse(sessionStorage.getItem('token'))
setToken(data)
}
}, 
[])
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} token={token} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/daftar" element={<Daftar/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/C" element={<Contact />} />
          <Route path="/D" element={<Delivery />} />
          <Route path="/D2" element={<Delivery2 />} />
          <Route path="/D3" element={<Delivery3 />} />
          <Route path="/F" element={<FormPage />} />
          <Route path="/P" element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;