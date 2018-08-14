import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


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
                    <div className="col-sm-12" id="buttons-panel">
                        <Link to="/" className="btn btn-small btn-danger pull-left">EXIT</Link>
                        <button onClick={this.props.next} className="btn btn-small btn-warning pull-right"><span className="glyphicon glyphicon-chevron-right"></span></button>
                        <button onClick={this.props.previous} className="btn btn-small btn-warning pull-right"><span className="glyphicon glyphicon-chevron-left"></span></button>
                    </div>
                    {this.props.characters.map(item => (   
                        <Cards key={item.url} charInfo={item}/>
                    ))}
                </section>
            </React.Fragment>
        );
    }
}

 Deck.propTypes = propTypes;
 Deck.defaultProps = defaultProps;