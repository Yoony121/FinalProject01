import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ProductService from '../services/ProductService';
import CartService from '../services/CartService';
import WishListService from '../services/WishListService';

class ProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            id: 2,
            product: {},
            recommendedProducts: []
                 
        };
    }

    componentDidMount() {
        ProductService.getProductById(this.state.id).then(res => {
            this.setState({product: res.data});
        });
        ProductService.getRecommendedProducts().then(res => {
            this.setState({recommendedProducts: res.data});
        });
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
                            <li><a href="">Product</a></li>
                        </ul>
                    </div>

                    <div className="single-product">
                        <div className="images-section">
                            <div className="larg-img">
                                <img src={"/" + this.state.product.image} alt=""/>
                            </div>
                        </div>

                        <div className="product-detail">
                            <div className="product-name">
                                <h2>{this.state.product.productName}</h2>
                            </div>
                            <div className="product-price">
                                <h3>{"$"+this.state.product.price}</h3>
                            </div>
                            <hr/>
                            <div className="product-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo leo. Donec aliquet mauris ac consequat ornare. Pellentesque eget leo tempor, venenatis mauris sed, viverra ante. Donec tincidunt mauris vel tincidunt ultricies. Sed sed libero hendrerit elit gravida vulputate.</p>
                            </div>
                            <hr/>
                            <div className="product-cart">
                                <form id="cart-form">
                                    <div className="form-group">
                                        <input type="number" className="cart-number" name="cartNumber" value="1" min="1" max="10"/>
                                        <button className="btn btn-secondary" onClick={() => CartService.addProductToCartForCustomer(this.state.product.id)}>Add to Cart</button>
                                    </div>
                                </form>
                                <form id="wishlist-form">
                                    <div className="form-group">
                                        <input type="checkbox" className="wishlist" name="wishlist" onChange={() => WishListService.addProductToWishListForCustomer(this.state.product.id)}/> Add To Wishlist
                                    </div>
                                </form>
                            </div>
                            <hr/>
                            <div className="product-meta">
                                <p><b>Category: </b> {this.state.product.category}</p>
                                <p><b>Share This Product: </b> Facebook, Twitter</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="product-long-description">
                        <h3>Product Description</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo leo. Donec aliquet mauris ac consequat ornare. Pellentesque eget leo tempor, venenatis mauris sed, viverra ante. Donec tincidunt mauris vel tincidunt ultricies. Sed sed libero hendrerit elit gravida vulputate. 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo leo. Donec aliquet mauris ac consequat ornare. Pellentesque eget leo tempor, venenatis mauris sed, viverra ante. Donec tincidunt mauris vel tincidunt ultricies. Sed sed libero hendrerit elit gravida vulputate. 
                        </p>
                    </div>
                    <hr/>
                    <div className="new-product-section">
                        <div className="product-section-heading">
                            <h2>Recommend Products <img src="/img/icons/good_quality.png"/></h2>
                            <h3>OUR BEST PRODUCTS RECOMMENDED FOR YOU</h3>
                        </div>
                        <div className="product-content">
                                {
                                    this.state.recommendedProducts.map(
                                        product => 
                                        <div className="product">
                                            <Link to={"/product/"+product.id}>
                                                <img src={"/"+product.image}/>
                                            </Link>
                                            <div className="product-detail">
                                                <h3>{product.productName}</h3>
                                                <h2>{product.category}</h2>
                                                <a href="#">Add to Cart</a>
                                                <p>{"$"+product.price}</p>
                                            </div>
                                        </div>
                                    )
                                }
                        </div>
                        
                    </div>
                </main>
            </div>
        )
    }
}

export default ProductComponent;