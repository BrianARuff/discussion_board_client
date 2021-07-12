import * as React from 'react';

export default function Login(props: any) {
	return (
		<form onSubmit={() => {}}>
			<div>
				<label htmlFor="email">User Email Address</label>
				<input id="email" type="text" name="email" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input id="password" type="password" name="password" />
			</div>
			<div>
				<input
					onClick={(e) => e.preventDefault()}
					type="submit"
					value="Login"
				/>
			</div>
		</form>
	);
}
