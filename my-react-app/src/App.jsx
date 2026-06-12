// // // // // // // // // import { useState } from 'react'
// // // // // // // // // import reactLogo from './assets/react.svg'
// // // // // // // // // import viteLogo from './assets/vite.svg'
// // // // // // // // // import heroImg from './assets/hero.png'
// // // // // // // // // import './App.css'

// // // // // // // // //import { useState } from "react"

// // // // // // // // // function App() {
// // // // // // // // //   const [count, setCount] = useState(0)

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <section id="center">
// // // // // // // // //         <div className="hero">
// // // // // // // // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // // // // // // // //           <img src={reactLogo} className="framework" alt="React logo" />
// // // // // // // // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // // // // // // // //         </div>
// // // // // // // // //         <div>
// // // // // // // // //           <h1>Get started</h1>
// // // // // // // // //           <p>
// // // // // // // // //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //         <button
// // // // // // // // //           type="button"
// // // // // // // // //           className="counter"
// // // // // // // // //           onClick={() => setCount((count) => count + 1)}
// // // // // // // // //         >
// // // // // // // // //           Count is {count}
// // // // // // // // //         </button>
// // // // // // // // //       </section>

// // // // // // // // //       <div className="ticks"></div>

// // // // // // // // //       <section id="next-steps">
// // // // // // // // //         <div id="docs">
// // // // // // // // //           <svg className="icon" role="presentation" aria-hidden="true">
// // // // // // // // //             <use href="/icons.svg#documentation-icon"></use>
// // // // // // // // //           </svg>
// // // // // // // // //           <h2>Documentation</h2>
// // // // // // // // //           <p>Your questions, answered</p>
// // // // // // // // //           <ul>
// // // // // // // // //             <li>
// // // // // // // // //               <a href="https://vite.dev/" target="_blank">
// // // // // // // // //                 <img className="logo" src={viteLogo} alt="" />
// // // // // // // // //                 Explore Vite
// // // // // // // // //               </a>
// // // // // // // // //             </li>
// // // // // // // // //             <li>
// // // // // // // // //               <a href="https://react.dev/" target="_blank">
// // // // // // // // //                 <img className="button-icon" src={reactLogo} alt="" />
// // // // // // // // //                 Learn more
// // // // // // // // //               </a>
// // // // // // // // //             </li>
// // // // // // // // //           </ul>
// // // // // // // // //         </div>
// // // // // // // // //         <div id="social">
// // // // // // // // //           <svg className="icon" role="presentation" aria-hidden="true">
// // // // // // // // //             <use href="/icons.svg#social-icon"></use>
// // // // // // // // //           </svg>
// // // // // // // // //           <h2>Connect with us</h2>
// // // // // // // // //           <p>Join the Vite community</p>
// // // // // // // // //           <ul>
// // // // // // // // //             <li>
// // // // // // // // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // // // // // // // //                 <svg
// // // // // // // // //                   className="button-icon"
// // // // // // // // //                   role="presentation"
// // // // // // // // //                   aria-hidden="true"
// // // // // // // // //                 >
// // // // // // // // //                   <use href="/icons.svg#github-icon"></use>
// // // // // // // // //                 </svg>
// // // // // // // // //                 GitHub
// // // // // // // // //               </a>
// // // // // // // // //             </li>
// // // // // // // // //             <li>
// // // // // // // // //               <a href="https://chat.vite.dev/" target="_blank">
// // // // // // // // //                 <svg
// // // // // // // // //                   className="button-icon"
// // // // // // // // //                   role="presentation"
// // // // // // // // //                   aria-hidden="true"
// // // // // // // // //                 >
// // // // // // // // //                   <use href="/icons.svg#discord-icon"></use>
// // // // // // // // //                 </svg>
// // // // // // // // //                 Discord
// // // // // // // // //               </a>
// // // // // // // // //             </li>
// // // // // // // // //             <li>
// // // // // // // // //               <a href="https://x.com/vite_js" target="_blank">
// // // // // // // // //                 <svg
// // // // // // // // //                   className="button-icon"
// // // // // // // // //                   role="presentation"
// // // // // // // // //                   aria-hidden="true"
// // // // // // // // //                 >
// // // // // // // // //                   <use href="/icons.svg#x-icon"></use>
// // // // // // // // //                 </svg>
// // // // // // // // //                 X.com
// // // // // // // // //               </a>
// // // // // // // // //             </li>
// // // // // // // // //             <li>
// // // // // // // // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // // // // // // // //                 <svg
// // // // // // // // //                   className="button-icon"
// // // // // // // // //                   role="presentation"
// // // // // // // // //                   aria-hidden="true"
// // // // // // // // //                 >
// // // // // // // // //                   <use href="/icons.svg#bluesky-icon"></use>
// // // // // // // // //                 </svg>
// // // // // // // // //                 Bluesky
// // // // // // // // //               </a>
// // // // // // // // //             </li>
// // // // // // // // //           </ul>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       <div className="ticks"></div>
// // // // // // // // //       <section id="spacer"></section>
// // // // // // // // //     </>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App






