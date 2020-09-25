import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/Header.js'
import MainContainer from './containers/MainContainer'



class App extends React.Component {

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

  render(){

    return (
      <div className="App">
        
        <Header />
        <MainContainer submitSignup={this.submitSignup}/>
      
      </div>
    );

  }
}

export default App;
