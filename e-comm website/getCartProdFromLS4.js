import { updatedCartValueIcon } from "./updatingCartValueIcon5";

export let getCartProdFromLS = () => { 
    
    let cartProds = localStorage.getItem("cartProdsLS");

    if (!cartProds){
        return []
    }
    else if(cartProds){
        return JSON.parse(cartProds)
    }


    updatedCartValueIcon(cartProds)


    return cartProds

}