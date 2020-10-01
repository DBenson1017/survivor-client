import React from 'react'
import SavedSearch from './SavedSearch'

class Favorites extends React.Component {

    state={
        favorites: null, 
        air: null, 
        superfund: [],
        sortedAir: []
    }

    componentDidMount=()=>{
        // this.setState({userid: this.props.user.id})

        fetch('http://localhost:3000/favorites')
            .then(resp=> resp.json())
            .then(favorites => this.sortFavorites(favorites))
       
        fetch('http://localhost:3000/airs')
            .then(resp=> resp.json())
            .then(air => this.setState({air: air}))

        // fetch('http://localhost:3000/api/v1/superfunds')
        //     .then(resp=> resp.json())
        //     .then(superfund => console.log(superfund))
        }
        
        componentDidUpdate=()=>{
            console.log(this.props.user.id)
            if (this.state.favorites && this.state.air){
               console.log(this.state.favorites)
               console.log(this.state.air) 
               this.parseFavorites()
           }       
            
    }
    
        sortFavorites=(favorites, id)=>{
            console.log(this.props)
            let userFavorites = favorites.filter(f => f.user_id === id)
            // this.setState({favorites: userFavorites})
            console.log(userFavorites)
            this.parseFavorites(userFavorites)
        }

    parseFavorites =(array)=>{
        console.log('inside parseFavorites')
       array.forEach( (item) => {
            this.pullAir(item)
        })
    }

    // pullAir=(item)=>{
    //     console.log(item)
    //     // let airItem = this.state.air.find(air => air.location.id === item.location_id)
    //     // console.log(airItem)
    //     // return <SavedSearch data={airItem} />
    // }

    generateFavorites=()=>{
       return this.state.favorites.map(fav => <SavedSearch  />)
    }
 

    render(){
            return(
                <div>
                <h3>favorites test</h3>
                 {/* {this.pullAir()} */}
                </div>
            )
    }
}

export default Favorites 