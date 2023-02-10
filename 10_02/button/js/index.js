let rowNode = document.querySelector(`#row`)
//console.log(rowNode)

rowNode.innerHTML = `здесь будет рисунок`

let button1Node = document.querySelector(`#button1`)
let button2Node = document.querySelector(`#button2`)
let button3Node = document.querySelector(`#button3`)
//console.log(button1Node)

button1Node.addEventListener(`click`, ()=>{
    rowNode.innerHTML = `<img src="assets/apple.png" alt="">`
})

button2Node.addEventListener(`click`, ()=>{
    rowNode.innerHTML = `<img src="assets/cheese.png" alt="">`
})

button3Node.addEventListener(`click`, ()=>{
    rowNode.innerHTML = `<img src="assets/eggs.png" alt="">`
})