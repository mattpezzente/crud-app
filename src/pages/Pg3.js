import React, { Component } from 'react';
import OptionActor from '../components/OptionActor'
import OptionMovie from '../components/OptionMovie'
import '../styles/css/Pg3.css';

const actors = [
	{
		name: 'Tom Cruise',
		movies: ['Jack Reacher', 'Knight and Day', 'The Last Samurai'],
	}, {
		name: 'Catherine Zeta-Jones',
		movies: ['The Legend of Zorra', 'Red', 'Ocean\'s Twelve'],
	}
]

class Pg3 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			actors: actors,
			movies: [],
		}

		this.selectValue = this.selectValue.bind(this)
	}

  render() {
    let actorOptions = this.state.actors.map((actor, key) => {
    	return <OptionActor key={key} name={actor.name} />
    })
    let movieOptions

    return (
    	<section>
	    	<label>Actor: <select onChange={this.selectValue}>{actorOptions}</select></label>
	    	<label>Movies: <select>{movieOptions}</select></label>
    	</section>
    )
  }

  selectValue(e) {
  	e.preventDefault()
  	// let movies = []
  	// let movieOptions = this.state.actors.map((actor, key) => {
  	// 	if (actor.name === e.target.value) {
  	// 		actor.movie.map((movie, key) => {
  	// 			movies.push(<OptionMovie movie={movie} />)
  	// 		})
  	// 	}
  	// })
  }
}

export default Pg3