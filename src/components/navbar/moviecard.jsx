import React from "react";
import fav from "../../assets/Favorite.svg";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  const imageLink = "https://image.tmdb.org/t/p/w500";
  return (
    <Link to={`movies/${data.id}`} target="_blank">
      <div className="movie-box" data-testid="movie-card">
        <img className="preferred" src={fav} alt="favourite movie" />
        <div className="jpeg" data-testid="movie-poster">
          <img src={`${imageLink}${data.poster_path}`} alt={data.title} />
        </div>
        <div>
          <span className="refer" data-testid="movie-release-date">
            {data.release_date}
          </span>
          <p className="name" data-testid="movie-title">
            {data.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
