import React from "react";

const AdShort = ({ processor, graphics, price, loc, description }) => {
    return (
        <article>
            <h2>Tytuł ogłoszenia</h2>
            <div>tutaj zdjęcie</div>
            <ul>
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
                    <span>{price}</span>
                </li>
                <li>
                    <h3>Lokalizacja:</h3>
                    <span>{loc}</span>
                </li>
                <li>
                    <h3>Opis:</h3>
                    <p>{description}</p>
                </li>
            </ul>
        </article>
    )
};

export default AdShort;