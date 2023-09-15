import React from "react";
import "./style.css"
import moviebox from "../../assets/moviebox.svg";
import { Link } from "react-router-dom";
import home from "../../assets/home.svg";
import movies from "../../assets/movie.svg";
import tv from "../../assets/tv.svg";
import calendar from "../../assets/Calendar.svg";
import logout from "../../assets/Logout.svg";

const Sidebar = () => {
  return (
    <div className="side">
    <div className="dash">
      <Link to="/">
        <img src={moviebox} alt="moviebox" />
      </Link>
    </div>
    <div className="Items">
      <div className="item">
        <div>
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
      </div>
      <div className="item-highlight">
        <div>
          <img src={movies} alt="home" />
          <p>Movies</p>
        </div>
      </div>
      <div className="item">
        <div>
          <img src={tv} alt="home" />
          <p>TV Series</p>
        </div>
      </div>
      <div className="item">
        <div>
          <img src={calendar} alt="home" />
          <p>Upcoming</p>
        </div>
      </div>
      {/* the box */}
      <div className="start">
        <div>
          <div className="questions">
            <p>Play movie quizes and earn free tickets</p>
          </div>
          <div className="individual">
            <p>50k people are playing now</p>
          </div>
          <div className="play-btn">
            <button>Start playing</button>
          </div>
        </div>
      </div>
      <div
        className="item"
        style={{
          marginTop: "20px",
        }}
      >
        <div>
          <img src={logout} alt="home" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar