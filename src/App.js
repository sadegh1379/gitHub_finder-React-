import React , {Component , Fragment} from 'react';
import { BrowserRouter as Roter , Switch , Route } from 'react-router-dom';
import About from './component/pages/About'
import Navbar from './component/layout/navbar';
import Users from './component/Users/Users';
import User from './component/Users/User';
import Notfound from './component/pages/Notfound'
import axios from 'axios';
import Search from './component/Users/Search';
import Alert from './component/layout/Alert'
import './App.css';

class App extends Component{
  state={
        users:[],
        user:{},
        loading:false,
        alert:null
  }
  async componentDidMount(){
    
    this.setState({loading:true});
   const res = await  axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({  users: res.data , loading:false }) ;
   
    
    
  }

  // show all contacts
   searchUser =async (text)=>{
     
    this.setState({loading:true});
    const res = await  axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
     &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({  users: res.data.items , loading:false }) ;
  }

  // clear user
  clearUser = () =>{
    this.setState({ users : [] , loading: false });
  }

  // show alert error
  showAlert = (msg , type) =>{
    this.setState({alert:{msg , type}})

    setTimeout( ()=>{ this.setState({ alert:null })} , 3000);
  }

  // get user single page 

  getUser =async (username) =>{

    this.setState({loading:true});
    const res = await  axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
     &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({  user: res.data , loading:false }) ;
  }

  render(){
    const { users , loading , user } = this.state;
  return (
    <Roter>
        <div>
             <Navbar title="Github Finder"/>
                 <Switch>
                   <Route exact path="/" render={ props => (
                      <Fragment>
                            <div className="container">                   
                          <Alert alert={this.state.alert}/>
                          <Search searchUser={this.searchUser} clearUser={this.clearUser} showAlert={this.showAlert} showClear={users.length > 0 ? true : false}/>             
                          </div>  
                          <hr className="bg-danger"/>
                          <div className="container">
                              <Users loading={loading} users={users}/>
                          </div>

                      </Fragment>
                   )}/>
                   <Route exact path="/about" component={About}/>
                   <Route exact path="/user/:login" render={props => (
                     <User {...props} user={user} getUser={this.getUser} loading={loading}/>
                   )}/>
                   <Route component={Notfound} />
                   
              </Switch>
         </div>
    </Roter>
  );
  }
}

export default App;
