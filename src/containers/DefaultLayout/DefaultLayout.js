import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { connect } from 'react-redux';
import Constants from "../../utils/Constants";
// import DefaultAside from "./DefaultAside";
// import DefaultFooter1 from "./DefaultFooter1";
// import DefaultHeader from './DefaultHeader'; //so what im saying is the colums are setup in the components that ive imported here..so the defaultAside for example stays in the correct position when i import it..the only thing now is to switch to the correct nav links when i login as customer or admin etc
//i dont thnk the footer and header will change much..but ill do that..                                                 

import admin_navigation from '../../navigation/admin_navigation';
import vendor_navigation from '../../navigation/vendor_navigation';
import customer_navigation from '../../navigation/customer_navigation';

// routes config for different user groups
import admin_routes from '../../routes/admin_routes';
import vendor_routes from '../../routes/vendor_routes';
import customer_routes from '../../routes/customer_routes';//ok..cool
import { getCartAsync } from '../../actions/cartActions';


// import { getUserAsync } from '../../actions/userActions';you close am.. oh. I want saaaaaaave all or turn on autosave auto save dey on already
//edey save if you remove focus on the tab..ooooooooooooh, that no be how my own dey do. make I see thhhe autosave option for the menu iside`

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));//ill do these later ayt
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

//watch what.. you want make ah rewrite react or what?? that will take u like 15 mins.. What amt of code diddd u copy?l
//line 11 to 44..some of the imports..and the content of those imports.. that will mean u copiied the default aside from core=ui...no..the defaultAside was from the html.. i just reactified it

class DefaultLayout extends Component {

  componentDidMount(){
    this.props.getCart();
  }

  loading = () => <div>Loading</div>
  
  render() {
    let navigation = {}
    let routes = {}
    console.log("this.props.user", this.props.user);//can't findddd this log..yh..          since this log is not coming, makkkkkkes me wonder if this component is even loading
    if (this.props.user.type === Constants.admin) {
      routes = admin_routes;
      navigation = admin_navigation;
    }
    else if (this.props.user.type === Constants.vendor) {
      routes = vendor_routes;
      navigation = vendor_navigation;//changes the routes to the appropriate one
    }
    else {
      routes = customer_routes;
      navigation = customer_navigation;
    }

    console.log("Navigatiooooooooooooooooooooooooooooonnnnn is ", navigation);
    console.log("Route is ", routes);



    return (
      // displays the routes..
      <div className="app">
        <Suspense fallback={this.loading()}>
        <DefaultHeader fixed />
</Suspense>
        {/* {is this where the asde will be? below...} */}

        <Suspense fallback={this.loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/dashboard/auth" to="/dashboard" />
          </Switch>
        <DefaultAside navigation={navigation} />
        </Suspense>
                       {/* <DefaultFooter1 /> */}
      </div>

    )

  }
}
const mapStateToProps = (state) => {
  return {
    user: state.login,
  }
}
//lol.. 
const mapDispatchToProps = (dispatch) => {
  return {
    // getUser : (name) => dispatch(getUserAsync(name)), wey error dey this side?
    getCart: ()=> dispatch(getCartAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);