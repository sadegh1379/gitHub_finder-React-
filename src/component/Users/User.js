import React, { Component } from 'react';
import Spinner from '../layout/spinner'
import PropTypes from 'prop-types'

export class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }
    
    render() {
        const {
            login,
            name,
            html_url,
            avatar_url,
            location,
            bio,
            company,
            blog,
            followers,
            following,
            public_repos,
            public_gists,
            hireable

        } = this.props.user;

        const { loading } = this.props;
        return (
            <div className="container mt-4">
            
            {
                !loading ? (
                    <div className="profile">
                    <div className="card card-body mb-3 mt-4">
                           <div className="row">
                                  <div className="col-lg-3">
                                         <img src={avatar_url} alt="" className="img-fluid mb-3"/>
                                         <a href={html_url} className="btn btn-primary btn-block">View Profile</a>
                                  </div>
                                  <div className="col-lg-9">
                                         <span className="badge badge-primary p-2 mr-2">Profile Repos : {public_repos}</span>
                                         <span className="badge badge-secondary p-2 mr-2">Profile Gists : {public_gists}</span>
                                         <span className="badge badge-success p-2 mr-2">Profile followers : {followers}</span>
                                         <span className="badge badge-info p-2 mr-2">Profile following : {following}</span>
                                         <ul className="list-group mt-5">
                                                 <li className="list-group-item">Hireable : 
                                                 {hireable ? 
                                                 <i className="fa fa-check-square-o text-success pl-2 "></i> :
                                                 <i className="fa fa-remove text-danger pl-2"></i>
                                                 }
 
                                                 </li>
                                                 <li className="list-group-item ">Name : {name}</li>
                                                <li className="list-group-item">Company : {company}</li>
                                                <li className="list-group-item">Webssite / Blog : {blog}</li>
                                                <li className="list-group-item">Location : {location}</li>
                                                
                                         </ul>
 
                                  </div>
                           </div>
                    </div> 
                   
             </div>
                ) :
                (<Spinner/>)
                
            }
           
            
        </div>
        )
    }
}

User.propTypes = {
    user:PropTypes.object.isRequired,
    loading:PropTypes.bool.isRequired,
    
}

export default User
