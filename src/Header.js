import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import './Header.scss';

function Header() {
	return (
		<div className='header'>
			<div className='header__wrapper'>
				<h1 className='header__logo | fw-bold fs-primary-heading'>Shop</h1>
				<nav className='header__navigation'>
					<ul>
						<li>
							<a href='#'>Categories</a>
						</li>
						<li>
							<a href='#'>Contact</a>{' '}
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Search</a>{' '}
						</li>
					</ul>
				</nav>
			</div>
			<div className='header__panel'>
				<ShoppingCartIcon />
				<PersonIcon />
			</div>
		</div>
	);
}

export default Header;
