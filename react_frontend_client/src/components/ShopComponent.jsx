import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ShopComponent extends Component {
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
                            <li>Shop</li>
                        </ul>
                    </div>
        
                    <div class="new-product-section shop">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <h3>Category</h3>
                                <ul>
                                    <li><a href="">Men's Clothes</a></li>
                                    <li><a href="">Men's Shoes</a></li>
                                    <li><a href="">Men's Watches</a></li>
                                    <li><a href="">Women's Handbags</a></li>
                                    <li><a href="">Women's Glasses</a></li>
        
                                </ul>
                            </div>
                            <div class="sidebar-widget">
                                <h3>Range Filter</h3>
                                <p>
                                <label for="amount"></label>
                                <input type="text" id="amount" readonly style={{border: "0", color: "#F0E68C", marginBottom: "5px"}}/>
                                </p>						 
                                <div id="slider-range"></div>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img1.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Men's / Watches</h3>
                                    <h2>Gray Color Men's Watch</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.4500/-</p>
                                </div>						
                            </div>
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img2.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Men's / Pants</h3>
                                    <h2>Levi's Jeans Pant</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.2000/-</p>
                                </div>
                            </div>
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img3.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Men's / Watches</h3>
                                    <h2>Black Men's Watch</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.4000/-</p>
                                </div>
                            </div>
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img4.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Men's / Shoes</h3>
                                    <h2>Nick Black Sneakers</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.3200/-</p>
                                </div>
                            </div>
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img5.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Glasses</h3>
                                    <h2>Wood Frame Sun Glass</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.1200/-</p>
                                </div>
                            </div>
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img6.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Women's / Hand Bags</h3>
                                    <h2>Leather Hand Bag</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.3800/-</p>
                                </div>
                            </div>
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img7.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Men's / Shoes</h3>
                                    <h2>Men's Sneaker</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.3500/-</p>
                                </div>
                            </div>
                            <div class="product">
                                <a href="product.html">
                                    <img src="img/product/img8.jpg"/>
                                </a>
                                <div class="product-detail">
                                    <h3>Women's / Hand Bags</h3>
                                    <h2>Brown Leather Hand Bag</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.5200/-</p>
                                </div>
                            </div>
                        </div>				
                    </div>
                    <div class="load-more">
                        <a href="#">Load More</a>
                    </div>		
                </main>
            </div>
        )
    }
}

export default ShopComponent