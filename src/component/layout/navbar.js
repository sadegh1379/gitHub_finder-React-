import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Navbar = ({title}) => {
    
    
        return (
            

            
            <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h3 className="text-white py-3">
                    <i className="fa fa-github pr-3"></i>
                     {title}
                </h3>
          
              <ul className="navbar-nav  text-white ml-3">
                <li className="nav-item ">
                  <Link className="nav-link" to="/"><span className="fa fa-home"></span> Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"><span className="fa fa-question"></span> About</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://sadeghakbari.gigfa.com"><span className="fa fa-user"></span> About Me</a>
                </li>
                
              </ul>
       
            
          </nav>




            
        )
    
}

Navbar.defaultProps={
    title:'Github Finder',
    
}

 Navbar.propTypes={
    title: PropTypes.string.isRequired,

}

export default Navbar;
