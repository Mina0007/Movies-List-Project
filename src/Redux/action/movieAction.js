import { AllMOVIES, movieApi } from "../types/moviesType"
import axios from 'axios';




export const getAllMovie = () => {

    return async (dispatch) => {
        const res = await axios.get(movieApi)
        // console.log (res.data)
        dispatch ({ type: AllMOVIES , data: res.data.results , pages: res.data.total_pages })
    }
} 

export const getMovieSearch = (word) => {

    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c006cf8fdf692001a1a5f83a4be4a120&query=${word}&language=en-US`)
        dispatch ({ type: AllMOVIES , data: res.data.results , pages: res.data.total_pages })
    }
} 

export const getPage = (page) => {

    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c006cf8fdf692001a1a5f83a4be4a120&language=en-US&page=${page}`)
        dispatch ({ type: AllMOVIES , data: res.data.results , pages: res.data.total_pages })
    }
}