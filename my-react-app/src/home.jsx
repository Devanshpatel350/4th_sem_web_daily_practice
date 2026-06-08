
// import React, { useEffect, useState } from 'react'
// import './App.css'
// const Home = ({apiData,SetApiData,cart,SetCart}) => {
//  console.log(cart,"cart");
//   useEffect(()=>{
//    async function apiCall(){

//   let res=   await   fetch("https://dummyjson.com/products")
//        let data=       await res.json()
//        console.log(data);
//        SetApiData(data.products)
       

//     }
//     apiCall()

//   },[])

//   return (
//     <div id='card'>
//       {
//         apiData.map((a)=>{
//           return(<div id='main_card'>
//           <img   src={a.thumbnail}/>
//           {/* <h4>{a.title}</h4>
//           <h6>{a.price}</h6> */}
//           <button onClick={()=>SetCart([...cart,a])}>add</button>
//           </div>)
//         })
//       }
//     </div>
//   )
// }

// export default Home