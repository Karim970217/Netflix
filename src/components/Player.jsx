import React, { useEffect } from 'react'
import back from '../assets/back.png'
import { API_options } from '../utils/constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addKey, addName, addPublished, addType } from '../utils/MovieSlice';

const Player = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const movies=useSelector(store=>store.movies)
    const navigate=useNavigate()
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_options)
  .then(res => res.json())
  .then((res) => {
    const trailer = res.results.find((video) => video.type === 'Trailer');

        if (trailer) {
          // Store only the trailer data if it's available
          dispatch(addKey(trailer.key));
          dispatch(addName(trailer.name));
          dispatch(addPublished(trailer.published_at));
          dispatch(addType(trailer.type));
        }
  })
  .catch(err => console.error(err));
    },[id,dispatch])
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-black text-white object-cover'>
        <img className='absolute top-[20px] left-[20px] w-[40px] md:w-[50px] cursor-pointer filter invert brightness-200 z-10' onClick={()=>navigate("/browse")} src={back} alt="back-icon" />
        <div className="relative md:w-[90%] md:h-[90%] w-full pb-[56.25%] md:pb-0 ">
                <img
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    src={`https://img.youtube.com/vi/${movies.key}/hqdefault.jpg`}
                    alt="YouTube Thumbnail"
                    onClick={() => {
                        // Replace thumbnail with the iframe (video player)
                        document.getElementById('video-frame').style.display = 'block';
                        document.getElementById('thumbnail').style.display = 'none';
                    }}
                />
                {/* YouTube Video Embed (Hidden initially) */}
                <iframe
                    id="video-frame"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${movies.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'none' }}
                ></iframe>
            </div>
        <div className='flex items-center justify-between w-[90%] md:mt-0 mt-10'>
            <p>{movies.published_at.slice(0,10)}</p>
            <p>{movies.name}</p>
            <p>{movies.type}</p>
        </div>
    </div>
  )
}

export default Player