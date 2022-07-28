import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import SellerService from '../services/SellerService';

class UpdateSellerComponent extends Component {
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
            bankName: '',
            accountNumber: '',
            routingNumber: '',
            user: '',
            error: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeStreetHandler = this.changeStreetHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeZipCodeHandler = this.changeZipCodeHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
        this.changeAccountNumberHandler = this.changeAccountNumberHandler.bind(this);
        this.changeRoutingNumberHandler = this.changeRoutingNumberHandler.bind(this);
        this.createSeller = this.createSeller.bind(this);
    }

    createSeller = async (e) => {
        e.preventDefault();
        let seller = {userName: this.state.userName, password: this.state.password,
                        firstName: this.state.firstName, lastName: this.state.lastName, street: this.state.street,
                        city: this.state.city, state: this.state.state, country: this.state.country,
                        zipCode: this.state.zipCode, emailAddress: this.state.emailAddress, phoneNumber: this.state.phoneNumber,
                        bankName: this.state.bankName, accountNumber: this.state.accountNumber, routingNumber: this.state.routingNumber};
        console.log('seller => ' + JSON.stringify(seller));

        try {
            let user = await SellerService.updateSeller(seller);
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

    changeBankNameHandler= (event) => {
        this.setState({bankName: event.target.value});
    }

    changeAccountNumberHandler= (event) => {
        this.setState({accountNumber: event.target.value});
    }

    changeRoutingNumberHandler= (event) => {
        this.setState({routingNumber: event.target.value});
    }

    getTitle(){
        return <h3 className="text-center">Update Seller Information</h3>
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
                                        <div className = "form-group">
                                            <input placeholder="Bank Name" name="bankName" className="form-control" 
                                                value={this.state.bankName} onChange={this.changeBankNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="Account Number" name="accountNumber" className="form-control" 
                                                value={this.state.accountNumber} onChange={this.changeAccountNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="Routing Number" name="routingNumber" className="form-control" 
                                                value={this.state.routingNumber} onChange={this.changeRoutingNumberHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.createSeller}>Save</button>
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

export default UpdateSellerComponent
