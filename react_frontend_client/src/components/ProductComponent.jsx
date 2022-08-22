import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ProductService from '../services/ProductService';
import CartService from '../services/CartService';
import WishListService from '../services/WishListService';
import CommentService from '../services/CommentService';
import ReactStars from "react-rating-stars-component";

class ProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            product: {},
            recommendedProducts: [],
            customerReviews: [],
            reviewRating: '',
            reviewContent: '',
            error: ''
                 
        };
        this.changeReviewContentHandler = this.changeReviewContentHandler.bind(this);
        this.changeReviewRatingHandler = this.changeReviewRatingHandler.bind(this);
        this.addReview = this.addReview.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
    }

    async componentDidMount() {
        ProductService.getProductById(this.props.match.params.id).then(res => {
            this.setState({product: res.data});
        });
        ProductService.getRecommendedProducts().then(res => {
            this.setState({recommendedProducts: res.data});
        });
        CommentService.getCommentsOfProduct(this.props.match.params.id).then(res => {
            this.setState({customerReviews: res.data});
        });
    }

    changeReviewContentHandler= (event) => {
        this.setState({reviewContent: event.target.value});
    }

    changeReviewRatingHandler= (event) => {
        this.setState({reviewRating: event.target.value});
    }

    ratingChanged = (newRating) => {
        this.setState({reviewRating: newRating});
    };

    addReview = async (e) => {
        e.preventDefault();
        let id = this.props.match.params.id;
        let rating = this.state.reviewRating;
        let content = this.state.reviewContent;
        try {
            await CommentService.addCommentToProduct(id, rating, content);
            await CommentService.getCommentsOfProduct(this.props.match.params.id).then(res => {
                this.setState({customerReviews: res.data});
            });
        } catch (error) {
            this.setState({error});
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
                    <div className="product-review">
                        <h4>Customer Reviews</h4>
                        <div className="col-md-10 card">
                            <form className="mt-3 mb-3">
                                <ReactStars count={5} onChange={this.ratingChanged} size={24} activeColor="#ffd700"/>
                                <div className="form-group">
                                    <textarea placeholder="Leave your review here..." name="content" className="form-control" cols="30" rows="3"
                                        value={this.state.reviewContent} onChange={this.changeReviewContentHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.addReview}>Submit</button>
                            </form>
                            {
                                this.state.customerReviews.map(
                                    review => 
                                    <div className="Review card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{"Reviewed by: " + review.customerName + " on " + review.time}</h5>
                                            <ReactStars count={5} value={review.rating} size={24} activeColor="#ffd700"/>
                                            <p className="card-text">{"Review: " + review.content}</p>
                                        </div>
                                    </div>
                                    
                                )
                            }
                        </div>
                    </div>
                    <hr />
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