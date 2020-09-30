import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Checkbox} from 'semantic-ui-react'

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
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='white' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form>
                    <form onSubmit={this.submitHandler}>
                        <Form.Field>
                            <input onChange={this.changeHandler} name='username' placeholder='username' type='text' value={this.state.username} /> 
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.changeHandler} name='password' placeholder='password' type='text' value={this.state.password} /> 
                        </Form.Field>
                        <Button> 
                            <input type='submit' value='login' />
                        </Button>
                        </form>
                        </Form>
                    </Grid.Column>
                </Grid>
            </>
        )
    }

}

export default Login 






  


