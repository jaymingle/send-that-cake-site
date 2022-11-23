import React, { Component } from "react";
import { Link } from "react-router-dom";

class CheckoutSuccess extends Component {
    render() {
        return (
            <div class="bg-maintenance">
                <div class="content-wrapper">
                    <div class="content-inner">
                        <i class="fas fa-circle-notch fa-spin"></i>
                        <h3>Awesome. Your order is paid for and on its way</h3>
                        <p>Order ID is </p>
                        <p>We will send you an email and sms confirmation for your order</p>
                        <p>You can login <a href="/dashboard/auth/login">here</a> to check the status on your order </p>
                        <Link to="/" class="btn-ghost-light btn-large btn-round">Back to Site</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default CheckoutSuccess;
