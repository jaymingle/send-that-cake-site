import React, {Component} from 'react';
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';
import { getProductAsync } from "../../actions/productActions";
import {connect} from 'react-redux';
import CardImages from '../../components/cardImages/CardImages'
import {Link} from 'react-router-dom';

const title = "Vendor Products";
const description = "Find what you want from this vendor";


class VendorProducts extends Component {
    componentDidMount(){
        
        this.props.getProduct()
    }
    render(){
        return(
            <div>
                <FrontNav />
                <FrontHeader title={title} description={description} />
                <section className="container section team-4col">
            <div className="row">
              
              <header className="sec-heading">
              <h2 style={{ color: '#eb05b1', fontWeight: '700' }}>Welcome to Our Store</h2>
                <span className="subheading">We have something nice for you today</span>
              </header>

              {console.log("helloVendorPage", this.props.products)}
        {
            
        this.props.products?.filter(prod=>{return prod.vendor?.id==this.props?.match?.params?.id}).map((p,index)=>{ return <div className="col-lg-3 col-md-6 mb-sm-50">
        <div className="t-item">

            
            <div className="t-image">
            <img key={index} src={"https://sendthatcake.com/labapi/resources/"+p.pictures[0]?.downloadUrl} alt="ProductImage" className="img-responsive"/>
            <div className="t-description">
                <div className="content-wrapper">
                <h4 style={{color:'#000000'}} className="h-alt">About this Item</h4>
                <p key={index}>{p.description}</p>
                <Link to={`/product/${p.id}`} className="btn btn-sm btn-success">View this item</Link>
                </div>
            </div>
            </div>

            
            <div className="t-info">
            <h4 key={index} style={{color:'#000'}} className="t-name">{p.name}</h4>
            <span key={index} className="t-role text-center">GHc {p.price}</span>
            <ul className="social-links">
                <li><a href="#"><i className="fa fa-star">12 Reviews</i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
            </ul>
            </div>

        </div>
        </div>})
        }

            </div>
          </section>
                <DefaultFooter1 />
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        // products: state?.products?.product
        products: state.product?.product,
        vendor: state.login.user.vendor,


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: ()=> dispatch(getProductAsync()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VendorProducts);