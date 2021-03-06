import { render } from '@testing-library/react';
import React from 'react';
import { Segment, Divider } from 'semantic-ui-react'

class AirCard extends React.Component {


    componentDidUpdate(){
    }
        render () {
            console.log('entered AirCard')
            return (
                <div>
                    
                <Segment textAlign="center" compact secondary padded raised size="large">
                <h2>Air Quality</h2>
                <h3>City: {this.props.data[0].city}</h3>
                <h3>State: {this.props.data[0].state}</h3> 
                <h3>Quality Index: {this.props.data[0].quality_index}</h3> 
                <h3>Overall Air Quality: {this.props.data[0].air_quality}</h3> 
                </Segment>
                <Divider />
            </div>
        )
    }

}

export default AirCard