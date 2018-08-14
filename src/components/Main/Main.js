import React, { Component } from 'react';

import Deck from '../Deck/Deck';
import Timer from '../Timer/Timer';
import './Main.css';
import swarsLogo from '../../assets/img/swars-logo.svg';


class Main extends Component {
    constructor(props){
        super(props);

        this.state = { 
            characters: [],
            playedCharacters: [],
            pages: { previous: null, next: 'https://swapi.co/api/people/?page=1'},
        }
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.renderPage = this.renderPage.bind(this);
        this.adjustScrolling = this.adjustScrolling.bind(this);
    }

    componentWillMount(){
        this.nextPage();
    }
    
    nextPage(){
        if(this.state.pages.next) this.renderPage(this.state.pages.next)
    }
    
    previousPage(){
        if(this.state.pages.previous) this.renderPage(this.state.pages.previous)
    }
    
    renderPage(url){
        fetch(url,
            {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(people => {
            // localStorage.setItem('characters', JSON.stringify(people));
            let characters = people.results;
            let { next, previous } = people;
            this.setState({characters, pages: { previous, next } });
        })
        .catch(err => {
            console.log("Something went wrong.", err);
        });
    }
        
    adjustScrolling(){
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
    }

    render() {
    this.adjustScrolling();

    if(!this.state.characters) return(<div></div>);
    return (
        <main className="row">

            <section className="col-sm-12">
                <img src={swarsLogo} className="header__logo"></img>
            </section>

            <Timer />

            <Deck characters={this.state.characters} next={this.nextPage} previous={this.previousPage}/>

        </main>
    );
    }

}

export default Main;