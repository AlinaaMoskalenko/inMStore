import * as React from 'react';
import './Registration.scss';
import { HTTPService } from "../http-service/http-service";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export class Registration extends React.Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeRePassword = this.changeRePassword.bind(this);
        this.state = {
            users: [],
            login: '',
            password: '',
            rePassword: ''
        }
    }

    changeLogin(event) {
        const value = event.target.value;

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.login = value;
            return newState;
        });
    }

    changePassword(event) {
        const value = event.target.value;

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.password = value;
            return newState;
        });
    }

    changeRePassword(event) {
        const value = event.target.value;

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.rePassword = value;
            return newState;
        });
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.login && this.state.password && this.state.rePassword) {
            if (this.state.password === this.state.rePassword) {
                console.log('User created!');
                const id = Date.now();
                const login = this.state.login;
                const password = this.state.password;
                // this.httpService.post('authorization.json', {id, login , password }, (user) => {
                //     this.setState((oldState) => {
                //         const newState = Object.assign({}, oldState);
                //         newState.users.push(user);
                //         return newState;
                //     });
                // });
            }
            else
                console.log('User not created!');
        }
    }

    onReset() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.login = '';
            newState.password = '';
            newState.rePassword = '';
            return newState;
        })
    }

    render() {
        console.log(this.state.users);
        return <div className="registration">
            <Link to={"/sign_in"} className="registration__back-link">
                <h3 className="registration__back-to-home-page">
                    <i className="registration__arrow-to-home-page material-icons">arrow_back_ios</i>
                    Sign in
                </h3>
            </Link>
            <form className="registration__form"
                onSubmit={this.onSubmit.bind(this)}
                onReset={this.onReset.bind(this)}>
                <input className="registration__input"
                    type="text"
                    placeholder="Enter your login name"
                    onChange={this.changeLogin}
                    value={this.state.login} />
                <input className="registration__input"
                    type="password"
                    placeholder="Enter password"
                    onChange={this.changePassword}
                    value={this.state.password} />
                <input className="registration__input"
                    type="password"
                    placeholder="Confirm password"
                    onChange={this.changeRePassword}
                    value={this.state.rePassword} />
                <div className="registration__action">
                    <button className="action__button"
                        type="submit">
                        Sing up
                </button>
                    <Link to="/">
                        <button className="action__button"
                            type="reset">
                            Cancel
                    </button>
                    </Link>
                </div>
            </form>
        </div>
    }
}