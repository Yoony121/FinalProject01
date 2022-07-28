import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
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
                            <li><Link to="/account">Account</Link></li>
                            <li> / </li>
                            <li>Orders</li>
                        </ul>
                    </div>

                    
                    <div className="account-page">
                        <div className="profile">
                            <div className="profile-img">
                                <img src="img/product/img5.jpg"/>
                                <h2>John Doe</h2>
                                <p>user@mail.com</p>
                            </div>						
                            <ul>
                                <li><Link to="/account">Account <span></span></Link></li>
                                <li><Link to="/orders" className="active">My Orders <span></span></Link></li>
                                <li><Link to="/change-password">Change Password <span></span></Link></li>
                                <li><Link to="">Logout <span></span></Link></li>
                            </ul>
                        </div>
                        <div className="account-detail">					
                            <h2>My Orders</h2>
                            <div className="order-detail">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Order Ref#</th>
                                            <th>Amount</th>
                                            <th>Payment Mode</th>
                                            <th>Status</th>
                                            <th>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>06-02-2020</td>
                                            <td>61245231241</td>
                                            <td>2,150</td>
                                            <td>Cash</td>
                                            <td>Pending</td>
                                            <td><a href="#">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>08-02-2020</td>
                                            <td>612467771245</td>
                                            <td>5,000</td>
                                            <td>Cash</td>
                                            <td>Pending</td>
                                            <td><a href="#">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>15-08-2020</td>
                                            <td>612874511233</td>
                                            <td>3000</td>
                                            <td>Cash</td>
                                            <td>Pending</td>
                                            <td><a href="#">View</a></td>
                                        </tr>	
                                    </tbody>
                                </table>
                            </div>
                        </div>				
                    </div>		
                </main>
            </div>
        )
    }
}

export default OrderComponent