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
              <Icon name='home' size='small'/>
                <Menu secondary floated stackable>
                
                <Menu.Item>
                <Icon name='home' size="large"/>
                </Menu.Item>
               
                <Menu.Item
                    name='SURVIVOR'
                 />

                 <Menu.Item
                name='home'
                />
                
                <Menu.Item
                name='search'
                />
                </Menu>
                </Grid>
               
            </div>    
        )
    }
}
export default NavBar





   


