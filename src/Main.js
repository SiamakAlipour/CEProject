import React from 'react';
import './Main.scss';
import MainItem from './MainItem';

const Main = () => {
	return (
		<div className='main'>
			<MainItem title='Recent Products' />
			<MainItem title='Popular Products' />
			<MainItem title='Best-Seller Products' />
		</div>
	);
};

export default Main;
