export let homeQuantityToggle = (e, id, stock ) => { 

    let currCardElem = document.getElementById(`card${id}`)
    console.log(currCardElem)

    // let producQuantity = document.querySelector(".productQuantity")
    let producQuantity = currCardElem.querySelector(".productQuantity");


    let quantity = parseInt(producQuantity.getAttribute("data_quantity")) || 1

    if (e.target.className === "cartIncrement"){
        if (quantity < stock){
            quantity++
        }
        else if(quantity === stock){
            quantity = stock
        }
    }

    if(e.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity-- 
        }
        else if(quantity === 1){
            quantity = 1
        }
    }

    producQuantity.innerHTML = quantity
    producQuantity.setAttribute("data_quantity", quantity)
    return quantity



}






// cartIncrement
// cartDecrement