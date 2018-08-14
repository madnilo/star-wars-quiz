import React from 'react';
import PropTypes from 'prop-types';

import Cards from '../Cards/Cards';
import './Deck.css';

const propTypes = {};

const defaultProps = {};

export default class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <section className="cards-panel col-sm-12">
                    {this.props.characters.slice(0,12).map(item => (   
                        <Cards />
                    ))}
                </section>
            </React.Fragment>
        );
    }
}

 Deck.propTypes = propTypes;
 Deck.defaultProps = defaultProps;