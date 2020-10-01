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
            .then(data => this.setState({location: data.location.id}))    
    }

    render(){
        return(
            <div class="search_image"
            style={{
                backgroundImage: `url("https://media.giphy.com/media/grfwMy0B4DFoA/giphy.gif")`,
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5"
            }}>
                
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
                {/* button  */}
                <h3>Search Result</h3>
                <Result location_id={this.state.location}/>
                <form>

                </form>
                </>
                :
                <h3>please enter a zipcode above</h3>     
           
            }
            </div>
        )
    }
}

export default Search