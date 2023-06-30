import React from 'react';
import  { useEffect, useState } from 'react';

function ViewRemainder() {


  const [storedData, setStoredData] = useState(null);
  const [storedData1, setStoredData1] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('newItem');
    // const data =[subject,description,eamil,phone,sms];
    if (data) {
      setStoredData(JSON.parse(data));
    }

    const data1 = localStorage.getItem('newChecked');
    if (data1) {
      // setStoredData1(data1.toString());
      // const data2 = data1.toString();
      setStoredData1(JSON.parse(data1));
      // console.log(data1);
      // const concatenatedData = storedData1.join(', ');

      // return <p>{concatenatedData}</p>;
      
    } 
    
  }, []);

  const concatenatedData = storedData1.join(', ');


 
    



  return (
    <div className='container card' style={{width:"700px",height:"360px"}}>

        {storedData ? 
        <> <div className='d-flex justify-content-between '>
              <p className='mt-3'>Date : {storedData.date}</p>
              <div className="form-check form-switch mt-3">
                  <input className="form-check-input" type="checkbox" style={{width:"48px",height:"25px"}}/>
              </div>
            </div>
                <p>Subject : {storedData.subject}</p>
                <p>Description : {storedData.description}</p>
                <p>email : {storedData.email}</p>
                <p>Contact : {storedData.phone}</p>
                <p>SMS no : {storedData.sms} </p>
          </> 
        : <> <p>NO DATA FOUND !</p> </>}

        {storedData1?
        <>
        {/* {storedData1.map((item, index) => (
        <p key={index}>Recurr days: {item}</p>
      ))} */}
        <p> Recurr days : {concatenatedData} </p>
        

    
        <div className='d-flex justify-content-between '>
          <button className='btn btn-danger mb-3 me-4 mt-3'>Delete</button>
          <button className='btn btn-primary mb-3 me-4 mt-3 '> <a className='text-decoration-none text-light' href='/Home'>Back</a> </button>
          <button  className='btn btn-success mb-3 mt-3'>Update</button>
        </div>          
        </>:
          <> <p>NO DATA FOUND !</p> </>}
        
    </div>
  )
}

export default ViewRemainder;