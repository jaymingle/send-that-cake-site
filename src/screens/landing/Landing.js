import React, { Component } from 'react'
import FrontNav from '../../containers/DefaultLayout/FrontNav';
import HeroSlide from '../../components/HeroSlide/HeroSlide';
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';
// import ProductCardd from '../../components/productCard/ProductCardd';
// import ProductCard1 from '../../components/ProductCard1/ProductCard1';

import '../../assets/styles/vendor/slick.css';
import '../../assets/styles/vendor/magnific-popup.css';
import '../../assets/styles/vendor/animate.css';
// import '../../assets/styles/vendor/bootstrap.min.css';
import '../../assets/styles/main.css';
import '../../assets/styles/responsive.css';
import '../../assets/fonts/fontawesome/css/font-awesome.min.css';
import '../../assets/fonts/linea-font/css/linea-font.css';
import '../../assets/fonts/et-lineicons/css/style.css';
import CardImages from '../../components/cardImages/CardImages';
import HeroSlide2 from '../../components/HeroSlide/HeroSlide2';



const about_stc = require('../../assets/images/sendthatcake-about.png');
const porduct_1 = require('../../assets/images/shop/porduct_1.jpg');
const product_2 = require('../../assets/images/shop/product_2.jpg');
const product_1 = require('../../assets/images/shop/product_1.jpg');
const avatar1 = require('../../assets/images/avatar-1.png');
const avatar2 = require('../../assets/images/avatar-2.png');


