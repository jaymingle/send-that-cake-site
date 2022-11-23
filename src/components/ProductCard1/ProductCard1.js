import React, {Component} from 'react'


class ProductCard1 extends Component{
    render(){
        return(
            <div className="col-md-4 portfolio-item hover-bottom" style={{position:'absolute', left:'630px',top:'413px'}}>
                <figure>
                  <img src="https://ajdethemes.com/definity-html/assets/images/project-1.10.jpg" alt="Project Example"/>
                  <figcaption>
                    <h4 className="hover-heading">Project Name</h4>
                    <ul className="hover-btns">
                      <li><a className="open-gallery" href=""><i className="fa fa-arrows-alt"></i></a></li>
                      <li><a href=""><i className="fa fa-share"></i></a></li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
        )
    }
}

export default ProductCard1;