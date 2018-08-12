import React, { Component } from 'react';

class Main extends Component {
    constructor(props){
        super(props);

        this.state = { 
            characters: [],
        }
    }

    componentWillMount(){
        fetch('http://swapi.co/api/people/',
        {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Origin' : 'http://localhost:3000/', 
                'User-Agent': 'swapi-javascript'
            }
        })
        .then(res => res.json())
        .then(people => {
            // localStorage.setItem('characters', JSON.stringify(people));
            this.setState({characters: JSON.stringify(people.results)});
        })
        .catch(err => {
            alert("Something went wrong.");
        });
    }

    render() {
        console.log(this.state.characters);
        return (
            <div>
                main works
            </div>
        );
    }
}

export default Main;