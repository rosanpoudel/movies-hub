import React from 'react';

import { NavLink } from "react-router-dom";


export default function Sidebar() {

    return (

        <div className="sidebar">
            {/* <NavLink to="/" className="sidebar-link" activeClassName="active" exact={true} >
                <i className="fa fa-home"></i>
                <span>Home</span>
            </NavLink> */}

            <NavLink to="/" className="sidebar-link" activeClassName="active" exact >
                <i className="fa fa-film"></i>
                <span>Trending</span>
            </NavLink>

            <NavLink to="/nowPlaying" className="sidebar-link" activeClassName="active">
                <i className="fa fa-ticket"></i>
                <span>Now Playing</span>
            </NavLink>

            <NavLink to="/popular" className="sidebar-link" activeClassName="active">
                <i className="fa fa-fire"></i>
                <span>Popular</span>
            </NavLink>

            <NavLink to="/topRated" className="sidebar-link" activeClassName="active">
                <i className="fa fa-trophy"></i>
                <span>Top Rated</span>
            </NavLink>

            <NavLink to="/upComing" className="sidebar-link" activeClassName="active">
                <i className="fa fa-caret-square-o-up" aria-hidden="true"></i>
                <span>Up Coming</span>
            </NavLink>

            <NavLink to="/tvSeries" className="sidebar-link" activeClassName="active">
                <i className="fa fa-desktop"></i>
                <span>TV Series</span>
            </NavLink>


        </div>
    );
}