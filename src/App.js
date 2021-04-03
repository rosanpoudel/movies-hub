import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

// pages
import Trending from "./pages/Trending";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import TvSeries from "./pages/TvSeries";
import MovieDetail from "./pages/MovieDetail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Sidebar />

        <Switch>
          <Route path="/" exact component={Trending} />
          <Route path="/nowPlaying" component={NowPlaying} />
          <Route path="/popular" component={Popular} />
          <Route path="/topRated" component={TopRated} />
          <Route path="/upComing" component={UpComing} />
          <Route path="/tvSeries" component={TvSeries} />
          <Route path="/movieDetail/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}
