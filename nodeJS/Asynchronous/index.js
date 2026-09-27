console.log("A")

setTimeout(() => { console.log("B")
    
}, 100);


console.log("c")

//call back function
function greet(name) {
    console.log("Hello,"+ name);
    
}
function processUser(callback) {
    
    const userName = "Naitik";
    callback(userName);

}

processUser(greet)