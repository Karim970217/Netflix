import React from 'react'
import logo from '../assets/Netflix_Logo.png'
import usericon from '../assets/netflix-usericon.webp'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((store)=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-36 md:w-44 px-8 py-2' src={logo} alt="" />
      {
        user&&(<div className='flex p-2 px-8'>
        <img src={usericon} alt="user-icon" className='w-10 h-10 md:w-12 md:h-12'/>
        <button className='font-semibold mx-2 md:font-bold text-white cursor-pointer' onClick={handleSignOut}>(Sign Out)</button>
      </div>)
      }
    </div>
  )
}

export default Header