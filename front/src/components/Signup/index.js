import React, { useState } from 'react';

// TODO:
// 1. hash password
// 1b. email confirmation
// 2. what's next - thank you message?
// 3. Hide navigation - minimalize distraction
// 4. Add unhide password option

const Signup = () => {
	// controll form elements
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) =>
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});

	const handleSubmit = async (event) => {
		event.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formValues),
		};
		console.log(requestOptions.body);

		try {
			await fetch(
				`http://localhost:4000/api/authentication/signup`,
				requestOptions
			);
			// TODO: delete clear inputs - not needed if redirecting
			event.target.reset();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>LOGO</h1>
			<h2>
				Stwórz konto w naszym serwsie, by móc wystawiać ogłoszenia z
				super komputerami // podać dobre uzasadnienie
			</h2>
			<form onSubmit={handleSubmit} method='post'>
				<label>
					Email:
					<input
						type='email'
						name='email'
						placeholder='Adres e-mail'
						value={formValues.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Hasło:
					<input
						type='password'
						name='password'
						placeholder='Hasło'
						vaue={formValues.password}
						onChange={handleChange}
					/>
				</label>
				<input type='submit' value='Wyślij' />
			</form>
			<p>
				Masz już konto? <a href='/login'>Zaloguj się</a>
			</p>
		</div>
	);
};

export default Signup;
