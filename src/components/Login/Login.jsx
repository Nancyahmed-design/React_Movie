

import React, { useState } from 'react' 
import axios from 'axios';
import joi from 'joi';
import { useNavigate } from "react-router-dom";
export default function Login({saveUserData}) {
  let [user,setUser]=useState({
    
    "email":"",
    "password":""
  })
  let navigate = useNavigate();
  const [errorMsg , setErrorMsg]= useState('');
  const [errorList,setErrorList]=useState([]);
  let submitFormData=async (e)=>{
        e.preventDefault();
        let validationResponse=validateFormData();
        console.log(validationResponse);
        if(validationResponse.error){
          setErrorList(validationResponse.error.details)
        }
        else{
              let {data} =await axios.post("https://movies-api.routemisr.com/signin",user);
                    console.log(data);
                    if(data.message === 'success'){
                      localStorage.setItem('token',data.token);
                      goToHome();
                     saveUserData();
                    }
                    else{
                      setErrorMsg(data.message)
                    }
        }
     
      }

      let goToHome=()=>{
        navigate('/')
      }
      let getInputData=(e)=>{
      //let copyOfUser=user;   //shalow copy
      let  copyOfData={...user} //deep copy
      copyOfData[e.target.name]=e.target.value
      console.log(e.target.value);
      console.log(copyOfData);
      setUser(copyOfData);
    }

    let validateFormData=()=>{
      const schema =joi.object({
        email:joi.string().required().email({tlds:{allow:['com','net']}}),
        password:joi.string().required().pattern(new RegExp(/^[0-9]/))
      })
      return schema.validate(user,{abortEarly:false});
    }
   
  return (
    <>
    <div className='w-75 m-auto py-5'>
    <h2>login Form</h2>
    {errorList.map((error,index)=>
    <div key={index} className='alert alert-danger p-2'>{error.message}</div>
    )}

    {errorMsg?<div className='alert alert-danger p-2'>{errorMsg}</div>:''}
    <form onSubmit={submitFormData}>
      
      <div className='input-data my-2'>
        <label htmlFor="email">email</label>
        <input onChange={getInputData} type="email" className='form-control my-2' name="email"/>
      </div>
      <div className='input-data my-2'>
        <label htmlFor="password">password</label>
        <input onChange={getInputData} type="password" className='form-control my-2' name="password"/>
      </div>
      <button className='btn btn-info mt-3 float-end'>Login</button>
      <div className="clear-fix"></div>
    </form>
    </div>
   
    </>
  )
}
