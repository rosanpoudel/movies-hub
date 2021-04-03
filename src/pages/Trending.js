import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

import Pagination from '../components/Pagination';



export default function Trending() {

    const [Trending, setTrending] = useState([]);
    const [pagination, setPagination] = useState('1');


    // fetching movies
    const fetchTrending = async () => {
        let apiKey = "02689249b40636b114a2add6006bff65";
        const movies = await Axios.get(`https://api.themoviedb.org/3/trending/movies/week?api_key=${apiKey}&sort_by=popularity.asc&language=en-US&page=${pagination}`);


        setTrending(movies.data.results);


    }

    useEffect(() => {
        fetchTrending();
    }, [pagination]);


    // get page no from pagination
    function getPage(pageno) {
        setPagination(pageno);
    }


    return (

        <div className="page-wrapper">
            <div className="page-content">


                <div className="movie-card-wrapper">

                    {
                        Trending.map((data, index) => {
                            var posterPath = data.poster_path;
                            return (
                                <div className="single-movie" key={index}>
                                    <Link to={`movieDetail/${data.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/original${posterPath}`} alt="movie img" className="img-fluid" />

                                    </Link>
                                </div>
                            );

                        })
                    }

                </div>


                <Pagination page={getPage} />

            </div>
        </div>
    );
}