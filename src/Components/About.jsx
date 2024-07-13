function About() {
  return (
    <div className="">
      <div className="bg-red-100 ">
        <img className="w-full bg-[#424242] pb-1" src="../public/images/bg1.png"/>
        <h1 className="bg-[#424242] text-4xl font-light text-white text-center pt-2 pb-5 font-sans-serif">OUR LOCATION</h1>
        <div className="mt-3 px-96 ">
        <img src="../public/images/alamat.png" alt=""/>
        </div>
        
        
        
        <div className="pb-10">
          <div className="pt-40 ">
            <h1 className="font-serif tracking-wider text-5xl text-center">ENCHANTED AROMA’
              MENU </h1>
          </div>
          <div className="text-center">
            <h1 className="py-10 mt-20 text-center font-bold text-4xl">COFFEE</h1>
            <img className="w-full" src="../public/images/menu-1.png" />
            <p className="pt-4 text-2xl">Our coffee menu features a delightful array of choices to satisfy every coffee <br />
              lover's palate. Our skilled baristas use the finest beans to brew each cup,<br />
              ensuring a rich and flavorful experience with every sip.
            </p>
            <div className="mt-14" >
              <a className=" bg-black py-4 px-14 text-xl text-white rounded-lg" href="">Our Coffee</a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="py-10 mt-20 text-center font-bold text-4xl">NON-COFFEE</h1>
            <img className="w-full" src="../public/images/menu-2.png" />
            <p className="pt-4 text-2xl">We have a selection of refreshing and indulgent non-coffee drinks. Each drink<br />
              is meticulously prepared to deliver a delightful and satisfying flavor that will<br />
              keep you coming back for more.
            </p>
            <div className="mt-14 " >
              <a className=" bg-black py-4 px-14 text-xl text-white rounded-lg" href="">Our None-Coffee</a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="py-10 mt-20 text-center font-bold text-4xl">PASTRIES</h1>
            <img className="w-full" src="../public/images/menu-3.png" />
            <p className="pt-4 text-2xl">Our pastries are made with high-quality ingredients, offering the perfect<br />
              balance of texture and taste to enhance your coffee or non-coffee<br />
              experience
            </p>
            <div className="mt-14" >
              <a className=" bg-black py-4 px-14 text-xl text-white rounded-lg" href="">Our Pastries</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About