import React, { Component } from 'react';

import './Main.css';
import swarsLogo from '../../static/img/swars-logo.svg';


class Main extends Component {
    constructor(props){
        super(props);

        this.state = { 
            characters: [],
        }
    }

    componentWillMount(){
        fetch('https://swapi.co/api/people/',
        {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(people => {
            // localStorage.setItem('characters', JSON.stringify(people));
            this.setState({characters: people.results});
        })
        .catch(err => {
            console.log("Something went wrong.", err);
        });
    }

    render() {
        if(!this.state.characters) return(<div></div>);
        else{
            return (
                <main className="row">

                    <section className="col-sm-10">
                        <img src={swarsLogo} className="header__logo"></img>
                    </section>

                    <section className="col-sm-2">
                        <p>COUNTER</p>
                    </section>

                    <section className="cards-panel col-sm-10">
                        {this.state.characters.slice(0,8).map(item => (   
                            <div className="card-wrapper col-sm-5 col-md-4 col-lg-3">
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

                    <nav className="col-sm-2">

                        <ul>
                            <li>link 1</li>
                            <li>link 1</li>
                            <li>link 1</li>
                            <li>link 1</li>
                            <li>link 1</li>
                        </ul>
                    </nav>

                </main>
            );
        }

    }
}

export default Main;