import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  makePokemonCards = () => {
    return this.props.allPokemon.map(poke => (
      <PokemonCard
       pokemon ={poke}
       />
    ))
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.makePokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
