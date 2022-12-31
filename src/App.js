import React from 'react';

import Header from './Header';
import Slideshow from './Slideshow';
import HeadCarousel from './HeadCarousel';

import './App.scss';
import Main from './Main';
import Footer from './Footer';

function App() {
	return (
		<div className='app'>
			<Header />
			{/* <Slideshow /> */}
			<HeadCarousel />
			<Slideshow />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
