import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import CustomerService from '../services/CustomerService';

class RegisterCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
            emailAddress: '',
            phoneNumber: '',
            user: null,
            error: null
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeStreetHandler = this.changeStreetHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
    }

    createCustomer = async (e) => {
        e.preventDefault();
        let customer = {userName: this.state.userName, password: this.state.password,
                        emailAddress: this.state.emailAddress};
        console.log('customer => ' + JSON.stringify(customer));
        
        try {
            let user = await CustomerService.registerCustomer(customer);
            this.setState({ user });
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

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeStreetHandler= (event) => {
        this.setState({street: event.target.value});
    }

    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }

    changeZipCodeHandler= (event) => {
        this.setState({zipCode: event.target.value});
    }

    changeEmailAddressHandler= (event) => {
        this.setState({emailAddress: event.target.value});
    }

    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    getTitle(){
        return <h3 className="text-center">Register</h3>
    }
    render() {
        let user = this.state.user;
        let error = this.state.error;
        return (
            <div>
                {user && (
                    <Navigate to='/customer/update' replace={true} />
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
                                        <div className = "form-group">
                                            <input placeholder="Email Address" name="emailAddress" className="form-control" 
                                                value={this.state.emailAddress} onChange={this.changeEmailAddressHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.createCustomer}>Save</button>
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

export default RegisterCustomerComponent
