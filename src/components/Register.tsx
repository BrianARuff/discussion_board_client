import * as React from 'react';

interface FormData {
	username: string;
	password: string;
	confirmPassword: string;
	email: string;
}

export default function Register(props: any) {
	const [formData, setFormData] = React.useState<FormData>({
		username: '',
		password: '',
		confirmPassword: '',
		email: '',
	});
	const handleFormData = (e: any) => {
		setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
	};
	return (
		<form onSubmit={() => {}}>
			<div>
				<label htmlFor="username">Username</label>
				<input onChange={handleFormData} type="text" name="username" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input onChange={handleFormData} type="password" name="password" />
			</div>
			<div>
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					onChange={handleFormData}
					type="password"
					name="confirmPassword"
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input onChange={handleFormData} type="text" name="email" />
			</div>
			<button>Submit</button>
		</form>
	);
}
