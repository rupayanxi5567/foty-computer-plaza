import { getCartProdFromLS } from "./getCartProdFromLS4";
import { updatedCartValueIcon } from "./updatingCartValueIcon5";


getCartProdFromLS()

export let addToCart = (e, id, stock) => { 

    let arrLocalStorageProd = getCartProdFromLS()
    
    let currProdElem = document.getElementById(`card${id}`);

    let quantity = currProdElem.querySelector(".productQuantity").innerText
    let price = currProdElem.querySelector(".productPrice").innerText

    
    price = price.replace("$", "")
    
    
    let existingProd = arrLocalStorageProd.find( (currProds) => { 
        return currProds.id === id
     } )
    
     if (existingProd){
        return false
     }
    
    
    
    price = Number(price * quantity)
    


    // console.log(quantity, price)


    let updatedCart = {id, price, quantity}
    arrLocalStorageProd.push(updatedCart)
    localStorage.setItem("cartProdsLS", JSON.stringify(arrLocalStorageProd))


    // updating the cart value
    updatedCartValueIcon(arrLocalStorageProd)

}