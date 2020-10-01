import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
// import Route from 'react-reouter-dom'
// import backdrop from '../../public/Survivor_backdrop.jpeg'
import backdrop from '../Survivor_backdrop.jpeg'

class Welcome extends React.Component {

    header = () => {
    return <h1>{this.props.header}</h1>
    }

    render(){
        console.log('routing through Welcome')
        return (
            <>
                <div        
                class="bg_image"
                style={{
                    backgroundImage: `url(${backdrop})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"
                }}
                >
                    {this.header()}
                    <Signup submitSignup={this.props.submitSignup}/>
                    <Login loginHandler={this.props.loginHandler}/>
                </div>
            </>
        )
    }
}
export default Welcome


