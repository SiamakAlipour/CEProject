import React from 'react';
import './MainItem.scss';
import Product from './Product';

const MainItem = ({ title }) => {
	return (
		<div className='main-item'>
			<h1 className='main-item__title'>{title}</h1>
			<div className='main-item__products'>
				<Product rawPrice={16000000} discount={50} />
				<Product rawPrice={25000000} />
				<Product rawPrice={32000000} />
				<Product rawPrice={50000} discount={10} />
				<Product rawPrice={500000} />
			</div>
		</div>
	);
};

export default MainItem;
