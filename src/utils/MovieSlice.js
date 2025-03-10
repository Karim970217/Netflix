import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpComingMovies:null,
        trailerVideo:null,
        name:"",
        key:"",
        published_at:"",
        type:""
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.UpComingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addName:(state,action)=>{
            state.name=action.payload
        },
        addKey:(state,action)=>{
            state.key=action.payload
        },
        addPublished:(state,action)=>{
            state.published_at=action.payload
        },
        addType:(state,action)=>{
            state.type=action.payload
        },
    }
})

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpComingMovies,addName,addKey,addType,addPublished}=MovieSlice.actions

export default MovieSlice.reducer