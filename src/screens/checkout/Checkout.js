import React, { Component } from "react";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import DefaultFooter1 from "../../containers/DefaultLayout/DefaultFooter1";
import {
    getCartAsync,
    getCart,
    addToCart,
    deleteCartAsync,
} from "../../actions/cartActions";
import { connect } from "react-redux";
import InputField from "../../components/inputField/InputField";
import { deliveryPhone, deliveryTime, deliveryEmail, deliveryLandMark,
    deliveryHseNo, textOnCake, productDelivery } from "../../actions/productActions";
import { PaystackButton } from "react-paystack";
import { jwtValidator } from "../../actions/loginActions";
import Noty from "noty";
import { makeOrderAsync } from "../../actions/orderActions";
import { Redirect, Link } from "react-router-dom";
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";
import MakePayment from "./MakePayment";

const title = "Checkout";
const description = "You're one step away from completing your order";

const publicKey = "pk_test_c5847678ba4a867b55f4b9bdb8e032f277a360b2";

class Checkout extends Component {
    state = {
        delivery: undefined,
        deliveryLandMark: "",
        deliveryHseNo: "",
        subTotal: "",
        vat: "",
        deliveryFee: "",
        total: "",
        phone: this.props.user?.phone || "",
        email: this.props.user?.email || "",
        textOnCake:"",
        errors: {},
    };

    onSuccess = t => {
        this.setState({canPay: false})
        if (t.status == "success") {
           this.makeOrder(t)
            
                this.props.history.push("/pay-success")
            
           
            console.log("Payment Status", t);
            alert("Great! Your order was successful");


        }else{
            this.props.history.push("/pay-failed")
        }
    }
    onClose= () => {this.setState({canPay: false}); alert("Wait! Don't leave :(")}

    componentProps = () => {
        return {
            email: this.state.email,
            amount: parseInt(this.state.total * 100),
            currency: "GHS",
            
            publicKey,
            text: "Pay Now",
            
            };
    
    };

    componentDidMount() {
        this.quantityCalc();
        console.log(("Loggin the Cart",this.props.cart));
    }
    componentDidUpdate(previousprops){
        if(JSON.stringify(this.props.cart)!= JSON.stringify(previousprops.cart) || JSON.stringify(this.props.productdelivery)!= JSON.stringify(previousprops.productdelivery)){
            this.quantityCalc()
        }
      
    }

    validateAndPay = (e) => {
        e.preventDefault();
        console.log("State Email",this.state.email)
        let error = false;
        const errors = {...this.state.errors};
        if(this.state.email?.length < 1){
            errors.email = 'Heads up!! A valid email is needed to continue';
            error = true;
            
          }else{
            delete errors.email;
          }
        if(this.state.phone?.length < 1){
            errors.phone = 'Tell us which phone to call to deliver';
            error = true;
            
          }else{
            delete errors.phone;
          }
          this.setState({errors})
          console.log("Error,", error)

          if(error){
            return;
          }

        this.setState({canPay: true})
    }

