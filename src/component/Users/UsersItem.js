import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const UsersItem = ({user :{login  , html_url , avatar_url}}) => {
    
    
        
        return (
            <div>
                <div className="card border-dark  text-center mt-2">
                        <img style={{width:'80px'}} src={avatar_url} className="rounded-circle mx-auto mt-3"/>
                            <h5 className="pt-4 pb-4">{login}</h5>
                     <Link to={`/user/${login}`} className="btn btn-danger btn-sm mx-auto mb-3" style={{width:'60px'}}>More</Link>

                </div>
            </div>
        )
    
}

UsersItem.propTypes={
 user:PropTypes.object.isRequired,
}

export default UsersItem
