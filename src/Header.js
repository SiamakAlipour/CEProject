import React from 'react';
import { Link } from 'react-router-dom';

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
					<Link to='/login'>ورود</Link>
				</li>
				<li>
					<Link to='/register' className='active'>
						ثبت نام
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;
