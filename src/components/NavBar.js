import React from 'react'
import {NavLink} from 'react-router-dom'
import Signup from './Signup'
import About from './About'
import Welcome from '../containers/Welcome'
import { Input, Menu, Grid, Icon } from 'semantic-ui-react'


class NavBar extends React.Component{

    render(){
        return (
           
            <div className="navbar">
                
              <Grid style={{ height: '9vh' }} divided='vertically'>
                <Menu secondary floated stackable>
                <Icon name='home' size='small'/>
                <Menu.Item />
                
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
                </Grid>
               
            </div>    
        )
    }
}
export default NavBar





   


