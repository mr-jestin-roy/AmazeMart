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
            
            {/*3 links*/}
            <div className="navbar_nav">
                <Link>
                    <div className="navbar_option">
                        <span>Hello Georgin</span>
                        <span>Sign In</span>
                    </div>
                </Link>
            </div>

        </nav>
    );
    
}

export default navbar;
