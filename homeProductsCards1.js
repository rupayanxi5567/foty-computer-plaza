import { addToCart } from "./addToCart3"
import { homeQuantityToggle } from "./homeQuantityToggle2"


let productContainer = document.getElementById("productContainer")
let productTemplate = document.getElementById("productTemplate")


export let showProductsContainer = (products)  => {


    // products details showing


    if (!products) {
        return false
    }
    else if(products){
        products.forEach((currElem) => {
            
            let {id, name, category, brand, price, stock, expPrice, description, image} = currElem

            let productClones = document.importNode(productTemplate.content, true);

            productClones.getElementById("cardValue").setAttribute("id", `card${id}`)
            productClones.querySelector(".productName").textContent = name
            productClones.querySelector(".productImage").src = image
            productClones.querySelector(".category").textContent = category
            productClones.querySelector(".productStock").textContent = stock
            // productClones.querySelector(".productStock").textContent = stock
            productClones.querySelector(".productPrice").textContent = `$${price}`
            productClones.querySelector(".productActualPrice").textContent = `$${price * 4}`
            productClones.querySelector(".productDescription").textContent = description

            

            

            productClones.querySelector(".stockElement").addEventListener( "click", (e) => {
                homeQuantityToggle(e, id, stock)
            } ) // inc and dec func creating

            productClones.querySelector(".add-to-cart-button").addEventListener( "click", (e) => {
                addToCart (e, id, stock)
            })  // add to cart fnc


            productContainer.append(productClones)


            









        })
    }

}