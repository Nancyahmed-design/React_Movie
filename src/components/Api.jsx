import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import styles from './Movies.module.scss';
import $ from "jquery";
export default function Movies() {
  const [TrendingMovies,setTrendingMovies]=useState([]);
  let getTrendingMovies = async() =>{
      let {data}=await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=9174cbe94fb561c35174b2168e4dd061");
      setTrendingMovies(data.results);
      console.log(data.results);

  }
  useEffect(()=>{
  getTrendingMovies()
  },[]);

  return (
   
    <div className="row my-3 py-5">
    <div className="col-md-4">
      <div className={`${styles.brdr} brdr w-25 mb-3`}></div>
      <h3>Trending</h3>
      <h3>Movies</h3>
      <h3>to Watch now</h3>
      <span className='.second-color'>Most watched movies by day</span>
      <div className={`${styles.brdr} brdr w-75 mt-3`}></div>

    </div>
         {TrendingMovies.slice(0,10).map((item,index) => (
        <div key={index} className='col-md-2'>
          <div className='item position-relative'>
           
            <span className='position-absolute top-0 end-0 p-2 bg-info'>{item.vote_average.toFixed(1)}</span>
            <img className="w-100" src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/>
            <h2 className='h6'>{item.title}</h2>
          </div>
          </div>
      )) }
    </div>
  
  )
}

///////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styles from './Movies.module.css';
// export default function Movies() {
//   const[TrendingItems,setTrendingItems]= useState([])
//   useEffect(() => {
//     getTrendingItems();
//   },[])
//   let getTrendingItems = async() => {
//   let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=9174cbe94fb561c35174b2168e4dd061")      
//         console.log(data.results);
//         setTrendingItems(data.results)
// }


//   return (
//     <>
      // <div className="row my-3 py-5">
      //   <div className="col-md-4">
      //     <div className={`${styles.brdr} brdr w-25 mb-3`}></div>
      //     <h3>Trending</h3>
      //     <h3>Movies</h3>
      //     <h3>to Watch now</h3>
      //     <span className='.second-color'>Most watched movies by day</span>
      //     <div className={`${styles.brdr} brdr w-75 mt-3`}></div>

      //   </div>
//         { TrendingItems.map((item,index)=>
//             <div key={index} className="col-md-2">
//             <div className="item">
//               <img className="w-100" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt=""/>
//               <h5>{item.title}{item.name}</h5>
//             </div>
//             </div>
//         )}
//       </div>
//     </>
//   )
// }
