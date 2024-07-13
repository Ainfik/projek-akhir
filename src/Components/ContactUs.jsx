function ContactUs() {
  return (
    <div className="pt-20">
        <div className="flex justify-between px-6">
            <div className="">
            <p className="font-bold text-xl">OFFICIAL</p>
        <p className="text-sm ">Jln Merpati II No.21, Semarang, Jawa Tengah <br/>
        Telp. +6287954378</p>

        <p className="font-bold text-xl pt-4">DELIVERY ORDER</p>
        <p className="text-sm ">+6287954390</p>
            </div>
            <div>
            <h1 className="font-serif text-3xl tracking-widerx text-[#696969]">ENCHANTED AROMA</h1>
            </div>   
        </div>
        <div className="text-center items-center">
        <p className="text-[#696969] text-xl font-medium">WE LOOK FORWARD TO WELCOMING YOU TO OUR CAFE</p>
        <hr class="w-7/12 h-px mx-auto my-8 border-0 px-20 dark:bg-black"></hr>
            <p className="text-[#696969] text-3xl font-medium">FIND US AND EXPLORE TO SEE OUR ACTIVITIES ON :</p>
        </div>
        <div className="flex justify-around pt-20 items-center px-80 ml-10 ">
            <a className="" href=""><img className="w-24 pt-2" src="../public/images/ig.png"/></a>
            <a className="" href=""><img className="w-24" src="../public/images/x.png"/></a>
            <a className="" href=""><img className="w-36 pt-3" src="../public/images/email.png"/></a>
        </div>
        <p className="text-xs py-10 text-center text-[#696969]">© 2024 All rights reserved.</p>
        
    </div>
    
  )
}

export default ContactUs