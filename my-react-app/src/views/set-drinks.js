import React, { Fragment, useState, useEffect, Component} from "react";
import { useAuth0,withAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

class SettingDrinks extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            drinks:[],
            id:'',
            title: '',
            color: '',
            name: '',
            parts: '',
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
       
      handleChange(event) { 
        const value =  event.target.value 
        this.setState({
        [event.target.name]: value})   
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      getDrink(){
        let getDrink= async () => {
          const serverUrl = 'https://coffeeshopcreepy.herokuapp.com/';
          const { getAccessTokenSilently } = this.props.auth0;
         
          try{
            const token = await getAccessTokenSilently();
            const response = await axios.get( `${serverUrl}\drinks-detail`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ).then(res => {
              this.setState({drinks:res.data.drinks})
              const drinks = this.state.drinks.map(drink => drink.title)

            })
        } catch (error){
          console.error(error.res)
        }  
        }
        return getDrink()
     }
    
      post() {
            let postAdrink= async () => {
                const serverUrl = 'https://coffeeshopcreepy.herokuapp.com/';
                const { getAccessTokenSilently } = this.props.auth0;
                const inputData= {title: this.state.title,
                            recipe:{color: this.state.color,
                            name: this.state.name, parts: this.state.parts}}
    
                try {
                  const token = await getAccessTokenSilently();
                  const response = await axios.post(`${serverUrl}\post-drinks`,inputData, {
                    headers: { Authorization: `Bearer ${token}`}})
                    .then(function(response){
                        console.log(response)
                    })
                } catch (error){
                    console.error(error.response)
                
                }
            }  
                
           return postAdrink()
        }  

       update(){
        let updateAdrink= async () => {
            const serverUrl = "https://coffeeshopcreepy.herokuapp.com/";
            const { getAccessTokenSilently } = this.props.auth0;
            const inputData= {title: this.state.title,
                        recipe:{color: this.state.color,
                        name: this.state.name, parts: this.state.parts}}
                
            const id = this.state.id
            try {
              const token = await getAccessTokenSilently();
              const response = await axios.patch(`${serverUrl}\drinks-update\${this.state.id}`,inputData, {
                headers: { Authorization: `Bearer ${token}`}})
                .then(function(response){
                    console.log(response)
                })
            } catch (error){
                console.error(error.response)
            
            }
        }  
            
       return updateAdrink()
 
       }


       delete(){
        let deleteAdrink= async () => {
            const serverUrl = "https://coffeeshopcreepy.herokuapp.com/";
            const { getAccessTokenSilently } = this.props.auth0;
            const id = this.state.id
         
            try {
              const token = await getAccessTokenSilently();
              console.log(token)
              const response = await axios.delete(`${serverUrl}\drinks-delete\${id}`,{
                headers: { Authorization: `Bearer ${token}`}})
                .then(function(response){
                    console.log(response)
                })
            } catch (error){
                console.error(error.response)
            
            }
        }  
            
       return deleteAdrink()
      //  change url
        
       }

    render() {
        return(
        <div>
          <div>
          <label  className="form-label">Drink Id</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="eg. 67" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.id}/>
              <button type="button" className="btn btn-outline-danger" onClick={()=>{this.delete()}}>delete</button>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" id="formGroupExampleInput" value={this.state.title} placeholder="eg. Margarita" name ="title" onChange={this.handleChange}/>
          </div>
          <form className="row gy-2 gx-3 align-items-center">
            <div className="col-auto">
              <label className="visually-hidden" >Ingredient</label>
              <input type="text" className="form-control" id="autoSizingInput" value={this.state.name} placeholder="eg. tequila" name="name" onChange={this.handleChange}/>
            </div>
            <div className="col-auto">
              <label className="visually-hidden" >Color</label>
              <div className="input-group">
                <input type="text" className="form-control" id="autoSizingInputGroup" value={this.state.color} placeholder="eg. Blue" name="color" onChange={this.handleChange} />
              </div>
            </div>
            <div className="col-auto">
              <label className="visually-hidden">Parts</label>
              <select className="form-select" id="autoSizingSelect" value={this.state.parts} placeholder="parts" name="parts" onChange={this.handleChange} >
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-primary mr-2"  onClick={()=>{this.post()}}>post</button>
                <button type="button" className="btn btn-primary mr-4" onClick={()=>{this.update()}}>update</button>   
              </div>
            </div>
          </form>
            
          <div className='row mr-5'>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                    <button type="button" className="btn-dark mr-4" onClick={()=>{this.getDrink()}}>Drinks Detail</button>
                    </th>
                    <th scope="col">ID</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">RECIPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" >drinks</th>
                    <td>{this.state.drinks.map((drink) => 
                             <tr>
                              <th>{drink.id} </th>
                             </tr> 
                              )}
                    </td>
                    <td>
                      {this.state.drinks.map((drink) => 
                              <tr key={drink.id}>
                              <td>{drink.title} </td>
                              </tr>)
                      }
                    </td>
                    <td>
                    {this.state.drinks.map((drink) => 
                              <tr key={drink.id}>
                              <td> {JSON.stringify(drink.recipe)} </td>
                              </tr>)
                    }
                    </td>
                  </tr>
                </tbody>
            </table>
          </div>

        </div>  


        
  );

}
};
    
 
export default withAuth0(SettingDrinks)