// // // // // // // // // // import React from 'react'

// // // // // // // // // // function App() {
// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       hello world
// // // // // // // // // //       <h1>hii</h1>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default App


// // // // // // // // // //import React from 'react'

// // // // // // // // // // function App() {
// // // // // // // // // //   return (
// // // // // // // // // //     <div>App</div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default App

// // // // // // // // // let count =0

// // // // // // // // // const App=()=>{
// // // // // // // // //   function fun1(){
// // // // // // // // //     count++

// // // // // // // // //   }
// // // // // // // // //   return (<div>
// // // // // // // // //     <h1></h1>
// // // // // // // // //     <h2>Count</h2>
// // // // // // // // //     <button onClick={fun1}>add</button>
// // // // // // // // //   </div>)
// // // // // // // // // }





// // // // // // // // //http://localhost:5173/


// // // // // // // // // import { useState } from "react";
// // // // // // // // // const App=()=>{
// // // // // // // // //   let [count,setCount]  = useState(0);
// // // // // // // // //   function fun1(){
// // // // // // // // //     setCount(++count)
// // // // // // // // //   }
// // // // // // // // //   return
// // // // // // // // // }

// // // // // // // // //npm run dev
// // // // // // // // //import { useState } from 'react'
// // // // // // // // //import React from 'react'

// // // // // // // // // const App =() =>{
// // // // // // // // //     return (
// // // // // // // // //     <div><home/></div>
// // // // // // // // //     )
// // // // // // // // // }
// // // // // // // // //import React from 'react'
// // // // // // // // //import { useState } from 'react'

// // // // // // // // // import { useState } from 'react';
// // // // // // // // // import Home from './assets/Home';

// // // // // // // // // const App = () => {

// // // // // // // // //   let user = "dev";
// // // // // // // // // let [count,setCount]=    useState(0)
// // // // // // // // //     function fun1(){
// // // // // // // // //         SetCount{count+1}
// // // // // // // // //     }
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //         <h4>{count}</h4>
// // // // // // // // //         <button onClick={fun1}>click</button>
// // // // // // // // //         <Home/>
// // // // // // // // //       <Home data={user} />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default App;
// // // // // // // // // import { useState } from "react"

// // // // // // // // // import { useState } from "react"
// // // // // // // // // import Home from "./Home"

// // // // // // // // // const App = () => {
// // // // // // // // //        let [count,SetCount]=    useState(0)
// // // // // // // // //   function fun1(){
// // // // // // // // //     SetCount(count+1)

// // // // // // // // //   }
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h3>{count}</h3>
// // // // // // // // //        <button onClick={fun1}>click</button>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App



// // // // // // // // // import React, { useState } from 'react'
// // // // // // // // // const App = () => {
// // // // // // // // //        let [color,SetColor]=     useState("red")
// // // // // // // // //        function fun1(){
// // // // // // // // //         SetColor("green")
// // // // // // // // //        }
// // // // // // // // //   return (
// // // // // // // // //     <div style={{backgroundColor:color,height:"100vh"}}>
// // // // // // // // //       <button  onClick={fun1}>red</button>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App
// // // // // // // // // import React from 'react'

