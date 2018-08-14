import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import swarsLogo from '../../assets/img/swars-logo.svg';
import './Start.css';

class Start extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        document.body.style.overflow = "hidden";
        return (
            <div>
                <div className="container">
                    <div className="header">
                        <img src={swarsLogo} className="header__logo"></img>
                    </div>
                    
                    <div className="start-button">
                        <Link className='btn btn-warning btn-lg' to='/quiz'>Start Quiz</Link>
                        {/* <button className='btn btn-warning btn-lg'>Start Quiz</button> */}
                    </div>

                    <div className="fade"></div>

                    <section className="star-wars">
                        <div className="crawl">
                            <div className="title">
                            <p>Star Quiz - Episode I</p>
                            <h1>A New Hope</h1>
                            </div>
                            
                            <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>
                            
                            <p>You have the opportunity to help the rebels on the intelligence work. Start the game and identify as many characters as you can. You have only two minutes.</p>

                            <p>Each character identified will be converted on 10 battle points for the Rebels. If you ask for help then you will obtain only half of those points.</p>

                            <p>May the force be with you.</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

Start.propTypes = {

};

export default Start;