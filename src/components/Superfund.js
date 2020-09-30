import React from 'react';

class Superfund extends React.Component {


    render(){
        console.log('entered Superfund')
        console.log(this.props.site)
        if (!this.props.site){
            return (
                <h2> There are no superfund sites in this zip code</h2>
            )
        }
            return (
                <div>
                    <h3>Name: {this.props.site.name}</h3>
                    <h3>Address: {this.props.site.address}</h3>
                    <h3>City: {this.props.site.city}</h3>
                    <h3>Zip: {this.props.site.zipcode}</h3>
                </div>
            )
    }
}
export default Superfund