import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';


export default function ForgotPassword() {

  //react hook to save the entire string 
  const [email, setEmail] = useState("");


  //function to read email and password
  function onChange(e) {
    setEmail(e.target.value);
  }

  //logic for resetting password

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("email sent");

    } catch (error) {
      toast.error("email address not found")
    }
  }



  return (
    <div>
      <h1 className='text-3xl text-center mt-6 font-bold leckerli-one-regular  '>
        Forgot Password
      </h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ' >
          <img src='https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=900&t=st=1710340648~exp=1710341248~hmac=ea7e19299e33464af41b1b0a2837f88cd12a351369c47b806822e885a7a1b301'
            alt='logo' className='w-full rounded-2xl'></img>
        </div>

        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='enter your email'
              className='w-full mb-6 px-4 py-2 text-xl text-gray-600 bg-white border-gray-300 rounded
              transition ease-in-out'

            ></input>

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg '>
              <p>New user?
                <Link to={"/sign-up"} className='text-red-600 hover:text-red-800
                transition duration-200 ease-in-out ml-1'> Register Here</Link>
              </p>
              <p>
                <Link to={"/sign-in"} className='text-blue-600 hover:text-blue-800
                transition duration-200 ease-in-out ml-1'>
                  LogIn instead?
                </Link>
              </p>
            </div>




            <div className='py-4'>
              <button className='w-full bg-blue-600 text-white px-7 py-3
              text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700
              transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>
                reset password
              </button>
              <div className='flex items-center mt-4
            before:border-t before:flex-1 before: border-gray-300 
            after:border-t after:flex-1 after:border-gray-300 '>
                <p className='text-center font-semibold mx-4'>
                  OR
                </p>

              </div>
            </div>

            <OAuth />

          </form>

        </div>
      </div>
    </div >



  )
}
