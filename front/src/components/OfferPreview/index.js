import React from "react";

import Photo from "../../images/dragon.jpg";
import { Card } from "../../styledComponents/StyledContainers";
import { List } from "../../styledComponents/StyledLists";

const OfferPreview = ({ id, processor, graphics, price, loc }) => {
    return (
        <Card to={`/offers/?id=${id}`}>
            <img src={Photo} alt=""/>
            <List>
                <li>
                    <h3>Procesor:</h3>
                    <span>{processor}</span>
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
            </List>
        </Card>
    )
};

export default OfferPreview;