import React, { useState } from "react";
import './navbar.css'
import imdb from "../../assets/imdb.svg";
import imbd_fruit from "../../assets/imdb_fruit.svg";
import play from "../../assets/Play.svg";
import logo from '../../assets/Logo.svg'
import signlogo from '../../assets/menuLogo.png'
import poster from '../../assets/background.jpg'
import search from '../../assets/Search.png'
import { Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>

        <div className="imgContainer">
            <div className="img">
                <img src={poster} alt='poster' />
            </div>
        </div>
        <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
        
            <div className="logo">
                <img src={logo} alt={logo}/>
            </div>

            <div className="search">
                <div className="searchInput">
                    <input 
                    type="text" 
                    spellCheck="true" 
                    placeholder='What do you want to watch?'/>
                    <img src={search} alt="search" className='searchIcon' />
                </div>
            </div>
            

            <div className="menu">
                <p className="sign-in">Sign in</p>
                <div className="menu-btn">
                    <img src={signlogo} alt={signlogo} />
                </div>
            </div>
      
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
            <div className="bars">
                 <FaBars />
            </div>
        </div>

        <div className="home-component">
            <section className="description">
                <div>
                <h1 className="desc-title">John Wick 3 : Parabellum</h1>
                </div>
            <div className="movie-rating">
            <div className="imdb">
                <img src={imdb} alt="imdb" />
                <span>86.0/100</span>
            </div>
            <div className="imdb-fruit">
                <img src={imbd_fruit} alt="imdb fruit" />
                <span>97%</span>
            </div>
            </div>
            <div className="desc-about">
            <p>
                John Wick is on the run after killing a member of the international
                assassins' guild, and with a $14 million price tag on his head, he
                is the target of hit men and women everywhere.
            </p>
            <Button
                display={"flex"}
                width={"200px"}
                height={"50px"}
                gap={"8px"}
                alignItems={"center"}
                backgroundColor={"#BE123C"}
                borderRadius={"6px"}
                color={"#fff"}
            >
                <img src={play} alt="Play btn" />
                WATCH TRAILER
            </Button>
            </div>
            </section>

        </div>

    </div>

    
  )
}

export default Navbar