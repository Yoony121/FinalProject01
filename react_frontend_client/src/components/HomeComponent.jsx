import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import ProductService from '../services/ProductService';
import CartService from '../services/CartService';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mainPageProducts: [],
            recommendedProducts: [],
            trendingProducts: [],
            sliderImages: [{url: "img/slider/slide-1.jpg"},
                            {url: "img/slider/slide-2.jpg"},
                            {url: "img/slider/slide-3.jpg"}],
            currentProductId: {}
        }
        // this.productIdHandler = this.productIdHandler.bind(this);
        // this.addProductToCart = this.addProductToCart.bind(this);


    }

    componentDidMount() {
        ProductService.getMainPageProducts().then(res => {
            this.setState({mainPageProducts: res.data});
            // this.setState({sliderImages: res.data.map(function (product) {
            //     return {url: product.image};
            // })});
        });
        ProductService.getRecommendedProducts().then(res => {
            this.setState({recommendedProducts: res.data});
        });
        ProductService.getTrendingProducts().then(res => {
            this.setState({trendingProducts: res.data});
        });
    }

    // addProductToCart = async (e) => {
    //     e.preventDefault();
    //     CartService.addProductToCartForCustomer(this.state.currentProductId);
    // }

    // productIdHandler= (event) => {
    //     this.setState({currentProductId: event.target.value});
    // }


    render() {
        return (
            <div>
                <main>
                    <div>
                        <SimpleImageSlider
                            width={896}
                            height={504}
                            images={this.state.sliderImages}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>

                    <div className="new-product-section">
                        <div className="product-section-heading">
                            <h2>Tranding Products <img src="img/icons/increase.png"/></h2>
                            <h3>Most selling product for the month</h3>
                        </div>
                        <div className="product-content">
                                {
                                    this.state.trendingProducts.map(
                                        product => 
                                        <div className="product">
                                            <Link to={"/product/"+product.id}>
                                                <img src={product.image}/>
                                            </Link>
                                            <div className="product-detail">
                                                <h3>{product.productName}</h3>
                                                <h2>{product.category}</h2>
                                                <button className="btn btn-secondary" onClick={() => CartService.addProductToCartForCustomer(product.id)}>Add to Cart</button>
                                                <p>{"$"+product.price}</p>
                                                {/* <button buttonRadius="30%" onClick={() => CartService.addProductToCartForCustomer(product.id)}>Add to Cart</button> */}
                                                {/* <a href="#">Add to Cart</a> */}
                                                
                                            </div>
                                        </div>
                                    )
                                }
                        </div>
                    </div>

                    <div className="collection">
                        <div className="men-collection">
                            <h2>Men's Collection</h2>
                        </div>
                        <div className="women-collection">
                            <h2>Women's Collection</h2>
                        </div>
                    </div>

                    <div className="new-product-section">
                        <div className="product-section-heading">
                            <h2>Recommend Products <img src="img/icons/good_quality.png"/></h2>
                            <h3>OUR BEST PRODUCTS RECOMMENDED FOR YOU</h3>
                        </div>
                        <div className="product-content">
                                {
                                    this.state.recommendedProducts.map(
                                        product => 
                                        <div className="product">
                                            <Link to={"/product/"+product.id}>
                                                <img src={product.image}/>
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
                        {/* <div className="product-content">
                            <div className="product">
                                <a href="product.html">
                                    <img src="img/product/img1.jpg"/>
                                </a>
                                <div className="product-detail">
                                    <h3>Men's / Watches</h3>
                                    <h2>Gray Color Men's Watch</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.4500/-</p>
                                </div>						
                            </div>
                            <div className="product">
                                <a href="product.html">
                                    <img src="img/product/img2.jpg"/>
                                </a>
                                <div className="product-detail">
                                    <h3>Men's / Pants</h3>
                                    <h2>Levi's Jeans Pant</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.2000/-</p>
                                </div>
                            </div>
                            <div className="product">
                                <a href="product.html">
                                    <img src="img/product/img3.jpg"/>
                                </a>
                                <div className="product-detail">
                                    <h3>Men's / Watches</h3>
                                    <h2>Black Men's Watch</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.4000/-</p>
                                </div>
                            </div>
                            <div className="product">
                                <a href="product.html">
                                    <img src="img/product/img4.jpg"/>
                                </a>
                                <div className="product-detail">
                                    <h3>Men's / Shoes</h3>
                                    <h2>Nick Black Sneakers</h2>
                                    <a href="#">Add to Cart</a>
                                    <p>Rs.3200/-</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </main>
            </div>
        )
    }
}

export default HomeComponent