import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

import './Cards.css';

const propTypes = {};

const defaultProps = {};

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleInfo: false,
            homeworld: {},
            films: [],
            species: {},
            vehicles: [],
            starships: [],
        };

        this.showInfo = this.showInfo.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getHomeworld = this.getHomeworld.bind(this);
        this.getSpecies = this.getSpecies.bind(this);
        this.getFilms = this.getFilms.bind(this);
        this.getStarships = this.getStarships.bind(this);
        this.getVehicles = this.getVehicles.bind(this);
    }

    fetchData(url){
        return  fetch(url,
                    {
                    method: 'GET',
                    headers: {
                        'Accept' : 'application/json'
                    }
                })
                .then(res => res.json());
    }

    getHomeworld(){
        this.fetchData(this.props.charInfo.homeworld)
        .then(homeworld => {
            this.setState({ homeworld });
        })
        .catch(err => console.log("Something went wrong.", err));
    }

    getSpecies(){
        this.fetchData(this.props.charInfo.species)
        .then(species => {
            this.setState({ species });
        })
        .catch(err => console.log("Something went wrong.", err));
    }

    getFilms(){
        this.props.charInfo.films.map(film => {
            this.fetchData(film)
            .then(film => {
                let { films } = this.state;
                films.push(film);
                this.setState({ films })
            })
            .catch(err => console.log("Something went wrong.", err));
        })
    }

    getVehicles(){
        this.props.charInfo.vehicles.map(vehicle => {
            this.fetchData(vehicle)
            .then(vehicle => {
                let { vehicles } = this.state;
                vehicles.push(vehicle);
                this.setState({ vehicles })
            })
            .catch(err => console.log("Something went wrong.", err));
        })
    }

    getStarships(){
        this.props.charInfo.starships.map(starship => {
            this.fetchData(starship)
            .then(starship => {
                let { starships } = this.state;
                starships.push(starship);
                this.setState({ starships })
            })
            .catch(err => console.log("Something went wrong.", err));
        })
    }

    showInfo(){
        this.getHomeworld();
        this.getSpecies();
        this.getFilms();
        this.getStarships();
        this.getVehicles();
        this.setState({ visibleInfo: true })
    }

    hideInfo(){
        this.setState({ visibleInfo: false })
    }

    render() {
        const url = this.props.charInfo.url.split('/');
        const image = `${url[url.length - 2]}.jpg`;
        const { height, mass, hair_color, skin_color, eye_color, birth_year, gender } = this.props.charInfo;
        const { homeworld, species, films, starships, vehicles } = this.state;
        return (
            <React.Fragment>
                <div className="card-wrapper col-sm-6 col-md-4 col-lg-2">
                    <div className="card">
                        <div className="card__image">
                            <img className="card__image--img" src={require(`../../assets/img/characters/${image}`)}/>
                        </div>
                        <div className="card__unit-stats clearfix">
                            <a href="http://google.com">
                                <div className="one-third">
                                    <div className="stat">?</div>
                                    <div className="stat-value">Answer</div>
                                </div>
                            </a>
                            <a onClick={this.showInfo}>
                                <div className="one-third no-border">
                                    <div className="stat">...</div>
                                    <div className="stat-value">Info</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>  

                <Modal  classNames={{modal:'info-modal'}} open={this.state.visibleInfo} onClose={this.hideInfo} center>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Height:</label><h4>{height}</h4> 
                            <label>Mass:</label><h4>{mass}</h4>
                            <label>Hair Color:</label><h4>{hair_color}</h4>
                            <label>Skin Color:</label><h4>{skin_color}</h4>
                            <label>Eye Color:</label><h4>{eye_color}</h4>
                            <label>Birth Year:</label><h4>{birth_year}</h4>
                        </div>
                        <div className="col-lg-6">
                            <label>Gender:</label><h4>{gender}</h4>
                            <label>Homeworld:</label><h4>{homeworld.name}</h4>
                            <label>Species:</label><h4>{species.name}</h4>
                            <label>Films:</label><h4>{films.map(film => film.title+', ')}</h4>
                            <label>Starships:</label><h4>{starships.map(starship => starship.name+', ')}</h4>
                            <label>Vehicles:</label><h4>{vehicles.map(vehicle => vehicle.name+', ')}</h4>
                        </div>
                    </div>
                </Modal>   
            </React.Fragment>
        );
    }
}

 Cards.propTypes = propTypes;
 Cards.defaultProps = defaultProps;