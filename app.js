import promesa from './Modulos/main.js';

// const doTask = async (iterations) => {
//     const numbers = [];
//     for (let i = 0; i < iterations; i++) {
//       const number = 1 + Math.floor(Math.random() * 6);
//       numbers.push(number);
//       if (number === 6) {
//         return {
//           error: true,
//           message: "Se ha sacado un 6"
//         };
//       }
//     }
//     return {
//       error: false,
//       value: numbers
//     };
// }
// try {
//     let data = await doTask(10);
//     if(!data.error) throw(data);
//     console.log(data);
    
// } catch (error) {
//     console.error(error);
// }



addEventListener("DOMContentLoaded", (e)=>{
    const myBoton = document.querySelector("#myBoton");
    myBoton.addEventListener("click", async(e)=>{
        console.log( await promesa({iterations: 1000}));
    })
})



promesa({id: 1, name: Math.random()*1000})
.then((res)=>{
    console.log(res);
})
promesa({id: 2, name: Math.random()*1000})
.then((res)=>{
    console.log(res);
})
promesa({id: 3, name: Math.random()*1000})
.then((res)=>{
    console.log(res);
})
Promise.all([promesa({id: 1, name: Math.random()*1000}),promesa({id: 2, name: Math.random()*1000}),promesa({id: 3, name: Math.random()*1000})])
.then((res)=>{
    console.log(res);
})

// console.log("Hola Como estas");
// setTimeout(() => {
//     console.log("Hola Como estas soy el temporizador del archivo app.js");
// }, 2000);