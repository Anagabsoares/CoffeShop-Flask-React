import React, { useState } from "react";


const DrinkMenu = () => {
  const [drink, setDrinks] = useState([]);
  const serverUrl = 'http://127.0.0.1:5000/';
 

  const getDrinks = async () => {
    try {
      const response = await fetch(`${serverUrl}\drinks`);

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
      <h1>    
        <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button"
         className="btn btn-primary" 
         onClick={getDrinks}
        >
          DRINK MENU
        </button>
      </div>  </h1>
     
  
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


export default DrinkMenu;