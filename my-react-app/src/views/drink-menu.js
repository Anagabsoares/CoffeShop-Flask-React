import React, { Fragment, useState, Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const DrinkMenu = () => {
  const [drink, setDrinks] = useState([]);
  const serverUrl = 'http://127.0.0.1:5000/';
 

  const getDrinks = async () => {
    try {
      const response = await fetch(`${serverUrl}/drinks`);

      const responseData = await response.json();

      const result = responseData.drinks

      const ListResults = result.map((item, index)=> 
        <li key={index}>
          {item}
        </li>
        );
      
      console.log(result)

      setDrinks(ListResults);
    } catch (error) {
      setDrinks(error.drink);
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
        <button type="button"
         className="btn btn-primary" 
         onClick={getDrinks}
        >
          Get drinks
        </button>
       </div> 
    </div>    
    
  );
};


export default DrinkMenu;