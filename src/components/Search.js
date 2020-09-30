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
                <h3>Please login</h3>
            }

            {this.state.location ?
                <>
                <h3>Search Result</h3>
                <Result location={this.state.location}/>

                </>
                :
                <h3>please enter a zipcode above</h3>     
           
            }
            </div>
        )
    }
}

export default Search