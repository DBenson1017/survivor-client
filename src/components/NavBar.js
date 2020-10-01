import React from 'react'
import {NavLink} from 'react-router-dom'
import Signup from './Signup'
import About from './About'
import Welcome from '../containers/Welcome'
import { Input, Menu } from 'semantic-ui-react'


class NavBar extends React.Component{

    render(){
        return (

            <div className="navbar">
                <Menu secondary floated>
                <Menu.Item
                    name='SURVIVOR'
                 />
                  <Menu.Item
                    name='home'
                 />
                <Menu.Item
                name='search'
                />
                {/* </Menu.Menu> */}
                </Menu>
               
            </div>    
        )

    }


}
export default NavBar




   


