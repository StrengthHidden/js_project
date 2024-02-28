// used to display the final score

import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Score extends Component{
    render(){
        const {score}=this.props;
        return(
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
                <button><Link to ="/answers/">Answers</Link></button>
            </div>
        );
    }
}

export default Score;