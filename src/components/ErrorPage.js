import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = (props) => {
	return (
		<div className="ErrorPage text-center">
			<h1>Error <span>404</span></h1>
			<p>You reached a dead end. Go back to the <Link to="/" className="link">Plans & Prices</Link></p>
		</div>
	);
}
export default ErrorPage;