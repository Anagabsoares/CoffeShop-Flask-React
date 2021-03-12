import React, { Fragment, useState, Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const [drink, setDrinks] = useState([]);
  const serverUrl = 'http://127.0.0.1:5000/';
  const { getAccessTokenSilently } = useAuth0();

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

  const getDetailjwt = async () => {
    try {
      const token = await getAccessTokenSilently();

      // create a function for each endpoint
      const response = await fetch(
        `${serverUrl}/drinks-detail`,
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


 

  const postDrinksjwt= async () => {
  
    try {
      const token = await getAccessTokenSilently();

    

      
      const response = await fetch(
        `${serverUrl}/post-drinks`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body:JSON.stringify({
            title: "",
            recipe:{
              color: "",
              name:"",
              parts:""
            }
          }) 
        }
      )
      const responseData = await response.json();

    } catch (error) {
      setDrinks(error.drink);
    }
  }


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
        <button
          type="button"
          className="btn btn-primary"
          onClick={getDetailjwt}
        >
          Get Drinks detail
        </button>
        <button
          type="button"
          className="btn btn-primary"
        >
          Post Drink
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
      <Fragment>
          <form > 
            <div>
              <label> drink's name </label>
              <input
                  type="text"
                  name="title"
                  placeholder="title"
                  required
              />
            </div>
            <div>
              <label> drink's recipe </label>
              <input
                  type="text"
                  name="color"
                  required
              />
              <input
                  type="text"
                  name="name"
                  required
              />
              <input
                  type="text"
                  name="parts"
                  required
              />
            </div>   
          </form>
        </Fragment>
    </div>    




        
  );
};

export default ExternalApi 