import React, { Component } from "react";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';
const title = "Blog";
const description = "Welcome to the Contact Page";

class Blog extends Component{
    render(){
        return(
            <div>
                <FrontNav/>
                <FrontHeader title={title}/>
                

        <div id="blog" className="section container blog-classic">

          <div className="row">
            <div className="col-md-8">
            <h2 style={{color:'#000'}}>Welcome to the SendThatCake Blog</h2>

              
              <div className="col-md-12">

                <div className="blog-post wow fadeIn" data-wow-delay=".1s" data-wow-duration="2s">

                
                <a href="blog-post.html" className="post-img"><img src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_chocolate_cake_31070_16x9.jpg" alt="Blog Post 1"/></a>

                <div className="bp-content">
                  
                  
                  <div className="post-meta">
                    <a href="#" className="post-date">
                      <i className="fa fa-calendar-o"></i>
                      <span>August 01.2020</span>
                    </a>
                    <a href="#" className="post-comments">
                      <i className="fa fa-comments-o"></i>
                      <span>12</span>
                    </a>
                  </div>

                  
                  <a href="blog-post.html" className="post-title"><h3 style={{color:"black"}}>Why Chocolate Cake is Good For Your Heart</h3></a>

                  
                  <p>Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...</p>

                  
                  <a href="blog-post.html" className="btn btn-success btn-small">Read More</a>

                </div>

                </div>
              </div>


              
              <div className="col-md-12">
                <div className="blog-post wow fadeIn" data-wow-delay=".1s" data-wow-duration="2s">

                
                <a href="blog-post.html" className="post-img"><img src="../../assets/images/blog-post-big-2.jpg" alt="Blog Post 2"/></a>

                <div className="bp-content">
                  
                  
                  <div className="post-meta">
                    <a href="#" className="post-date">
                      <i className="fa fa-calendar-o"></i>
                      <span>August 01.2015</span>
                    </a>
                    <a href="#" className="post-comments">
                      <i className="fa fa-comments-o"></i>
                      <span>12</span>
                    </a>
                  </div>

                  
                  <a href="blog-post.html" className="post-title"><h3>Blog Post Title</h3></a>

                  
                  <p>Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...</p>

                  
                  <a href="blog-post.html" className="btn btn-small">Read More</a>

                </div>

                </div>
              </div>


              
              <div className="col-md-12">
                <div className="blog-post wow fadeIn" data-wow-delay=".1s" data-wow-duration="2s">

                
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/k_okcNVZqqI" allowfullscreen></iframe>
                </div>

                <div className="bp-content">
                  
                  
                  <div className="post-meta">
                    <a href="#" className="post-date">
                      <i className="fa fa-calendar-o"></i>
                      <span>August 01.2015</span>
                    </a>
                    <a href="#" className="post-comments">
                      <i className="fa fa-comments-o"></i>
                      <span>12</span>
                    </a>
                  </div>

                  
                  <a href="blog-post.html" className="post-title"><h3>Blog Post Title</h3></a>

                  
                  <p>Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...</p>

                  
                  <a href="blog-post.html" className="btn btn-small">Read More</a>

                </div>

                </div>
              </div>


              
              <div className="col-md-12">
                <div className="blog-post wow fadeIn" data-wow-delay=".1s" data-wow-duration="2s">

                
                <iframe width="100%" height="166" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/213984415&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

                <div className="bp-content">
                  
                  
                  <div className="post-meta">
                    <a href="#" className="post-date">
                      <i className="fa fa-calendar-o"></i>
                      <span>August 01.2015</span>
                    </a>
                    <a href="#" className="post-comments">
                      <i className="fa fa-comments-o"></i>
                      <span>12</span>
                    </a>
                  </div>

                  
                  <a href="blog-post.html" className="post-title"><h3>Blog Post Title</h3></a>

                  
                  <p>Lorem ipsum dolor sit amet, tempor consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad ...</p>

                  
                  <a href="blog-post.html" className="btn btn-small">Read More</a>

                </div>

                </div>
              </div>
                              
              
              
              <nav className="blog-pagination mb-sm-100">
                <ul className="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true"><i className="fa fa-angle-double-left"></i></span>
                    </a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">...</a></li>
                  <li><a href="#">7</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true"><i className="fa fa-angle-double-right"></i></span>
                    </a>
                  </li>
                </ul>
              </nav>

            </div>



            

            <aside className="col-md-offset-1 col-md-3 sidebar">

              
              <div className="col-md-12 ws-s search-widget">
                <div className="form-group">
                  <input type="search" placeholder="Search ..." className="form-control"/>
                  <button className="inside-input-btn"><i className="fa fa-search"></i></button>
                </div>
              </div>


              
              <div className="col-md-12 ws-s tags-widget">
                <h5 className="header-widget">Tags</h5>
                <ul className="tag-list">
                  <li><a href="#">Photography</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">PHP</a></li>
                  <li><a href="#">UI/UX</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">HTML5</a></li>
                  <li><a href="#">CSS3</a></li>
                  <li><a href="#">iOS</a></li>
                </ul>
              </div>
              

              
              <div className="col-md-12 ws-s recent-posts-widget">
                <h5 className="header-widget">Recent Posts</h5>

                
                <div className="widget-item">
                  <a href="#"><h6 className="h-alt">Blog Post Example</h6></a>
                  <span>by <a href="#">Joel Fischer</a> / <a href="#">June 23</a></span>
                </div>

                
                <div className="widget-item">
                  <a href="#"><h6 className="h-alt">Another Blog Post Example</h6></a>
                  <span>by <a href="#">Joel Fischer</a> / <a href="#">June 23</a></span>
                </div>

                
                <div className="widget-item">
                  <a href="#"><h6 className="h-alt">Blog Post Example</h6></a>
                  <span>by <a href="#">Joel Fischer</a> / <a href="#">June 23</a></span>
                </div>

              </div>


              
              <div className="col-md-12 ws-s categories-widget">
                <h5 className="header-widget">Categories</h5>

                
                <div className="widget-item">
                  <a href="#">Web Design - <span>15</span></a>
                </div>

                
                <div className="widget-item">
                  <a href="#">Graphic Design - <span>6</span></a>
                </div>

                
                <div className="widget-item">
                  <a href="#">iOS Development - <span>12</span></a>
                </div>

                
                <div className="widget-item">
                  <a href="#">Other - <span>3</span></a>
                </div>

              </div>


              
              <div className="col-md-12 ws-s comments-widget">
                <h5 className="header-widget">Comments</h5>

                
                <div className="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" className="widget-comm-title">Lorem ipsum dolor sit amet</a></span>
                </div>

                
                <div className="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" className="widget-comm-title">Sed do eiusmod</a></span>
                </div>

                
                <div className="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" className="widget-comm-title">Lorem ipsum dolor sit amet</a></span>
                </div>

                
                <div className="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" className="widget-comm-title">Sed do eiusmod</a></span>
                </div>
                
              </div>


              
              <div className="col-md-12 text-widget">
                <h5 className="header-widget">Text Widget</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae qui error, incidunt quia pariatur facere quasi totam inventore amet rerum.</p>
              </div>

            </aside>

          </div>
        </div>

                <DefaultFooter1 />
            </div>
        )
    }
}

export default Blog;
