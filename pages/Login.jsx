import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { supabase } from '../src/client';




export default function Login({setToken}) {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }
  async function handleSubmit(e){
    e.preventDefault()
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/')
      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='pt-20 text-center'>
      <div>
      <img className='mx-auto' src="../public/images/Vector.png"/>
      </div>
      <div>
        <p className='text-3xl font-bold tracking-wider pt-2'>LOGIN</p>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
      <div className='flex items-center justify-center pt-20'>
        <input 
          placeholder='FullName'
          name='FullName'
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
          name='Password'
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
    </div>
  )
}