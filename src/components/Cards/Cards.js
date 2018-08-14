import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className="card-wrapper col-sm-6 col-md-4 col-lg-2">
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
            </React.Fragment>
        );
    }
}

 Cards.propTypes = propTypes;
 Cards.defaultProps = defaultProps;