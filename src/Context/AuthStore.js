import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {createContext,useState,useEffect} from "react";
import { RouterProvider, Navigate, createBrowserRouter, useNavigate } from 'react-router-dom';

export let AuthContext= createContext(null);
export default function AuthContextProvider(props){
    const [userData, setUserData] = useState(null);
  let saveUserData=()=>{
    let encodedToken=localStorage.getItem('token');
    let decodedToken=jwtDecode(encodedToken);
    console.log(decodedToken);
    setUserData(decodedToken);
  }
  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      saveUserData()
    }
  },[])

  let logout=()=>{
    localStorage.removeItem('token');
    setUserData(null);
    return <Navigate to='login'/>
    
  }


    return<AuthContext.Provider value={{userData,saveUserData,logout}}>
        {props.children}
    </AuthContext.Provider>
}
