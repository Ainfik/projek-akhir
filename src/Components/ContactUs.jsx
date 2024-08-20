function ContactUs() {
  return (

    <div className="bg-black ">
        
        <div className="flex justify-between pt-24 px-6 text-white">
            <div className="">
            <p className="font-bold text-xl">OFFICE</p>
        <p className="text-sm ">Jln Merpati II No.21, Semarang, Jawa Tengah <br/>
        Telp. +6287954378</p>

        <p className="font-bold text-xl pt-4">OPENING HOURS :</p>
        <p className="text-sm ">Monday - Friday: 7:00 AM - 9:00 PM <br />Saturday - Sunday: 8:00 AM - 10:00 PM</p>
            </div>
            <div>
            <h1 className="flex items-center font-serif text-3xl tracking-widerx pl-2"><img className="w-10 pr-2" src="../public/images/Vector.png"/>ENCHANTED AROMA</h1>
            </div>   
        </div>
        <div className="mt-20 flex justify-around mb-8">
            <img src="../public/images/contact-1.png" alt="" />
            <img src="../public/images/contact-2.png" alt="" />
            <img src="../public/images/contact-3.png" alt="" />
        </div>
        <div className="text-center items-center">
        <p className="text-[#926748] text-2xl tracking-wider font-medium">We’d love to hear from you! Whether you have questions, feedback, or just want
        to say hello, <br /> feel free to reach out to us. Here’s how you can get in touch:</p>
        <hr class="w-7/12 h-px mx-auto my-8 border-0 px-20 dark:bg-black"></hr>
            <p className="text-[#926748] text-3xl font-medium">FIND US AND EXPLORE TO SEE OUR ACTIVITIES ON :</p>
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