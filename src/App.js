import React from 'react';

import Header from './Header';
import Slideshow from './Slideshow';

import './App.scss';

function App() {
	return (
		<div className='app'>
			<Header />
			{/* <Slideshow /> */}
			<Slideshow />
			<Slideshow />
			<Slideshow />
		</div>
	);
}

export default App;
