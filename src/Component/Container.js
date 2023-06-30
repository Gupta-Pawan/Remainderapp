

// import React, { Component } from 'react'
// import Login from "./Login";
// import Home from "./Home";
// import SignUp from "./SignUp";


// class Container extends Component {
//     constructor(props) {
//     super(props)
    
//     this.state = {
//         // id: uuidv4(),
        
//         Username: null,
//         password: null,
//         isSubmitted: false
//     }
//     }

//     loginSubmitHandler=(event)=>{
//         event.preventDefault();
        
//         const username=event.target.username.value; 
//         const password=event.target.password.value; 
//         const storedUsername = localStorage.getItem("username");
//         const storedPassword = localStorage.getItem("password");

//         if (username === storedUsername && password === storedPassword) {
//             window.location.href ="/";
//         } else {
//             return "<h1>Login failed ! Please try again</h1>";
//         }
//     }

//     signupSubmitHandler =(event)=>{
//         event.preventDefault();
//         const username=event.target.username.value; 
//         const password=event.target.password.value; 
//         this.setState({username,password,isSubmitted:true},(username,password)=>{
//             localStorage.setItem("username", username);
//             localStorage.setItem("password", password);
//         });

//     }


//     render() {
//         return (
//         <>
        
//             {this.state.Username===null && this.state.password===null ? 
//             <Login submit={this.loginSubmitHandler}/> :
//             <Home/>}

//             <SignUp submit={this.signupSubmitHandler}/>

//         </>

    
//         )
//     }
// }

// export default Container;


import React from 'react'
// import Login from "./Login";
// import Home from "./Home";
import SignUp from "./SignUp";
import  { useState } from 'react';




function Container() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   const signupSubmitHandler =(e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    };

  return (
    <div>
        <SignUp submit={signupSubmitHandler}/>
    </div>
  )
}

export default Container
