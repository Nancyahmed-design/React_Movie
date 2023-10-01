
import {useContext, useState} from "react";
import { RouterProvider, Navigate, createBrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import MasterLayout from '../MasterLayout/MasterLayout';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import Details from '../Details/Details';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import People from '../People/People';
import Register from '../Register/Register'
import TvShows from '../TvShows/TvShows';
import Networks from '../Networks/Networks';
import Profile from '../Profile/Profile';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { AuthContext } from "../../Context/AuthStore";
import { Offline, Online } from "react-detect-offline";

function App() {
 let {userData,saveUserData,logout} = useContext(AuthContext)

  let routes=createBrowserRouter([
    {
      path:'/',element:<MasterLayout userData={userData} logout={logout}/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
        {path:'detail',element:<ProtectedRoute><Details/></ProtectedRoute>},
        {path:'movies',element:<ProtectedRoute userData={userData}><Movies/></ProtectedRoute>},
        {path:'people',element:<ProtectedRoute userData={userData}><People/></ProtectedRoute>},
        {path:'tvshows',element:<ProtectedRoute userData={userData}><TvShows/></ProtectedRoute>},
        {path:'networks',element:<ProtectedRoute><Networks/></ProtectedRoute>},
        {path:'profile',element:<ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute>},
        {path:'about',element:<About/>},
        {path:'Register',element:<Register/>},
        {path:'login',element:<Login saveUserData={saveUserData}/>}


      ]
    }
  ])
  return ( 
    <div>
       <div>
    <Online> <RouterProvider router={routes}/></Online>
    <Offline>You are Offline</Offline>
  </div>
    
    </div>
  );
}

export default App;

///////////////////////////////////////////////////////////////////////////
// import {useState} from "react";
// import { RouterProvider, Navigate, createBrowserRouter, useNavigate } from 'react-router-dom';
// import './App.css';
// import MasterLayout from '../MasterLayout/MasterLayout';
// import Home from '../Home/Home';
// import NotFound from '../NotFound/NotFound';
// import About from '../About/About';
// import Details from '../Details/Details';
// import Login from '../Login/Login';
// import Movies from '../Movies/Movies';
// import People from '../People/People';
// import Register from '../Register/Register'
// import TvShows from '../TvShows/TvShows';
// import Networks from '../Networks/Networks';
// import Profile from '../Profile/Profile';
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// import jwtDecode from 'jwt-decode';
// import { useEffect } from "react";
// function App() {
//   const [userData, setUserData] = useState(null);
//   let saveUserData=()=>{
//     let encodedToken=localStorage.getItem('token');
//     let decodedToken=jwtDecode(encodedToken);
//     console.log(decodedToken);
//     setUserData(decodedToken);
//   }
//   useEffect(()=>{
//     if(localStorage.getItem('token'))
//     {
//       saveUserData()
//     }
//   },[])

//   let logout=()=>{
//     localStorage.removeItem('token');
//     setUserData(null);
//     return <Navigate to='login'/>
    
//   }


//   let routes=createBrowserRouter([
//     {
//       path:'/',element:<MasterLayout userData={userData} logout={logout}/>,
//       errorElement:<NotFound/>,
//       children:[
//         {index:true,element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
//         {path:'detail',element:<ProtectedRoute><Details/></ProtectedRoute>},
//         {path:'movies',element:<ProtectedRoute userData={userData}><Movies/></ProtectedRoute>},
//         {path:'people',element:<ProtectedRoute userData={userData}><People/></ProtectedRoute>},
//         {path:'tvshows',element:<ProtectedRoute userData={userData}><TvShows/></ProtectedRoute>},
//         {path:'networks',element:<ProtectedRoute><Networks/></ProtectedRoute>},
//         {path:'profile',element:<ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute>},
//         {path:'about',element:<About/>},
//         {path:'Register',element:<Register/>},
//         {path:'login',element:<Login saveUserData={saveUserData}/>}


//       ]
//     }
//   ])
//   return ( 
//     <div>
//      <RouterProvider router={routes}/>
//     </div>
//   );
// }

// export default App;
