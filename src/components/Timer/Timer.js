import React from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

const propTypes = {};

const defaultProps = {};

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <section id="timer" className="col-sm-12">
                    <p id="timer__text">0 2 : 0 0</p>
                </section>
            </React.Fragment>
        );
    }
}

 Timer.propTypes = propTypes;
 Timer.defaultProps = defaultProps;