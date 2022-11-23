import React, {Component} from 'react';


class ProductCardd extends Component{
    render(){
        return(
                <div className="col-lg-4 col-md-6 mb-sm-50">
                <div className="front-blog-post wow fadeIn" data-wow-duration="2s" data-wow-delay=".3s">

                  <a href="pages/blog/blog-post.html" className="front-post-img"><img src="assets/images/blog-post-img-1.4.jpg" alt="Blog Post 1"/></a>

                  <div className="front-bp-content">
                    
                    <div className="front-post-meta">
                      <a href="#" className="front-post-date">
                        <i className="fa fa-calendar-o"></i>
                        <span>August 01.2015</span>
                      </a>
                      <a href="#" className="front-post-comments">
                        <i className="fa fa-comments-o"></i>
                        <span>12</span>
                      </a>
                    </div>

                    <a href="pages/blog/blog-post.html" className="front-post-title"><h4>Blog Post Title</h4></a>

                    <p>Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...</p>

                    <a href="pages/blog/blog-post.html" className="btn btn-small">Read More</a>

                  </div>

                </div>
              </div>
        )
    }
}

export default ProductCardd;