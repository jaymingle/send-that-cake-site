import React,{Component} from 'react';

class CheckoutFail extends Component{
    render(){
        return(
            <div className="wrapper-404">
          <div className="content-wrapper">

            <div className="lead-wrapper">
              <h1 className="lead-404">Oops!!</h1>
              <p className="info-404">Order failed to process</p>
            </div>

            <div className="info-wrapper">
              <p className="info-404">We're sorry but we couldn't place your order...<br/> You can still try again</p>
            </div>

            <ul className="links-404">
              <li><a href="/" className="btn btn-light btn-small">Go Back Home</a></li>
              <li><a href="/contact" className="btn-ghost-light btn-small">Report this</a></li>
            </ul>

          </div>
        </div>
        )
    }
}
export default CheckoutFail;