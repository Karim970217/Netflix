import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../utils/constants'
import { addTopRatedMovies } from '../utils/MovieSlice'

const useTopRatedMovies = () => {
    const dispatch=useDispatch()

  const getTopRatedMovies=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options)
    const data=await response.json()
    
    dispatch(addTopRatedMovies(data.results))
  }
  useEffect(()=>{
    getTopRatedMovies()
  },[])
}

export default useTopRatedMovies