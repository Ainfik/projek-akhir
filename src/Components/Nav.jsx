function Nav() {
  return (
    <div className="flex justify-between bg-white py-6 px-4 shadow-xl">
        <div className="flex items-center justify start pl-8" >
        <img src="../public/images/Vector.png"/>
            <a className="pl-4 font-serif tracking-wider" href="">ENCHANTED AROMA</a>
        </div>
            <div >
                <a className="pl-8 text-sm hover:text-amber-800" href="">HOME</a>
                <a className="pl-8 text-sm hover:text-amber-800" href="About">ABOUT US</a>
                <a className="pl-8 text-sm hover:text-amber-800" href="">MENU</a>
                <a className="pl-8 text-sm hover:text-amber-800" href="">CONTACT US</a>
            </div>
    </div>
  )
}

export default Nav