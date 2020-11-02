import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.props.addPokemon} />
        <br />
        <Search handleSearch={this.props.handleSearch} />
        <br />
        <PokemonCollection allPokemon={this.props.allPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
