import  { useContext } from 'react';
import {MediaContext} from '../../Context/MediaStore';
import styles from './TvShows.module.scss';
import {Helmet} from "react-helmet";

export default function TvShows() {
  let {trendingTvs} = useContext(MediaContext);
  return (
   
    <div className="row my-3 py-5">
        <Helmet>
                <meta charSet="utf-8" />
                <title>TvShows</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
    <div className="col-md-4">
      <div className={`${styles.brdr} brdr w-25 mb-3`}></div>
      <h3>Trending</h3>
      <h3>Tv Shows</h3>
      <h3>to Watch now</h3>
      <span className='.second-color'>Most watched Tv Shows by day</span>
      <div className={`${styles.brdr} brdr w-75 mt-3`}></div>

    </div>
         {trendingTvs.slice(0,10).map((item,index) => (
        <div key={index} className='col-md-2'>
          <div className='item position-relative'>
           
            <span className='position-absolute top-0 end-0 p-2 bg-info'>{item.vote_average.toFixed(1)}</span>
            <img className="w-100" src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/>
            <h2 className='h6'>{item.name}</h2>
          </div>
          </div>
      )) }
    </div>
  
  )
}
////////////////////////////////////////////////////////////////////////
// import React from 'react'

// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import styles from './TvShows.module.scss';
// export default function TvShows() {
//   const [TrendingTvs,setTrendingTvs]=useState([]);
//   let getTrendingTvs = async() =>{
//       let {data}=await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=9174cbe94fb561c35174b2168e4dd061");
//       setTrendingTvs(data.results);
//       console.log(data.results);

//   }
//   useEffect(()=>{
//   getTrendingTvs()
//   },[]);

//   return (
   
//     <div className="row my-3 py-5">
//     <div className="col-md-4">
//       <div className={`${styles.brdr} brdr w-25 mb-3`}></div>
//       <h3>Trending</h3>
//       <h3>Tv Shows</h3>
//       <h3>to Watch now</h3>
//       <span className='.second-color'>Most watched Tv Shows by day</span>
//       <div className={`${styles.brdr} brdr w-75 mt-3`}></div>

//     </div>
//          {TrendingTvs.slice(0,10).map((item,index) => (
//         <div key={index} className='col-md-2'>
//           <div className='item position-relative'>
           
//             <span className='position-absolute top-0 end-0 p-2 bg-info'>{item.vote_average.toFixed(1)}</span>
//             <img className="w-100" src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/>
//             <h2 className='h6'>{item.name}</h2>
//           </div>
//           </div>
//       )) }
//     </div>
  
//   )
// }