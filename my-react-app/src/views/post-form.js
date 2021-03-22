import React, { Fragment, useState, useEffect, Component} from "react";
import { useAuth0,withAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';



class PostDrink extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "Enter a new drink",
            recipe:{
                color:"blue",
                name:"water",
                parts:"2"
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
       
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
 
        this.setState({[name]: value});
        
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      
       submit() {
            let postAdrink= async () => {
                const serverUrl = 'http://127.0.0.1:5000/';
                const { getAccessTokenSilently } = this.props.auth0;
                const data = this.state

                console.log(data)
                try {
                  const token = await getAccessTokenSilently();
                  console.log(token)
                  const response = await axios.post(`/post-drinks`,{
                    Authorization: `Bearer ${token}`}, data)
                    .then(function(response){
                        console.log(response)
                    })
                } catch (error){
                    console.error(error)
                
                }
            }  
                
           return postAdrink()
        }  
           
    

    render() {
        return(
            <div>
            <h1>POST DRINKS</h1>
            <input type="text" value={this.state.title} placeholder="title" name ="title" onChange={(drink)=>{this.setState({title: drink.target.value})}} /> <br /> <br/>
            <input type="text" value={this.state.color} placeholder="color" name="color" onChange={this.handleChange} /> <br /> <br/>
            <input type="text" value={this.state.name} placeholder="ingredient name" name="name" onChange={this.handleChange} /> <br /> <br/>
            <input type="text" value={this.state.parts} placeholder="parts" name="parts" onChange={this.handleChange} /> <br /> <br/>
            <button onClick={()=>{this.submit()}} >Submit</button>
            </div>
        )
    }


};
    
 
export default withAuth0(PostDrink)

