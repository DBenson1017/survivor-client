import { render } from '@testing-library/react';
import React from 'react';

class AirCard extends React.Component {


    componentDidUpdate(){
        console.log(this.props.data[0].city)
        console.log(this.props.data[0].state)
        console.log(this.props.data[0].air_quality)
        console.log(this.props.data[0].quality_code)
        console.log(this.props.data[0].quality_index)
    }
        render () {
            console.log('entered AirCard')
            return (
                <div>
                <h2>Air Quality</h2>
                <h3>City: {this.props.data[0].city}</h3>
                <h3>State: {this.props.data[0].state}</h3> 
                <h3>Quality Index: {this.props.data[0].quality_index}</h3> 
                <h3>Overall Air Quality: {this.props.data[0].air_quality}</h3> 
            </div>
        )
    }

}

export default AirCard