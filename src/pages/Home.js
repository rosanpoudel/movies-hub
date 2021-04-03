import React, { useState, useEffect } from "react";

import Axios from "axios";

import FilterNav from "../components/FilterNav";

import { Link } from "react-router-dom";

export default function Home() {
  const [allData, setAllData] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetchData();
  }, [genre]);

  const fetchData = async () => {
    let apiKey = "02689249b40636b114a2add6006bff65";
    const movies = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&without_genres=${genre}`
    );
    setAllData(movies.data.results);
  };

  function getGenre(genre) {
    setGenre(genre);
  }

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="home-page">
            <FilterNav genre={getGenre} />
          </div>

          <div className="movie-card-wrapper">
            {allData.map((data, index) => {
              var posterPath = data.poster_path;
              return (
                <div className="single-movie" key={index}>
                  <Link to={`movieDetail/${data.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${posterPath}`}
                      alt="movie img"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
