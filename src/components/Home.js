// import React, { useEffect } from 'react';
// import Header from './Header';
// import axios from 'axios';

// export default function Home() {
//   const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=22.296690&lon=73.237572&exclude=current&appid=a4875a25b5fb07e2f59dc43180a66a81';

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     axios.get(baseUrl)
//       .then((res) => {
//         console.log('res', res);
//       })
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <form>
//         <button type="button" onClick={getData}>Check Weather</button>
//       </form>
//     </>
//   );
// }
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let data=[{id:1,name:"anjaliii",age:26},{id:2,name:"siiiii"}]

  const navigate = useNavigate()
  const errorPage=()=>{
    navigate ("/error",{
      state:{
        data:data


      }
    })
  }
  return (
    <>
      <div>Home</div>
    <button onClick={()=>errorPage()}>show MSg</button>
    </>
  )
}

