import React from 'react'

function Coffee() {
  return (
    <div className='py-24 bg-red-100'>
        <div className='flex justify-center pb-10'>
                <a className=" text-2xl font-bold hover:bg-[#C7B3B3] px-4 py-2 rounded-lg" href="">COFFEE</a>
                <a className="mx-28 text-2xl font-bold hover:bg-[#C7B3B3] px-4 py-2 rounded-lg" href="">NON COFFEE</a>
                <a className=" text-2xl font-bold hover:bg-[#C7B3B3] px-4 py-2 rounded-lg" href="">PASTRIES</a>
        </div>
        <div >
            <div className="flex justify-around px-80">
            <div className="card-menu border bg-white rounded-xl py-6 px-6 m-4 shadow-xl">
          <img className="w-50 mx-auto" src="../public/images/americano.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Americano</h1>
            <p className='text-xs font-thin'>Available : Hot/Iced</p>
            <p className="font-bold text-sm">Rp.</p>
          </div>
          <div>
          <img className="w-50 mx-auto" src="../public/images/button.png" alt="" />
          </div>
            </div>  
        </div>
        <div className="card-menu border bg-white rounded-xl py-6 px-6 m-4 shadow-xl">
          <img className="w-50 mx-auto" src="../public/images/caramel.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Caramel Macchiato</h1>
            <p className='text-xs font-thin'>Available : Hot/Iced</p>
            <p className="font-bold text-sm">Rp.</p>
          </div>
          <div>
          <img className="w-50 mx-auto" src="../public/images/button.png" alt="" />
          </div>
            </div>  
        </div>
            </div>

            <div className="flex justify-around px-80 py-10">
            <div className="card-menu border bg-white rounded-xl py-6 px-6 m-4 shadow-xl">
          <img className="w-50 mx-auto" src="../public/images/cappucino.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Cappucino</h1>
            <p className='text-xs font-thin'>Available : Hot/Iced</p>
            <p className="font-bold text-sm">Rp.</p>
          </div>
          <div>
          <img className="w-50 mx-auto" src="../public/images/button.png" alt="" />
          </div>
            </div>  
        </div>
        <div className="card-menu border bg-white rounded-xl py-6 px-6 m-4 shadow-xl">
          <img className="w-50 mx-auto" src="../public/images/pandan.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Pandan Milk Coffee</h1>
            <p className='text-xs font-thin'>Available : Hot/Iced</p>
            <p className="font-bold text-sm">Rp.</p>
          </div>
          <div>
          <img className="w-50 mx-auto" src="../public/images/button.png" alt="" />
          </div>
            </div>  
        </div>
            </div>

            <div className='flex justify-center'>
            <a className="ml-20 flex text-white items-center text-2xl font-bold bg-black px-4 py-2 rounded-lg" href=""><img className="w-6 h-6 mr-2" src="../public/images/keranjang.png"/>Harga Sementara</a>
            <a className="ml-28 mx-28 text-white text-2xl font-bold bg-black px-20 py-2 rounded-lg" href="">Next</a>
            </div>
            
    </div>
    </div>
  )
}

export default Coffee