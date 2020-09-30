import React from 'react';
import AirCard from './AirCard'

class Result extends React.Component {

    state={
        airData: null
    }

    sortData = ()=>{
        this.showAir()
        //this.showSuperfund()
    }

    showAir = ()=>{
        //console.log(this.state.location.location.id)
         fetch('http://localhost:3000/airs')
             .then(resp=> resp.json())
             .then(airData=> this.sortAir(airData))
     }
 
     sortAir =(airData)=> {
        // let id= this.state.location.location.id
         console.log('entered sortAir')
         // console.log(airData)
         let airQuality =[]
          airQuality = airData.filter(function(instance){
            return instance.location.id === 53
         })
         this.setState({airData: airQuality})
        }
     
    componentDidMount=()=>{
        this.sortData()
    }

    render(){
        console.log(this.props)
        if (!this.state.airData){
            return (
                <h1>Loading</h1>
            )
        } 
        return(
            <>
               <AirCard data={this.state.airData} />
           </>     
        )
    }
}

export default Result 