    render() {
        var isloggedIn = jwtValidator(this.props.user.token);
        console.log("State", this.state)
        console.log("Validator", jwtValidator(this.props.user.token));
        console.log("This Cart", this.props.cart);
        console.log("This Product", this.props.productdelivery);
        return (
            <div>
                <FrontNav />
                <FrontHeader title={title} description={description} />
                <div className="container section">
                    <div className="row">
                        {this.props.cart?.length > 0
                        ?
                        <h2
                            className="col-lg-9"
                            style={{ color: "#eb05b1", fontWeight: "600" }}
                        >
                            Let's review your order
                        </h2>
                        :
                        <h2 className="col-lg-9"
                        style={{ color: "#eb05b1", fontWeight: "600" }}>Your cart is not looking dope!</h2>
                        }
                        <div className="col-lg-9">
                            <div className="table-responsive">
                                {
                                    this.props.cart?.length > 0?
                                    <table className="table checkout-table">
                                    <thead style={{ background: "#eb05b1" }}>
                                        <tr>
                                            <th></th>
                                            <th>Preview</th>
                                            <th>Product</th>
                                            <th>Delivery Info</th>
                                            <th>Extra Details</th>
                                            <th>Q-ty</th>
                                            <th>Amount</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {console.log(
                                            "LogginCart",
                                            this.props.cart
                                        )}
                                        {this.props.cart.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td
                                                        style={{
                                                            color: "#000",
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </td>
                                                    <td>
                                                    {/* <GlassMagnifier
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                    }}
                                                     src={
                                                        `https://sendthatcake.com/labapi/resources/` +
                                                        item
                                                            ?.pictures[0]
                                                            ?.downloadUrl
                                                    }
                                                    alt="Thumb product image"

                                                    /> */}
                                                    <SideBySideMagnifier
                                                        imageSrc={
                                                            `https://sendthatcake.com/labapi/resources/` +
                                                            item
                                                                ?.pictures[0]
                                                                ?.downloadUrl
                                                        }
                                                        imageAlt={item.name}
                                                        // mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                                                        touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                                                        />
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        {
                                                            this.props
                                                                .productdelivery
                                                                ?.name
                                                        }{" "}
                                                        <br />
                                                        Delivery on:
                                                        {new Date(
                                                            this.props.deliveryTime
                                                        ).toGMTString()}
                                                        <br />
                                                        We'll call:{" "}
                                                        {
                                                            this.state
                                                                .phone
                                                        }
                                                    </td>
                                                    <td className="td-product-options">
                                                         <input
                                                            name={"textOnCake"}
                                                            type={"text"}
                                                            max={25}
                                                            value={this.state.textOnCake}
                                                            onChange={this.onchange1}
                                                            placeholder={
                                                                "Custom text on cake if any"
                                                            }
                                                        />
                                                    </td>
                                                    <td className="td-product-qty">
                                                        <input
                                                            name={`${item.id}`}
                                                            onChange={
                                                                this
                                                                    .onchangeQuantity
                                                            }
                                                            className="form-control"
                                                            type="number"
                                                            value={
                                                                item.quantity ||
                                                                "1"
                                                            }
                                                            min="1"
                                                        />
                                                    </td>
                                                    <td>GHc {item.price}</td>
                                                    <td>
                                                        <span
                                                            onClick={() =>{
                                                                var userLoggedIn = jwtValidator(this.props.user.token);
                                                                if(userLoggedIn){
                                                                    this.props.delCart(
                                                                        item.cartId
                                                                    )

                                                                }else{
                                                                    console.log("This.Props.Cart In Else", this.props.cart)
                                                                    const newCartItems = this.props.cart?.filter(item2 => item2.id!=item.id)
                                                                    this.props.addToCart(newCartItems)
                                                                    console.log("New Cart Items In Else", newCartItems);
                                                                }
                                                                console.log("After delete")
                                                                // this.quantityCalc()

                                                            }
                                                                
                                                            }
                                                            className="cart-remove-btn"
                                                        >
                                                            <span className="linea-arrows-square-remove"></span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                :
                                <div>There are no items in cart. Please visit <Link to="/cake-store">store </Link>to purchase items </div>}

                            
                            </div>
                            {/* <div className="calc-shipping" id="calc-shipping">
                                <h2 style={{ color: "#000" }}>
                                    Update Delivery Location
                                </h2>
                                <p>
                                    Delivery costs will be calculated once you
                                    have provided your location. Any location
                                    aside the listed ones attract a special fee
                                </p>
                                <form action="#" className="calc-form">
                                    <div className="form-group col-lg-4 no-gap-left">
                                        <select
                                            name="delivery"
                                            onChange={this.onchange}
                                            className="form-control"
                                            value={this.state.delivery}
                                        >
                                            <option hidden>
                                                Update Delivery Location
                                            </option>
                                            {console.log(
                                                "DeliveryTime1",
                                                this.props.deliveryTime
                                            )}
                                            {this.props.delivery?.map(
                                                (delivery) => {
                                                    return (
                                                        <option
                                                            key={delivery.id}
                                                            value={delivery.id}
                                                        >
                                                            {delivery.name}
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </select>
                                        <label for="calc-country-select">
                                            Select Delivery Location
                                        </label>
                                    </div>

                                    <div className="form-group col-lg-4">
                                        <input
                                            type="text"
                                            name="deliveryLandMark"
                                            className="form-control"
                                            id="calc-state"
                                            placeholder="Example: Near Independence Square"
                                        />
                                        <label for="calc-state">
                                            Popular LandMark
                                        </label>
                                    </div>

                                    <div className="form-group col-lg-4 no-gap-right">
                                        <input
                                            name="deliveryHseNo"
                                            type="text"
                                            className="form-control"
                                            id="calc-zip"
                                            placeholder="House Number"
                                        />
                                        <label for="calc-zip">
                                            House No.(Ghana Post GPS)
                                        </label>
                                    </div>

                                    <div className="col-lg-12 no-gap btn-totals">
                                        <input
                                            type="submit"
                                            className="btn"
                                            value="Update Order with Location"
                                        />
                                    </div>
                                </form>
                            </div> */}

                            {!isloggedIn && this.props.cart?.length > 0  
                            ?
                            
                            (<form
                                action="#"
                                className="checkout-coupon-form ws-m"
                            >
                                <div className="col-lg-4">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Please enter email to continue"
                                        onChange= {this.onchange1}
                                        value= {this.state.email}
                                    />
                                <span className='errors-checkout'>{this.state.errors.email} </span>

                                </div>
                                <div className="col-lg-4">
                                    <input
                                        type="tel"
                                        name="phone"
                                        maxLength='10'
                                        className="form-control"
                                        placeholder="Please tell us which phone to call"
                                        onChange={this.onchange1}
                                        value={this.state.phone}
                                    />
                                    <span className='errors-checkout'>{this.state.errors.phone} </span>

                                </div>
                            </form>)
                            :
                            null    
                        }

                           
                        </div>

                        {
                        this.props.cart?.length > 0?
                        <div className="col-lg-3 totals-group">
                            <div
                                className="totals-heading"
                                style={{ background: "#eb05b1" }}
                            >
                                <h6>Cart Totals</h6>
                            </div>
                            <div className="totals-content">
                                <div className="subtotal-group">
                                    <h6 style={{ color: "#000" }}>Subtotal:</h6>
                                    <p>Ghc {this.state.subTotal}</p>
                                </div>
                                <div className="shipping-group">
                                    <h6 style={{ color: "#000" }}>
                                        Delivery Fee:{" "}
                                    </h6>
                                    <p>Ghc {this.state.deliveryFee}</p>
                                   
                                </div>
                                <div className="shipping-group">
                                    <h6 style={{ color: "#000" }}>
                                        Update Location:{" "}
                                    </h6>
                                    <form>
                                    <div className="col-lg-12 totals-group">
                                        <select
                                            name="delivery"
                                            onChange={this.onchange}
                                            className="form-control"
                                            value={this.state.delivery}
                                        >
                                            <option disabled selected hidden>
                                                Update Location
                                            </option>
                                            {console.log(
                                                "DeliveryTime1",
                                                this.props.deliveryTime
                                            )}
                                            {this.props.delivery?.map(
                                                (delivery) => {
                                                    return (
                                                        <option
                                                            key={delivery.id}
                                                            value={delivery.id}
                                                        >
                                                            {delivery.name}
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </select>
                                    </div>
                                </form>
                                   
                                </div>
                                <div className="shipping-group">
                                    <h6 style={{ color: "#000" }}>
                                        VAT/NHIL:{" "}
                                    </h6>
                                    <p style={{ color: "#000" }}>
                                        Ghc {this.state.vat}
                                    </p>
                                </div>
                                <div className="total-group">
                                    <h5 style={{ color: "#000" }}>Total:</h5>
                                    <p>Ghc {this.state.total}</p>
                                </div>
                                <div className="checkout-btn-wrapper">
                                    {/* <a href="#" className="btn checkout-btn">Pay Now<i className="fa-fa money"></i></a> */}
                                    <button className="btn btn-success" onClick={this.validateAndPay} >Pay now</button>
                                    <MakePayment 
                                        email={this.state.email} 
                                        amount={this.state.total * 100}
                                        metadata={{
                                            name: this.props.user?.firstName,
                                            phone: this.state.phone,
                                        }}
                                        onClose={this.onClose}
                                        onSuccess={this.onSuccess}
                                        pay={this.state.canPay}
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        
                        null
                        }
                    </div>
                </div>
                <DefaultFooter1 />
            </div>
        );
    }

    makeOrder =(t,e)=>{
        
          e.preventDefault()
        const data ={
            location: {id: this.props.productdelivery.id},
            deliveryPhone: this.state.phone,
            products: this.props.cart.map(cartitem =>{
                return {
                    product:{id: cartitem.id},
                    quantity: cartitem.quantity
                }
            }),
            deliveryDate: this.props.deliveryTime,
            email: this.state.email,
            paymentId: t.reference,
            // quantity: this.props.product.quantity,
            
        }
        console.log("ORder Placed??", this.props)
        this.props.makeOrder(data)
    }

    onchange = (e) =>{
        e.preventDefault();
        const location = this.props.delivery.find(l=> {
            return l.id == e.target.value;

        })
        console.log("Location updated", location)
        this.props.getProductLocation(location);

    }
    onchange1 = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
      };

    onchangeQuantity = (e) => {
        console.log("Onchange Spinner");
        e.preventDefault();
        const newCart = [...this.props.cart];
        const selectedProduct = newCart.find(
            (item) => item.id == e.target.name
        );
        if (selectedProduct) {
            selectedProduct.quantity = e.target.value;
        }
        console.log("New Cart is", newCart);
        // this.props.getOfflineCart(newCart);
        this.quantityCalc();

        // this.setState({ [e.target.name]: e.target.value });
    };

    quantityCalc = () => {
        if (this.props.cart.length == 0){
            this.setState({
                vat : 0,
                total: 0,
                subTotal:0,
                deliveryFee: 0,
            })
            return
        }
        const details = {};
        let quantityTotal = 0;
        console.log("Calculating cost widt", this.props.cart.length)
        this.props.cart.forEach((item) => {
            let subTotal = (item.quantity || 1) * item.price;
            quantityTotal += subTotal;
            console.log("Subtotal", subTotal)
        });
        details.subTotal = quantityTotal;
        const vat = quantityTotal * this.props.vat;
        details.vat = vat;
        let totalCost = quantityTotal +( this.props.productdelivery?.price || 0);
        totalCost += vat;
        details.total = totalCost;
        details.deliveryFee = this.props.productdelivery?.price || 0;
        this.setState({ ...details }, ()=>{console.log("TotalTotal",(this.state))});

        console.log("delivery phone1 details", this.props.deliveryPhone)
        console.log("delivery email1 details", this.props.deliveryEmail)

    };
}
const mapStateToProps = (state) => {
    return {
        vat: state.product.vat,
        vendor: state.vendor.vendorL,
        products: state.product?.product,
        cart: state.cart.cart,
        productdelivery: state.product.productdelivery,
        delivery: state.deliveryArea.delivery,
        deliveryTime: state.product.productdeliveryT,
        deliveryPhone: state.product.deliveryPhone,
        deliveryEmail: state.product.deliveryEmail,
        deliveryLandMark: state.product?.deliveryLandMark,
        deliveryHseNo: state.product?.deliveryHseNo,
        user: state.login.user,
        textOnCake: state.product?.textOnCake,
    
    };
};
//lol..
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (data)=> dispatch(addToCart(data)),
        getCart: () => dispatch(getCartAsync()),
        // getOfflineCart: (products) => dispatch(getCart(products)),
        getDeliveryTime: (date) => dispatch(deliveryTime(date)),
        delCart: (id) => dispatch(deleteCartAsync(id)),
        // delCartOffline: (id) => dispatch(deleteCartOffline(id)),
        makeOrder: (data) => dispatch(makeOrderAsync(data)),
        setDeliveryPhone: (phone) => dispatch(deliveryPhone(phone)),
        setDeliveryEmail: (email) => dispatch(deliveryEmail(email)),
        getProductLocation: (location) => dispatch(productDelivery(location)),


        getDeliveryLandMark: (landmark)=> dispatch(deliveryLandMark(landmark)),
        getDeliveryHseNo: (houseno)=> dispatch(deliveryHseNo(houseno)),
        settextOnCake: (text)=> dispatch(textOnCake(text)),

        // deleteVendor: (id)=> dispatch(getVendorsAsync(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
