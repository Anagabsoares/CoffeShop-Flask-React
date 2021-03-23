import React, { Fragment, useState, useEffect, Component} from "react";
import { useAuth0,withAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';



class PostDrink extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            title: '',
            color: '',
            name: '',
            parts: ''

        }

        )

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
    
      
      post() {
            let postAdrink= async () => {
                const serverUrl = 'http://127.0.0.1:5000/';
                const { getAccessTokenSilently } = this.props.auth0;
                const inputData= {title: this.state.title,
                            recipe:{color: this.state.color,
                            name: this.state.name, parts: this.state.parts}}
    

                console.log(inputData)
                try {
                  const token = await getAccessTokenSilently();
                  console.log(token)
                  const response = await axios.post(`/post-drinks`,inputData, {
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

      update() {
            let postAdrink= async () => {
                const serverUrl = 'http://127.0.0.1:5000/';
                const { getAccessTokenSilently } = this.props.auth0;
                const inputData= {title: this.state.title,
                            recipe:{color: this.state.color,
                            name: this.state.name, parts: this.state.parts}}
    

                console.log(inputData)
                try {
                  const token = await getAccessTokenSilently();
                  console.log(token)
                  const response = await axios.patch(`/drinks-update`,inputData,{
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
           
    

    render() {
        return(
            <div>
            <div>
                <h1>POST</h1>
                <input type="text" value={this.state.title} placeholder="title" name ="title" onChange={this.handleChange} /> <b/>  <b/> 
                <input type="text" value={this.state.color} placeholder="color" name="color" onChange={this.handleChange} /> <b/>  <b/>
                <input type="text" value={this.state.name} placeholder="ingredient name" name="name" onChange={this.handleChange} /> <b/>  <b/>
                <input type="text" value={this.state.parts} placeholder="parts" name="parts" onChange={this.handleChange} /> <b/>  <b/>
                <button onClick={()=>{this.post()}} >POST</button>
            </div>
            <div>
                <h1>Update</h1>
                <input type="text" value={this.state.title} placeholder="title" name ="title" onChange={this.handleChange} /> <b/>  <b/> 
                <input type="text" value={this.state.color} placeholder="color" name="color" onChange={this.handleChange} /> <b/>  <b/>
                <input type="text" value={this.state.name} placeholder="ingredient name" name="name" onChange={this.handleChange} /> <b/>  <b/>
                <input type="text" value={this.state.parts} placeholder="parts" name="parts" onChange={this.handleChange} /> <b/>  <b/>
                <button onClick={()=>{this.update()}} >Update</button>
                </div>
            </div> 
            
        )
    }


};
    
 
export default withAuth0(PostDrink)

