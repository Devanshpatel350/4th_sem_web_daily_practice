// // // button=document.querySelector("button");
// // // button.addEventListener("click",()=>{
// // //     console.log("Button Clicked");
// // // })
// // fetch("https://dummyjson.com/products").then((response) => {
// //     return response.json();
// // }).then((data) => {
// //     let body = document.querySelector("body");
// //     // console.log(data.products[3].brand);
// //     data.products.map((a) => {
// //         console.log(a.thumbnail);
// //         body.innerHTML += <div style="border: 1px solid black;
// //         padding: 20px;
// //         margin: 20px;
// //         width: 300px;
// //         border-radius: 21px;
// //         ">
// //         <img src="${a.thumbnail}" width="100px"/>
// //         <h2>${a.title}</h2>
// //         <h2>${a.brand}</h2>
// //         <h3>${a.price}</h3>
// //         <button>Buy Now</button>
// //         </div>;
// //     })
// // })




// fetch("https://dummyjson.com/products").
// then((res)=>{
//     return res.json()
// }).then((data)=>{
//    let body=   document.querySelector("body")
//     // console.log(data.products[1].brand);
//     data.products.map((a)=>{
//         console.log(a);
//         body.innerHTML+=`<div style="border:1px solid black;
//            padding:20px;
//            margin:20px;
//            width:300px;
//            border-radius:21px"> 
//            <img src="${a.
//             thumbnail}" width="100px">
//             <h2>  ${a.title}</h2>
//             <h2>  ${a.brand}</h2>
//             <button onclick="addToCart(${a.id})">add </button>
//             </div>
//      `
//     })
//     window.allP=data.products
// })
// console.log(window);
// function addToCart(id){

//     // console.log(id);
//  let data=    window.allP.find((a)=>{
//         return a.id==id


//     })
//     console.log(data);
//     localStorage.setItem("item",JSON.stringify(data))
    

    
// }
//
//
//
//
//
//
//
//
//