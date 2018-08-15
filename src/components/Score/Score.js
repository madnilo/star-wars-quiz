import React from 'react';
import PropTypes from 'prop-types';

import './Score.css';

let Score = ({ score }) => {
    return (
        <React.Fragment>
            <section id="score" className="col-sm-12">
                <p id="score__text">{score} Points</p>
            </section>
        </React.Fragment>
    );
}

Score.propTypes = {
    score: PropTypes.number,
};


export default Score;