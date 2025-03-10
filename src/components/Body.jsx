import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import Player from './Player'

const Body = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}= user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
       
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    },[]);
  })
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Body