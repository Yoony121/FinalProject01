import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import CustomerService from '../services/CustomerService';

class UpdateCustomerComponent extends Component {
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
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeStreetHandler = this.changeStreetHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
    }

    createCustomer = async (e) => {
        e.preventDefault();
        let customer = {userName: this.state.userName, password: this.state.password, 
                        firstName: this.state.firstName, lastName: this.state.lastName, street: this.state.street,
                        city: this.state.city, state: this.state.state, country: this.state.country,
                        zipCode: this.state.zipCode, emailAddress: this.state.emailAddress, phoneNumber: this.state.phoneNumber};
        console.log('customer => ' + JSON.stringify(customer));
        
        try {
            let user = await CustomerService.updateCustomer(customer);
            this.setState({ user });
        } catch (error) {
            this.setState({ error });
        }
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

    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    getTitle(){
        return <h3 className="text-center">Update Customer Information</h3>
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
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="Street" name="street" className="form-control" 
                                                value={this.state.street} onChange={this.changeStreetHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="State" name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="Country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="ZipCode" name="zipCode" className="form-control" 
                                                value={this.state.zipCode} onChange={this.changeZipCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
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

export default UpdateCustomerComponent
