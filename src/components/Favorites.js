import React from 'react'

class Favorites extends React.Component {

    state={}

    componentDidMount=()=>{
        fetch('http://localhost:3000/favorites')
            .then(resp=> resp.json())
            .then(favorites => console.log(favorites))
    }

    render(){
        return(
            <h3>favorites test</h3>
        )
    }


}

export default Favorites 