import React, { useState } from 'react';
import { useAuth } from '../Components/AuthProvider'; // Periksa pathnya
import { useNavigate } from 'react-router-dom';

export default function NavUser({token}) {
  const { user, logout} = useAuth(); // Ambil data user dan fungsi logout dari konteks
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  // Jika nama pengguna tidak tersedia, gunakan default text
  const userName = user?.user_metadata?.full_name ?? 'Pengguna';
  const email = user?.user_metadata?.email ?? 'Pengguna'; // Ganti dengan user name sesuai dengan data yang ada

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Navigasi ke halaman login setelah logout
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div>
         <div className="fixed bg-white bg-contain flex justify-between py-6 items-center w-full shadow-xl">
        <div className="flex items-center pl-8" >
        <img src="../public/images/Vector.png"/>
            <a className="pl-4 font-serif font-medium tracking-wider text-2xl" href="/">ENCHANTED AROMA</a>
        </div>
            <div className="" >
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/">HOME</a>
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/about">ABOUT US</a>
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/D">MENU</a>
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/F">RESERVATION</a>
                <a className="pl-8 pr-8 text-sm font-bold hover:text-[#926748]" href="/C">CONTACT US</a>
                <a className="pl-8 pr-8 text-sm font-bold hover:text-[#926748]" href="">LOGIN</a>
            </div>
    </div>
    </div>
  )}