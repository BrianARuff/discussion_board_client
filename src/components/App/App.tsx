import {
	Switch,
	Route,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Register from '../Register/Register';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Navbar from '../NavBar/NavBar';
import { Fragment } from 'react';
import { connect } from 'react-redux';

function App(props: any) {
	const { isAuthenticated } = props;
	return (
		<Fragment>
			<Router>
				<Navbar />
				<Switch>
					<Route
						exact
						path="/"
						render={(props) =>
							isAuthenticated ? (
								<Redirect to="/dashboard" />
							) : (
								<Register {...props} />
							)
						}
					/>
					<Route
						exact
						path="/login"
						render={(props) =>
							isAuthenticated ? (
								<Redirect to="/dashboard" />
							) : (
								<Login {...props} />
							)
						}
					/>
					<Route
						exact
						path="/dashboard"
						render={(props) =>
							isAuthenticated ? (
								<Dashboard {...props} />
							) : (
								<Redirect to="login" />
							)
						}
					/>
				</Switch>
			</Router>
		</Fragment>
	);
}

const mapStateToProps = (state: any) => ({
	...state.authReducer,
});

export default connect(mapStateToProps, null)(App);