// // // // // // // // // const App = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <Home/>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }
// // // // // // // // // const Home = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div>Hello</div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App


// // // // // // // // // import React from 'react'
// // // // // // // // // import Home from './Home'

// // // // // // // // // const App = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //     <Home/>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App


// // // // // // // // // import React from 'react'
// // // // // // // // // import Home from './Home'
// // // // // // // // // import {New}  from './Home'
// // // // // // // // // const App = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //     <Home/>
// // // // // // // // //     <New/>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App



// // // // // // // // // import React from 'react'
// // // // // // // // // import Home from './Home'

// // // // // // // // //  // App->Home->A->B->C

// // // // // // // // // const App = () => {
// // // // // // // // //   let user="ank"
// // // // // // // // //   return (
// // // // // // // // //     <div><Home  data={user}/></div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App



// // // // // // // // // const App = () => {
// // // // // // // // //   // let count=0
// // // // // // // // //       let [count,SetCount]=    useState(0)
// // // // // // // // //       function fun1(){
// // // // // // // // //         SetCount(count+1)
// // // // // // // // //         // count++
// // // // // // // // //       }

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h4>{count}</h4>
// // // // // // // // //       <button onClick={fun1}>click</button>
// // // // // // // // //       <Home/>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App



// // // // // // // // // import React from 'react'
// // // // // // // // // import New from "./New"
// // // // // // // // // import {About} from './New'

// // // // // // // // // const App = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <New/>
// // // // // // // // //       <About/>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App



// // // // // // // // // import React from 'react'
// // // // // // // // // import Home from './Home'
// // // // // // // // // const App = () => {
// // // // // // // // //   let data="hello"
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <Home a={data}/>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App


// // // // // // // // // import React, { useState } from 'react'
// // // // // // // // // import Home from './Home'

// // // // // // // // // const App = () => {
// // // // // // // // //   // let count=0
// // // // // // // // //   let [count,SetCount]=   useState(0)
  
// // // // // // // // //   function fun1(){
// // // // // // // // //     SetCount(count+1)
  
// // // // // // // // //   }
// // // // // // // // //   function fun2(){
// // // // // // // // //     SetCount(count-1)
  
// // // // // // // // //   }
// // // // // // // // //   function fun3(){
// // // // // // // // //     SetCount(0)
  
// // // // // // // // //   }
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h1>{count}</h1>
// // // // // // // // //       <button onClick={fun1}>++</button>
// // // // // // // // //       <button onClick={fun2}>--</button>
// // // // // // // // //       <button onClick={fun3}>reset</button>


   
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App


// // // // // // // // // import React, { useState } from 'react'
// // // // // // // // // const App = () => {
// // // // // // // // //             let [input,SetInput]=     useState("")
// // // // // // // // //             let [data,SetData]=     useState('')
// // // // // // // // //   function fun1(e){
// // // // // // // // //     // console.log(e.target.value);
// // // // // // // // //     SetInput(e.target.value) 
// // // // // // // // //   }
// // // // // // // // //   function done(){
// // // // // // // // //     SetData(input)

// // // // // // // // //   }
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h2>{data}</h2>
// // // // // // // // //       <input type='text' name='input'  placeholder='Enter your name' onChange={fun1}/>
// // // // // // // // //       <button onClick={done}>click</button>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App


// // // // // // // // // import React from 'react'
// // // // // // // // // import Form from './Form'

// // // // // // // // // const App = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <Form/>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App



// // // // // // // // // import React from 'react'

// // // // // // // // // const App = () => {
// // // // // // // // //     let [count,SetCount]= useState(0);
// // // // // // // // //     useEffect(()=>{
// // // // // // // // //         console.log("hello");
        
// // // // // // // // //     },[])


