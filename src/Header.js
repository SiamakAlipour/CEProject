import React, { useState, useEffect } from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import './Header.scss';

function Header() {
	const [activeMenu, setActiveMenu] = useState(false);
	const [activeSearch, setActiveSearch] = useState(false);
	const handleMenu = () => {
		setActiveMenu((activeMenu) => !activeMenu);
	};
	const handleSearch = () => {
		setActiveSearch((activeSearch) => !activeSearch);
	};

	return (
		<div className='header'>
			<div className='header__wrapper'>
				<h1 className='header__logo | fw-bold fs-primary-heading'>Shop</h1>
				<nav
					className={`header__navigation ${
						activeMenu && 'header__navigation--active'
					}`}>
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
						<li className='header__search'>
							<a
								href='#'
								className={`${activeSearch && 'header__search-text--display'}`}
								onClick={handleSearch}>
								Search
							</a>{' '}
							<div
								className={`header__search-input ${
									activeSearch && 'header__search-input--active'
								}`}>
								<input type='text' placeholder='Search' />
								<CloseIcon onClick={handleSearch} />
							</div>
						</li>
					</ul>
				</nav>
			</div>
			<div className='header__panel'>
				{activeMenu ? (
					<CloseIcon className='header__search-icon' onClick={handleSearch} />
				) : (
					<SearchIcon className='header__search-icon' onClick={handleSearch} />
				)}

				{activeMenu ? (
					<CloseIcon className='header__menu' onClick={handleMenu} />
				) : (
					<MenuIcon className='header__menu' onClick={handleMenu} />
				)}

				<ShoppingCartIcon />
				<PersonIcon />
			</div>
		</div>
	);
}

export default Header;
