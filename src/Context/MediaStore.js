import axios from 'axios';
import {createContext,useState,useEffect} from "react";
export let MediaContext= createContext(null);
export default function MediaContextProvider(props){
    const [trendingMovies,setTrendingMovies]=useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);
    const [trendingTvs,setTrendingTvs]=useState([]);

    let getTrendingItems = async(mediaType,callback) =>{
        let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=9174cbe94fb561c35174b2168e4dd061`);
        callback(data.results);
        
  
    }
    useEffect(()=>{
        getTrendingItems('movie',setTrendingMovies);
        getTrendingItems('person',setTrendingPeople);
        getTrendingItems('tv',setTrendingTvs);
        },[]);
    return<MediaContext.Provider value={{trendingMovies,trendingPeople,trendingTvs}}>
        {props.children}
    </MediaContext.Provider>
}
// import axios from 'axios';

// import { createContext ,useState ,useEffect } from 'react';
// export let MediaContext = createContext(null);


// export default function MediaContextProvider(props){
//     const [trendingMovies,setTrendingMovies]=useState([]);
//     const [trendingPeople, setTrendingPeople] = useState([]);
//     const [trendingTvs,setTrendingTvs]=useState([]);

//     let getTrendingItems = async(mediaType,callback) =>{
//         let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=9174cbe94fb561c35174b2168e4dd061`);
//         callback(data.results);  
//     }

//     useEffect(()=>{
//         getTrendingItems('movie',setTrendingMovies);
//         getTrendingItems('tv',setTrendingTvs);
//         getTrendingItems('person',setTrendingPeople)
//         },[]);
      
//         return <MediaContext.Provider value={{trendingMovies,trendingPeople,trendingTvs}}>
//                 (props.children)
//         </MediaContext.Provider>
// }