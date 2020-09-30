import React from 'react';
import AirCard from './AirCard'
import Superfund from './Superfund'

class Result extends React.Component {

    

    state={
        airData: null, 
        superData: null
    }

    sortData = ()=>{
        this.showAir()
        this.showSuperfund()
    }


    showAir = ()=>{
        //console.log(this.state.location.location.id)
         fetch('http://localhost:3000/airs')
             .then(resp=> resp.json())
             .then(airData=> this.sortAir(airData))
     }
 
     sortAir =(airData)=> {
        console.log(this.props.location_id)
        let id= this.props.location_id
         console.log('entered sortAir')
         // console.log(airData)
         let airQuality =[]
          airQuality = airData.filter(function(instance){
            return instance.location.id === id
         })
         console.log(airQuality)
         this.setState({airData: airQuality})
        }
        //############# WORKING BLOCK #####################################

        showSuperfund =()=>{
            // console.log(this.state.location.location.id)
            fetch('http://localhost:3000/api/v1/superfunds')
                .then(resp=> resp.json())
                .then(superData=> this.sortSuperfund(superData))
        }
    
        sortSuperfund =(superData)=>{
            let id= this.props.location_id
            console.log('entered sortSuper')
            console.log(superData)
            let filtered = superData.filter(function(instance){
                return instance.location_id === id
            })
            console.log(filtered)
            if (filtered.length > 0){
                this.setState({superData: filtered})
            }
            // this.generateSupercard(filtered)
            // send filtered arrray to resutls card, then results can map through it and make super fund cards
        }
    
        generateSupercard=()=>{
            console.log('entered generateSupercard')
            // console.log(array)
            return this.state.superData.map(site => <Superfund site={site}  />)
            
        }
     //##################################################
    componentDidMount=()=>{
        this.sortData()
    }

    render(){
   
        if (!this.state.airData){
            return (
                <h1>Loading</h1>
            )} 
        return(
            <div>
                <AirCard data={this.state.airData} />
                <>
                {this.state.superData? this.generateSupercard() : <h2> There are no superfunds in this zip</h2> }  
                </> 
            </div>
        )
    }
}

export default Result 