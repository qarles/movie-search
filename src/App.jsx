import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';

const API = 'https://api.themoviedb.org/3/',
	API_KEY = '03c93abb1975c0c02a167e1b3e8b63d4';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			results: [],
			query: '',
			page: 1,
			total_pages: 1,
			isBottom: false
		}

		this.searchMovies = this.searchMovies.bind(this);
		this.requestMovies = this.requestMovies.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
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

	handleScroll(e) {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1 && this.state.query) {
			if (!this.state.isBottom) {
				this.setState({ isBottom: true });
				this.requestMovies(this.state.query, this.state.page + 1).then(({ results, page, total_pages }) => {
					this.setState({ results: this.state.results.concat(results), page, isBottom: false });
				})
			}
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	render() {
		return (
			<div>
				<Search onChange={this.searchMovies} />
				<Results results={this.state.results} />
			</div>
		);
	}
}

export default App;