import React, { Fragment, useState, Component } from "react";
import { useAuth0, withAuth0} from "@auth0/auth0-react";
import axios from 'axios';

class ExternalaApi extends React.Component {
  state = {
    drinks: [],
  }
  

 componentDidMount(){
  
    let getDrink= async () => {
      const serverUrl = 'https://coffeeshopcreepy.herokuapp.com/';
      const { getAccessTokenSilently } = this.props.auth0;
     
      try{
        const token = await getAccessTokenSilently();
        console.log(token)
        const response = await axios.get( `${serverUrl}\drinks-detail`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then(res => {
          console.log(res)
          this.setState({drinks:res.data.drinks})
          console.log(this.state.drinks.map(drink =>
            drink.recipe
          ))
        
        })
    } catch (error){
      console.error(error.res)
    }  
    }
    return getDrink()
 }

 render(){

  return(
   <ul>
    {this.state.drinks.map(drink => <li>{JSON.stringify(drink.recipe)} {drink.id}  </li> )}
   </ul>
  )
 }
};


export default withAuth0(ExternalaApi)