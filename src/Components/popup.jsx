import React from 'react'

function popup() {
  return (
    <div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-black p-4 rounded-md shadow-md">
      <div className="text-center">
        <h2 className="text-xl font-bold">Reservasi Berhasil! Terima kasih!</h2>
        <a className='' href="/F"><img className='mx-40 pt-6' src="../public/images/oke.png" alt="" /></a>
      </div>
    </div>
    </div>
  )
}

export default popup