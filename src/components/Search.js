import React from 'react';
// import {Route, Redirect} from 'react-router-dom'

class Search extends React.Component {

    state={
        searchField:''
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
            .then(data => console.log(data))
            
    }

    render(){
        return(
            <>
            {this.props.user ? 
                <form onSubmit={this.localSubmitHandler}>
                    <input onChange={this.changeHandler} type='text' name='searchField' placeholder='enter a zip code' value={this.state.searchField}/>
                    <input type='submit' value='submit'/>
                </form>
            : 
                // <Redirect to='/'/>
                <h3>Please login</h3>
            }
            </>
        )
    }
}

export default Search