import React, { useState, useEffect } from "react";

import { BASE_URL } from "../../constants";
import AdShort from "../AdShort";
import { CardsContainer } from "../../styledComponents/StyledContainers";


const Home = () => {
    const  [ ads, setAds ] = useState({})

    useEffect(() => {
      const abortController = new AbortController();
  
      async function fetchData() {
          try {
              const rawResponse = await fetch(`${BASE_URL}/ads`, { signal: abortController.signal });
              const response = await rawResponse.json()
              setAds(response.reverse())
          } catch (error) {
              console.log(error)
          }
      }
  
      fetchData();
  
      return () => { abortController.abort() };
    }, []);

    return (
        <CardsContainer>
            {ads.length ?
                ads.map(({_id, processor, graphics, price, loc, description}) => {
                return(
                    <AdShort
                    key={_id}
                    processor={processor.name}
                    graphics={graphics.Bus}
                    price={price}
                    loc={loc}
                    description={description}
                    />
                )
                })
                : <p>Wczytywanie ogłoszeń...</p>
            }
        </CardsContainer>
    )
};

export default Home;