function Hero() {
  return (
    
    <div className="">
    <div className="pt-32 pb-16 flex justify-between px-20 bg-black">
    <div className="">
            <h1 className="font-serif text-5xl tracking-widerx text-white">ENCHANTED AROMA</h1>
            <p className="italianno-regular pt-16 pl-8 text-xl text-white">Coffee & Pastry for you</p>
            <div> 
            <img  className="w-[45rem] absolute top-16 left-10" src="../public/images/frame-108.png"/>
            </div>
            <p className="text-xl italic font-light tracking-wider text-white pt-96">COFFFEE & PASTRY, we believe in creating moments of joy with every cup of <br/>
             coffee and every bite of pastry. Our expertly crafted coffees are brewed to <br/>
              perfection, while our pastries are baked fresh daily to ensure you get the finest <br/>
               quality. Whether you're a coffee connoisseur or a pastry lover, our menu has <br/> something special for everyone.</p>
        </div>
        <div className="text-center ">
          <img className="w-[30rem]" src="../public/images/image-1.png"/>
          <p className="font-bold text-sm text-white tracking-wide">For the love of coffee and the joy of pastries,<br/>
          we look forward to welcoming you to our cafe !</p>
          <div className="my-14" >
            <a className="bg-[#B07D4A] text-white px-8 tracking-wider py-3 items-center text-sm font-semibold tracking-wide rounded-full hover:text-black" href="/F">RESERVATION TABLE</a>
          </div>
        </div>
    </div>
       
    </div>
  )
}



export default Hero