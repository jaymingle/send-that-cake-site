import React, { Component } from 'react';
import './productcard.css';

class ProductCard extends Component {
    render() {
        return (
            <div className="cardcontainer">
                <div className="photo"> <img src="https://images.pexels.com/photos/2346006/pexels-photo-2346006.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
                    <div className="photos">Photos</div>
                </div>
                <div className="content1">
                    <p className="txt4">City Lights In Newyork</p>
                    <p className="txt5">A city that never sleeps</p>
                    <p className="txt2">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                </div>
                <div className="footerca">
                    <p><a className="waves-effect waves-light btnc" href="#">Read More</a><a id="heart"><span className="like"><i className="fab fa-gratipay"></i>Like</span></a></p>
                    <p className="txt3"><i className="far fa-clock"></i>10 Minutes Ago <span className="comments"><i className="fas fa-comments"></i>45 Comments</span></p>
                </div>
            </div>
        )
    }
}

export default ProductCard;