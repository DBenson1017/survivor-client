import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
// import Route from 'react-reouter-dom'
// import backdrop from '../../public/Survivor_backdrop.jpeg'
import backdrop from '../Survivor_backdrop.jpeg'
import { Grid } from 'semantic-ui-react'

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
                     <Grid textAlign='center' style={{ height: '3vh' }} divided='vertically'>
                  
                    
                    </Grid>
                    {this.header()}
                    <Signup submitSignup={this.props.submitSignup}/>
                    <Login loginHandler={this.props.loginHandler}/>
                </div>
            </>
        )
    }
}
export default Welcome

// import React from 'react'


// const GridExampleVerticallyDivided = () => (
//   <Grid divided='vertically'>
//     <Grid.Row columns={2}>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//     </Grid.Row>

//     <Grid.Row columns={3}>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Grid.Column>
//     </Grid.Row>
//  
// )

// export default GridExampleVerticallyDivided


