function Form() {
  return (
    <div className="">
        <div className="py-28 flex justify-between px-10" >
          <div>
          <div className="">
                <p className="text-4xl font-bold font-sans pb-6">RESERVASI</p>
                <p className="font-bold text-xl">Please fill in the form below accurately so that we <br /> can serve you well! </p>
                </div>
                <section className=" booking pt-14">
              <form className="">
                <div className=" ">
                  <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nama:
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan Nama Anda"
                      name="name"
                      className="w-full text-gray-700 border border-black rounded py-3 px-4"
                    />
                  </div>
                  <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      placeholder="Masukan Email Anda"
                      name="email"
                      className="w-full bg-none text-gray-700 border border-black rounded py-3 px-4"
                    />
                  </div>
                 
                  <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      NO HANDPHONE:
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan Alamat Anda"
                      name="address"
                      className="w-full bg-none text-gray-700 border border-black rounded py-3 px-4"
                    />
                  </div>

                  <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      JUMLAH TAMU:
                    </label>
                    <input
                      type="number"
                      placeholder="Masukan Nomor Anda"
                      name="phone"
                      className="w-full bg-none text-gray-700 border border-black rounded py-3 px-4"
                    />
                  </div>

                  <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      TANGGAL RESERVASI:
                    </label>
                    <input
                      type="date"
                      name="arrivals"
                      className="w-full bg-none text-gray-700 border border-black rounded py-3 px-4"
                    />
                  </div>

                  <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    ADA PERMINTAAN KHUSUS?
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="address"
                      className="w-full bg-none text-gray-700 border border-black rounded pb-20 pt-4 px-4"
                    />
                  </div>
                </div>
                <a
                  type="submit"
                  value="Kirim"
                  className="bg-black hover:bg-[#926748] text-white font-bold py-2 px-10 rounded-lg"
                  href="/P"
                >
                  Kirim
                </a>
              </form>
            </section>
            
          </div>
            
            
            <div>
            <p className="text-3xl font-normal pl-20">Secure Your Spot at Enchanted Aroma! Reserve <br />
            Your Table Today for a Magical Dining <br />
            Experience.</p>
            <img className="pt-[18rem] pl-[24rem]" src="../public/images/bg-contact.png" alt="" />
          </div>
          </div>
          
        </div>
        )}
export default Form