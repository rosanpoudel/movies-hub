import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';

import Pagination from '../components/Pagination';


export default function NowPlaying() {

    const [nowPlaying, setNowPlaying] = useState([]);
    const [pagination, setPagination] = useState('1');


    useEffect(() => {
        fetchNowPlaying()
    }, [pagination]);


    const fetchNowPlaying = async () => {
        let apiKey = "02689249b40636b114a2add6006bff65";
        const nowPlaying = await Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pagination}`);
        setNowPlaying(nowPlaying.data.results);

    }

    // get page no from pagination
    function getPage(pageno) {
        setPagination(pageno);
    }



    return (
        <div>

            <div className="page-wrapper">
                <div className="page-content">

                    <div className="movie-card-wrapper">
                        {
                            nowPlaying.map((data, index) => {
                                var posterPath = data.poster_path;
                                return (


                                    <div className="single-movie" key={index}>
                                        <Link to={`movieDetail/${data.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/original${posterPath}`} alt="" className="img-fluid" />
                                        </Link>
                                    </div>

                                );

                            })
                        }
                    </div>

                    <Pagination page={getPage} />
                </div>
            </div>
        </div >
    );
}