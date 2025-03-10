import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../utils/constants'
import { addPopularMovies } from '../utils/MovieSlice'

const usePopularMovies = () => {
    const dispatch=useDispatch()

  const getPopularMovies=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)
    const data=await response.json()
    
    dispatch(addPopularMovies(data.results))
  }
  useEffect(()=>{
    getPopularMovies()
  },[])
}

export default usePopularMovies