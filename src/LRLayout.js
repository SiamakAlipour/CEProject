import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { OutlinedInput } from '@mui/material';
import { Button } from '@mui/material';

import './LRLayout.scss';

function LRLayout({ children, footerData, titleText }) {
	return (
		<div className='layout'>
			<div className='layout__main'>
				<div className='layout__main__title'>{titleText}</div>
				{children}
				<div className='layout__main__footer'>
					{footerData.map((item, index) => (
						<p key={index}>
							<Link to={item.url}>{item.text}</Link>
						</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default LRLayout;
