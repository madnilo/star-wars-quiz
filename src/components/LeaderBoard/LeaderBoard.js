import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                LeaderBoard works
            </React.Fragment>
        );
    }
}

 LeaderBoard.propTypes = propTypes;
 LeaderBoard.defaultProps = defaultProps;