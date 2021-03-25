import React, { Fragment, useState, useEffect, Component} from "react";
import { useAuth0,withAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';




class PostDrink extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            id:'',
            title: '',
            color: '',
            name: '',
            parts: ''

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
                  const response = await axios.post(`${serverUrl}/post-drinks`,inputData, {
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
            const serverUrl = 'http://127.0.0.1:5000/';
            const { getAccessTokenSilently } = this.props.auth0;
            const inputData= {title: this.state.title,
                        recipe:{color: this.state.color,
                        name: this.state.name, parts: this.state.parts}}
                
            const id = this.state.id
            console.log(id)
            console.log(inputData)
    
            try {
              const token = await getAccessTokenSilently();
              console.log(token)
              const response = await axios.patch(`${serverUrl}/drinks-update/${this.state.id}`,inputData, {
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
            const serverUrl = 'http://127.0.0.1:5000/';
            const { getAccessTokenSilently } = this.props.auth0;
            const id = this.state.id
            console.log(id)
         
            try {
              const token = await getAccessTokenSilently();
              console.log(token)
              const response = await axios.delete(`${serverUrl}/drinks-delete/${id}`,{
                headers: { Authorization: `Bearer ${token}`}})
                .then(function(response){
                    console.log(response)
                })
            } catch (error){
                console.error(error.response)
            
            }
        }  
            
       return deleteAdrink()

        
       }
     


    render() {
        return(
        <div>
            <div>
                <input type="text" value={this.state.id} placeholder="drink id" name ="id" onChange={this.handleChange} /> <b/>  <b/> 
                <input type="text" value={this.state.title} placeholder="title" name ="title" onChange={this.handleChange} /> <b/>  <b/> 
                <input type="text" value={this.state.color} placeholder="color" name="color" onChange={this.handleChange} /> <b/>  <b/>
                <input type="text" value={this.state.name} placeholder="ingredient name" name="name" onChange={this.handleChange} /> <b/>  <b/>
                <input type="text" value={this.state.parts} placeholder="parts" name="parts" onChange={this.handleChange} /> <b/>  <b/>
                
            </div>
            <div>
                <button onClick={()=>{this.post()}} >POST</button><b/><b/>
                <button onClick={()=>{this.update()}} >UPDATE</button><b/><b/>
                <button onClick={()=>{this.delete()}} >DELETE</button><b/><b/>
            </div>
           
              
        
           
        </div>    
        
  );

}
};
    
 
export default withAuth0(PostDrink)




