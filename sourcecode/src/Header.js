
import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { UseStateValue } from "./StateProvider";

function navbar() {
    const [{basket, user }, dispatch] = UseStateValue();
    
    // console.log(basket);
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
            
            {/*3 links */}
            <div className="navbar_nav">
                {/*1st Link */}
                <Link to="/login" className="navbar_link">
                    <div className="navbar_option">
                        <span className="navbar_optionLineOne">Hello Georgin</span>
                        <span className="navbar_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/*2nd Link */}
                <Link to="/" className="navbar_link">
                    <div className="navbar_option">
                        <span className="navbar_optionLineOne">Returns</span>
                        <span className="navbar_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*3rd Link */}
                <Link to="/" className="navbar_link">
                    <div className="navbar_option">
                        <span className="navbar_optionLineOne">Your</span>
                        <span className="navbar_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/*4th Link*/}
                <Link to="/checkout">
                    <div className="navbar_optionBasket">
                        {/*shopping basket icon*/}
                        <ShoppingBasketIcon />
                        {/*Number of items in the basket*/}
                        <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
                    </div>
                </Link>
            </div>

        </nav>
    );
    
}

export default navbar;
