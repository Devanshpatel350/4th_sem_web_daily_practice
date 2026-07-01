// // // import React from 'react'
// // // import './App.css'
// // // import { Link } from 'react-router-dom'
// // // // npm i react-router-dom
// // // const NavBar = () => {
// // //   return (
// // //     <div>
// // //         <nav>
// // //             <Link to={"/"}>   
// // //             <li>Home</li>
// // //             </Link>
// // //             <Link to={'/about'}>  
// // //             <li>About</li>
// // //             </Link>
// // //             <Link   to={"/cart"}>  
// // //             <li>Cart</li>
// // //             </Link>

// // //         </nav>
// // //     </div>
// // //   )
// // // }

// // // export default NavBar




// // // // npm i react-router-dom 

// // import React from 'react'
// // import './App.css'
// // import { Link } from 'react-router-dom'

// // // npm i react-router-dom
// // const NavBar = () => {
// //   return (
// //     <div>
// //         <nav>
         
// //             <li>Home</li>
        
     
// //             <li>About</li>
       
// //           <Link to={'/cart'}> 
// //             <li>Cart</li>
// //             </Link>
          

// //         </nav>
// //     </div>
// //   )
// // }

// // export default NavBar




// // // npm i react-router-dom 

// import React from 'react'
// // import "./Chat.css"
// import {GoogleGenerativeAI} from "@google/generative-ai";
// import { useState } from 'react';
// const NavBar = () => {
//     let [search,setSearch]=useState('')

//     let genAi=new GoogleGenerativeAI("AQ.Ab8RN6LUGGDf8NcGhFRAycRZ_N1q_l6jwzYDePsbxTYVfix1qQ")
//     async function Search(){
//         try{

//             let model=genAi.getGenerativeModel({
//                 model:"gemini-2.0-flash"
//             })

//             let res= await model.generateContent(search)

//             console.log(res.response.text());

//         }catch(er){
//                 console.log(er)
//         }
//     }
//   return (
//     <>
//     <div className='box'>

//         <input className='input' placeholder='Ask anything' onChange={(e)=>setSearch(e.target.value)}/>
//         <button className='Search'  onClick={Search}>Search</button>



//     </div>
//     </>
//   )
// }

// export default Chat
//


