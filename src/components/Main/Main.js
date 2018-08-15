import React, { Component } from 'react';

import Deck from '../Deck/Deck';
import Timer from '../Timer/Timer';
import Score from '../Score/Score';
import './Main.css';
import swarsLogo from '../../assets/img/swars-logo.svg';


class Main extends Component {
    constructor(props){
        super(props);

        this.state = { 
            characters: [],
            matchedCharacters: [],
            score: 0,
            timer: '',
            pages: { previous: null, next: 'https://swapi.co/api/people/?page=1'},
        }
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.renderPage = this.renderPage.bind(this);
        this.adjustScrolling = this.adjustScrolling.bind(this);
        this.addNewMatchedCharacter = this.addNewMatchedCharacter.bind(this);
    }

    componentWillMount(){
        this.nextPage();
        this.adjustScrolling();
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

    addNewMatchedCharacter(char, points){
        let { matchedCharacters, score } = this.state;
        matchedCharacters.push(char);
        score += points; 
        this.setState({ matchedCharacters, score });
    }

    render() {
    if(!this.state.characters) return(<div></div>);
        
    const { score, timer, characters, matchedCharacters } = this.state;
    return (
        <main className="row">

            <section className="col-sm-6">
                <img src={swarsLogo} className="header__logo"></img>
            </section>
            <section className="col-sm-6">
                <div className="col-sm-6">
                    <Timer timer={timer} />
                </div>
                <div className="col-sm-6">
                    <Score score={score} />
                </div>
            </section>


            <Deck characters={characters} 
            matchedCharacters={matchedCharacters} 
            addNewMatchedCharacter={this.addNewMatchedCharacter} 
            next={this.nextPage} 
            previous={this.previousPage}/>

        </main>
    );
    }

}

export default Main;