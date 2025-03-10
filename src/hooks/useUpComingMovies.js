import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_options } from '../utils/constants'
import {  addUpComingMovies } from '../utils/MovieSlice'

const useUpComingMovies = () => {
    const dispatch=useDispatch()

  const getUpComingMovies=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options)
    const data=await response.json()
    dispatch(addUpComingMovies(data.results))
  }
  useEffect(()=>{
    getUpComingMovies()
  },[])
}

export default useUpComingMovies