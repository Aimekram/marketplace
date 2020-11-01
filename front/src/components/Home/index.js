import React, { useState, useEffect } from "react";

import { BASE_URL } from "../../constants";
import OfferPreview from "../OfferPreview";
import { CardsContainer } from "../../styledComponents/StyledContainers";


const Home = () => {
    const  [ offersPreviews, setOffersPreviews ] = useState({})

    useEffect(() => {
      const abortController = new AbortController();
  
      async function fetchData() {
          try {
              const rawResponse = await fetch(`${BASE_URL}/offersPreviews`, { signal: abortController.signal });
              const response = await rawResponse.json()
              setOffersPreviews(response.reverse())
          } catch (error) {
              console.log(error)
          }
      }
  
      fetchData();
  
      return () => { abortController.abort() };
    }, []);

    return (
        <CardsContainer>
            {offersPreviews.length ?
                offersPreviews.map(({id, processor, graphics, price, loc}) => {
                return(
                    <OfferPreview
                        key={id}
                        id={id}
                        processor={processor}
                        graphics={graphics}
                        price={price}
                        loc={loc}
                    />
                )
                })
                : <p>Wczytywanie ogłoszeń...</p>
            }
        </CardsContainer>
    )
};

export default Home;