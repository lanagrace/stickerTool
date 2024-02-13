 let x, y;
 
 // create variable for the container 
 console.log("hi")
 const container = document.getElementById("container")
 // add an event listener for "click", name is "addDiv" and link it to the container variable
 container.addEventListener("click", function(event) {
  addDiv(event)
 })


 // create your function "addDiv", don't forget that the number will have to get "+ 1" at each click; otherwise it's not a counter..
// window.onload =
  function addDiv(event) {
     // random left and top position storred in variables, use "Math.floor()" and "Math.random() * maximum" (maximum is 101)
     //for(let i = 0; i < 30; i++){}
     const left = event.clientX //Math.floor(Math.random() * 101)
     const top = event.clientY //Math.floor(Math.random() * 101)
     const w = Math.floor(Math.random() * 100*1.3)
     
     // dynamically create a div element using document.createElement
     const div = document.createElement("div")
     // add a class name, some text inside of the div, and use the variables for the position
     div.classList.add("bubble")
     div.style.top = `${top-20}px`
     div.style.left = `${left-20}px`
     div.style.width = `${w}px`
     div.style.height = `${w}px`

     // call the container and append the new child to it
     container.appendChild(div)
    
 }