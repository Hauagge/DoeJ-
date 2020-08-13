import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Donate from '../pages/Donate';
import DirectDonation from '../pages/DirectDonation';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={SignIn} />
		<Route path="/signup" component={SignUp} />

		<Route path="/dashboard" component={Dashboard} /*  isPrivate  */ />
		<Route path="/donate" component={Donate} /*  isPrivate  */ />
		<Route path="/directdonation" component={DirectDonation} /*  isPrivate  */ />

	</Switch>
);

export default Routes;
