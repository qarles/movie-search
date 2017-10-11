import React, { PureComponent } from 'react';

class Result extends PureComponent {
	render() {
		const { title, vote_average, vote_count, poster_path, overview } = this.props;
		return (
			<div className="result-wrap">
				<div className="result">
					<img src={poster_path ? `http://image.tmdb.org/t/p/w185${poster_path}` : 'no-image.png'} />
					<div className="description">
						<h3>{title}</h3>
						<p>
							Average Vote: <strong>{vote_average}</strong><br />
							Vote Count: <strong>{vote_count}</strong>
						</p>
						<p className="overview">{overview}</p>
					</div>
				</div>
			</div>
		);
	}
}

Result.propTypes = {
	title: React.PropTypes.string.isRequired,
	vote_average: React.PropTypes.number.isRequired,
	vote_count: React.PropTypes.number.isRequired,
	poster_path: React.PropTypes.string,
	overview: React.PropTypes.string
}

export default Result;