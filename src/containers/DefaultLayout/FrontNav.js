import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteCartAsync, getCartAsync, addToCart } from "../../actions/cartActions";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import { connect } from "react-redux";
import { jwtValidator } from "../../actions/loginActions";

const product_1 = require("../../assets/images/shop/p-thumb-1.jpg");
const product_2 = require("../../assets/images/shop/p-thumb-2.jpg");

class FrontNav extends Component {
    componentDidMount() {
        const isLoggedIn = jwtValidator(this.props.user.token);
        if (isLoggedIn) {
            this.props.getCart();
        }
    }
    render() {
        return (
                <nav class="navbar navbar-default navbar-fixed-top mega navbar-trans">
                    <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a className="navbar-brand" href="/">
                            <img src="./assets/images/logo.png" alt="stc-logo" />
                        </a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown active">
                                <Link to="/" >
                                    Home<span></span>
                                </Link>
                            </li>

                            {/* <li><Link to="/about-us">About Us</Link></li> */}
                            <li className="active">
                                <Link to="/cake-store">Cake Store</Link>
                            </li>
                            <li className="active">
                                <Link to="/vendors">Vendors</Link>
                            </li>
                            <li className="active">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="active">
                                <Link to="/contact">Contact</Link>
                            </li>

                            {/* <li className="dropdown mega-fw">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Portfolio <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <div className="row">


                                    <div className="col-lg-3 mb-sm-30">
                                        <li className="dropdown-header">Full Width</li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="pages/portfolio/portfolio-fw-1col.html">Full Width 1 Column</a></li>
                                        <li><a href="pages/portfolio/portfolio-fw-2col.html">Full Width 2 Columns</a></li>
                                        <li><a href="pages/portfolio/portfolio-fw-3col.html">Full Width 3 Columns</a></li>
                                        <li><a href="pages/portfolio/portfolio-fw-4col.html">Full Width 4 Columns</a></li>
                                    </div>


                                    <div className="col-lg-3 mb-sm-30">
                                        <li className="dropdown-header">Boxed</li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="pages/portfolio/portfolio-boxed-1col.html">Boxed 1 Columns</a></li>
                                        <li><a href="pages/portfolio/portfolio-boxed-2col.html">Boxed 2 Columns</a></li>
                                        <li><a href="pages/portfolio/portfolio-boxed-3col.html">Boxed 3 Columns</a></li>
                                        <li><a href="pages/portfolio/portfolio-boxed-4col.html">Boxed 4 Columns</a></li>
                                    </div>


                                    <div className="col-lg-3 mb-sm-30">
                                        <li className="dropdown-header">Masonry</li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="pages/portfolio/portfolio-masonry-1.html">Masonry Layout 1</a></li>
                                        <li><a href="pages/portfolio/portfolio-masonry-2.html">Masonry Layout 2</a></li>
                                        <li><a href="pages/portfolio/portfolio-masonry-3.html">Masonry Layout 3</a></li>
                                    </div>


                                    <div className="col-lg-3 mb-sm-30">
                                        <li className="dropdown-header">Other</li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="pages/portfolio/portfolio-single-1.html">Portfolio Single 1</a></li>
                                        <li><a href="pages/portfolio/portfolio-single-2.html">Portfolio Single 2</a></li>
                                        <li><a href="pages/portfolio/portfolio-single-3.html">Portfolio Single 3</a></li>
                                        <li><a href="pages/portfolio/portfolio-single-4.html">Portfolio Single 4</a></li>
                                    </div>

                                </div>
                            </ul>
                        </li> */}

                            {/* <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Blog <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="pages/blog/blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="pages/blog/blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    {/* <li><a href="pages/blog/blog-2col.html">Blog 2 Columns</a></li>
                                <li><a href="pages/blog/blog-3col.html">Blog 3 Columns</a></li>
                                <li><a href="pages/blog/blog-masonry-2col.html">Blog Masonry 2 Columns</a></li>
                                <li><a href="pages/blog/blog-masonry-3col.html">Blog Masonry 3 Columns</a></li>
                                <li><a href="pages/blog/blog-post.html">Blog Single</a></li> */}
                            {/* </ul> */}
                            {/* </li> */}
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown cart-nav">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    data-hover="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className="cart-notif">
                                        {this.props.cart?.reduce(
                                            (total, product) =>
                                                (total + (product.quantity || 1)),
                                            0
                                        ) || "0"}
                                    </span>
                                    <i className="linea-ecommerce-bag active"></i> Cart
                                </a>{" "}
                              
                                    {
                                    // this.props.cart.length > 0 
                                    // ?
                                    <ul className="dropdown-menu cart-dropdown">
                                    <li className="dropdown-header">Your Cart</li>
                                    <li
                                        role="separator"
                                        className="divider cart-sep-top"
                                    ></li>
                                    {
                                    this.props.cart.length >0 
                                    ?
                                    this.props.cart.map((item) => {
                                        return (
                                           
                                               <li>
                                                <div className="cart-item">
                                                        <img
                                                            src={
                                                                `https://sendthatcake.com/resources/` +
                                                                item.pictures[0]?.downloadUrl
                                                            }
                                                            alt="Checkout"
                                                            className="p-thumb"
                                                        />
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
                                                    <a
                                                        href=""
                                                        className="cp-name"
                                                    >
                                                        {item.name}
                                                    </a>
                                                    <p className="cp-price">
                                                        {item.quantity || 1} x{" "}
                                                        {item.price}
                                                    </p>
                                                </div>
                                            </li>
                                        
                                        );
                                    })
                                    :
                                    <li className="text-center">Cart is empty! Start buying from <Link to="cake-store">store</Link></li>
                                    }
                                    
                                    <li
                                        role="separator"
                                        className="divider cart-sep-bot"
                                    ></li>
                                    {
                                        this.props.cart.length > 0
                                        ?
                                        <li>
                                        <h6
                                            style={{ color: "#eb05b1" }}
                                            className="item-totals"
                                        >
                                            Items Total:{" "}
                                            <span>
                                                GHc{" "}
                                                {this.props.cart?.reduce(
                                                    (total, product) =>
                                                        total +
                                                        (product.quantity *
                                                            product.price || 0),
                                                    0
                                                )}
                                            </span>
                                        </h6>
                                    </li>
                                    :
                                    null
                                    }
                                    {this.props.cart.length > 0
                                    ?
                                    <li className="cart-btns">
                                        <Link
                                            to="/checkout"
                                            className="btn btn-lg btn-success"
                                        >
                                            Checkout
                                        </Link>
                                    </li>
                                    :
                                    null
                                    }
                                </ul>
                                // :
                                //  <p>You have no items in cart</p>
                            }
                            </li>

                            {
                                !(jwtValidator(this.props.user.token))
                                ?
                                <li>
                                <a href="/dashboard/auth/login" className="btn btn-block" style={{ backgroundColor: "#eb05b1",color:"#ffffff" }}>
                                    Login
                                </a>
                            </li>
                            :
                            <li>
                                <a href="/dashboard/" className="btn btn-block" style={{ backgroundColor: "green",color:"#ffffff" }}>
                                    My Account
                                </a>
                            </li>
                            
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        vendor: state.vendor.vendorL,
        products: state.product?.product,
        cart: state.cart.cart,
        productdelivery: state.product.productdelivery,
        user: state.login.user,
    };
};
//lol..
const mapDispatchToProps = (dispatch) => {
    return {
        // getVendor: ()=> dispatch(getVendorsAsync()),
        addToCart: (data)=> dispatch(addToCart(data)),
        getCart: () => dispatch(getCartAsync()),
        delCart: (id) => dispatch(deleteCartAsync(id)),
        // deleteVendor: (id)=> dispatch(getVendorsAsync(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontNav);
