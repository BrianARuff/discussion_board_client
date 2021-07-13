import * as React from 'react';
import { connect } from 'react-redux';
import { localAxios } from '../../utils/axios';
import { loginUser } from '../../redux/actions/loginUser';
import { bindActionCreators } from 'redux';

function Login(props: any) {
	const [formData, setFormData] = React.useState({
		user_email: '',
		user_password: '',
	});
	const handleSetToken = (e: any) => {
		e.preventDefault();
		localAxios
			.post('/api/auth/login', formData)
			.then((res: any) => {
				// if satus code is 200, then login was successful, so set token in loclStorage and run redux action for logging in
				props.loginUser(res.status);
			})
			.catch((err) => console.log(err));
	};
	const handleFormData = (e: any) => {
		setFormData(() => {
			const { target } = e;
			const { name, value } = target;
			return { ...formData, [name]: value };
		});
	};
	return (
		<form onSubmit={handleSetToken}>
			<div>
				<label htmlFor="user_email">User Email Address</label>
				<input
					onChange={handleFormData}
					required
					id="user_email"
					type="text"
					name="user_email"
				/>
			</div>
			<div>
				<label htmlFor="user_paswsword">User Password</label>
				<input
					onChange={handleFormData}
					required
					id="user_paswsword"
					type="password"
					name="user_paswsword"
				/>
			</div>
			<div>
				<button onClick={handleSetToken} type="submit">
					Login
				</button>
			</div>
		</form>
	);
}

const mapDispatchToProps = (dispatch: any) => {
	return bindActionCreators({ loginUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
