import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../utils/constants'
import { addNowPlayingMovies } from '../utils/MovieSlice'

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()

  const getNowPlayingMovies=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
    const data=await response.json()
    
    dispatch(addNowPlayingMovies(data.results))
  }
  useEffect(()=>{
    getNowPlayingMovies()
  },[])
}

export default useNowPlayingMovies