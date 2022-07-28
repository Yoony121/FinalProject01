import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <div className="container">
                        <div className="footer-widget">
                            <div className="widget">
                                <div className="widget-heading">
                                    <h3>Important Link</h3>
                                </div>
                                <div className="widget-content">
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/refund-policy">Refund Policy</Link></li>
                                        <li><Link to="/terms">Terms and Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget">
                                <div className="widget-heading">
                                    <h3>Information</h3>
                                </div>
                                <div className="widget-content">
                                    <ul>
                                        <li><Link to="/account">My Account</Link></li>
                                        <li><Link to="/orders">My Orders</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget">
                                <div className="widget-heading">
                                    <h3>Follow us</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="follow">
                                        <ul>
                                            <li><a href="#"><img src="/img/icons/facebook.png"/></a></li>
                                            <li><a href="#"><img src="/img/icons/twitter.png"/></a></li>
                                            <li><a href="#"><img src="/img/icons/instagram.png"/></a></li>
                                        </ul>
                                    </div>						
                                </div>
                                <div className="widget-heading">
                                    <h3>Subscribe for Newsletter</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="subscribe">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subscribe" placeholder="Email"/>
                                                <img src="img/icons/paper_plane.png"/>
                                            </div>
                                        </form>
                                    </div>						
                                </div>
                            </div>
                        </div>
                        <div className="footer-bar">
                            <div className="copyright-text">
                                <p>Copyright 2022 - All Rights Reserved</p>
                            </div>
                            <div className="payment-mode">
                                <img src="/img/icons/paper_money.png"/>
                                <img src="/img/icons/visa.png"/>
                                <img src="/img/icons/mastercard.png"/>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent