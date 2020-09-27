import React from 'react';

class Login extends React.Component {

    state={
        username: '',
        password: ''
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        console.log('submit heard on localLoginHandler ')
        console.log(this.state)
        this.props.loginHandler(this.state)
    }

    render () {
        return(
            <>
            <h3>Log into your account</h3>
          <form onSubmit={this.submitHandler}>
            <input onChange={this.changeHandler} name='username' placeholder='username' type='text' value={this.state.username} /> <br></br>
            <input onChange={this.changeHandler} name='password' placeholder='password' type='text' value={this.state.password} /> <br></br>
            <input type='submit' value='login' />
          </form>
          </>
        )
    }

}

export default Login 