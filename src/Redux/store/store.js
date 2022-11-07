import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { moviesReducer } from '../reducer/movieReducer';


//1-Create Store
export const store = configureStore({reducer: moviesReducer}, applyMiddleware(thunk));
