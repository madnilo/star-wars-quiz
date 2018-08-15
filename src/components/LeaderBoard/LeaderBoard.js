import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './LeaderBoard.css';

const propTypes = {};

const defaultProps = {};

export default class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'', 
            email:'',
            invalidName: false,
            invalidEmail: false,
            leaderboard: [],
            showLeaderboard: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }
    
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value});
    }

    handleForm(){
        const { score } = this.props;
        let { name, email, invalidEmail, invalidName } = this.state;
        if (name.length == 0) invalidName = true;
        if (!(email.indexOf('@') > -1)) invalidEmail = true;
        if(invalidEmail || invalidName) return;

        let leaderboard = localStorage.getItem('quiz-leaderboard');
        if (leaderboard === null) leaderboard = [];
        else leaderboard = JSON.parse(leaderboard);
        leaderboard.push({name, email, score});
        localStorage.setItem('quiz-leaderboard', JSON.stringify(leaderboard));
        this.setState({ leaderboard, showLeaderboard: true });
    }

    render() {
        const { invalidEmail, invalidName, leaderboard, showLeaderboard } = this.state;
        return (
            <div className='row'>
                

                { showLeaderboard 
                ?
                <div>
                    <div className='lb-title'>
                        <p className='lb-title__text'>Quiz Completed!</p>
                    </div>
                    <table className='lb-table'>
                        <tr>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Score</th>
                            <th className='text-center'>Action</th>
                        </tr>
                        {leaderboard.map(item => (
                            <tr>
                                <td className='text-center'>{item.name}</td>
                                <td className='text-center'>{item.email}</td>
                                <td className='text-center'>{item.score}</td>
                                <td className='text-center'><Link className="btn btn-warning btn-small" to="/">Challenge</Link></td>
                            </tr>
                        ))}
                    </table>
                </div>
                :
                (<div>
                    <div className='lb-title'>
                        <p className='lb-title__text'>Quiz Completed!</p>
                        <p className='lb-title__subtext'>You made {this.props.score} points! Don't forget to register your score below.</p>
                    </div>

                    <div className='lb-form'>
                        <div className='col-sm-12'>
                            <label>Name: <input type='text' name='name' required value={this.state.name} onChange={this.handleChange}/></label>
                            { invalidName ? <sub>Please, type a name before saving</sub> : null }
                        </div>
                        <div className='col-sm-12'>
                            <label>Email: <input type='email' name='email' required value={this.state.email} onChange={this.handleChange}></input></label>
                            { invalidEmail ? <sub>Please, type a valid email</sub> : null }
                        </div>

                        <button className="btn btn-primary btn-large" onClick={this.handleForm}>Save</button>
                    </div>
                </div>)
                }
                

            </div>
        );
    }
}

 LeaderBoard.propTypes = propTypes;
 LeaderBoard.defaultProps = defaultProps;