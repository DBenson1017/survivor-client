import React from 'react';
import Result from './Result'
import AirCard from './AirCard'
import Superfund from './Superfund'
// import {Route, Redirect} from 'react-router-dom'

class Search extends React.Component {

    state={
        searchField:'', 
        location: null, 
       airObject: null, 
       superObject: null,
    }

    changeHandler=(e)=>{
        this.setState(
            {searchField: e.target.value}
        )}

    localSubmitHandler=(e)=>{
        e.preventDefault()
        console.log('submit heard by search.js')
        let token = localStorage.getItem('token')
        let zip = {zip: this.state.searchField}
        console.log(zip)
        let options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }, 
            body: JSON.stringify(zip)
        }
        console.log(options)
        fetch('http://localhost:3000/locations', options)
            .then(resp=> resp.json())
            .then(data => this.setState({location: data}))    
    }

    // sortData = ()=>{
    //     this.showAir()
    //     this.showSuperfund()
    // }

    showAir = ()=>{
       console.log(this.state.location.location.id)
        fetch('http://localhost:3000/airs')
            .then(resp=> resp.json())
            .then(airData=> this.sortAir(airData))
    }

    sortAir =(airData)=> {
        let id= this.state.location.location.id
        console.log('entered sortAir')
        // console.log(airData)
        let airQuality = airData.filter(function(instance){
           return instance.location.id === 53
        })
    
        let city = airQuality[0].city
        let state = airQuality[0].state
        let qualityWord = airQuality[0].air_quality
        let qualityCode = airQuality[0].quality_code
        let qualityIndex = airQuality[0].quality_index 

        console.log(city)
        console.log(state)
        console.log(qualityWord)
        console.log(qualityCode)
        console.log(qualityIndex)
        // send data over to a results component, to render an airCard
        return <AirCard city={city} state={state} qualityWord={qualityWord} qualityCode={qualityCode} qualityIndex={qualityIndex}/>
        
    }

    showSuperfund =()=>{
        console.log(this.state.location.location.id)
        fetch('http://localhost:3000/api/v1/superfunds')
            .then(resp=> resp.json())
            .then(superData=> this.sortSuperfund(superData))
    }

    sortSuperfund =(superData)=>{
        let id= this.state.location.location.id
        console.log('entered sortSuper')
        console.log(superData)
        let filtered = superData.filter(function(instance){
            return instance.location_id === 53
        })
        console.log(filtered)
        this.generateSupercard(filtered)
        // send filtered arrray to resutls card, then results can map through it and make super fund cards
    }

    generateSupercard=(array)=>{
        console.log('entered generateSupercard')
        console.log(array)
        return array.map(site => <Superfund id={site.id} site={site} />)

    }

    render(){
        return(
            <div>
            {this.props.user ? 
                <form onSubmit={this.localSubmitHandler}>
                    <input onChange={this.changeHandler} type='text' name='searchField' placeholder='enter a zip code' value={this.state.searchField}/>
                    <input type='submit' value='submit'/>
                </form>
            : 
                // <Redirect to='/'/>
                <h3>Please login</h3>
            }

            {this.state.location ?
                <>
                <h3>Search Result</h3>
                <Result location={this.state.location}/>
                {/* <AirCard location={this.state.location} />
                <Superfund location={this.state.location} />
                {this.sortData()} */}
                </>
                :
                <h3>please enter a zipcode above</h3>     
           
            }
            </div>
        )
    }
}

export default Search