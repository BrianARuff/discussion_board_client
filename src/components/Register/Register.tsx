import { localAxios } from '../../utils/axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../redux/actions/registerUser';

interface FormData {
	user_name: string;
	user_password: string;
	user_email: string;
}

function Register(props: any) {
	const [formData, setFormData] = React.useState<FormData>({
		user_name: '',
		user_password: '',
		user_email: '',
	});
	const [error, setError] = React.useState<boolean>(false);
	const handleFormData = (e: any) => {
		setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
	};
	const handleSubmitForm = (e: any) => {
		e.preventDefault();

		localAxios
			.post('/api/auth/register', formData)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('user', JSON.stringify(formData as any));
				props.registerUser({ user: formData, status: res.status });
			})
			.catch((err) => {
				props.registerUser({ error: err.response.data.error });
				setError(true);
			});
	};
	return (
		<form onSubmit={handleSubmitForm}>
			{error ? (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			) : null}
			<div>
				<label htmlFor="user_name">Username</label>
				<input
					id="user_name"
					onChange={handleFormData}
					type="text"
					name="user_name"
				/>
			</div>
			<div>
				<label htmlFor="user_password">Password</label>
				<input
					id="user_password"
					onChange={handleFormData}
					type="password"
					name="user_password"
				/>
			</div>
			<div>
				<label htmlFor="user_email">Email</label>
				<input
					id="email"
					onChange={handleFormData}
					type="text"
					name="user_email"
				/>
			</div>
			<div>
				<button type="submit" onClick={handleSubmitForm}>
					Submit
				</button>
			</div>
		</form>
	);
}

const mapDispatchToProps = (dispatch: any) => {
	return bindActionCreators({ registerUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(Register);
