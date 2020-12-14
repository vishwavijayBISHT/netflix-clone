import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request1 = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        request1.data.results[
          Math.floor(Math.random() * request1.data.results.length - 1)
        ]
      );

      return request1;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="buttons">
          <button className="but">Play</button>
          <button className="but">My List</button>
        </div>
        <div className="dis">{movie?.overview}</div>
      </div>
      <div className="fade"></div>
    </header>
  );
}

export default Banner;
