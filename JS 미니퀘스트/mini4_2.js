

function workAsync() {
    setTimeout(() => { 
    console.log("Async Operation Complete")
},1000);
}
console.log("Start");
workAsync();
console.log("End");
