import React, { Component } from "react";

class FrontHeader extends Component {
    render() {
        return (
            <header
                className="page-title pt-large pt-light pt-parallax pt-plax-lg-light"
                data-stellar-background-ratio="0.4"
                style={{backgroundPosition: '65px -75px'}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>{this.props.title}</h1>
                            <span className="subheading">
                                {this.props.description}
                            </span>
                        </div>
                        <ol className="col-sm-6 text-right breadcrumb">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">{this.props.title}</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </header>
        );
    }
}

export default FrontHeader;
