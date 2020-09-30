import React from 'react';
import AirCard from './AirCard'

class Result extends React.Component {

    state={
        airData: null
    }

    sortData = ()=>{
        this.showAir()
        // this.showSuperfund()
    }

    showAir = ()=>{
        // console.log(this.state.location.location.id)
         fetch('http://localhost:3000/airs')
             .then(resp=> resp.json())
             .then(airData=> this.sortAir(airData))
     }
 
     sortAir =(airData)=> {
        //  let id= this.state.location.location.id
         console.log('entered sortAir')
         // console.log(airData)
         let airQuality =[]
          airQuality = airData.filter(function(instance){
            return instance.location.id === 53
         })
         this.setState({airData: airQuality})
        }
     
        //  let city = airQuality[0].city
        //  let state = airQuality[0].state
        //  let qualityWord = airQuality[0].air_quality
        //  let qualityCode = airQuality[0].quality_code
        //  let qualityIndex = airQuality[0].quality_index 
 
        //  console.log(city)
        //  console.log(state)
        //  console.log(qualityWord)
        //  console.log(qualityCode)
        //  console.log(qualityIndex)
        //  this.setState({airData: airQuality})
         // send data over to a results component, to render an airCard
        //  return <AirCard city={city} state={state} qualityWord={qualityWord} qualityCode={qualityCode} qualityIndex={qualityIndex}/>
         


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