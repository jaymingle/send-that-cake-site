import React, { Component } from "react";

import FrontHeader from "../../components/FrontHeader/FrontHeader";
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';

const title = "Contact Us";
const description = "Welcome to the Contact Page";

class Contact extends Component {
    render() {
        return (
            <div>
                <FrontNav />
                <FrontHeader title={title} />
                <section id="contact" className="section contact-2">
          
          <header className="sec-heading">
            <h2 style={{color:'#000000'}}>We'd love to hear from you</h2>
            <span className="subheading">If you have any feedback or complaint for us please let us know here.</span>
          </header>

          <div className="footer-litle ws-m">
            <div className="gray-bg">

              
              <address>
                <ul>
                <li>
                    <span className="fa fa-whatsapp adr-icon"></span>
                    <div className="adr-group">
                      <span className="adr-heading">Whatsapp</span>
                      <span className="adr-info">+ 233 268 297 280 <br/>+ 233 266 978 535</span>
                    </div>
                  </li>
                  <li>
                    <span className="linea-basic-smartphone adr-icon"></span>
                    <div className="adr-group">
                      <span className="adr-heading">Phone</span>
                      <span className="adr-info">+ 233 268 297 280 <br/>+ 233 266 978 535</span>
                    </div>
                  </li>
                  <li>
                    <span className="linea-basic-paperplane adr-icon"></span>
                    <div className="adr-group">
                      <span className="adr-heading">Email</span>
                      <span className="adr-info">needhelp@sendthatcake.com<br/>support@sendthatcake.com</span>
                    </div>
                  </li>

                  <li>
                    <span className="linea-basic-map adr-icon"></span>
                    <div className="adr-group">
                      <span className="adr-heading">Address</span>
                      <span className="adr-info">No.11 Banana Street, <br/>Ambassadorial Enclave, East Legon-Accra</span>
                    </div>
                  </li>
                </ul>
              </address>            
            </div>
          </div>
          
          <div className="container">
            
            
            <div className="row">
            <h3 className="sec-heading" style={{color:'#000000'}}>Send us a complaint here</h3>

              <form action="../assets/contact-form/contact-form.php" method="POST" id="contact-form-1" className="form-ajax">
                  <div className="col-md-offset-2 col-md-4 wow fadeInUp" data-wow-duration="1s">
                    
                    <div className="form-group">
                      <input type="text" name="name" id="name-contact-1" className="form-control validate-locally" placeholder="Enter your fullname"/>
                      <label for="name-contact-1">Name</label>
                      <span className="pull-right alert-error"></span>
                    </div>

                    
                    <div className="form-group">
                      <input type="email" name="email" id="email-contact-1" className="form-control validate-locally" placeholder="Enter a valid email address"/>
                      <label for="email-contact-1">Email</label>
                      <span className="pull-right alert-error"></span>
                    </div>

                  </div>

                  <div className="col-md-4 wow fadeInUp" data-wow-duration="1s">

                    
                    <div className="form-group">
                      <textarea name="message" id="message-contact-1" className="form-control" rows="5" placeholder="Tell us what's on your mind"></textarea>
                      <label for="message-contact-1">Message</label>
                    </div>
                    <div>
                      <input type="submit" className="btn pull-right" value="Send That Message"/>
                    </div>

                    
                    <div className="ajax-message col-md-12 no-gap"></div>

                  </div>

                </form>
            </div>
          </div>
        </section>
        <DefaultFooter1 />
            </div>
        );
    }
}

export default Contact;
