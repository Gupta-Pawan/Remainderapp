import React from 'react';
import  { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =(event) => {
        event.preventDefault();
        const loggeduser = localStorage.getItem('username');
        const loggedpassword = localStorage.getItem('password');

        if(username === loggeduser && password === loggedpassword) {
            navigate('/Home');
        }else{
            navigate("/LoginFailed");
        }
    };
    
    
return (
    <>
        <div className='container card mt-5' style={{width:"500px"}}>
            <h1 className='text-center'>Login Page</h1>
        <form  onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" className="form-control" name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Your name' id="username" aria-describedby="emailHelp" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" required></input>
            </div>
            <button type="submit" className="btn btn-primary mb-3 mt-2">Login</button>
        </form>
        <p className='text-center'><a className=' text-decoration-none text-primary'  href="/SignUp">Create Account</a></p>
        </div>
    </>
)
}

export default Login;
