import React, {Component} from 'react';
// import 'classnames';
// import url(../../../../assets/icons/lineawesome/css/line-awesome.min.css);
// import url(../../../../assets/icons/ionicons/css/ionicons.min.css);
// import url(../../../../assets/icons/themify/css/themify-icons.min.css);
// import url(../../../../assets/icons/meteocons/css/meteocons.min.css);
// import '../../assets1/css/elisyam-1.5.min.css';
import DefaultAside from '../../containers/DefaultLayout/DefaultAside';
import CardAggregate from '../../components/CardAggregates/CardAggregates';
import ChartRep from '../../components/ChartRep/ChartRep';

// const elisyam = require('../../assets1/css/elisyam-1.5.min.css')


class AdminDashboard extends Component{
    render(){
        return(
                <div className="main">
                {/* <link rel="stylesheet" href={elisyam} /> */}
                    <DefaultAside/>
                <div className="content-inner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="page-header">
	                            <div className="d-flex align-items-center">
	                                <h2 className="page-header-title">Dashboard</h2>
	                                <div>
	                                <div className="page-header-tools">
	                                    <a className="btn btn-gradient-01" href="#">Add Widget</a>
	                                </div>
	                                </div>
	                            </div>
                            </div>
                        </div>
                        <CardAggregate/>
                        <ChartRep/>
                        <div className="row flex-row">
                            <div className="col-xl-4 col-md-6">
                                <div className="widget widget-04 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Post</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-check"></i>Valid Post
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="faq.html" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body p-0">
                                        <div className="post-container">
                                            <div className="media mb-3">
                                                <div className="media-left align-self-center user">
                                                    <a href="pages-profile.html"><img src="assets/img/avatar/avatar-07.jpg" className="rounded-circle" alt="..."/></a>
                                                </div>
                                                <div className="media-body align-self-center ml-3">
                                                    <div className="title">
                                                        <span className="username">Lisa Garett</span> posted an image
                                                    </div>
                                                    <div className="time">42 min ago</div>
                                                </div>
                                            </div>
                                            <img src="assets/img/background/01.jpg" alt="..." className="img-fluid"/>
                                            <div className="col no-padding d-flex justify-content-end mt-3">
                                                <div className="meta">
                                                    <ul>
                                                        <li><a href="#"><i className="la la-comment"></i><span className="numb">38</span></a></li>
                                                        <li><a href="#"><i className="la la-heart"></i><span className="numb">94</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group mt-5">
                                            <input type="text" className="form-control pr-0" placeholder="Write a comment ..."/>
                                            <span className="input-group-addon">
                                                <button className="btn" type="button">
                                                    <i className="la la-smile-o la-2x"></i>
                                                </button>
                                            </span>
                                            <span className="input-group-addon">
                                                <button className="btn pr-3" type="button">
                                                    <i className="la la-pencil la-2x"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="widget widget-05 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Top Author</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body no-padding hidden">
                                        <div className="author-avatar">
                                            <span className="badge-pulse-green"></span>
                                            <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle"/>
                                        </div>
                                        <div className="author-name">
                                            Louis Henry
                                            <span>Designer</span>
                                        </div>
                                        <div className="chart">
                                            <div className="row no-margin justify-content-center">
                                                <div className="col-12 col-xl-8 col-md-8 col-sm-8">
                                                    <div className="row no-margin align-items-center">
                                                        <div className="col-9 no-padding">
                                                            <div className="chart-graph">
                                                                <div className="chart">
                                                                    <canvas id="sales-stats"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 no-padding text-center">
                                                            <div className="chart-text">
                                                                <span className="heading">Sales</span>
                                                                <span className="number">364</span>
                                                                <span className="cxg text-green">+35%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-stats">
                                            <div className="row d-flex justify-content-between">
                                                <div className="col-4 text-center">
                                                    <i className="la la-users followers"></i>
                                                    <div className="counter">+124</div>
                                                    <div className="heading">Followers</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-dribbble dribbble"></i>
                                                    <div className="counter">+357</div>
                                                    <div className="heading">Likes</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <i className="la la-behance behance"></i>
                                                    <div className="counter">+98</div>
                                                    <div className="heading">Followers</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="actions text-center">
                                            <a href="pages-profile.html" className="btn btn-gradient-01">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="widget widget-06 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Reviews</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body p-0">
                                        <div id="list-group" className="widget-scroll" style={{maxHeight:'490px'}}>
                                            <ul className="reviews list-group w-100">
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-02.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Brandon Smith</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    WoW! Amazing Work!
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">30 minutes ago - 1 Reply</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>12</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-05.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Megan Duncan</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                </div>
                                                                <p>
                                                                    Very nice! Keep up the beautiful work.
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">2 hours ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-04.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Nathan Hunter</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                </div>
                                                                <p>
                                                                    Nice work, good design!
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">4 hours ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>32</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-09.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Michael Bradley</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    Very nice! Keep up the beautiful work.
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">5 hours ago - 2 Reply</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>2</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="media">
                                                        <div className="media-left align-self-start">
                                                            <img src="assets/img/avatar/avatar-03.jpg" className="user-img rounded-circle" alt="..."/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="username">
                                                                <h4>Louis Henry</h4>
                                                            </div>
                                                            <div className="msg">
                                                                <div className="stars">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star-half-empty"></i>
                                                                </div>
                                                                <p>
                                                                    I like the color combination!
                                                                </p>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="mr-3">1 day ago</span>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="media-right pr-3 align-self-center">
                                                            <div className="like text-center">
                                                                <i className="ion-heart"></i>
                                                                <span>9</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-12">
                                <div className="widget widget-07 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Product Overview</h2>
                                        <div className="widget-options">
                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-primary ripple">Week</button>
                                                <button type="button" className="btn btn-primary ripple">Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body">
                                        <div className="table-responsive table-scroll padding-right-10" style={{maxHeight:'520px'}}>
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="check-all" id="check-all" />
                                                                <label for="check-all"></label>
                                                            </div>
                                                        </th>
                                                        <th>Order ID</th>
                                                        <th>Customer Name</th>
                                                        <th>Country</th>
                                                        <th>Ship Date</th>
                                                        <th><span style={{width:'100px'}}>Status</span></th>
                                                        <th>Order Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{width:'5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb1" id="cb1"/>
                                                                <label for="cb1"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Lori Baker</td>
                                                        <td>US</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width:'100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:"5%"}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb2" id="cb2"/>
                                                                <label for="cb2"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>Lawrence Crawford</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width:"100px"}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:"5%"}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb3" id="cb3"/>
                                                                <label for="cb3"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Samuel Walker</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width:"100px"}}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:"5%"}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb4" id="cb4"/>
                                                                <label for="cb4"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Angela Walters</td>
                                                        <td>US</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width:"100px"}}><span className="badge-text badge-text-small success">Delivered</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:"5%"}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb5" id="cb5"/>
                                                                <label for="cb5"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Ryan Hanson</td>
                                                        <td>ES</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{width:'100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:'5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb6" id="cb6"/>
                                                                <label for="cb6"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">054-01-FR</span></td>
                                                        <td>Evelyn Black</td>
                                                        <td>FR</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width:'100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$139.45</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:'5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb7" id="cb7"/>
                                                                <label for="cb7"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-12-US</span></td>
                                                        <td>James Morris</td>
                                                        <td>EN</td>
                                                        <td>10/21/2017</td>
                                                        <td><span style={{width:'100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$189.00</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:'5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb8" id="cb8"/>
                                                                <label for="cb8"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">189-01-RU</span></td>
                                                        <td>Valentin H.</td>
                                                        <td>AU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width:'100px'}}><span className="badge-text badge-text-small danger">Failed</span></span></td>
                                                        <td>$107.55</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:'5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb9" id="cb9"/>
                                                                <label for="cb9"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">092-06-FR</span></td>
                                                        <td>Beverly Matthews</td>
                                                        <td>RU</td>
                                                        <td>08/21/2017</td>
                                                        <td><span style={{width:'100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$129.85</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{width:'5%'}}>
                                                            <div className="styled-checkbox mt-2">
                                                                <input type="checkbox" name="cb10" id="cb10"/>
                                                                <label for="cb10"></label>
                                                            </div>
                                                        </td>
                                                        <td><span className="text-primary">021-09-US</span></td>
                                                        <td>Jeffrey Arnold</td>
                                                        <td>US</td>
                                                        <td>07/21/2017</td>
                                                        <td><span style={{width:'100px'}}><span className="badge-text badge-text-small info">Paid</span></span></td>
                                                        <td>$199.95</td>
                                                        <td className="td-actions">
                                                            <a href="#"><i className="la la-edit edit"></i></a>
                                                            <a href="#"><i className="la la-close delete"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="widget-footer d-flex align-items-center">
                                        <div className="mr-auto p-2">
                                            <span className="display-items">Showing 1-30 / 150 Results</span>
                                        </div>
                                        <div className="p-2">
                                            <nav aria-label="...">
                                                <ul className="pagination justify-content-end">
                                                    <li className="page-item disabled">
                                                        <span className="page-link"><i className="ion-chevron-left"></i></span>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item active">
                                                        <span className="page-link">2<span className="sr-only">(current)</span></span>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#"><i className="ion-chevron-right"></i></a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-7 col-md-6">
                                <div className="widget widget-10 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Support Tickets</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body no-padding">
                                        <ul className="ticket list-group w-100">
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-02.jpg" className="user-img rounded-circle" alt="..."/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Brandon Smith</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                            </p>
                                                        </div>
                                                        <div className="status"><span className="open mr-2">Open</span>(1 hour ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-04.jpg" className="user-img rounded-circle" alt="..."/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Nathan Hunter</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                            </p>
                                                        </div>
                                                        <div className="status"><span className="pending mr-2">Pending</span>(2 hours ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center pr-4">
                                                        <img src="assets/img/avatar/avatar-05.jpg" className="user-img rounded-circle" alt="..."/>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="username">
                                                            <h4>Megan Duncan</h4>
                                                        </div>
                                                        <div className="msg">
                                                            <p>
                                                                Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et mauris sapien sem, ornare id mauris vitae, ultricies volutpat ...
                                                            </p>
                                                        </div>
                                                        <div className="status"><span className="closed mr-2">Closed</span>(1 day ago)</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="widget widget-11 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Activity Log</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-history"></i>History
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body p-0 widget-scroll" style={{maxHeight:"450px"}}>
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-06.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Beverly Oliver</span>
                                                    Send you a friend request
                                                </div>
                                                <div className="time">4 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline red">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-spinner"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    Server rebooted
                                                </div>
                                                <div className="time">10 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-05.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Megan Duncan</span>
                                                    Followed 4 people
                                                    <div className="users-like">
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-01.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-02.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-07.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-09.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="time">12 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline blue">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-heart-o"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Brandon Smith</span>
                                                    Liked <span className="font-weight-bold"><a href="#">Elisyam Admin Template</a></span>
                                                </div>
                                                <div className="time">30 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-twitter"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    + 3 new followers
                                                    <div className="users-like">
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-09.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-06.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                        <a href="profile.html">
                                                            <img src="assets/img/avatar/avatar-03.jpg" className="img-fluid rounded-circle" alt="..."/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="time">34 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-04.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Nathan Hunter</span>
                                                    Invited you in a group
                                                </div>
                                                <div className="time">42 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline violet">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="user-image">
                                                <img className="rounded-circle" src="assets/img/avatar/avatar-03.jpg" alt="..."/>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Louis Henry</span>
                                                    Is now following you
                                                </div>
                                                <div className="time">50 min ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline blue">
                                        <div className="timeline-content d-flex align-items-center">
                                            <div className="timeline-icon">
                                                <i className="la la-image"></i>
                                            </div>
                                            <div className="d-flex flex-column mr-auto">
                                                <div className="title">
                                                    <span className="username">Brandon Smith</span>
                                                    Uploaded <span className="font-weight-bold"><a href="#">8 photos</a></span>
                                                </div>
                                                <div className="time">1 hour ago</div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row no-margin">
                            <div className="col-xl-12">
                                <div className="row widget has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Calendar</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        Add Event
                                                    </a>
                                                    <a href="app-calendar.html" className="dropdown-item"> 
                                                        Basic Calendar
                                                    </a>
                                                    <a href="app-calendar-list.html" className="dropdown-item"> 
                                                        List Views
                                                    </a>
                                                    <a href="app-calendar-event.html" className="dropdown-item"> 
                                                        External Events
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body">
                                        <div id="demo-calendar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-18 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Messages Box</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="app-chat.html" className="dropdown-item"> 
                                                        <i className="la la-comments"></i>New Message
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body">
                                        <div className="input-group">
                                            <span className="input-group-addon pr-0 pl-0">
                                                <a className="btn" href="#">
                                                    <i className="la la-search la-2x"></i>
                                                </a>
                                            </span>
                                            <input type="text" className="form-control no-ppading-right no-padding-left" placeholder="Search"/>
                                        </div>
                                        <div className="new-message">
                                            <div className="media">
                                                <div className="media-left align-self-center mr-3">
                                                    <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"50px"}}/>
                                                </div>
                                                <div className="media-body align-self-center">
                                                    <div className="new-message-sender">Nathan Hunter</div>
                                                    <div className="new-message-time">New message about 2 minutes ago</div>
                                                </div>
                                                <div className="media-right align-self-center">
                                                    <div className="actions">
                                                        <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="list-group w-100 mt-5">
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-02.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"50px"}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Brandon Smith</div>
                                                            <div className="other-message-time">Are you serious? - 3 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"50px"}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Louis Henry</div>
                                                            <div className="other-message-time">Bonne idée, coucou à ... - 10 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="other-message">
                                                    <div className="media">
                                                        <div className="media-left align-self-center mr-3">
                                                            <img src="assets/img/avatar/avatar-05.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"50px"}}/>
                                                        </div>
                                                        <div className="media-body align-self-center">
                                                            <div className="other-message-sender">Megan Duncan</div>
                                                            <div className="other-message-time">See you later! - 20 min ago</div>
                                                        </div>
                                                        <div className="media-right align-self-center">
                                                            <div className="actions">
                                                                <a href="app-chat.html"><i className="la la-reply reply"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className="widget widget-19 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>New Meeting</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-bell-slash"></i>Disable Alerts
                                                    </a>
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Edit Widget
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body p-0">
                                        <div className="form-group row mt-3 mr-0 mb-3 ml-0">
                                            <div className="col-xl-12">
                                                <label className="form-control-label">Meeting Name</label>
                                                <input type="text" value="My Meeting" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mr-0 mb-3 ml-0">
                                            <div className="col-xl-8 mb-3">
                                                <label className="form-control-label">Date</label>
                                                <select name="meeting-date" className="custom-select form-control">
                                                    <option value="">Select Date</option>
                                                    <option value="01">Sun 1 April</option>
                                                    <option value="02">Mon 2 April</option>
                                                    <option value="03">Tue 3 April</option>
                                                    <option value="04">Wed 4 April</option>
                                                    <option value="05">Thu 5 April</option>
                                                    <option value="07">Fri 6 April</option>
                                                    <option value="08">Sat 7 April</option>
                                                    <option value="09">Sun 8 April</option>
                                                    <option value="10">Mon 9 April</option>
                                                    <option value="11">Tue 10 April</option>
                                                    <option value="12">Wed 11 April</option>
                                                    <option value="05">Thu 12 April</option>
                                                    <option value="07">Fri 13 April</option>
                                                    <option value="08">Sat 14 April</option>
                                                    <option value="09">Sun 15 April</option>
                                                    <option value="10">Mon 16 April</option>
                                                    <option value="11">Tue 17 April</option>
                                                    <option value="12">Wed 18 April</option>
                                                    <option value="05">Thu 19 April</option>
                                                    <option value="07">Fri 20 April</option>
                                                    <option value="08">Sat 21 April</option>
                                                    <option value="09">Sun 22 April</option>
                                                    <option value="10">Mon 23 April</option>
                                                    <option value="11">Tue 24 April</option>
                                                    <option value="04">Wed 25 April</option>
                                                    <option value="05">Thu 26 April</option>
                                                    <option value="07">Fri 27 April</option>
                                                    <option value="08">Sat 28 April</option>
                                                    <option value="09">Sun 29 April</option>
                                                    <option value="10">Mon 30 April</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4">
                                                <label className="form-control-label">Hour</label>
                                                <select name="meeting-hour" className="custom-select form-control">
                                                    <option value="">Select Hour</option>
                                                    <option value="01">07:00 am</option>
                                                    <option value="02">08:00 am</option>
                                                    <option value="03">09:00 am</option>
                                                    <option value="04">10:00 am</option>
                                                    <option value="05">11:00 am</option>
                                                    <option value="07">12:00 am</option>
                                                    <option value="08">01:00 pm</option>
                                                    <option value="09">02:00 pm</option>
                                                    <option value="10">03:00 pm</option>
                                                    <option value="08">04:00 pm</option>
                                                    <option value="09">05:00 pm</option>
                                                    <option value="10">06:00 pm</option>
                                                    <option value="08">07:00 pm</option>
                                                    <option value="09">08:00 pm</option>
                                                    <option value="10">09:00 pm</option>
                                                    <option value="08">10:00 pm</option>
                                                    <option value="09">11:00 pm</option>
                                                    <option value="10">12:00 pm</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul className="list-group w-100 widget-scroll" style={{maxHeight:"250px"}}>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-02.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Brandon Smith</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-03.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Louis Henry</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-04.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Nathan Hunter</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-05.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Megan Duncan</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-06.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Beverly Oliver</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-07.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Lisa Garett</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-08.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Peter Collins</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="media">
                                                    <div className="media-left align-self-center mr-3">
                                                        <img src="assets/img/avatar/avatar-09.jpg" alt="..." className="img-fluid rounded-circle" style={{width:"35px"}} />
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="people-name">Michael Bradley</div>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <div className="checkbox check"></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="text-center mt-4 mb-3">
                                            <button type="button" className="btn btn-gradient-01" data-toggle="modal" data-target="#delay-modal">
                                                Create Meeting
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="widget widget-20 has-shadow">
                                    <div className="widget-header bordered d-flex align-items-center">
                                        <h2>Files</h2>
                                        <div className="widget-options">
                                            <div className="dropdown">
                                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle">
                                                    <i className="la la-ellipsis-h"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a href="#" className="dropdown-item"> 
                                                        <i className="la la-edit"></i>Manage Files
                                                    </a>
                                                    <a href="#" className="dropdown-item faq"> 
                                                        <i className="la la-question-circle"></i>FAQ
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="widget20 owl-carousel">
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/03.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-01">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/04.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-02">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/05.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-01">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="card-image">
                                                            <img src="assets/img/background/02.jpg" alt="..."/>
                                                            <div className="card-overlay card-overlay-02">
                                                                <div className="card-overlay-content">
                                                                    <div className="category">
                                                                        <a href="#">Category</a>
                                                                    </div>
                                                                    <a href="#0" className="card-title">Title Collection</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-5 mr-0 ml-0">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-video-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">My Video</a></div>
                                                        <div className="files-number">84 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-audio-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">My Songs</a></div>
                                                        <div className="files-number">786 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-picture-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Photos</a></div>
                                                        <div className="files-number">189 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-zip-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Template</a></div>
                                                        <div className="files-number">36 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-pdf-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Pdf</a></div>
                                                        <div className="files-number">19 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                                <div className="media w-100">
                                                    <div className="align-self-center mr-2">
                                                        <i className="la la-file-powerpoint-o"></i>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <div className="files-title"><a href="#">Presentation</a></div>
                                                        <div className="files-number">263 Files</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
        )
    }
}
export default AdminDashboard;