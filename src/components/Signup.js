import React from 'react';

class Signup extends React.Component {

    state={
            first_name:'',
            last_name:'',
            username:'',
            email:'',
            password:'',
            zip:''
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        this.props.submitSignup(this.state)
    }

    render () {
        return(
          <form onSubmit={this.submitHandler}>
            <input onChange={this.changeHandler} name='first_name' placeholder='First Name' type='text' value={this.state.first_name} />
            <input onChange={this.changeHandler} name='last_name' placeholder='Last Name' type='text' value={this.state.last_name} />
            <input onChange={this.changeHandler} name='username' placeholder='username' type='text' value={this.state.username}/>
            <input onChange={this.changeHandler} name='email' placeholder='email' type='text' value={this.state.email}/>
            <input onChange={this.changeHandler} name='password' placeholder='password' type='text' value={this.state.password}/>
            <input onChange={this.changeHandler} name='zip' placeholder='zip code' type='text' value={this.state.zip}/>
            <input type='submit' value='Submit' />
          </form>
        )
    }

}
export default Signup 