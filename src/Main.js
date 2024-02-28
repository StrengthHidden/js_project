import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Answers from './Answers'

const Main = () => {
    return (
        <div className="Main">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/answers/" element={<Answers/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Main;