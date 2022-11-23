import React, {Component} from 'react';

import FrontHeader from '../../components/FrontHeader/FrontHeader'
import FrontNav from '../../containers/DefaultLayout/FrontNav';
import DefaultFooter1 from '../../containers/DefaultLayout/DefaultFooter1';


const title = "About";
const description = "This is our about page";

class About extends Component {
    render(){
        return(
            <div>
                <FrontNav/>
                <FrontHeader title={title} />
                <h2>hehehhehehe</h2>
                <DefaultFooter1 />
            </div>
        )
    }
}

export default About;