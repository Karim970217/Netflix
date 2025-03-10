import React, { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/MovieSlice'

const VideoBackground = ({movieId}) => {
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
    const dispatch=useDispatch()
    const getMovieVideos= async()=>{
        const response=await fetch('https://api.themoviedb.org/3/movie/950396/videos?language=en-US', API_options)
        const data=await response.json()

        const trailer=data.results.filter((videos)=>videos.type==="Trailer")

        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideos()
    },[])
  return (
    <div>
        <iframe 
        className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/rUSdnuOLebE?si="+trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground