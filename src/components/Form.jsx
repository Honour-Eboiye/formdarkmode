import React from 'react'
import { BiMoon } from 'react-icons/bi'

const Form = () => {
  return (
    <div className='w-screen h-screen bg-gray-100  dark:bg-black'>
      <BiMoon ></BiMoon>
      <div className='bg-white flex flex-col items-center justify-center shadow-md w-[370px] text-black mx-auto gap-2 my-10 custom-border p-2 dark:bg-gray-900 sm:w-[400px] p-4'>
        <h3 className='font-semibold text-sm sm:text-base dark:text-white'>MynaUI</h3>
        <h3 className='font-semibold text-sm sm:text-base dark:text-white'>Create an Account</h3>
        <p className='text-xs text-gray-500 sm:text-sm'>Get started with MynaUI today</p>

        <form className='custom-border py-3 px-2 w-full gap-3 flex flex-col bg-white dark:text-white dark:bg-black'>
          <div className='w-full flex gap-2'>
            <button className="w-full py-1 px-2 text-bold text-xs custom-border cursor-pointer sm:text-sm  dark:bg-gray-900">Google</button>
            <button className="w-full py-1 px-2 text-bold text-xs custom-border cursor-pointer w-full sm:text-sm  dark:bg-gray-900">GitHub</button>
          </div>

          <p className='text-xs text-gray-500 flex mx-auto sm:text-sm'>----------------- Or Continue with -----------------</p>

          <div>
            <label htmlFor="email" className='text-xs text-bold sm:text-sm'>Email</label>
            <input type="text" id='email'className='w-full custom-border h-7 px-2 text-xs sm:h-8 dark:bg-gray-900'/>
          </div>

          <div>
            <label htmlFor="password" className='text-xs text-bold sm:text-sm'>New Password</label>
            <input type="password" id='password'className='w-full custom-border h-7 px-2 text-xs sm:h-8 dark:bg-gray-900'/>
            <small className='text-gray-400'></small>
          </div>

          <div>
            <label htmlFor="confirm" className='text-xs text-bold sm:text-sm'>Confirm Password</label>
            <input type="password" id='confirm'className='w-full custom-border h-7 px-2 text-xs sm:h-8 dark:bg-gray-900'/>
          </div>

          <button className='w-full bg-orange-500 rounded-sm text-white text-xs px-2 py-1 cursor-pointer sm:text-sm h-8'>
            Create Account
          </button>
        </form>
        <div className='flex mx-auto'>
          <p className='text-xs sm:text-sm dark:text-white'>Already have an account <a href="#"className='underline'>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Form