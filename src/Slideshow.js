import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Slideshow.scss';

const images = [
	{
		url: 'https://picsum.photos/300',
		caption: 'Slide 1',
	},
	{
		url: 'https://picsum.photos/300',
		caption: 'Slide 2',
	},
	{
		url: 'https://picsum.photos/300',
		caption: 'Slide 3',
	},
	{
		url: 'https://picsum.photos/300',
		caption: 'Slide 3',
	},
];
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

function Slideshow() {
	return (
		<div className='slideshow'>
			<div className='slideshow__discount'>
				<p className='slideshow__discountText'>تخفیفات روزانه</p>
				<FontAwesomeIcon className='slideshow__discountIcon' icon={faTags} />
			</div>
			<Carousel
				responsive={responsive}
				className='slideshow__carousel'
				draggable={true}>
				{images.map((d) => (
					<div className='slideshow__box'>
						<img
							src={d.url}
							alt='carousel images'
							className='slideshow__boxImage'
						/>
						<div className='slideshow__boxDescription'>
							<p>name</p>
							<p>5 %</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default Slideshow;
