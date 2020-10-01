import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



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
            <>
            <h2>Sign up for an account here!</h2>

            <Grid textAlign='center' style={{ height: '1px' }} verticalAlign='middle' divided="vertically">
            <Grid.Column style={{ maxWidth: 450 }}>
            <Form>
            <form onSubmit={this.submitHandler}>
                <Form.Field>
                <input onChange={this.changeHandler} name='first_name' placeholder='First Name' type='text' value={this.state.first_name} /> <br></br>
                </Form.Field>
                <Form.Field>
                <input onChange={this.changeHandler} name='last_name' placeholder='Last Name' type='text' value={this.state.last_name} /><br></br>
                </Form.Field>
                <Form.Field>
                <input onChange={this.changeHandler} name='username' placeholder='username' type='text' value={this.state.username}/><br></br>
                </Form.Field>
                <Form.Field>
                <input onChange={this.changeHandler} name='email' placeholder='email' type='text' value={this.state.email}/><br></br>
                </Form.Field>
                <Form.Field>
                <input onChange={this.changeHandler} name='password' placeholder='password' type='text' value={this.state.password}/><br></br>
                </Form.Field>
                <Form.Field>
                <input onChange={this.changeHandler} name='zip' placeholder='zip code' type='text' value={this.state.zip}/><br></br>
                </Form.Field>
                <Form.Field>
                <input type='submit' value='Submit' />
                </Form.Field>
            </form>
            </Form>
            </Grid.Column>
            </Grid>

          </>
        )
    }

}
export default Signup 

/*
 <>
                
                  
                    
            </>
*/

/*
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
*/





