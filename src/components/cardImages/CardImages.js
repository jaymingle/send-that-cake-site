import React, {Component} from 'react';
import {Link } from 'react-router-dom';


class CardImages extends Component{
    render(){
        return(
<div className="gray-bg">
          <section className="container section team-4col">
            <div className="row">
              
              <header className="sec-heading">
              <h2 style={{ color: '#eb05b1', fontWeight: '700' }}>Get Your Cake Now</h2>
                <span className="subheading">We are creative professionals</span>
              </header>

              
              <div className="col-lg-3 col-md-6 mb-sm-50">
                <div className="t-item">

                  
                  <div className="t-image">
                    <img src="../../assets/images/shop/redForest.jpg" alt="cake" className="img-responsive"/>
                    <div className="t-description">
                      <div className="content-wrapper">
                        <h4 style={{color:'#000000'}} className="h-alt">About this Item</h4>
                        <p>Yummy Red Forest  cake with chocolate chips toppings and mixed fruits combo for your birthday pleasure</p>
                        <Link to="/product" className="btn btn-sm btn-success">View this Cake</Link>
                      </div>
                    </div>
                  </div>

                  
                  <div className="t-info">
                    <h4 style={{color:'#000'}} className="t-name">Red Forest Cake</h4>
                    <span className="t-role">Ghc 230</span>
                    <ul className="social-links">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    
                    </ul>
                    <button className="btn middle btn-md" type="file">Buy This</button>
                  </div>

                </div>
              </div>


              
              <div className="col-lg-3 col-md-6 mb-sm-50">
                <div className="t-item">

                  
                  <div className="t-image">
                    <img src="../../assets/images/shop/weddingcakeVanilla.jpg" alt="cake" className="img-responsive"/>
                    <div className="t-description">
                      <div className="content-wrapper">
                        <h4 style={{color:'#000'}} className="h-alt">About this item</h4>
                        <p>This vanilla wedding cake stands out at your event and lets you stand out among your peers</p>
                        <Link to="/product" className="btn btn-sm btn-success">View this Cake</Link>
                      </div>
                    </div>
                  </div>

                  
                  <div className="t-info">
                    <h4 style={{color:'#000'}} className="t-name">Vanilla Wedding Cake</h4>
                    <span className="t-role">Ghc 600</span>
                    <ul className="social-links">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      
                    </ul>
                    <button className="btn middle btn-md" type="file">Buy This</button>

                  </div>

                </div>
              </div>


              
              <div className="col-lg-3 col-md-6 mb-sm-50">
                <div className="t-item">

                  
                  <div className="t-image">
                    <img src="../../assets/images/shop/chocolatecake1.jpg" alt="cake" className="img-responsive"/>
                    <div className="t-description">
                      <div className="content-wrapper">
                        <h4 style={{color:'#000'}} className="h-alt">About this item</h4>
                        <p>Specially made chocolate caramel mixture with peanuts designed for your cravings.</p>
                        <Link to="/product" className="btn btn-sm btn-success">View this Cake</Link>
                      </div>
                    </div>
                  </div>

                  
                  <div className="t-info">
                    <h2 style={{color:'#000'}} className="t-name red">Qtr Choco Cake</h2>
                    <span className="t-role">Ghc 90</span>
                    <ul className="social-links">
                      <li><a href="#"><i className="fa fa-star"></i></a></li>
                      <li><a href="#"><i className="fa fa-star-half"></i></a></li>
                    </ul>
                    <button className="btn middle btn-md" type="file">Buy This</button>
                  </div>

                </div>
              </div>


              
              <div className="col-lg-3 col-md-6">
                <div className="t-join">

                  
                  <div className="t-image">
                    <i className="fa fa-user bg-icon"></i>
                    <div className="t-description">
                      <h4 className="h-alt">More Cakes</h4>
                      <p>We have more cakes on the cake store page.</p>
                    </div>
                  </div>

                  
                  <div className="t-info">
                    {/* <h4 className="t-name">You?</h4>
                    <span className="t-role">Junior Developer</span> */}
                    <Link to="/cake-store" className="btn btn-small">Go To Store</Link>
                  </div>

                </div>
              </div>


            </div>
          </section>
        </div>        )
    }
}

export default CardImages;