
function addingEventListener(){
    const input = document.getElementById("button")
    input.addEventListener("click", function addEventListener(){
        alert("I was pushed!")
    })
}
input.addEventListener("click", clickAlert)