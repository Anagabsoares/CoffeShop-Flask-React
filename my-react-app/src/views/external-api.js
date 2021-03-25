import React, { Fragment, useState, Component } from "react";
import { useAuth0, withAuth0} from "@auth0/auth0-react";
import axios from 'axios';

class ExternalaApi extends React.Component {
  state = {
    drinks: [],
  }
  

 componentDidMount(){
     const serverUrl = 'http://127.0.0.1:5000/';
     const { getAccessTokenSilently } = this.props.auth0;
     const token = getAccessTokenSilently();
     try{
      axios.get( `${serverUrl}\drinks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(res => {
      console.log(res)
      this.setState({drinks:res.data.drinks})
      console.log(this.state.drinks)
     
    })
  } catch (error){
    console.error(error.res)
}


 }

 render(){

  return(
   <ul>
    {this.state.drinks.map(drink => <li></li> )}
   </ul>
  )
 }
};


export default withAuth0(ExternalaApi)