import React from 'react'

function Coffee() {
  return (
    
    <div className='bg-black text-white pb-10'>
        <div className='py-24  flex justify-center pb-10'>
                <a onClick="ShowLogin()" className=" text-2xl font-bold hover:bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D">COFFEE</a>
                <a onClick="ShowRegister()" className="mx-28 text-2xl font-bold hover:bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D2">NON COFFEE</a>
                <a className=" text-2xl font-bold bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D3">PASTRIES</a>
        </div>
      <div>
      <img className='mx-auto w-14 bg-white p-4 rounded-full' src="../public/images/Vector.png"/>
      </div>
      <div className='my-20 flex justify-around'>
       <div className='bg-[#B07D4A] text-white px-10 py-4 pr-28 rounded-lg'>
       <div className='flex'>
          <div>
            <img className='w-32' src="../public/images/choco.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Choco Donut</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex pt-4'>
          <div>
            <img className='w-32' src="../public/images/danish.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Danish Pastry</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex pt-4'>
          <div>
            <img className='w-32' src="../public/images/croissant.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Croissant</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       </div>
       <div className='bg-[#B07D4A] text-white px-10 py-4 rounded-lg'>
       <div className='flex'>
         
          <div className='pl-28'>
            <h1 className='font-medium text-2xl pr-2'>Flacky Pastry</h1>
            <p className='text-xs pb-4 pt-12 pl-[5rem]'>Rp.15.000</p>
            <p className='text-xs pl-10'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/flacky.png" alt="" />
          </div>
        </div>
       <div className='flex pt-8'>
          
          <div className='pl-[10rem]'>
            <h1 className='font-medium text-end text-2xl pr-2'>Eclairs</h1>
            <p className='text-xs pb-4 pl-[2.3rem] pt-12 '>Rp.15.000</p>
            <p className='text-xs pr-2 pb-2'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/eclairs.png" alt="" />
          </div>
        </div>
       <div className='flex pt-8'>
         
          <div className='pl-[8.2rem] pb-2'>
            <h1 className='font-medium text-2xl pr-2'>Cream Puff</h1>
            <p className='text-xs pb-4 pt-10 pl-16'>Rp.15.000</p>
            <p className='text-xs pl-7'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/creampuff.png" alt="" />
          </div>
        </div>
       </div>
      </div>
    </div>





  )
}

export default Coffee