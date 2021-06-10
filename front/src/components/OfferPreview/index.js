import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../images/demoPC.jpg';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	card: {},

	cardMedia: {
		height: 200,
		minWidth: 300,
		// paddingTop: '56.25%', // 16:9
	},

	cardContent: {
		'& li': {
			display: 'flex',
			alignItems: 'baseline',
			justifyContent: 'space-between',
		},
	},
}));

const OfferPreview = ({ id, processor, graphics, price, loc }) => {
	const classes = useStyles();

	return (
		<Link to={`/offers/?id=${id}`}>
			<Card className={classes.card}>
				<CardMedia image={image} className={classes.cardMedia} />
				<CardContent className={classes.cardContent}>
					<ul>
						<li>
							<h3>Procesor:</h3>
							<span>{processor.processor_name}</span>
						</li>
						<li>
							<h3>Karta graficzna:</h3>
							<span>{graphics}</span>
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
				</CardContent>
			</Card>
		</Link>
	);
};

export default OfferPreview;
