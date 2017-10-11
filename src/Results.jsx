import React from 'react';
import Result from './Result';

const Results = ({ results }) => {
	return (
		<div className="results">
			{results.map(result => <Result key={result.id} {...result} />)}
		</div>
	);
};

Results.propTypes = {
	results: React.PropTypes.array.isRequired
};

export default Results;