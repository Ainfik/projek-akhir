import React from 'react'

function Coffee() {
  return (
    
    <div className='bg-black text-white pb-10'>
        <div className='py-24  flex justify-center pb-10'>
                <a onClick="ShowLogin()" className=" text-2xl font-bold hover:bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D">COFFEE</a>
                <a onClick="ShowRegister()" className="mx-28 text-2xl font-bold bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D2">NON COFFEE</a>
                <a className=" text-2xl font-bold hover:bg-[#B07D4A] px-4 py-2 rounded-lg" href="/D3">PASTRIES</a>
        </div>
      <div>
      <img className='mx-auto w-14 bg-white p-4 rounded-full' src="../public/images/Vector.png"/>
      </div>
      <div className='my-20 flex justify-around'>
       <div className='bg-[#B07D4A] text-white px-10 py-4 pr-28 rounded-lg'>
       <div className='flex'>
          <div>
            <img className='w-32' src="../public/images/coklat.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Chocolate</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex pt-4'>
          <div>
            <img className='w-32' src="../public/images/greentea.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Green Tea <br />Latte</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex pt-4'>
          <div>
            <img className='w-32' src="../public/images/raspberry.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Raspberry <br />Blackcurrant</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       <div className='flex pt-4'>
          <div>
            <img className='w-32' src="../public/images/redvelvet.png" alt="" />
          </div>
          <div className='pl-2'>
            <h1 className='font-medium text-2xl '>Red Velvet</h1>
            <p className='text-xs pb-4 pt-10'>Rp.15.000</p>
            <p className='text-xs'>Available:Hot/Ice</p>
          </div>
        </div>
       </div>
       <div className='bg-[#B07D4A] text-white px-10 py-4 rounded-lg'>
       <div className='flex'>
         
          <div className='pl-28'>
            <h1 className='font-medium text-2xl pr-2'>Matcha Latte</h1>
            <p className='text-xs pb-4 pt-12 pl-[4.5rem]'>Rp.15.000</p>
            <p className='text-xs pl-8'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/matcha.png" alt="" />
          </div>
        </div>
       <div className='flex pt-8'>
          
          <div className='pl-[6.7rem]'>
            <h1 className='font-medium text-end text-2xl pr-2'>Orange Drink</h1>
            <p className='text-xs pb-4 pt-12 pl-20'>Rp.15.000</p>
            <p className='text-xs pl-10 pb-2'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/orange.png" alt="" />
          </div>
        </div>
       <div className='flex pt-8'>
         
          <div className='pl-[8.6rem] pb-2'>
            <h1 className='font-medium text-2xl pr-2'>Lemon Tea</h1>
            <p className='text-xs pb-4 pt-10 pl-12'>Rp.15.000</p>
            <p className='text-xs pl-3'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/lemon.png" alt="" />
          </div>
        </div>
       <div className='flex pt-8'>
         
          <div className='pl-[7.8rem]'>
            <h1 className='font-medium text-end text-2xl pr-2'>Cheese Taro</h1>
            <p className='text-xs pb-4 pt-12 pl-16'>Rp.15.000</p>
            <p className='text-xs pl-7'>Available:Hot/Ice</p>
          </div>
          <div>
            <img className='w-32' src="../public/images/cheesetaro.png" alt="" />
          </div>
        </div>
       </div>
      </div>
    </div>





  )
}

export default Coffee