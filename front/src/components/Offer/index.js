import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { BASE_URL } from "../../constants";

const Offer = ({ location }) => {
    const query = new URLSearchParams(location.search);
    const offerId = query.get('id')

    const  [ offers, setOffers ] = useState({})

    useEffect(() => {
      const abortController = new AbortController();
  
      async function fetchData() {
          try {
              const rawResponse = await fetch(`${BASE_URL}/offers/${offerId}`, { signal: abortController.signal });
              const response = await rawResponse.json()
              setOffers(response)
          } catch (error) {
              console.log(error)
          }
      }
  
      fetchData();
  
      return () => { abortController.abort() };
    }, []);


    console.log(offers)
return <div>Full Offer id: {offerId}</div>
}

export default withRouter(Offer);