import React from 'react';

import './Header.scss';

function Header() {
	return (
		<div className='header'>
			{/* Navbar */}
			<ul className='header__navBar'>
				<li>
					<a href=''>تست</a>
				</li>
				<li>
					<a href=''>تست</a>
				</li>
				<li>
					<a href=''>تست</a>
				</li>
			</ul>
			{/* Login Menu */}
			<ul className='header__loginMenu'>
				<li>
					<a href='#'>ورود</a>
				</li>
				<li>
					<a href='#' className='active'>
						ثبت نام
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
