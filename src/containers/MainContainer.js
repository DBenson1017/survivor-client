import React from 'react';
import User from '../components/User'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Search from '../components/Search'



class MainContainer extends React.Component {

    render () {
        return(
            <div>
                <Signup submitSignup={this.props.submitSignup}/>
                <Login />
                <User />
                <Search />


            </div>
        )
    }
}

export default MainContainer 