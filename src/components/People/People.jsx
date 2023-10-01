import { useContext } from 'react';
import {MediaContext} from '../../Context/MediaStore';
import styles from './People.module.scss';
import {Helmet} from "react-helmet";

export default function People() {
let {trendingPeople} = useContext(MediaContext);
 
  return (
    <div className='row my-3 py-5'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>People</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="col-md-4">
      <div className={`${styles.brdr} brdr w-25 mb-3`}></div>
      <h3>Trending</h3>
      <h3>People</h3>
      <h3>to Watch now</h3>
      <span className='.second-color'>Most Popular People by day</span>
      <div className={`${styles.brdr} brdr w-75 mt-3`}></div>

    </div>
      {trendingPeople.slice(0,10).map((item,index)=>
      <div key={index} className="col-md-2">
        <img className="w-100"  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}/>
        <h2 className='h5'>{item.name}</h2>
      </div>
      )}
    </div>
  )
}

////////////////////////////////////////////////////////////
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import styles from './People.module.scss';
// export default function People() {
 
//   const [trendingPeople, setTrendingPeople] = useState([]);
//   let getTrendingPeople =async ()=>{
//     let {data} = await axios.get('https://api.themoviedb.org/3/trending/person/day?api_key=9174cbe94fb561c35174b2168e4dd061');
//       console.log(data.results);
//       setTrendingPeople(data.results)
//   }
//   useEffect(() => {
//     getTrendingPeople();
//   }, [])
  
//   return (
//     <div className='row my-3 py-5'>
//       <div className="col-md-4">
//       <div className={`${styles.brdr} brdr w-25 mb-3`}></div>
//       <h3>Trending</h3>
//       <h3>People</h3>
//       <h3>to Watch now</h3>
//       <span className='.second-color'>Most Popular People by day</span>
//       <div className={`${styles.brdr} brdr w-75 mt-3`}></div>

//     </div>
//       {trendingPeople.slice(0,10).map((item,index)=>
//       <div key={index} className="col-md-2">
//         <img className="w-100"  src={`https://image.tmdb.org/t/p/original${item.profile_path}`}/>
//         <h2 className='h5'>{item.name}</h2>
//       </div>
//       )}
//     </div>
//   )
// }
