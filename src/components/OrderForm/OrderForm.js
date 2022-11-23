import React, {Component} from 'react';
import InputField from '../../components/inputField/InputField';

class OrderForm extends Component {
    render(){
        return(
            <div class="col-md-offset-3 col-md-4 front-form-wrapper front-wow front-fadeInRight" data-wow-duration="1.5s" style={{paddingTop:'172px'}}>
                      <form action="post" class="form-group">
                        <InputField/>
                          <select>
                            <option value="volvo" style="background-image:url(https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);">Red Velvet Cake (230ghc)</option>
                            <option value="saab"  style="background-image:url(images/saab.png);">Saab</option>
                            <option value="honda" style="background-image:url(images/honda.png);">Honda</option>
                            <option value="audi"  style="background-image:url(images/audi.png);">Audi</option>
                          </select>                        <input class="form-control" type="password" placeholder="Password"/>
                        <input class="form-control" type="email" placeholder="Email"/>
                        <input class="front-btn-ghost-light btn btn-warning" type="submit" value="Quick Order"/>
                      </form>
                    </div>
        )
    }
}

export default OrderForm;