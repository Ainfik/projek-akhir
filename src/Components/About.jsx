function About() {
  return (
    <div className="">
      <div className="py-10 bg-red-100 ">
        <div className="flex items-center justify-center" >
        <img className="w-12" src="../public/images/Vector.png"/>
            <p className="pl-3 font-serif tracking-wider text-5xl ">ENCHANTED AROMA</p>
        </div>
        <div className=" flex justify-around items-center mt-8">
          <div className="">
            <p className="font-medium text-xl tracking-tight">Welcome to Enchanted Aroma. at Enchanted Aroma.<br/>
             Our menu features a diverse selection of meticulously <br/> 
             crafted coffee beverages and an array of delectable <br/> 
             pastries, all designed to enchant you.<br/>
             <br/>
             Whether you're in the mood for a rich espresso, a <br/> 
             creamy latte, or a perfectly brewed pour-over, we have <br/> 
             something to satisfy every coffee lover's palate. Our <br/>
             pastries, baked fresh daily, offer the perfect <br/>
             complement to our drinks.<br/>
             <br/>
             Let us take you to a world where every <br/>
              sip and every bite is a delightful journey. We are committed that every <br/>
               visit to our café is a memorable one.</p>
          </div>
          <div>
            <div className="items-center text-center">
              <img className="w-70 pt-10" src="../public/images/founder.png"/>
              <p className="text-2xl">FOUNDER</p>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-40 ">
            <h1 className="font-serif tracking-wider text-5xl text-center">ENCHANTED AROMA’
            MENU </h1>
          </div>
              <div className="text-center">
                <h1 className="py-10 text-center font-bold text-4xl">COFFEE</h1>
                <img className="w-full" src="../public/images/menu-1.png"/>
                <p className="pt-4 text-2xl">Our coffee menu features a delightful array of choices to satisfy every coffee <br/>
                 lover's palate. Our skilled baristas use the finest beans to brew each cup,<br/>
                 ensuring a rich and flavorful experience with every sip.
                </p>
                <div className="mt-14" >
                  <a className=" bg-black py-4 px-14 text-xl text-white rounded-lg" href="">Our Coffee</a>
                </div>
              </div>  
              <div className="text-center">
                <h1 className="py-10 mt-20 text-center font-bold text-4xl">NON-COFFEE</h1>
                <img className="w-full" src="../public/images/menu-2.png"/>
                <p className="pt-4 text-2xl">We have a selection of refreshing and indulgent non-coffee drinks. Each drink<br/>
                 is meticulously prepared to deliver a delightful and satisfying flavor that will<br/>
                 keep you coming back for more.
                </p>
                <div className="mt-14" >
                  <a className=" bg-black py-4 px-14 text-xl text-white rounded-lg" href="">Our None-Coffee</a>
                </div>
              </div>  
              <div className="text-center">
                <h1 className="py-10 text-center font-bold text-4xl">PASTRIES</h1>
                <img className="w-full" src="../public/images/menu-3.png"/>
                <p className="pt-4 text-2xl">Our pastries are made with high-quality ingredients, offering the perfect<br/>
                 balance of texture and taste to enhance your coffee or non-coffee<br/>
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