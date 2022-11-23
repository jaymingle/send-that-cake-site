import React, { Component } from "react";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import DefaultFooter1 from "../../containers/DefaultLayout/DefaultFooter1";
import {connect} from 'react-redux';
import {getVendorsAsync} from '../../actions/vendorActions';
import {Link } from 'react-router-dom';

const title = "Vendors";
const description = "Here's a list of all verified vendors";

class VendorPage extends Component {
  componentDidMount(){
    console.log("VendorPage1", this.props.vendor)
    this.props.getVendor()
  }
    render() {
        return (
            <div>
                <FrontNav />
                <FrontHeader title={title} description={description} />
                <div className="gray-bg">
          <div className="container section clients-layout">
          <div className="row">
              {this.props.vendor?.map((v,index)=>{return <div className="col-lg-4 col-md-6 ws-s">
                <div className="client-item">
                  <a href="portfolio/portfolio-single-1.html"><img className="img-responsive" src="https://cdn.dribbble.com/users/359023/screenshots/3934848/screenshot_16_1x.jpg" alt="STCVndr" /></a>
                  <div className="item-content">
                    <h6 style={{color:'#000'}} key={index}>{v.name}</h6>
        <p key={index}>{v.id}</p>
                    <Link to={`/vendor/${v.id}`} className="btn-ghost btn-small cli-btn">Visit Vendor Page</Link>
                  </div>
                </div>
        </div>})}
            </div>

          </div>
        </div>

                <DefaultFooter1 />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    vendor: state.vendor.vendorL,

  };
};
//lol..
const mapDispatchToProps = (dispatch) => {
  return {
    getVendor: ()=> dispatch(getVendorsAsync()),
    // deleteVendor: (id)=> dispatch(getVendorsAsync(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorPage);