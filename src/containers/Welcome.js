import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
// import Route from 'react-reouter-dom'

class Welcome extends React.Component {

    render(){
        return (
            <>
                <div>
                    <Signup submitSignup={this.props.submitSignup}/>
                </div>
                <div>
                    <Login loginHandler={this.props.loginHandler}/>
                </div>
            </>
        )
    }
}
export default Welcome