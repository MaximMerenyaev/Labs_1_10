let rowNode = document.querySelector(`#row`)
let onNode = document.querySelector(`#on`)
let offNode = document.querySelector(`#off`)
let contNode = document.querySelector(`#cont`)

console.log(contNode)

onNode.addEventListener(`click`, ()=>{
    rowNode.innerHTML = `<img class="img img-fluid" src="assets/light.png" />`
    contNode.classList.remove(`dark`)
    rowNode.classList.remove(`opacity-0`)
})

offNode.addEventListener(`click`, ()=>{
    rowNode.innerHTML = `<img class="img img-fluid" src="assets/dark.png" />`
    contNode.classList.add(`dark`)
    rowNode.classList.add(`opacity-0`)
})
