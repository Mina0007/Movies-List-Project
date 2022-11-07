import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../Redux/action/movieAction";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";


const MoviesList = () => {

  const [Movies, setMovies] = useState([])


  const dispatch = useDispatch();

  useEffect (()=>{
    dispatch(getAllMovie());
  },[])

  const dataMovies = useSelector ( (state)=> state.movies);

  useEffect (()=>{
    setMovies(dataMovies);
  },[dataMovies])


  
  return (
    <Row className="mt-3">
      {Movies.length >= 1 ? (Movies.map((Mov)=>{
        return (<CardMovie key={Mov.id} Mov={Mov}/>)
      })) : <h2 className="text-center p-5">لا يوجد افلام ...</h2>}

      {Movies.length >=1 ? ( (<PaginationComponent/>)
      ): null }
      
    </Row>
  );
};

export default MoviesList;
