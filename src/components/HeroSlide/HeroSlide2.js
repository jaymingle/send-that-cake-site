import React, { Component } from "react";
import "./hero.css";
import { connect } from "react-redux";
import {
  getProductAsync,
  productDelivery,
  deliveryTime,
  deliveryPhone,
  deliveryEmail,
} from "../../actions/productActions";
import Select from "react-select";
import { Link } from "react-router-dom";
import { addToCartAsync, addToCart } from "../../actions/cartActions";
import { getDeliveryAreaAsync } from "../../actions/deliveryAreaActions";
import InputField from "../inputField/InputField";
import moment from "moment";
// import DateTimePicker from 'react-datetime-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { now } from "jquery";
import { jwtValidator } from "../../actions/loginActions";
import { Offline, Online } from "react-detect-offline";
import { deliveryLag } from "../../utils/utils";

class HeroSlide2 extends Component {
  componentDidMount() {
    this.props.getProduct();
    this.props.getDeliveryArea();
  }

  state = {
    // chosen: "selected",
    selection: [],
    email: "",
    delivery: undefined,
    deliveryPhone: "",
    // deliverydate: undefined,
    // minDateTime: new Date().moment().add(4, 'hours')),
    minDateTime: new Date(),
    // minDateTime: moment().format('YYYY-MM-DDThh:mm'),
    date: new Date(),
    errors: {},
    // minDateTime:`${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, 0)}-${`${new Date().getDate()}`.padStart(2,0)}T${`${new Date().getHours()}`.padStart(2,0)}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
    // maxDateTime:``,
  };

