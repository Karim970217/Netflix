import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block text-lg py-6 w-1/4'>{overview}</p>
        <div className='my-2'>
            <button className='text-black bg-white py-2 md:py-4 px-6 md:px-12 text-sm md:text-xl rounded-lg bg-opacity-50 hover:bg-white'>Play</button>
            <button className='mx-5 text-white bg-gray-700 py-2 md:py-4 px-6 md:px-12 text-sm md:text-xl rounded-lg bg-opacity-50 hover:bg-gray-700'>MoreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle