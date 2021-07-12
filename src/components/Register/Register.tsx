import * as React from 'react';

interface FormData {
	username: string;
	password: string;
	email: string;
}

export default function Register(props: any) {
	const [formData, setFormData] = React.useState<FormData>({
		username: '',
		password: '',
		email: '',
	});
	const handleFormData = (e: any) => {
		setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
	};
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					onChange={handleFormData}
					type="text"
					name="username"
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					onChange={handleFormData}
					type="password"
					name="password"
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input id="email" onChange={handleFormData} type="text" name="email" />
			</div>
			<div>
				<button type="submit" onClick={(e) => e.preventDefault()}>
					Submit
				</button>
			</div>
		</form>
	);
}
