import React, {Component} from 'react';

class CardAggregate extends Component{
    render(){
        return(
            <div className="row flex-row">
            <div className="col-xl-4 col-md-6 col-sm-6">
                <div className="widget widget-12 has-shadow">
                    <div className="widget-body">
                        <div className="media">
                            <div className="align-self-center ml-5 mr-5">
                                <i className="ion-social-facebook text-facebook"></i>
                            </div>
                            <div className="media-body align-self-center">
                                <div className="title text-facebook">David Green</div>
                                <div className="number">10,865 Likes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
                <div className="widget widget-12 has-shadow">
                    <div className="widget-body">
                        <div className="media">
                            <div className="align-self-center ml-5 mr-5">
                                <i className="ion-social-twitter text-twitter"></i>
                            </div>
                            <div className="media-body align-self-center">
                                <div className="title text-twitter">@David_Green</div>
                                <div className="number">8,986 Followers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
                <div className="widget widget-12 has-shadow">
                    <div className="widget-body">
                        <div className="media">
                            <div className="align-self-center ml-5 mr-5">
                                <i className="ion-social-linkedin-outline text-linkedin"></i>
                            </div>
                            <div className="media-body align-self-center">
                                <div className="title text-linkedin">@David_Green</div>
                                <div className="number">3,654 Followers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default CardAggregate;