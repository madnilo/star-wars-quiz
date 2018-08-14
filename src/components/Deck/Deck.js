import React from 'react';
import PropTypes from 'prop-types';

import './Deck.css';

const propTypes = {};

const defaultProps = {};

export default class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        document.body.style.overflow = "visible"
        return (
            <React.Fragment>
                <section className="cards-panel col-sm-12">
                    {this.props.characters.slice(0,12).map(item => (   
                        <div className="card-wrapper col-sm-6 col-md-4 col-lg-3">
                            <div className="card">
                                <div className="card__image"></div>
                                <div className="card__unit-stats clearfix">
                                    <a href="http://google.com">
                                        <div className="one-third">
                                            <div className="stat">?</div>
                                            <div className="stat-value">Answer</div>
                                        </div>
                                    </a>
                                    <a href="http://google.com">
                                        <div className="one-third no-border">
                                            <div className="stat">...</div>
                                            <div className="stat-value">Info</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    ))}
                </section>
            </React.Fragment>
        );
    }
}

 Deck.propTypes = propTypes;
 Deck.defaultProps = defaultProps;