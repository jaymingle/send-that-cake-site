import React, { Component } from "react";

import FrontHeader from "../../components/FrontHeader/FrontHeader";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductAsync } from '../../actions/productActions';
import { addToCart } from "../../actions/cartActions";
import { jwtValidator } from "../../actions/loginActions";
import moment from "moment";
import Pagination from "react-js-pagination";
import './cakestore.css';
// require("bootstrap/less/bootstrap.less");

const title = "Cake Store";
const description = "Welcome to the Cake Store";

const pageSize = 12;

class CakeStore extends Component {
  state = {
    // default, highestPrice, lowestPrice, newest
    sort: 'default',
    currentPage: 1,
  }
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    console.log("State", this.state)
    let products = this.props.products;
    if (this.state.sort === 'default') {
      products = this.props.products;
    }
    else if (this.state.sort === 'lowestPrice') {
      products = this.props.products?.sort((a, b) => {
        if (a.price > b.price)
          return 1;
        else if (b.price > a.price)
          return -1
        else
          return 0;
      })

    }
    else if (this.state.sort === 'highestPrice') {
      products = this.props.products?.sort((a, b) => {
        if (a.price < b.price)
          return 1;
        else if (b.price < a.price)
          return -1
        else
          return 0;
      })

    }
    else if (this.state.sort === 'newest') {
      products = this.props.products?.sort((a, b) => {
        if (moment(a.createdOn).isAfter(moment(b.createdOn)))
          return 1;
        else if (moment(a.createdOn).isBefore(moment(b.createdOn)))
          return -1
        else
          return 0;
      })
    }
    products = products?.filter(p => p.status == "approved" || ' ')
    return (
      <div>
        <FrontNav />
        <FrontHeader title={title} description={description} />



        <div className="gray-bg">
          <div className="container section-shop">

            <div className="row">


              <div className="col-md-9">


                <div className="row mb-50">
                  <div className="col-xs-12 col-sm-6 col-md-9 mb-sm-30">
                    <span>SHOWING 1–12 OF 24 RESULTS</span>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3 pull-right">
                    <select onChange={(e) => this.setState({ sort: e.target.value })} className="form-control" id="select-form">
                      <option value='default'>Default Sorting</option>
                      <option value='highestPrice'>Highest Price</option>
                      <option value='lowestPrice'>Lowset Price</option>
                      <option value='newest'>Newest First</option>
                    </select>
                  </div>
                </div>

                <div className="clients-layout">
                  <div className="row">
                    {products?.slice((this.state.currentPage - 1) * pageSize, this.state.currentPage * pageSize ).map((p, index) => {
                      return <div className="col-lg-4 col-md-6 ws-s">
                        <div className="client-item set-height">
                          <a href="#"><img className="img-responsive store-resized" src={"https://sendthatcake.com/labapi/resources/" + p.pictures[0]?.downloadUrl} alt="Product" /></a>
                          <div className="item-content">
                            <h6 style={{ color: '#000' }} key={index}>{p.name}</h6>
                            <p key={index}>GHC {p.price}</p>
                            <Link to={`/products/${p.id}`} className="btn-ghost btn-small cli-btn">Get This</Link>
                          </div>
                        </div>
                      </div>
                    })}
                  </div>
                </div>

                <div className="row">
                  <nav className="blog-pagination text-center">
                    <ul className="pagination">
                      <li>
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true"><i className="fa fa-angle-double-left"></i></span>
                        </a>
                      </li>
                      <Pagination
                        activePage={this.state.currentPage}
                        itemsCountPerPage={pageSize}
                        totalItemsCount={products?.length}
                        pageRangeDisplayed={5}
                        onChange={(pageNumber)=>{this.setState({currentPage:pageNumber})}}
                      />
                      {/* <li><a href="#">2</a></li>
                      <li><a href="#">...</a></li>
                      <li><a href="#">7</a></li> */}
                      {/* <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true"><i className="fa fa-angle-double-right"></i></span>
                        </a>
                      </li> */}
                    </ul>
                  </nav>
                </div>

              </div>




              <div className="col-md-3">
                <aside className="shop-sidebar-vertical mb-sm-100">


                  {/* <div className="shop-widget search-widget">
                    <div className="form-group">
                      <input type="search" placeholder="Search ..." className="form-control"/>
                      <button className="inside-input-btn"><i className="fa fa-search"></i></button>
                    </div>
                  </div> */}


                  <div className="shop-widget cart-widget mb-sm-50">
                    <h5 className="header-widget" style={{ color: "#000000", fontWeight: "300" }}>Hi {this.props.user.firstName}, Here's Your Cart</h5>
                    {
                      this.props.cart.length > 0
                        ?
                        this.props.cart.map((item) => {
                          return (

                            <li>
                              <div className="cart-item">
                                <a href="/checkout">
                                  <img
                                    src={
                                      `https://sendthatcake.com/resources/` +
                                      item.pictures[0]
                                        ?.downloadUrl
                                    }
                                    alt="Checkout"
                                    className="p-thumb"
                                  />
                                </a>
                                <span
                                  onClick={() => {
                                    var userLoggedIn = jwtValidator(this.props.user.token);
                                    if (userLoggedIn) {
                                      this.props.delCart(
                                        item.cartId
                                      )

                                    } else {
                                      console.log("This.Props.Cart In Else", this.props.cart)
                                      const newCartItems = this.props.cart?.filter(item2 => item2.id != item.id)
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
                                  href="/checkout"
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
                        <li className="text-center">Your cart is currently empty. Add something to make someone's day 😍</li>
                    }
                  </div>



                  <div className="shop-widget filter-widget">
                    <h5 className="header-widget" style={{ color: "#000000", fontWeight: "300" }}>Filter by Price</h5>
                    <div id="shop-slider-range"></div>
                    <p>
                      <label for="amount">From:</label>
                      <input type="text" id="shop-slider-range-amount" readonly />
                    </p>
                  </div>



                  <div className="shop-widget categories-widget">
                    <h5 className="header-widget" style={{ color: "#000000", fontWeight: "300" }}>Shop Categories</h5>

                    <div className="widget-item">
                      <a href="#">Suits - <span>15</span></a>
                    </div>

                    <div className="widget-item">
                      <a href="#">T-Shirts - <span>6</span></a>
                    </div>

                    <div className="widget-item">
                      <a href="#">Pants - <span>12</span></a>
                    </div>

                    <div className="widget-item">
                      <a href="#">Accessories - <span>3</span></a>
                    </div>
                  </div>



                  {/* <div className="shop-widget product-widget">
                    <h5 className="header-widget">Bestsellers</h5>
                    <div className="cart-item">
                      <a href="../../pages/shop/shop-single.html"><img src="../../assets/images/shop/p-thumb-1.jpg" alt="Product Name" className="p-thumb"/></a>
                      <a href="../../pages/shop/shop-single.html" className="cp-name">Light Blue Suit</a>
                      <p className="cp-price"><span className="price-cut">$359.99</span> $259.99</p>
                    </div>

                    <div className="cart-item">
                      <a href="../../pages/shop/shop-single.html"><img src="../../assets/images/shop/p-thumb-2.jpg" alt="Product Name" className="p-thumb"/></a>
                      <a href="../../pages/shop/shop-single.html" className="cp-name">Dark Blue Suit</a>
                      <p className="cp-price">$459.99</p>
                    </div>

                    <div className="cart-item">
                      <a href="../../pages/shop/shop-single.html"><img src="../../assets/images/shop/p-thumb-3.jpg" alt="Product Name" className="p-thumb"/></a>
                      <a href="../../pages/shop/shop-single.html" className="cp-name">Midnight Blue Suit</a>
                      <p className="cp-price">$459.99</p>
                    </div>

                    <div className="cart-item">
                      <a href="../../pages/shop/shop-single.html"><img src="../../assets/images/shop/p-thumb-4.jpg" alt="Product Name" className="p-thumb"/></a>
                      <a href="../../pages/shop/shop-single.html" className="cp-name">Navy Blue Suit</a>
                      <p className="cp-price">$459.99</p>
                    </div>
                  </div> */}



                  <div className="shop-widget tags-widget">
                    <h5 className="header-widget" style={{ color: "#000000", fontWeight: "300" }}>Tags</h5>
                    <ul className="tag-list">
                      <li><a href="#">Red Velvet</a></li>
                      <li><a href="#">Birthday</a></li>
                      <li><a href="#">I Love you</a></li>
                      <li><a href="#">Teddy Bear</a></li>
                      <li><a href="#">Perfume</a></li>
                      <li><a href="#">Flowers</a></li>
                      <li><a href="#">HTML5</a></li>
                    </ul>
                  </div>

                </aside>
              </div>
            </div>

          </div>
        </div>
        <DefaultFooter1 />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state?.products?.product
    products: state.product?.product,
    cart: state.cart.cart,
    user: state?.login.user,

    // vendor: state.login.user.vendor,


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(getProductAsync()),
    addToCart: (data) => dispatch(addToCart(data)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeStore);