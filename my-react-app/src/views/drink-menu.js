import React, { useState } from "react";


const DrinkMenu = () => {
  const [drink, setDrinks] = useState([]);
  const serverUrl = 'https://coffeeshopcreepy.herokuapp.com/';
 

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
      

      setDrinks(ListResults);
    } catch (error) {
      setDrinks(error.drink);
    }
  };

  return (
    <div className="container">
    
    {drink && (
         <div className='row mr-5'>
         <table className="table">
             <thead>
               <tr>
                 <th scope="col">
                 <button type="button" className="btn-dark mr-4" onClick={getDrinks}>Drinks</button>
                 </th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <th scope="row" ></th>
                 <td>{drink}</td>
  
               </tr>
             </tbody>
         </table>
       </div>
      )} 
      
    </div> 
  );
};


export default DrinkMenu;