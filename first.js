/* const px = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Successs")
    }, 1000);
}) */

const py = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Failure")
    }, 1000);
}) 


py.then(console.log).catch(console.log)