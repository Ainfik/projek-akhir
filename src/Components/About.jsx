function About() {
  return (
    <div className="">
      <div className="bg-black ">
        <p className="absolute inset-0 tracking-wide mt-32 text-center position-center px-14 font-semibold text-2xl text-white">Welcome to Enchanted Aroma. at Enchanted Aroma. Our menu features a diverse selection of <br />
         meticulously crafted coffee beverages and an array of delectable pastries, all designed to enchant you</p>
        <img className="w-full bg-[#DF753A] pb-1" src="../public/images/bg1.png"/>
        <h1 className="bg-[#DF753A] text-4xl font-light text-white text-center pt-3 pb-5 font-sans-serif">OUR LOCATION</h1>
        <div>
        <img className="mx-auto" src="../public/images/alamat.png" alt=""/>
        </div>
        
        <div>
          <div>
            <p className="text-center py-16 text-6xl font-bold text-white">OUR MENU</p>
            <div>
              <div className="flex text-white justify-around ">
                <div className="items-center text-center">
                  <img className="ml-5" src="../public/images/menu-1.png" alt="menu" />
                  <p className="font-bold text-4xl pt-5 pb-8">COFFEE</p>
                  <p className="text-xl font-thin ">Our skilled baristas use the finest beans to <br />
                   brew each cup, ensuring a rich and flavorful <br />
                   experience with every sip.</p>
                   <div className="mt-10 mb-20">
                   <a className="bg-[#B07D4A] py-3 px-5 rounded-lg text-sm font-bold" href="/D">LEARN MORE</a>
                   </div>
                </div>
                <div className="items-center text-center">
                  <img className="ml-5" src="../public/images/menu-2.png" alt="menu" />
                  <p className="font-bold text-4xl pt-5 pb-8"> NON-COFFEE</p>
                  <p className="text-xl font-thin ">We have a selection of refreshing and <br />
                   indulgent non-coffee drinks.</p>
                   <div className="mt-16 mb-20">
                   <a className="bg-[#B07D4A] py-3 px-5 rounded-lg text-sm font-bold" href="/D2">LEARN MORE</a>
                   </div>
                </div>
                <div className="place-items-center text-center">
                  <img className="ml-5" src="../public/images/menu-3.png" alt="menu" />
                  <p className="font-bold text-4xl pt-5 pb-8">PASTRY</p>
                  <p className="text-xl font-thin ">Our pastries offering the perfect balance of <br />
                   texture and taste to enhance your coffee or <br />
                   non-coffee experience</p>
                   <div className="mt-10 mb-20">
                   <a className="bg-[#B07D4A] py-3 px-5 rounded-lg text-sm font-bold" href="/D3">LEARN MORE</a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-32">
          <img className="mx-auto" src="../public/images/4-star.png" alt="" />
          <p className="text-6xl text-white text-center font-bold pt-6 pb-20">OUR CAFE ALWAYS LEAVES YOU ENCHANTED </p>
        </div>
        <div className="flex justify-between px-10 pb-20">
          <div>
            <img src="../public/images/about-3.png" alt="" />
            <p className="text-white text-center text-xl font-thin pr-[10rem] tracking-wider">Our attractive and sweet <br />
             packaging</p>
          </div>
          <div className="pr-[11rem]">
            <img src="../public/images/about-2.png" alt="" />
            <p className="text-white text-center text-xl font-thin pt-12 tracking-wider">The aroma of coffee and pastries <br />
             that enchants you</p>
          </div>
          <div>
            <img src="../public/images/about-1.png" alt="" />
            <p className="text-white text-center text-xl font-thin pt-14 tracking-wider">Study in our café with peace <br />
             and focus</p>
          </div>
        </div>
        <p className="tracking-wider text-sm font-thin text-white text-center">© 2024 All rights reserved.</p>
      </div>
    </div>

  )
}

export default About