class Landing extends Component {
    render() {
        return (

            <div id="page-top">


                <FrontNav />

                <HeroSlide2 />
                

                <section id="welcome" className="container">
                    <div className="row">

                        <div className="ws-l"></div>

                        <header className="sec-heading">
                            <h2 style={{ color: '#eb05b1', fontWeight: '700' }}>Order a cake in 3 simple steps</h2>
                            <span className="subheading">Redefining birthday celebrations</span>
                        </header>
                        {/* <ProductCard1/> */}

                        <div className="col-md-offset-2 col-md-8 text-center ws-m">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>

                        <div className="col-md-12">
                            <img className="img-responsive wow fadeIn" data-wow-duration="2s" src={about_stc} alt="about-stc" />
                        </div>

                    </div>
                </section>


                <div className="gray-bg">
                   <CardImages/>

                    <div className="cta-link">
                        <div className="bg-overlay">

                            <div className="cta-wrapper">
                                <h3 style={{ fontWeight: '700' }} className="h-alt wow fadeIn" data-wow-delay=".1s" data-wow-duration="1s">So you're a Vendor? Just start selling on STC for Free</h3>
                                <a href="#contact" className="btn btn-light btn-medium wow fadeIn" data-wow-delay=".3s" data-wow-duration="1s">Get My Free Vendor Account</a>
                            </div>

                        </div>
                    </div>



                    <section className="container ft-steps-numbers">
                        <div className="row section">

                            <header className="sec-heading ws-s">
                                <h2 style={{ color: '#eb05b1', fontWeight: '700' }}>Are You A Vendor??</h2>
                                <span className="subheading">Sign up to make money selling on SendThatCake in 3 easy steps!</span>
                            </header>


                            <div className="col-lg-4 col-md-6 mb-sm-100 ft-item wow fadeIn" data-wow-duration="1s">
                                <span className="ft-nbr">01</span>
                                <h4 style={{ color: '#eb05b1', fontWeight: '700' }}>Upload Your Cakes</h4>
                                <p>Lariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                            </div>


                            <div className="col-lg-4 col-md-6 mb-sm-100 ft-item wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                                <span className="ft-nbr">02</span>
                                <h4 style={{ color: '#eb05b1', fontWeight: '700' }}>Get Approval</h4>
                                <p>Lariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                            </div>


                            <div className="col-lg-4 col-md-6 ft-item wow fadeIn" data-wow-duration="1s" data-wow-delay=".6s">
                                <span className="ft-nbr">03</span>
                                <h4 style={{ color: '#eb05b1', fontWeight: '700' }}>Start Selling</h4>
                                <p>Lariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                            </div>

                        </div>


                        <div className="row ws-m">
                            <div className="text-center">
                                <a href="/dashboard/auth/login#signup" className="btn">Get My Free Vendor Account</a>
                            </div>
                        </div>

                    </section>

                    
                {/* Categories  */}

                <div className="gray-bg1">
                    <section id="blog" className="section container blog-columns blog-preview">
                        <div className="row">

                            <header className="sec-heading">
                                <h2 style={{ color: '#eb05b1', fontWeight: '700' }}>Cake Categories</h2>
                                <span className="subheading">Click each category to see our available cakes</span>
                            </header>



                            <div className="col-lg-4 col-md-6 mb-sm-50">
                                
                               
                               <div className="blog-post wow fadeIn" data-wow-duration="2s">


                                    <a href="pages/blog/blog-post.html" className="post-img"><img src="https://placehold.it/990x715" alt="" /></a>

                                    <div className="bp-content">


                                         {/* <div className="post-meta">
                                            <a href="#" className="post-date">
                                                <i className="fa fa-calendar-o"></i>
                                                <span>August 01.2015</span>
                                            </a>
                                            <a href="#" className="post-comments">
                                                <i className="fa fa-comments-o"></i>
                                                <span>12</span>
                                            </a>
                                        </div>  */}


                                        <a href="pages/blog/blog-post.html" className="post-title"><h4>Blog Post Title</h4></a>


                                        <p>Birthday Cakes Cat</p>


                                        <a href="pages/blog/blog-post.html" className="btn btn-small">View Category</a>

                                    </div>

                                </div>
                            </div> 



                            <div className="col-lg-4 col-md-6 mb-sm-50">
                                <div className="blog-post wow fadeIn" data-wow-duration="2s" data-wow-delay=".3s">


                                    <a href="pages/blog/blog-post.html" className="post-img"><img src="https://placehold.it/990x715" alt="" /></a>

                                    <div className="bp-content">


                                        {/* <div className="post-meta">
                                            <a href="#" className="post-date">
                                                <i className="fa fa-calendar-o"></i>
                                                <span>August 01.2015</span>
                                            </a>
                                            <a href="#" className="post-comments">
                                                <i className="fa fa-comments-o"></i>
                                                <span>12</span>
                                            </a>
                                        </div> */}


                                        <a href="pages/blog/blog-post.html" className="post-title"><h4>Blog Post Title</h4></a>


                                        <p>Wedding Cakes</p>


                                        <a href="pages/blog/blog-post.html" className="btn btn-small">View Category</a>

                                    </div>

                                </div>
                            </div>



                            <div className="col-lg-4 col-md-6">
                                <div className="blog-post wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">


                                    <a href="pages/blog/blog-post.html" className="post-img"><img src="https://placehold.it/990x715" alt="" /></a>

                                    <div className="bp-content">


                                        {/* <div className="post-meta">
                                            <a href="#" className="post-date">
                                                <i className="fa fa-calendar-o"></i>
                                                <span>August 01.2015</span>
                                            </a>
                                            <a href="#" className="post-comments">
                                                <i className="fa fa-comments-o"></i>
                                                <span>12</span>
                                            </a>
                                        </div> */}


                                        <a href="pages/blog/blog-post.html" className="post-title"><h4>Blog Post Title</h4></a>


                                        <p>Anniversary cakes</p>


                                        <a href="pages/blog/blog-post.html" className="btn btn-small">View Category</a>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </section>
                </div>





                    <div id="testimonials" className="gray-bg">
                        <section className="container testimonials-3col">
                            <div className="row section">

                                <header className="sec-heading">
                                    <h2 style={{color: '#eb05b1', fontWeight: '700'}}>We Got our Cakes Delivered</h2>
                                    <span className="subheading">Read some of the testimonials from our clients</span>
                                </header>


                                <div className="col-md-4 mb-sm-50">
                                    <div className="t-item wow fadeIn" data-wow-duration="1s">
                                        <img src={avatar2} alt="" />
                                        <blockquote>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>
                                            <footer>
                                                <cite>by Akosua Baby<span>Google</span></cite>
                                            </footer>
                                        </blockquote>
                                        <span className="et-quote t-icon"></span>
                                    </div>
                                </div>


                                <div className="col-md-4 mb-sm-50">
                                    <div className="t-item wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                                        <img src={avatar1} alt="" />
                                        <blockquote>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>
                                            <footer>
                                                <cite>by Alfred Adusah<span>Apple</span></cite>
                                            </footer>
                                        </blockquote>
                                        <span className="et-quote t-icon"></span>
                                    </div>
                                </div>


                                <div className="col-md-4">
                                    <div className="t-item wow fadeIn" data-wow-duration="1s" data-wow-delay=".6s">
                                        <img src={avatar1} alt="" />
                                        <blockquote>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>
                                            <footer>
                                                <cite>by FlyChiq <span>Facebook</span></cite>
                                            </footer>
                                        </blockquote>
                                        <span className="et-quote t-icon"></span>
                                    </div>
                                </div>

                            </div>


                            {/* <div className="row">
                                <ul className="t-clients clients-slider ws-m">
                                    <li><a href="#"><img src="assets/images/client-logo-placeholder.png" alt="" /></a></li>
                                    <li><a href="#"><img src="assets/images/client-logo-placeholder.png" alt="" /></a></li>
                                    <li><a href="#"><img src="assets/images/client-logo-placeholder.png" alt="" /></a></li>
                                    <li><a href="#"><img src="assets/images/client-logo-placeholder.png" alt="" /></a></li>
                                    <li><a href="#"><img src="assets/images/client-logo-placeholder.png" alt="" /></a></li>
                                    <li><a href="#"><img src="assets/images/client-logo-placeholder.png" alt="" /></a></li>
                                </ul>
                            </div> */}

                        </section>
                    </div>





                    <div className="video-bg-section">


                        <div id="section-video" className="player"
                            data-property="{videoURL:'http://youtu.be/Scxs7L0vhZ4',containment:'.video-bg-section',autoPlay:true, mute:true, startAt:71, stopAt:300, opacity:1}">
                        </div>


                        <div className="video-sec-content">
                            <h3 className="cta-lead h-alt wow fadeIn" data-wow-delay=".1s" data-wow-duration="1s">Share your story with SendThatCake</h3>
                            <a href="https://www.youtube.com/watch?v=k5C1Bt4k-iA" className="play-btn popup-video">
                                <span className="play-icon linea-music-play-button"></span>
                                <h5>Play video</h5>
                            </a>
                        </div>

                    </div>


                   <DefaultFooter1 />

                </div >
                </div>

        )
    }
}

export default Landing;