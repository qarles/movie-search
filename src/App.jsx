import React, { Component } from 'react';
import Search from './Search';

const API = 'https://api.themoviedb.org/3/',
	API_KEY = '03c93abb1975c0c02a167e1b3e8b63d4';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			results: [],
			query: '',
			page: 1,
			total_pages: 1
		}

		this.searchMovies = this.searchMovies.bind(this);
		this.requestMovies = this.requestMovies.bind(this);
	}

	searchMovies(query) {
		if (query) {
			this.requestMovies(query, 1).then(({ results, page, total_pages }) => {
				this.setState({ results, query, page, total_pages });
			})
		} else {
			this.setState({ results: [], query: '', page: 1, total_pages: 1 })
		}
	}

	requestMovies(query, page) {
		return fetch(`${API}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
			.then(r => r.json())
	}

	render() {
		return (
			<div>
				<Search onChange={this.searchMovies} />
			</div>
		);
	}
}

export default App;