import React, { Component } from 'react';

import Deck from '../Deck/Deck';
import Timer from '../Timer/Timer';
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
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
        if(!this.state.characters) return(<div></div>);
        else{
            return (
                <main className="row">

                    <section className="col-sm-12">
                        <img src={swarsLogo} className="header__logo"></img>
                    </section>

                    <Timer />

                    <Deck characters={this.state.characters}/>

                </main>
            );
        }

    }
}

export default Main;