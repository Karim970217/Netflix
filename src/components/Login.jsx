import React, {  useRef, useState } from 'react'
import Header from './Header'
import bg from '../assets/Netflixbg.jpg'
import { checkValidation } from '../utils/Validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch=useDispatch()

  const [SignIn,setSignIn]=useState(true)
  const [errorMessage,setErrorMessage]=useState(null)
  const navigate=useNavigate()


  const signintoggle=()=>{
    setSignIn(!SignIn)
    setErrorMessage(null)
    if (email.current) email.current.value = ''; 
    if (password.current) password.current.value = ''; 
    if (name.current) name.current.value = '';
  }

  const name=useRef(null)
  const email=useRef(null)
  const password=useRef(null)


  const handleButton=()=>{
    const message=checkValidation(email.current.value,password.current.value)
    setErrorMessage(null)

    if(message){
      setErrorMessage(message)
      return
    };
    if(!SignIn){
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName}= auth.currentUser
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              
            
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
    else{
      //signin logic
      signInWithEmailAndPassword(auth,email.current.value, password.current.value )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }

  }
 
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='h-screen w-screen object-cover' src={bg} alt="bg" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-3/12 bg-black p-12 text-white absolute my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{SignIn?"Sign In":"Sign Up"}</h1>
        {!SignIn&& <input ref={name} type="text" placeholder='Enter Your Name' className='py-2 px-2 my-2 w-full bg-gray-700 rounded-lg'/> }
        <input ref={email} type="email" placeholder='Email adress' className='py-2 px-2 my-2 w-full bg-gray-700 rounded-lg'  />
        <input ref={password} type="password" placeholder='password' className='py-2 px-2 my-2 w-full bg-gray-700 rounded-lg'/>
        {errorMessage && <p className='text-red-500 font-bold py-2'>{errorMessage}</p>}

        <button className='py-4 my-4 bg-red-700 w-full cursor-pointer rounded-lg' onClick={handleButton}>{SignIn?"Sign In":"Sign Up"}</button>
        <p onClick={signintoggle} className='cursor-pointer'>{SignIn?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>

      </form>
    </div>
  )
}

export default Login