// // // // // // // // // return (
// // // // // // // // //     <div>
// // // // // // // // //         <h2>{count}</h2>
// // // // // // // // //         <button onClick={()=>SetCount(count+1)}>click</button>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default App
// // // // // // // // import React,{useState,useEffect } from "react";

// // // // // // // // const App = () => {

// // // // // // // //     const [count, setCount] = useState(0);

// // // // // // // //     useEffect(() => {
// // // // // // // //         console.log("hello");
// // // // // // // //     }, []);

// // // // // // // //     return (
// // // // // // // //         <div>
// // // // // // // //             <h2>{count}</h2>

// // // // // // // //             <button onClick={() => setCount(count + 1)}>
// // // // // // // //                 Click
// // // // // // // //             </button>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // export default App;


// // // // // // // // //import React, { useState, useEffect } from 'react';

// // // // // // // // // const App = () => {

// // // // // // // // //     let [count,setCount]=  useState(0);
// // // // // // // // //     useEffect(() => {
// // // // // // // // //     console.log("hello");
// // // // // // // // //     }, [city]);

// // // // // // // // //     return (
// // // // // // // // //         <div>
// // // // // // // // //             <h2>{count}</h2>

// // // // // // // // //             <button onClick={() => setCity("manali")}>
// // // // // // // // //                 Change
// // // // // // // // //             </button>
// // // // // // // // //             <button onClick={() => setCity(count+1)}>
// // // // // // // // //                 click
// // // // // // // // //             </button>
// // // // // // // // //         </div>
// // // // // // // // //     );
// // // // // // // // // }

// // // // // // // // // export default App;


// // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // const App = () => {

// // // // // // // //     let [count, setCount] = useState(0);
// // // // // // // //     let [city, SetCity]=useState("Goa")
// // // // // // // //     useEffect(() => {
// // // // // // // //            // console.log("hello");
// // // // // // // //            async function call(){
// // // // // // // //             let res = await fetch("https://jsonplaceholder.typicode.com/todos")
// // // // // // // //             let data = await res.json()
// // // // // // // //             console.log(data);
            
// // // // // // // //            }
// // // // // // // //            call()

// // // // // // // //     }, []);

// // // // // // // //     return (
// // // // // // // //         <div>
// // // // // // // //             <h2>{count}</h2>
// // // // // // // //             <h4>{city}</h4>

// // // // // // // //             <button onClick={()=> SetCity("hii")}>Change</button>
// // // // // // // //             <button onClick={() => setCount(count + 1)}>Click</button>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // export default App;


// // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // const App = () => {

// // // // // // //     let [ApiData,SetApiData] = useState([]);
    
// // // // // // //     useEffect(() => {
// // // // // // //            // console.log("hello");
// // // // // // //            async function call(){
// // // // // // //             let res = await fetch("https://jsonplaceholder.typicode.com/todos")
// // // // // // //             let data = await res.json()
// // // // // // //             // console.log(data);
// // // // // // //             SetApiData(data)
            
// // // // // // //            }
// // // // // // //            call()

// // // // // // //     }, []);

// // // // // // //     return (
// // // // // // //         <div>
// // // // // // //             {
// // // // // // //                 ApiData.map((a)=>{
// // // // // // //                     return(
// // // // // // //                         <div>
// // // // // // //                             <h1>{a.id}</h1>
// // // // // // //                         </div>
// // // // // // //                     )
// // // // // // //                 })
// // // // // // //             }
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }

// // // // // // // export default App;


// // // // // // import { useState, useEffect } from "react";
// // // // // // import Search from "./Task";

// // // // // // const App = () => {
// // // // // //   const [ApiData, setApiData] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     async function call() {
// // // // // //       let res = await fetch("https://dummyjson.com/products");
// // // // // //       let data = await res.json();

// // // // // //       setApiData(data.products);
// // // // // //     }

// // // // // //     call();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <>
// // // // // //       <h1>Products</h1>

// // // // // //       <Search />

