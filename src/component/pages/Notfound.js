import React from 'react'
import { Link } from 'react-router-dom'

const Notfound =()=> {
    return (
        <div className="container mt-4">
                <h1 className="display-4"><span className="text-danger">404</span>Page Not Found</h1>
                <p className="lead">Sorry , this page not found please back to <Link to="/">Home</Link> </p>    
        </div>
    )
}
export default Notfound;
