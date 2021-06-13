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

	const [allOffers, setAllOffers] = useState([]);
	const [filteredOffers, setFilteredOffers] = useState([]);
	const [checkboxesStates, setCheckboxesStates] = useState({});

	// get unique filters
	const filtersOptionsNotUnique = allOffers.map(
		(offer) => offer.processor.processor_name
	);
	const uniqueFilters = [...new Set(filtersOptionsNotUnique)];

	useEffect(() => {
		const abortController = new AbortController();

		async function fetchData() {
			try {
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

	useEffect(() => {
		async function setInitialData() {
			const filtersOptions = [
				...new Set(
					allOffers.map((offer) => offer.processor.processor_name)
				),
			];
			const initialState = await filtersOptions.reduce(
				(acc, cur) => ({ ...acc, [cur]: true }),
				{}
			);
			setCheckboxesStates(initialState);
		}

		setInitialData();
	}, [allOffers]);

	const handleFilterChange = (e) => {
		const checkboxName = e.target.name;
		const isChecked = e.target.checked;
		setCheckboxesStates({ ...checkboxesStates, [checkboxName]: isChecked });
		setFilteredOffers(
			allOffers.filter(
				(offer) => offer.processor.processor_name === 'Ryzen 5 3600'
			)
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// const filters = checkboxesStates.map((item) => item.title);
		// const newFilteredOffers = allOffers.filter(
		// 	(offer) => offer.processor.processor_name === filters[0]
		// );
		// setFilteredOffers(newFilteredOffers);
	};

	console.log(checkboxesStates);
	return (
		<main className={classes.root}>
			<Container>
				<Filter
					handleSubmit={handleSubmit}
					filtersOptions={uniqueFilters}
					handleFilterChange={handleFilterChange}
					checkboxesStates={checkboxesStates}
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
