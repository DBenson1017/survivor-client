import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


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
            
            <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' divided="vertically">
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <h2> Log-in to your account</h2>
                    {/* <Form> */}
                    <form onSubmit={this.submitHandler}>
                        <Form.Field>
                            <input onChange={this.changeHandler} name='username' placeholder='username' type='text' value={this.state.username} /> 
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.changeHandler} name='password' placeholder='password' type='text' value={this.state.password} /> 
                        </Form.Field>
                            <input type='submit' value='login' />
                        </form>
                        {/* </Form> */}
                    </Grid.Column>
            </Grid>
            </>
        )
    }

}

export default Login 






  


