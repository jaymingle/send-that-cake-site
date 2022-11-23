import React, { Component } from "react";
import { Transaction } from "@paystack/checkout-js";

class PaymentModal extends Component {
    paymentModal = async () => {
        const transactionData = {
            email: "test@paystack.com", // replace this with customer email
            amount: 100,
            key: "pk_test_06f996acc968fa6f6d23af48cb686c70cb49a808",
            curreny: "GHS",
        };

        try {
            const transaction = await Transaction.request(transactionData);
            await transaction.setCard({
                number: "4084084084084081",
                cvv: "408",
                month: "01",
                year: "20",
                pin: "1234",
            });
            // charge resolves to a ChargeResponse
            const chargeResponse = await transaction.chargeCard();
            if (chargeResponse.status === "success") {
                console.log("card was charged successfully!");
            }
        } catch (error) {
            console.log("This Payment" ,error);
        }
    };

    componentDidMount() {
        this.paymentModal();
        console.log("Popup awaiting" );
    }
    render() {
        return <h2 style={{color:'black'}}>Payment Modal</h2>;
    }
}

export default PaymentModal;
