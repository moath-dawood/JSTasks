let count = 0
let counter = document.getElementById("count")
let saved = document.getElementById("save")
function increment(){
    count ++
    counter.textContent = count
}
function save(){
    let countStr = count + " - "
    saved.textContent += countStr
    count = 0
    counter.textContent = 0 
}