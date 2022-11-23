import React, { Component } from 'react';

class DefaultFooter extends Component {
    render() {
        return (
            <footer className="footer-widgets">
                <div className="container">
                    <div className="row section">
                        <div className="col-md-3 col-sm-6 mb-sm-100">
                            <div className="widget about-widget">
                                <h5 className="header-widget">About Us</h5>
                                <p>Lorem ipsum dolor sit amet, eiusmod consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>

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

                                    <li><a href="assets/images/blog-post-1.jpg" className="gallery-widget-lightbox"><img src="assets/images/insta-feed-1.jpg" alt='Instagram image' /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>

                                    <li><a href="assets/images/blog-post-2.jpg" className="gallery-widget-lightbox"><img src="assets/images/insta-feed-2.jpg" alt='Instagram image' /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>

                                    <li><a href="assets/images/blog-post-3.jpg" className="gallery-widget-lightbox"><img src="assets/images/insta-feed-3.jpg" alt='Instagram image' /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>

                                    <li><a href="assets/images/landing-ft-2.jpg" className="gallery-widget-lightbox"><img src="assets/images/insta-feed-4.jpg" alt='Instagram image' /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>

                                    <li><a href="assets/images/landing-ft-4.jpg" className="gallery-widget-lightbox"><img src="assets/images/insta-feed-5.jpg" alt='Instagram image' /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>

                                    <li><a href="assets/images/landing-ft-1.jpg" className="gallery-widget-lightbox"><img src="assets/images/insta-feed-6.jpg" alt='Instagram image' /><div className="hover-link"><span className="linea-arrows-plus"></span></div></a></li>

                                </ul>
                            </div>
                        </div>


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
                        </div>
                    </div>



                    <div className="copyright">
                        <div className="container">
                            <div className="row">

                                <div className="col-sm-6">
                                    <small>&copy; 2020 STC <a className="no-style-link" href="" target="_blank">SendThatCake</a></small>
                                </div>

                                <div className="col-sm-6">
                                    <small><a href="#page-top" className="pull-right to-the-top">To the top<i className="fa fa-angle-up"></i></a></small>
                                </div>

                            </div>
                        </div>
                    </div>
  
          </footer>
          
        )
    }
}

export default DefaultFooter;