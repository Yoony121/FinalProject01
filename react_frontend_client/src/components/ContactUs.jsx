import React from "react";

const ContactUs = () => {
    return (
        <div className="container">
            <main>
                <div className="contact">
                    <h2 className="heading">Contact Us</h2>
                    <form className="checkout-form">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lname"/>
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea name="message" id="message" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <label></label>
                            <input type="submit" id="contact" name="contact" value="Send"/>
                        </div>
                    </form>	
                </div>
            </main>
        </div>
    );
};

export default ContactUs;