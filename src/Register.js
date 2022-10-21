import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { OutlinedInput } from '@mui/material';
import { Button } from '@mui/material';

import LRLayout from './LRLayout';
import './Register.scss';

const Register = () => {
	return (
		<LRLayout
			titleText='Register'
			footerData={[{ text: 'login', url: '/login' }]}>
			<Formik
				initialValues={{ email: '', password: '', repeatPassword: '' }}
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
					if (!values.repeatPassword) {
						errors.repeatPassword = 'Required';
					} else if (values.repeatPassword !== values.password) {
						errors.repeatPassword = 'Invalid repeat password';
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
					<form onSubmit={handleSubmit} className='register__form'>
						<OutlinedInput
							className='register__input'
							size='small'
							type='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							placeholder='Email'
							autoComplete='off'
						/>

						<span>{errors.email && touched.email && errors.email}</span>

						<OutlinedInput
							className='register__input'
							size='small'
							type='password'
							name='password'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							autoComplete='new-password'
							placeholder='Password'
						/>

						<span>
							{errors.password && touched.password && errors.password}
						</span>
						<OutlinedInput
							className='register__input'
							size='small'
							type='password'
							name='repeatPassword'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.repeatPassword}
							placeholder='Repeat password'
						/>

						<span>
							{errors.repeatPassword &&
								touched.repeatPassword &&
								errors.repeatPassword}
						</span>

						<Button
							type='submit'
							disabled={isSubmitting}
							variant='contained'
							color='primary'>
							Register
						</Button>
					</form>
				)}
			</Formik>
		</LRLayout>
	);
};

export default Register;
