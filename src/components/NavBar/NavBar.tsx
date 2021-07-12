import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.scss';

function NavBar({ history }: any) {
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						isActive={() => '/' === history.location.pathname}
						activeClassName="selected"
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						isActive={() => '/login' === history.location.pathname}
						activeClassName="selected"
						to="/login"
					>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink
						isActive={() => '/dashboard' === history.location.pathname}
						activeClassName="selected"
						to="/dashboard"
					>
						Dashboard
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default withRouter(NavBar);
