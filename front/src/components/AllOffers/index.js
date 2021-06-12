import React, { useState, useEffect } from 'react';

import { BASE_URL } from '../../constants';
import OfferPreview from '../OfferPreview';
import Filter from './Filter';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '120px',
	},
	cards: {
		justifyContent: 'space-evenly',
	},
}));

const AllOffers = () => {
	const classes = useStyles();

	useEffect(() => {
		const abortController = new AbortController();

		async function fetchData() {
			try {
				// TODO: fetch only selected offers for Homepage
				const rawResponse = await fetch(`${BASE_URL}/offersPreviews`, {
					signal: abortController.signal,
				});
				const response = await rawResponse.json();
				setAllOffers(response.reverse());
				setFilteredOffers(response.reverse());
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();

		return () => {
			abortController.abort();
		};
	}, []);

	const [allOffers, setAllOffers] = useState([]);
	const [filteredOffers, setFilteredOffers] = useState([]);

	const filtersOptions = [
		{
			title: 'Core i5-10400',
			year: 1994,
		},
		{ title: 'Ryzen 5 3600', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
	];

	const [filterValue, setFilterValue] = useState([]);

	const handleFilterChange = (e, newValue) => {
		setFilterValue(newValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const filters = filterValue.map((item) => item.title);
		const newFilteredOffers = allOffers.filter(
			(offer) => offer.processor.processor_name === filters[0]
		);
		setFilteredOffers(newFilteredOffers);
	};

	return (
		<main className={classes.root}>
			<Container>
				<Filter
					handleSubmit={handleSubmit}
					filtersOptions={filtersOptions}
					handleFilterChange={handleFilterChange}
				/>
				<Grid container className={classes.cards}>
					{filteredOffers.length ? (
						filteredOffers.map(
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

export default AllOffers;
