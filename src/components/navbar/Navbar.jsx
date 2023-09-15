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

        <div className="imgholder">
            <div className="image">
                <img src={poster} alt='poster' />
            </div>
        </div>
        <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
        
            <div className="tag">
                <img src={logo} alt={logo}/>
            </div>

            <div className="enquire">
                <div className="find">
                    <input 
                    type="text" 
                    spellCheck="true" 
                    placeholder='What do you want to watch?'/>
                    <img src={search} alt="search" className='botton' />
                </div>
            </div>
            

            <div className="user">
                <p className="user-login">Sign in</p>
                <div className="user-btn">
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
            <section className="describe">
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