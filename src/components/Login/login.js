/* eslint-disable jsx-a11y/anchor-is-valid */
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function LoginPopUp() {
	return (
		<>
			<Helmet>
				<link rel="stylesheet" href="./Styles/Login.css"></link>
			</Helmet>
			<div className="pop-up">
				<form className="login-content-container">
					<h2>Log in</h2>
					<span className="close-button">
						<p>x</p>
					</span>
					<input type="mail" placeholder="e-mail" name="E-Mail" required />

					<input type="password" placeholder="password" name="Password" required />

					<div className="send">
						<span>
							<label className="Remember-me" forhtml="Remember-me">
								Remember me
							</label>
							<input className="Remember-me" type="checkbox" id="Remember-me" />
						</span>
						<button type="button" className="button button-veryRounded">
							Log In
						</button>
					</div>
					<a className="button button-rounded">
						<i className="fab fa-facebook"></i>Log In with Facebook
					</a>
					<a className="button button-rounded">
						<i className="fab fa-google-plus-g"></i>Log In with Google
					</a>
					<div className="span-button"></div>
					<span className="button-span">
						<Link to="#">Forgot password?</Link>
					</span>
					<span className="button-span">
						<Link to="/Register">Do not have an account?</Link>
					</span>
				</form>
				<div className="overlay"></div>
			</div>
		</>
	);
}
