import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: []
    }
  }
  componentDidMount = ()=> {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        allPokemon: pokemon
      })
    })
  }

  handleSearch = (search) => {
    console.log(search)
    let searchPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.includes(search))
    this.setState({
      allPokemon: searchPokemon
    })

  }


  addPokemon = (newPokemon) => {

    let pokemonObj ={
      name: newPokemon.name,
      hp: parseInt(newPokemon.hp),
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(res => res.json())
    .then(newPokemonPost => 
      this.setState({
        allPokemon: [...this.state.allPokemon, newPokemonPost]
      }))
  }


  render(){

    
    return(

      <div className="App">
        <PokemonPage addPokemon = {this.addPokemon} handleSearch={this.handleSearch} allPokemon ={this.state.allPokemon}/>
      </div>

    )
  }
}

export default App
