import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';
import Dashboard from '../../components/Dashboard';
import Navbar from '../../components/NavBar';
import { Fragment } from 'react';

function App() {
	return (
		<Fragment>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" render={(props) => <Register {...props} />} />
					<Route path="/login" render={(props) => <Login {...props} />} />
					<Route
						path="/dashboard"
						render={(props) => <Dashboard {...props} />}
					/>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
