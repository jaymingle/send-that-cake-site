import React, { Component } from 'react';
// import Drift from "react-driftjs";

class DefaultFooter1 extends Component {
    render() {
        return (
            <footer className="footer-widgets" style={{background:"#8e2774"}}>
            <div className="container">
                <div className="row section">


                    <div className="col-md-3 col-sm-6 mb-sm-100">
                        <div className="widget about-widget">
                            <h5 className="header-widget">Who we are SendThatCake</h5>
                            <p>Lorem ipsum dolor sit amet, eiectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>

                            <ul className="social-links">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-6 mb-sm-100">
                        <div className="widget gallery-widget">
                            <h5 className="header-widget">Instagram Feed</h5>
                            <ul>

                                <li><a href="https://placehold.it/650x450" className="gallery-widget-lightbox"><img src="https://placehold.it/87x87/999/eee" alt="" /></a></li>

                                <li><a href="https://placehold.it/650x450" className="gallery-widget-lightbox"><img src="https://placehold.it/87x87" alt="" /></a></li>

                                <li><a href="https://placehold.it/650x450" className="gallery-widget-lightbox"><img src="https://placehold.it/87x87/999/eee" alt="" /></a></li>

                                <li><a href="https://placehold.it/650x450" className="gallery-widget-lightbox"><img src="https://placehold.it/87x87" alt="" /></a ></li>

                                <li><a href="https://placehold.it/650x450" className="gallery-widget-lightbox"><img src="https://placehold.it/87x87/999/eee" alt="" /></a ></li>

                                <li><a href="https://placehold.it/650x450" className="gallery-widget-lightbox"><img src="https://placehold.it/87x87" alt="" /></a ></li>

                            </ul >
                        </div >
                    </div >


                    <div className="col-md-3 col-sm-6 mb-sm-100">
                        <div className="widget twitter-widget">
                            <h5 className="header-widget">Twitter Feed</h5>
                            <ul>

                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <p>5 Reasons You Should Take a Sabbatical from Creative Work <a href="#">http://enva.to/NTa6F</a> by <a href="#">@envato</a> <span>- AUG 10</span></p>
                                </li>

                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <p>What is the enemy of <a href="#">#creativity</a>? <a href="#">http://enva.to/hVl5G</a>  [VIDEO] <br />by <a href="#">@envato</a> <span>- AUG 5</span></p>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-6">
                        <div className="widget newsletter-widget">
                            <h5 className="header-widget">Newsletter</h5>

                            <form className="mc-form subscribe-form" _lpchecked="1">
                                <div className="form-group">


                                    <input type="email" name="EMAIL" placeholder="Join our newsletter" />


                                    <button type="submit" name="subscribe" className="mc-send-btn"><i className="fa fa-send-o"></i></button>
                                </div>


                                <div className="subscribe-result"></div>
                            </form>

                        </div>
                    </div>

                </div >
            </div >



            <div className="copyright" style={{background:"#423646"}}>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6">
                            <small>&copy; 2020 SendThatCake Inc.  <a className="no-style-link" href="http://sendthatcake.com" target="_blank">SendThatCake</a></small>
                        </div>

                        <div className="col-sm-6">
                            <small><a href="#page-top" className="pull-right to-the-top">To the top<i className="fa fa-angle-up"></i></a></small>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Drift appId="i67r73shnpet" />; */}

        </footer >
          
        )
    }
}

export default DefaultFooter1;