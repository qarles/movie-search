import React, { Component } from 'react';

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		const value = event.target.value;
		this.setState({ value });
		this.props.onChange(value);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.value !== nextState.value;
	}

	render() {
		console.log('Render');
		return (
			<div className="search">
				<input placeholder="Enter movie name" value={this.state.value} onChange={this.onChange} />
			</div>
		);
	}
}

Search.propTypes = {
	onChange: React.PropTypes.func.isRequired
};

export default Search;