import React from 'react';
import "../App.css";
import SetRemainder from './SetRemainder';
import ViewRemainder from './ViewRemainder';

function Home() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "No", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    const date=d.getDate();
    const  month = months[d.getMonth()];
    const day=days[d.getDay()];
return (
    <div className='mt-4 success text-center mx-auto' style={{width:"800px",height:"700px"}}>
        <h1 className='container text-center'>Welcome to the Remainder Application</h1>
        
        <div className='m-4'> 
            <h1>Today is {day} , {date}th of {month} </h1>        
        </div>

        <div className='mt-5 d-flex justify-content-around'>
        <p><a class="link-opacity-10-hover text-decoration-none text-success border border-dark p-2" href="/SetRemainder">Set Remainder</a></p>
        {/* <p><a class="link-opacity-25-hover text-decoration-none text-success border border-dark" href="#">Modify remainder</a></p> */}
        {/* <p><a class="link-opacity-50-hover text-decoration-none text-success border border-dark" href="#">Disable remainder</a></p> */}
        {/* <p><a class="link-opacity-75-hover text-decoration-none text-success border border-dark" href="#">Delete remainder</a></p> */}
        {/* <p><a class="link-opacity-100-hover text-decoration-none text-success border border-dark" href="#">Enable remainder</a></p>         */}
        <p><a class="link-opacity-100-hover text-decoration-none text-success border border-dark p-2" href="/ViewRemainder">View Your Remainder</a></p>        
        </div>

    </div>
)
}

export default Home;
