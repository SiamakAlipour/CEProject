import React, { useEffect, useState } from 'react';
import './Product.scss';

const Product = ({ rawPrice, discount }) => {
	const [price, setPrice] = useState(rawPrice);
	useEffect(function priceAfterDiscount() {
		if (discount) {
			setPrice(price * (1 - discount / 100));
		}
	}, []);
	return (
		<div className='product'>
			<div className='product__image'>
				<img src='https://picsum.photos/215/186' alt='' />
			</div>
			<div className='product__detail'>
				<div className='product__price'>
					{price}
					{discount && <span className='product__rawPrice'>{rawPrice}</span>}
					<span className='product__currency'>تومان</span>
				</div>
				{discount && <div className='product__discount'>{discount}%</div>}
			</div>
		</div>
	);
};

export default Product;
