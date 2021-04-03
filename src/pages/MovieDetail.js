import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function MovieDetail(props) {
  var movieId = props.match.params.id;
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const fetchMovieDetails = async () => {
    let apiKey = "02689249b40636b114a2add6006bff65";
    const details = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    setMovieDetails(details.data);
  };

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="single-page-wrapper">
          <div className="movie-details">
            <div className="image">
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                alt="img"
                className="img-fluid"
              />
            </div>
            <div className="details">
              <h2 className="movie-title">{movieDetails.title}</h2>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
