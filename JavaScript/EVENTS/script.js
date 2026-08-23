
let box1 = document.getElementById("box1")
let box2=document.getElementById("box2")
box1.addEventListener("mouseenter", () => {
    box1.style.backgroundColor = "black"
})

box1.addEventListener("mouseleave", () => {
    box1.style.backgroundColor = "red"

})
box2.addEventListener("click", () => {
    box2.innerHTML = "Hey so you clicked on me ? How dare you ? "
    
    })
console.log("herllo")