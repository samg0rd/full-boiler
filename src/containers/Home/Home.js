import React, { Component } from 'react';
import classes from './Home.module.scss';

class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <h1>Welcome to your react web application</h1>
                <p>hope you enjoy this boilerplate</p>      
            </div>
        );
    }
}

export default Home;