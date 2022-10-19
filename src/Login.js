import React from 'react';

import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { OutlinedInput } from '@mui/material';
import { Button } from '@mui/material';

import LRLayout from './LRLayout';

import './Login.scss';

const Login = () => {
	return (
		<LRLayout>
			<div className='login'>
				<div className='login__title'>Login</div>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={(values) => {
						const errors = {};

						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}
						if (!values.password) {
							errors.password = 'Required';
						} else if (
							!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
								values.password
							)
						) {
							errors.password = 'Invalid password';
						}

						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));

							setSubmitting(false);
						}, 400);
					}}>
					{({
						values,

						errors,

						touched,

						handleChange,

						handleBlur,

						handleSubmit,

						isSubmitting,
					}) => (
						<form onSubmit={handleSubmit} className='login__form'>
							<OutlinedInput
								className='login__input'
								size='small'
								type='email'
								name='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder='Email'
							/>

							<span>{errors.email && touched.email && errors.email}</span>

							<OutlinedInput
								className='login__input'
								size='small'
								type='password'
								name='password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								placeholder='Password'
							/>

							<span>
								{errors.password && touched.password && errors.password}
							</span>

							<Button type='submit' disabled={isSubmitting} variant='contained'>
								Login
							</Button>
						</form>
					)}
				</Formik>
				<div className='login__footer'>
					<p>
						<Link to='/register'>register</Link>
					</p>
					<p>
						<Link to='/forget-password'>forget password</Link>
					</p>
				</div>
			</div>
		</LRLayout>
	);
};

export default Login;
