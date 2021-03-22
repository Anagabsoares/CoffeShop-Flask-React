import React, { Fragment, useState, Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const [drink, setDrinks] = useState([]);
  

  const { getAccessTokenSilently } = useAuth0();

  

  const getDetailjwt = async () => {
    try {
      const token = await getAccessTokenSilently();

      // create a function for each endpoint
      const response = await fetch(
        `drinks-detail`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    const responseData = await response.json();
    const result = responseData.drinks.map((i) => {
      return(
        <li key={i.id}>
        {i.title}
        </li>  
      )    
      })
    setDrinks(result);
    
    } catch (error) {
      setDrinks(error.error);
    }
  };


 

  


  return (
    <div className="container">
      <h1>DRINKS</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
    
        <button
          type="button"
          className="btn btn-primary"
          onClick={getDetailjwt}
        >
          Get Drinks detail
        </button>
      
      </div>
      {drink && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{drink}</code>
            </div>
          </div>
        </div>
      )}
      
    </div>    
        
  );
};













export default ExternalApi 