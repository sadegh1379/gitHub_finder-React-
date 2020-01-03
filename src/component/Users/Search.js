import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class Search extends Component {
    state={
        text:''
    }

    static propTypes ={
        searchUser:PropTypes.func.isRequired,
        clearUser:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        showAlert:PropTypes.func.isRequired
    }

    
    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    onSubmit = (e) =>{
      e.preventDefault();
      if(this.state.text === ''){
            this.props.showAlert('please enter somthing...' , 'light');
      }else{
        this.props.searchUser(this.state.text);
       
      }
      
      
    }
    render() {
        const { showClear , clearUser } = this.props;
        return (
            
            <form onSubmit={this.onSubmit}>
                <input name="text" type="text" onChange={this.onChange} value={this.state.text} className="form-control  my-3" placeholder="Search User..."/>
                {/* <input type="submit" value="Search" className="btn btn-dark btn-block my-2"/> */}
                <button type="submit" className="btn btn-dark btn-block my-2">Search <span className="fa fa-search text-danger"></span></button>
                {showClear &&  <button onClick={clearUser}  className="btn btn-block btn-light">Clear <span className="fa fa-remove text-danger"></span></button>}
                
            </form>
            
            
            
        )
    }
}

export default Search
