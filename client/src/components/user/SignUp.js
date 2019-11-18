import React from 'react';
import httpClient from './httpClient';
import './signUp.scss';

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: '' }
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if (user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	inputValidation() {
		const errFields = [];
		const Name = document.getElementById("Name").value;;
		const Email = document.getElementById("Email").value;
		const Password = document.getElementById("Password").value;
		if (Name === '') {
			errFields.push('Name');
		}

		if (Email === '') {
			errFields.push('Email');
		}



		if (Password === '') {
			errFields.push('Password')
		}
		console.log(errFields)
		if (errFields.length) {
			alert(`Please fill out the following fields: ${errFields.join(', ')}`);
		} else {
			alert(`Thank you ${Name} for subscribing. Now you can see our products and contact info`);
		}
	}

	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<h1>Sign Up</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Name" id="Name" name="name" value={name} />
					<input type="text" placeholder="Email" id="Email" name="email" value={email} />
					<input type="password" placeholder="Password" id="Password" name="password" value={password} />
					<button onClick={this.inputValidation} className="btn btn-primary">Sign Up</button>
				</form>
			</div>
		)
	}
}

export default SignUp

