import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../services/AuthService';
import CustomerService from '../services/CustomerService';
import SellerService from '../services/SellerService';

class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCustomer: true,
            user: {}
        }
    }

    componentDidMount() {
        let user = AuthService.getCurrentUser();
        if (user.roles[0] === "CUSTOMER") {
            CustomerService.getCustomerAccount().then(res => {
                this.setState({user: res.data});
            })
        } else {
            SellerService.getSellerAccount().then(res => {
                this.setState({isCustomer: false, user: res.data});
            })
        }
        
    }

    render() {
        return (
            <div className="container">
                <main>
                    <div className="breadcrumb">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li> / </li>
                            <li>Account</li>
                        </ul>
                    </div>
                    
                    <div className="account-page">
                        <div className="col-md-auto profile">
                            <div className="profile-img">
                                <img src="img/product/img5.jpg"/>
                                <h2>{this.state.user.firstName + " " + this.state.user.lastName}</h2>
                                <p>{this.state.user.emailAddress}</p>
                            </div>
                            <ul>
                                <li><Link to="/account" className="active">Account <span></span></Link></li>
                                <li><Link to="/orders">My Orders <span></span></Link></li>
                                <li><Link to="/change-password">Change Password <span></span></Link></li>
                                <li><Link to="">Logout <span></span></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-auto border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4"><label className="labels">Name</label><input type="text" className="form-control" placeholder={this.state.user.firstName} value=""/></div>
                                    <div className="col-md-4"><label className="labels">Surname</label><input type="text" className="form-control" value={this.state.user.lastName} placeholder="surname"/></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-8"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder={this.state.user.phoneNumber} value=""/></div>
                                    <div className="col-md-8"><label className="labels">Street</label><input type="text" className="form-control" placeholder={this.state.user.street} value=""/></div>
                                    <div className="col-md-8"><label className="labels">City</label><input type="text" className="form-control" placeholder={this.state.user.city} value=""/></div>
                                    <div className="col-md-8"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder={this.state.user.zipCode} value=""/></div>
                                    <div className="col-md-8"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder={this.state.user.emailAddress} value=""/></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4"><label className="labels">Country</label><input type="text" className="form-control" placeholder={this.state.user.country} value=""/></div>
                                    <div className="col-md-4"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder={this.state.user.state}/></div>
                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Update Profile</button></div>
                            </div>
                        </div>
                        {/* <div className="account-detail">
                            <h2>Account</h2>
                            <div className="billing-detail">					
                                <form className="checkout-form">
                                    <div className="form-inline">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <div>{this.state.isCustomer ? this.state.customer.firstName : this.state.seller.firstName}</div>
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <div>{this.state.isCustomer ? this.state.customer.lastName : this.state.seller.lastName}</div>
                                        </div>
                                    </div>
                                    <div className="form-inline">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <select id="country" name="country">
                                                <option selected>---Select a Country---</option>
                                                <option value="pakistan">Pakistan</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>City</label>
                                            <select id="city" name="city">
                                                <option selected>---Select a City---</option>
                                                <option value="karachi">Karachi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea style={{resize: "none"}} id="address" name="address" rows="3">xyz area, street 24 </textarea>
                                    </div>
                                    <div className="form-inline">					
                                        <div className="form-group">
                                            <label>Tel</label>
                                            <input type="text" id="tel" name="tel" minLength="11" maxLength="11" value="555-XXXXXXX"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Mobile</label>
                                            <input type="text" id="mobile" name="mobile" minLength="11" maxLength="11" value="555-XXXXXXX"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label></label>
                                        <input type="submit" id="update" name="update" value="Update"/>
                                    </div>
                                </form>		
                            </div>
                        </div>				 */}
                    </div>		
                </main>
            </div>
        )
    }
}

export default Account