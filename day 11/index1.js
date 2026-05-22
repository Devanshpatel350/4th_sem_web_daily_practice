// function showTime() {
// 	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
// }
// showTime();
// setInterval(function () {
// 	showTime();
// }, 1000);

let obj={
    id:1,
    firstName:"Dev",
    lastName:"patel",
    fullName:function(city,age){
console.log(this.firstName+ this.lastName+ city +age);
        
    }
}
// Object.fullName()
let userOne={
    id:10,
    firstName:"chockroch",
    lastName:"janta party",
}
//obj.fullName.call(userOne,"delhi");
obj.fullName.apply(userOne,["delhi",51])