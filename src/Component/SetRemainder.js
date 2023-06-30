import React from 'react'
// import Home from './Home';
import  { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function SetRemainder() {
    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState([]);

    const [input, setInput] = useState({
        date:"date",
        subject:"",
        description:"",
        email:"",
        phone:"",
        sms:""

    });

    const getChecked =(e) =>{
        const{value,checked}=e.target;
        if(checked){
            setIsChecked([...isChecked,value]);
        }else{
            setIsChecked(isChecked.filter((e) => e !==value));
        }
    };


    const handleChange = (event) => {
        event.preventDefault();
        localStorage.setItem("newItem", JSON.stringify(input));
        localStorage.setItem("newChecked", JSON.stringify(isChecked));
        navigate('/Home');
    };

  return (
    <div className='container border  m-4 mx-auto' style={{width:"500px"}}>
        <div className='mt-3'>
            <label htmlFor="Date" className='p-3'>Choose Date :</label>
            <input type="date" name="date" value={input.date}  onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}/>
        </div>

        <div className='mt-3'>
            <label htmlFor="dropdown" className='p-3'> Subject : </label>
            <select className="form-select" name='subject' value={input.subject} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}>
                <option>Birthday</option>
                <option>last date of submission</option>
                <option>Anniversary</option>
                <option>Events</option>
                <option>Task</option>
                <option>Bills</option>
                <option>Salary</option>
            </select>
        </div>

        <div className='mt-3'>
            <label htmlFor="Date" className='p-3'>Description : </label>
            <div className="form-floating">
                <textarea className="form-control" name='description' value={input.description} placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}></ textarea>
                
            </div>
        </div>

        <div className='mt-4'>
            <div className="mb-3 row">
                <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email"  className="form-control" id="staticEmail" name='email' value={input.email} required onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} />
                </div>
            </div>
        </div>
        
        

        
        <div className="mb-3 row mt-3">
                <label htmlFor="phon" className="col-sm-2 col-form-label">Contact</label>
                <div className="col-sm-10">
                <input type="tel" className="form-control" placeholder="12-4556-6789" name='phone' value={input.phone} pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" id="phone" onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} required/>
                </div>
        </div>

        <div className="mb-3 row mt-3">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">SMS no:</label>
                <div className="col-sm-10">
                <input type="text" maxLength="5" className="form-control" name='sms' value={input.sms} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} />
                </div>
        </div>

        <div className=" mt-5 d-flex ms-2 mb-4">
            <label htmlFor="inputPassword" className="">Recurr for next :</label>
            
            <div className="form-check ms-3">
        
                <input className="form-check-input" type="checkbox" onChange={(e) => getChecked(e)} value="7 days" name="recur"  id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">7 days</label>
            </div>

            <div className="form-check ms-3">
                <input className="form-check-input" type="checkbox" onChange={(e) => getChecked(e)} value="5 days" name="recur"  id="flexCheckChecked"  />
                <label className="form-check-label" htmlFor="flexCheckChecked">5 days</label>
            </div>

            <div className="form-check ms-3">
                <input className="form-check-input " type="checkbox" onChange={(e) => getChecked(e)} value="3 days" name="recur"  id="flexCheckChecked"  />
                <label className="form-check-label" htmlFor="flexCheckChecked">3 days</label>
            </div>

            <div className="form-check ms-3">
                <input className="form-check-input" type="checkbox" onChange={(e) => getChecked(e)} value="2 days" name="recur"  id="flexCheckChecked"/>
                <label className="form-check-label" htmlFor="flexCheckChecked">2 days</label>
            </div>

        </div>
        
        <button className='btn btn-danger mb-3 me-4 ms-3 mt-2 '> <a className='text-decoration-none text-light' href='/'>Back</a> </button>
        <button type='submit' className='btn btn-primary mb-3 mt-2' onClick={handleChange} >Comfirm</button>
        

    </div>
  )
}

export default SetRemainder;