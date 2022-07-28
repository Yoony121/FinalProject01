import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ChangePasswordComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div class="container">
                <main>
                    <div class="breadcrumb">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li> / </li>
                            <li><Link to="/account">Account</Link></li>
                            <li> / </li>
                            <li>Change Password</li>
                        </ul>
                    </div>

                    
                    <div class="account-page">
                        <div class="profile">
                            <div class="profile-img">
                                <img src="img/product/img5.jpg"/>
                                <h2>John Doe</h2>
                                <p>user@mail.com</p>
                            </div>						
                            <ul>
                                <li><Link to="/account">Account <span></span></Link></li>
                                <li><Link to="/orders">My Orders <span></span></Link></li>
                                <li><Link to="/change-password" className="active">Change Password <span></span></Link></li>
                                <li><Link to="">Logout <span></span></Link></li>
                            </ul>
                        </div>
                        <div class="account-detail">
                            <h2>Change Password</h2>
                            <div class="billing-detail">					
                                <form class="checkout-form">
                                    <div class="form-group">
                                        <label>Old Password</label>
                                        <input type="password" id="old_password" name="old_password"/>
                                    </div>
                                    <div class="form-inline">
                                        <div class="form-group">
                                            <label>New Password</label>
                                            <input type="password" id="new_password" name="new_password"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Confirm Password</label>
                                            <input type="password" id="confirm_password" name="confirm_password"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label></label>
                                        <input type="submit" id="update_pass" name="update_pass" value="Update"/>
                                    </div>
                                </form>		
                            </div>
                        </div>				
                    </div>		
                </main>
            </div>
        )
    }
}

export default ChangePasswordComponent