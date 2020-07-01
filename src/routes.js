import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './schenes/Landing-Page';

class Routes extends Component {
render() {
    return(
			<div>
				<Switch>
					<Route exact path="/" component={LandingPage}/>
					<Redirect to="/" />
				</Switch>
			</div>
    );
	}
}

export default Routes;