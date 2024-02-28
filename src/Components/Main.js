import React from "react";
import { Link } from "react-router-dom";

const Main=()=>{
    return (
        <div className="MainPage app-title">
            <h1>메인페이지입니당</h1> 
            <Link to="/question/1">문제 시작</Link>
        </div>
    );
}

export default Main;