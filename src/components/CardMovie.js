import React from "react";
import { Col } from "react-bootstrap";
import {Link} from 'react-router-dom'



const CardMovie = ({Mov}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${Mov.id}`}>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500` + Mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p> Name  : {Mov.title}</p>
              <p>Date : {Mov.release_date} </p>
              <p> popularity :{Mov.popularity}</p>
              <p> Rate :{Mov.vote_average}</p>
            </div>
          </div>
        </div>
        </Link>
    </Col >
  );
};

export default CardMovie;
