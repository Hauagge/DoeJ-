import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Donate from '../pages/Donate';
import DirectDonation from '../pages/DirectDonation';
import ConfirmDonation from '../pages/ConfirmDonation';
import Receipt from '../pages/Receipt';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';




const Routes: React.FC = () => (
	<Switch>
		<Route path="/" exact component={SignIn} />
		<Route path="/signup" component={SignUp} />
		<Route path="/forgot_password" component={ForgotPassword} />
		<Route path="/reset_password" component={ResetPassword} />



		<Route path="/dashboard" component={Dashboard} isPrivate/>
		<Route path="/donate" component={Donate} isPrivate />
		<Route path="/directdonation" component={DirectDonation} isPrivate/>
		<Route path="/confirmdonation" component={ConfirmDonation} isPrivate/>
		<Route path="/receipt" component={Receipt} isPrivate />



	</Switch>
);

export default Routes;
