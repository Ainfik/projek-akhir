function Nav() {
  return (
    <div>
         <div className="absolute bg-white bg-contain flex justify-between py-6 items-center w-full shadow-xl">
        <div className="flex items-center pl-8" >
        <img src="../public/images/Vector.png"/>
            <a className="pl-4 font-serif font-medium tracking-wider text-2xl" href="/">ENCHANTED AROMA</a>
        </div>
            <div className="" >
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/">HOME</a>
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/about">ABOUT US</a>
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/D">MENU</a>
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/F">RESERVATION</a>
                <a className="pl-8 text-sm font-bold hover:text-[#926748]" href="/C">CONTACT US</a>
                <a className="pl-8 pr-8 text-sm font-bold hover:text-[#926748]" href="/daftar">LOGIN</a>
            </div>
    </div>
    </div>
  )
}

export default Nav