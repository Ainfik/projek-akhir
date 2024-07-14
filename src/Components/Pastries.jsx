import React from 'react'

function Pastries() {
  return (
    <div className='py-24 bg-red-100'>
        <div className='flex justify-center pb-10'>
                <a onClick="ShowLogin()" className=" text-2xl font-bold  hover:bg-[#C7B3B3] px-4 py-2 rounded-lg" href="/D">COFFEE</a>
                <a onClick="ShowRegister()" className="mx-28 text-2xl font-bold hover:bg-[#C7B3B3] px-4 py-2 rounded-lg" href="/D2">NON COFFEE</a>
                <a className=" text-2xl font-bold bg-[#C7B3B3] px-4 py-2 rounded-lg" href="/D3">PASTRIES</a>
        </div>
        <div id='coffee' className='' >
            <div className="flex justify-around px-80">
            <div className="card-menu border bg-white rounded-xl py-6 px-6 m-4 shadow-xl">
          <img className="w-50 mx-auto" src="../public/images/croissant.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Croissant</h1>
            <p className='text-xs font-thin'>Available</p>
            <p className="font-bold text-sm">Rp.</p>
          </div>
          <div>
          <img className="w-50 mx-auto" src="../public/images/button.png" alt="" />
          </div>
            </div>  
        </div>
        <div className="card-menu border bg-white rounded-xl py-6 px-6 m-4 shadow-xl">
          <img className="w-50 mx-auto" src="../public/images/flacky.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Flaky Pastry</h1>
            <p className='text-xs font-thin'>Available</p>
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
          <img className="w-50 mx-auto" src="../public/images/danish.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Danish Pastry</h1>
            <p className='text-xs font-thin'>Available</p>
            <p className="font-bold text-sm">Rp.</p>
          </div>
          <div>
          <img className="w-50 mx-auto" src="../public/images/button.png" alt="" />
          </div>
            </div>  
        </div>
        <div className="card-menu border bg-white rounded-xl py-6 px-6 m-4 shadow-xl">
          <img className="w-50 mx-auto" src="../public/images/eclairs.png" alt="" />
            <div className='flex justify-between items-end'>
            <div className="description mt-4">
            <h1 className="text-lg font-bold">Éclairs</h1>
            <p className='text-xs font-thin'>Available</p>
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

export default Pastries