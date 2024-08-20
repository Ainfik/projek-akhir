import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../src/client';

export default function Daftar() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name.toLowerCase()]: event.target.value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='pt-20 text-center'>
      <div>
        <img className='mx-auto' src="../public/images/Vector.png" />
      </div>
      <div>
        <p className='text-3xl font-bold tracking-wider pt-2'>REGISTER</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center justify-center pt-20'>
            <input
              placeholder='FullName'
              name='fullName'
              className="text-center bg-none text-gray-700 border border-black rounded py-3 px-20"
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center justify-center pt-4'>
            <input
              placeholder='Email'
              name='email'
              className="text-center bg-none text-gray-700 border border-black rounded py-3 px-20"
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center justify-center pt-4'>
            <input
              placeholder='Password'
              name='password'
              type='password'
              className="text-center bg-none text-gray-700 border border-black rounded py-3 px-20"
              onChange={handleChange}
            />
          </div>

          <div className='pt-8'>
            <button
              className=' text-white bg-black hover:bg-[#926748] rounded-full py-2 px-20'
              type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>

      Already have an account? <br /><Link to='/login'>Login</Link>
    </div>
  )
};