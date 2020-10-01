import React from 'react';
import logo from './logo.svg';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import './App.css';
import Header from './containers/Header.js'
import NavBar from './components/NavBar'
import About from './components/About'
import Welcome from './containers/Welcome'
import Search from './components/Search'
import Result from './components/Result'
import Favorites from './components/Favorites'


class App extends React.Component {

  state={
    user: null,
    allLocations: [], 
    favorites: []
  }

  // ### USER SIGNUP ########
  submitSignup =(obj)=>{
    console.log('submitSignup heard in App')
    console.log(obj)
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(newUser => console.log("fetch result: ", newUser))
  }

  // ######### USER LOGIN ########
  
    loginHandler=(obj)=>{
    console.log('entered loginHandler fetch')
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    }
    console.log(obj)
      fetch('http://localhost:3000/api/v1/login', options)
      .then(resp=> resp.json())
      .then((data)=> {
        console.log(data)
        localStorage.setItem('token', data.jwt)
        this.setState({user: data.user}, ()=> console.log(this.state))
        this.props.history.push('/search')
      })
  }

  successfulLogin=()=>{
    console.log('emter successfulLoig')
    if( this.state.user){
      
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    console.log(localStorage)
    //##### PULL USER ######
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(resp => resp.json())
      // .then(data => console.log("in CDM: ", data))
      .then(data => this.setState({user: data.user}))
    } else {
      // send to login 
    }
    // ##### PULL ALL LOCATIONS INTO STATE #####
    if (token) {
    fetch('http://localhost:3000/locations')
      .then(resp=>resp.json())
      .then(data=> this.setState({allLocations: data}))
    } else {
      // send to login 
    }
    // #### PULL ALL FAVORITES INTO STATE ####
    // if (token) {
    // fetch('http://localhost:3000/favorites')
    //   .then(resp=>resp.json())
    //   .then(data=> this.setState({favorites: data}))
    // } else {
    //   // send to login 
    // }
  } // end of componentDidMount



  render(){
    console.log(this.props)

    return (
      <div className="App">
            <Header />
            <Route exact path='/' render={()=> <Welcome user={this.state.user} submitSignup={this.submitSignup} loginHandler={this.loginHandler} header={"Survivor"} />} />
            <Route exact path='/about' component={About}/>
            <Route exact path='/search' render={()=> <Search user={this.state.user}/>}/>
            <Route exact path='/result' render={()=> <Result user={this.state.user}/>}/>
            <Route  path='/favorites' render={()=> <Favorites user={this.state.user} favorites={this.state.favorites}/>}/> 
      </div>
    );

  }
}

export default withRouter(App);
