import React from 'react'

function Coffee() {
  return (
    
    <div className='bg-black text-white pb-10'>
        <div className='py-24  flex justify-center pb-10'>
                <a onClick="ShowLogin()" className=" text-2xl font-bold bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D">COFFEE</a>
                <a onClick="ShowRegister()" className="mx-28 text-2xl font-bold hover:bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D2">NON COFFEE</a>
                <a className=" text-2xl font-bold hover:bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D3">PASTRIES</a>
        </div>
      <div>
      <img className='mx-auto w-14 bg-white p-4 rounded-full' src="../public/images/Vector.png"/>
      </div>
      <div className='my-20 flex justify-around'>
       <div className='bg-[#B07D4A] text-white px-10 pr-24 py-4 rounded-lg'>
       <div className='flex'>
          <div>
            <img className='w-32' src="../public/images/americano.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Americano</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex'>
          <div>
            <img className='w-32' src="../public/images/cappucino.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Cappucino</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex'>
          <div>
            <img className='w-32' src="../public/images/coffeemilk.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Coffee Milk</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex'>
          <div>
            <img className='w-32' src="../public/images/dalgona.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Dalgona Coffee</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       </div>
       <div className='bg-[#B07D4A] text-white px-10 py-4 rounded-lg'>
       <div className='flex'>
         
          <div className='pl-12'>
            <h1 className='font-medium text-2xl '>Caramel Machiato</h1>
            <p className='text-xs pb-4 pt-12 pl-32'>Rp.15.000</p>
            <p className='text-xs pl-24'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/caramel.png" alt="" />
          </div>
        </div>
       <div className='flex'>
          
          <div className='pl-28'>
            <h1 className='font-medium text-end text-2xl '>Pandan Milk <br />Coffee</h1>
            <p className='text-xs pb-4 pt-5 pl-14'>Rp.15.000</p>
            <p className='text-xs pl-4 pb-2'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/pandan.png" alt="" />
          </div>
        </div>
       <div className='flex'>
         
          <div className='pl-[6.8rem] pb-2'>
            <h1 className='font-medium text-2xl pr-2'>Grande Latte</h1>
            <p className='text-xs pb-4 pt-10 pl-16'>Rp.15.000</p>
            <p className='text-xs pl-7'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-28' src="../public/images/grande.png" alt="" />
          </div>
        </div>
       <div className='flex'>
         
          <div className='pl-[8rem]'>
            <h1 className='font-medium text-end text-2xl pr-2'>Mocca <br />Frappucino</h1>
            <p className='text-xs pb-4 pl-12'>Rp.15.000</p>
            <p className='text-xs pl-3'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-28' src="../public/images/Mocca.png" alt="" />
          </div>
        </div>
       </div>
      </div>
    </div>





  )
}

export default Coffee