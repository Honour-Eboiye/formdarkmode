import React, {useState} from 'react'
import DisplayMode from './DisplayMode'

const Form = ({identity}) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm: "",
  })
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormData({
      email: "",
      password: "",
      confirm: "",
    })

    //BLANK INPUT CHECK
    if(formData.email ===""){
      setEmailError("This field cannot be blank")
    }else{
      setEmailError("")
    }
    if(formData.password ===""){
      setPasswordError("This field cannot be blank")
    }else{
      setPasswordError("")
    }
    if(formData.confirm ===""){
      setConfirmError("This field cannot be blank")
    }else{
      setConfirmError("")
    }
  }
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Minimum eight characters, at least one letter, one number and one special character
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleFormData = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value});

    if(name === "email"){
      if(!emailRegex.test(value)){
        setEmailError("Enter a valid email address")
      }else{
        setEmailError("");
      }
    }else if(name === "password"){
      if(!passwordRegex.test(value)){
        setPasswordError("Password must be 8 characters long and contain at least one digit, one letter, and one special character");
      }else{
        setPasswordError("")
      }
    }else{
      if(value !== formData.password){
        setConfirmError("Passwords do not match");
      }else{
        setConfirmError("")
      }
    }
  }

  return (
    <div className='w-screen h-full bg-gray-100  flex flex-col dark:bg-black'>
      <div className='flex justify-end pr-4 pt-4'>
        <DisplayMode info={identity} ></DisplayMode>
      </div>
      <div className='bg-white flex flex-col items-center justify-center shadow-md w-[350px] text-black mx-auto gap-2 my-10 custom-border p-2 dark:bg-gray-900 sm:w-[400px] p-4'>
        <h3 className='font-semibold text-sm sm:text-base dark:text-white'>MynaUI</h3>
        <h3 className='font-semibold text-sm sm:text-base dark:text-white'>Create an Account</h3>
        <p className='text-xs text-gray-500 sm:text-sm'>Get started with MynaUI today</p>

        <form onSubmit={handleSubmit} className='custom-border py-3 px-2 w-full gap-3 flex flex-col bg-white dark:text-white dark:bg-black'>
          <div className='w-full flex gap-2'>
            <button className="w-full py-1 px-2 text-bold text-xs custom-border cursor-pointer sm:text-sm  dark:bg-gray-900">Google</button>
            <button className="w-full py-1 px-2 text-bold text-xs custom-border cursor-pointer w-full sm:text-sm  dark:bg-gray-900">GitHub</button>
          </div>

          <p className='text-xs text-gray-500 flex mx-auto sm:text-sm'>----------------- Or Continue with -----------------</p>

          <div>
            <label htmlFor="email" className='text-xs text-bold sm:text-sm'>Email</label>
            <input type="email" id='email'className='w-full custom-border h-7 px-2 text-xs sm:h-8 dark:bg-gray-900' value={formData.email} name='email' onChange={handleFormData}/>
            <small className='text-gray-400'>{emailError}</small>
          </div>

          <div>
            <label htmlFor="password" className='text-xs text-bold sm:text-sm'>New Password</label>
            <input type="password" id='password'className='w-full custom-border h-7 px-2 text-xs sm:h-8 dark:bg-gray-900' value={formData.password} name='password' onChange={handleFormData}/>
            <small className='text-gray-400'>{passwordError}</small>
          </div>

          <div>
            <label htmlFor="confirm" className='text-xs text-bold sm:text-sm'>Confirm Password</label>
            <input type="password" id='confirm'className='w-full custom-border h-7 px-2 text-xs sm:h-8 dark:bg-gray-900' value={formData.confirm} name='confirm' onChange={handleFormData}/>
            <small className='text-gray-400'>{confirmError}</small>
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