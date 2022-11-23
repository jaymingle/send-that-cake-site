import React, {Component} from 'react';
import FrontNav from "../../containers/DefaultLayout/FrontNav";
import FrontHeader from "../../components/FrontHeader/FrontHeader";
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';
import "./faqs.css";

const title ="F.A.Qs";
const description = "Frequently asked questions you might be interested in";

class FAQ extends Component{
    render(){
        return(
    <div>
        <FrontNav/>
        <FrontHeader title={title} description={description}/>

        <section className="container section">
          <div className="row ws-m">
            <header className="sec-heading">
              <h2 style={{color:"#000"}}>General Questions</h2>
              <span className="subheading" style={{color:"#000"}}>Here's answers to some of the questions you may have on your mind</span>
            </header>

            {/* <div className="col-md-offset-3 col-md-6 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fugiat totam, inventore optio quo odit officiis ex recusandae reiciendis placeat dolore assumenda ducimus, eos facere accusamus voluptatem esse.</p>
            </div> */}
          </div>

          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              
              
              <div className="panel-group accordions-1" id="faq-accordion-1" role="tablist" aria-multiselectable="true">

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-1">
                    <h4 className="panel-title">
                      <span role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading-1">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-2">
                    <h4 className="panel-title">
                      <span className="collapsed" role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-2">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-3">
                    <h4 className="panel-title">
                      <span className="collapsed" role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-3">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-4">
                    <h4 className="panel-title">
                      <span className="collapsed" role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-4">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-5">
                    <h4 className="panel-title">
                      <span className="collapsed" role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-5">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-6">
                    <h4 className="panel-title">
                      <span className="collapsed" role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-6">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-7">
                    <h4 className="panel-title">
                      <span className="collapsed" role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-7" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-7">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="heading-8">
                    <h4 className="panel-title">
                      <span className="collapsed" role="button" data-toggle="collapse" data-parent="#faq-accordion-1" href="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                        Example question in acordion ?
                      </span>
                    </h4>
                  </div>
                  <div id="collapse-8" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading-8">
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>

              </div>

              <span className="faq-contact-links"><i className="fa fa-info-circle"></i> If you have more questions <a href="#">contact us here.</a></span>

            </div>
          </div>
        </section>
        <DefaultFooter1 />
        </div>
        )
    }
}

export default FAQ;