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
	const [checkedBoxes, setCheckedBoxes] = useState([]);

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
			const initialState = filtersOptions;
			setCheckedBoxes(initialState);
		}

		setInitialData();
	}, [allOffers]);

	useEffect(() => {
		const newFilteredOffers = allOffers.filter((offer) =>
			checkedBoxes.includes(offer.processor.processor_name)
		);
		console.log(newFilteredOffers);
		setFilteredOffers(newFilteredOffers);
	}, [allOffers, checkedBoxes]);

	const handleFilterChange = (e) => {
		const checkboxName = e.target.name;
		if (checkedBoxes.includes(checkboxName)) {
			setCheckedBoxes(
				checkedBoxes.filter((item) => item !== checkboxName)
			);
		} else {
			setCheckedBoxes([...checkedBoxes, checkboxName]);
		}
	};

	return (
		<main className={classes.root}>
			<Container>
				<Filter
					filtersOptions={uniqueFilters}
					handleFilterChange={handleFilterChange}
					checkedBoxes={checkedBoxes}
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
