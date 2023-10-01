import React from 'react';
import Movies from '../Movies/Movies';
import TvShows from '../TvShows/TvShows';
import People from '../People/People';

export default function Home() {
  return (
    <>
    <Movies/>
    <TvShows/>
    <People/>
    </>
  )
}

////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';

// import axios from 'axios';
// import styles from './Home.module.scss';
// export default function Home() {
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
//       <div className="row my-3 py-5">
//         <div className="col-md-4">
//           <div className={`${styles.brdr} brdr w-25 mb-3`}></div>
//           <h3>Trending</h3>
//           <h3>Movies</h3>
//           <h3>to Watch now</h3>
//           <span className='.second-color'>Most watched movies by day</span>
//           <div className={`${styles.brdr} brdr w-75 mt-3`}></div>

//         </div>
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
