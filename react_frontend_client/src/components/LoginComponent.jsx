import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import AuthService from '../services/AuthService';
import HeaderComponent from './HeaderComponent';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
            user: '',
            error: '',
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.createSeller = this.createSeller.bind(this);
    }

    createSeller = async (e) => {
        e.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password;

        try {
            let user = await AuthService.login(userName, password);
            this.setState({ user });
            this.props.updateLogin();
        } catch (error) {
            this.setState({ error });
        }
    }

    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    getTitle(){
        return <h3 className="text-center">Login</h3>
    }
    render() {
        let user = this.state.user;
        let error = this.state.error;
        return (
            <div>
                {user && (
                    <Navigate to='/' replace={true} />
                )}
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <br />
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <input placeholder="User Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.createSeller}>Login</button>
                                        <Link to='/'>
                                            <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent
