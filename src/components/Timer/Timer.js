import React from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

const propTypes = {};

const defaultProps = {};

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {countdown: '02:00'};
    
        this.timer = this.timer.bind(this);
        this.addMinutes = this.addMinutes.bind(this);
    }

    componentWillMount(){
        this.timer();
    }

    addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
    }

    timer(){
        const countDownDate = this.addMinutes(new Date(), 2).getTime();
        
        
        let x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
           
            this.setState({ countdown: `0${minutes}:${seconds.toString().length < 2 ? '0'+seconds : seconds}`})
            
            if(minutes <= 0 && seconds <= 0){
                this.props.endGame();
            }
            
        }.bind(this), 1000);
    }

    render() {
        return (
            <React.Fragment>
                <section id="timer" className="col-sm-12">
                    <p id="timer__text">{this.state.countdown}</p>
                </section>
            </React.Fragment>
        );
    }
}

 Timer.propTypes = propTypes;
 Timer.defaultProps = defaultProps;