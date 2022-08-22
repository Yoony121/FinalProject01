import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';
import RegisterCustomerComponent from './components/RegisterCustomerComponent';
import UpdateSellerComponent from './components/UpdateSellerComponent';
import RegisterSellerComponent from './components/RegisterSellerComponent';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Terms from "./components/Terms";
import RefundPolicy from "./components/RefundPolicy";
import Account from "./components/Account";
import OrderComponent from './components/OrderComponent';
import CartComponent from './components/CartComponent';
import CheckOutComponent from './components/CheckOutComponent';
import ChangePasswordComponent from './components/ChangePasswordComponent';
import ShopComponent from './components/ShopComponent';
import ProductComponent from './components/ProductComponent';
import RegistrationLoginComponent from './components/RegistrationLoginComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
    <div>
        <Router >
              <HeaderComponent />
              {/* <PlaceHolderComponent /> */}
                <div className="container">
                    <Routes> 
                      <Route path = "/" element = {<HomeComponent/>}></Route>
                      <Route path = "/customer/register" element = {<RegisterCustomerComponent/>}></Route>
                      <Route path = "/seller/register" element = {<RegisterSellerComponent/>}></Route>
                      <Route path = "/customer/update" element = {<UpdateCustomerComponent/>}></Route>
                      <Route path = "/seller/update" element = {<UpdateSellerComponent/>}></Route>
                      <Route path = "/about" element = {<About/>}></Route>
                      <Route path = "/contact" element = {<ContactUs/>}></Route>
                      <Route path = "/terms" element = {<Terms/>}></Route>
                      <Route path = "/refund-policy" element = {<RefundPolicy/>}></Route>
                      <Route path = "/account" element = {<Account/>}></Route>
                      <Route path = "/orders" element = {<OrderComponent/>}></Route>
                      <Route path = "/cart" element = {<CartComponent/>}></Route>
                      <Route path = "/checkout" element = {<CheckOutComponent/>}></Route>
                      <Route path = "/change-password" element = {<ChangePasswordComponent/>}></Route>
                      <Route path = "/shop" element = {<ShopComponent/>}></Route>
                      <Route path = "/product/:id" element = {<ProductComponent/>}></Route>
                      <Route path = "/registrater-login" element = {<RegistrationLoginComponent/>}></Route>
                      <Route path = "/login" element = {<LoginComponent updateHeader={HeaderComponent.updateHeader}/>}></Route>
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
