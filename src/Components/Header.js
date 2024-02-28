import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header=()=>{
    return (
        <div className="header-area app-header">
            <Link to="/">
                <h1>그때그시절 퀴즈</h1>
            </Link>
        </div>
    );
}

export default Header;
