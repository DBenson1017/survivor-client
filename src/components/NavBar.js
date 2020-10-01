import React from 'react'
import {NavLink} from 'react-router-dom'
import Signup from './Signup'
import About from './About'
import Welcome from '../containers/Welcome'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

class NavBar extends React.Component{

    render(){
        return (

            <div className="navbar">
                <p>SURVIVOR ICON/LOGO HOME SEARCH RESULTS</p>
          
            </div>    
        )

    }


}
export default NavBar

/*
      <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  {/* <Button as='a' inverted=>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}> }
                  Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
*/
