import React, {Component} from 'react';
import { Link } from 'react-router-dom';

//so this has no logic                                           of showing a menu based on an exteeeeeeeernal configuration. and the links are all normal anchor tags instead of rrrrrrrrrrrreaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaact router links and therefore they'll refresh the page on each click
//okay cool... refresh the page after putting one of the navs and let's see...okay..but the navs are already there..or what do u mean?
class DefaultAside extends Component{
    render(){
        console.log("nav is ",this.props.navigation)
        return(
            
            <div className="page-content d-flex align-items-stretch">
                <div className="default-sidebar">
                    <nav className="side-navbar box-scroll sidebar-scroll">
                    <ul className="list-unstyled">
                        {
                            this.getNav(this.props.navigation?.items)
                        }
                    </ul>   
                    </nav>
                   
                </div>
                </div>
        )
    }
//open the page
    getNav = (items) => {
        return items?.map(navItem => {
            return <li className="active"><Link to={navItem.url} aria-expanded="true" data-toggle="collapse"><i className={`la la-${navItem.icon}`}></i><span>{navItem.name}</span></Link>

            {
                navItem.children?.length > 0
                ?
                this.getNav(navItem.children)
                :
                null
            }
</li>
        })
    }
 }
// const mapStateToProps = (state) => {
//   return {
//     user: state.login,
//   }
// }
 
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DefaultAside);

export default DefaultAside;