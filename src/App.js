import React from 'react';
import logo from './logo.svg';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Header from './containers/Header.js'
import NavBar from './components/NavBar'
import About from './components/About'
import Welcome from './containers/Welcome'
import Search from './components/Search'
import MainContainer from './containers/MainContainer'



class App extends React.Component {

  state={
    user: null
  }

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
    .then(newUser => console.log(newUser))
  }

  loginHandler=(obj)=> {
    console.log('entered loginHandler fetch')
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    }
    fetch('http://localhost:3000/api/v1/login', options)
      .then(resp=> resp.json())
      .then((data)=> {
        console.log(data)
        localStorage.setItem('token', data.jwt)
        this.setState( {user: data.user} )
      })
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`}
      })
      .then(resp => resp.json())
      .then(data => this.setState({user: data.user}))
    } else {
      // send to login 
    }

  }

  render(){

    return (
      <div className="App">
        <NavBar />
    
            <Route exact path='/about' component={About}/>
            <Route exact path='/' render={()=> <Welcome user={this.state.user} submitSignup={this.submitSignup} loginHandler={this.loginHandler}/>} />
            <Route exact path='/search' render={()=> <Search user={this.state.user}/>}/>
       
      </div>
    );

  }
}

export default App;
