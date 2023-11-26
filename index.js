// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.splice(3,0,name)
}

function destructivelyPrependCat(name){
    cats.splice(0,0,name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1)
}

function appendCat(name){
    let newCats = [...cats,name]
    return newCats
}

function prependCat(name){
    let newCats = [name,...cats]
    return newCats
}

function removeLastCat(){
    let newCats = [...cats]
    newCats.pop()
    return newCats
}
function removeFirstCat(){
    let newCats = [...cats]
    newCats.shift()
    return newCats
}


destructivelyAppendCat('Ralph')
destructivelyPrependCat('Ralph')
destructivelyRemoveLastCat()
destructivelyRemoveFirstCat()
appendCat('Arnold')
prependCat('Arnold')
removeLastCat()
removeFirstCat()