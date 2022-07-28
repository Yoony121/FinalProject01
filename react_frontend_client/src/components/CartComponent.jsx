import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CartService from '../services/CartService';
import ProductService from '../services/ProductService';

class CartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cartProducts: [],
            totalProduct: 0,
            totalItem: 0,
            totalPrice: 0
        }
    }

    componentDidMount() {
        CartService.getCartProductsForCustomer().then(async (res) => {
            await this.setState({cartProducts: res.data});
            let itemCount = 0;
            let productCount = 0;
            let totalCost = 0.0;
            console.log(this.state.cartProducts);
            await this.state.cartProducts.forEach(product => {
                itemCount += parseInt(product.productCount);
                productCount += 1;
                totalCost += parseFloat(product.subTotal);
            })
            this.setState({totalProduct: productCount});
            this.setState({totalItem: itemCount});
            this.setState({totalPrice: totalCost});
        })
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
                            <li>Cart</li>
                        </ul>
                    </div>

                    <h2>Shopping Cart</h2>
                    <div className="cart-page">
                        <div className="cart-items">					
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="3">Cart Items</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.cartProducts.map(cartProduct => {
                                            return (
                                                <tr>
                                                    <td style={{width: '20%'}}><img src={"/"+cartProduct.image}/></td>
                                                    <td style={{width: '60%'}}>
                                                        <h2>{cartProduct.productName}</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        <br/>
                                                        <h3>{"Price: $" + cartProduct.price}</h3>
                                                        <br/>
                                                        <button onClick={() => CartService.removeProductFromCartForCustomer(cartProduct.cartId)}>Remove Item</button>
                                                    </td>
                                                    <td className="qty" style={{width: '15%'}}>
                                                        <div className="input-group">
                                                            <span className="input-group-prepend">
                                                                <button type="button" className="btn btn-outline-secondary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                                    <span className="fa fa-minus">-</span>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quant[1]" className="form-control input-number" value={cartProduct.productCount} min="1" max="10"/>
                                                            <span className="input-group-append">
                                                                <button type="button" className="btn btn-outline-secondary btn-number" data-type="plus" data-field="quant[1]">
                                                                    <span className="fa fa-plus">+</span>
                                                                </button>
                                                            </span>
                                                        </div>
                                                        <br />
                                                        <h3>{"SubTotal: $" + cartProduct.subTotal}</h3>
                                                    </td>
                                                </tr>
                                                
                                            );
                                        })
                                    }
                                </tbody>	
                            </table>
                            <div className="pagination">
                                <ul>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="cart-summary">
                            <div className="checkout-total">
                                <h3>Cart Summary</h3>
                                <ul>
                                    <li>{"Number of Products x " + this.state.totalProduct}</li>
                                    <li>{"Number of items x " + this.state.totalItem}</li>
                                    <hr/>
                                    <li>Cart Total <span style={{float: 'right'}}>{"$" + this.state.totalPrice}</span></li>
                                    <li><Link to="/checkout">Go to Checkout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>		
                </main>
            </div>
        )
    }
}

export default CartComponent