// // // // // //       {ApiData.map((item) => (
// // // // // //         <h3 key={item.id}>{item.title}</h3>
// // // // // //       ))}
// // // // // //     </>
// // // // // //   );
// // // // // // };


// // // // // // import ProductCard from "./components/ProductCard";

// // // // // // <div className="products-container">
// // // // // //   {ApiData.map((item) => (
// // // // // //     <ProductCard key={item.id} product={item} />
// // // // // //   ))}
// // // // // // </div>

// // // // // // export default App;


// // // // // import { useState, useEffect } from "react";
// // // // // import Search from "./Task";
// // // // // import ProductCard from "./components/ProductCard";

// // // // // const App = () => {
// // // // //   const [ApiData, setApiData] = useState([]);

// // // // //   useEffect(() => {
// // // // //     async function call() {
// // // // //       let res = await fetch("https://dummyjson.com/products");
// // // // //       let data = await res.json();

// // // // //       setApiData(data.products);
// // // // //     }

// // // // //     call();
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <h1>Products</h1>

// // // // //       <Search />

// // // // //       <div className="products-container">
// // // // //         {ApiData.map((item) => (
// // // // //           <ProductCard key={item.id} product={item} />
// // // // //         ))}
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default App;



// // // // // import { useState } from "react"

// // // // import { useEffect } from "react"
// // // // import { useState } from "react"

// // // // // import { useState } from "react"
// // // // // import Home from "./Home"

// // // // // const App = () => {
// // // // //        let [count,SetCount]=    useState(0)
// // // // //   function fun1(){
// // // // //     SetCount(count+1)

// // // // //   }
// // // // //   return (
// // // // //     <div>
// // // // //       <h3>{count}</h3>
// // // // //        <button onClick={fun1}>click</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App



// // // // // import React, { useState } from 'react'
// // // // // const App = () => {
// // // // //        let [color,SetColor]=     useState("red")
// // // // //        function fun1(){
// // // // //         SetColor("green")
// // // // //        }
// // // // //   return (
// // // // //     <div style={{backgroundColor:color,height:"100vh"}}>
// // // // //       <button  onClick={fun1}>red</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App
// // // // // import React from 'react'

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <Home/>
// // // // //     </div>
// // // // //   )
// // // // // }
// // // // // const Home = () => {
// // // // //   return (
// // // // //     <div>Hello</div>
// // // // //   )
// // // // // }

// // // // // export default App


// // // // // import React from 'react'
// // // // // import Home from './Home'

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //     <Home/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App


// // // // // import React from 'react'
// // // // // import Home from './Home'
// // // // // import {New}  from './Home'
// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //     <Home/>
// // // // //     <New/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App



// // // // // import React from 'react'
// // // // // import Home from './Home'

// // // // //  // App->Home->A->B->C

// // // // // const App = () => {
// // // // //   let user="ank"
// // // // //   return (
// // // // //     <div><Home  data={user}/></div>
// // // // //   )
// // // // // }

// // // // // export default App



// // // // // const App = () => {
// // // // //   // let count=0
// // // // //       let [count,SetCount]=    useState(0)
// // // // //       function fun1(){
// // // // //         SetCount(count+1)
// // // // //         // count++
// // // // //       }

// // // // //   return (
// // // // //     <div>
// // // // //       <h4>{count}</h4>
// // // // //       <button onClick={fun1}>click</button>
// // // // //       <Home/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App



// // // // // import React from 'react'
// // // // // import New from "./New"
// // // // // import {About} from './New'

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <New/>
// // // // //       <About/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App



// // // // // import React from 'react'
// // // // // import Home from './Home'
// // // // // const App = () => {
// // // // //   let data="hello"
// // // // //   return (
// // // // //     <div>
// // // // //       <Home a={data}/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App


// // // // // import React, { useState } from 'react'
// // // // // import Home from './Home'

// // // // // const App = () => {
// // // // //   // let count=0
// // // // //   let [count,SetCount]=   useState(0)
  
// // // // //   function fun1(){
// // // // //     SetCount(count+1)
  
