import React, { useState, useEffect } from 'react';

import { BASE_URL } from '../../constants';
import Hero from './Hero';
import OfferPreview from '../OfferPreview';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	cards: {
		justifyContent: 'space-evenly',
	},
}));

const Home = () => {
	const classes = useStyles();

	const [offersPreviews, setOffersPreviews] = useState({});

	useEffect(() => {
		const abortController = new AbortController();

		async function fetchData() {
			try {
				// TODO: fetch only selected offers for Homepage
				const rawResponse = await fetch(`${BASE_URL}/offersPreviews`, {
					signal: abortController.signal,
				});
				const response = await rawResponse.json();
				setOffersPreviews(response.reverse());
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();

		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<main>
			<Hero />
			<Container>
				<Grid container className={classes.cards}>
					{offersPreviews.length ? (
						offersPreviews.map(
							({ id, processor, graphics, price, loc }) => {
								return (
									<OfferPreview
										key={id}
										id={id}
										processor={processor}
										graphics={graphics}
										price={price}
										loc={loc}
									/>
								);
							}
						)
					) : (
						<p>Wczytywanie ogłoszeń...</p>
					)}
				</Grid>
			</Container>
		</main>
	);
};

export default Home;
