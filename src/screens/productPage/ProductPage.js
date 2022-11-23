import React, { Component } from "react";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';
import { getProductAsync, getSinProductAsync } from "../../actions/productActions";
import { addToCartAsync, addToCart } from "../../actions/cartActions";
import { jwtValidator } from "../../actions/loginActions";
import {connect} from 'react-redux';
import $ from 'jquery';

const title = "Single Product";
const description = "Welcome to the Single Product Page";

class ProductPage extends Component {
    componentDidMount(){
        console.log("Match Pra", this.props.match.params.id)
        this.props.getSingleProduct(this.props.match.params.id)
        // console.log("Single Product", this.props.singleProd(this.props.match.params.id))
    }

    componentDidUpdate(){
        window.initslick('.sliderclass');
    }

    render() {
        return (
            <div>
                <FrontNav />
                <FrontHeader title={title} description={description} />
                <div className="container section">
                    <div className="row ws-m">
                        <div className="col-md-12">
                            <ul className="product-meta">
                                <h6 style={{color:"#000"}}>{this.props.singleProd.name}</h6>
                                {/* <li>Stock: {this.props.singleProd.quantityAvailable}</li> */}
                                {/* <li>
                                    CATEOGRY: <a href="#">{this.props.singleProd?.productCategory?.name}</a>
                                </li> */}
                                {/* <li>
                                    TAGS: <a href="#">Suits</a>,{" "}
                                    <a href="#">Man</a>
                                </li> */}
                            </ul>
                        </div>

                        <div className="col-md-1">
                        <ul className="prod_single_thumbs_slider slider1">
                            <li>
                                <img src={this.props.singleProd.pictures ? "https://sendthatcake.com/labapi/resources/" +  this.props.singleProd.pictures[0]?.downloadUrl : "../../assets/images/avatar-placeholder.png"} />     
                            </li>
                        </ul>
                        </div>

                        <div className="col-md-5">
                                  <div className="sliderclass">
                                        {
                                            this.props.singleProd?.pictures?.map((picture) => { 
                                                
                                                return (<img key={picture.id}
                                            className="img-responsive"
                                            src={"https://sendthatcake.com/labapi/resources/" +picture?.downloadUrl}
                                            alt="Productg"
                                        />)
                                    })
                                        }
                                
                                    
                                    
                                   
                                </div>
                            
                        
                        </div>

                        <div className="col-md-5 product-info">
                            <span className="prod-cat" style={{color:"#000"}}>{this.props.singleProd?.productCategory?.name}</span>
                            <h1 className="prod-name" style={{color:"#000"}}>{this.props.singleProd?.name}</h1>
                            <h3 className="prod-price" style={{color:"#000"}}>
                                Ghc{this.props.singleProd.price}{" "}
                                    {/* <span className="price-cut">Ghc{this.props.singleProd.price + 40}</span> */}
                            </h3>
                            <p className="prod-desc">
                                {/* {this.props.singleProd.description}. */}
                            </p>
                            {this.props.user.token
                            ?
                            <ul className="prod-rating">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-star"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-star"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-star"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-star"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-star-o"></i>
                                    </a>
                                </li>
                                <li>14 Reviews</li>
                            </ul>
                            :
                            null
                            }

                            {/* <div className="prod-size">
                                <h5>UK Size</h5>
                                <ul className="sizes">
                                    <li>
                                        <a href="#">S</a>
                                    </li>
                                    <li>
                                        <a href="#" className="size-btn-active">
                                            M
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">L</a>
                                    </li>
                                    <li>
                                        <a href="#">XL</a>
                                    </li>
                                </ul>
                            </div> */}

                            <a href="#" onClick={this.addToCart} className="btn btn-large">
                                Add to cart
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a
                                        href="#tab-description"
                                        aria-controls="tab-description"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        Description
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        href="#tab-sizeguide"
                                        aria-controls="tab-sizeguide"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        Size Guide
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        href="#tab-reviews"
                                        aria-controls="tab-reviews"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        Reviews
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a
                                        href="#tab-help"
                                        aria-controls="tab-help"
                                        role="tab"
                                        data-toggle="tab"
                                    >
                                        How to buy
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div
                                    role="tabpanel"
                                    className="tab-pane active"
                                    id="tab-description"
                                >
                                    <p>
                                        {this.props.singleProd.description}
                                    </p>
                                   
                                </div>

                                <div
                                    role="tabpanel"
                                    className="tab-pane"
                                    id="tab-sizeguide"
                                >
                                    <table className="table table-row-highlight">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Short</th>
                                                <th>Regular</th>
                                                <th>Long</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>UK (Inches)</td>
                                                <td>30</td>
                                                <td>32</td>
                                                <td>34</td>
                                            </tr>

                                            <tr>
                                                <td>EURO (CM)</td>
                                                <td>76</td>
                                                <td>81</td>
                                                <td>86</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div
                                    role="tabpanel"
                                    className="tab-pane prod-reviews"
                                    id="tab-reviews"
                                >
                                    <div className="tp-review">
                                        <p className="tpr-name">
                                            Jonathan Webb
                                        </p>
                                        <span className="tpr-date">
                                            on June 23,2016
                                        </span>
                                        <ul className="tpr-rating">
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                            <li>4 Stars</li>
                                        </ul>
                                        <p className="tpr-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Eos
                                            expedita, quasi perferendis. Nemo
                                            distinctio provident, ex autem
                                            corporis consequuntur praesentium
                                            cupiditate earum similique.
                                            Voluptatibus corrupti, eaque
                                            assumenda itaque suscipit ratione
                                            architecto optio aperiam soluta,
                                            quia inventore culpa at, distinctio
                                            qui quod dolor ducimus temporibus.
                                            Ducimus nihil dignissimos quibusdam,
                                            esse? Cum.
                                        </p>
                                    </div>

                                    <div className="tp-review">
                                        <p className="tpr-name">Philip Lee</p>
                                        <span className="tpr-date">
                                            on June 23,2016
                                        </span>
                                        <ul className="tpr-rating">
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>5 Stars</li>
                                        </ul>
                                        <p className="tpr-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Voluptatum corporis, adipisci optio
                                            impedit, aut deleniti architecto ex
                                            dolor iure id sapiente autem rem
                                            voluptatibus beatae repellat quo eos
                                            dolore vel sunt dignissimos modi,
                                            debitis ipsam, reiciendis odit.
                                            Exercitationem, quae? Maxime!
                                        </p>
                                    </div>

                                    <div className="tp-review">
                                        <p className="tpr-name">Carol Greene</p>
                                        <span className="tpr-date">
                                            on June 23,2016
                                        </span>
                                        <ul className="tpr-rating">
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star-o"></i>
                                            </li>
                                            <li>3 Stars</li>
                                        </ul>
                                        <p className="tpr-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Quis
                                            amet necessitatibus illum ad aliquam
                                            magnam quasi veniam ea, dolorem
                                            sequi, exercitationem sapiente.
                                            Doloribus incidunt odit velit
                                            necessitatibus porro qui aperiam!
                                        </p>
                                    </div>

                                    <div className="tp-review">
                                        <p className="tpr-name">Tyler Owens</p>
                                        <span className="tpr-date">
                                            on June 23,2016
                                        </span>
                                        <ul className="tpr-rating">
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-star"></i>
                                            </li>
                                            <li>5 Stars</li>
                                        </ul>
                                        <p className="tpr-content">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Temporibus facere magnam sit, iure
                                            consequatur dicta ipsa quo nisi id
                                            eligendi sunt expedita corporis
                                            nulla quam aperiam doloribus
                                            officiis sapiente? Vero repudiandae
                                            rerum quasi nihil nesciunt pariatur,
                                            impedit et sed ab officiis officia
                                            debitis, culpa repellendus ipsa est
                                            obcaecati repellat ut incidunt
                                            ducimus corporis nostrum
                                            voluptatibus?
                                        </p>
                                    </div>
                                </div>

                                <div
                                    role="tabpanel"
                                    className="tab-pane ft-steps-numbers"
                                    id="tab-help"
                                >
                                    <div className="ws-s"></div>

                                    <div className="col-lg-4 col-md-6 mb-sm-100 ft-item">
                                        <span className="ft-nbr">01</span>
                                        <h4>Select product</h4>
                                        <p>
                                            Chose the desired product, then
                                            select his options if available,
                                            like size, color, etc. and press the
                                            cart button
                                        </p>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-sm-100 ft-item">
                                        <span className="ft-nbr">02</span>
                                        <h4>Review your order</h4>
                                        <p>
                                            Review your order at checkout,
                                            calculate the shipping, if you have
                                            available coupon add it here
                                        </p>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-sm-100 ft-item">
                                        <span className="ft-nbr">03</span>
                                        <h4>Buy</h4>
                                        <p>
                                            Enter your payment details and the
                                            address where you want to receive
                                            the product, and press buy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DefaultFooter1 />
            </div>
        );
    }

    addToCart =(e)=>{
        e.preventDefault();
        var userLoggedIn = jwtValidator(this.props.user.token);
        if(userLoggedIn){
            this.props.addToCartAsync({product : {id: this.props.singleProd.id}, quantity: 1
            })
        }else{
            let newCart = [...this.props.cart];
            const existingItem = newCart.find(cartItem => {
                return cartItem.id == this.props.singleProd.id
            })
            if(existingItem) {
                newCart = newCart.filter(cartItem => {
                    return cartItem.id !== this.props.singleProd.id
                })
                existingItem.quantity = existingItem.quantity + 1;
                newCart.push(existingItem)
            }
            else {
                newCart.push({...this.props.singleProd, quantity: 1})
            }
            this.props.addToCart(newCart)
        }

    }
}
const mapStateToProps =(state)=>{
    return{
        singleProd: state?.product?.prod,
        user: state?.login.user,
        cart: state.cart.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleProduct: (id)=> dispatch(getSinProductAsync(id)),
        addToCartAsync: (product) => dispatch(addToCartAsync(product)),
        addToCart: (products) => dispatch(addToCart(products)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);


