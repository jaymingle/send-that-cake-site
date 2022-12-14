import React, { Component,useState } from "react";
import { PaystackButton } from "react-paystack";

const pay = () => {
    const publicKey = "sk_test_01e2f72e34cbf3befb0490fc178028154e225f94";
    const amount = 1000000;
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
    };
};

class PaySendThatCake extends Component {
  
    render() {
        return (
            <div className="pay">
                <div className="container">
                    <div className="item">
                        <img />
                        <div className="item-details">
                            <p>Dancing Shoes</p>
                            <p>{amount}</p>
                        </div>
                    </div>
                    <div className="checkout-form">
                        <form>
                            <label>Name</label>
                            <input
                                type="text"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Email</label>
                            <input
                                type="text"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Phone</label>
                            <input
                                type="text"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </form>
                        <PaystackButton {...componentProps} />
                    </div>
                </div>
            </div>
        );
    }
}

export default PaySendThatCake;
