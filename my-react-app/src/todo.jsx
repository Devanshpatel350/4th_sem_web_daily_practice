// // // import { useState } from "react";
// // // import "./App.css";

// // // function Todo() {
// // //   const [task, setTask] = useState("");
// // //   const [tasks, setTasks] = useState([]);

// // //   const addTask = () => {
// // //     if (task.trim() !== "") {
// // //       setTasks([...tasks, task]);
// // //       setTask("");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container">
// // //       <h1>Todo List</h1>

// // //       <div className="input-box">
// // //         <input
// // //           type="text"
// // //           placeholder="Enter a task"
// // //           value={task}
// // //           onChange={(e) => setTask(e.target.value)}
// // //         />

// // //         <button onClick={addTask}>Add</button>
// // //       </div>

// // //       <ul>
// // //         {tasks.map((item, index) => (
// // //           <li key={index}>{item}</li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default Todo;






// // import React, { useState } from "react";
// // import "./Todo.css";

// // const Todo = () => {
// //   const [task, setTask] = useState("");
// //   const [todos, setTodos] = useState([]);
// //   return (
// //     <div className="container">
// //       <h1>Todo List</h1>

// //       <div className="input-box">
// //         <input
// //           type="text"
// //           name="task"
// //           value={task}
// //           placeholder="Enter a task"
// //           onChange={(e)=>setTask(e.target.value)}
  
// //         />

// // <button onClick={()=>setTodos([...todos,task])}>add</button>
// //       </div>
// //       <div className="todo-list">
// //         {todos.map((todo, index) => (
// //           <div className="todo-item" key={index}>
// //             <span>{todo}</span>

// //             <div className="actions">
// //               <button >
// //                 Edit
// //               </button>

// //               <button >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Todo;



// import React, { useEffect, useState } from "react";
// import "./Todo.css";

// const Todo = () => {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])








//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={()=>setTodos([...todos,task])}>add</button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button >
//                 Edit
//               </button>

//               <button >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;





//import React, { useReducer } from 'react'
const Todo = () => { 
    let  intialData={
        input:"",
        todos:[],
        index:null
    }
    function reduser(state,action){
        if(action.type=="SET_INP"){
            return{
                ...state,
                input:action.payload,
                
            }
        }
        else if(action.type=="ADD_TODO"){
            return{
                todos:[...state.todos,state.input]
            }
        }else if(action.type=="DELET_TODO"){
            return{
                ...state,
                todos:state.todos.filter((_,id)=>{
                    return id!==action.payload
                })
            }
        }else if(action.type=="UPDATE_TODO"){
            let updateTodos=[...state.todos]
            updateTodos[state.index]=state.input
            return{
                ...state,
                todos:updateTodos,
                input:"",
                index:null
            }
        }else if(action.type=="EDIT_TODO"){
            return{
                ...state,
                input:state.todos[action.payload],
                index:action.payload
            }
        }

    }
      let [state,disptach]=   useReducer(reduser,intialData)
      function handleSubmit(){
        if(state.index!==null){
            disptach({type:"UPDATE_TODO"})
        }else{
            disptach({type:"ADD_TODO"})
        }
      }
  return (
    <div>        
        <input  name='input'  value={state.input}  onChange={(e)=>disptach({type:"SET_INP",payload:e.target.value})}/>
        <button onClick={handleSubmit}>{state.index!==null?"update":"add"}</button>
        {  
            state.todos.map((a,b)=>{
                return(<>
                <h4>{a}</h4>
                <button onClick={()=>disptach({type:"DELET_TODO",payload:b})}>delet</button>
                <button onClick={()=>disptach({type:"EDIT_TODO",payload:b})}>edit</button>
                </>)
            })
        }
    </div>
  )
}

export default Todo