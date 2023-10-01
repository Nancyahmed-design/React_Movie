// import React, { useState } from 'react' 
// import axios from 'axios';
// import joi from 'joi';
// import { useNavigate } from "react-router-dom";
// export default function Register() {
//   let [user,setUser]=useState({
//     "first_name":"",
//     "last_name":"",
//     "age":"",
//     "email":"",
//     "password":""
//   })
//   let navigate = useNavigate();
//   const [errorMsg , setErrorMsg]= useState('');
//   const [errorList ,setErrorList]=useState([]);
//   let submitFormData=async (e)=>{
//         e.preventDefault();
//        let validationResponse = validateFormData();
//         if(validationResponse.error){
//           setErrorList(validationResponse.error.details
//             )
//         }
//         else{
//               let {data} =await axios.post("https://movies-api.routemisr.com/signup",user);
//                     console.log(data);
//                     if(data.message == 'success'){
//                       goToLogin()
//                     }
//                     else{
//                       setErrorMsg(data.message)
//                     }
//         }
     
//       }

//       let goToLogin=()=>{
//         navigate('/login')
//       }
//       let getInputData=(e)=>{
//       //let copyOfUser=user;   //shalow copy
//       let  copyOfData={...user} //deep copy
//       copyOfData[e.target.name]=e.target.value
//       console.log(e.target.value);
//       console.log(copyOfData);
//       setUser(copyOfData);
//     }

//     let validateFormData=()=>{
//       const schema = joi.object({
//         first_name:joi.string().alphanum().required.min(2).max(10),
//         last_name:joi.string().alphanum().required().min(2).max(10),
//         age:joi.number().required().min(20).max(80),
//         email:joi.string().required().email({tlds:{allow:['com','net']}}),
//         password:joi.string().required.pattern(new RegExp (/^[a-z][0-9]{3}$/))
//       })
//       return schema.validate(user,{abortEarly:false});
//     }
    
   
//   return (
//     <>
//     <div className='w-75 m-auto py-5'>
//     <h2>Registration Form</h2>
//     {errorList.map((error,index)=>
//     <div key={index} className='alert alert-danger p-2'>{error.message}</div>

//     )}

//     {errorMsg?<div className='alert alert-danger p-2'>{errorMsg}</div>:''}
//     <form onSubmit={submitFormData}>
//       <div className='input-data my-2'>
//         <label htmlFor="first_name">first Name</label>
//         <input onChange={getInputData} type="text" className='form-control my-2' name="first_name"/>
//       </div>
//       <div className='input-data my-2'>
//         <label htmlFor="last_name">last Name</label>
//         <input onChange={getInputData} type="text" className='form-control my-2' name="last_name"/>
//       </div>
//       <div className='input-data my-2'>
//         <label htmlFor="age">age</label>
//         <input onChange={getInputData}  type="number" className='form-control my-age2' name="age"/>
//       </div>
//       <div className='input-data my-2'>
//         <label htmlFor="email">email</label>
//         <input onChange={getInputData} type="email" className='form-control my-2' name="email"/>
//       </div>
//       <div className='input-data my-2'>
//         <label htmlFor="password">password</label>
//         <input onChange={getInputData} type="password" className='form-control my-2' name="password"/>
//       </div>
//       <button className='btn btn-info mt-3 float-end'>Register</button>
//       <div className="clear-fix"></div>
//     </form>
//     </div>
   
//     </>
//   )
// }

// // ////////////////////////////////////////////////////////////////////////////////////////////
//session 2 week 3 v 7
import React, { useState } from 'react' 
import axios from 'axios';
import joi from 'joi';
import { useNavigate } from "react-router-dom";
export default function Register() {
  let [user,setUser]=useState({
    "first_name":"",
    "last_name":"",
    "age":"",
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
              let {data} =await axios.post("https://movies-api.routemisr.com/signup",user);
                    console.log(data);
                    if(data.message == 'success'){
                      goToLogin()
                    }
                    else{
                      setErrorMsg(data.message)
                    }
        }
     
      }

      let goToLogin=()=>{
        navigate('/login')
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
        first_name:joi.string().alphanum().required().min(2).max(10),
        last_name:joi.string().alphanum().required().min(2).max(10),
        age:joi.number().required().min(20).max(80),
        email:joi.string().required().email({tlds:{allow:['com','net']}}),
        password:joi.string().required().pattern(new RegExp(/^[0-9]/))
      })
      return schema.validate(user,{abortEarly:false});
    }
   
  return (
    <>
    <div className='w-75 m-auto py-5'>
    <h2>Registration Form</h2>
    {errorList.map((error,index)=>
    <div key={index} className='alert alert-danger p-2'>{error.message}</div>
    )}

    {errorMsg?<div className='alert alert-danger p-2'>{errorMsg}</div>:''}
    <form onSubmit={submitFormData}>
      <div className='input-data my-2'>
        <label htmlFor="first_name">first Name</label>
        <input onChange={getInputData} type="text" className='form-control my-2' name="first_name"/>
      </div>
      <div className='input-data my-2'>
        <label htmlFor="last_name">last Name</label>
        <input onChange={getInputData} type="text" className='form-control my-2' name="last_name"/>
      </div>
      <div className='input-data my-2'>
        <label htmlFor="age">age</label>
        <input onChange={getInputData}  type="number" className='form-control my-age2' name="age"/>
      </div>
      <div className='input-data my-2'>
        <label htmlFor="email">email</label>
        <input onChange={getInputData} type="email" className='form-control my-2' name="email"/>
      </div>
      <div className='input-data my-2'>
        <label htmlFor="password">password</label>
        <input onChange={getInputData} type="password" className='form-control my-2' name="password"/>
      </div>
      <button className='btn btn-info mt-3 float-end'>Register</button>
      <div className="clear-fix"></div>
    </form>
    </div>
   
    </>
  )
}
