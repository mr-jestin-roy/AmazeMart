import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function navbar() {
    return (
        <nav className="navbar">
            {/*LOGO*/}
            <Link to="/">
            <img className="navbarLogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
             {/*SEARCH BAR*/}
                <div className="navbarSearch">
                  <input type="text" className="navbarSearchInput" />
                  <SearchIcon className="navbarSearchIcon" />
                </div>
        </nav>
    );
    
}

export default navbar;
