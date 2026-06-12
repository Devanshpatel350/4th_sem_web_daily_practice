// // import React, { createContext, useReducer } from "react";
// // export const storeContext = createContext();
// // const initialState = {
// //       input:"",
// //       todos:[]
// // };
// // function reducer(store, action) {
// //     console.log(action,"acc");
    
// //     if(action.type=="Set_inp"){
// //         return{
// //             ...store,
// //             input:action.payload
// //         }
// //     }else if(action.type=="Add_todo"){
// //         return{
// //             ...store,
// //             todos:[...store.todos,store.input]
// //         }
// //     }
// // }
// // const Context = ({ children }) => {
// //   const [store, dispatch] = useReducer(reducer, initialState);

// //   return (
// //     <storeContext.Provider value={{ store, dispatch }}>
// //       {children}
// //     </storeContext.Provider>
// //   );
// // };

// // export default Context;

// import { createContext, useReducer } from "react";

// let C=  createContext()
// export default C
// let data={
//     apiData:[],
//     cart:[]
// }

// const Context=({children})=>{
//     function reduser(state,action){
//         console.log(action,"actoionsnsnsnsnsnsns");
//         if(action.type=="add_Data"){
//             return{
//                 ...state,
//                 apiData:action.payload
//             }

//         }
        

//     }
//   let [state,dispatch]=  useReducer(reduser,data)
//     return(
//         <C.Provider value={{state,dispatch}}>
//               {children}
//         </C.Provider>
//     )

// }
// export {Context}