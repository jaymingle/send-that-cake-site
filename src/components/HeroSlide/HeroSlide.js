import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';

class HeroSlide extends Component {
    render() {
        return (
            <div id="home" className="main-demo-hero">
            <div className="">

                <div className="hero-content-wrapper">
                    <div className="hero-content">


                        <h3 className="hero-lead wow fadeInLeft" data-wow-duration="1.5s" style={{visibility: "visible", animationDuration: "1.5s", animationName: "fadeInLeft"}}>Surprise your <br/> <span class="typer" id="main" data-loop="100" data-words="loved ones,best friend,granny,wife,girlfriend" data-colors="#E74C3C,#B7950B,#177E89,pink, white" data-delay="100" data-deleteDelay="1000"></span></h3>
                        <h4 className="h-alt hero-subheading wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">Nothing Says Love More Than a Cake!</h4>
                        <a href="http://sendthatcake.com/dashboard/auth" className="btn wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">Order Now</a>

                    </div>
                </div>


                <a href="#welcome" className="scroller scroller-dark">
                    <span className="scroller-text">scroll down</span>
                    <span className="linea-basic-magic-mouse"></span>
                </a>


            </div>
            {/* <OrderForm /> */}

        </div>
        )
    }
}

export default HeroSlide;