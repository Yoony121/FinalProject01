import React, { Component } from 'react'
import { Link, Navigate } from "react-router-dom";
import authHeader from '../services/AuthHeader';
import Search from '../services/Search';
import WishListService from '../services/WishListService';
import CartService from '../services/CartService';
import AuthService from '../services/AuthService';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasLogIn: false,
            distance: 5,
            keywords: "",
            wishListProducts: [],
            cartProducts: [],
            loginUpdate: 0,
            searchResult: []
        }

        this.selectDistance = this.selectDistance.bind(this);
        this.changeKeywordsHandler = this.changeKeywordsHandler.bind(this);
    }

    componentDidMount() {
        WishListService.getWishListProductsForCustomer().then(res => {
            this.setState({wishListProducts: res.data});
        });
        CartService.getCartProductsForCustomer().then(res => {
            this.setState({cartProducts: res.data});
        });
    }

    handleClick = () => {
        this.forceUpdate();
    }

    handleLogout = async () => {
        await AuthService.logout();
        this.props.updateLogin();
    }

    handleSearch = async () => {
        await Search.search(this.state.keywords, this.state.distance).then(res => this.setState({searchResult: res.data}));
        await this.props.updateSearchResult(this.state.searchResult);
    }

    componentWillMount() {
        this.setState({hasLogIn: Object.keys(authHeader()).length !== 0});
        // this.state.hasLogIn = Object.keys(authHeader()).length !== 0;
        console.log("login state updated");
    }

    selectDistance = (event) => {
        this.setState({distance: event.target.value});
    }

    changeKeywordsHandler= (event) => {
        this.setState({keywords: event.target.value});
    }

    render() {
        console.log("Render got triggered");
        const isLoggedIn = this.props.isLoggedIn;
        let dropdown;
        if (isLoggedIn) {
            dropdown =  <ul>
                            <li><Link to="/account">My Account</Link></li>
                            <li><Link to="/orders">My Orders</Link></li>
                            <li><Link to="/"  onClick={this.handleLogout}>Logout</Link></li>
                        </ul>;
        } else {
            dropdown =  <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/customer/register">Customer Register</Link></li>
                            <li><Link to="/seller/register">Seller Register</Link></li>
                        </ul>
        }
        return (
            <div>
                <header>
                    <div className="container">
                        <div className='brand'>
                            <div className='logo'>
                                <Link to="/">
                                    <img src="/img/icons/online_shopping.png"/>
                                    <div className="logo-text">
                                        <p className="big-logo">UsedGoods</p>
                                        <p className="small-logo">
                                            <Link to="/shop">Online Shop</Link>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="input-group">
                                <select className="form-select form-select-md" size="1" name="select-distance" onChange={this.selectDistance}>
                                    <option value="5">5 km</option>
                                    <option value="10">10 km</option>
                                    <option value="20">20 km</option>
                                </select>
                                <input type="search" className="form-control rounded" maxLength="100" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
                                        value={this.state.keywords} onChange={this.changeKeywordsHandler}/>
                                <Link to="/search-result">
                                    <button type="button" className="btn btn-outline-primary" onClick={this.handleSearch}>search</button>
                                </Link>
                            </div>
                            <div className="shop-icon">
                                <div className="dropdown">
                                    <img src="/img/icons/account.png"/>
                                    <div className="dropdown-menu">
                                        {dropdown}
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <img src="/img/icons/heart.png"/>
                                    <div className="dropdown-menu wishlist-item">
                                        <table border="1">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                </tr>
                                            </thead>
                                            
                                            <tbody>
                                                {
                                                    this.state.wishListProducts.map(wishListProduct => {
                                                        return (
                                                            <tr>
                                                                <td><img src={"/"+wishListProduct.image}/></td>
                                                                <td>{wishListProduct.productName}</td>
                                                            </tr>
                                                            
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <Link to="/cart"><img src="/img/icons/shopping_cart.png"/></Link>
                                    <div className="dropdown-menu cart-item">
                                        <table border="1">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th className="center">Price</th>
                                                    <th className="center">Qty.</th>
                                                    <th className="center">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.cartProducts.map(cartProduct => {
                                                        return (
                                                            <tr>
                                                                <td><img src={"/"+cartProduct.image}/></td>
                                                                <td>{cartProduct.productName}</td>
                                                                <td className="center">{cartProduct.price}</td>
                                                                <td className="center">{cartProduct.productCount}</td>
                                                                <td className="center">{cartProduct.subTotal}</td>
                                                            </tr>
                                                            
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent