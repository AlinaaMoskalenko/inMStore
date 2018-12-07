import * as React from 'react';
import './Authorization.scss';
import { HTTPService } from "../http-service/http-service";
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';

class Authorization extends React.Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
        this.changeLogin = this.changeLogin.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.textInput = React.createRef();
        this.passwordInput = React.createRef();
        this.dataError = React.createRef();
        this.state = {
            users: [],
            login: '',
            password: '',
            isSubmited: false,
            isValidLogin: true,
            isValidPassword: true,
            eventTargetType: '',
        }
    }

    componentDidMount() {
        this.httpService.get('authorization.json', (users) => {
            this.setState((oldState) => Object.assign({}, oldState, { users }));
        }, (e) => {
            console.log(e); //если все плохо, то приходит какой-то callback
        });
    }

    onFocus(event) {
        // event.currentTarget -- берет родителя, event.currentTarget = event.target.parentNode //
        const valueType = event.target.type;
        this.dataError.current.classList.remove('authorization__error_show');
        this.textInput.current.parentNode.classList.remove('authorization__input-conteiner_empty');
        this.passwordInput.current.parentNode.classList.remove('authorization__input-conteiner_empty');

        if (this.state.eventTargetType) {
            if (valueType !== this.state.eventTargetType) {
                event.currentTarget.classList.add('authorization__input-conteiner_focused');
                this.setState((oldState) => {
                    const newState = Object.assign({}, oldState);
                    newState.eventTargetType = valueType;
                    return newState;
                });
                (valueType === "text")
                    ? !this.passwordInput.current.value
                        ? this.passwordInput.current.parentNode.classList.remove('authorization__input-conteiner_focused')
                        : console.log()
                    : !this.textInput.current.value
                        ? this.textInput.current.parentNode.classList.remove('authorization__input-conteiner_focused')
                        : console.log()
            } else {
                console.log();
            }
        } else {
            event.currentTarget.classList.add('authorization__input-conteiner_focused');
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.eventTargetType = valueType;
                return newState;
            });
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

    onSubmit(event) {
        event.preventDefault();

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isSubmited = true;
            newState.eventTargetType = '';
            return newState;
        });

        if (!this.state.login && !this.state.password) {
            this.textInput.current.parentNode.classList.add('authorization__input-conteiner_empty');
            this.passwordInput.current.parentNode.classList.add('authorization__input-conteiner_empty');
        }

        if (!this.state.login) {
            this.textInput.current.parentNode.classList.add('authorization__input-conteiner_empty');
            this.textInput.current.parentNode.classList.remove('authorization__input-conteiner_focused')
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.isValidLogin = false;
                return newState;
            });
        }

        if (!this.state.password) {
            this.passwordInput.current.parentNode.classList.add('authorization__input-conteiner_empty');
            this.passwordInput.current.parentNode.classList.remove('authorization__input-conteiner_focused')
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.isValidPassword = false;
                return newState;
            });
        }

        if (this.state.login && this.state.password) {
            this.state.users.forEach((user) => {
                if (user.login === this.state.login && user.password === this.state.password) {
                    this.props.history.push('/');
                    this.props.authorized(true);

                    this.textInput.current.parentNode.classList.remove('authorization__input-conteiner_focused');
                    this.passwordInput.current.parentNode.classList.remove('authorization__input-conteiner_focused');
                    this.setState((oldState) => {
                        const newState = Object.assign({}, oldState);
                        newState.login = '';
                        newState.password = '';
                        return newState;
                    });
                }
                else
                    this.dataError.current.classList.add('authorization__error_show');


            });
            // this.props.onSubmit(this.state);
        }
    }

    onReset() {
        this.textInput.current.parentNode.classList.remove('authorization__input-conteiner_empty');
        this.passwordInput.current.parentNode.classList.remove('authorization__input-conteiner_empty');

        this.textInput.current.parentNode.classList.remove('authorization__input-conteiner_focused');
        this.passwordInput.current.parentNode.classList.remove('authorization__input-conteiner_focused');

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.eventTargetType = '';
            return newState;
        });
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.login = '';
            newState.password = '';
            return newState;
        });
    }

    render() {
        return <div className="authorization">
            <Link to={"/"} className="authorization__back-link">
                <h3 className="authorization__back-to-home-page">
                    <i className="authorization__arrow-to-home-page material-icons">arrow_back_ios</i>
                    Home
                </h3>
            </Link>
            <form className="authorization__form"
                onSubmit={this.onSubmit.bind(this)}
                onReset={this.onReset.bind(this)}>
                <div>
                    <div className={"authorization__input-conteiner " + (!this.state.isValidLogin && this.state.isSubmited ? ' authorization__input-conteiner_empty' : '')}
                        onFocus={this.onFocus.bind(this)}>
                        <div className="authorization__input-title authorization__input-title_input-active">Login</div>
                        <input className="authorization__input"
                            type="text"
                            onChange={this.changeLogin}
                            value={this.state.login}
                            ref={this.textInput} />
                        <span className="input-underline" ref={this.underlineText}></span>
                    </div>
                    <div className={"authorization__input-conteiner " + (!this.state.isValidPassword && this.state.isSubmited ? ' authorization__input-conteiner_empty' : '')}
                        onFocus={this.onFocus.bind(this)}>
                        <div className="authorization__input-title authorization__input-title_input-active">Password</div>
                        <input className="authorization__input"
                            type="password"
                            onChange={this.changePassword}
                            value={this.state.password}
                            ref={this.passwordInput} />
                        <span className="input-underline" ref={this.underlinePassword}></span>
                    </div>
                    <div className="authorization__error " ref={this.dataError}>User does not exist!</div>
                </div>
                <div className="authorization__action">
                    <button className="action__button mdc-button mdc-button--raised"
                        type="submit">
                        Sign in
                    </button>
                    <button className="action__button mdc-button"
                        type="reset">
                        Cancel
                    </button>
                </div>
                {/* Ajax для локальных файлов json работает только на get */}
                {/* <div className="authorization__sign-up">Don`t have an account?
                    <Link to={'/sign_up'}>Sign up</Link>
                </div> */}
            </form>
            <div className="authorization__logo"></div>
            <div className="authorization__author">by Alina Moskalenko</div>
        </div>
    }
}

export default withRouter(Authorization);