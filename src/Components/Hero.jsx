function Hero() {
  return (
    <div className="py-20 flex justify-around bg-red-100">
        <div className="">
            <h1 className="font-serif text-3xl tracking-widerx">ENCHANTED AROMA</h1>
            <p className="pt-8 Dancing">Coffee & Pastry for you</p>
            <div> 
            <img  className="w-96" src="../public/images/frame-108.png"/>
            </div>
            <p className="text-xs tracking-wider">COFFFEE & PASTRY, we believe in creating moments of joy with every cup of <br/>
             coffee and every bite of pastry. Our expertly crafted coffees are brewed to <br/>
              perfection, while our pastries are baked fresh daily to ensure you get the finest <br/>
               quality. Whether you're a coffee connoisseur or a pastry lover, our menu has <br/> something special for everyone.</p>
        </div>
        <div className="text-center">
          <img className="w-96 pt-10" src="../public/images/image-1.png"/>
          <p className="font-medium text-sm tracking-wide">For the love of coffee and the joy of pastries,<br/>
          we look forward to welcoming you to our cafe !</p>
          <div className="mt-10" >
            <a className=" bg-black py-2 px-6 text-white rounded-full" href="">ABOUT US</a>
          </div>
        </div>
    </div>
  )
}


export default Hero