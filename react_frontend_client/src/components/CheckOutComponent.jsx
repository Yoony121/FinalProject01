import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CustomerService from '../services/CustomerService';

class CheckOutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customer: {}
        }
    }

    componentDidMount() {
        CustomerService.getCustomerAccount().then(res => this.setState({customer: res.data}));
    }

    render() {
        return (
            <div className="container">
                <main>
                    <div className="breadcrumb">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li> / </li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li> / </li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li> / </li>
                            <li>Checkout</li>
                        </ul>
                    </div>

                    <h2>Billing Detail</h2>
                    <div className="checkout-page">
                        <div className="billing-detail">					
                            <form className="checkout-form">
                                <h4>Shipping Detail</h4>
                                <div className="form-inline">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" id="fname" name="fname" placeholder={this.state.customer.firstName}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" id="lname" name="lname" placeholder={this.state.customer.lastName}/>
                                    </div>
                                </div>
                                <div className="form-inline">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" id="lname" name="lname" placeholder={this.state.customer.country}/>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" id="lname" name="lname" placeholder={this.state.customer.city}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea style={{resize: "none"}} id="address" name="address" rows="3" placeholder={this.state.customer.street}></textarea>
                                </div>
                                <h4>Login Detail</h4>
                                <div className="form-inline">					
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" id="email" name="email" autocomplete="off" placeholder={this.state.customer.emailAddress}/>
                                    </div>
                                </div>
                                <h4>Contact Detail</h4>
                                <div className="form-inline">					
                                    <div className="form-group">
                                        <label>Tel</label>
                                        <input type="text" id="tel" name="tel" minlength="11" maxLength="11" placeholder={this.state.customer.phoneNumber}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile</label>
                                        <input type="text" id="mobile" name="mobile" minlength="11" maxLength="11"/>
                                    </div>
                                </div>
                                <h4>Additional Information (Optional)</h4>
                                <div className="form-group">
                                    <label>Order Note</label>
                                    <textarea style={{resize: "none"}} id="address" name="address" rows="3"></textarea>
                                </div>
                                <div className="order-summary">
                                    <div className="checkout-total">
                                        <h3>Order Summary</h3>
                                        <ul>
                                            <li>Cart Amount: <span>1200</span></li>
                                            <li>Delivery Charges: <span>100</span></li>
                                            <hr/>
                                            <li>Total Amount: <span>1287</span></li>
                                            <hr/>
                                            <li><input type="radio" name="payment"/> Cash on Delivery</li>
                                            <li><input type="radio" id="easypaisa" name="payment" value="easypaisa"/> Easypaisa Account</li>
                                            <li>
                                                <textarea id="easypaisaText" rows="5" disabled="disable">Please deposit the payment in our easypaisa account# 030X-XXXXXXX after confirm payment kindly send us payment slip and order transaction id on above number.</textarea>
                                            </li>
                                            <li><input type="radio" name="payment"/> Bank Transferred</li>
                                            <hr/>
                                            <li><input type="submit" name="order" value="Place Order"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>		
                </main>
            </div>
        )
    }
}

export default CheckOutComponent