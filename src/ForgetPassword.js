import React from 'react';

import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { OutlinedInput } from '@mui/material';
import { Button } from '@mui/material';

import LRLayout from './LRLayout';

import './ForgetPassword.scss';

const ForgetPassword = () => {
	return (
		<LRLayout>
			<div className='forgetPassword'>
				<div className='forgetPassword__title'>Enter your email</div>
				<Formik
					initialValues={{ email: '' }}
					validate={(values) => {
						const errors = {};

						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
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
						<form onSubmit={handleSubmit} className='forgetPassword__form'>
							<OutlinedInput
								className='forgetPassword__input'
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

							<Button type='submit' disabled={isSubmitting} variant='contained'>
								Receive Email
							</Button>
						</form>
					)}
				</Formik>
				<div className='forgetPassword__footer'>
					<p>
						<Link to='/login'>login</Link>
					</p>
				</div>
			</div>
		</LRLayout>
	);
};

export default ForgetPassword;
