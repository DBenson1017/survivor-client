import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header.js'
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
      .then(user => console.log(user))
  }

  render(){

    return (
      <div className="App">
        
        <Header />
        <MainContainer submitSignup={this.submitSignup} loginHandler={this.loginHandler}/>
      
      </div>
    );

  }
}

export default App;
