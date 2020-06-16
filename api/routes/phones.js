const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Succsess',
		data: [
			{
				oldPrice: '79.99',
				price: '59.99',
				company: 'Samsung',
				attributes: ['Recomended'],
				title: 'Samsung 4th Generation 2FGL102',
				mainImage: './images/phones/tomasz-zagorski-h3Gj2hYIcVI-unsplash.jpg',
				images: [],
			},
			{
				oldPrice: '224.25',
				price: '129.99',
				company: 'Samsung',
				attributes: ['Best Seller'],
				title: 'Samsung 3RD Generation HHGL02',
				mainImage: './images/phones/jonas-lee-o6elTKWZ5bI-unsplash.jpg',
				images: [],
			},
			{
				oldPrice: '199.99',
				price: '126.95',
				company: 'Samsung',
				attributes: ['Best Seller'],
				title: 'Samsung 2nd G-Evolution 5.1',
				mainImage: './images/phones/patrik-michalicka-cv4bk-aedJE-unsplash.jpg',
				images: [],
			},
			{
				oldPrice: '178.55',
				price: '90.95',
				company: 'LG',
				attributes: ['High Performance'],
				title: 'LG Pro 4.3V',
				mainImage: './images/phones/stephen-frank-MGuxRnjniuU-unsplash.jpg',
				images: [],
			},
			{
				oldPrice: '',
				price: '160.25',
				company: 'LG',
				attributes: ['Recomended'],
				title: 'LG Pro 3.7V',
				mainImage: './images/phones/silas-baisch-eFGVl1C9bQU-unsplash.jpg',
				images: [],
			},
			{
				oldPrice: '',
				price: '79.99',
				company: 'Huawei',
				attributes: ['High Performance'],
				title: 'Huawei NEXT II74B5.',
				mainImage: ['./images/phones/todd-jiang-1i56Zf5kd1c-unsplash.jpg'],
				images: [],
			},
			{
				oldPrice: '129.99',
				price: '87.95',
				company: 'Huawei',
				attributes: ['Recomended'],
				title: 'Huawei Evolution 4.5',
				mainImage: './images/phones/le-buzz-Z44o7s8YkB0-unsplash.jpg',
				images: [],
			},
			{
				oldPrice: '',
				price: '160.25',
				company: 'Nokia',
				attributes: ['Recomended'],
				title: 'Nokia Pro 3.7V',
				mainImage: './images/phones/brett-jordan-5dI7zd9o1sE-unsplash.jpg',
				images: [],
			},
			{
				oldPrice: '',
				price: '79.99',
				company: 'Nokia',
				attributes: ['High Performance'],
				title: 'Nokia NEXT II74B5.',
				mainImage: './images/phones/honor-2631271_640.jpg',
				images: [],
			},
			{
				oldPrice: '129.99',
				price: '87.95',
				company: 'Nokia',
				attributes: ['Recomended'],
				title: 'Nokia Evolution 4.5',
				mainImage: './images/phones/mobile-phone-2000081_1920.jpg',
				images: [],
			},
		],
	});
});

module.exports = router;