  render() {
    var isloggedIn = jwtValidator(this.props.user.token);
    console.log("User Logged In?", isloggedIn);
    console.log("User Token In?", this.props.user.token);
    // console.log("Moment", moment().format('YYYY-MM-DDThh:mm:ss'),)
    // console.log("BeforeMoment",`${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, 0)}-${`${new Date().getDate()}`.padStart(2,0)}T${`${new Date().getHours()}`.padStart(2,0)}:${`${new Date().getMinutes()}`.padStart(2, 0)}`)
    return (
      <div id="home" className="landing-hero">
        <div className="bg-overlay">
          <div className="hero-wrapper">
            <div className="hero-content">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-5 mb-sm-50 heading-wrapper wow fadeInLeft"
                    data-wow-duration="1.5s"
                  >
                    <h3
                      className="hero-lead wow fadeInLeft"
                      data-wow-duration="1.5s"
                      style={{
                        visibility: "visible",
                        fontSize: "4em",
                        fontWeight: "700",
                        letterSpacing: "3px",
                        animationDuration: "1.5s",
                        animationName: "fadeInLeft",
                        paddingTop:"100px",
                      }}
                    >
                      Surprise your <br />
                      <span
                        className="typer"
                        id="main"
                        data-words="loved ones,best friend,granny,wife,girlfriend"
                        data-colors="#E74C3C,#B7950B,#177E89,pink, white"
                        data-delay="100"
                        data-deleteDelay="1000"
                      ></span>
                    </h3>
                    <h4
                      className="h-alt hero-subheading wow fadeIn"
                      data-wow-duration="2s"
                      data-wow-delay=".7s"
                    >
                      Nothing Says Love More Than a Cake!
                    </h4>
                    <a
                      href="/dashboard/auth"
                      className="btn wow fadeIn"
                      data-wow-duration="2s"
                      data-wow-delay="1s"
                    >
                      Order Now
                    </a>
                  </div>

                  <div
                    className="col-md-offset-3 col-md-4 form-wrapper wow fadeInRight"
                    data-wow-duration="1.5s"
                  >
                    <form action="post" className="form-group">
                      {/* react-select example */}
                      <label style={{ color: "#fff" }}>Choose a Cake</label>
                      <div className="btn-danger text-center">
                        <Offline>Seems you're offline!</Offline>
                      </div>
                      <div className="btn-success text-center">
                        <Online timeout={"3000"}>
                          All set and ready to order!
                        </Online>
                      </div>
                      <Select
                        onChange={this.changeForm}
                        placeholder={"Select your Cake(s) or Gift(s)"}
                        searchable={true}
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti
                        options={this.props.products
                          .filter((p) => p.status == "approved")
                          .map((prod) => {
                            return {
                              value: prod.id,
                              label: (
                                <div>
                                  {prod.pictures?.length > 0 ? (
                                    <img
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                      }}
                                      src={
                                        "https://sendthatcake.com/labapi/resources/" +
                                        prod.pictures[0].downloadUrl
                                      }
                                    />
                                  ) : (
                                    //  loadDefaultImage
                                    <img
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                      }}
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/200px-No_image_3x4.svg.png"
                                    />
                                  )}
                                  {prod.name}
                                </div>
                              ),
                            };
                          })}
                        // className="form-control"
                        classNamePrefix="control"
                      />
                      <span className='errors'>{this.state.errors.products} </span>
                      {/* end react-select example */}

                      {/* <select
                                                name="productname"
                                                className="form-control"
                                            >
                                                <option hidden>
                                                    Choose a quick cake
                                                </option>
                                                {console.log(
                                                    "PRoducts Hero",
                                                    this.props.products
                                                )}

                                                {this.props.products?.map(
                                                    (product) => {
                                                        return (
                                                            <option
                                                                value={
                                                                    product?.id
                                                                }
                                                            >
                                                              <span>
                                                                        {
                                                                            product.name
                                                                        }
                                                                    </span>
                                                                <div>
                                                                  { 
                                                                    product.pictures?.length > 0 ? 
                                                                   <img src={"sendthatcake.com/labapi/" +product.pictures[0].downloadUrl}/>
                                                                   :
                                                                  //  loadDefaultImage
                                                                   null
                                                                  }
                                                                    
                                                                </div>
                                                            </option>
                                                        );
                                                    }
                                                )}
                                            </select>
                                             */}
                      {/* {!isloggedIn ? (
                        <div>
                          <label
                            style={{
                              color: "#fff",
                            }}
                          >
                            Your Email
                          </label>
                          <InputField
                            className={"custInput"}
                            type={"email"}
                            name={"email"}
                            placeholder={
                              "We will send your order details here?"
                            }
                            onChange={this.onchange}
                          />
                        </div>
                      ) : null} */}
                      {/* {!isloggedIn ? (
                        <div>
                          <label
                            style={{
                              color: "#fff",
                            }}
                          >
                            Phone to Call
                          </label>
                          <InputField
                            className={"custInput"}
                            type={"phone"}
                            name={"deliveryPhone"}
                            placeholder={"What number do we call?"}
                            onChange={this.onchange}
                          />
                        </div>
                      ) : null} */}
                      {/* <label style={{ color: "#fff" }}>
                                                Phone To Call
                                            </label>
                                            <InputField
                                                className={"custInput"}
                                                type={"phone"}
                                                name={"deliveryPhone"}
                                                placeholder={"What number do we call?"}
                                                onChange={this.onchange}
                                            /> */}
                      <label style={{ color: "#fff" }}>Delivery Time</label>
                      {/* <input 
                                                className="form-control"
                                                min={this.state.minDateTime}
                                                max={this.state.maxDateTime}
                                                name="deliverytime"
                                                onChange={this.onchange}
                                                type="datetime-local"
                                                format-value="yyyy-MM-ddTHH:mm"
                                                /> */}
                      <DatePicker
                        selected={this.state.date}
                        onChange={(date) => this.setState({ date })}
                        showTimeSelect
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        minDate={this.state.minDateTime}
                        className="form-control"
                        // showTimeInput
                        excludeTimes={[
                          moment()
                            .add(deliveryLag, new Date().getHours(now))
                            .set(new Date().getMinutes(now))
                            .toDate(),
                          moment().set("hour", 0).set("minute", 30).toDate(),
                          moment().set("hour", 1).set("minute", 0).toDate(),
                          moment().set("hour", 1).set("minute", 30).toDate(),
                          moment().set("hour", 2).set("minute", 0).toDate(),
                          moment().set("hour", 2).set("minute", 30).toDate(),
                          moment().set("hour", 3).set("minute", 0).toDate(),
                          moment().set("hour", 3).set("minute", 30).toDate(),
                          moment().set("hour", 4).set("minute", 0).toDate(),
                          moment().set("hour", 4).set("minute", 30).toDate(),
                          moment().set("hour", 5).set("minute", 0).toDate(),
                          moment().set("hour", 5).set("minute", 30).toDate(),
                          moment().set("hour", 6).set("minute", 0).toDate(),
                          moment().set("hour", 6).set("minute", 30).toDate(),
                          moment().set("hour", 7).set("minute", 0).toDate(),
                          moment().set("hour", 7).set("minute", 30).toDate(),
                          moment().set("hour", 8).set("minute", 0).toDate(),
                          moment().set("hour", 8).set("minute", 30).toDate(),
                          moment().set("hour", 9).set("minute", 0).toDate(),
                          moment().set("hour", 21).set("minute", 30).toDate(),
                          moment().set("hour", 22).set("minute", 0).toDate(),
                          moment().set("hour", 22).set("minute", 30).toDate(),
                          moment().set("hour", 23).set("minute", 0).toDate(),
                          moment().set("hour", 23).set("minute", 30).toDate(),
                          moment().set("hour", 0).set("minute", 0).toDate(),
                          ...this.getDisabledTime(),
                          // setHours(setMinutes(new Date(), 0), 17),
                          // setHours(setMinutes(new Date(), 30), 18),
                          // setHours(setMinutes(new Date(), 30), 19),
                          // setHours(setMinutes(new Date(), 30), 17)
                        ]}
                        // dateFormat="MMMM d, yyyy h:mm aa"
                      />
                      <span className='errors'>{this.state.errors.deliveryDate} </span>
                      {/* <InputField
                                                className={"form-control"}
                                                type={"datetime-local"}
                                                name={"deliverydate"}
                                                min={"1985-04-12T23:20:50.52"}
                                                // max={now=()=>{toDateString('Y-m-d')}}
                                                placeholder={"When do we bring it to you"}
                                                onChange={this.onchange}
                                            /> */}
                      <label style={{ color: "#fff" }}>Delivery Location</label>
                      <select
                        name="delivery"
                        onChange={this.onchange}
                        className="buttonPad form-control"
                        value={this.state.delivery}
                      >
                        <option hidden>Select Delivery Location</option>
                        {this.props.delivery?.map((delivery) => {
                          return (
                            <option key={delivery.id} value={delivery.id}>
                              {delivery.name}
                            </option>
                          );
                        })}
                      </select>
                      <span className='errors'>{this.state.errors.deliveryLocation} </span>
                      {
                      this.state.selection?.length > 0 
                      ? 
                      (
                        <div>
                          <h3 className="text-center title">
                            You pay Ghc {this.getAmount()}
                          </h3>
                          <h6 className="text-center title">
                            Your order will be updated on checkout.
                          </h6>
                        </div>
                      ) : 
                      null
                      }

                      <Link
                        to="/checkout"
                        onClick={this.quickOrder}
                        className="form-control btn btn-sm btn-success"
                      >
                        Make Quick Order
                      </Link>

                      <div>
                        <div></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#welcome" className="scroller">
            <span className="scroller-text">scroll down</span>
            <span className="linea-basic-magic-mouse"></span>
          </a>
        </div>
        <div
          style={{
            backgroundColor: "#eb05b1",
            width: "100%",
            height: "1%",
          }}
        ></div>
      </div>
    );
  }
  getDisabledTime = () => {
    console.log("StartDate", this.state.date);
    const disabledDates = [];
    let counter = 0;

    let date = new Date(this.state.date);
    date.setMinutes(0);
    disabledDates.push(date);
    // change number of hours for order time from current time..currently 4 hours
    for (let i = 0; i < 8; i++) {
      date = moment(date).add(30, "minutes").toDate();
      disabledDates.push(date);
    }
    let startOfDay = new Date(this.state.date);
    startOfDay.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (startOfDay.getTime() == today.getTime()) {
      while (
        startOfDay.getTime() < this.state.date.getTime() ||
        counter < this.state.date.getHours() * 2
      ) {
        counter++;

        startOfDay = moment(startOfDay).add(30, "minutes").toDate();
        disabledDates.push(startOfDay);
      }
    }
    console.log("Disabled Dates", disabledDates);
    return disabledDates;

    // this.state.date.
  };

  changeForm = (selection, action) => {
    // console.log("Values are", );
    this.setState({ selection: selection });
  };

  getAmount = () => {
    let amount = 0;
    // for(let i =0; i< this.state.selection?.length; i++){
    //     const s = this.state.selection[i];
    //     amount+= this.props.products.find(p=>p.id ==s.value)?.price || 0 ;

    // }

    if (this.state.selection) {
      this.state.selection.forEach((s) => {
        amount += this.props.products.find((p) => p.id == s.value)?.price || 0;
      });
    }
    console.log("Delivery PRops", this.props.delivery);
    console.log("Delivery State", this.state.delivery);
    amount +=
      this.props.delivery.find((d) => d.id == this.state.delivery)?.price || 0;

    return amount;
  };


  quickOrder = (e) => {
    //checking errors for product selection
    let error = false;
    const errors = {...this.state.errors}
    if(this.state.selection?.length < 1){
      errors.products = 'Please choose a product';
      error = true;
      
    }else{
      delete errors.products;
    }
    if(moment(this.state.date).isBefore(moment().add(deliveryLag,'hours')) ){
      errors.deliveryDate = 'Please choose a date that is not today';
      error = true;
      
    }else{
      delete errors.deliveryDate;
    }
    console.log("delivery iss" ,this.state.delivery)
    if(!this.state.delivery){
      errors.deliveryLocation = 'Please choose a location';
      error = true;
    }else{
      delete errors.deliveryLocation;
    }
    this.setState({errors})
    console.log("Error,", error)
    if(error){
      e.preventDefault()
      
      return;
      
    }
    
    var userLoggedIn = jwtValidator(this.props.user.token);
    if (!userLoggedIn) {
      console.log("LoggedINGet", userLoggedIn);
      let selectedForm = [];
      this.state.selection.forEach((s) => {
        selectedForm.push(this.props.products.find((p) => p.id == s.value));
      });
      console.log("HomeLocation", this.props.delivery?.name);
      console.log("Delivery Phone", this.state.deliveryPhone);
      console.log("DeliveryEmail", this.state.email);

      this.props.getProductLocation(
        this.props.delivery.find((d) => d.id == this.state.delivery)
      );
      this.props.addToCart(selectedForm);
      this.props.getDeliveryTime(this.state.date);
      this.props.getDeliveryPhone(this.state.deliveryPhone);
      this.props.getEmail(this.state.email);
    } else {
      this.state.selection.forEach((s) => {
        const product = this.props.products.find((p) => p.id == s.value);
        // product.quantity = 1

        this.props.addToCartAsync({
          product: product.id,
          quantity: 1,
        });
      });
      this.props.getProductLocation(
        this.props.delivery.find((d) => d.id == this.state.delivery)
      );
      this.props.getDeliveryTime(this.state.date);
      this.props.getDeliveryPhone(this.state.user?.phone);
      // console.log("UserObject", this.props.user)
      this.props.getEmail(this.props.user?.email);
    }
  };

  onchange = (e) => {
    // e.preventDefault();
    // console.log("aaaa", e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  };
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    products: state.product.product,
    delivery: state.deliveryArea.delivery,  
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProductAsync()),
    addToCart: (products) => dispatch(addToCart(products)),
    addToCartAsync: (products) => dispatch(addToCartAsync(products)),
    getProductLocation: (location) => dispatch(productDelivery(location)),
    getDeliveryTime: (date) => dispatch(deliveryTime(date)),
    getDeliveryPhone: (phone) => dispatch(deliveryPhone(phone)),
    getDeliveryArea: () => dispatch(getDeliveryAreaAsync()),
    getEmail: (email) => dispatch(deliveryEmail(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSlide2);
