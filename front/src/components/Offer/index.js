import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { BASE_URL } from '../../constants';
import image from '../../images/demoPC.jpg';

import { Container } from '@material-ui/core';

const Offer = ({ location }) => {
	const query = new URLSearchParams(location.search);
	const offerId = query.get('id');

	const [offers, setOffers] = useState({});

	useEffect(() => {
		const abortController = new AbortController();

		async function fetchData() {
			try {
				const rawResponse = await fetch(
					`${BASE_URL}/offers/${offerId}`,
					{ signal: abortController.signal }
				);
				const response = await rawResponse.json();
				setOffers(response);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();

		return () => {
			abortController.abort();
		};
	}, [offerId]);

	const { processor, graphics, description, loc, price } = offers || {};

	return (
		<Container component='article'>
			{!!processor ? (
				<>
					<img src={image} alt='' />
					<p>{description}</p>
					<ul>
						<li>
							<h3>Procesor:</h3>
							<span>{processor.name}</span>
						</li>
						<li>
							<h3>Karta graficzna:</h3>
							<span>{graphics.Bus}</span>
						</li>
						<li>
							<h3>Cena:</h3>
							<span>{price} PLN</span>
						</li>
						<li>
							<h3>Lokalizacja:</h3>
							<span>{loc}</span>
						</li>
					</ul>
				</>
			) : (
				<p>Wczytywanie szczegółów ogłoszenia...</p>
			)}
		</Container>
	);
};

export default withRouter(Offer);