// // // // //   }
// // // // //   function fun2(){
// // // // //     SetCount(count-1)
  
// // // // //   }
// // // // //   function fun3(){
// // // // //     SetCount(0)
  
// // // // //   }
// // // // //   return (
// // // // //     <div>
// // // // //       <h1>{count}</h1>
// // // // //       <button onClick={fun1}>++</button>
// // // // //       <button onClick={fun2}>--</button>
// // // // //       <button onClick={fun3}>reset</button>


   
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App


// // // // // import React, { useState } from 'react'
// // // // // const App = () => {
// // // // //             let [input,SetInput]=     useState("")
// // // // //             let [data,SetData]=     useState('')
// // // // //   function fun1(e){
// // // // //     // console.log(e.target.value);
// // // // //     SetInput(e.target.value) 
// // // // //   }
// // // // //   function done(){
// // // // //     SetData(input)

// // // // //   }
// // // // //   return (
// // // // //     <div>
// // // // //       <h2>{data}</h2>
// // // // //       <input type='text' name='input'  placeholder='Enter your name' onChange={fun1}/>
// // // // //       <button onClick={done}>click</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App


// // // // // import React from 'react'
// // // // // import Form from './Form'

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <Form/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // // import React, { useState } from 'react'

// // // // // const App = () => {
// // // // //             let [input,SetInput]=      useState("")
// // // // //             let [data,SetData]=      useState("")
// // // // //   function fun1(e){
// // // // //     // console.log(e.target.type);
// // // // //     SetInput(e.target.value) 
// // // // //   }
// // // // //   function done(){
// // // // //     SetData(input)
// // // // //     SetInput("")

// // // // //   }
// // // // //   return (
// // // // //     <div>
// // // // //       <h2>{data}</h2>
// // // // //       <input   type='text'  name='input'  value={input}  onChange={fun1}/>
// // // // //       <button onClick={done}>click</button>
// // // // //       {/* <input type='email'/> */}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // // import React from 'react'
// // // // // import Form from './Form'

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <Form/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // // import React from 'react'
// // // // // import Form from './Form'

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <Form/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App





// // // // // import './App.css'
// // // // // const App = () => {
// // // // //       let [ApiData,SetApiData]=    useState([])
// // // // //       useEffect(()=>{
// // // // //               //  console.log("hello"); 
// // // // //               async  function call(){
// // // // //                 let res=  await  fetch("https://dummyjson.com/products")
// // // // //                 let data=        await   res.json()
// // // // //                 console.log(data.products);
// // // // //                 SetApiData(data.products)
// // // // //               }
// // // // //               call()
// // // // //       },[])
      
// // // // //   return (
// // // // //     <div id="parent_div"   className="">
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // // import React from 'react'
// // // // // import Task from "./Task"

// // // // // const App = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <Task/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App
// // // // //


// // // // import React from 'react'

// // // // const A = ({val}) => {
// // // //   return (
// // // //     <div>{val}</div>
// // // //   )
// // // // }

// // // // export default A




// // // // import Todo from "./todo";

// // // // function App() {
// // // //   return (
// // // //     <>
// // // //       <Todo />
// // // //     </>
// // // //   );
// // // // }

// // // // export default App;



// // // import React from 'react'
// // // import Todo from "./Todo"

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <Todo/>
// // //     </div>
// // //   )
// // // }

// // // export default App



// // import React from 'react'
// // import Home from "./Home"

// // //main-> app-> A-> b-> C



// // import NavBar from "./NavBar"

// // import { Route, Routes } from "react-router-dom"
// // import Cart from "./Cart"

// // const App = () => {
// //   let [apiData,SetApiData] =   useState([])
// //  let [cart,SetCart]= useState([])
// //   return (

// //     <div>
// //       <NavBar/>
// //       <Routes>
// //         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
// //         <Route path="/cart" element={<Cart cart={cart}/>}/>

// //       </Routes>
// //     </div>
// //   )
// // }

// // export default App




// import React from 'react'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Home from "./Home"

const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App